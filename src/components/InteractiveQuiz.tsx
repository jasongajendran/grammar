import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RefreshCw, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Zap, 
  Volume2,
  ShieldAlert,
  ThumbsUp,
  Star
} from 'lucide-react';
import { GrammarTopic, InteractiveExercise, WordClickerExercise, SentenceBuilderExercise, ErrorDetectiveExercise, MultipleChoiceExercise, ClauseMatcherExercise, StudyTheme } from '../types';
import { AudioButton } from './AudioButton';
import { playSound } from '../utils/storage';
import { APP_IMAGES } from '../utils/assets';

interface InteractiveQuizProps {
  topic: GrammarTopic;
  onCompleteQuiz: (scorePercent: number) => void;
  speechRate: number;
  studyTheme?: StudyTheme;
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({
  topic,
  onCompleteQuiz,
  speechRate,
  studyTheme = 'pastel-warm',
}) => {
  const exercises = topic.exercises;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedWordIndices, setSelectedWordIndices] = useState<number[]>([]);
  const [builtSentenceWords, setBuiltSentenceWords] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentExercise = exercises[currentIndex];
  const isDark = studyTheme === 'pastel-night' || studyTheme === 'dark-study';
  const isSage = studyTheme === 'pastel-sage' || studyTheme === 'calm-sage';
  const isLavender = studyTheme === 'pastel-lavender';
  const isPeach = studyTheme === 'pastel-peach';

  const getQuizCardStyle = () => {
    if (isDark) return 'bg-[#202630] border-[#343E4E] text-[#E5EAF2]';
    if (isSage) return 'bg-[#DEECE2] border-[#C7DBD0] text-[#1C2922]';
    if (isLavender) return 'bg-[#E4DCED] border-[#CEC2DC] text-[#241E2F]';
    if (isPeach) return 'bg-[#EFE1D4] border-[#DDC8B6] text-[#2C211B]';
    return 'bg-[#ECE5DA] border-[#DDD5C7] text-[#252830]';
  };

  const getQuizHeaderStyle = () => {
    if (isDark) return 'bg-[#28303E] border-[#3E495D]';
    if (isSage) return 'bg-[#D3E4D8] border-[#BDD6C5]';
    if (isLavender) return 'bg-[#D9CEE4] border-[#C4B4D5]';
    if (isPeach) return 'bg-[#E5D4C4] border-[#D5C0AC]';
    return 'bg-[#E0D7C9] border-[#CDC1AF]';
  };

  const getExerciseBoxStyle = () => {
    if (isDark) return 'bg-[#181D25] border-[#333C4C]';
    if (isSage) return 'bg-[#EAF3EC] border-[#C5DCD0]';
    if (isLavender) return 'bg-[#EDE5F4] border-[#CEC1DD]';
    if (isPeach) return 'bg-[#F7EEE6] border-[#DFCFBF]';
    return 'bg-[#F5EFE4] border-[#D8CEBF]';
  };

  const handleResetCurrent = () => {
    setSelectedOption(null);
    setSelectedWordIndices([]);
    setBuiltSentenceWords([]);
    setIsSubmitted(false);
    setIsCorrect(false);
  };

  const handleSelectOption = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
    playSound('click');
  };

  const handleToggleWordIndex = (idx: number) => {
    if (isSubmitted) return;
    playSound('click');
    if (selectedWordIndices.includes(idx)) {
      setSelectedWordIndices(selectedWordIndices.filter(i => i !== idx));
    } else {
      setSelectedWordIndices([...selectedWordIndices, idx]);
    }
  };

  const handleAddWordToBuilder = (word: string, originalIndex: number) => {
    if (isSubmitted) return;
    playSound('click');
    setBuiltSentenceWords([...builtSentenceWords, word]);
  };

  const handleRemoveWordFromBuilder = (indexInBuilt: number) => {
    if (isSubmitted) return;
    playSound('click');
    const newWords = [...builtSentenceWords];
    newWords.splice(indexInBuilt, 1);
    setBuiltSentenceWords(newWords);
  };

  const handleSubmit = () => {
    if (isSubmitted || !currentExercise) return;

    let correct = false;

    if (currentExercise.type === 'multiple-choice') {
      const mc = currentExercise as MultipleChoiceExercise;
      correct = selectedOption === mc.correctIndex;
    } else if (currentExercise.type === 'word-clicker') {
      const wc = currentExercise as WordClickerExercise;
      const sortedSelected = [...selectedWordIndices].sort((a, b) => a - b);
      const sortedTargets = [...wc.targetIndices].sort((a, b) => a - b);
      correct = 
        sortedSelected.length === sortedTargets.length &&
        sortedSelected.every((val, i) => val === sortedTargets[i]);
    } else if (currentExercise.type === 'sentence-builder') {
      const sb = currentExercise as SentenceBuilderExercise;
      const constructed = builtSentenceWords.join(' ').trim();
      correct = constructed === sb.correctSentence.trim();
    } else if (currentExercise.type === 'error-detective') {
      const ed = currentExercise as ErrorDetectiveExercise;
      correct = selectedWordIndices.length === 1 && selectedWordIndices[0] === ed.errorWordIndex;
    } else if (currentExercise.type === 'clause-matcher') {
      correct = true;
    }

    setIsCorrect(correct);
    setIsSubmitted(true);

    if (correct) {
      playSound('correct');
      setCorrectAnswersCount(prev => prev + 1);
    } else {
      playSound('incorrect');
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
      handleResetCurrent();
    } else {
      const finalCorrect = isCorrect ? correctAnswersCount + 1 : correctAnswersCount;
      const scorePercent = Math.round((finalCorrect / exercises.length) * 100);
      setQuizFinished(true);
      playSound('complete');

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#10b981', '#3b82f6', '#ec4899'],
        });
      } catch {
        // Fallback
      }

      onCompleteQuiz(scorePercent);
    }
  };

  const handleRetryEntireQuiz = () => {
    setCurrentIndex(0);
    setCorrectAnswersCount(0);
    setQuizFinished(false);
    handleResetCurrent();
  };

  if (!currentExercise) {
    return (
      <div className={`p-6 text-center rounded-2xl border ${getQuizCardStyle()}`}>
        No interactive exercises configured for this topic yet.
      </div>
    );
  }

  // Finished Summary View
  if (quizFinished) {
    const finalScore = Math.round((correctAnswersCount / exercises.length) * 100);
    const isMastered = finalScore >= 80;

    const celebrationPraise = isMastered 
      ? `Splendid mastery! You scored ${finalScore} percent and conquered ${topic.title} with outstanding grammar accuracy!`
      : `Good effort! You scored ${finalScore} percent on ${topic.title}. Practise once more to claim full mastery!`;

    return (
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 20 }}
        className={`p-6 sm:p-10 rounded-3xl border shadow-md text-center relative overflow-hidden ${getQuizCardStyle()}`}
      >
        {/* Animated Trophy Artwork */}
        <div className="flex justify-center mb-5 relative">
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, -2, 2, 0]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden border-4 border-amber-500 shadow-xl relative"
          >
            <img 
              src={APP_IMAGES.trophy}
              alt="Golden Grammar Trophy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating Stars */}
          <motion.div 
            animate={{ y: [0, -8, 0], rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="absolute -top-2 right-1/4 text-amber-500"
          >
            <Star size={28} className="fill-amber-400" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 8, 0], rotate: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
            className="absolute -bottom-2 left-1/4 text-amber-500"
          >
            <Sparkles size={24} className="fill-amber-400" />
          </motion.div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-heading font-extrabold mb-1.5 flex items-center justify-center gap-2">
          <span>{isMastered ? '🏆 Lesson Mastered!' : '⭐ Great Effort!'}</span>
        </h3>
        <p className="text-sm sm:text-base opacity-85 mb-6 max-w-md mx-auto">
          You answered <strong className="font-extrabold">{correctAnswersCount}</strong> out of{' '}
          <strong className="font-extrabold">{exercises.length}</strong> challenges correctly in {topic.title}.
        </p>

        {/* Score Ring & Audio Praise */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className={`p-4 sm:p-5 rounded-2xl border ${getQuizHeaderStyle()} flex items-center gap-4 shadow-sm`}>
            <div className="text-4xl sm:text-5xl font-heading font-black text-amber-600 dark:text-amber-400">
              {finalScore}%
            </div>
            <div className="text-left border-l border-black/10 dark:border-white/10 pl-3">
              <div className="text-xs font-black uppercase tracking-wider opacity-90">
                {isMastered ? 'Mastery Tier' : 'Practice Tier'}
              </div>
              <div className="text-xs opacity-75">
                Target: 80% to claim badge
              </div>
            </div>
          </div>

          <AudioButton
            text={celebrationPraise}
            textId={`quiz-praise-${topic.id}-${finalScore}`}
            speechRate={speechRate}
            size="md"
            showLabel
            label="Listen to Praise"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleRetryEntireQuiz}
            className={`px-6 py-3 rounded-full font-bold text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer border shadow-sm ${
              isDark
                ? 'bg-[#29303D] hover:bg-[#343D4E] text-slate-200 border-[#3D475B]'
                : 'bg-[#DCD2C3] hover:bg-[#D0C5B4] text-slate-900 border-[#BEB2A0]'
            }`}
          >
            <RefreshCw size={16} />
            Practise Again
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className={`rounded-3xl border shadow-xs overflow-hidden ${getQuizCardStyle()}`}>
      {/* Quiz Header Bar */}
      <div className={`px-5 py-3.5 border-b flex items-center justify-between gap-2 ${getQuizHeaderStyle()}`}>
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs sm:text-sm font-bold">
            {currentIndex + 1}
          </div>
          <span className="text-xs sm:text-sm font-bold">
            Exercise {currentIndex + 1} of {exercises.length}
          </span>
          <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${
            isDark
              ? 'bg-slate-800 text-slate-100 border-slate-700'
              : 'bg-slate-900 text-white border-slate-800'
          }`}>
            Step {currentExercise.difficultyStep}/4
          </span>
        </div>

        {/* Question Audio Button */}
        <AudioButton
          text={`${currentExercise.prompt} ${currentExercise.instruction}`}
          textId={`quiz-prompt-${topic.id}-${currentExercise.id}`}
          speechRate={speechRate}
          size="sm"
          showLabel
          label="Listen"
        />
      </div>

      {/* Progress Dots */}
      <div className={`w-full h-1.5 flex ${isDark ? 'bg-[#2B313D]' : 'bg-[#D8CEBE]'}`}>
        {exercises.map((ex, idx) => (
          <div
            key={ex.id}
            className={`h-full flex-1 transition-colors ${
              idx < currentIndex
                ? 'bg-emerald-600'
                : idx === currentIndex
                ? 'bg-amber-600'
                : isDark ? 'bg-[#2B313D]' : 'bg-[#D8CEBE]'
            }`}
          />
        ))}
      </div>

      {/* Question Body */}
      <div className="p-5 sm:p-7">
        <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1.5">
          {currentExercise.prompt}
        </h4>
        <p className="text-sm sm:text-base opacity-75 mb-6">
          {currentExercise.instruction}
        </p>

        {/* 1. Multiple Choice Interface */}
        {currentExercise.type === 'multiple-choice' && (
          <div className="space-y-3 mb-6">
            {(currentExercise as MultipleChoiceExercise).options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const mc = currentExercise as MultipleChoiceExercise;
              
              let optionStyle = isDark
                ? 'bg-[#181D25] hover:bg-[#252D3A] border-[#333C4C] text-[#E5EAF2]'
                : 'bg-[#F4ECE0] hover:bg-[#EDE3D4] border-[#D6CBBB] text-[#252830]';

              if (isSubmitted) {
                if (idx === mc.correctIndex) {
                  optionStyle = isDark
                    ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold'
                    : 'bg-emerald-100/90 border-emerald-400 text-emerald-950 font-bold';
                } else if (isSelected && !isCorrect) {
                  optionStyle = isDark
                    ? 'bg-rose-950/60 border-rose-500 text-rose-200 line-through'
                    : 'bg-rose-100/90 border-rose-400 text-rose-950 line-through';
                } else {
                  optionStyle = isDark
                    ? 'bg-[#1C2027]/50 border-[#2B323F] text-slate-500 opacity-40'
                    : 'bg-[#E5DDCF]/50 border-[#CDC3B3] text-slate-500 opacity-40';
                }
              } else if (isSelected) {
                optionStyle = isDark
                  ? 'bg-slate-800 border-2 border-amber-500 text-white font-bold'
                  : 'bg-amber-100/90 border-2 border-amber-600 text-slate-950 font-bold shadow-xs';
              }

              return (
                <motion.button
                  key={idx}
                  type="button"
                  id={`mc-option-${idx}`}
                  disabled={isSubmitted}
                  whileHover={!isSubmitted ? { scale: 1.01 } : {}}
                  whileTap={!isSubmitted ? { scale: 0.99 } : {}}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full p-4 rounded-2xl border text-left text-base sm:text-lg font-medium transition-all flex items-center justify-between cursor-pointer ${optionStyle}`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs sm:text-sm font-bold shrink-0 ${
                      isSelected 
                        ? 'border-amber-600 bg-amber-600 text-white' 
                        : isDark
                        ? 'border-[#424C5F] text-slate-300 bg-[#282F3C]'
                        : 'border-[#C2B5A2] text-slate-700 bg-[#DBD0C0]'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>
                  {isSubmitted && idx === mc.correctIndex && (
                    <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                  )}
                  {isSubmitted && isSelected && !isCorrect && (
                    <XCircle size={20} className="text-rose-600 shrink-0" />
                  )}
                </motion.button>
              );
            })}
          </div>
        )}

        {/* 2. Word Clicker Interface */}
        {currentExercise.type === 'word-clicker' && (
          <div className="mb-6">
            <div className={`p-6 rounded-2xl border mb-3 text-center ${getExerciseBoxStyle()}`}>
              <div className="flex flex-wrap items-center justify-center gap-3 text-base sm:text-lg lg:text-xl">
                {(currentExercise as WordClickerExercise).words.map((word, idx) => {
                  const isSelected = selectedWordIndices.includes(idx);
                  const wc = currentExercise as WordClickerExercise;
                  const isTarget = wc.targetIndices.includes(idx);

                  let wordStyle = isDark
                    ? 'bg-[#232933] hover:bg-[#2F3745] border-[#394354] text-slate-200'
                    : 'bg-[#EAE1D3] hover:bg-[#E0D5C5] border-[#CDC1B0] text-slate-900';

                  if (isSubmitted) {
                    if (isTarget) {
                      wordStyle = 'bg-emerald-600 text-white border-emerald-700 font-bold shadow-xs';
                    } else if (isSelected && !isTarget) {
                      wordStyle = 'bg-rose-600 text-white border-rose-700 line-through';
                    }
                  } else if (isSelected) {
                    wordStyle = 'bg-amber-600 text-white border-amber-700 font-bold shadow-xs';
                  }

                  return (
                    <motion.button
                      key={idx}
                      type="button"
                      disabled={isSubmitted}
                      whileHover={!isSubmitted ? { scale: 1.05 } : {}}
                      whileTap={!isSubmitted ? { scale: 0.95 } : {}}
                      onClick={() => handleToggleWordIndex(idx)}
                      className={`px-3.5 py-2 rounded-xl border text-base sm:text-lg font-semibold transition-all cursor-pointer ${wordStyle}`}
                    >
                      {word}
                    </motion.button>
                  );
                })}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 text-center">
              Target: Find all words functioning as <strong className="text-slate-950 dark:text-white font-extrabold px-2 py-0.5 rounded bg-amber-400/30 dark:bg-amber-400/25 border border-amber-500">{(currentExercise as WordClickerExercise).targetCategoryLabel}</strong>.
            </p>
          </div>
        )}

        {/* 3. Sentence Builder Interface */}
        {currentExercise.type === 'sentence-builder' && (
          <div className="mb-6">
            {/* Assembly Area */}
            <div className={`min-h-[72px] p-4 rounded-2xl border-2 border-dashed mb-4 flex flex-wrap items-center gap-2.5 ${
              isDark ? 'bg-[#181D25] border-[#3D4759]' : 'bg-[#F4ECE0] border-[#D1C6B4]'
            }`}>
              {builtSentenceWords.length === 0 ? (
                <span className="text-sm opacity-60 italic">
                  Tap words below in the correct order to construct the sentence...
                </span>
              ) : (
                builtSentenceWords.map((word, idx) => (
                  <motion.button
                    layout
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    key={`${word}-${idx}`}
                    type="button"
                    disabled={isSubmitted}
                    onClick={() => handleRemoveWordFromBuilder(idx)}
                    className="px-3.5 py-2 bg-amber-600 text-white rounded-xl text-sm sm:text-base font-bold hover:bg-amber-700 transition-colors shadow-2xs cursor-pointer flex items-center gap-2"
                  >
                    <span>{word}</span>
                    {!isSubmitted && <span className="text-xs text-white/90">✕</span>}
                  </motion.button>
                ))
              )}
            </div>

            {/* Word Bank */}
            <div className={`flex flex-wrap items-center justify-center gap-2.5 p-4 sm:p-5 rounded-2xl border ${getExerciseBoxStyle()}`}>
              {(currentExercise as SentenceBuilderExercise).scrambledWords.map((word, idx) => {
                const timesUsed = builtSentenceWords.filter(w => w === word).length;
                const timesAvailable = (currentExercise as SentenceBuilderExercise).scrambledWords.filter(w => w === word).length;
                const isExhausted = timesUsed >= timesAvailable;

                return (
                  <motion.button
                    layout
                    whileHover={!isSubmitted && !isExhausted ? { scale: 1.05 } : {}}
                    whileTap={!isSubmitted && !isExhausted ? { scale: 0.95 } : {}}
                    key={idx}
                    type="button"
                    disabled={isSubmitted || isExhausted}
                    onClick={() => handleAddWordToBuilder(word, idx)}
                    className={`px-4 py-2.5 rounded-xl border text-sm sm:text-base font-semibold transition-all cursor-pointer ${
                      isExhausted
                        ? isDark ? 'bg-[#252B35] text-slate-600 border-[#2D3440] cursor-not-allowed opacity-40' : 'bg-[#DDD4C5] text-slate-400 border-[#CCC1AF] cursor-not-allowed opacity-40'
                        : isDark ? 'bg-[#232933] hover:bg-[#303744] text-slate-200 border-[#384254]' : 'bg-[#EAE0D1] hover:bg-[#DFD3C2] text-slate-900 border-[#C9BCAB] shadow-2xs'
                    }`}
                  >
                    {word}
                  </motion.button>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. Error Detective Interface */}
        {currentExercise.type === 'error-detective' && (
          <div className="mb-6">
            <div className={`p-6 rounded-2xl border mb-3 text-center ${
              isDark ? 'bg-rose-950/20 border-rose-900/30' : 'bg-rose-100/50 border-rose-200'
            }`}>
              <div className="flex flex-wrap items-center justify-center gap-3 text-base sm:text-lg lg:text-xl">
                {(currentExercise as ErrorDetectiveExercise).words.map((word, idx) => {
                  const isSelected = selectedWordIndices.includes(idx);
                  const ed = currentExercise as ErrorDetectiveExercise;
                  const isErrorWord = idx === ed.errorWordIndex;

                  let wordStyle = isDark
                    ? 'bg-[#181D25] hover:bg-rose-950/40 border-[#38404E] text-slate-200'
                    : 'bg-[#EAE0D1] hover:bg-rose-100 border-[#C9BCAB] text-slate-900';

                  if (isSubmitted) {
                    if (isErrorWord) {
                      wordStyle = 'bg-rose-600 text-white border-rose-700 font-bold shadow-xs';
                    }
                  } else if (isSelected) {
                    wordStyle = 'bg-rose-600 text-white border-rose-700 font-bold shadow-xs';
                  }

                  return (
                    <motion.button
                      key={idx}
                      type="button"
                      disabled={isSubmitted}
                      whileHover={!isSubmitted ? { scale: 1.05 } : {}}
                      whileTap={!isSubmitted ? { scale: 0.95 } : {}}
                      onClick={() => setSelectedWordIndices([idx])}
                      className={`px-3.5 py-2 rounded-xl border text-base sm:text-lg font-semibold transition-all cursor-pointer ${wordStyle}`}
                    >
                      {word}
                    </motion.button>
                  );
                })}
              </div>
            </div>
            <p className="text-xs sm:text-sm opacity-75 text-center">
              Tap the exact word or punctuation mark that contains the grammatical error.
            </p>
          </div>
        )}

        {/* 5. Clause Matcher Interface */}
        {currentExercise.type === 'clause-matcher' && (
          <div className="mb-6 space-y-3">
            <div className={`p-4 sm:p-5 rounded-2xl border font-semibold text-sm sm:text-base ${getExerciseBoxStyle()}`}>
              {(currentExercise as ClauseMatcherExercise).sentence}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className={`p-4 rounded-2xl border ${
                isDark ? 'bg-emerald-950/40 border-emerald-800/40 text-emerald-200' : 'bg-emerald-100/80 border-emerald-200 text-emerald-950'
              }`}>
                <div className="text-xs font-bold uppercase tracking-wider mb-1 text-emerald-700 dark:text-emerald-400">
                  Main Clause (Independent)
                </div>
                <div className="text-sm sm:text-base font-semibold">
                  {(currentExercise as ClauseMatcherExercise).mainClause}
                </div>
              </div>

              <div className={`p-4 rounded-2xl border ${
                isDark ? 'bg-slate-800/80 border-slate-700 text-slate-100' : 'bg-slate-100/90 border-slate-300 text-slate-950'
              }`}>
                <div className="text-xs font-black uppercase tracking-wider mb-1 text-slate-900 dark:text-slate-100">
                  Subordinate Clause (Dependent)
                </div>
                <div className="text-sm sm:text-base font-semibold">
                  {(currentExercise as ClauseMatcherExercise).subordinateClause}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Explanation & Instant Feedback Box */}
        {isSubmitted && (
          <div className={`p-5 rounded-2xl border mb-6 transition-all ${
            isCorrect 
              ? isDark ? 'bg-emerald-950/40 border-emerald-700 text-emerald-200' : 'bg-emerald-100/80 border-emerald-300 text-emerald-950'
              : isDark ? 'bg-rose-950/40 border-rose-700 text-rose-200' : 'bg-rose-100/80 border-rose-300 text-rose-950'
          }`}>
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <>
                    <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                    <span className="font-bold text-sm sm:text-base">
                      Spot On! Perfectly Correct.
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle size={20} className="text-rose-600 shrink-0" />
                    <span className="font-bold text-sm sm:text-base">
                      Not quite right this time!
                    </span>
                  </>
                )}
              </div>

              <AudioButton
                text={currentExercise.explanation}
                textId={`quiz-expl-${currentExercise.id}`}
                speechRate={speechRate}
                size="sm"
              />
            </div>

            <p className="text-sm sm:text-base opacity-95 leading-relaxed">
              {currentExercise.explanation}
            </p>
          </div>
        )}

        {/* Action Controls */}
        <div className={`flex items-center justify-between pt-3 border-t ${
          isDark ? 'border-[#343E4E]' : 'border-[#DDD4C5]'
        }`}>
          <button
            type="button"
            onClick={handleResetCurrent}
            disabled={isSubmitted}
            className="px-3.5 py-2 rounded-lg opacity-70 hover:opacity-100 hover:bg-black/10 text-xs sm:text-sm font-semibold transition-colors disabled:opacity-30 cursor-pointer"
          >
            Clear Selection
          </button>

          {!isSubmitted ? (
            <button
              type="button"
              id="btn-submit-answer"
              onClick={handleSubmit}
              disabled={
                (currentExercise.type === 'multiple-choice' && selectedOption === null) ||
                (currentExercise.type === 'word-clicker' && selectedWordIndices.length === 0) ||
                (currentExercise.type === 'sentence-builder' && builtSentenceWords.length === 0) ||
                (currentExercise.type === 'error-detective' && selectedWordIndices.length === 0)
              }
              className="px-8 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm sm:text-base shadow-md transition-all disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
            >
              Check Answer
            </button>
          ) : (
            <button
              type="button"
              id="btn-next-exercise"
              onClick={handleNextQuestion}
              className="px-8 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm sm:text-base shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{currentIndex < exercises.length - 1 ? 'Next Exercise' : 'Finish Quiz'}</span>
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

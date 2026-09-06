import React, { useState, useEffect } from 'react';
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
  Star,
  AlertTriangle,
  Lightbulb,
  Check,
  RotateCcw,
  BookOpen,
  Filter
} from 'lucide-react';
import { GrammarTopic, InteractiveExercise, WordClickerExercise, SentenceBuilderExercise, ErrorDetectiveExercise, MultipleChoiceExercise, ClauseMatcherExercise, StudyTheme } from '../types';
import { ReadableBox, ReadableIcon } from './ReadableBox';
import { playSound } from '../utils/storage';
import { APP_IMAGES } from '../utils/assets';
import { formatMarkdown } from '../utils/formatText';

interface IncorrectQuestionRecord {
  questionNumber: number;
  originalIndex: number;
  exercise: InteractiveExercise;
  userAnswerSummary: string;
  correctAnswerSummary: string;
  explanation: string;
  ruleViolated?: string;
}

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
  const [customExercises, setCustomExercises] = useState<InteractiveExercise[] | null>(null);
  const exercises = customExercises || topic.exercises;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedWordIndices, setSelectedWordIndices] = useState<number[]>([]);
  const [builtSentenceWords, setBuiltSentenceWords] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [incorrectQuestions, setIncorrectQuestions] = useState<IncorrectQuestionRecord[]>([]);
  const [isPracticingMistakesOnly, setIsPracticingMistakesOnly] = useState(false);

  // Reset all quiz state when switching to a new topic
  useEffect(() => {
    setCustomExercises(null);
    setCurrentIndex(0);
    setSelectedOption(null);
    setSelectedWordIndices([]);
    setBuiltSentenceWords([]);
    setIsSubmitted(false);
    setIsCorrect(false);
    setCorrectAnswersCount(0);
    setQuizFinished(false);
    setIncorrectQuestions([]);
    setIsPracticingMistakesOnly(false);
  }, [topic.id]);

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
    let userAnswerSummary = '';
    let correctAnswerSummary = '';

    if (currentExercise.type === 'multiple-choice') {
      const mc = currentExercise as MultipleChoiceExercise;
      correct = selectedOption === mc.correctIndex;
      userAnswerSummary = selectedOption !== null ? mc.options[selectedOption] : 'No option selected';
      correctAnswerSummary = mc.options[mc.correctIndex];
    } else if (currentExercise.type === 'word-clicker') {
      const wc = currentExercise as WordClickerExercise;
      const sortedSelected = [...selectedWordIndices].sort((a, b) => a - b);
      const sortedTargets = [...wc.targetIndices].sort((a, b) => a - b);
      correct = 
        sortedSelected.length === sortedTargets.length &&
        sortedSelected.every((val, i) => val === sortedTargets[i]);
      userAnswerSummary = selectedWordIndices.length > 0 
        ? selectedWordIndices.map(i => wc.words[i]).join(', ') 
        : 'No words selected';
      correctAnswerSummary = wc.targetIndices.map(i => wc.words[i]).join(', ');
    } else if (currentExercise.type === 'sentence-builder') {
      const sb = currentExercise as SentenceBuilderExercise;
      const constructed = builtSentenceWords.join(' ').trim();
      correct = constructed === sb.correctSentence.trim();
      userAnswerSummary = builtSentenceWords.length > 0 ? builtSentenceWords.join(' ') : 'Incomplete sentence';
      correctAnswerSummary = sb.correctSentence;
    } else if (currentExercise.type === 'error-detective') {
      const ed = currentExercise as ErrorDetectiveExercise;
      correct = selectedWordIndices.length === 1 && selectedWordIndices[0] === ed.errorWordIndex;
      userAnswerSummary = selectedWordIndices.length > 0 
        ? ed.words[selectedWordIndices[0]] 
        : 'No word selected';
      correctAnswerSummary = `"${ed.words[ed.errorWordIndex]}" → "${ed.correctedWord}"`;
    } else if (currentExercise.type === 'clause-matcher') {
      const cm = currentExercise as ClauseMatcherExercise;
      correct = true;
      userAnswerSummary = 'Matched';
      correctAnswerSummary = `Main: ${cm.mainClause} | Sub: ${cm.subordinateClause}`;
    }

    setIsCorrect(correct);
    setIsSubmitted(true);

    if (correct) {
      playSound('correct');
      setCorrectAnswersCount(prev => prev + 1);
      // Remove from incorrect list if re-answering correctly
      setIncorrectQuestions(prev => prev.filter(r => r.originalIndex !== currentIndex));
    } else {
      playSound('incorrect');
      const newRecord: IncorrectQuestionRecord = {
        questionNumber: currentIndex + 1,
        originalIndex: currentIndex,
        exercise: currentExercise,
        userAnswerSummary,
        correctAnswerSummary,
        explanation: currentExercise.explanation,
        ruleViolated: currentExercise.type === 'error-detective' ? (currentExercise as ErrorDetectiveExercise).ruleViolated : undefined,
      };
      setIncorrectQuestions(prev => {
        const filtered = prev.filter(r => r.originalIndex !== currentIndex);
        return [...filtered, newRecord].sort((a, b) => a.questionNumber - b.questionNumber);
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
      handleResetCurrent();
    } else {
      const finalCorrect = correctAnswersCount;
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
    setCustomExercises(null);
    setCurrentIndex(0);
    setCorrectAnswersCount(0);
    setQuizFinished(false);
    setIncorrectQuestions([]);
    setIsPracticingMistakesOnly(false);
    handleResetCurrent();
  };

  const handlePracticeMistakesOnly = () => {
    if (incorrectQuestions.length === 0) return;
    const mistakeExercises = incorrectQuestions.map(r => r.exercise);
    setCustomExercises(mistakeExercises);
    setCurrentIndex(0);
    setCorrectAnswersCount(0);
    setQuizFinished(false);
    setIncorrectQuestions([]);
    setIsPracticingMistakesOnly(true);
    handleResetCurrent();
  };

  if (!currentExercise) {
    return (
      <div className={`p-6 text-center rounded-2xl border ${getQuizCardStyle()}`}>
        No interactive exercises configured for this topic yet.
      </div>
    );
  }

  // Finished Summary View with Dedicated Wrong Questions Snapshot
  if (quizFinished) {
    const finalScore = Math.round((correctAnswersCount / exercises.length) * 100);
    const isMastered = finalScore >= 80;

    const celebrationPraise = isMastered 
      ? `Splendid mastery! You scored ${finalScore} percent and conquered ${topic.title} with outstanding grammar accuracy!`
      : `Good effort! You scored ${finalScore} percent on ${topic.title}. Review the questions you missed below to master the rules!`;

    return (
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 20 }}
        className={`p-5 sm:p-8 rounded-3xl border shadow-md text-left relative overflow-hidden space-y-6 ${getQuizCardStyle()}`}
      >
        {/* Celebration & Score Header */}
        <div className="text-center">
          {/* Animated Trophy Artwork */}
          <div className="flex justify-center mb-4 relative">
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, -2, 2, 0]
              }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-4 border-amber-500 shadow-xl relative"
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
              <Star size={24} className="fill-amber-400" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 8, 0], rotate: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
              className="absolute -bottom-2 left-1/4 text-amber-500"
            >
              <Sparkles size={22} className="fill-amber-400" />
            </motion.div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold mb-1 flex items-center justify-center gap-2">
            <span>{isMastered ? '🏆 Lesson Mastered!' : '⭐ Great Effort!'}</span>
          </h3>
          <p className="text-sm sm:text-base opacity-85 mb-4 max-w-md mx-auto">
            {isPracticingMistakesOnly ? 'Mistakes Practice Round: ' : ''}
            You answered <strong className="font-extrabold">{correctAnswersCount}</strong> out of{' '}
            <strong className="font-extrabold">{exercises.length}</strong> questions correctly in {topic.title}.
          </p>

          {/* Score Badge & Audio Praise */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <ReadableBox
              text={celebrationPraise}
              textId={`quiz-praise-${topic.id}-${finalScore}`}
              speechRate={speechRate}
              className={`p-3.5 sm:p-4 rounded-2xl border ${getQuizHeaderStyle()} flex items-center gap-4 shadow-xs`}
            >
              <div className="text-3xl sm:text-4xl font-heading font-black text-amber-600 dark:text-amber-400">
                {finalScore}%
              </div>
              <div className="text-left border-l border-black/10 dark:border-white/10 pl-3">
                <div className="text-xs font-black uppercase tracking-wider opacity-90">
                  {isMastered ? 'Mastery Tier' : 'Practice Tier'}
                </div>
                <div className="text-xs opacity-75">
                  {incorrectQuestions.length === 0 ? '0 Mistakes • 100% Perfect Accuracy' : `${incorrectQuestions.length} Incorrect • See Snapshot Below`}
                </div>
              </div>
            </ReadableBox>
          </div>

          {/* Top Quick Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pb-2">
            {incorrectQuestions.length > 0 && (
              <button
                type="button"
                onClick={handlePracticeMistakesOnly}
                className="px-5 py-2.5 rounded-full font-extrabold text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-md hover:shadow-lg"
              >
                <Zap size={16} className="fill-white" />
                Practice Only My {incorrectQuestions.length} Mistake{incorrectQuestions.length > 1 ? 's' : ''}
              </button>
            )}
            <button
              type="button"
              onClick={handleRetryEntireQuiz}
              className={`px-5 py-2.5 rounded-full font-bold text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer border shadow-xs ${
                isDark
                  ? 'bg-[#29303D] hover:bg-[#343D4E] text-slate-200 border-[#3D475B]'
                  : 'bg-[#DCD2C3] hover:bg-[#D0C5B4] text-slate-900 border-[#BEB2A0]'
              }`}
            >
              <RefreshCw size={15} />
              Retake All {topic.exercises.length} Questions
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SNAPSHOT OF WRONG QUESTIONS AND ANSWERS (JUST THE WRONG ONES) */}
        {/* ========================================================================= */}
        {incorrectQuestions.length > 0 ? (
          <div className="pt-4 border-t border-black/10 dark:border-white/10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-700 dark:text-rose-400 flex items-center justify-center font-bold">
                  <AlertTriangle size={18} />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-heading font-bold text-slate-950 dark:text-white flex items-center gap-2">
                    <span>Snapshot of Mistakes ({incorrectQuestions.length} Questions)</span>
                  </h4>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    Review what went wrong on each question and check the UK grammar rule:
                  </p>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-rose-500/15 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-700">
                {incorrectQuestions.length} Wrong Answer{incorrectQuestions.length > 1 ? 's' : ''}
              </span>
            </div>

            {/* List of Incorrect Questions */}
            <div className="space-y-4">
              {incorrectQuestions.map((record, index) => {
                const spokenWrongText = `Question ${record.questionNumber}. ${record.exercise.prompt}. Your answer was ${record.userAnswerSummary}. The correct answer is ${record.correctAnswerSummary}. Explanation: ${record.explanation}`;

                return (
                  <div
                    key={record.exercise.id}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                      isDark 
                        ? 'bg-[#181D25] border-rose-900/40 shadow-xs' 
                        : 'bg-white/80 border-rose-200/90 shadow-2xs'
                    }`}
                  >
                    {/* Mistake Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2.5 border-b border-black/5 dark:border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2.5 py-1 rounded-lg font-extrabold bg-rose-600 text-white shadow-2xs">
                          Question {record.questionNumber} of {exercises.length}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-md font-semibold bg-black/5 dark:bg-white/10 opacity-80 uppercase tracking-wide">
                          {record.exercise.type.replace('-', ' ')}
                        </span>
                      </div>
                      <ReadableBox
                        text={spokenWrongText}
                        textId={`audio-wrong-snap-${record.exercise.id}`}
                        speechRate={speechRate}
                        className="p-1 -m-1 rounded-lg"
                      >
                        <div className="flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-400 font-bold cursor-pointer">
                          <ReadableIcon size={14} />
                          <span>Listen Breakdown</span>
                        </div>
                      </ReadableBox>
                    </div>

                    {/* Question Prompt */}
                    <div className="mb-3.5">
                      <div className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        Question Prompt
                      </div>
                      <div 
                        className="text-sm sm:text-base font-bold text-slate-900 dark:text-white"
                        dangerouslySetInnerHTML={{ __html: formatMarkdown(record.exercise.prompt) }}
                      />
                      {record.exercise.instruction && (
                        <div 
                          className="text-xs opacity-75 mt-0.5 italic"
                          dangerouslySetInnerHTML={{ __html: formatMarkdown(record.exercise.instruction) }}
                        />
                      )}
                    </div>

                    {/* Comparison Snapshot: Your Answer vs Correct Answer */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3.5">
                      {/* Your Answer */}
                      <div className={`p-3 rounded-xl border ${
                        isDark ? 'bg-rose-950/40 border-rose-800/40 text-rose-200' : 'bg-rose-50 border-rose-200 text-rose-950'
                      }`}>
                        <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-1">
                          <XCircle size={14} className="shrink-0" />
                          <span>Your Answer</span>
                        </div>
                        <div className="text-xs sm:text-sm font-bold line-through opacity-90">
                          {record.userAnswerSummary}
                        </div>
                      </div>

                      {/* Correct Answer */}
                      <div className={`p-3 rounded-xl border ${
                        isDark ? 'bg-emerald-950/40 border-emerald-800/40 text-emerald-200' : 'bg-emerald-50 border-emerald-200 text-emerald-950'
                      }`}>
                        <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
                          <CheckCircle2 size={14} className="shrink-0" />
                          <span>Correct Answer</span>
                        </div>
                        <div className="text-xs sm:text-sm font-extrabold text-emerald-800 dark:text-emerald-300">
                          {record.correctAnswerSummary}
                        </div>
                      </div>
                    </div>

                    {/* What Went Wrong / Grammar Rule Breakdown */}
                    <div className={`p-3 rounded-xl border text-xs sm:text-sm space-y-1.5 ${
                      isDark ? 'bg-[#202732] border-[#2F394A]' : 'bg-[#F7F2E9] border-[#DFD5C6]'
                    }`}>
                      <div className="flex items-center gap-1.5 font-black uppercase tracking-wider text-[11px] text-amber-700 dark:text-amber-400">
                        <Lightbulb size={13} className="shrink-0" />
                        <span>What Went Wrong & Key Rule</span>
                      </div>

                      {record.ruleViolated && (
                        <div className="text-xs font-bold text-amber-800 dark:text-amber-300">
                          Rule Focus: {record.ruleViolated}
                        </div>
                      )}

                      <div className="opacity-90 leading-relaxed space-y-1">
                        {record.explanation.split('\n').map((line, lIdx) => {
                          const trimmed = line.trim();
                          if (!trimmed) return null;
                          if (trimmed.startsWith('✔')) {
                            return (
                              <div key={lIdx} className="flex items-start gap-1 text-emerald-800 dark:text-emerald-300 font-medium">
                                <span className="font-bold text-emerald-600 shrink-0">✔</span>
                                <span dangerouslySetInnerHTML={{ __html: formatMarkdown(trimmed.substring(1).trim()) }} />
                              </div>
                            );
                          }
                          if (trimmed.startsWith('✖')) {
                            return (
                              <div key={lIdx} className="flex items-start gap-1 text-rose-800 dark:text-rose-300 font-medium">
                                <span className="font-bold text-rose-600 shrink-0">✖</span>
                                <span dangerouslySetInnerHTML={{ __html: formatMarkdown(trimmed.substring(1).trim()) }} />
                              </div>
                            );
                          }
                          return (
                            <div key={lIdx} dangerouslySetInnerHTML={{ __html: formatMarkdown(trimmed) }} />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* 100% Perfect Score Snapshot */
          <div className={`p-5 rounded-2xl border text-center space-y-2 ${
            isDark ? 'bg-emerald-950/30 border-emerald-800/40 text-emerald-200' : 'bg-emerald-50 border-emerald-200 text-emerald-950'
          }`}>
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-sm">
              <Check size={26} className="stroke-[3]" />
            </div>
            <h4 className="text-lg font-heading font-extrabold text-emerald-800 dark:text-emerald-300">
              Flawless Score! Zero Mistakes Made
            </h4>
            <p className="text-xs sm:text-sm opacity-90 max-w-md mx-auto">
              You answered every single question in this challenge set correctly on the very first try. Outstanding grammar accuracy!
            </p>
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <div className={`rounded-3xl border shadow-xs overflow-hidden ${getQuizCardStyle()}`}>
      {/* Quiz Header Bar */}
      <div className={`px-5 py-3.5 border-b flex items-center justify-between gap-2 ${getQuizHeaderStyle()}`}>
        <div className="flex items-center gap-2.5">
          <span className="text-xs sm:text-sm font-bold">
            {isPracticingMistakesOnly ? '⚡ Mistakes Practice • ' : ''}
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

        {isPracticingMistakesOnly && (
          <button
            type="button"
            onClick={handleRetryEntireQuiz}
            className="text-xs px-2.5 py-1 rounded-lg border border-amber-500/40 text-amber-700 dark:text-amber-300 font-bold hover:bg-amber-500/10 cursor-pointer"
          >
            Exit to Full Quiz
          </button>
        )}
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
        {/* Readable Prompt Box */}
        <ReadableBox
          text={`${currentExercise.prompt}. ${currentExercise.instruction || ''}`}
          textId={`quiz-prompt-${topic.id}-${currentExercise.id}`}
          speechRate={speechRate}
          className={`p-4 sm:p-5 rounded-2xl border mb-6 ${getExerciseBoxStyle()}`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-black uppercase tracking-wider text-amber-700 dark:text-amber-400">
              Question Prompt
            </span>
            <ReadableIcon size={15} className="text-amber-600 dark:text-amber-400 opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
          <h4 
            className="text-lg sm:text-xl lg:text-2xl font-bold mb-1.5 text-slate-950 dark:text-white"
            dangerouslySetInnerHTML={{ __html: formatMarkdown(currentExercise.prompt) }}
          />
          {currentExercise.instruction && (
            <p 
              className="text-sm sm:text-base opacity-85 font-medium"
              dangerouslySetInnerHTML={{ __html: formatMarkdown(currentExercise.instruction) }}
            />
          )}
        </ReadableBox>

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
                    <span dangerouslySetInnerHTML={{ __html: formatMarkdown(option) }} />
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
          <ReadableBox
            text={`${isCorrect ? 'Spot On! Perfectly Correct.' : 'Not quite right this time.'} ${currentExercise.explanation}`}
            textId={`quiz-expl-${currentExercise.id}`}
            speechRate={speechRate}
            className={`p-5 rounded-2xl border mb-6 transition-all ${
              isCorrect 
                ? isDark ? 'bg-emerald-950/40 border-emerald-700 text-emerald-200' : 'bg-emerald-100/80 border-emerald-300 text-emerald-950'
                : isDark ? 'bg-rose-950/40 border-rose-700 text-rose-200' : 'bg-rose-100/80 border-rose-300 text-rose-950'
            }`}
          >
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

              <ReadableIcon size={16} className="opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
            </div>

            {/* Selection Breakdown for Clarity */}
            {currentExercise.type === 'word-clicker' && (
              <div className="text-xs sm:text-sm font-medium mb-3 p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 space-y-1">
                <div>
                  <span className="font-bold opacity-75">Your Selection: </span>
                  <span className="font-bold text-amber-800 dark:text-amber-300">
                    {selectedWordIndices.length > 0 
                      ? selectedWordIndices.map(i => (currentExercise as WordClickerExercise).words[i]).join(', ')
                      : 'None'}
                  </span>
                </div>
                <div>
                  <span className="font-bold opacity-75">Correct Answer(s): </span>
                  <span className="font-bold text-emerald-800 dark:text-emerald-300">
                    {(currentExercise as WordClickerExercise).targetIndices.map(i => (currentExercise as WordClickerExercise).words[i]).join(', ')}
                  </span>
                </div>
              </div>
            )}

            {currentExercise.type === 'multiple-choice' && selectedOption !== null && (
              <div className="text-xs sm:text-sm font-medium mb-3 p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 space-y-1">
                <div>
                  <span className="font-bold opacity-75">Your Choice: </span>
                  <span className="font-bold text-amber-800 dark:text-amber-300">
                    {(currentExercise as MultipleChoiceExercise).options[selectedOption]}
                  </span>
                </div>
                <div>
                  <span className="font-bold opacity-75">Correct Choice: </span>
                  <span className="font-bold text-emerald-800 dark:text-emerald-300">
                    {(currentExercise as MultipleChoiceExercise).options[(currentExercise as MultipleChoiceExercise).correctIndex]}
                  </span>
                </div>
              </div>
            )}

            {currentExercise.type === 'error-detective' && selectedWordIndices.length > 0 && (
              <div className="text-xs sm:text-sm font-medium mb-3 p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 space-y-1">
                <div>
                  <span className="font-bold opacity-75">Your Selection: </span>
                  <span className="font-bold text-amber-800 dark:text-amber-300">
                    {(currentExercise as ErrorDetectiveExercise).words[selectedWordIndices[0]]}
                  </span>
                </div>
                <div>
                  <span className="font-bold opacity-75">Correct Error Word: </span>
                  <span className="font-bold text-emerald-800 dark:text-emerald-300">
                    {(currentExercise as ErrorDetectiveExercise).words[(currentExercise as ErrorDetectiveExercise).errorWordIndex]} → {(currentExercise as ErrorDetectiveExercise).correctedWord}
                  </span>
                </div>
              </div>
            )}

            {currentExercise.type === 'sentence-builder' && builtSentenceWords.length > 0 && (
              <div className="text-xs sm:text-sm font-medium mb-3 p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 space-y-1">
                <div>
                  <span className="font-bold opacity-75">Your Sentence: </span>
                  <span className="font-bold text-amber-800 dark:text-amber-300">
                    {builtSentenceWords.join(' ')}
                  </span>
                </div>
                <div>
                  <span className="font-bold opacity-75">Correct Sentence: </span>
                  <span className="font-bold text-emerald-800 dark:text-emerald-300">
                    {(currentExercise as SentenceBuilderExercise).correctSentence}
                  </span>
                </div>
              </div>
            )}

            <div className="text-sm sm:text-base opacity-95 leading-relaxed space-y-1.5 mt-1">
              {currentExercise.explanation.split('\n').map((line, lIdx) => {
                const trimmed = line.trim();
                if (!trimmed) return null;
                if (trimmed.startsWith('✔')) {
                  return (
                    <div key={lIdx} className="flex items-start gap-1.5 text-emerald-900 dark:text-emerald-200 font-medium">
                      <span className="font-black text-emerald-600 dark:text-emerald-400 shrink-0 select-none">✔</span>
                      <span dangerouslySetInnerHTML={{ __html: formatMarkdown(trimmed.substring(1).trim()) }} />
                    </div>
                  );
                }
                if (trimmed.startsWith('✖')) {
                  return (
                    <div key={lIdx} className="flex items-start gap-1.5 text-rose-900 dark:text-rose-200 font-medium">
                      <span className="font-black text-rose-600 dark:text-rose-400 shrink-0 select-none">✖</span>
                      <span dangerouslySetInnerHTML={{ __html: formatMarkdown(trimmed.substring(1).trim()) }} />
                    </div>
                  );
                }
                return (
                  <div key={lIdx} dangerouslySetInnerHTML={{ __html: formatMarkdown(trimmed) }} />
                );
              })}
            </div>
          </ReadableBox>
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

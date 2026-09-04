import React, { useState } from 'react';
import confetti from 'canvas-confetti';
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
  ThumbsUp
} from 'lucide-react';
import { GrammarTopic, InteractiveExercise, WordClickerExercise, SentenceBuilderExercise, ErrorDetectiveExercise, MultipleChoiceExercise, ClauseMatcherExercise } from '../types';
import { AudioButton } from './AudioButton';
import { playSound } from '../utils/storage';

interface InteractiveQuizProps {
  topic: GrammarTopic;
  onCompleteQuiz: (scorePercent: number) => void;
  speechRate: number;
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({
  topic,
  onCompleteQuiz,
  speechRate,
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
      // Auto-acknowledged concept
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
      // Finished Quiz
      const finalCorrect = isCorrect ? correctAnswersCount + 1 : correctAnswersCount;
      const scorePercent = Math.round((finalCorrect / exercises.length) * 100);
      setQuizFinished(true);
      playSound('complete');

      // Trigger Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#10b981', '#3b82f6', '#ec4899'],
        });
      } catch {
        // Confetti fallback
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
      <div className="p-6 text-center text-slate-600 bg-white rounded-2xl border border-slate-200">
        No interactive exercises configured for this topic yet.
      </div>
    );
  }

  // Finished Summary View
  if (quizFinished) {
    const finalScore = Math.round((correctAnswersCount / exercises.length) * 100);
    const isMastered = finalScore >= 80;

    return (
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
        <div className="inline-flex p-3 rounded-2xl bg-amber-100 text-amber-600 mb-4 animate-bounce">
          <Award size={36} />
        </div>

        <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 mb-1">
          {isMastered ? 'Lesson Mastered!' : 'Great Effort!'}
        </h3>
        <p className="text-sm text-slate-600 mb-6">
          You answered <strong className="text-slate-900">{correctAnswersCount}</strong> out of{' '}
          <strong className="text-slate-900">{exercises.length}</strong> questions correctly.
        </p>

        {/* Score Ring */}
        <div className="inline-block p-6 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
          <div className="text-4xl font-heading font-extrabold text-amber-600">
            {finalScore}%
          </div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
            Accuracy Score
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleRetryEntireQuiz}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer border border-slate-300"
          >
            <RefreshCw size={14} />
            Practise Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-sky-100 shadow-xs overflow-hidden">
      {/* Quiz Header Bar */}
      <div className="px-5 py-3.5 bg-sky-50/50 border-b border-sky-100 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs font-bold">
            {currentIndex + 1}
          </div>
          <span className="text-xs font-bold text-slate-800">
            Exercise {currentIndex + 1} of {exercises.length}
          </span>
          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 font-bold">
            Difficulty Step {currentExercise.difficultyStep}/4
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
      <div className="w-full bg-slate-100 h-1.5 flex">
        {exercises.map((ex, idx) => (
          <div
            key={ex.id}
            className={`h-full flex-1 transition-colors ${
              idx < currentIndex
                ? 'bg-emerald-500'
                : idx === currentIndex
                ? 'bg-sky-500'
                : 'bg-slate-200'
            }`}
          />
        ))}
      </div>

      {/* Question Body */}
      <div className="p-5 sm:p-7">
        <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-1">
          {currentExercise.prompt}
        </h4>
        <p className="text-xs text-slate-500 mb-6">
          {currentExercise.instruction}
        </p>

        {/* 1. Multiple Choice Interface */}
        {currentExercise.type === 'multiple-choice' && (
          <div className="space-y-3 mb-6">
            {(currentExercise as MultipleChoiceExercise).options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const mc = currentExercise as MultipleChoiceExercise;
              let optionStyle = 'bg-white hover:bg-sky-50/60 border-slate-200 text-slate-700 hover:border-sky-300';

              if (isSubmitted) {
                if (idx === mc.correctIndex) {
                  optionStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                } else if (isSelected && !isCorrect) {
                  optionStyle = 'bg-rose-50 border-rose-400 text-rose-900 line-through';
                } else {
                  optionStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                }
              } else if (isSelected) {
                optionStyle = 'bg-sky-50 border-2 border-sky-500 text-sky-950 font-bold shadow-xs';
              }

              return (
                <button
                  key={idx}
                  type="button"
                  id={`mc-option-${idx}`}
                  disabled={isSubmitted}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full p-3.5 rounded-2xl border text-left text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${optionStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold ${
                      isSelected ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-300 text-slate-500 bg-slate-50'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>
                  {isSubmitted && idx === mc.correctIndex && (
                    <CheckCircle2 size={18} className="text-emerald-500" />
                  )}
                  {isSubmitted && isSelected && !isCorrect && (
                    <XCircle size={18} className="text-rose-500" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* 2. Word Clicker Interface */}
        {currentExercise.type === 'word-clicker' && (
          <div className="mb-6">
            <div className="p-6 bg-sky-50/40 rounded-2xl border border-sky-100 mb-3 text-center">
              <div className="flex flex-wrap items-center justify-center gap-2.5 text-base sm:text-lg">
                {(currentExercise as WordClickerExercise).words.map((word, idx) => {
                  const isSelected = selectedWordIndices.includes(idx);
                  const wc = currentExercise as WordClickerExercise;
                  const isTarget = wc.targetIndices.includes(idx);

                  let wordStyle = 'bg-white hover:bg-sky-50 border-slate-200 text-slate-800 hover:border-sky-300';

                  if (isSubmitted) {
                    if (isTarget) {
                      wordStyle = 'bg-emerald-500 text-white border-emerald-600 font-bold shadow-xs';
                    } else if (isSelected && !isTarget) {
                      wordStyle = 'bg-rose-500 text-white border-rose-600 line-through';
                    }
                  } else if (isSelected) {
                    wordStyle = 'bg-sky-500 text-white border-sky-600 font-bold shadow-xs';
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={isSubmitted}
                      onClick={() => handleToggleWordIndex(idx)}
                      className={`px-3 py-1.5 rounded-xl border text-sm sm:text-base font-semibold transition-all cursor-pointer ${wordStyle}`}
                    >
                      {word}
                    </button>
                  );
                })}
              </div>
            </div>
            <p className="text-[11px] text-slate-500 text-center">
              Target: Find all words functioning as <strong className="text-sky-700">{(currentExercise as WordClickerExercise).targetCategoryLabel}</strong>.
            </p>
          </div>
        )}

        {/* 3. Sentence Builder Interface */}
        {currentExercise.type === 'sentence-builder' && (
          <div className="mb-6">
            {/* Assembly Area */}
            <div className="min-h-[64px] p-4 bg-sky-50/40 rounded-2xl border-2 border-dashed border-sky-200 mb-4 flex flex-wrap items-center gap-2">
              {builtSentenceWords.length === 0 ? (
                <span className="text-xs text-sky-700/70 italic">
                  Tap words below in the correct order to construct the sentence...
                </span>
              ) : (
                builtSentenceWords.map((word, idx) => (
                  <button
                    key={idx}
                    type="button"
                    disabled={isSubmitted}
                    onClick={() => handleRemoveWordFromBuilder(idx)}
                    className="px-3 py-1.5 bg-sky-500 text-white rounded-xl text-xs font-bold hover:bg-sky-600 transition-colors shadow-2xs cursor-pointer flex items-center gap-1.5"
                  >
                    <span>{word}</span>
                    {!isSubmitted && <span className="text-[10px] text-sky-200">✕</span>}
                  </button>
                ))
              )}
            </div>

            {/* Word Bank */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 p-4 bg-slate-50/80 rounded-2xl border border-slate-200">
              {(currentExercise as SentenceBuilderExercise).scrambledWords.map((word, idx) => {
                // Count how many times this word has already been used in builtSentenceWords
                const timesUsed = builtSentenceWords.filter(w => w === word).length;
                const timesAvailable = (currentExercise as SentenceBuilderExercise).scrambledWords.filter(w => w === word).length;
                const isExhausted = timesUsed >= timesAvailable;

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isSubmitted || isExhausted}
                    onClick={() => handleAddWordToBuilder(word, idx)}
                    className={`px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      isExhausted
                        ? 'bg-slate-200 text-slate-400 border-slate-200 opacity-40 cursor-not-allowed'
                        : 'bg-white hover:bg-sky-50 hover:border-sky-300 text-slate-800 border-slate-200 shadow-2xs'
                    }`}
                  >
                    {word}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. Error Detective Interface */}
        {currentExercise.type === 'error-detective' && (
          <div className="mb-6">
            <div className="p-6 bg-rose-50/40 rounded-2xl border border-rose-100 mb-3 text-center">
              <div className="flex flex-wrap items-center justify-center gap-2.5 text-base sm:text-lg">
                {(currentExercise as ErrorDetectiveExercise).words.map((word, idx) => {
                  const isSelected = selectedWordIndices.includes(idx);
                  const ed = currentExercise as ErrorDetectiveExercise;
                  const isErrorWord = idx === ed.errorWordIndex;

                  let wordStyle = 'bg-white hover:bg-rose-50 border-slate-200 text-slate-800';

                  if (isSubmitted) {
                    if (isErrorWord) {
                      wordStyle = 'bg-rose-500 text-white border-rose-600 font-bold shadow-xs';
                    }
                  } else if (isSelected) {
                    wordStyle = 'bg-rose-500 text-white border-rose-600 font-bold shadow-xs';
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={isSubmitted}
                      onClick={() => setSelectedWordIndices([idx])}
                      className={`px-3 py-1.5 rounded-xl border text-sm sm:text-base font-semibold transition-all cursor-pointer ${wordStyle}`}
                    >
                      {word}
                    </button>
                  );
                })}
              </div>
            </div>
            <p className="text-[11px] text-slate-500 text-center">
              Tap the exact word or punctuation mark that contains the grammatical error.
            </p>
          </div>
        )}

        {/* 5. Clause Matcher Interface */}
        {currentExercise.type === 'clause-matcher' && (
          <div className="mb-6 space-y-3">
            <div className="p-4 bg-sky-50/50 rounded-2xl border border-sky-100 font-medium text-xs sm:text-sm text-slate-800">
              {(currentExercise as ClauseMatcherExercise).sentence}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mb-1">
                  Main Clause (Independent)
                </div>
                <div className="text-xs text-emerald-950 font-semibold">
                  {(currentExercise as ClauseMatcherExercise).mainClause}
                </div>
              </div>

              <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100">
                <div className="text-[10px] font-bold text-sky-700 uppercase tracking-wider mb-1">
                  Subordinate Clause (Dependent)
                </div>
                <div className="text-xs text-sky-950 font-semibold">
                  {(currentExercise as ClauseMatcherExercise).subordinateClause}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Explanation & Instant Feedback Box */}
        {isSubmitted && (
          <div className={`p-5 rounded-2xl border mb-6 transition-all ${
            isCorrect ? 'bg-emerald-50 border-emerald-300' : 'bg-rose-50 border-rose-300'
          }`}>
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <>
                    <CheckCircle2 size={18} className="text-emerald-600" />
                    <span className="font-bold text-xs sm:text-sm text-emerald-900">
                      Spot On! Perfectly Correct.
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle size={18} className="text-rose-600" />
                    <span className="font-bold text-xs sm:text-sm text-rose-900">
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

            <p className="text-xs text-slate-700 leading-relaxed">
              {currentExercise.explanation}
            </p>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <button
            type="button"
            onClick={handleResetCurrent}
            disabled={isSubmitted}
            className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 text-xs font-semibold transition-colors disabled:opacity-30 cursor-pointer"
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
              className="px-8 py-2.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-lg shadow-sky-200 transition-all disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
            >
              Check Answer
            </button>
          ) : (
            <button
              type="button"
              id="btn-next-exercise"
              onClick={handleNextQuestion}
              className="px-8 py-2.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-lg shadow-sky-200 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{currentIndex < exercises.length - 1 ? 'Next Exercise' : 'Finish Quiz'}</span>
              <ArrowRight size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

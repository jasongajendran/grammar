import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Flame, 
  Award, 
  BookOpen, 
  Target, 
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { UserProgress, DifficultyLevel } from '../types';
import { ALL_TOPICS, LEVEL_METADATA } from '../data/curriculum';
import { BADGES } from '../data/badges';

interface ProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  onResetProgress: () => void;
}

export const ProgressModal: React.FC<ProgressModalProps> = ({
  isOpen,
  onClose,
  progress,
  onResetProgress,
}) => {
  if (!isOpen) return null;

  const totalTopics = ALL_TOPICS.length;
  const completedTopics = progress.completedTopics.length;
  const overallPercent = Math.round((completedTopics / totalTopics) * 100);

  const levels: DifficultyLevel[] = ['level-1', 'level-2', 'level-3', 'level-4', 'level-5'];

  // Average score
  const scoreValues: number[] = Object.values(progress.quizScores);
  const avgScore = scoreValues.length > 0 
    ? Math.round(scoreValues.reduce((a: number, b: number) => a + b, 0) / scoreValues.length) 
    : 0;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center">
              <BookOpen size={18} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-heading font-bold">
                Curriculum Progress & Analytics
              </h3>
              <p className="text-xs text-slate-400">
                British National Curriculum Mastery (KS1 – GCSE)
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-center">
              <div className="text-2xl font-heading font-extrabold text-amber-600">
                {overallPercent}%
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-900 mt-0.5">
                Completed
              </div>
            </div>

            <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 text-center">
              <div className="text-2xl font-heading font-extrabold text-emerald-600">
                {avgScore}%
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-900 mt-0.5">
                Avg Accuracy
              </div>
            </div>

            <div className="p-3.5 bg-orange-50 rounded-2xl border border-orange-200 text-center">
              <div className="text-2xl font-heading font-extrabold text-orange-600 flex items-center justify-center gap-1">
                <Flame size={18} className="fill-orange-500" />
                {progress.streakCount}d
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-orange-900 mt-0.5">
                Daily Streak
              </div>
            </div>

            <div className="p-3.5 bg-indigo-50 rounded-2xl border border-indigo-200 text-center">
              <div className="text-2xl font-heading font-extrabold text-indigo-600 flex items-center justify-center gap-1">
                <Award size={18} />
                {progress.earnedBadges.length}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-900 mt-0.5">
                Badges Earned
              </div>
            </div>
          </div>

          {/* Level by Level Mastery Breakdown */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">
              Stage Mastery Progress
            </h4>

            {levels.map(lvl => {
              const meta = LEVEL_METADATA[lvl];
              const lvlTopics = ALL_TOPICS.filter(t => t.level === lvl);
              const doneCount = lvlTopics.filter(t => progress.completedTopics.includes(t.id)).length;
              const percent = Math.round((doneCount / meta.topicsCount) * 100);

              return (
                <div key={lvl} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">
                      {meta.label}: {meta.stageName}
                    </span>
                    <span className="font-semibold text-slate-500">
                      {doneCount} / {meta.topicsCount} ({percent}%)
                    </span>
                  </div>

                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full transition-all duration-300"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reset progress button */}
          <div className="pt-2 border-t border-slate-100 flex justify-end">
            <button
              type="button"
              onClick={() => {
                if (window.confirm('Are you sure you want to reset all your grammar progress and earned badges?')) {
                  onResetProgress();
                }
              }}
              className="text-xs text-rose-600 hover:text-rose-800 font-semibold flex items-center gap-1 p-1 cursor-pointer"
            >
              <RefreshCw size={12} />
              Reset Learning Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

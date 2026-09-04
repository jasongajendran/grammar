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
import { UserProgress, DifficultyLevel, StudyTheme } from '../types';
import { ALL_TOPICS, LEVEL_METADATA } from '../data/curriculum';
import { BADGES } from '../data/badges';

interface ProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  onResetProgress: () => void;
  studyTheme?: StudyTheme;
}

export const ProgressModal: React.FC<ProgressModalProps> = ({
  isOpen,
  onClose,
  progress,
  onResetProgress,
  studyTheme = 'pastel-warm',
}) => {
  if (!isOpen) return null;

  const totalTopics = ALL_TOPICS.length;
  const completedTopics = progress.completedTopics.length;
  const overallPercent = Math.round((completedTopics / totalTopics) * 100);

  const levels: DifficultyLevel[] = ['level-1', 'level-2', 'level-3', 'level-4', 'level-5'];

  const scoreValues: number[] = Object.values(progress.quizScores);
  const avgScore = scoreValues.length > 0 
    ? Math.round(scoreValues.reduce((a: number, b: number) => a + b, 0) / scoreValues.length) 
    : 0;

  const isDark = studyTheme === 'pastel-night' || studyTheme === 'dark-study';
  const isSage = studyTheme === 'pastel-sage' || studyTheme === 'calm-sage';
  const isLavender = studyTheme === 'pastel-lavender';
  const isPeach = studyTheme === 'pastel-peach';

  const getModalCardStyle = () => {
    if (isDark) return 'bg-[#1D2129] border-[#2E3544] text-[#E6EAF0]';
    if (isSage) return 'bg-[#DEECE2] border-[#C7DBD0] text-[#1C2922]';
    if (isLavender) return 'bg-[#E4DCED] border-[#CEC2DC] text-[#241E2F]';
    if (isPeach) return 'bg-[#EFE1D4] border-[#DDC8B6] text-[#2C211B]';
    return 'bg-[#ECE5DA] border-[#DDD5C7] text-[#252830]';
  };

  const getSubBoxStyle = () => {
    if (isDark) return 'bg-[#252C39] border-[#364253] text-[#E6EAF0]';
    if (isSage) return 'bg-[#D0E2D6] border-[#BCD4C4] text-[#1C2922]';
    if (isLavender) return 'bg-[#D9CEE4] border-[#C5B5D6] text-[#241E2F]';
    if (isPeach) return 'bg-[#E5D4C4] border-[#D4BFAB] text-[#2C211B]';
    return 'bg-[#DFD6C8] border-[#CCC0B0] text-[#252830]';
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className={`w-full max-w-xl rounded-3xl shadow-2xl border overflow-hidden flex flex-col max-h-[90vh] ${getModalCardStyle()}`}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-amber-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <BookOpen size={20} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-bold">
                Curriculum Progress & Analytics
              </h3>
              <p className="text-xs sm:text-sm text-amber-100 font-medium">
                British National Curriculum Mastery (KS1 – GCSE)
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className={`p-3.5 rounded-2xl border text-center ${
              isDark ? 'bg-slate-800/80 border-slate-700 text-slate-100' : 'bg-slate-100/90 border-slate-300 text-slate-950'
            }`}>
              <div className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
                {overallPercent}%
              </div>
              <div className="text-xs font-bold uppercase tracking-wider mt-1 opacity-80">
                Completed
              </div>
            </div>

            <div className={`p-3.5 rounded-2xl border text-center ${
              isDark ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-100' : 'bg-emerald-100/80 border-emerald-300 text-emerald-950'
            }`}>
              <div className="text-3xl font-heading font-extrabold text-emerald-700 dark:text-emerald-300">
                {avgScore}%
              </div>
              <div className="text-xs font-bold uppercase tracking-wider mt-1 opacity-80">
                Avg Accuracy
              </div>
            </div>

            <div className={`p-3.5 rounded-2xl border text-center ${
              isDark ? 'bg-orange-950/40 border-orange-800/60 text-orange-100' : 'bg-orange-100/80 border-orange-300 text-orange-950'
            }`}>
              <div className="text-3xl font-heading font-extrabold text-orange-600 dark:text-orange-300 flex items-center justify-center gap-1">
                <Flame size={22} className="fill-orange-500" />
                {progress.streakCount}d
              </div>
              <div className="text-xs font-bold uppercase tracking-wider mt-1 opacity-80">
                Daily Streak
              </div>
            </div>

            <div className={`p-3.5 rounded-2xl border text-center ${
              isDark ? 'bg-purple-950/40 border-purple-800/60 text-purple-100' : 'bg-purple-100/80 border-purple-300 text-purple-950'
            }`}>
              <div className="text-3xl font-heading font-extrabold text-purple-700 dark:text-purple-300 flex items-center justify-center gap-1">
                <Award size={22} />
                {progress.earnedBadges.length}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider mt-1 opacity-80">
                Badges Earned
              </div>
            </div>
          </div>

          {/* Level by Level Mastery Breakdown */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider opacity-70">
              Stage Mastery Progress
            </h4>

            {levels.map(lvl => {
              const meta = LEVEL_METADATA[lvl];
              const lvlTopics = ALL_TOPICS.filter(t => t.level === lvl);
              const doneCount = lvlTopics.filter(t => progress.completedTopics.includes(t.id)).length;
              const percent = Math.round((doneCount / meta.topicsCount) * 100);

              return (
                <div key={lvl} className={`p-3.5 rounded-2xl border space-y-2 ${getSubBoxStyle()}`}>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold">
                      {meta.label}: {meta.stageName}
                    </span>
                    <span className="font-bold opacity-80">
                      {doneCount} / {meta.topicsCount} ({percent}%)
                    </span>
                  </div>

                  <div className={`w-full h-2.5 rounded-full overflow-hidden border ${
                    isDark ? 'bg-[#181D24] border-[#364253]' : 'bg-[#C9BDAA] border-[#B5A792]'
                  }`}>
                    <div
                      className="h-full bg-amber-600 rounded-full transition-all duration-300"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reset progress button */}
          <div className={`pt-3 border-t flex justify-end ${
            isDark ? 'border-[#2E3544]' : 'border-black/10'
          }`}>
            <button
              type="button"
              onClick={() => {
                if (window.confirm('Are you sure you want to reset all your grammar progress and earned badges?')) {
                  onResetProgress();
                }
              }}
              className="text-xs sm:text-sm text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1.5 p-1.5 cursor-pointer"
            >
              <RefreshCw size={14} />
              Reset Learning Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

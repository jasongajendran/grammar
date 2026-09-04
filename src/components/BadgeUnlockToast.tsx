import React, { useEffect } from 'react';
import { Award, X, Sparkles } from 'lucide-react';
import { BADGES } from '../data/badges';
import { playSound } from '../utils/storage';
import { StudyTheme } from '../types';

interface BadgeUnlockToastProps {
  badgeId: string | null;
  onDismiss: () => void;
  onViewBadges: () => void;
  studyTheme?: StudyTheme;
}

export const BadgeUnlockToast: React.FC<BadgeUnlockToastProps> = ({
  badgeId,
  onDismiss,
  onViewBadges,
  studyTheme = 'warm-paper',
}) => {
  useEffect(() => {
    if (badgeId) {
      playSound('badge');
      const timer = setTimeout(() => {
        onDismiss();
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [badgeId, onDismiss]);

  if (!badgeId) return null;
  const badge = BADGES.find(b => b.id === badgeId);
  if (!badge) return null;

  const isDark = studyTheme === 'pastel-night' || studyTheme === 'dark-study';

  return (
    <div className={`fixed top-16 right-4 z-50 max-w-sm w-full rounded-2xl border-2 shadow-2xl p-4 animate-in slide-in-from-top duration-300 ${
      isDark
        ? 'bg-[#1D2129] border-amber-600 text-[#E6EAF0]'
        : 'bg-[#F4ECE1] border-amber-600 text-[#242831]'
    }`}>
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
          isDark
            ? 'bg-slate-800 text-slate-100 border-slate-700'
            : 'bg-amber-100 text-slate-950 border-amber-300'
        }`}>
          <Award size={22} className="text-amber-600 dark:text-amber-400 animate-bounce" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-extrabold tracking-wider text-slate-900 dark:text-slate-100 flex items-center gap-1">
              <Sparkles size={13} className="text-amber-600 dark:text-amber-400" /> New Digital Badge!
            </span>
            <button
              type="button"
              onClick={onDismiss}
              className="opacity-70 hover:opacity-100 p-1 cursor-pointer"
              aria-label="Dismiss notification"
            >
              <X size={16} />
            </button>
          </div>

          <h4 className="font-bold text-sm sm:text-base mt-0.5 text-slate-950 dark:text-white">
            {badge.title}
          </h4>
          <p className="text-xs sm:text-sm opacity-80 mt-0.5 line-clamp-2">
            {badge.description}
          </p>

          <button
            type="button"
            onClick={() => {
              onDismiss();
              onViewBadges();
            }}
            className="mt-2 text-xs sm:text-sm font-bold text-amber-700 dark:text-amber-300 hover:text-amber-800 dark:hover:text-amber-200 underline cursor-pointer inline-flex items-center gap-1"
          >
            View in Trophy Cabinet →
          </button>
        </div>
      </div>
    </div>
  );
};

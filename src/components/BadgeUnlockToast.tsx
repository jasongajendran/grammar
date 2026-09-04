import React, { useEffect } from 'react';
import { Award, X, Sparkles } from 'lucide-react';
import { BADGES } from '../data/badges';
import { playSound } from '../utils/storage';

interface BadgeUnlockToastProps {
  badgeId: string | null;
  onDismiss: () => void;
  onViewBadges: () => void;
}

export const BadgeUnlockToast: React.FC<BadgeUnlockToastProps> = ({
  badgeId,
  onDismiss,
  onViewBadges,
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

  return (
    <div className="fixed top-16 right-4 z-50 max-w-sm w-full bg-white rounded-2xl border-2 border-amber-400 shadow-xl p-4 animate-in slide-in-from-top duration-300">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 border border-amber-300">
          <Award size={22} className="fill-amber-400 animate-bounce" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold tracking-wider text-amber-600 flex items-center gap-1">
              <Sparkles size={12} /> New Digital Badge Unlocked!
            </span>
            <button
              type="button"
              onClick={onDismiss}
              className="text-slate-400 hover:text-slate-600"
            >
              <X size={14} />
            </button>
          </div>

          <h4 className="font-bold text-sm text-slate-900 mt-0.5">
            {badge.title}
          </h4>
          <p className="text-xs text-slate-600 mt-0.5 line-clamp-2">
            {badge.description}
          </p>

          <button
            type="button"
            onClick={() => {
              onDismiss();
              onViewBadges();
            }}
            className="mt-2 text-xs font-bold text-amber-700 hover:text-amber-800 underline"
          >
            View in Trophy Cabinet →
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  Award, 
  X, 
  Lock, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  Swords, 
  Crown, 
  Target, 
  Flame, 
  Feather, 
  Zap, 
  Volume2, 
  Medal,
  CheckCircle2
} from 'lucide-react';
import { Badge, UserProgress } from '../types';
import { BADGES } from '../data/badges';

interface BadgesModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
}

export const BadgesModal: React.FC<BadgesModalProps> = ({
  isOpen,
  onClose,
  progress,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  if (!isOpen) return null;

  const getIcon = (iconName: string, isUnlocked: boolean) => {
    const className = isUnlocked ? 'text-amber-500 fill-amber-100' : 'text-slate-400';
    const size = 24;

    switch (iconName) {
      case 'Sparkles': return <Sparkles size={size} className={className} />;
      case 'ShieldCheck': return <ShieldCheck size={size} className={className} />;
      case 'Compass': return <Compass size={size} className={className} />;
      case 'Award': return <Award size={size} className={className} />;
      case 'Swords': return <Swords size={size} className={className} />;
      case 'Crown': return <Crown size={size} className={className} />;
      case 'Target': return <Target size={size} className={className} />;
      case 'Flame': return <Flame size={size} className={className} />;
      case 'Feather': return <Feather size={size} className={className} />;
      case 'Zap': return <Zap size={size} className={className} />;
      case 'Volume2': return <Volume2 size={size} className={className} />;
      case 'Medal': return <Medal size={size} className={className} />;
      default: return <Award size={size} className={className} />;
    }
  };

  const categories = ['all', 'Level Mastery', 'Accuracy', 'Streak', 'Punctuation', 'Sentence Structure', 'Achievement'];
  const filteredBadges = filterCategory === 'all' 
    ? BADGES 
    : BADGES.filter(b => b.category === filterCategory);

  const unlockedCount = BADGES.filter(b => progress.earnedBadges.includes(b.id)).length;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
              <Award size={20} />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold leading-tight">
                Digital Badges Trophy Cabinet
              </h3>
              <p className="text-xs text-amber-100">
                {unlockedCount} of {BADGES.length} Badges Unlocked
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close badges"
          >
            <X size={18} />
          </button>
        </div>

        {/* Category Filters */}
        <div className="px-6 py-3 border-b border-slate-200 bg-slate-50 flex items-center gap-1.5 overflow-x-auto text-xs">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1 rounded-full font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                filterCategory === cat
                  ? 'bg-amber-500 text-white shadow-2xs'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat === 'all' ? 'All Badges' : cat}
            </button>
          ))}
        </div>

        {/* Badges Grid */}
        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {filteredBadges.map(badge => {
            const isUnlocked = progress.earnedBadges.includes(badge.id);
            const unlockDate = progress.badgeUnlockDates[badge.id];

            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                  isUnlocked
                    ? 'bg-amber-50/50 border-amber-200 shadow-2xs'
                    : 'bg-slate-50/70 border-slate-200 opacity-60'
                }`}
              >
                {/* Badge Icon / Lock */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                  isUnlocked
                    ? 'bg-amber-100 border-amber-300 shadow-xs'
                    : 'bg-slate-200 border-slate-300'
                }`}>
                  {isUnlocked ? (
                    getIcon(badge.icon, true)
                  ) : (
                    <Lock size={18} className="text-slate-400" />
                  )}
                </div>

                {/* Badge Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                      {badge.title}
                    </h4>
                    {isUnlocked && (
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                        <CheckCircle2 size={10} /> Earned
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-slate-600 mt-0.5 line-clamp-2">
                    {badge.description}
                  </p>

                  <div className="mt-2 text-[10px] font-semibold text-slate-500 flex items-center justify-between">
                    <span>Criteria: {badge.unlockedCriteria}</span>
                    {unlockDate && (
                      <span className="text-amber-700">
                        {new Date(unlockDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500">
          Complete quizzes and master topics across Key Stages to earn all digital rewards.
        </div>
      </div>
    </div>
  );
};

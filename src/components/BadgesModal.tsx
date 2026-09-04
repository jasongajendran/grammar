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
import { Badge, UserProgress, StudyTheme } from '../types';
import { BADGES } from '../data/badges';

interface BadgesModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  studyTheme?: StudyTheme;
}

export const BadgesModal: React.FC<BadgesModalProps> = ({
  isOpen,
  onClose,
  progress,
  studyTheme = 'pastel-warm',
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  if (!isOpen) return null;

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

  const getFilterStripStyle = () => {
    if (isDark) return 'bg-[#28303E] border-[#3E495D]';
    if (isSage) return 'bg-[#D3E4D8] border-[#BDD6C5]';
    if (isLavender) return 'bg-[#D9CEE4] border-[#C4B4D5]';
    if (isPeach) return 'bg-[#E5D4C4] border-[#D5C0AC]';
    return 'bg-[#E0D7C9] border-[#CDC1AF]';
  };

  const getIcon = (iconName: string, isUnlocked: boolean) => {
    const className = isUnlocked ? 'text-amber-500 fill-amber-500/20' : 'text-slate-400';
    const size = 26;

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className={`w-full max-w-2xl rounded-3xl shadow-2xl border overflow-hidden flex flex-col max-h-[90vh] ${getModalCardStyle()}`}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-amber-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
              <Award size={22} />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold leading-tight">
                Digital Badges Trophy Cabinet
              </h3>
              <p className="text-xs sm:text-sm text-amber-100 font-medium">
                {unlockedCount} of {BADGES.length} Badges Unlocked
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close badges"
          >
            <X size={20} />
          </button>
        </div>

        {/* Category Filters */}
        <div className={`px-6 py-3.5 border-b flex items-center gap-2 overflow-x-auto text-xs sm:text-sm ${getFilterStripStyle()}`}>
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap transition-colors cursor-pointer ${
                filterCategory === cat
                  ? 'bg-amber-600 text-white shadow-2xs'
                  : isDark
                  ? 'bg-[#2E3544] text-slate-300 hover:bg-[#384152] border border-[#3E485A]'
                  : 'bg-[#EDE4D6] text-slate-800 hover:bg-[#DFD3C2] border border-[#CDBFB0]'
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
                    ? isDark ? 'bg-amber-950/30 border-amber-800/50 shadow-2xs' : 'bg-amber-100/60 border-amber-300 shadow-2xs'
                    : isDark ? 'bg-[#242A34]/50 border-[#2E3544] opacity-50' : 'bg-[#DDD2C0]/50 border-[#C8BBA8] opacity-60'
                }`}
              >
                {/* Badge Icon / Lock */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                  isUnlocked
                    ? isDark ? 'bg-amber-950/50 border-amber-700/50' : 'bg-amber-200/70 border-amber-300'
                    : isDark ? 'bg-[#181D24] border-[#2E3544]' : 'bg-[#D2C5B2] border-[#BEB09C]'
                }`}>
                  {isUnlocked ? getIcon(badge.icon, true) : <Lock size={20} className="text-slate-400" />}
                </div>

                {/* Badge Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="font-bold text-sm sm:text-base leading-tight">
                      {badge.title}
                    </h4>
                    {isUnlocked && (
                      <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-200/80 dark:bg-emerald-950/40 px-2 py-0.5 rounded flex items-center gap-1 border border-emerald-300 dark:border-emerald-800/50">
                        <CheckCircle2 size={12} /> Earned
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm opacity-80 mt-1 leading-snug">
                    {badge.description}
                  </p>

                  <div className="mt-2 text-xs font-semibold opacity-70 flex items-center justify-between">
                    <span>Criteria: {badge.unlockedCriteria}</span>
                    {unlockDate && (
                      <span className="text-amber-900 dark:text-amber-200 font-bold">
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
        <div className={`p-4 border-t text-center text-xs sm:text-sm opacity-80 font-medium ${getFilterStripStyle()}`}>
          Complete quizzes and master topics across Key Stages to earn all digital rewards.
        </div>
      </div>
    </div>
  );
};

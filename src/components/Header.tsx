import React, { useState } from 'react';
import { 
  BookOpen, 
  Award, 
  Flame, 
  Search, 
  Volume2, 
  Menu, 
  X, 
  CheckCircle2, 
  Sparkles,
  Type
} from 'lucide-react';
import { DifficultyLevel, UserProgress, StudyTheme, FontSizePreference } from '../types';
import { ALL_TOPICS, LEVEL_METADATA } from '../data/curriculum';

interface HeaderProps {
  currentLevel: DifficultyLevel;
  onSelectLevel: (lvl: DifficultyLevel) => void;
  progress: UserProgress;
  onOpenBadges: () => void;
  onOpenProgressModal: () => void;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSelectTopic: (topicId: string) => void;
  speechRate: number;
  onChangeSpeechRate: (rate: number) => void;
  studyTheme: StudyTheme;
  onChangeStudyTheme: (theme: StudyTheme) => void;
  fontSize?: FontSizePreference;
  onChangeFontSize?: (size: FontSizePreference) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLevel,
  onSelectLevel,
  progress,
  onOpenBadges,
  onOpenProgressModal,
  onToggleSidebar,
  isSidebarOpen,
  searchQuery,
  onSearchChange,
  onSelectTopic,
  speechRate,
  onChangeSpeechRate,
  studyTheme,
  onChangeStudyTheme,
  fontSize = 'large',
  onChangeFontSize,
}) => {
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [showFontMenu, setShowFontMenu] = useState(false);

  const completedCount = progress.completedTopics.length;
  const totalCount = ALL_TOPICS.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const searchResults = searchQuery.trim()
    ? ALL_TOPICS.filter(
        t =>
          t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.levelStage.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const levels: DifficultyLevel[] = ['level-1', 'level-2', 'level-3', 'level-4', 'level-5'];

  const themeMeta: Record<StudyTheme, { label: string; icon: string; desc: string }> = {
    'pastel-warm': { label: 'Pastel Oatmeal', icon: '🌾', desc: 'Soft matte linen, zero glare' },
    'pastel-sage': { label: 'Pastel Sage', icon: '🌿', desc: 'Gentle mint tea tint' },
    'pastel-lavender': { label: 'Pastel Heather', icon: '🪻', desc: 'Soothing lilac calm' },
    'pastel-peach': { label: 'Pastel Apricot', icon: '🍑', desc: 'Warm comforting peach' },
    'pastel-night': { label: 'Pastel Night', icon: '🌙', desc: 'Soft low-light indigo' },
    'warm-paper': { label: 'Pastel Oatmeal', icon: '🌾', desc: 'Soft matte linen' },
    'calm-sage': { label: 'Pastel Sage', icon: '🌿', desc: 'Gentle mint tea tint' },
    'dark-study': { label: 'Pastel Night', icon: '🌙', desc: 'Soft low-light indigo' },
  };

  const isDark = studyTheme === 'pastel-night' || studyTheme === 'dark-study';
  const isSage = studyTheme === 'pastel-sage' || studyTheme === 'calm-sage';
  const isLavender = studyTheme === 'pastel-lavender';
  const isPeach = studyTheme === 'pastel-peach';

  const getHeaderBg = () => {
    if (isDark) return 'bg-[#1C2027] border-[#2C323E] text-[#E5EAF2]';
    if (isSage) return 'bg-[#DFEAE2] border-[#C7DBD0] text-[#1C2922]';
    if (isLavender) return 'bg-[#E5DDEE] border-[#CEC2DC] text-[#241E2F]';
    if (isPeach) return 'bg-[#EFE1D4] border-[#DDC8B6] text-[#2C211B]';
    return 'bg-[#ECE5DA] border-[#DDD5C7] text-[#252830]';
  };

  const getPillBg = () => {
    if (isDark) return 'bg-[#252B35] border-[#384254] text-slate-200';
    if (isSage) return 'bg-[#D2E4D7] border-[#BAD2C2] text-[#1C2922]';
    if (isLavender) return 'bg-[#DACFE4] border-[#C3B5D3] text-[#241E2F]';
    if (isPeach) return 'bg-[#E5D4C3] border-[#D4BFAB] text-[#2C211B]';
    return 'bg-[#E0D7C9] border-[#CDC2B2] text-[#252830]';
  };

  const getDropdownBg = () => {
    if (isDark) return 'bg-[#20252F] border-[#343E4E] text-[#E5EAF2]';
    if (isSage) return 'bg-[#DEECE2] border-[#C5DACD] text-[#1C2922]';
    if (isLavender) return 'bg-[#E3DAEC] border-[#CCC0DA] text-[#241E2F]';
    if (isPeach) return 'bg-[#EDE0D2] border-[#DAC6B3] text-[#2C211B]';
    return 'bg-[#E9E1D4] border-[#D8CEBF] text-[#252830]';
  };

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-200 border-b ${getHeaderBg()} shadow-xs`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 gap-2 sm:gap-4">
          
          {/* Left: Mobile Nav Toggle & Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              id="btn-toggle-sidebar"
              onClick={onToggleSidebar}
              className={`p-2 rounded-xl transition-colors md:hidden focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer ${
                isDark 
                  ? 'text-slate-300 hover:bg-[#282E39]' 
                  : 'text-slate-800 hover:bg-black/10'
              }`}
              aria-label="Toggle navigation chapters"
            >
              {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <div 
              className="flex items-center gap-2.5 cursor-pointer select-none"
              onClick={() => onSelectLevel('level-1')}
            >
              <div className="w-8 h-8 bg-amber-600 rounded-xl flex items-center justify-center text-white font-bold text-base shadow-xs">
                G
              </div>
              <div>
                <span className="font-heading font-bold text-base sm:text-lg tracking-tight block leading-tight">
                  Grammar<span className="text-amber-600">Master</span>
                </span>
                <span className="hidden sm:block text-[10px] font-bold tracking-wider opacity-70 uppercase">
                  Pastel Study Edition
                </span>
              </div>
            </div>
          </div>

          {/* Level Selector Tabs (Soft pastel pill tabs) */}
          <nav className={`hidden lg:flex items-center gap-1 p-1 rounded-2xl border text-xs ${getPillBg()}`}>
            {levels.map(lvl => {
              const meta = LEVEL_METADATA[lvl];
              const isActive = currentLevel === lvl;
              const lvlCompleted = ALL_TOPICS.filter(t => t.level === lvl && progress.completedTopics.includes(t.id)).length;
              const lvlTotal = LEVEL_METADATA[lvl].topicsCount;
              const isAllDone = lvlCompleted === lvlTotal;

              return (
                <button
                  key={lvl}
                  type="button"
                  id={`nav-level-${lvl}`}
                  onClick={() => onSelectLevel(lvl)}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-amber-600 text-white shadow-xs'
                      : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-white/10'
                      : 'text-slate-800 hover:text-slate-950 hover:bg-black/5'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${
                    isAllDone ? 'bg-emerald-400' : isActive ? 'bg-white' : 'bg-slate-400 opacity-60'
                  }`} />
                  <span>{meta.number}. {meta.stageName.split(' ')[0]} {meta.stageName.includes('KS') ? meta.stageName.split('(')[0] : ''}</span>
                  {isAllDone && <CheckCircle2 size={13} className={isActive ? 'text-white' : 'text-emerald-500'} />}
                </button>
              );
            })}
          </nav>

          {/* Search Box */}
          <div className="relative flex-1 max-w-xs hidden sm:block">
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60" />
              <input
                type="text"
                id="search-input"
                value={searchQuery}
                onChange={e => {
                  onSearchChange(e.target.value);
                  setShowSearchDropdown(true);
                }}
                onFocus={() => setShowSearchDropdown(true)}
                placeholder="Search topics (e.g. adverbs, commas)..."
                className={`w-full pl-8.5 pr-3 py-1.5 rounded-xl text-xs placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-amber-500/40 transition-colors border ${
                  isDark
                    ? 'bg-[#252B35] border-[#384254] text-white focus:bg-[#2C3340]'
                    : 'bg-[#F4EEE4] border-[#D5CABB] text-[#252830] focus:bg-[#FAF6F0]'
                }`}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 text-xs p-1"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Search Dropdown */}
            {showSearchDropdown && searchResults.length > 0 && (
              <div 
                className={`absolute left-0 right-0 top-full mt-1.5 rounded-2xl shadow-xl border p-1.5 z-50 overflow-hidden ${getDropdownBg()}`}
                onMouseLeave={() => setShowSearchDropdown(false)}
              >
                {searchResults.map(topic => (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => {
                      onSelectTopic(topic.id);
                      setShowSearchDropdown(false);
                      onSearchChange('');
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between group transition-colors cursor-pointer ${
                      isDark ? 'hover:bg-white/10' : 'hover:bg-amber-600/15'
                    }`}
                  >
                    <div>
                      <div className="font-semibold group-hover:text-amber-600">
                        {topic.title}
                      </div>
                      <div className="text-[10px] opacity-60">
                        {topic.levelStage} • {topic.categoryLabel}
                      </div>
                    </div>
                    <span className="text-[10px] bg-amber-500/25 text-amber-950 dark:text-amber-100 px-2 py-0.5 rounded-full font-bold border border-amber-500/40">
                      {topic.levelLabel.split(':')[0]}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Action Icons: Font Size Scaler, Pastel Atmosphere Switcher, Speech Rate, Streak, Points */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* Font Size Scaler (Aa) */}
            <div className="relative">
              <button
                type="button"
                id="btn-font-size-toggle"
                onClick={() => setShowFontMenu(!showFontMenu)}
                title={`Text Size: ${fontSize.toUpperCase()}`}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer border ${getPillBg()}`}
              >
                <Type size={14} className="text-amber-600" />
                <span className="text-xs font-extrabold">{fontSize === 'normal' ? 'A' : fontSize === 'large' ? 'A+' : 'A++'}</span>
              </button>

              {showFontMenu && (
                <div 
                  className={`absolute right-0 top-full mt-1.5 rounded-2xl shadow-xl border p-2 w-44 z-50 text-xs ${getDropdownBg()}`}
                  onMouseLeave={() => setShowFontMenu(false)}
                >
                  <div className="px-2 py-1 font-bold text-[10px] opacity-60 uppercase tracking-wider">
                    Text Display Size
                  </div>
                  {[
                    { key: 'normal' as FontSizePreference, label: 'Standard', sub: '15px compact' },
                    { key: 'large' as FontSizePreference, label: 'Large (Comfort)', sub: '17px easy read' },
                    { key: 'xlarge' as FontSizePreference, label: 'Extra Large', sub: '19px prominent' },
                  ].map(item => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => {
                        if (onChangeFontSize) onChangeFontSize(item.key);
                        setShowFontMenu(false);
                      }}
                      className={`w-full text-left px-2.5 py-2 rounded-xl text-xs flex items-center justify-between transition-colors cursor-pointer ${
                        fontSize === item.key
                          ? 'bg-amber-600 text-white font-bold shadow-2xs'
                          : isDark ? 'hover:bg-white/10 text-slate-300' : 'hover:bg-black/5 text-slate-800'
                      }`}
                    >
                      <div>
                        <div className="font-semibold">{item.label}</div>
                        <div className={`text-[10px] ${fontSize === item.key ? 'text-amber-100' : 'opacity-60'}`}>{item.sub}</div>
                      </div>
                      {fontSize === item.key && <CheckCircle2 size={14} className="text-white shrink-0" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Pastel Eye-Comfort Theme Switcher */}
            <div className="relative">
              <button
                type="button"
                id="btn-study-theme-toggle"
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                title="Eye Comfort: Pastel Study Themes"
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer border ${getPillBg()}`}
              >
                <span>{themeMeta[studyTheme]?.icon || '🌾'}</span>
                <span className="hidden sm:inline font-semibold">{themeMeta[studyTheme]?.label || 'Pastel'}</span>
              </button>

              {showThemeMenu && (
                <div 
                  className={`absolute right-0 top-full mt-1.5 rounded-2xl shadow-xl border p-2 w-56 z-50 text-xs ${getDropdownBg()}`}
                  onMouseLeave={() => setShowThemeMenu(false)}
                >
                  <div className="px-2 py-1 font-bold text-[10px] opacity-60 uppercase tracking-wider">
                    Pastel Colour Palettes
                  </div>
                  {([
                    'pastel-warm',
                    'pastel-sage',
                    'pastel-lavender',
                    'pastel-peach',
                    'pastel-night'
                  ] as StudyTheme[]).map(t => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => {
                        onChangeStudyTheme(t);
                        setShowThemeMenu(false);
                      }}
                      className={`w-full text-left px-2.5 py-2 rounded-xl text-xs flex items-center justify-between transition-colors cursor-pointer ${
                        studyTheme === t
                          ? 'bg-amber-600 text-white font-bold shadow-2xs'
                          : isDark ? 'hover:bg-white/10 text-slate-300' : 'hover:bg-black/5 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{themeMeta[t]?.icon}</span>
                        <div>
                          <div className="font-semibold leading-tight">{themeMeta[t]?.label}</div>
                          <div className={`text-[10px] ${studyTheme === t ? 'text-amber-100' : 'opacity-60'} font-normal`}>
                            {themeMeta[t]?.desc}
                          </div>
                        </div>
                      </div>
                      {studyTheme === t && <CheckCircle2 size={14} className="text-white shrink-0" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Audio Voice Speed Toggle */}
            <div className="relative">
              <button
                type="button"
                id="btn-speed-toggle"
                onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                title={`UK Voice Speed: ${speechRate}x`}
                className={`flex items-center gap-1 p-1.5 sm:px-2.5 sm:py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer border ${getPillBg()}`}
              >
                <Volume2 size={15} className="text-amber-600" />
                <span className="hidden sm:inline">{speechRate}x</span>
              </button>

              {showSpeedMenu && (
                <div 
                  className={`absolute right-0 top-full mt-1.5 rounded-2xl shadow-xl border p-1.5 w-42 z-50 text-xs ${getDropdownBg()}`}
                  onMouseLeave={() => setShowSpeedMenu(false)}
                >
                  <div className="px-2 py-1 font-bold text-[10px] opacity-60 uppercase tracking-wider">
                    UK Speech Speed
                  </div>
                  {[
                    { rate: 0.8, label: '0.8x (Gentle / KS1)' },
                    { rate: 1.0, label: '1.0x (Standard)' },
                    { rate: 1.2, label: '1.2x (Fast)' },
                  ].map(opt => (
                    <button
                      key={opt.rate}
                      type="button"
                      onClick={() => {
                        onChangeSpeechRate(opt.rate);
                        setShowSpeedMenu(false);
                      }}
                      className={`w-full text-left px-2.5 py-1.5 rounded-xl text-xs flex items-center justify-between cursor-pointer ${
                        speechRate === opt.rate
                          ? 'bg-amber-600 text-white font-bold'
                          : isDark ? 'text-slate-300 hover:bg-white/10' : 'text-slate-800 hover:bg-black/5'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {speechRate === opt.rate && <CheckCircle2 size={13} className="text-white" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Streak Counter */}
            <div 
              title={`${progress.streakCount} Day Learning Streak`}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold border ${
                isDark 
                  ? 'bg-orange-950/50 border-orange-800/40 text-orange-400' 
                  : 'bg-orange-200/60 border-orange-300 text-orange-950'
              }`}
            >
              <Flame size={15} className="text-orange-600 fill-orange-600" />
              <span>{progress.streakCount}d</span>
            </div>

            {/* Badges Button */}
            <button
              type="button"
              id="btn-open-badges"
              onClick={onOpenBadges}
              title="View Digital Badges Trophy Cabinet"
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all cursor-pointer shadow-2xs group ${
                isDark
                  ? 'bg-amber-950/60 hover:bg-amber-950/80 border-amber-700/60 text-amber-100 font-bold'
                  : 'bg-amber-200/70 hover:bg-amber-300/70 border-amber-300 text-amber-950 font-bold'
              }`}
            >
              <span>🏆</span>
              <span className="text-xs sm:text-sm font-bold">
                {progress.totalCorrectAnswers * 10}
              </span>
            </button>

            {/* Overall Progress Pill */}
            <button
              type="button"
              id="btn-open-progress"
              onClick={onOpenProgressModal}
              title="View Overall Curriculum Mastery"
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors cursor-pointer border ${getPillBg()}`}
            >
              <span>{progressPercent}%</span>
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

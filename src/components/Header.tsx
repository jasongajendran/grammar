import React, { useState } from 'react';
import { 
  BookOpen, 
  Award, 
  Flame, 
  Search, 
  Volume2, 
  Menu, 
  X, 
  Sliders, 
  CheckCircle2, 
  Sparkles,
  Info
} from 'lucide-react';
import { DifficultyLevel, UserProgress } from '../types';
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
}) => {
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);

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

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-sky-100 shadow-xs">
      {/* Minimal Banner Area: Compact, focused, Vibrant Palette design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 gap-2 sm:gap-4">
          
          {/* Left: Mobile Nav Toggle & Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              id="btn-toggle-sidebar"
              onClick={onToggleSidebar}
              className="p-1.5 rounded-lg text-slate-600 hover:bg-sky-50 hover:text-sky-900 md:hidden focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Toggle navigation chapters"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div 
              className="flex items-center gap-2.5 cursor-pointer select-none"
              onClick={() => onSelectLevel('level-1')}
            >
              <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-xs">
                G
              </div>
              <div>
                <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-sky-900 block leading-tight">
                  Grammar<span className="text-sky-500">Master</span>
                </span>
                <span className="hidden sm:block text-[9px] font-bold tracking-wider text-slate-400 uppercase">
                  British Syllabus
                </span>
              </div>
            </div>
          </div>

          {/* Level Selector Tabs (Vibrant desktop pill tabs) */}
          <nav className="hidden lg:flex items-center gap-1 bg-sky-50/70 p-1 rounded-xl border border-sky-100 text-xs">
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
                  className={`px-3 py-1 rounded-lg font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-sky-500 text-white shadow-xs border border-sky-600'
                      : 'text-slate-600 hover:text-sky-900 hover:bg-white/80'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${
                    isAllDone ? 'bg-emerald-400' : isActive ? 'bg-white' : 'bg-slate-300'
                  }`} />
                  <span>{meta.number}. {meta.stageName.split(' ')[0]} {meta.stageName.includes('KS') ? meta.stageName.split('(')[0] : ''}</span>
                  {isAllDone && <CheckCircle2 size={12} className={isActive ? 'text-white' : 'text-emerald-500'} />}
                </button>
              );
            })}
          </nav>

          {/* Search Box */}
          <div className="relative flex-1 max-w-xs hidden sm:block">
            <div className="relative">
              <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
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
                className="w-full pl-8 pr-3 py-1.5 bg-slate-50 focus:bg-white border border-slate-200 focus:border-sky-300 rounded-xl text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 text-slate-800 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Search Dropdown */}
            {showSearchDropdown && searchResults.length > 0 && (
              <div 
                className="absolute left-0 right-0 top-full mt-1 bg-white rounded-2xl shadow-lg border border-sky-100 p-1.5 z-50 overflow-hidden"
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
                    className="w-full text-left px-3 py-2 hover:bg-sky-50 rounded-xl text-xs flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-slate-900 group-hover:text-sky-900">
                        {topic.title}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {topic.levelStage} • {topic.categoryLabel}
                      </div>
                    </div>
                    <span className="text-[10px] bg-sky-50 text-sky-700 px-1.5 py-0.5 rounded font-bold border border-sky-100">
                      {topic.levelLabel.split(':')[0]}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Action Icons: Badges Avatar Stack, Score Pill, Voice Speed, Progress */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Audio Voice Speed Toggle */}
            <div className="relative">
              <button
                type="button"
                id="btn-speed-toggle"
                onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                title={`UK Voice Speed: ${speechRate}x`}
                className="flex items-center gap-1 p-1.5 sm:px-2.5 sm:py-1 bg-sky-50 hover:bg-sky-100 rounded-full text-xs font-bold text-sky-800 transition-colors cursor-pointer border border-sky-100"
              >
                <Volume2 size={14} className="text-sky-600" />
                <span className="hidden sm:inline">{speechRate}x</span>
              </button>

              {showSpeedMenu && (
                <div 
                  className="absolute right-0 top-full mt-1 bg-white rounded-2xl shadow-lg border border-sky-100 p-1.5 w-40 z-50 text-xs"
                  onMouseLeave={() => setShowSpeedMenu(false)}
                >
                  <div className="px-2 py-1 font-bold text-[10px] text-slate-400 uppercase tracking-wider">
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
                      className={`w-full text-left px-2 py-1.5 rounded-xl text-xs flex items-center justify-between ${
                        speechRate === opt.rate
                          ? 'bg-sky-50 text-sky-900 font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {speechRate === opt.rate && <CheckCircle2 size={12} className="text-sky-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Streak Counter */}
            <div 
              title={`${progress.streakCount} Day Learning Streak`}
              className="flex items-center gap-1 px-2.5 py-1 bg-orange-50 border border-orange-100 text-orange-600 rounded-full text-xs font-bold"
            >
              <Flame size={14} className="text-orange-500 fill-orange-500" />
              <span>{progress.streakCount}d</span>
            </div>

            {/* Badges Avatar Stack + Trophy Button */}
            <button
              type="button"
              id="btn-open-badges"
              onClick={onOpenBadges}
              title="View Digital Badges"
              className="flex items-center gap-2 bg-amber-50 hover:bg-amber-100 px-3 py-1 rounded-full border border-amber-100 transition-all cursor-pointer shadow-2xs group"
            >
              <span className="text-amber-500">🏆</span>
              <span className="text-xs sm:text-sm font-bold text-amber-700">
                {progress.totalCorrectAnswers * 10} pts
              </span>
              
              {/* Vibrant mini badge avatars */}
              <div className="hidden md:flex -space-x-1.5 ml-1">
                <div className="w-5 h-5 rounded-full bg-blue-400 border border-white flex items-center justify-center text-[9px] text-white font-bold" title="Noun Knight">
                  🛡️
                </div>
                <div className="w-5 h-5 rounded-full bg-purple-400 border border-white flex items-center justify-center text-[9px] text-white font-bold" title="Verb Voyager">
                  ⚡
                </div>
                <div className="w-5 h-5 rounded-full bg-emerald-400 border border-white flex items-center justify-center text-[9px] text-white font-bold" title="Clause Commander">
                  📜
                </div>
              </div>
            </button>

            {/* Overall Progress Pill */}
            <button
              type="button"
              id="btn-open-progress"
              onClick={onOpenProgressModal}
              title="View overall curriculum mastery"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-sky-100 text-slate-700 hover:text-sky-700 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer border border-slate-200"
            >
              <span>{progressPercent}%</span>
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

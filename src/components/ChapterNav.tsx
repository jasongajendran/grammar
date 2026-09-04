import React from 'react';
import { 
  CheckCircle2, 
  Circle, 
  ChevronRight, 
  Layers, 
  BookOpen, 
  Compass, 
  Award, 
  Swords, 
  Crown,
  Search,
  Zap,
  Star
} from 'lucide-react';
import { DifficultyLevel, GrammarTopic, UserProgress, StudyTheme } from '../types';
import { ALL_TOPICS, LEVEL_METADATA } from '../data/curriculum';

interface ChapterNavProps {
  currentTopicId: string;
  onSelectTopic: (topicId: string) => void;
  currentLevel: DifficultyLevel;
  onSelectLevel: (lvl: DifficultyLevel) => void;
  progress: UserProgress;
  studyTheme?: StudyTheme;
  onCloseMobile?: () => void;
}

export const ChapterNav: React.FC<ChapterNavProps> = ({
  currentTopicId,
  onSelectTopic,
  currentLevel,
  onSelectLevel,
  progress,
  studyTheme = 'pastel-warm',
  onCloseMobile,
}) => {
  const levels: DifficultyLevel[] = ['level-1', 'level-2', 'level-3', 'level-4', 'level-5'];

  const isDark = studyTheme === 'pastel-night' || studyTheme === 'dark-study';
  const isSage = studyTheme === 'pastel-sage' || studyTheme === 'calm-sage';
  const isLavender = studyTheme === 'pastel-lavender';
  const isPeach = studyTheme === 'pastel-peach';

  const getAsideStyle = () => {
    if (isDark) return 'bg-[#181D24] border-[#2C3442] text-[#E5EAF2]';
    if (isSage) return 'bg-[#E5EFE7] border-[#C8DBD0] text-[#1D2B24]';
    if (isLavender) return 'bg-[#EAE2F2] border-[#CFC1DC] text-[#241E2F]';
    if (isPeach) return 'bg-[#F4E8DC] border-[#DECAB7] text-[#2C211B]';
    return 'bg-[#EFE8DC] border-[#DBD2C3] text-[#252830]';
  };

  const getHeaderStripStyle = () => {
    if (isDark) return 'bg-[#1F2530] border-[#2C3442]';
    if (isSage) return 'bg-[#DCEAE0] border-[#C8DBD0]';
    if (isLavender) return 'bg-[#E2D8EB] border-[#CFC1DC]';
    if (isPeach) return 'bg-[#ECE0D3] border-[#DECAB7]';
    return 'bg-[#E7DFCFC] border-[#DBD2C3]';
  };

  const getTopicItemStyle = () => {
    if (isDark) return 'bg-[#202630] hover:bg-[#2A3240] border-[#343E4E] text-slate-200';
    if (isSage) return 'bg-[#DEECE2] hover:bg-[#D3E4D8] border-[#C5DCD0] text-[#1C2922]';
    if (isLavender) return 'bg-[#E4DCED] hover:bg-[#D9CEE4] border-[#CEC2DC] text-[#241E2F]';
    if (isPeach) return 'bg-[#EFE1D4] hover:bg-[#E5D4C4] border-[#DDC8B6] text-[#2C211B]';
    return 'bg-[#ECE5DA] hover:bg-[#E0D7C9] border-[#DDD5C7] text-[#252830]';
  };

  const levelIcons: Record<DifficultyLevel, React.ReactNode> = {
    'level-1': <BookOpen size={16} className={isDark ? 'text-emerald-400' : 'text-emerald-700'} />,
    'level-2': <Compass size={16} className={isDark ? 'text-sky-400' : 'text-blue-700'} />,
    'level-3': <Award size={16} className={isDark ? 'text-purple-400' : 'text-indigo-700'} />,
    'level-4': <Swords size={16} className={isDark ? 'text-amber-400' : 'text-amber-700'} />,
    'level-5': <Crown size={16} className={isDark ? 'text-rose-400' : 'text-rose-700'} />,
  };

  return (
    <aside className={`w-full h-full flex flex-col border-r overflow-x-hidden ${getAsideStyle()}`}>
      {/* Level Selector Strip */}
      <div className={`p-3 border-b ${getHeaderStripStyle()}`}>
        <div className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2 px-1">
          Difficulty & Stage
        </div>
        <div className="grid grid-cols-5 gap-1.5">
          {levels.map(lvl => {
            const meta = LEVEL_METADATA[lvl];
            const isSelected = currentLevel === lvl;
            const lvlCompleted = ALL_TOPICS.filter(t => t.level === lvl && progress.completedTopics.includes(t.id)).length;
            const isAllComplete = lvlCompleted === meta.topicsCount;

            return (
              <button
                key={lvl}
                type="button"
                id={`sidebar-level-btn-${lvl}`}
                onClick={() => onSelectLevel(lvl)}
                className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-600 text-white border-amber-700 shadow-xs font-bold'
                    : isDark
                    ? 'bg-[#282E39] hover:bg-[#323947] text-slate-300 border-[#38404E]'
                    : 'bg-[#DDD4C5] hover:bg-[#D0C5B4] text-slate-800 border-[#C8BDAB]'
                }`}
              >
                <div className="font-bold text-xs sm:text-sm">L{meta.number}</div>
                <div className={`text-[10px] truncate max-w-[48px] ${isSelected ? 'text-white font-bold' : 'opacity-70'}`}>
                  {meta.stageName.includes('KS') ? meta.stageName.split(' ')[0] : 'GCSE'}
                </div>
                {isAllComplete && (
                  <CheckCircle2 size={12} className={`mt-0.5 ${isSelected ? 'text-white' : 'text-emerald-600'}`} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Current Level Heading Info */}
      <div className={`px-4 py-3 border-b flex items-center justify-between ${getHeaderStripStyle()}`}>
        <div>
          <div className="flex items-center gap-2">
            {levelIcons[currentLevel]}
            <span className="font-bold text-sm">
              {LEVEL_METADATA[currentLevel].label}
            </span>
          </div>
          <div className="text-xs opacity-70 mt-0.5 font-medium">
            {LEVEL_METADATA[currentLevel].stageName} ({LEVEL_METADATA[currentLevel].targetAge})
          </div>
        </div>
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
          isDark 
            ? 'bg-slate-800 text-slate-100 border-slate-700' 
            : 'bg-slate-900 text-white border-slate-800'
        }`}>
          {LEVEL_METADATA[currentLevel].stageName.includes('Primary') ? 'Primary' : 'Secondary'}
        </span>
      </div>

      {/* Chapter List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 overscroll-contain">
        <div className="px-1 text-xs font-bold opacity-70 uppercase tracking-widest">
          {LEVEL_METADATA[currentLevel].stageName.includes('Primary') ? 'Primary Lessons' : 'Secondary Lessons'}
        </div>

        {ALL_TOPICS.filter(t => t.level === currentLevel).map((topic, index) => {
          const isSelected = currentTopicId === topic.id;
          const isCompleted = progress.completedTopics.includes(topic.id);
          const score = progress.quizScores[topic.id];

          if (isSelected) {
            return (
              <button
                key={topic.id}
                type="button"
                id={`nav-topic-item-${topic.id}`}
                onClick={() => {
                  onSelectTopic(topic.id);
                  if (onCloseMobile) onCloseMobile();
                }}
                className="w-full text-left p-3.5 bg-amber-600 text-white border border-amber-700 rounded-2xl shadow-xs flex items-center justify-between group cursor-pointer transition-all"
              >
                <div className="flex flex-col items-start min-w-0 pr-2">
                  <span className="text-xs font-bold text-white/90 uppercase tracking-wider">
                    Level {LEVEL_METADATA[currentLevel].number} • Step {index + 1}
                  </span>
                  <span className="text-base font-bold truncate text-white">
                    {topic.title}
                  </span>
                  <span className="text-xs text-white/85 truncate mt-0.5">
                    {topic.categoryLabel}
                  </span>
                </div>
                <div className="w-3 h-3 bg-white rounded-full animate-pulse shrink-0" />
              </button>
            );
          }

          return (
            <button
              key={topic.id}
              type="button"
              id={`nav-topic-item-${topic.id}`}
              onClick={() => {
                onSelectTopic(topic.id);
                if (onCloseMobile) onCloseMobile();
              }}
              className={`w-full text-left p-3.5 rounded-2xl transition-colors flex items-center justify-between group cursor-pointer border shadow-2xs ${getTopicItemStyle()}`}
            >
              <div className="flex flex-col items-start min-w-0 pr-2">
                <div className="flex items-center gap-1.5">
                  <span className={`text-xs font-bold ${isCompleted ? 'text-emerald-700 dark:text-emerald-400' : 'opacity-70'}`}>
                    Level {LEVEL_METADATA[currentLevel].number}
                  </span>
                  {score !== undefined && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950">
                      {score}%
                    </span>
                  )}
                </div>
                <span className="text-sm sm:text-base font-bold truncate group-hover:text-amber-700 dark:group-hover:text-amber-300 text-slate-900 dark:text-slate-100">
                  {topic.title}
                </span>
                <span className="text-xs opacity-70 truncate mt-0.5">
                  {topic.categoryLabel}
                </span>
              </div>

              {isCompleted ? (
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg shrink-0">✓</span>
              ) : (
                <ChevronRight size={18} className="opacity-40 group-hover:opacity-100 group-hover:text-amber-600 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Progress Footer */}
      <div className={`p-3.5 border-t text-xs ${getHeaderStripStyle()}`}>
        <div className="flex justify-between items-center mb-1.5 text-xs font-bold">
          <span className="opacity-80">{LEVEL_METADATA[currentLevel].label} Progress</span>
          <span className="text-slate-900 dark:text-slate-100 font-extrabold">
            {ALL_TOPICS.filter(t => t.level === currentLevel && progress.completedTopics.includes(t.id)).length} / {LEVEL_METADATA[currentLevel].topicsCount}
          </span>
        </div>
        <div className={`w-full h-2 rounded-full overflow-hidden border ${
          isDark ? 'bg-[#2B313D] border-[#38404E]' : 'bg-[#DDD3C3] border-[#C9BDAA]'
        }`}>
          <div
            className="bg-amber-600 h-full transition-all duration-300 rounded-full"
            style={{
              width: `${
                (ALL_TOPICS.filter(t => t.level === currentLevel && progress.completedTopics.includes(t.id)).length /
                  LEVEL_METADATA[currentLevel].topicsCount) *
                100
              }%`,
            }}
          />
        </div>
      </div>
    </aside>
  );
};

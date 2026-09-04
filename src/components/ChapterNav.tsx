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
import { DifficultyLevel, GrammarTopic, UserProgress } from '../types';
import { ALL_TOPICS, LEVEL_METADATA } from '../data/curriculum';

interface ChapterNavProps {
  currentTopicId: string;
  onSelectTopic: (topicId: string) => void;
  currentLevel: DifficultyLevel;
  onSelectLevel: (lvl: DifficultyLevel) => void;
  progress: UserProgress;
  onCloseMobile?: () => void;
}

export const ChapterNav: React.FC<ChapterNavProps> = ({
  currentTopicId,
  onSelectTopic,
  currentLevel,
  onSelectLevel,
  progress,
  onCloseMobile,
}) => {
  const levels: DifficultyLevel[] = ['level-1', 'level-2', 'level-3', 'level-4', 'level-5'];

  const levelIcons: Record<DifficultyLevel, React.ReactNode> = {
    'level-1': <BookOpen size={15} className="text-emerald-600" />,
    'level-2': <Compass size={15} className="text-blue-600" />,
    'level-3': <Award size={15} className="text-indigo-600" />,
    'level-4': <Swords size={15} className="text-amber-600" />,
    'level-5': <Crown size={15} className="text-rose-600" />,
  };

  return (
    <aside className="w-full h-full flex flex-col bg-sky-50/40 border-r border-sky-100">
      {/* Level Selector Strip */}
      <div className="p-3 border-b border-sky-100 bg-white">
        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-1">
          Difficulty & Stage
        </div>
        <div className="grid grid-cols-5 gap-1">
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
                className={`flex flex-col items-center justify-center p-1.5 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-sky-500 text-white border-sky-600 shadow-xs'
                    : 'bg-slate-50 hover:bg-sky-50 hover:border-sky-200 text-slate-700 border-slate-200'
                }`}
              >
                <div className="font-bold text-xs">L{meta.number}</div>
                <div className={`text-[9px] truncate max-w-[48px] ${isSelected ? 'text-sky-100' : 'text-slate-500'}`}>
                  {meta.stageName.includes('KS') ? meta.stageName.split(' ')[0] : 'GCSE'}
                </div>
                {isAllComplete && (
                  <CheckCircle2 size={10} className={`mt-0.5 ${isSelected ? 'text-white' : 'text-emerald-500'}`} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Current Level Heading Info */}
      <div className="px-4 py-2.5 bg-white/60 border-b border-sky-100 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            {levelIcons[currentLevel]}
            <span className="font-bold text-xs text-sky-950">
              {LEVEL_METADATA[currentLevel].label}
            </span>
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">
            {LEVEL_METADATA[currentLevel].stageName} ({LEVEL_METADATA[currentLevel].targetAge})
          </div>
        </div>
        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">
          {LEVEL_METADATA[currentLevel].stageName.includes('Primary') ? 'Primary' : 'Secondary'}
        </span>
      </div>

      {/* Chapter List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        <div className="px-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          {LEVEL_METADATA[currentLevel].stageName.includes('Primary') ? 'Primary School Lessons' : 'Secondary School Lessons'}
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
                className="w-full text-left p-3 bg-sky-500 text-white border border-sky-600 rounded-2xl shadow-xs flex items-center justify-between group cursor-pointer transition-all"
              >
                <div className="flex flex-col items-start min-w-0 pr-2">
                  <span className="text-[11px] font-bold text-sky-100 uppercase tracking-wider">
                    Level {LEVEL_METADATA[currentLevel].number} • Step {index + 1}
                  </span>
                  <span className="text-sm font-bold truncate text-white">
                    {topic.title}
                  </span>
                  <span className="text-[10px] text-sky-100 truncate mt-0.5">
                    {topic.categoryLabel}
                  </span>
                </div>
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse shrink-0" />
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
              className="w-full text-left p-3 bg-white border border-slate-200 hover:border-sky-300 rounded-2xl transition-colors flex items-center justify-between group cursor-pointer shadow-2xs"
            >
              <div className="flex flex-col items-start min-w-0 pr-2">
                <div className="flex items-center gap-1.5">
                  <span className={`text-[11px] font-bold ${isCompleted ? 'text-emerald-600' : 'text-slate-400'}`}>
                    Level {LEVEL_METADATA[currentLevel].number}
                  </span>
                  {score !== undefined && (
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-sky-50 text-sky-700 border border-sky-100">
                      {score}%
                    </span>
                  )}
                </div>
                <span className="text-sm font-semibold text-slate-800 group-hover:text-sky-900 truncate">
                  {topic.title}
                </span>
                <span className="text-[10px] text-slate-400 truncate mt-0.5">
                  {topic.categoryLabel}
                </span>
              </div>

              {isCompleted ? (
                <span className="text-emerald-500 font-bold text-base shrink-0">✓</span>
              ) : (
                <ChevronRight size={15} className="text-slate-300 group-hover:text-sky-500 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Progress Footer */}
      <div className="p-3 bg-white border-t border-sky-100 text-xs text-slate-600">
        <div className="flex justify-between items-center mb-1 text-[11px] font-bold">
          <span className="text-slate-600">{LEVEL_METADATA[currentLevel].label} Progress</span>
          <span className="text-sky-600">
            {ALL_TOPICS.filter(t => t.level === currentLevel && progress.completedTopics.includes(t.id)).length} / {LEVEL_METADATA[currentLevel].topicsCount}
          </span>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200/80">
          <div
            className="bg-sky-500 h-full transition-all duration-300 rounded-full"
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

import React from 'react';
import { 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Lightbulb, 
  AlertCircle, 
  Bookmark, 
  BookmarkCheck, 
  BookOpen, 
  Sparkles,
  HelpCircle,
  Clock,
  Zap,
  Target,
  Volume2
} from 'lucide-react';
import { GrammarTopic, UserProgress, DifficultyLevel, StudyTheme } from '../types';
import { ReadableBox, ReadableIcon } from './ReadableBox';
import { InteractiveQuiz } from './InteractiveQuiz';
import { LEVEL_METADATA, getNextTopic, getPrevTopic } from '../data/curriculum';
import { getThematicImageForLevel } from '../utils/assets';
import { ConceptVisualizer } from './ConceptVisualizer';
import { formatMarkdown } from '../utils/formatText';

interface TopicViewProps {
  topic: GrammarTopic;
  progress: UserProgress;
  onCompleteTopicQuiz: (topicId: string, scorePercent: number) => void;
  onNavigateTopic: (topicId: string) => void;
  onToggleBookmark: (topicId: string) => void;
  speechRate: number;
  studyTheme?: StudyTheme;
}

export const TopicView: React.FC<TopicViewProps> = ({
  topic,
  progress,
  onCompleteTopicQuiz,
  onNavigateTopic,
  onToggleBookmark,
  speechRate,
  studyTheme = 'pastel-warm',
}) => {
  const isCompleted = progress.completedTopics.includes(topic.id);
  const isBookmarked = progress.bookmarkedTopics.includes(topic.id);
  const userScore = progress.quizScores[topic.id];

  const prevTopic = getPrevTopic(topic.id);
  const nextTopic = getNextTopic(topic.id);
  const meta = LEVEL_METADATA[topic.level];

  const isDark = studyTheme === 'pastel-night' || studyTheme === 'dark-study';
  const isSage = studyTheme === 'pastel-sage' || studyTheme === 'calm-sage';
  const isLavender = studyTheme === 'pastel-lavender';
  const isPeach = studyTheme === 'pastel-peach';

  // Pastel Card Background helper
  const getCardStyle = () => {
    if (isDark) return 'bg-[#202630] border-[#343E4E] text-[#E5EAF2]';
    if (isSage) return 'bg-[#DEECE2] border-[#C7DBD0] text-[#1C2922]';
    if (isLavender) return 'bg-[#E4DCED] border-[#CEC2DC] text-[#241E2F]';
    if (isPeach) return 'bg-[#EFE1D4] border-[#DDC8B6] text-[#2C211B]';
    return 'bg-[#ECE5DA] border-[#DDD5C7] text-[#252830]';
  };

  // Pastel Sub-box Background helper
  const getSubBoxStyle = () => {
    if (isDark) return 'bg-[#28303E] border-[#3E495D] text-[#E5EAF2]';
    if (isSage) return 'bg-[#D3E4D8] border-[#BDD6C5] text-[#1C2922]';
    if (isLavender) return 'bg-[#D9CEE4] border-[#C4B4D5] text-[#241E2F]';
    if (isPeach) return 'bg-[#E5D4C4] border-[#D5C0AC] text-[#2C211B]';
    return 'bg-[#E0D7C9] border-[#CDC1AF] text-[#252830]';
  };

  // Pastel Tip Box Background helper
  const getTipBoxStyle = () => {
    if (isDark) return 'bg-[#252B35] border-[#3D4758] text-[#E5EAF2]';
    if (isSage) return 'bg-[#E8F3EB] border-[#C2DBCC] text-[#1C2922]';
    if (isLavender) return 'bg-[#ECE4F3] border-[#CEC0DC] text-[#241E2F]';
    if (isPeach) return 'bg-[#F6ECE2] border-[#DFCBBB] text-[#2C211B]';
    return 'bg-[#F2ECE1] border-[#D8CEBF] text-[#252830]';
  };

  const thematicArt = getThematicImageForLevel(topic.level);

  return (
    <article className="max-w-4xl mx-auto py-4 sm:py-6 px-3 sm:px-6 lg:px-8 space-y-6 overflow-x-clip">
      
      {/* 1. Header Banner with Artwork & Meta Tags */}
      <div className={`rounded-3xl border p-5 sm:p-8 shadow-xs transition-colors overflow-hidden ${getCardStyle()}`}>
        
        {/* Thematic Visual Hero Strip */}
        <div className="relative rounded-2xl overflow-hidden mb-6 border border-black/10 dark:border-white/10 shadow-sm max-h-48 sm:max-h-56">
          <img 
            src={thematicArt.src} 
            alt={thematicArt.alt}
            referrerPolicy="no-referrer"
            className="w-full h-48 sm:h-56 object-cover object-center filter brightness-95 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-amber-500 text-slate-950 shadow-sm">
                UK Curriculum Edition
              </span>
              <span className="text-xs text-white/90 font-medium hidden sm:inline">
                {topic.levelLabel}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white/95 line-clamp-1 drop-shadow-sm">
              {thematicArt.tagline}
            </p>
          </div>
        </div>

        {/* Level Badges & Quick Controls */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-2xs ${
              isDark 
                ? 'bg-slate-800 text-slate-100 border border-slate-700' 
                : `${meta.bgColor} ${meta.textColor} border ${meta.borderColor}`
            }`}>
              {topic.levelLabel} • {topic.levelStage}
            </span>
            <span className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border ${getSubBoxStyle()}`}>
              {topic.categoryLabel}
            </span>
            <span className="flex items-center gap-1.5 text-xs sm:text-sm opacity-70 font-medium ml-1">
              <Clock size={15} />
              {topic.estimatedMinutes} mins
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id={`btn-bookmark-${topic.id}`}
              onClick={() => onToggleBookmark(topic.id)}
              title={isBookmarked ? 'Remove bookmark' : 'Bookmark this lesson'}
              className={`p-2 rounded-full border transition-colors cursor-pointer ${
                isDark
                  ? 'border-[#38404E] text-slate-300 hover:bg-[#282E39]'
                  : 'border-[#C8BDAB] text-slate-800 hover:bg-black/10'
              }`}
            >
              {isBookmarked ? (
                <BookmarkCheck size={18} className="text-amber-700 fill-amber-600/30" />
              ) : (
                <Bookmark size={18} />
              )}
            </button>

            {isCompleted && (
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-bold border ${
                isDark
                  ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800/50'
                  : 'bg-emerald-200/80 text-emerald-950 border-emerald-300'
              }`}>
                <CheckCircle2 size={15} className="text-emerald-600" />
                Mastered ({userScore}%)
              </span>
            )}
          </div>
        </div>

        {/* Title and Voice Narration */}
        <div className="mb-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold tracking-tight">
            <span>{topic.title}</span>
          </h1>
        </div>

        <p className="text-base sm:text-lg opacity-85 font-medium leading-relaxed mb-5">
          {topic.subtitle}
        </p>

        {/* Overview definition box - clickable to read aloud */}
        <ReadableBox
          text={`${topic.title}. ${topic.subtitle}. ${topic.overview}`}
          textId={`topic-header-${topic.id}`}
          speechRate={speechRate}
          className={`p-4 sm:p-6 rounded-2xl border text-sm sm:text-base leading-relaxed ${getSubBoxStyle()}`}
        >
          <div className="flex items-center justify-between mb-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 shadow-2xs">
              Grammar Definition
            </span>
            <ReadableIcon size={16} className="text-slate-600 dark:text-slate-400 opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
          <p 
            className="text-slate-900 dark:text-slate-100 leading-relaxed font-normal"
            dangerouslySetInnerHTML={{ 
              __html: formatMarkdown(topic.overview, { boldClass: 'font-extrabold text-slate-950 dark:text-white bg-amber-400/25 dark:bg-amber-400/20 px-1 py-0.5 rounded border-b-2 border-amber-600 dark:border-amber-400' })
            }} 
          />
        </ReadableBox>
      </div>

      {/* 2. Interactive Concept Visualizer (Innovative animated lab) */}
      <ConceptVisualizer
        topic={topic}
        studyTheme={studyTheme}
        speechRate={speechRate}
      />

      {/* 3. Structured Sections with Highlighted Examples */}
      <div className="space-y-6">
        {topic.sections.map((section) => (
          <section
            key={section.id}
            className={`rounded-3xl border p-5 sm:p-8 shadow-xs space-y-5 transition-colors ${getCardStyle()}`}
          >
            {/* Section Explanation Box - Individually Readable */}
            <ReadableBox
              text={`${section.title}. ${section.content}. ${section.bulletPoints?.join('. ') || ''}`}
              textId={`sec-audio-${topic.id}-${section.id}`}
              speechRate={speechRate}
              className={`p-4 sm:p-5 rounded-2xl border transition-colors space-y-3 ${getSubBoxStyle()}`}
            >
              {/* Section Header */}
              <div className={`flex items-center justify-between gap-3 border-b pb-2.5 ${
                isDark ? 'border-[#343E4E]' : 'border-[#DDD4C5]'
              }`}>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white">
                  {section.title}
                </h2>
                <ReadableIcon size={18} className="text-amber-600 dark:text-amber-400 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>

              {/* Section Content with Bold Emphasis */}
              <div 
                className="text-sm sm:text-base lg:text-lg leading-relaxed text-slate-900 dark:text-slate-100 opacity-95"
                dangerouslySetInnerHTML={{
                  __html: formatMarkdown(section.content, { boldClass: 'font-extrabold text-slate-950 dark:text-white underline decoration-amber-600 dark:decoration-amber-400 decoration-2' })
                }}
              />

              {/* Bullet Points with Highlighted Keywords */}
              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <div className="pt-2">
                  <ul className="space-y-2.5 text-sm sm:text-base">
                    {section.bulletPoints.map((bp, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0" />
                        <span 
                          dangerouslySetInnerHTML={{
                            __html: formatMarkdown(bp, { boldClass: 'font-bold text-slate-950 dark:text-white' })
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </ReadableBox>

            {/* Illustrated British Examples Section */}
            <div className="space-y-3 pt-2">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-widest opacity-70 flex items-center gap-1.5">
                <Sparkles size={16} className="text-amber-600" />
                <span>Illustrated British Examples ({section.examples.length})</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section.examples.map((example, eIndex) => {
                  return (
                    <ReadableBox
                      key={example.id}
                      text={`Example ${eIndex + 1}. ${example.sentence}. Explanation: ${example.explanation}`}
                      textId={`ex-audio-${topic.id}-${example.id}`}
                      speechRate={speechRate}
                      className={`p-4 sm:p-5 rounded-2xl border transition-colors space-y-3 flex flex-col justify-between ${getSubBoxStyle()}`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-1">
                          <p className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 uppercase tracking-wider flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-400 inline-block shrink-0" />
                            Example {eIndex + 1}: {example.contextNote ? example.contextNote.split(' ')[0] : 'Pattern'}
                          </p>
                          <ReadableIcon size={15} className="text-amber-600 dark:text-amber-400 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                        </div>

                        <div className="text-base sm:text-lg font-bold leading-snug text-slate-950 dark:text-white">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: formatMarkdown(example.sentence, { boldClass: 'font-extrabold text-slate-950 dark:text-white underline decoration-amber-600 dark:decoration-amber-400 decoration-2' })
                            }}
                          />
                        </div>
                      </div>

                      <div className={`text-xs sm:text-sm p-3 rounded-xl border mt-2 ${getTipBoxStyle()}`}>
                        <b className="font-bold text-slate-900 dark:text-slate-100">Explanation: </b>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: formatMarkdown(example.explanation, { boldClass: 'font-bold text-slate-900 dark:text-slate-100' })
                          }}
                        />
                      </div>
                    </ReadableBox>
                  );
                })}
              </div>
            </div>

            {/* Rule Summary Badge - high visibility & accessible */}
            {section.ruleSummary && (
              <ReadableBox
                text={`Rule summary: ${section.ruleSummary}`}
                textId={`rule-audio-${section.id}`}
                speechRate={speechRate}
                activeClassName="ring-2 ring-amber-400 border-amber-400 shadow-xl bg-slate-950 text-amber-100"
                className={`px-4 sm:px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-medium flex items-center justify-between gap-3 shadow-md border transition-all ${
                  isDark
                    ? 'bg-slate-900 border-amber-500/40 text-amber-100'
                    : 'bg-slate-900 border-slate-800 text-amber-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 font-black uppercase tracking-wider text-xs shadow-xs shrink-0">
                    RULE
                  </span>
                  <span 
                    className="font-semibold text-amber-100 dark:text-amber-100 leading-snug"
                    dangerouslySetInnerHTML={{ __html: formatMarkdown(section.ruleSummary, { boldClass: 'font-extrabold text-white' }) }}
                  />
                </div>
                <ReadableIcon size={18} className="text-amber-400 opacity-90 group-hover:opacity-100 shrink-0" />
              </ReadableBox>
            )}
          </section>
        ))}
      </div>

      {/* 3. Tips & Tricks: Pro Memory Aids & Pitfalls */}
      {topic.tipsAndTricks && topic.tipsAndTricks.length > 0 && (
        <div className={`border-l-4 border-amber-600 p-5 sm:p-7 rounded-r-3xl rounded-l-md shadow-xs space-y-5 ${getCardStyle()}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl sm:text-3xl">💡</span>
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-extrabold text-slate-900 dark:text-slate-100">
                  Top Tips & Tricks
                </h3>
                <p className="text-xs sm:text-sm opacity-70 font-medium">
                  Reinforce key takeaways and avoid common exam traps
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {topic.tipsAndTricks.map(tip => (
              <ReadableBox
                key={tip.id}
                text={`${tip.title}. ${tip.trick}. ${tip.mnemonic ? 'Mnemonic: ' + tip.mnemonic : ''}. Common trap: ${tip.commonMistake}. Correct British form: ${tip.correctWay}.`}
                textId={`tip-box-${tip.id}`}
                speechRate={speechRate}
                className={`rounded-2xl border p-4 sm:p-5 space-y-3 shadow-2xs ${getSubBoxStyle()}`}
              >
                <div className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100 flex items-center justify-between gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <Zap size={16} className="text-amber-600 dark:text-amber-400" />
                    <span>{tip.title}</span>
                  </div>
                  <ReadableIcon size={15} className="text-amber-600 dark:text-amber-400 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>

                <p 
                  className="text-xs sm:text-sm lg:text-base text-slate-900 dark:text-slate-100 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: formatMarkdown(tip.trick, { boldClass: 'font-extrabold text-slate-950 dark:text-white bg-amber-400/25 dark:bg-amber-400/20 px-1 py-0.5 rounded border-b border-amber-600 dark:border-amber-400' })
                  }}
                />

                {tip.mnemonic && (
                  <div className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold flex items-center gap-2 ${
                    isDark
                      ? 'bg-[#181D26] border-[#384252] text-slate-100'
                      : 'bg-black/5 border-black/10 text-slate-900'
                  }`}>
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 px-2.5 py-0.5 rounded-full font-extrabold">
                      Mnemonic
                    </span>
                    <span 
                      className="font-bold text-slate-900 dark:text-slate-100"
                      dangerouslySetInnerHTML={{ __html: formatMarkdown(tip.mnemonic) }}
                    />
                  </div>
                )}

                {/* Common Mistake vs Correct Way */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-1">
                  <div className={`p-3.5 rounded-xl border ${
                    isDark
                      ? 'bg-rose-950/40 border-rose-900/50 text-rose-100'
                      : 'bg-rose-100/80 border-rose-200 text-rose-950'
                  }`}>
                    <div className="font-extrabold text-xs uppercase tracking-wider flex items-center gap-1 text-rose-800 dark:text-rose-300 mb-1">
                      <AlertCircle size={14} /> Common Trap
                    </div>
                    <div 
                      className="font-medium"
                      dangerouslySetInnerHTML={{ __html: formatMarkdown(tip.commonMistake) }}
                    />
                  </div>

                  <div className={`p-3.5 rounded-xl border ${
                    isDark
                      ? 'bg-emerald-950/40 border-emerald-900/50 text-emerald-100'
                      : 'bg-emerald-100/80 border-emerald-200 text-emerald-950'
                  }`}>
                    <div className="font-extrabold text-xs uppercase tracking-wider flex items-center gap-1 text-emerald-800 dark:text-emerald-300 mb-1">
                      <CheckCircle2 size={14} /> Correct British Form
                    </div>
                    <div 
                      className="font-medium"
                      dangerouslySetInnerHTML={{ __html: formatMarkdown(tip.correctWay) }}
                    />
                  </div>
                </div>
              </ReadableBox>
            ))}
          </div>
        </div>
      )}

      {/* 4. Progressive Interactive Exercises */}
      <div id="quiz-section" className="space-y-3 pt-2">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center font-bold shadow-sm">
            <Target size={19} />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold flex items-center gap-2">
              <span>Interactive Practice</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-extrabold uppercase tracking-wider">
                Progressive Quest
              </span>
            </h3>
            <p className="text-xs sm:text-sm opacity-75">
              Build mastery progressively through {topic.exercises.length} stepped exercises with instant explorer feedback
            </p>
          </div>
        </div>

        <InteractiveQuiz
          key={topic.id}
          topic={topic}
          onCompleteQuiz={score => onCompleteTopicQuiz(topic.id, score)}
          speechRate={speechRate}
          studyTheme={studyTheme}
        />
      </div>

      {/* 5. Navigation Controls between Chapters */}
      <div className={`pt-6 border-t flex flex-wrap items-center justify-between gap-3 ${
        isDark ? 'border-[#343E4E]' : 'border-[#DDD4C5]'
      }`}>
        {prevTopic ? (
          <button
            type="button"
            id="btn-prev-topic"
            onClick={() => onNavigateTopic(prevTopic.id)}
            className={`flex items-center gap-2 text-sm sm:text-base font-bold transition-all cursor-pointer py-2.5 px-4 rounded-2xl border ${
              isDark 
                ? 'border-slate-800 text-slate-300 hover:bg-[#282E39]' 
                : 'border-slate-200 text-slate-800 hover:bg-black/5'
            }`}
          >
            <span>←</span>
            <span>Previous: {prevTopic.title}</span>
          </button>
        ) : (
          <div />
        )}

        {nextTopic && (
          <button
            type="button"
            id="btn-next-topic"
            onClick={() => onNavigateTopic(nextTopic.id)}
            className="px-6 sm:px-8 py-3.5 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white rounded-2xl font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Next: {nextTopic.title}</span>
            <ChevronRight size={18} />
          </button>
        )}
      </div>

    </article>
  );
};

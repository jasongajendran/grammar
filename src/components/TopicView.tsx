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
  Compass,
  Zap,
  Target
} from 'lucide-react';
import { GrammarTopic, UserProgress, DifficultyLevel } from '../types';
import { AudioButton } from './AudioButton';
import { InteractiveQuiz } from './InteractiveQuiz';
import { LEVEL_METADATA, getNextTopic, getPrevTopic } from '../data/curriculum';

interface TopicViewProps {
  topic: GrammarTopic;
  progress: UserProgress;
  onCompleteTopicQuiz: (topicId: string, scorePercent: number) => void;
  onNavigateTopic: (topicId: string) => void;
  onToggleBookmark: (topicId: string) => void;
  speechRate: number;
}

export const TopicView: React.FC<TopicViewProps> = ({
  topic,
  progress,
  onCompleteTopicQuiz,
  onNavigateTopic,
  onToggleBookmark,
  speechRate,
}) => {
  const isCompleted = progress.completedTopics.includes(topic.id);
  const isBookmarked = progress.bookmarkedTopics.includes(topic.id);
  const userScore = progress.quizScores[topic.id];

  const prevTopic = getPrevTopic(topic.id);
  const nextTopic = getNextTopic(topic.id);
  const meta = LEVEL_METADATA[topic.level];

  return (
    <article className="max-w-4xl mx-auto py-5 px-3 sm:px-6 lg:px-8 space-y-6">
      
      {/* 1. Header Banner & Meta Tags */}
      <div className="bg-white rounded-3xl border border-sky-100 p-6 sm:p-8 shadow-xs">
        
        {/* Level Badges & Quick Controls */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${meta.bgColor} ${meta.textColor} border ${meta.borderColor}`}>
              {topic.levelLabel} • {topic.levelStage}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-100">
              {topic.categoryLabel}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-400 font-medium ml-1">
              <Clock size={13} />
              {topic.estimatedMinutes} mins
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id={`btn-bookmark-${topic.id}`}
              onClick={() => onToggleBookmark(topic.id)}
              title={isBookmarked ? 'Remove bookmark' : 'Bookmark this lesson'}
              className="p-2 rounded-full border border-slate-200 text-slate-600 hover:text-sky-600 hover:bg-sky-50 hover:border-sky-200 transition-colors cursor-pointer"
            >
              {isBookmarked ? (
                <BookmarkCheck size={16} className="text-sky-600 fill-sky-100" />
              ) : (
                <Bookmark size={16} />
              )}
            </button>

            {isCompleted && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                <CheckCircle2 size={14} className="text-emerald-500" />
                Mastered ({userScore}%)
              </span>
            )}
          </div>
        </div>

        {/* Title and Voice Narration */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-800 tracking-tight flex items-center gap-2">
            <span>{topic.title}</span>
          </h1>

          <AudioButton
            text={`${topic.title}. ${topic.subtitle}. ${topic.overview}`}
            textId={`topic-header-${topic.id}`}
            speechRate={speechRate}
            size="md"
            showLabel
            label="Listen to Lesson"
          />
        </div>

        <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed mb-5">
          {topic.subtitle}
        </p>

        {/* Overview definition box */}
        <div className="p-4 sm:p-5 bg-[#F0F9FF] rounded-2xl border border-sky-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="font-bold text-[10px] uppercase tracking-widest text-sky-700 mb-1">
            Grammar Definition
          </div>
          <p dangerouslySetInnerHTML={{ 
            __html: topic.overview.replace(/\*\*(.*?)\*\*/g, '<strong class="text-sky-950 font-bold">$1</strong>') 
          }} />
        </div>
      </div>

      {/* 2. Structured Sections with Highlighted Examples (Min 2 examples each) */}
      <div className="space-y-6">
        {topic.sections.map((section, sIndex) => (
          <div
            key={section.id}
            className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-xs space-y-5"
          >
            {/* Section Header */}
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-sky-900">
                {section.title}
              </h2>

              <AudioButton
                text={`${section.title}. ${section.content}. ${section.bulletPoints?.join('. ') || ''}`}
                textId={`sec-audio-${topic.id}-${section.id}`}
                speechRate={speechRate}
                size="sm"
                label="Listen"
              />
            </div>

            {/* Section Content with Bold Emphasis */}
            <div 
              className="text-xs sm:text-sm text-slate-600 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: section.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 font-bold">$1</strong>')
              }}
            />

            {/* Bullet Points with Highlighted Keywords */}
            {section.bulletPoints && section.bulletPoints.length > 0 && (
              <div className="p-4 bg-sky-50/50 rounded-2xl border border-sky-100">
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {section.bulletPoints.map((bp, bIndex) => (
                    <li key={bIndex} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
                      <span 
                        dangerouslySetInnerHTML={{
                          __html: bp.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 font-bold">$1</strong>')
                                    .replace(/\*(.*?)\*/g, '<em class="text-slate-800 italic">$1</em>')
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Minimum 2 British Examples Section (Vibrant emerald and sky cards) */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                <Sparkles size={14} className="text-amber-500" />
                <span>Illustrated British Examples ({section.examples.length})</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section.examples.map((example, eIndex) => {
                  const isEven = eIndex % 2 === 0;
                  const cardBg = isEven ? 'bg-emerald-50 border-emerald-100' : 'bg-sky-50 border-sky-100';
                  const titleColor = isEven ? 'text-emerald-700' : 'text-sky-700';

                  return (
                    <div
                      key={example.id}
                      className={`${cardBg} p-4 rounded-2xl border transition-colors space-y-2 flex flex-col justify-between`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-1">
                          <p className={`text-xs font-bold ${titleColor} uppercase tracking-wider`}>
                            Example {eIndex + 1}: {example.contextNote ? example.contextNote.split(' ')[0] : 'Pattern'}
                          </p>

                          <AudioButton
                            text={example.sentence}
                            textId={`ex-audio-${topic.id}-${example.id}`}
                            speechRate={speechRate}
                            size="sm"
                          />
                        </div>

                        <div className="text-sm font-semibold text-slate-800 leading-snug">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: example.sentence.replace(
                                /\*\*(.*?)\*\*/g,
                                '<b class="text-slate-950 font-bold underline decoration-sky-400">$1</b>'
                              ),
                            }}
                          />
                        </div>
                      </div>

                      <div className="text-xs text-slate-600 bg-white/90 p-2.5 rounded-xl border border-white/60 mt-2">
                        <b className="text-slate-800">Explanation: </b>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: example.explanation.replace(
                              /\*\*(.*?)\*\*/g,
                              '<strong class="text-slate-900 font-bold">$1</strong>'
                            ),
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Rule Summary Badge */}
            {section.ruleSummary && (
              <div className="px-4 py-2.5 bg-slate-900 text-white rounded-2xl text-xs font-medium flex items-center justify-between gap-2 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="text-sky-400 font-bold uppercase tracking-wider text-[10px]">Rule:</span>
                  <span>{section.ruleSummary}</span>
                </div>
                <AudioButton
                  text={`Rule summary: ${section.ruleSummary}`}
                  textId={`rule-audio-${section.id}`}
                  speechRate={speechRate}
                  size="sm"
                  className="bg-slate-800 text-white border-slate-700 hover:bg-slate-700"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 3. Tips & Tricks: Pro Memory Aids & Pitfalls (Vibrant Amber Border-L Card) */}
      {topic.tipsAndTricks && topic.tipsAndTricks.length > 0 && (
        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 sm:p-7 rounded-r-3xl rounded-l-md shadow-xs space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="text-base sm:text-lg font-heading font-bold text-amber-900">
                  Top Tips & Tricks
                </h3>
                <p className="text-[11px] text-amber-800/80 font-medium">
                  Reinforce key takeaways and avoid common exam traps
                </p>
              </div>
            </div>

            <AudioButton
              text={topic.tipsAndTricks.map(t => `${t.title}. ${t.trick}. ${t.commonMistake}. ${t.correctWay}.`).join(' ')}
              textId={`tips-audio-${topic.id}`}
              speechRate={speechRate}
              size="sm"
              showLabel
              label="Listen to Tips"
            />
          </div>

          <div className="space-y-4">
            {topic.tipsAndTricks.map(tip => (
              <div
                key={tip.id}
                className="bg-white/95 rounded-2xl border border-amber-200/80 p-4 space-y-3 shadow-2xs"
              >
                <div className="font-bold text-xs sm:text-sm text-amber-950 flex items-center gap-1.5">
                  <Zap size={14} className="text-amber-500" />
                  <span>{tip.title}</span>
                </div>

                <p 
                  className="text-xs text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: tip.trick.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-950 font-bold">$1</strong>')
                  }}
                />

                {tip.mnemonic && (
                  <div className="p-2.5 bg-amber-100/60 rounded-xl border border-amber-200 text-xs text-amber-950 font-semibold flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider bg-amber-300 text-amber-950 px-2 py-0.5 rounded-full font-bold">
                      Mnemonic
                    </span>
                    <span>{tip.mnemonic}</span>
                  </div>
                )}

                {/* Common Mistake vs Correct Way */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs pt-1">
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-100 text-rose-900">
                    <div className="font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 text-rose-700 mb-0.5">
                      <AlertCircle size={12} /> Common Trap
                    </div>
                    <div>{tip.commonMistake}</div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-900">
                    <div className="font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 text-emerald-700 mb-0.5">
                      <CheckCircle2 size={12} /> Correct British Form
                    </div>
                    <div>{tip.correctWay}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Progressive Interactive Exercises (Gamified Quiz Engine) */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold">
            <Target size={18} />
          </div>
          <div>
            <h3 className="text-lg font-heading font-bold text-slate-800">
              Interactive Practice
            </h3>
            <p className="text-xs text-slate-400">
              Build mastery progressively through {topic.exercises.length} stepped exercises
            </p>
          </div>
        </div>

        <InteractiveQuiz
          topic={topic}
          onCompleteQuiz={score => onCompleteTopicQuiz(topic.id, score)}
          speechRate={speechRate}
        />
      </div>

      {/* 5. Mobile-Friendly Navigation Controls between Chapters */}
      <div className="pt-6 border-t border-sky-100 flex items-center justify-between gap-3">
        {prevTopic ? (
          <button
            type="button"
            id="btn-prev-topic"
            onClick={() => onNavigateTopic(prevTopic.id)}
            className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-sky-600 transition-colors cursor-pointer py-2 px-3 rounded-xl hover:bg-sky-50"
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
            className="px-8 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-bold text-sm shadow-lg shadow-sky-200 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Next: {nextTopic.title}</span>
            <span>→</span>
          </button>
        )}
      </div>

    </article>
  );
};

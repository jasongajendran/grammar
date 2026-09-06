import React, { useState } from 'react';
import { Sparkles, Eye, Lightbulb, Bookmark, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { getVisualStudyCard } from '../utils/assets';
import { DifficultyLevel, StudyTheme } from '../types';
import { AudioButton } from './AudioButton';
import { ReadableBox, ReadableIcon } from './ReadableBox';
import { formatMarkdown } from '../utils/formatText';

interface VisualStudyPrepCardProps {
  topicId: string;
  level?: DifficultyLevel;
  speechRate?: number;
  studyTheme?: StudyTheme;
  defaultExpanded?: boolean;
}

export const VisualStudyPrepCard: React.FC<VisualStudyPrepCardProps> = ({
  topicId,
  level = 'level-1',
  speechRate = 1.0,
  studyTheme = 'pastel-warm',
  defaultExpanded = true,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const isDark = studyTheme === 'pastel-night' || studyTheme === 'dark-study';
  const studyCard = getVisualStudyCard(topicId, level);

  const getCardBg = () => {
    switch (studyTheme) {
      case 'pastel-warm':
        return 'bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-amber-600/10 border-amber-200/80 shadow-xs';
      case 'pastel-cool':
        return 'bg-gradient-to-br from-sky-500/10 via-blue-500/5 to-indigo-500/10 border-sky-200/80 shadow-xs';
      case 'pastel-mint':
        return 'bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-emerald-600/10 border-emerald-200/80 shadow-xs';
      case 'pastel-night':
        return 'bg-gradient-to-br from-[#1E2530] via-[#191E27] to-[#141820] border-[#323E50] shadow-sm';
      case 'dark-study':
        return 'bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-slate-800 shadow-sm';
      default:
        return 'bg-amber-50/70 border-amber-200 shadow-xs';
    }
  };

  const fullSpokenSummary = `${studyCard.title}. Quick Mnemonic: ${studyCard.mnemonic}. Visual Mind Picture: ${studyCard.visualAnchor}. Core Exam Rule: ${studyCard.keyRule}. Explorer Note: ${studyCard.companionTip}`;

  return (
    <div className={`rounded-3xl border transition-all overflow-hidden ${getCardBg()}`}>
      {/* Header Bar */}
      <div className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-b border-black/5 dark:border-white/5">
        <ReadableBox
          text={fullSpokenSummary}
          textId={`audio-prep-header-${topicId}`}
          speechRate={speechRate}
          className="flex items-center gap-3 min-w-0 flex-1 rounded-2xl p-1.5 -m-1.5"
        >
          <div className="w-10 h-10 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-md shrink-0">
            <Eye size={20} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base sm:text-lg font-heading font-extrabold text-slate-900 dark:text-white leading-snug">
                {studyCard.title}
              </h3>
              <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 font-black uppercase tracking-wider shrink-0 shadow-2xs">
                <Sparkles size={12} className="shrink-0" />
                <span>Visual Study Prep</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium truncate">
              Image memory anchor & visual cheat sheet
            </p>
          </div>
        </ReadableBox>

        <div className="flex items-center gap-2 shrink-0">
          <AudioButton
            text={fullSpokenSummary}
            textId={`audio-prep-header-${topicId}`}
            speechRate={speechRate}
            size="sm"
          />
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            title={isExpanded ? 'Collapse study card' : 'Expand study card'}
            aria-label={isExpanded ? 'Collapse study card' : 'Expand study card'}
          >
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>

      {/* Expanded Content with Click to Read everywhere */}
      {isExpanded && (
        <div className="p-4 sm:p-6 space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            {/* Left: Beautiful Study Artwork with Click to Read */}
            <div className="lg:col-span-5 relative group">
              <ReadableBox
                text={`Visual Memory Cue for ${studyCard.title}: ${studyCard.illustratedClue}`}
                textId={`audio-prep-image-${topicId}`}
                speechRate={speechRate}
                className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-md aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 bg-slate-950 block"
              >
                <img
                  src={studyCard.image}
                  alt={studyCard.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-3.5 sm:p-4 text-white">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest px-2 py-0.5 rounded bg-amber-500 text-slate-950 inline-block shadow-sm">
                      Visual Memory Cue
                    </span>
                    <ReadableIcon size={14} className="text-white opacity-80 group-hover:opacity-100" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold leading-tight drop-shadow-md">
                    {studyCard.illustratedClue}
                  </p>
                </div>
              </ReadableBox>
            </div>

            {/* Right: Structured Memorization Elements */}
            <div className="lg:col-span-7 space-y-3">
              {/* Mnemonic Banner - Click to Read */}
              <ReadableBox
                text={`Quick Mnemonic for ${studyCard.title}: ${studyCard.mnemonic}`}
                textId={`audio-prep-mnemonic-${topicId}`}
                speechRate={speechRate}
                className="p-3 sm:p-3.5 rounded-2xl bg-amber-500/15 dark:bg-amber-400/15 border border-amber-300/60 dark:border-amber-500/40 flex items-start justify-between gap-2.5"
              >
                <div className="flex items-start gap-2.5 min-w-0">
                  <Bookmark size={18} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-0.5 min-w-0">
                    <div className="text-[10px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-300">
                      Quick Mnemonic
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                      {studyCard.mnemonic}
                    </div>
                  </div>
                </div>
                <ReadableIcon size={16} className="text-amber-600 dark:text-amber-400 opacity-60 group-hover:opacity-100 shrink-0 mt-1" />
              </ReadableBox>

              {/* Visual Anchor Breakdown - Click to Read */}
              <ReadableBox
                text={`How to Picture it in Your Mind: ${studyCard.visualAnchor}`}
                textId={`audio-prep-anchor-${topicId}`}
                speechRate={speechRate}
                className={`p-3.5 sm:p-4 rounded-2xl border ${
                  isDark ? 'bg-[#151921] border-[#2B3545]' : 'bg-white/95 border-slate-200 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                  <div className="flex items-center gap-1.5">
                    <Eye size={14} className="text-amber-600 dark:text-amber-400" />
                    <span>How to Picture it in Your Mind</span>
                  </div>
                  <ReadableIcon size={15} className="text-amber-600 dark:text-amber-400 opacity-60 group-hover:opacity-100 shrink-0" />
                </div>
                <p 
                  className="text-xs sm:text-sm leading-relaxed text-slate-900 dark:text-slate-100 font-medium"
                  dangerouslySetInnerHTML={{
                    __html: formatMarkdown(studyCard.visualAnchor, { boldClass: 'font-extrabold text-slate-950 dark:text-white' })
                  }}
                />
              </ReadableBox>

              {/* Key Rule & Companion Tip - Click to Read */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <ReadableBox
                  text={`Core Exam Rule for ${studyCard.title}: ${studyCard.keyRule}`}
                  textId={`audio-prep-rule-${topicId}`}
                  speechRate={speechRate}
                  className={`p-3 rounded-xl border text-xs ${
                    isDark ? 'bg-[#181D26] border-[#303B4D]' : 'bg-amber-50/80 border-amber-200'
                  }`}
                >
                  <div className="flex items-center justify-between font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    <div className="flex items-center gap-1">
                      <CheckCircle2 size={13} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Core Exam Rule</span>
                    </div>
                    <ReadableIcon size={13} className="text-slate-600 dark:text-slate-400 opacity-60 group-hover:opacity-100 shrink-0" />
                  </div>
                  <p className="text-slate-900 dark:text-slate-100 leading-snug font-medium">
                    {studyCard.keyRule}
                  </p>
                </ReadableBox>

                <ReadableBox
                  text={`Explorer Study Note: ${studyCard.companionTip}`}
                  textId={`audio-prep-tip-${topicId}`}
                  speechRate={speechRate}
                  className={`p-3 rounded-xl border text-xs ${
                    isDark ? 'bg-[#181D26] border-[#303B4D]' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    <div className="flex items-center gap-1">
                      <Lightbulb size={13} className="text-amber-600 dark:text-amber-400 shrink-0" />
                      <span>Explorer Study Note</span>
                    </div>
                    <ReadableIcon size={13} className="text-slate-600 dark:text-slate-400 opacity-60 group-hover:opacity-100 shrink-0" />
                  </div>
                  <p className="text-slate-800 dark:text-slate-200 leading-snug italic font-medium">
                    {studyCard.companionTip}
                  </p>
                </ReadableBox>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

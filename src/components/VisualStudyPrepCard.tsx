import React, { useState } from 'react';
import { Sparkles, Eye, Lightbulb, Bookmark, CheckCircle2, ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react';
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
        return 'bg-[#FDFBF7] dark:bg-[#1A202C] border-amber-300/70 dark:border-amber-500/30 shadow-sm';
      case 'pastel-cool':
        return 'bg-[#F8FAFC] dark:bg-[#182030] border-sky-300/70 dark:border-sky-500/30 shadow-sm';
      case 'pastel-mint':
        return 'bg-[#F7FBF9] dark:bg-[#182420] border-emerald-300/70 dark:border-emerald-500/30 shadow-sm';
      case 'pastel-night':
        return 'bg-[#1E2530] border-[#323E50] shadow-sm';
      case 'dark-study':
        return 'bg-slate-900 border-slate-800 shadow-sm';
      default:
        return 'bg-[#FAF8F5] dark:bg-slate-900 border-amber-300/70 dark:border-slate-800 shadow-sm';
    }
  };

  const getInnerBoxBg = () => {
    if (isDark) return 'bg-[#151922] border-[#2A3444] text-[#E5EAF2]';
    return 'bg-white border-slate-200/90 text-slate-900 shadow-2xs';
  };

  const fullSpokenSummary = `${studyCard.title}. Quick Mnemonic: ${studyCard.mnemonic}. Visual Mind Picture: ${studyCard.visualAnchor}. Core Exam Rule: ${studyCard.keyRule}. Explorer Note: ${studyCard.companionTip}`;

  return (
    <div className={`rounded-3xl border transition-all overflow-hidden ${getCardBg()}`}>
      {/* 1. Header Bar */}
      <div className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-b border-black/5 dark:border-white/5">
        <ReadableBox
          text={fullSpokenSummary}
          textId={`audio-prep-header-${topicId}`}
          speechRate={speechRate}
          className="flex items-center gap-3 min-w-0 flex-1 rounded-2xl p-1.5 -m-1.5"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 to-orange-500 text-white flex items-center justify-center shadow-md shrink-0">
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
            className="p-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            title={isExpanded ? 'Collapse study card' : 'Expand study card'}
            aria-label={isExpanded ? 'Collapse study card' : 'Expand study card'}
          >
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>

      {/* 2. Expanded Content: Clean Side-by-Side Visual Chart & Explanations */}
      {isExpanded && (
        <div className="p-4 sm:p-6 space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Clean Unobscured Illustration & Caption */}
            <div className="lg:col-span-5 space-y-3">
              <ReadableBox
                text={`Visual study illustration for ${studyCard.title}. ${studyCard.imageAlt}. Visual Memory Cue: ${studyCard.illustratedClue}`}
                textId={`audio-prep-image-${topicId}`}
                speechRate={speechRate}
                className={`rounded-2xl border p-3 sm:p-3.5 space-y-3 transition-all ${getInnerBoxBg()}`}
              >
                <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400 pb-1 border-b border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400">
                    <ImageIcon size={14} />
                    <span>Visual Memory Anchor</span>
                  </div>
                  <ReadableIcon size={14} className="text-amber-600 dark:text-amber-400 opacity-60 group-hover:opacity-100" />
                </div>

                {/* Completely unobstructed illustration with clean frame */}
                <div className="relative rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-slate-100 dark:bg-slate-950 aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 flex items-center justify-center">
                  <img
                    src={studyCard.image}
                    alt={studyCard.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>

                {/* Dedicated, clear caption box directly below the picture */}
                <div className="p-3 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-300/60 dark:border-amber-500/30 space-y-1">
                  <div className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 flex items-center gap-1">
                    <Eye size={12} className="shrink-0" />
                    <span>What to look for in this picture:</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                    {studyCard.illustratedClue}
                  </p>
                </div>
              </ReadableBox>
            </div>

            {/* Right Column: Structured Memory Elements */}
            <div className="lg:col-span-7 space-y-3.5">
              
              {/* 1. Mnemonic Card */}
              <ReadableBox
                text={`Quick Mnemonic for ${studyCard.title}: ${studyCard.mnemonic}`}
                textId={`audio-prep-mnemonic-${topicId}`}
                speechRate={speechRate}
                className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/15 to-amber-500/10 dark:from-amber-400/20 dark:to-orange-500/10 border-2 border-amber-400/80 dark:border-amber-500/50 shadow-xs flex items-start justify-between gap-3"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <Bookmark size={16} />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="text-[11px] font-black uppercase tracking-wider text-amber-800 dark:text-amber-300">
                      Quick Mnemonic
                    </div>
                    <div className="text-base sm:text-lg font-extrabold text-slate-950 dark:text-white leading-snug">
                      {studyCard.mnemonic}
                    </div>
                  </div>
                </div>
                <ReadableIcon size={18} className="text-amber-600 dark:text-amber-400 opacity-70 group-hover:opacity-100 shrink-0 mt-1" />
              </ReadableBox>

              {/* 2. Visual Anchor Breakdown (How to Picture it in Your Mind) */}
              <ReadableBox
                text={`How to Picture it in Your Mind: ${studyCard.visualAnchor}`}
                textId={`audio-prep-anchor-${topicId}`}
                speechRate={speechRate}
                className={`p-4 sm:p-4.5 rounded-2xl border ${getInnerBoxBg()}`}
              >
                <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                  <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400">
                    <Eye size={15} />
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

              {/* 3. Core Exam Rule & Companion Study Note */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-0.5">
                
                {/* Core Rule */}
                <ReadableBox
                  text={`Core Exam Rule for ${studyCard.title}: ${studyCard.keyRule}`}
                  textId={`audio-prep-rule-${topicId}`}
                  speechRate={speechRate}
                  className={`p-3.5 rounded-2xl border text-xs sm:text-sm flex flex-col justify-between space-y-2 ${
                    isDark ? 'bg-[#181D26] border-[#303B4D]' : 'bg-emerald-500/10 border-emerald-300/70 text-slate-900'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                      <div className="flex items-center gap-1">
                        <CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>Core Exam Rule</span>
                      </div>
                      <ReadableIcon size={13} className="text-emerald-600 dark:text-emerald-400 opacity-60 group-hover:opacity-100 shrink-0" />
                    </div>
                    <p className="text-slate-900 dark:text-slate-100 leading-snug font-medium text-xs sm:text-sm">
                      {studyCard.keyRule}
                    </p>
                  </div>
                </ReadableBox>

                {/* Explorer Study Note */}
                <ReadableBox
                  text={`Explorer Study Note: ${studyCard.companionTip}`}
                  textId={`audio-prep-tip-${topicId}`}
                  speechRate={speechRate}
                  className={`p-3.5 rounded-2xl border text-xs sm:text-sm flex flex-col justify-between space-y-2 ${
                    isDark ? 'bg-[#181D26] border-[#303B4D]' : 'bg-amber-500/10 border-amber-300/70 text-slate-900'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between font-black uppercase tracking-wider text-amber-800 dark:text-amber-300">
                      <div className="flex items-center gap-1">
                        <Lightbulb size={14} className="text-amber-600 dark:text-amber-400 shrink-0" />
                        <span>Explorer Note</span>
                      </div>
                      <ReadableIcon size={13} className="text-amber-600 dark:text-amber-400 opacity-60 group-hover:opacity-100 shrink-0" />
                    </div>
                    <p className="text-slate-900 dark:text-slate-100 leading-snug italic font-medium text-xs sm:text-sm">
                      {studyCard.companionTip}
                    </p>
                  </div>
                </ReadableBox>

              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
};

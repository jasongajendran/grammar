import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Volume2, 
  Shuffle, 
  Compass, 
  Users, 
  MapPin, 
  ChevronRight 
} from 'lucide-react';
import { GrammarTopic, StudyTheme } from '../types';
import { AudioButton } from './AudioButton';
import { playSound } from '../utils/storage';
import { getExplorer, EXPLORER_COMPANIONS } from '../utils/assets';

interface MascotCardProps {
  topic: GrammarTopic;
  studyTheme?: StudyTheme;
  speechRate: number;
  selectedExplorerId?: string;
  onOpenExplorerModal?: () => void;
}

export const MascotCard: React.FC<MascotCardProps> = ({
  topic,
  studyTheme = 'pastel-warm',
  speechRate,
  selectedExplorerId = 'barnaby-cartographer',
  onOpenExplorerModal,
}) => {
  const explorer = getExplorer(selectedExplorerId);
  const [quoteIndex, setQuoteIndex] = useState(() => 
    Math.abs(topic.title.length) % explorer.quotes.length
  );
  const isDark = studyTheme === 'pastel-night' || studyTheme === 'dark-study';

  const handleNextQuote = () => {
    playSound('click');
    setQuoteIndex(prev => (prev + 1) % explorer.quotes.length);
  };

  const currentQuote = explorer.quotes[quoteIndex % explorer.quotes.length];

  return (
    <div className={`rounded-3xl border p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4.5 transition-all shadow-xs relative overflow-hidden ${
      isDark 
        ? 'bg-[#1E2430] border-[#364254] text-slate-200' 
        : 'bg-gradient-to-r from-amber-100/70 via-orange-50/80 to-amber-50/70 border-amber-200/90 text-slate-800'
    }`}>
      {/* Decorative subtle background compass watermark */}
      <div className="absolute -right-8 -bottom-8 opacity-5 pointer-events-none text-amber-900 dark:text-white">
        <Compass size={180} />
      </div>

      {/* Animated Explorer Portrait */}
      <div className="relative shrink-0 flex flex-col items-center">
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-3 border-amber-500 shadow-md relative group cursor-pointer"
          onClick={handleNextQuote}
          title="Click your explorer for another field observation!"
        >
          <img
            src={explorer.avatar}
            alt={explorer.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-1">
            <span className="text-[10px] text-white font-black uppercase tracking-wider">Tap Advice!</span>
          </div>
        </motion.div>

        <span className="mt-1.5 text-[11px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 text-center truncate max-w-[110px]">
          {explorer.name}
        </span>
      </div>

      {/* Speech Bubble & Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-between space-y-2.5 w-full">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <Sparkles size={14} className="text-amber-500" />
            <span>{explorer.title}</span>
          </div>

          <div className="flex items-center gap-1.5">
            {onOpenExplorerModal && (
              <button
                type="button"
                onClick={onOpenExplorerModal}
                className="px-2.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-2xs transition-transform active:scale-95 flex items-center gap-1 cursor-pointer"
                title="Switch your British explorer guide"
              >
                <Users size={12} />
                <span>Switch Guide</span>
              </button>
            )}

            <button
              type="button"
              onClick={handleNextQuote}
              title="Next tip from your explorer"
              className={`p-1.5 rounded-full border transition-colors cursor-pointer text-xs font-bold flex items-center gap-1 ${
                isDark 
                  ? 'border-slate-700 hover:bg-slate-800 text-slate-300' 
                  : 'border-amber-300 hover:bg-amber-200/60 text-amber-900'
              }`}
            >
              <Shuffle size={13} />
              <span className="hidden sm:inline text-[11px]">Next Tip</span>
            </button>

            <AudioButton
              text={`${explorer.name} says: ${currentQuote}`}
              textId={`audio-mascot-${explorer.id}-${quoteIndex}`}
              speechRate={speechRate}
              size="sm"
            />
          </div>
        </div>

        {/* Animated Speech Bubble */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${explorer.id}-${quoteIndex}`}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.2 }}
            className={`p-3 rounded-2xl border text-xs sm:text-sm font-medium leading-relaxed italic ${
              isDark 
                ? 'bg-[#151A22] border-[#2E3848] text-slate-200' 
                : 'bg-white/90 border-amber-200/80 text-slate-900 shadow-2xs'
            }`}
          >
            "{currentQuote}"
          </motion.div>
        </AnimatePresence>

        {/* Explorer Landmark & Topic Context Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] opacity-75">
          <span className="flex items-center gap-1 font-medium">
            <MapPin size={12} className="text-amber-600 shrink-0" />
            <span>Landmark: <strong>{explorer.favoriteLandmark}</strong></span>
          </span>
          <span className="hidden sm:inline">
            Lesson: <strong>{topic.title}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

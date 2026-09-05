import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MessageCircle, Volume2, Shuffle } from 'lucide-react';
import { APP_IMAGES } from '../utils/assets';
import { GrammarTopic, StudyTheme } from '../types';
import { AudioButton } from './AudioButton';
import { playSound } from '../utils/storage';

interface MascotCardProps {
  topic: GrammarTopic;
  studyTheme?: StudyTheme;
  speechRate: number;
}

const HAMISH_QUOTES = [
  "Moo-ve over confusion! Take it one sentence at a time, just like climbing Ben Nevis!",
  "A proper noun always wears its best capital letter, just like a highlander wears his clan tartan!",
  "In Scotland, we keep our lochs deep and our grammar crystal clear!",
  "Remember the golden rule: punctuation marks guide your reader like a lighthouse along the rugged coast of Scotland!",
  "Give yourself a high-five for practicing! Even the greatest poets like Robert Burns started with basic nouns and verbs!",
  "Don't fear the semicolon! It's simply a bridge connecting two strong, independent thoughts without any fuss.",
  "When in doubt, say your sentence out loud. If your tongue trips, a comma might be missing!",
];

export const MascotCard: React.FC<MascotCardProps> = ({
  topic,
  studyTheme = 'pastel-warm',
  speechRate,
}) => {
  const [quoteIndex, setQuoteIndex] = useState(() => 
    Math.abs(topic.title.length) % HAMISH_QUOTES.length
  );
  const isDark = studyTheme === 'pastel-night' || studyTheme === 'dark-study';

  const handleNextQuote = () => {
    playSound('click');
    setQuoteIndex(prev => (prev + 1) % HAMISH_QUOTES.length);
  };

  const currentQuote = HAMISH_QUOTES[quoteIndex];

  return (
    <div className={`rounded-3xl border p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 transition-all shadow-xs ${
      isDark 
        ? 'bg-[#1E2430] border-[#364254] text-slate-200' 
        : 'bg-gradient-to-r from-amber-100/60 via-orange-50/70 to-yellow-100/60 border-amber-200/80 text-slate-800'
    }`}>
      {/* Animated Mascot Portrait */}
      <div className="relative shrink-0 flex flex-col items-center">
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-3 border-amber-500 shadow-md relative group cursor-pointer"
          onClick={handleNextQuote}
          title="Click Hamish for more Scottish grammar wisdom!"
        >
          <img
            src={APP_IMAGES.mascot}
            alt="Hamish the Highland Grammar Coo"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-1">
            <span className="text-[10px] text-white font-black uppercase tracking-wider">Tap Me!</span>
          </div>
        </motion.div>
        <span className="mt-1 text-[11px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400">
          Hamish the Coo
        </span>
      </div>

      {/* Speech Bubble with AnimatePresence */}
      <div className="flex-1 min-w-0 flex flex-col justify-between space-y-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <Sparkles size={14} />
            <span>Hamish's Study Tip</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleNextQuote}
              title="Next tip from Hamish"
              className={`p-1.5 rounded-full border transition-colors cursor-pointer text-xs font-bold flex items-center gap-1 ${
                isDark 
                  ? 'border-slate-700 hover:bg-slate-800 text-slate-300' 
                  : 'border-amber-300 hover:bg-amber-200/60 text-amber-900'
              }`}
            >
              <Shuffle size={13} />
              <span className="hidden sm:inline text-[11px]">New Tip</span>
            </button>

            <AudioButton
              text={`Hamish the Coo says: ${currentQuote}`}
              textId={`audio-mascot-${quoteIndex}`}
              speechRate={speechRate}
              size="sm"
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={quoteIndex}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.2 }}
            className={`p-3 rounded-xl border text-xs sm:text-sm font-medium leading-relaxed italic ${
              isDark 
                ? 'bg-[#151A22] border-[#2E3848] text-slate-200' 
                : 'bg-white/85 border-amber-200/70 text-slate-900 shadow-2xs'
            }`}
          >
            "{currentQuote}"
          </motion.div>
        </AnimatePresence>

        <p className="text-[11px] opacity-70">
          Studying <strong>{topic.title}</strong> • {topic.levelLabel} ({topic.levelStage})
        </p>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Zap, 
  ArrowRight, 
  RotateCcw, 
  Repeat, 
  Sliders, 
  Compass, 
  Check, 
  Eye, 
  Volume2,
  Layers,
  Flame,
  ShieldCheck,
  SplitSquareVertical,
  Type,
  Smile,
  CheckCircle2,
  Award
} from 'lucide-react';
import { GrammarTopic, StudyTheme } from '../types';
import { playSound } from '../utils/storage';
import { AudioButton } from './AudioButton';

interface ConceptVisualizerProps {
  topic: GrammarTopic;
  studyTheme?: StudyTheme;
  speechRate: number;
}

export const ConceptVisualizer: React.FC<ConceptVisualizerProps> = ({
  topic,
  studyTheme = 'pastel-warm',
  speechRate,
}) => {
  const isDark = studyTheme === 'pastel-night' || studyTheme === 'dark-study';

  // Topic specific interactive state
  const [isPassive, setIsPassive] = useState(false);
  const [selectedAdverbial, setSelectedAdverbial] = useState(0);
  const [isColonMode, setIsColonMode] = useState(false);
  const [activeWabubIndex, setActiveWabubIndex] = useState(0);
  const [nounFilter, setNounFilter] = useState<'all' | 'common' | 'proper'>('all');
  const [verbMode, setVerbMode] = useState<'action' | 'state'>('action');
  const [conditionalTier, setConditionalTier] = useState<0 | 1 | 2 | 3>(0);

  // Level 1 new state
  const [selectedAdjIndex, setSelectedAdjIndex] = useState(0);
  const [punctSentenceIndex, setPunctSentenceIndex] = useState(0);
  const [simpleSubjIndex, setSimpleSubjIndex] = useState(0);
  const [simpleVerbIndex, setSimpleVerbIndex] = useState(0);

  // -------------------------------------------------------------
  // VISUALIZER 1: Active vs Passive Voice (Level 4)
  // -------------------------------------------------------------
  if (topic.id === 'l4-active-passive-voice') {
    return (
      <div className={`rounded-3xl border p-5 sm:p-7 space-y-5 transition-all shadow-xs ${
        isDark ? 'bg-[#1D232D] border-[#343F52]' : 'bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-purple-500/10 border-amber-300/40'
      }`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 to-orange-500 text-white flex items-center justify-center shadow-md">
              <Repeat size={20} className={isPassive ? 'rotate-180 transition-transform duration-500' : 'transition-transform duration-500'} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-heading font-extrabold flex items-center gap-2">
                <span>The Voice Transformer</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-600 text-white font-bold uppercase tracking-wider">
                  Interactive Lab
                </span>
              </h3>
              <p className="text-xs sm:text-sm opacity-75">
                Toggle to observe how the grammatical subject and focus shift
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setIsPassive(!isPassive);
                playSound('click');
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs sm:text-sm bg-amber-600 hover:bg-amber-700 text-white shadow-md transition-all cursor-pointer active:scale-95"
            >
              <Repeat size={16} />
              <span>Switch to {isPassive ? 'Active Voice' : 'Passive Voice'}</span>
            </button>
            <AudioButton
              text={`The Voice Transformer. Toggle to observe how the grammatical subject and focus shift between active and passive voice.`}
              textId="audio-voice-transformer-header"
              speechRate={speechRate}
              size="sm"
            />
          </div>
        </div>

        {/* Visual Stage */}
        <div className={`p-5 sm:p-6 rounded-2xl border transition-all ${
          isDark ? 'bg-[#151921] border-[#2C3646]' : 'bg-white/90 border-amber-200 shadow-sm'
        }`}>
          <div className="text-center mb-6">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest ${
              isPassive 
                ? 'bg-purple-600 text-white shadow-sm' 
                : 'bg-emerald-600 text-white shadow-sm'
            }`}>
              Currently Showing: {isPassive ? 'Passive Voice (Receiver in Spotlight)' : 'Active Voice (Doer takes Initiative)'}
            </span>
          </div>

          {/* Animated Sentence Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 text-center my-4">
            <AnimatePresence mode="wait">
              {!isPassive ? (
                <motion.div 
                  key="active-sentence"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg font-bold"
                >
                  <span className="px-4 py-2.5 rounded-2xl bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-400/40 shadow-xs flex items-center gap-1.5">
                    <span className="text-xs bg-emerald-600 text-white px-1.5 py-0.5 rounded uppercase font-black tracking-widest">DOER</span>
                    <span>Sir Christopher Wren</span>
                  </span>
                  <ArrowRight size={20} className="text-amber-600 hidden sm:inline" />
                  <span className="px-4 py-2.5 rounded-2xl bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-400/40 shadow-xs flex items-center gap-1.5">
                    <span className="text-xs bg-amber-600 text-white px-1.5 py-0.5 rounded uppercase font-black tracking-widest">ACTION</span>
                    <span>designed</span>
                  </span>
                  <ArrowRight size={20} className="text-amber-600 hidden sm:inline" />
                  <span className="px-4 py-2.5 rounded-2xl bg-blue-500/20 text-blue-800 dark:text-blue-300 border border-blue-400/40 shadow-xs flex items-center gap-1.5">
                    <span className="text-xs bg-blue-600 text-white px-1.5 py-0.5 rounded uppercase font-black tracking-widest">RECEIVER</span>
                    <span>St Paul's Cathedral</span>
                  </span>
                </motion.div>
              ) : (
                <motion.div 
                  key="passive-sentence"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg font-bold"
                >
                  <span className="px-4 py-2.5 rounded-2xl bg-blue-500/20 text-blue-800 dark:text-blue-300 border border-blue-400/40 shadow-xs flex items-center gap-1.5">
                    <span className="text-xs bg-blue-600 text-white px-1.5 py-0.5 rounded uppercase font-black tracking-widest">SUBJECT</span>
                    <span>St Paul's Cathedral</span>
                  </span>
                  <ArrowRight size={20} className="text-purple-600 hidden sm:inline" />
                  <span className="px-4 py-2.5 rounded-2xl bg-purple-500/20 text-purple-800 dark:text-purple-300 border border-purple-400/40 shadow-xs flex items-center gap-1.5">
                    <span className="text-xs bg-purple-600 text-white px-1.5 py-0.5 rounded uppercase font-black tracking-widest">BE + V3</span>
                    <span>was designed</span>
                  </span>
                  <ArrowRight size={20} className="text-purple-600 hidden sm:inline" />
                  <span className="px-4 py-2.5 rounded-2xl bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-400/40 shadow-xs flex items-center gap-1.5">
                    <span className="text-xs bg-emerald-600 text-white px-1.5 py-0.5 rounded uppercase font-black tracking-widest">AGENT</span>
                    <span>by Sir Christopher Wren</span>
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between gap-3 text-xs sm:text-sm opacity-85">
            <span className="font-medium">
              💡 {isPassive 
                ? 'Notice how the auxiliary verb "was" + past participle "designed" are paired, and the agent phrase "by..." can even be omitted!' 
                : 'Notice how the architect directly acts upon the building, creating direct narrative drive and punch!'}
            </span>
            <AudioButton
              text={isPassive ? "St Paul's Cathedral was designed by Sir Christopher Wren." : "Sir Christopher Wren designed St Paul's Cathedral."}
              textId={`audio-voice-transformer-${isPassive ? 'passive' : 'active'}`}
              speechRate={speechRate}
              size="sm"
            />
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VISUALIZER 2: Fronted Adverbials Launchpad (Level 3)
  // -------------------------------------------------------------
  if (topic.id === 'l3-fronted-adverbials') {
    const adverbials = [
      {
        phrase: 'At the stroke of midnight,',
        type: 'Time',
        color: 'from-indigo-600 to-blue-600',
        sentenceEnd: 'Big Ben chimed across the River Thames in London.',
      },
      {
        phrase: 'High above the rugged valley,',
        type: 'Place',
        color: 'from-emerald-600 to-teal-600',
        sentenceEnd: 'a red kite glided over the Welsh peaks of Eryri.',
      },
      {
        phrase: 'With patient determination,',
        type: 'Manner',
        color: 'from-amber-600 to-orange-600',
        sentenceEnd: 'geologists examined the basalt columns at Giant\'s Causeway.',
      },
      {
        phrase: 'Braving the brisk morning wind,',
        type: 'Condition',
        color: 'from-rose-600 to-purple-600',
        sentenceEnd: 'the ferry sailed smoothly toward the Isle of Skye.',
      },
    ];

    const currentAdv = adverbials[selectedAdverbial];

    return (
      <div className={`rounded-3xl border p-5 sm:p-7 space-y-5 transition-all shadow-xs ${
        isDark ? 'bg-[#1D232D] border-[#343F52]' : 'bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 border-indigo-300/40'
      }`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-500 text-white flex items-center justify-center shadow-md">
              <Zap size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-heading font-extrabold flex items-center gap-2">
                <span>The Fronted Adverbial Launchpad & Comma Trampoline</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-600 text-white font-bold uppercase tracking-wider">
                  Interactive
                </span>
              </h3>
              <p className="text-xs sm:text-sm opacity-75">
                Select an adverbial of time, place, or manner and watch the comma lock it in place!
              </p>
            </div>
          </div>
          <AudioButton
            text="The Fronted Adverbial Launchpad. Select an adverbial of time, place, or manner and watch the comma lock it in place!"
            textId="audio-fronted-adv-header"
            speechRate={speechRate}
            size="sm"
          />
        </div>

        {/* Adverbial Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {adverbials.map((adv, idx) => (
            <button
              key={adv.phrase}
              type="button"
              onClick={() => {
                setSelectedAdverbial(idx);
                playSound('click');
              }}
              className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                selectedAdverbial === idx
                  ? `${isDark ? 'bg-indigo-950/80 border-indigo-500 text-white' : 'bg-indigo-50 border-indigo-500 text-indigo-950'} ring-2 ring-indigo-500/50 shadow-sm`
                  : `${isDark ? 'bg-[#161B23] border-[#2C3646] hover:bg-[#202734]' : 'bg-white/80 border-black/10 hover:bg-white'} opacity-80`
              }`}
            >
              <div className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                {adv.type}
              </div>
              <div className="text-xs sm:text-sm font-bold truncate">
                {adv.phrase}
              </div>
            </button>
          ))}
        </div>

        {/* Interactive Sentence Runway */}
        <div className={`p-5 sm:p-6 rounded-2xl border relative overflow-hidden ${
          isDark ? 'bg-[#151921] border-[#2C3646]' : 'bg-white/95 border-indigo-200 shadow-sm'
        }`}>
          <div className="text-center text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
            Front of the Sentence ➔
          </div>

          <motion.div 
            key={currentAdv.phrase}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 15 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-lg sm:text-xl font-heading font-extrabold text-center py-2"
          >
            {/* Fronted Adverbial Box */}
            <span className="px-4 py-2 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-2 border-indigo-500 text-indigo-900 dark:text-indigo-200 shadow-sm">
              {currentAdv.phrase.replace(',', '')}
            </span>

            {/* Glowing Comma Trampoline */}
            <motion.span 
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: [0, 1.5, 1], rotate: [0, 15, 0] }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-9 h-9 rounded-full bg-amber-500 text-slate-950 font-black text-2xl flex items-center justify-center shadow-md ring-4 ring-amber-400/30"
              title="Essential Comma after Fronted Adverbial!"
            >
              ,
            </motion.span>

            {/* Main clause */}
            <span className="text-slate-900 dark:text-slate-100 font-semibold text-base sm:text-lg">
              {currentAdv.sentenceEnd}
            </span>
          </motion.div>

          <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs sm:text-sm">
            <span className="font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-1">
              ✨ Comma Rule: Always bounce a comma immediately after the fronted adverbial!
            </span>
            <AudioButton
              text={`${currentAdv.phrase} ${currentAdv.sentenceEnd}`}
              textId={`audio-fronted-adv-${selectedAdverbial}`}
              speechRate={speechRate}
              size="sm"
            />
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VISUALIZER 3: Semicolon Balance Scale & Colon Drumroll (Level 4)
  // -------------------------------------------------------------
  if (topic.id === 'l4-semicolons-colons') {
    return (
      <div className={`rounded-3xl border p-5 sm:p-7 space-y-5 transition-all shadow-xs ${
        isDark ? 'bg-[#1D232D] border-[#343F52]' : 'bg-gradient-to-br from-sky-500/10 via-blue-500/5 to-cyan-500/10 border-sky-300/40'
      }`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 to-blue-500 text-white flex items-center justify-center shadow-md">
              <Sliders size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-heading font-extrabold flex items-center gap-2">
                <span>The Punctuation Balance Beam & Revealer</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-sky-600 text-white font-bold uppercase tracking-wider">
                  Interactive
                </span>
              </h3>
              <p className="text-xs sm:text-sm opacity-75">
                Toggle between the Semicolon Balance and Colon Revelation
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="inline-flex p-1 rounded-full bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10">
              <button
                type="button"
                onClick={() => {
                  setIsColonMode(false);
                  playSound('click');
                }}
                className={`px-3.5 py-1.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  !isColonMode 
                    ? 'bg-sky-600 text-white shadow-sm' 
                    : 'text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white'
                }`}
              >
                Semicolon (;)
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsColonMode(true);
                  playSound('click');
                }}
                className={`px-3.5 py-1.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  isColonMode 
                    ? 'bg-sky-600 text-white shadow-sm' 
                    : 'text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white'
                }`}
              >
                Colon (:)
              </button>
            </div>

            <AudioButton
              text={!isColonMode 
                ? "Thick fog blanketed the Yorkshire moors; hikers checked their map diligently."
                : "The National Trust warden issued a reminder: walkers must protect the coastal wildlife."}
              textId={`audio-semicolon-colon-${isColonMode ? 'colon' : 'semicolon'}`}
              speechRate={speechRate}
              size="sm"
            />
          </div>
        </div>

        {/* Visualizer Display */}
        <div className={`p-5 sm:p-6 rounded-2xl border transition-all ${
          isDark ? 'bg-[#151921] border-[#2C3646]' : 'bg-white/95 border-sky-200 shadow-sm'
        }`}>
          <AnimatePresence mode="wait">
            {!isColonMode ? (
              <motion.div
                key="semicolon-vis"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="space-y-4"
              >
                <div className="text-center text-xs font-black uppercase tracking-widest text-sky-600 dark:text-sky-400">
                  ⚖️ Perfect Balance: Two Independent Clauses of Equal Weight
                </div>

                <div className="grid grid-cols-1 md:grid-cols-11 items-center gap-3 text-center">
                  <div className="md:col-span-5 p-4 rounded-2xl bg-sky-500/15 border border-sky-400/40 text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                    <span className="block text-[11px] uppercase tracking-wider text-sky-700 dark:text-sky-300 font-extrabold mb-1">
                      Independent Clause 1
                    </span>
                    "Thick fog blanketed the Yorkshire moors"
                  </div>

                  <div className="md:col-span-1 flex flex-col items-center justify-center">
                    <motion.div 
                      animate={{ y: [0, -3, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-10 h-10 rounded-full bg-sky-600 text-white font-black text-2xl flex items-center justify-center shadow-lg ring-4 ring-sky-400/30"
                    >
                      ;
                    </motion.div>
                  </div>

                  <div className="md:col-span-5 p-4 rounded-2xl bg-sky-500/15 border border-sky-400/40 text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                    <span className="block text-[11px] uppercase tracking-wider text-sky-700 dark:text-sky-300 font-extrabold mb-1">
                      Independent Clause 2
                    </span>
                    "hikers checked their map diligently."
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-center opacity-80 pt-2 font-medium">
                  Notice: No "and" or "so" is needed! The semicolon acts as a smooth bridge between two complete thoughts.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="colon-vis"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="space-y-4"
              >
                <div className="text-center text-xs font-black uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  🏹 The Arrow / Drumroll: Announces what is coming next!
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
                  <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-400/40 text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 max-w-sm">
                    <span className="block text-[11px] uppercase tracking-wider text-amber-700 dark:text-amber-300 font-extrabold mb-1">
                      Complete Clause Before
                    </span>
                    "The National Trust warden issued a reminder"
                  </div>

                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-10 h-10 rounded-full bg-amber-600 text-white font-black text-2xl flex items-center justify-center shadow-lg ring-4 ring-amber-400/30 shrink-0"
                  >
                    :
                  </motion.div>

                  <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-400/40 text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 max-w-sm">
                    <span className="block text-[11px] uppercase tracking-wider text-amber-700 dark:text-amber-300 font-extrabold mb-1">
                      Direct Explanation / Content
                    </span>
                    "walkers must protect the coastal wildlife."
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-center opacity-80 pt-2 font-medium">
                  Rule Check: Read only the words before the colon. Do they form a complete sentence? Yes!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VISUALIZER 4: I SAW A WABUB Connector Wheel (Level 3)
  // -------------------------------------------------------------
  if (topic.id === 'l3-subordinating-conjunctions') {
    const wabubData = [
      { letter: 'I', word: 'If', example: 'If the tide is low, walkers can cross safely to St Michael\'s Mount in Cornwall.' },
      { letter: 'S', word: 'Since', example: 'Since opening in Belfast, the Titanic Museum has welcomed millions of visitors.' },
      { letter: 'A', word: 'As', example: 'As Big Ben struck noon, crowds gathered outside Westminster Abbey.' },
      { letter: 'W', word: 'When', example: 'When evening descends over Snowdonia, the Welsh valleys grow peaceful.' },
      { letter: 'A', word: 'Although', example: 'Although the climb up Scafell Pike was steep, the hikers reached the peak.' },
      { letter: 'W', word: 'While', example: 'While actors rehearsed on the Globe Theatre stage, costume makers stitched Elizabethan lace.' },
      { letter: 'A', word: 'After', example: 'After the summer shower cleared, a bright rainbow arched over Edinburgh Castle.' },
      { letter: 'B', word: 'Before', example: 'Before we crossed the Menai Suspension Bridge into Anglesey, we paused to admire the view.' },
      { letter: 'U', word: 'Until', example: 'Until dusk fell, puffins nested safely along the Antrim cliffs.' },
      { letter: 'B', word: 'Because', example: 'Because the Roman baths in Somerset were fed by natural hot springs, their waters stayed warm.' },
    ];

    const currentWabub = wabubData[activeWabubIndex];

    return (
      <div className={`rounded-3xl border p-5 sm:p-7 space-y-5 transition-all shadow-xs ${
        isDark ? 'bg-[#1D232D] border-[#343F52]' : 'bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-cyan-500/10 border-emerald-300/40'
      }`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md">
              <Compass size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-heading font-extrabold flex items-center gap-2">
                <span>The Interactive I SAW A WABUB Connector Deck</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-600 text-white font-bold uppercase tracking-wider">
                  Mnemonic
                </span>
              </h3>
              <p className="text-xs sm:text-sm opacity-75">
                Tap each letter of British English's most famous subordinating conjunction mnemonic!
              </p>
            </div>
          </div>
          <AudioButton
            text="The I SAW A WABUB Connector Deck. Tap each letter of the mnemonic to listen to example subordinating conjunctions."
            textId="audio-wabub-header"
            speechRate={speechRate}
            size="sm"
          />
        </div>

        {/* 10-button letter strip */}
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
          {wabubData.map((item, idx) => (
            <button
              key={`${item.word}-${idx}`}
              type="button"
              onClick={() => {
                setActiveWabubIndex(idx);
                playSound('click');
              }}
              className={`p-2 rounded-xl text-center border font-heading transition-all cursor-pointer ${
                activeWabubIndex === idx
                  ? 'bg-emerald-600 text-white border-emerald-700 shadow-md scale-105 ring-2 ring-emerald-400/40'
                  : isDark
                  ? 'bg-[#161B23] border-[#2C3646] text-slate-300 hover:bg-[#202734]'
                  : 'bg-white/80 border-black/10 text-slate-800 hover:bg-white'
              }`}
            >
              <div className="text-base sm:text-lg font-black">{item.letter}</div>
              <div className="text-[10px] font-semibold truncate opacity-90">{item.word}</div>
            </button>
          ))}
        </div>

        {/* Card Display with animation */}
        <div className={`p-5 sm:p-6 rounded-2xl border ${
          isDark ? 'bg-[#151921] border-[#2C3646]' : 'bg-white/95 border-emerald-200 shadow-sm'
        }`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWabub.word}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-400/40 font-extrabold text-xs uppercase tracking-wider">
                  Subordinating Conjunction: {currentWabub.word}
                </span>
                <AudioButton
                  text={currentWabub.example}
                  textId={`audio-wabub-${activeWabubIndex}`}
                  speechRate={speechRate}
                  size="sm"
                />
              </div>

              <div className="text-base sm:text-lg font-bold text-slate-950 dark:text-white leading-relaxed">
                <span className="text-emerald-600 dark:text-emerald-400 underline font-black">
                  {currentWabub.word}
                </span>
                {currentWabub.example.slice(currentWabub.word.length)}
              </div>

              <p className="text-xs opacity-75">
                Notice: When the subordinate clause comes FIRST (*"{currentWabub.word}..."*), it is followed by a comma before the main clause!
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VISUALIZER 5: Noun Explorer & Sorting Sparkles (Level 1) - FUN EXPLORER
  // -------------------------------------------------------------
  if (topic.id === 'l1-nouns') {
    const nounsList = [
      { word: 'Tower of London', type: 'proper', icon: '🏰', hint: 'Specific royal fortress on the River Thames' },
      { word: 'steam train', type: 'common', icon: '🚂', hint: 'Everyday noun for a heritage railway engine' },
      { word: 'Giant\'s Causeway', type: 'proper', icon: '🌊', hint: 'Famous UNESCO natural landmark in Northern Ireland' },
      { word: 'oak tree', type: 'common', icon: '🌳', hint: 'Everyday noun for a classic British woodland tree' },
      { word: 'Cardiff Castle', type: 'proper', icon: '🐉', hint: 'Specific historic landmark in Wales' },
      { word: 'red squirrel', type: 'common', icon: '🐿️', hint: 'Everyday noun for a protected native mammal' },
    ];

    const filteredNouns = nounFilter === 'all' 
      ? nounsList 
      : nounsList.filter(n => n.type === nounFilter);

    return (
      <div className={`rounded-3xl border p-5 sm:p-7 space-y-5 transition-all shadow-xs ${
        isDark ? 'bg-[#1D232D] border-[#343F52]' : 'bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-emerald-500/10 border-amber-300/40'
      }`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 to-yellow-500 text-white flex items-center justify-center shadow-md">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-heading font-extrabold flex items-center gap-2">
                <span>The UK Noun Treasure Chest</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-600 text-white font-bold uppercase tracking-wider">
                  Fun Explorer
                </span>
              </h3>
              <p className="text-xs sm:text-sm opacity-75">
                Common nouns name everyday things; Proper nouns name specific places and people across the UK with CAPITAL letters!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="inline-flex p-1 rounded-full bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 text-xs font-bold">
              <button
                type="button"
                onClick={() => { setNounFilter('all'); playSound('click'); }}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${nounFilter === 'all' ? 'bg-amber-600 text-white' : 'opacity-70'}`}
              >
                All Nouns
              </button>
              <button
                type="button"
                onClick={() => { setNounFilter('proper'); playSound('click'); }}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${nounFilter === 'proper' ? 'bg-amber-600 text-white' : 'opacity-70'}`}
              >
                Proper Nouns (Capitals)
              </button>
              <button
                type="button"
                onClick={() => { setNounFilter('common'); playSound('click'); }}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${nounFilter === 'common' ? 'bg-amber-600 text-white' : 'opacity-70'}`}
              >
                Common Nouns
              </button>
            </div>

            <AudioButton
              text="The UK Noun Treasure Chest Fun Explorer. Common nouns name everyday things like tree or train. Proper nouns name specific places and people like Tower of London or Cardiff Castle."
              textId="audio-noun-explorer-header"
              speechRate={speechRate}
              size="sm"
            />
          </div>
        </div>

        {/* Floating Interactive Noun Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredNouns.map(item => (
            <motion.div
              key={item.word}
              layout
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 18 }}
              className={`p-3.5 rounded-2xl border transition-all ${
                item.type === 'proper'
                  ? isDark
                    ? 'bg-purple-950/30 border-purple-800/40 text-purple-200'
                    : 'bg-purple-50 border-purple-200 text-purple-950'
                  : isDark
                    ? 'bg-emerald-950/30 border-emerald-800/40 text-emerald-200'
                    : 'bg-emerald-50 border-emerald-200 text-emerald-950'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="text-2xl">{item.icon}</span>
                <div className="flex items-center gap-1.5">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    item.type === 'proper' ? 'bg-purple-600 text-white' : 'bg-emerald-600 text-white'
                  }`}>
                    {item.type === 'proper' ? 'Proper Noun' : 'Common Noun'}
                  </span>
                  <AudioButton
                    text={`${item.word}. ${item.type === 'proper' ? 'Proper Noun' : 'Common Noun'}. ${item.hint}`}
                    textId={`audio-noun-item-${item.word.replace(/\s+/g, '-').toLowerCase()}`}
                    speechRate={speechRate}
                    size="sm"
                  />
                </div>
              </div>
              <div className="font-extrabold text-sm sm:text-base mb-1">
                {item.word}
              </div>
              <p className="text-[11px] opacity-75">
                {item.hint}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VISUALIZER 6: Action vs State Verbs (Level 1) - FUN EXPLORER
  // -------------------------------------------------------------
  if (topic.id === 'l1-verbs') {
    return (
      <div className={`rounded-3xl border p-5 sm:p-7 space-y-5 transition-all shadow-xs ${
        isDark ? 'bg-[#1D232D] border-[#343F52]' : 'bg-gradient-to-br from-rose-500/10 via-amber-500/5 to-orange-500/10 border-rose-300/40'
      }`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 text-white flex items-center justify-center shadow-md">
              <Flame size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-heading font-extrabold flex items-center gap-2">
                <span>The Verb Energy Meter: Action vs State of Being</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-rose-600 text-white font-bold uppercase tracking-wider">
                  Fun Explorer
                </span>
              </h3>
              <p className="text-xs sm:text-sm opacity-75">
                Verbs don't just move — they also describe how things ARE!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="inline-flex p-1 rounded-full bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 text-xs font-bold">
              <button
                type="button"
                onClick={() => { setVerbMode('action'); playSound('click'); }}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  verbMode === 'action' ? 'bg-rose-600 text-white shadow-sm' : 'opacity-70'
                }`}
              >
                🏃 Action Verbs (Dynamic)
              </button>
              <button
                type="button"
                onClick={() => { setVerbMode('state'); playSound('click'); }}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  verbMode === 'state' ? 'bg-blue-600 text-white shadow-sm' : 'opacity-70'
                }`}
              >
                🧘 State-of-Being Verbs (Static)
              </button>
            </div>

            <AudioButton
              text="The Verb Energy Meter Fun Explorer. Action verbs show physical doing motion like pull, sang, or dashed. State of being verbs express state or existence like is, looked, or remains."
              textId="audio-verb-explorer-header"
              speechRate={speechRate}
              size="sm"
            />
          </div>
        </div>

        <div className={`p-5 rounded-2xl border ${
          isDark ? 'bg-[#151921] border-[#2C3646]' : 'bg-white/95 border-rose-200 shadow-sm'
        }`}>
          {verbMode === 'action' ? (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-3"
            >
              <div className="text-xs font-black uppercase tracking-widest text-rose-600 dark:text-rose-400">
                Action Verbs in Motion:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-400/30 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl">🚣</span>
                      <AudioButton
                        text="Rowers pulled hard. Physical action along the River Thames."
                        textId="audio-verb-action-1"
                        speechRate={speechRate}
                        size="sm"
                      />
                    </div>
                    <div className="font-bold text-sm sm:text-base mt-1">"Rowers **pulled** hard"</div>
                  </div>
                  <p className="text-xs opacity-75">Physical action along the River Thames</p>
                </div>

                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-400/30 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl">🎶</span>
                      <AudioButton
                        text="The choir sang sweetly. Vocal performance in Cardiff Cathedral."
                        textId="audio-verb-action-2"
                        speechRate={speechRate}
                        size="sm"
                      />
                    </div>
                    <div className="font-bold text-sm sm:text-base mt-1">"The choir **sang** sweetly"</div>
                  </div>
                  <p className="text-xs opacity-75">Vocal performance in Cardiff Cathedral</p>
                </div>

                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-400/30 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl">🐿️</span>
                      <AudioButton
                        text="Red squirrels dashed. Agile sprint through Lake District woods."
                        textId="audio-verb-action-3"
                        speechRate={speechRate}
                        size="sm"
                      />
                    </div>
                    <div className="font-bold text-sm sm:text-base mt-1">"Red squirrels **dashed**"</div>
                  </div>
                  <p className="text-xs opacity-75">Agile sprint through Lake District woods</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-3"
            >
              <div className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">
                State of Being & Linking Verbs (Is, Was, Look, Remain):
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-400/30 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl">⛰️</span>
                      <AudioButton
                        text="Snowdon is towering. Verb to be expressing existence in Wales."
                        textId="audio-verb-state-1"
                        speechRate={speechRate}
                        size="sm"
                      />
                    </div>
                    <div className="font-bold text-sm sm:text-base mt-1">"Snowdon **is** towering"</div>
                  </div>
                  <p className="text-xs opacity-75">Verb "to be" expressing existence in Wales</p>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-400/30 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl">🪨</span>
                      <AudioButton
                        text="Stonehenge looked ancient. Sensory linking verb in Wiltshire."
                        textId="audio-verb-state-2"
                        speechRate={speechRate}
                        size="sm"
                      />
                    </div>
                    <div className="font-bold text-sm sm:text-base mt-1">"Stonehenge **looked** ancient"</div>
                  </div>
                  <p className="text-xs opacity-75">Sensory linking verb in Wiltshire</p>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-400/30 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl">🌊</span>
                      <AudioButton
                        text="The Giant's Causeway remains. Linking verb connecting timeless landmark."
                        textId="audio-verb-state-3"
                        speechRate={speechRate}
                        size="sm"
                      />
                    </div>
                    <div className="font-bold text-sm sm:text-base mt-1">"The Giant's Causeway **remains**"</div>
                  </div>
                  <p className="text-xs opacity-75">Linking verb connecting timeless landmark</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VISUALIZER 7: Adjectives Palette (Level 1) - FUN EXPLORER
  // -------------------------------------------------------------
  if (topic.id === 'l1-adjectives') {
    const adjPalette = [
      { category: 'Size Adjectives', word: 'Enormous', icon: '🐘', phrase: 'An enormous elephant strolled under the arch.', color: 'from-blue-600 to-indigo-600' },
      { category: 'Touch & Texture', word: 'Fluffy', icon: '🐇', phrase: 'A soft, fluffy rabbit hopped through the clover.', color: 'from-amber-600 to-yellow-600' },
      { category: 'Color Adjectives', word: 'Golden', icon: '🌻', phrase: 'A bright golden sunflower blossomed in the sunshine.', color: 'from-yellow-500 to-orange-500' },
      { category: 'Taste & Quality', word: 'Sweet', icon: '🍓', phrase: 'She enjoyed a juicy, sweet strawberry from the garden.', color: 'from-rose-600 to-pink-600' },
    ];

    const currentAdj = adjPalette[selectedAdjIndex];

    return (
      <div className={`rounded-3xl border p-5 sm:p-7 space-y-5 transition-all shadow-xs ${
        isDark ? 'bg-[#1D232D] border-[#343F52]' : 'bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-amber-500/10 border-pink-300/40'
      }`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-600 to-purple-500 text-white flex items-center justify-center shadow-md">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-heading font-extrabold flex items-center gap-2">
                <span>The Adjective Color & Texture Palette</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-pink-600 text-white font-bold uppercase tracking-wider">
                  Fun Explorer
                </span>
              </h3>
              <p className="text-xs sm:text-sm opacity-75">
                Adjectives paint vivid details about size, touch, color, and taste!
              </p>
            </div>
          </div>

          <AudioButton
            text="The Adjective Color and Texture Palette Fun Explorer. Adjectives describe nouns by giving details about size, touch, color, and taste."
            textId="audio-adj-palette-header"
            speechRate={speechRate}
            size="sm"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {adjPalette.map((item, idx) => (
            <button
              key={item.word}
              type="button"
              onClick={() => { setSelectedAdjIndex(idx); playSound('click'); }}
              className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                selectedAdjIndex === idx
                  ? 'bg-pink-600 text-white border-pink-700 shadow-md ring-2 ring-pink-400/40'
                  : isDark ? 'bg-[#161B23] border-[#2C3646] opacity-80' : 'bg-white/80 border-black/10 opacity-80'
              }`}
            >
              <div className="text-[10px] font-black uppercase tracking-wider opacity-90">{item.category}</div>
              <div className="text-xs sm:text-sm font-bold flex items-center gap-1">
                <span>{item.icon}</span> <span>{item.word}</span>
              </div>
            </button>
          ))}
        </div>

        <div className={`p-5 rounded-2xl border ${
          isDark ? 'bg-[#151921] border-[#2C3646]' : 'bg-white/95 border-pink-200 shadow-sm'
        }`}>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded bg-pink-500/20 text-pink-700 dark:text-pink-300">
              Describing Word: {currentAdj.word}
            </span>
            <AudioButton
              text={currentAdj.phrase}
              textId={`audio-adj-phrase-${selectedAdjIndex}`}
              speechRate={speechRate}
              size="sm"
            />
          </div>

          <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 py-1">
            "{currentAdj.phrase}"
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VISUALIZER 8: Capital Letters & Full Stops Patrol (Level 1) - FUN EXPLORER
  // -------------------------------------------------------------
  if (topic.id === 'l1-capital-letters-full-stops') {
    const punctSentences = [
      {
        before: 'ben visited london on monday',
        after: 'Ben visited London on Monday.',
        explanation: 'Capital B (sentence start), L (London city), M (Monday), plus full stop at end.'
      },
      {
        before: 'owls fly quietly at night',
        after: 'Owls fly quietly at night.',
        explanation: 'Capital O (sentence start) and full stop at end.'
      },
      {
        before: 'my dog max loves running in the park',
        after: 'My dog Max loves running in the park.',
        explanation: 'Capital M (start), M (Max person/pet name), and full stop.'
      }
    ];

    const currentPunct = punctSentences[punctSentenceIndex];

    return (
      <div className={`rounded-3xl border p-5 sm:p-7 space-y-5 transition-all shadow-xs ${
        isDark ? 'bg-[#1D232D] border-[#343F52]' : 'bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-cyan-500/10 border-indigo-300/40'
      }`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-500 text-white flex items-center justify-center shadow-md">
              <Type size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-heading font-extrabold flex items-center gap-2">
                <span>The Punctuation Patrol Transformer</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-600 text-white font-bold uppercase tracking-wider">
                  Fun Explorer
                </span>
              </h3>
              <p className="text-xs sm:text-sm opacity-75">
                Observe how capital letters and full stops transform messy text into proper English!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="inline-flex p-1 rounded-full bg-black/10 dark:bg-white/10 border border-black/10 text-xs font-bold">
              {punctSentences.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => { setPunctSentenceIndex(idx); playSound('click'); }}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    punctSentenceIndex === idx ? 'bg-indigo-600 text-white' : 'opacity-70'
                  }`}
                >
                  Sentence {idx + 1}
                </button>
              ))}
            </div>

            <AudioButton
              text={`Before: ${currentPunct.before}. After: ${currentPunct.after}. ${currentPunct.explanation}`}
              textId={`audio-punct-patrol-${punctSentenceIndex}`}
              speechRate={speechRate}
              size="sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl border bg-rose-500/10 border-rose-400/30 text-rose-950 dark:text-rose-100">
            <div className="text-xs font-black uppercase tracking-wider text-rose-700 dark:text-rose-300 mb-1">
              ✖ Messy (Missing Capitals & Full Stop)
            </div>
            <div className="text-base sm:text-lg font-mono">{currentPunct.before}</div>
          </div>

          <div className="p-4 rounded-2xl border bg-emerald-500/10 border-emerald-400/30 text-emerald-950 dark:text-emerald-100">
            <div className="text-xs font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-300 mb-1">
              ✔ Perfect British Punctuation
            </div>
            <div className="text-base sm:text-lg font-extrabold">{currentPunct.after}</div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VISUALIZER 9: Simple Sentences Builder Lab (Level 1) - FUN EXPLORER
  // -------------------------------------------------------------
  if (topic.id === 'l1-simple-sentences') {
    const subjects = ['The wise owl', 'A speedy steam train', 'The playful puppy', 'A brave knight'];
    const verbPhrases = ['hooted in the oak tree.', 'zoomed past the platform.', 'chased the bouncy ball.', 'guarded the castle gate.'];

    const fullSentence = `${subjects[simpleSubjIndex]} ${verbPhrases[simpleVerbIndex]}`;

    return (
      <div className={`rounded-3xl border p-5 sm:p-7 space-y-5 transition-all shadow-xs ${
        isDark ? 'bg-[#1D232D] border-[#343F52]' : 'bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-cyan-500/10 border-emerald-300/40'
      }`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md">
              <Layers size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-heading font-extrabold flex items-center gap-2">
                <span>The Simple Sentence Constructor</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-600 text-white font-bold uppercase tracking-wider">
                  Fun Explorer
                </span>
              </h3>
              <p className="text-xs sm:text-sm opacity-75">
                Pair a Subject (Who/What) with a Verb (Action) to build a complete simple sentence!
              </p>
            </div>
          </div>

          <AudioButton
            text={`Built Simple Sentence: ${fullSentence}`}
            textId={`audio-simple-builder-${simpleSubjIndex}-${simpleVerbIndex}`}
            speechRate={speechRate}
            size="sm"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="text-xs font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Select Subject (Who / What):
            </div>
            <div className="space-y-1.5">
              {subjects.map((subj, idx) => (
                <button
                  key={subj}
                  type="button"
                  onClick={() => { setSimpleSubjIndex(idx); playSound('click'); }}
                  className={`w-full p-2.5 rounded-xl border text-left text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    simpleSubjIndex === idx ? 'bg-emerald-600 text-white border-emerald-700' : 'bg-white/80 dark:bg-[#161B23] border-black/10 dark:border-[#2C3646]'
                  }`}
                >
                  {subj}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-black uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Select Verb Phrase (Action):
            </div>
            <div className="space-y-1.5">
              {verbPhrases.map((vPhrase, idx) => (
                <button
                  key={vPhrase}
                  type="button"
                  onClick={() => { setSimpleVerbIndex(idx); playSound('click'); }}
                  className={`w-full p-2.5 rounded-xl border text-left text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    simpleVerbIndex === idx ? 'bg-teal-600 text-white border-teal-700' : 'bg-white/80 dark:bg-[#161B23] border-black/10 dark:border-[#2C3646]'
                  }`}
                >
                  {vPhrase}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={`p-5 rounded-2xl border text-center ${
          isDark ? 'bg-[#151921] border-[#2C3646]' : 'bg-white/95 border-emerald-200 shadow-sm'
        }`}>
          <div className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1">
            Resulting Simple Sentence:
          </div>
          <div className="text-lg sm:text-xl font-heading font-extrabold text-slate-900 dark:text-white">
            "{fullSentence}"
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VISUALIZER 10: Conditionals Multiverse (Level 5)
  // -------------------------------------------------------------
  if (topic.id === 'l5-conditionals') {
    const tiers = [
      {
        name: 'Zero Conditional',
        badge: 'Universal Fact',
        formula: 'If + Present Simple, Present Simple',
        example: 'If heavy rain falls on Dartmoor, the peat bogs absorb the water.',
        bg: 'from-blue-600 to-cyan-600',
      },
      {
        name: '1st Conditional',
        badge: 'Real Future Probability',
        formula: 'If + Present Simple, will + base verb',
        example: 'If the ferry departs Dover on schedule, we will reach the harbour by noon.',
        bg: 'from-emerald-600 to-teal-600',
      },
      {
        name: '2nd Conditional',
        badge: 'Hypothetical Dream',
        formula: 'If + Past Simple, would + base verb',
        example: 'If I lived in a cottage in the Lake District, I would write poetry every afternoon.',
        bg: 'from-purple-600 to-pink-600',
      },
      {
        name: '3rd Conditional',
        badge: 'Past Alternate Reality',
        formula: 'If + Past Perfect, would have + past participle',
        example: 'If the engineers had not strengthened the Forth Bridge, it would not have survived the storm.',
        bg: 'from-rose-600 to-orange-600',
      },
    ];

    const currentTier = tiers[conditionalTier];

    return (
      <div className={`rounded-3xl border p-5 sm:p-7 space-y-5 transition-all shadow-xs ${
        isDark ? 'bg-[#1D232D] border-[#343F52]' : 'bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-blue-500/10 border-purple-300/40'
      }`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 text-white flex items-center justify-center shadow-md">
              <SplitSquareVertical size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-heading font-extrabold flex items-center gap-2">
                <span>The Conditionals Timeline Lab</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-purple-600 text-white font-bold uppercase tracking-wider">
                  Timeline Lab
                </span>
              </h3>
              <p className="text-xs sm:text-sm opacity-75">
                From universal scientific laws to imaginary past counterfactuals
              </p>
            </div>
          </div>
          <AudioButton
            text="The Conditionals Timeline Lab. From universal scientific facts to imaginary past counterfactuals."
            textId="audio-cond-header"
            speechRate={speechRate}
            size="sm"
          />
        </div>

        {/* 4-step buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {tiers.map((t, idx) => (
            <button
              key={t.name}
              type="button"
              onClick={() => {
                setConditionalTier(idx as 0 | 1 | 2 | 3);
                playSound('click');
              }}
              className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                conditionalTier === idx
                  ? 'bg-purple-600 text-white border-purple-700 shadow-md ring-2 ring-purple-400/40'
                  : isDark
                  ? 'bg-[#161B23] border-[#2C3646] text-slate-300 hover:bg-[#202734]'
                  : 'bg-white/80 border-black/10 text-slate-800 hover:bg-white'
              }`}
            >
              <div className="text-[10px] uppercase tracking-wider font-extrabold opacity-85">{t.badge}</div>
              <div className="text-xs sm:text-sm font-bold truncate">{t.name}</div>
            </button>
          ))}
        </div>

        <div className={`p-5 rounded-2xl border ${
          isDark ? 'bg-[#151921] border-[#2C3646]' : 'bg-white/95 border-purple-200 shadow-sm'
        }`}>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-black/10 dark:bg-white/10">
              Formula: {currentTier.formula}
            </span>
            <AudioButton
              text={currentTier.example}
              textId={`audio-cond-${conditionalTier}`}
              speechRate={speechRate}
              size="sm"
            />
          </div>

          <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 py-1">
            "{currentTier.example}"
          </div>
        </div>
      </div>
    );
  }

  // Default fallback visual badge card for topics without custom mini-labs
  return (
    <div className={`rounded-3xl border p-4 sm:p-5 flex items-center justify-between gap-3 shadow-xs ${
      isDark ? 'bg-[#181E26] border-[#313C4C]' : 'bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-200'
    }`}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-black shadow-sm">
          <Sparkles size={20} />
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest font-black text-amber-700 dark:text-amber-400">
            Grammar Focus Blueprint
          </div>
          <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
            {topic.title} • {topic.categoryLabel}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-amber-600/15 text-amber-800 dark:text-amber-300 border border-amber-500/20">
          <ShieldCheck size={14} /> National Curriculum UK
        </span>
        <AudioButton
          text={`${topic.title}. ${topic.categoryLabel}. UK National Curriculum Grammar Blueprint.`}
          textId={`audio-fallback-badge-${topic.id}`}
          speechRate={speechRate}
          size="sm"
        />
      </div>
    </div>
  );
};

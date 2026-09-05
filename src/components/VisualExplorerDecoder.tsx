import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Map, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Eye, 
  HelpCircle, 
  Zap, 
  ShieldCheck, 
  MapPin, 
  Flag,
  RotateCw,
  Volume2
} from 'lucide-react';
import { GrammarTopic, StudyTheme } from '../types';
import { AudioButton } from './AudioButton';
import { APP_IMAGES, getExplorer } from '../utils/assets';
import { playSound } from '../utils/storage';

interface VisualExplorerDecoderProps {
  topic: GrammarTopic;
  studyTheme?: StudyTheme;
  speechRate: number;
  selectedExplorerId?: string;
}

export const VisualExplorerDecoder: React.FC<VisualExplorerDecoderProps> = ({
  topic,
  studyTheme = 'pastel-warm',
  speechRate,
  selectedExplorerId,
}) => {
  const isDark = studyTheme === 'pastel-night' || studyTheme === 'dark-study';
  const explorer = getExplorer(selectedExplorerId);
  const [activeTab, setActiveTab] = useState<'blueprint' | 'trail' | 'contrast'>('blueprint');
  const [activeAnatomyIndex, setActiveAnatomyIndex] = useState(0);

  // Derive visual anatomy blocks based on topic category & title
  const getAnatomyBlocks = () => {
    if (topic.id.includes('noun')) {
      return [
        { label: 'Determiner / Article', example: 'The / A', color: 'from-blue-500 to-indigo-600', role: 'Introduces the noun entity and signals whether it is specific or general' },
        { label: 'Adjective Modifier', example: 'golden / historic', color: 'from-violet-500 to-purple-600', role: 'Describes quality, size, color, or origin of the noun' },
        { label: 'Core Noun', example: 'castle / explorer', color: 'from-amber-500 to-orange-600', role: 'The person, place, or thing at the center of the phrase' },
      ];
    }
    if (topic.id.includes('verb')) {
      return [
        { label: 'Subject / Doer', example: 'The navigator', color: 'from-blue-500 to-cyan-600', role: 'The person or thing performing or experiencing the action' },
        { label: 'Auxiliary Verb', example: 'was / has', color: 'from-indigo-500 to-violet-600', role: 'Assists with tense, aspect, or voice' },
        { label: 'Main Action Verb', example: 'charted / sailed', color: 'from-emerald-500 to-teal-600', role: 'The engine of the sentence expressing action or state' },
        { label: 'Object / Goal', example: 'the coastline', color: 'from-amber-500 to-orange-600', role: 'The entity receiving the action' }
      ];
    }
    if (topic.id.includes('clause') || topic.id.includes('compound') || topic.id.includes('complex')) {
      return [
        { label: 'Independent Clause', example: 'The fog cleared', color: 'from-emerald-500 to-teal-600', role: 'A complete thought with subject and finite verb that can stand alone' },
        { label: 'Conjunction / Connector', example: 'and / although', color: 'from-amber-500 to-orange-600', role: 'The bridge linking two thoughts together' },
        { label: 'Second Clause', example: 'the tower appeared', color: 'from-sky-500 to-blue-600', role: 'Provides complementary action or subordinate dependency' }
      ];
    }
    if (topic.id.includes('adverb')) {
      return [
        { label: 'Fronted Adverbial', example: 'With great caution,', color: 'from-purple-500 to-indigo-600', role: 'Tells WHERE, WHEN, or HOW the action unfolds. Followed by a comma!' },
        { label: 'Subject', example: 'the expedition', color: 'from-blue-500 to-cyan-600', role: 'Who performs the action' },
        { label: 'Predicate Verb', example: 'crossed the bridge.', color: 'from-emerald-500 to-teal-600', role: 'What happened' }
      ];
    }
    // Default syntax architecture
    return [
      { label: 'Subject (Agent)', example: 'The keen scholar', color: 'from-blue-500 to-indigo-600', role: 'Who or what the sentence is about' },
      { label: 'Finite Verb (Action)', example: 'discovered', color: 'from-emerald-500 to-teal-600', role: 'The action or state that powers the statement' },
      { label: 'Object / Complement', example: 'the ancient manuscript', color: 'from-amber-500 to-orange-600', role: 'The recipient or description completing the idea' },
      { label: 'Punctuation Terminal', example: '.', color: 'from-rose-500 to-pink-600', role: 'Guides reader breath and establishes syntactic boundary' }
    ];
  };

  const anatomyBlocks = getAnatomyBlocks();

  return (
    <div className={`rounded-3xl border p-5 sm:p-7 shadow-xs space-y-6 transition-all ${
      isDark 
        ? 'bg-[#1C222D] border-[#343F52] text-slate-100' 
        : 'bg-gradient-to-br from-amber-500/5 via-sky-500/5 to-emerald-500/5 border-amber-200/90 text-slate-900'
    }`}>
      {/* Top Header: Iconic Title, Explorer Badge & Tab Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 text-white flex items-center justify-center shadow-md shrink-0">
            <Compass size={24} className="animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-600 text-white shadow-2xs">
                Visual Explorer Guide
              </span>
              <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 hidden sm:inline">
                with {explorer.name}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-heading font-extrabold text-slate-900 dark:text-white mt-0.5">
              Intuitive Visual Decoder: {topic.title}
            </h2>
          </div>
        </div>

        {/* Colorful Mode Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 self-start md:self-auto">
          <button
            type="button"
            onClick={() => {
              setActiveTab('blueprint');
              playSound('click');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
              activeTab === 'blueprint'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            <Layers size={13} />
            <span>Syntax Blueprint</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('trail');
              playSound('click');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
              activeTab === 'trail'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            <Map size={13} />
            <span>Expedition Trail</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('contrast');
              playSound('click');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
              activeTab === 'contrast'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            <Zap size={13} />
            <span>Pitfall vs Fix</span>
          </button>
        </div>
      </div>

      {/* TAB 1: Visual Syntax Anatomy Blueprint */}
      {activeTab === 'blueprint' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs sm:text-sm font-medium opacity-80">
              Tap any block in the sentence chain to inspect its grammatical duty on this expedition:
            </p>
            <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 shrink-0">
              Interactive Lab
            </span>
          </div>

          {/* Connected Flow Chain */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {anatomyBlocks.map((block, index) => {
              const isSelected = activeAnatomyIndex === index;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setActiveAnatomyIndex(index);
                    playSound('click');
                  }}
                  className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between group shadow-xs ${
                    isSelected
                      ? `bg-white dark:bg-slate-800 border-amber-500 ring-3 ring-amber-500/30 scale-[1.02]`
                      : 'bg-white/70 dark:bg-[#181D26] border-slate-200 dark:border-slate-800 hover:border-amber-400'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${block.color} shadow-xs`} />
                      <span className="text-[10px] font-black uppercase text-slate-500 dark:text-slate-400">
                        Part {index + 1}
                      </span>
                    </div>

                    <div className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-slate-100 group-hover:text-amber-600 transition-colors">
                      {block.label}
                    </div>

                    <div className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400 mt-1">
                      "{block.example}"
                    </div>
                  </div>

                  <div className="mt-2 text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1 font-semibold">
                    <Eye size={11} /> {isSelected ? 'Inspecting' : 'Tap to reveal'}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Detail Inspector Panel */}
          {anatomyBlocks[activeAnatomyIndex] && (
            <div className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
              isDark ? 'bg-[#151922] border-[#2E3748]' : 'bg-white border-amber-200/90 shadow-sm'
            }`}>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${anatomyBlocks[activeAnatomyIndex].color}`} />
                  <h4 className="font-extrabold text-sm sm:text-base text-slate-950 dark:text-white">
                    {anatomyBlocks[activeAnatomyIndex].label}
                  </h4>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-black/10 dark:bg-white/10 font-bold font-mono">
                    Example: {anatomyBlocks[activeAnatomyIndex].example}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
                  {anatomyBlocks[activeAnatomyIndex].role}
                </p>
              </div>

              <div className="shrink-0">
                <AudioButton
                  text={`${anatomyBlocks[activeAnatomyIndex].label}. Role: ${anatomyBlocks[activeAnatomyIndex].role}`}
                  textId={`anatomy-audio-${activeAnatomyIndex}`}
                  speechRate={speechRate}
                  size="sm"
                  label="Listen to Rule"
                  showLabel
                />
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* TAB 2: Expedition Trail Map */}
      {activeTab === 'trail' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="space-y-4"
        >
          {/* Panoramic Visual Banner with British Landmarks */}
          <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-sm h-40 sm:h-48">
            <img 
              src={APP_IMAGES.explorerLandscape} 
              alt="British Grammar Expedition Trail"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-4 sm:p-5 flex flex-col justify-end text-white">
              <div className="flex items-center gap-2 mb-1">
                <Flag size={14} className="text-amber-400" />
                <span className="text-xs font-black uppercase tracking-wider text-amber-300">
                  Curriculum Expedition Trail
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold max-w-xl">
                Journeying with {explorer.name} across the British Isles from London's Elizabeth Tower to the Scottish Highlands.
              </p>
            </div>
          </div>

          {/* Trail Milestones */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className={`p-3.5 rounded-2xl border ${
              isDark ? 'bg-[#171C24] border-slate-800' : 'bg-white border-amber-100'
            }`}>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 mb-1">
                <MapPin size={14} /> Basecamp Landmark
              </div>
              <div className="font-extrabold text-sm text-slate-900 dark:text-slate-100">
                {explorer.favoriteLandmark.split('&')[0]}
              </div>
              <p className="text-[11px] opacity-70 mt-1">
                Where your expedition commences with fundamental noun and verb rules.
              </p>
            </div>

            <div className={`p-3.5 rounded-2xl border ${
              isDark ? 'bg-[#171C24] border-slate-800' : 'bg-white border-amber-100'
            }`}>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 mb-1">
                <Sparkles size={14} /> Trail Challenge
              </div>
              <div className="font-extrabold text-sm text-slate-900 dark:text-slate-100">
                {topic.title} Mastery
              </div>
              <p className="text-[11px] opacity-70 mt-1">
                Complete the interactive exercises below to plant your explorer marker!
              </p>
            </div>

            <div className={`p-3.5 rounded-2xl border ${
              isDark ? 'bg-[#171C24] border-slate-800' : 'bg-white border-amber-100'
            }`}>
              <div className="flex items-center gap-2 text-xs font-bold text-purple-600 mb-1">
                <ShieldCheck size={14} /> Explorer Award
              </div>
              <div className="font-extrabold text-sm text-slate-900 dark:text-slate-100">
                {topic.levelLabel} Badge
              </div>
              <p className="text-[11px] opacity-70 mt-1">
                Score 80%+ on the practice quiz to earn permanent badge honors.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* TAB 3: Pitfall vs Fix (High visual contrast) */}
      {activeTab === 'contrast' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="space-y-4"
        >
          {topic.tipsAndTricks && topic.tipsAndTricks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topic.tipsAndTricks.map(tip => (
                <div 
                  key={tip.id} 
                  className={`p-4 sm:p-5 rounded-2xl border space-y-3 ${
                    isDark ? 'bg-[#181D26] border-slate-800' : 'bg-white border-amber-200/80 shadow-xs'
                  }`}
                >
                  <div className="font-heading font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100 flex items-center justify-between">
                    <span>{tip.title}</span>
                    <AudioButton
                      text={`Common mistake: ${tip.commonMistake}. Correct way: ${tip.correctWay}`}
                      textId={`tip-audio-${tip.id}`}
                      speechRate={speechRate}
                      size="sm"
                    />
                  </div>

                  {/* Red Card: The Pitfall */}
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-400/30 text-rose-900 dark:text-rose-300 text-xs sm:text-sm font-medium flex items-start gap-2">
                    <XCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold block text-rose-800 dark:text-rose-200">Avoid this Pitfall:</strong>
                      <span>{tip.commonMistake}</span>
                    </div>
                  </div>

                  {/* Green Card: The Explorer Way */}
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-900 dark:text-emerald-300 text-xs sm:text-sm font-medium flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold block text-emerald-800 dark:text-emerald-200">Explorer Gold Standard:</strong>
                      <span>{tip.correctWay}</span>
                    </div>
                  </div>

                  {/* Memory Aid */}
                  {tip.mnemonic && (
                    <div className="text-xs p-2.5 rounded-lg bg-amber-500/10 border border-amber-300/40 text-amber-900 dark:text-amber-300 font-bold flex items-center gap-1.5">
                      <Sparkles size={14} className="text-amber-600 shrink-0" />
                      <span>Memory Anchor: {tip.mnemonic}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className={`p-6 rounded-2xl border text-center ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-amber-200'
            }`}>
              <ShieldCheck size={32} className="mx-auto text-emerald-600 mb-2" />
              <div className="font-bold text-sm">Universal Standard English Rules</div>
              <p className="text-xs opacity-75 mt-1">
                Always ensure verb agreement and capitalize proper nouns across every sentence.
              </p>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  X, 
  Check, 
  Sparkles, 
  MapPin, 
  Target, 
  Volume2, 
  Award,
  ChevronRight
} from 'lucide-react';
import { ExplorerCompanion, StudyTheme } from '../types';
import { EXPLORER_COMPANIONS } from '../utils/assets';
import { AudioButton } from './AudioButton';
import { playSound } from '../utils/storage';

interface ExplorerSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedExplorerId?: string;
  onSelectExplorer: (explorerId: string) => void;
  speechRate: number;
  studyTheme?: StudyTheme;
}

export const ExplorerSelectorModal: React.FC<ExplorerSelectorModalProps> = ({
  isOpen,
  onClose,
  selectedExplorerId = 'barnaby-cartographer',
  onSelectExplorer,
  speechRate,
  studyTheme = 'pastel-warm',
}) => {
  const isDark = studyTheme === 'pastel-night' || studyTheme === 'dark-study';

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={e => e.stopPropagation()}
          className={`w-full max-w-2xl rounded-3xl border shadow-2xl overflow-hidden my-8 ${
            isDark 
              ? 'bg-[#1C222C] border-[#384355] text-slate-100' 
              : 'bg-[#FAF6EE] border-[#DED4C5] text-slate-900'
          }`}
        >
          {/* Header Banner with Colorful Explorer Badges */}
          <div className="relative p-6 bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner">
                <Compass size={28} className="animate-spin-slow text-amber-200" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/20 text-amber-100 border border-white/20">
                  British Grammar Expeditions
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-extrabold mt-0.5">
                  Choose Your Explorer Guide
                </h2>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-black/20 hover:bg-black/35 flex items-center justify-center transition-colors cursor-pointer text-white"
              title="Close guide selector"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-5 sm:p-7 space-y-4 max-h-[75vh] overflow-y-auto">
            <p className="text-xs sm:text-sm font-medium opacity-80 leading-relaxed">
              Select your adventure companion! Your chosen explorer will accompany you through lessons with bespoke study tips, mnemonic stories, and encouragement along your UK grammar trail.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {EXPLORER_COMPANIONS.map(explorer => {
                const isSelected = (selectedExplorerId || 'barnaby-cartographer') === explorer.id;

                return (
                  <div
                    key={explorer.id}
                    onClick={() => {
                      onSelectExplorer(explorer.id);
                      playSound('badge');
                    }}
                    className={`relative rounded-2xl border p-4.5 cursor-pointer transition-all duration-200 flex flex-col justify-between group shadow-xs ${
                      isSelected
                        ? isDark
                          ? 'bg-[#242D3B] border-amber-500 ring-2 ring-amber-500/40'
                          : 'bg-white border-amber-500 ring-3 ring-amber-500/30 shadow-md'
                        : isDark
                        ? 'bg-[#181E27] border-[#2C3646] hover:border-slate-500 hover:bg-[#1E2530]'
                        : 'bg-white/70 border-[#E2D8CA] hover:border-amber-400 hover:bg-white'
                    }`}
                  >
                    {/* Active Selected Stamp */}
                    {isSelected && (
                      <div className="absolute -top-2.5 -right-2.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-600 to-orange-500 text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
                        <Check size={12} /> Active Guide
                      </div>
                    )}

                    <div>
                      {/* Top: Avatar & Name */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-amber-500/80 shadow-md shrink-0 group-hover:scale-105 transition-transform">
                          <img
                            src={explorer.avatar}
                            alt={explorer.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="min-w-0">
                          <h3 className="font-heading font-extrabold text-base sm:text-lg leading-tight text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                            {explorer.name}
                          </h3>
                          <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 truncate">
                            {explorer.title}
                          </p>
                          <div className="flex items-center gap-1 text-[11px] opacity-70 mt-0.5">
                            <MapPin size={11} className="shrink-0 text-amber-600" />
                            <span className="truncate">{explorer.favoriteLandmark.split('&')[0]}</span>
                          </div>
                        </div>
                      </div>

                      {/* Specialty Badge */}
                      <div className={`p-2 rounded-xl text-xs mb-3 font-medium border ${
                        isDark ? 'bg-[#151A22] border-[#283240] text-slate-300' : 'bg-slate-50 border-slate-200/80 text-slate-700'
                      }`}>
                        <span className="font-bold text-amber-700 dark:text-amber-400">Specialty: </span>
                        {explorer.specialty}
                      </div>

                      {/* Sample Quote */}
                      <div className={`p-2.5 rounded-xl text-[11px] sm:text-xs italic leading-relaxed mb-3 border ${
                        isDark ? 'bg-black/20 border-slate-800 text-slate-300' : 'bg-amber-50/70 border-amber-100 text-slate-800'
                      }`}>
                        "{explorer.quotes[0]}"
                      </div>
                    </div>

                    {/* Bottom Action Row */}
                    <div className="flex items-center justify-between gap-2 pt-2 border-t border-black/5 dark:border-white/5">
                      <AudioButton
                        text={`${explorer.name}, ${explorer.title}. ${explorer.quotes[0]}`}
                        textId={`explorer-voice-${explorer.id}`}
                        speechRate={speechRate}
                        size="sm"
                        label="Hear Voice"
                        showLabel
                      />

                      <button
                        type="button"
                        onClick={e => {
                          e.stopPropagation();
                          onSelectExplorer(explorer.id);
                          playSound('badge');
                        }}
                        className={`px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-600 text-white shadow-sm'
                            : 'bg-black/10 dark:bg-white/10 hover:bg-amber-500 hover:text-white text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {isSelected ? 'Current' : 'Select'}
                        <ChevronRight size={13} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-4 bg-black/5 dark:bg-white/5 border-t border-black/10 dark:border-white/10 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-xs sm:text-sm shadow-md transition-transform active:scale-95 cursor-pointer"
            >
              Ready for Expedition!
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

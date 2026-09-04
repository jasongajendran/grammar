import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { speechService } from '../utils/speech';

interface AudioButtonProps {
  text: string;
  textId: string;
  speechRate?: number;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLabel?: boolean;
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  textId,
  speechRate = 1.0,
  label = 'Listen',
  size = 'md',
  className = '',
  showLabel = false,
}) => {
  const [isSpeakingThis, setIsSpeakingThis] = useState(false);

  useEffect(() => {
    const unsubscribe = speechService.addSpeakingListener((isSpeaking, activeId) => {
      setIsSpeakingThis(isSpeaking && activeId === textId);
    });
    return () => unsubscribe();
  }, [textId]);

  const handleToggleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSpeakingThis) {
      speechService.stop();
    } else {
      speechService.speak(text, textId, speechRate);
    }
  };

  const sizeClasses = {
    sm: 'p-1 text-xs gap-1',
    md: 'p-1.5 text-sm gap-1.5',
    lg: 'p-2 text-base gap-2',
  }[size];

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18,
  }[size];

  return (
    <button
      type="button"
      id={`audio-btn-${textId}`}
      onClick={handleToggleSpeak}
      title={isSpeakingThis ? 'Stop speaking' : 'Listen with British voice (en-GB)'}
      aria-label={isSpeakingThis ? 'Stop voice reading' : `Listen: ${label}`}
      className={`inline-flex items-center justify-center rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer ${
        isSpeakingThis
          ? 'bg-amber-500 text-white shadow-sm ring-2 ring-amber-300 animate-pulse'
          : 'bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-800 border border-slate-200'
      } ${sizeClasses} ${className}`}
    >
      {isSpeakingThis ? (
        <VolumeX size={iconSizes} className="shrink-0" />
      ) : (
        <Volume2 size={iconSizes} className="shrink-0 text-amber-600" />
      )}
      {showLabel && (
        <span className="font-medium text-xs whitespace-nowrap">
          {isSpeakingThis ? 'Playing...' : label}
        </span>
      )}
    </button>
  );
};

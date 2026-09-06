import React, { createContext, useContext, useEffect, useState } from 'react';
import { Volume2 } from 'lucide-react';
import { speechService } from '../utils/speech';

interface ReadableBoxContextType {
  isSpeaking: boolean;
  textId: string;
}

export const ReadableBoxContext = createContext<ReadableBoxContextType>({
  isSpeaking: false,
  textId: '',
});

export const useReadableBox = () => useContext(ReadableBoxContext);

export interface ReadableIconProps {
  size?: number;
  className?: string;
}

export const ReadableIcon: React.FC<ReadableIconProps> = ({
  size = 16,
  className = 'text-amber-600 dark:text-amber-400 opacity-70 group-hover:opacity-100 transition-opacity',
}) => {
  const { isSpeaking } = useReadableBox();

  if (isSpeaking) {
    return (
      <span className="inline-flex items-center justify-center p-1 rounded-full bg-amber-500 text-slate-950 shadow-xs ring-2 ring-amber-300 animate-pulse shrink-0">
        <Volume2 size={size > 14 ? size - 2 : size} className="shrink-0" />
      </span>
    );
  }

  return <Volume2 size={size} className={`shrink-0 ${className}`} />;
};

interface ReadableBoxProps {
  text: string;
  textId: string;
  speechRate?: number;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  onClick?: (e: React.MouseEvent) => void;
  as?: 'div' | 'article' | 'section';
}

export const ReadableBox: React.FC<ReadableBoxProps> = ({
  text,
  textId,
  speechRate = 1.0,
  children,
  className = '',
  activeClassName = 'ring-3 ring-amber-500 border-amber-500 shadow-md bg-amber-500/15 dark:bg-amber-400/20',
  onClick,
  as: Component = 'div',
}) => {
  const [isSpeakingThis, setIsSpeakingThis] = useState(false);

  useEffect(() => {
    const unsubscribe = speechService.addSpeakingListener((isSpeaking, activeId) => {
      setIsSpeakingThis(isSpeaking && activeId === textId);
    });
    return () => unsubscribe();
  }, [textId]);

  const handleContainerClick = (e: React.MouseEvent) => {
    // Check if the click target is an interactive element
    const target = e.target as HTMLElement | null;
    if (target) {
      const interactiveEl = target.closest('button, a, input, textarea, select, [role="button"], [data-no-speech="true"]');
      if (interactiveEl) {
        if (onClick) onClick(e);
        return;
      }
    }

    if (isSpeakingThis) {
      speechService.stop();
    } else {
      speechService.speak(text, textId, speechRate);
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <ReadableBoxContext.Provider value={{ isSpeaking: isSpeakingThis, textId }}>
      <Component
        id={`readable-box-${textId}`}
        onClick={handleContainerClick}
        title={isSpeakingThis ? 'Stop listening' : 'Listen with British voice'}
        className={`relative transition-all duration-300 cursor-pointer group hover:ring-1 hover:ring-amber-500/50 ${
          isSpeakingThis
            ? `${activeClassName} ring-offset-2 ring-offset-amber-50 dark:ring-offset-slate-900`
            : ''
        } ${className}`}
      >
        {children}
      </Component>
    </ReadableBoxContext.Provider>
  );
};


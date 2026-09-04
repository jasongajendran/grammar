import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { StudyTheme } from '../types';

interface ScrollToTopProps {
  studyTheme?: StudyTheme;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({
  studyTheme = 'warm-paper',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  const isDark = studyTheme === 'dark-study';

  return (
    <button
      type="button"
      id="btn-scroll-to-top"
      onClick={scrollToTop}
      title="Go to top of page"
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-2xl shadow-xl border hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-xs focus:outline-none focus:ring-2 focus:ring-amber-500 ${
        isDark
          ? 'bg-[#2E3544] text-[#E6EAF0] border-[#3E485A] hover:bg-[#384152]'
          : 'bg-[#242831] text-white border-[#3F4756] hover:bg-black'
      }`}
    >
      <ArrowUp size={20} className="stroke-[2.5]" />
    </button>
  );
};

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
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

  return (
    <button
      type="button"
      id="btn-scroll-to-top"
      onClick={scrollToTop}
      title="Go to top of page"
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-slate-900/90 hover:bg-slate-900 text-white shadow-lg border border-slate-700 hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
    >
      <ArrowUp size={20} className="stroke-[2.5]" />
    </button>
  );
};

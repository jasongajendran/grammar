/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PanelLeftOpen, BookOpen } from 'lucide-react';
import { DifficultyLevel, GrammarTopic, UserProgress, StudyTheme, FontSizePreference } from './types';
import { ALL_TOPICS, LEVEL_METADATA, getTopicById } from './data/curriculum';
import { loadUserProgress, saveUserProgress, checkAndAwardBadges } from './utils/storage';
import { Header } from './components/Header';
import { ChapterNav } from './components/ChapterNav';
import { TopicView } from './components/TopicView';
import { BadgesModal } from './components/BadgesModal';
import { ProgressModal } from './components/ProgressModal';
import { ScrollToTop } from './components/ScrollToTop';
import { BadgeUnlockToast } from './components/BadgeUnlockToast';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(() => loadUserProgress());
  const [currentLevel, setCurrentLevel] = useState<DifficultyLevel>('level-1');
  const [currentTopicId, setCurrentTopicId] = useState<string>('l1-nouns');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isBadgesModalOpen, setIsBadgesModalOpen] = useState(false);
  const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);
  const [newlyAwardedBadgeId, setNewlyAwardedBadgeId] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Synchronize fullscreen state with HTML5 fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isDocFs = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      );
      setIsFullscreen(isDocFs);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const handleToggleFullscreen = async () => {
    try {
      const isDocFs = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      );

      if (!isDocFs && !isFullscreen) {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        } else if ((document.documentElement as any).webkitRequestFullscreen) {
          await (document.documentElement as any).webkitRequestFullscreen();
        } else if ((document.documentElement as any).msRequestFullscreen) {
          await (document.documentElement as any).msRequestFullscreen();
        } else {
          setIsFullscreen(true);
        }
      } else {
        if (document.exitFullscreen && document.fullscreenElement) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen && (document as any).webkitFullscreenElement) {
          await (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen && (document as any).msFullscreenElement) {
          await (document as any).msExitFullscreen();
        }
        setIsFullscreen(false);
      }
    } catch {
      // In iframes or browser contexts where requestFullscreen is restricted,
      // fallback smoothly to immersive app fullscreen view
      setIsFullscreen(prev => !prev);
    }
  };

  // Keyboard shortcut listener: 'f' or 'F' to toggle fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement as HTMLElement | null;
      const isTyping = activeEl && (
        activeEl.tagName === 'INPUT' ||
        activeEl.tagName === 'TEXTAREA' ||
        activeEl.isContentEditable
      );
      if (!isTyping && (e.key === 'f' || e.key === 'F')) {
        e.preventDefault();
        handleToggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  const handleToggleSidebar = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setIsSidebarOpen(prev => !prev);
    } else {
      setIsSidebarCollapsed(prev => !prev);
    }
  };

  const currentTheme: StudyTheme = progress.studyTheme || 'pastel-warm';
  const currentFontSize: FontSizePreference = progress.fontSize || 'large';

  // Apply theme and font-size attributes to root
  useEffect(() => {
    document.documentElement.setAttribute('data-study-theme', currentTheme);
    document.documentElement.setAttribute('data-font-size', currentFontSize);

    const isDark = currentTheme === 'pastel-night' || currentTheme === 'dark-study';
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-[#171B22] text-[#E5EAF2] antialiased overflow-x-clip min-h-screen selection:bg-amber-600 selection:text-white';
    } else {
      document.documentElement.classList.remove('dark');
      if (currentTheme === 'pastel-sage' || currentTheme === 'calm-sage') {
        document.body.className = 'bg-[#EBF2EC] text-[#1C2922] antialiased overflow-x-clip min-h-screen selection:bg-emerald-200 selection:text-emerald-950';
      } else if (currentTheme === 'pastel-lavender') {
        document.body.className = 'bg-[#EFEAF4] text-[#241E2F] antialiased overflow-x-clip min-h-screen selection:bg-purple-200 selection:text-purple-950';
      } else if (currentTheme === 'pastel-peach') {
        document.body.className = 'bg-[#F7EEE4] text-[#2C211B] antialiased overflow-x-clip min-h-screen selection:bg-orange-200 selection:text-orange-950';
      } else {
        // Default pastel warm linen / oatmeal - gentle and glare-free
        document.body.className = 'bg-[#F4EFE6] text-[#252830] antialiased overflow-x-clip min-h-screen selection:bg-amber-200 selection:text-amber-950';
      }
    }
  }, [currentTheme, currentFontSize]);

  // Sync current level when topic changes
  const activeTopic = getTopicById(currentTopicId) || ALL_TOPICS[0];

  useEffect(() => {
    if (activeTopic && activeTopic.level !== currentLevel) {
      setCurrentLevel(activeTopic.level);
    }
  }, [activeTopic, currentLevel]);

  // Handle Level Selection
  const handleSelectLevel = (lvl: DifficultyLevel) => {
    setCurrentLevel(lvl);
    const firstTopicInLevel = ALL_TOPICS.find(t => t.level === lvl);
    if (firstTopicInLevel) {
      setCurrentTopicId(firstTopicInLevel.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle Topic Selection
  const handleSelectTopic = (topicId: string) => {
    setCurrentTopicId(topicId);
    const targetTopic = getTopicById(topicId);
    if (targetTopic) {
      setCurrentLevel(targetTopic.level);
    }
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update last studied topic
    const updated = { ...progress, lastStudiedTopicId: topicId };
    setProgress(updated);
    saveUserProgress(updated);
  };

  // Handle Theme Change
  const handleChangeTheme = (theme: StudyTheme) => {
    const updated = { ...progress, studyTheme: theme };
    setProgress(updated);
    saveUserProgress(updated);
  };

  // Handle Quiz Completion
  const handleCompleteTopicQuiz = (topicId: string, scorePercent: number) => {
    const existingScore = progress.quizScores[topicId] || 0;
    const highestScore = Math.max(existingScore, scorePercent);
    const isNowCompleted = scorePercent >= 60; // 60% passing mark

    const completed = new Set(progress.completedTopics);
    if (isNowCompleted) {
      completed.add(topicId);
    }

    const updatedScores = {
      ...progress.quizScores,
      [topicId]: highestScore,
    };

    const updatedAttempts = {
      ...progress.quizAttempts,
      [topicId]: (progress.quizAttempts[topicId] || 0) + 1,
    };

    const newProgressState: UserProgress = {
      ...progress,
      completedTopics: Array.from(completed),
      quizScores: updatedScores,
      quizAttempts: updatedAttempts,
      totalCorrectAnswers: progress.totalCorrectAnswers + Math.round((scorePercent / 100) * 4),
    };

    // Check for badges
    const { updatedProgress, newlyEarnedBadges } = checkAndAwardBadges(
      newProgressState,
      badgeId => {
        setNewlyAwardedBadgeId(badgeId);
      }
    );

    setProgress(updatedProgress);
    saveUserProgress(updatedProgress);
  };

  // Toggle Bookmark
  const handleToggleBookmark = (topicId: string) => {
    const isBookmarked = progress.bookmarkedTopics.includes(topicId);
    let updatedList: string[];
    if (isBookmarked) {
      updatedList = progress.bookmarkedTopics.filter(id => id !== topicId);
    } else {
      updatedList = [...progress.bookmarkedTopics, topicId];
    }
    const updated = { ...progress, bookmarkedTopics: updatedList };
    setProgress(updated);
    saveUserProgress(updated);
  };

  // Change Speech Rate
  const handleChangeSpeechRate = (rate: number) => {
    const updated = { ...progress, speechRate: rate };
    setProgress(updated);
    saveUserProgress(updated);
  };

  // Change Font Size
  const handleChangeFontSize = (size: FontSizePreference) => {
    const updated = { ...progress, fontSize: size };
    setProgress(updated);
    saveUserProgress(updated);
  };

  // Reset Progress
  const handleResetProgress = () => {
    const resetState: UserProgress = {
      completedTopics: [],
      quizScores: {},
      quizAttempts: {},
      earnedBadges: [],
      badgeUnlockDates: {},
      bookmarkedTopics: [],
      totalCorrectAnswers: 0,
      speechRate: 1.0,
      studyTheme: 'pastel-warm',
      fontSize: 'large',
      soundEffectsEnabled: true,
      streakCount: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
    };
    setProgress(resetState);
    saveUserProgress(resetState);
    setIsProgressModalOpen(false);
  };

  // Background style classes based on pastel study theme
  const getThemeBgClass = () => {
    switch (currentTheme) {
      case 'pastel-night':
      case 'dark-study':
        return 'bg-[#171B22] text-[#E5EAF2]';
      case 'pastel-sage':
      case 'calm-sage':
        return 'bg-[#EBF2EC] text-[#1C2922]';
      case 'pastel-lavender':
        return 'bg-[#EFEAF4] text-[#241E2F]';
      case 'pastel-peach':
        return 'bg-[#F7EEE4] text-[#2C211B]';
      case 'pastel-warm':
      case 'warm-paper':
      default:
        return 'bg-[#F4EFE6] text-[#252830]';
    }
  };

  return (
    <div 
      data-study-theme={currentTheme}
      data-font-size={currentFontSize}
      className={`min-h-screen ${getThemeBgClass()} flex flex-col antialiased overflow-x-clip transition-colors duration-200`}
    >
      
      {/* 1. Header with study mode toggle & navigation */}
      <Header
        currentLevel={currentLevel}
        onSelectLevel={handleSelectLevel}
        activeTopic={activeTopic}
        progress={progress}
        onOpenBadges={() => setIsBadgesModalOpen(true)}
        onOpenProgressModal={() => setIsProgressModalOpen(true)}
        onToggleSidebar={handleToggleSidebar}
        isSidebarOpen={isSidebarOpen}
        isSidebarCollapsed={isSidebarCollapsed}
        speechRate={progress.speechRate}
        onChangeSpeechRate={handleChangeSpeechRate}
        studyTheme={currentTheme}
        onChangeStudyTheme={handleChangeTheme}
        fontSize={currentFontSize}
        onChangeFontSize={handleChangeFontSize}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      {/* 2. Main Content Layout: Native Window Scroll for zero mobile wobble */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex items-start overflow-visible px-0 sm:px-4">
        
        {/* Desktop Sidebar Navigation: Sticky in view (>= 1024px) */}
        {!isSidebarCollapsed && (
          <div className="hidden lg:block w-72 lg:w-80 shrink-0 h-[calc(100vh-3.5rem)] sticky top-14 z-20 transition-all duration-200">
            <ChapterNav
              currentTopicId={currentTopicId}
              onSelectTopic={handleSelectTopic}
              currentLevel={currentLevel}
              onSelectLevel={handleSelectLevel}
              progress={progress}
              studyTheme={currentTheme}
              onToggleCollapse={() => setIsSidebarCollapsed(true)}
            />
          </div>
        )}

        {/* Desktop Expand Button (when sidebar is collapsed) */}
        {isSidebarCollapsed && (
          <div className="hidden lg:block sticky top-16 z-30 ml-2 mt-2 -mr-10">
            <button
              type="button"
              id="btn-desktop-expand-sidebar"
              onClick={() => setIsSidebarCollapsed(false)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
              title="Expand curriculum lessons menu"
              aria-label="Expand curriculum lessons menu"
            >
              <PanelLeftOpen size={16} />
              <span>Lessons</span>
            </button>
          </div>
        )}

        {/* Mobile & Tablet Navigation Drawer (< 1024px) */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 z-50 lg:hidden bg-black/50 backdrop-blur-xs flex animate-in fade-in duration-200"
            onClick={() => setIsSidebarOpen(false)}
          >
            <div 
              className={`w-[85vw] max-w-xs sm:max-w-sm h-full ${
                currentTheme === 'pastel-night' || currentTheme === 'dark-study'
                  ? 'bg-[#202630]'
                  : currentTheme === 'pastel-sage' || currentTheme === 'calm-sage'
                  ? 'bg-[#DEECE2]'
                  : currentTheme === 'pastel-lavender'
                  ? 'bg-[#E4DCED]'
                  : currentTheme === 'pastel-peach'
                  ? 'bg-[#EFE1D4]'
                  : 'bg-[#ECE5DA]'
              } shadow-2xl flex flex-col`}
              onClick={e => e.stopPropagation()}
            >
              <ChapterNav
                currentTopicId={currentTopicId}
                onSelectTopic={handleSelectTopic}
                currentLevel={currentLevel}
                onSelectLevel={handleSelectLevel}
                progress={progress}
                studyTheme={currentTheme}
                onCloseMobile={() => setIsSidebarOpen(false)}
              />
            </div>
          </div>
        )}

        {/* Mobile & Tablet Quick Access Lessons Floating Button */}
        {!isSidebarOpen && (
          <button
            type="button"
            id="btn-mobile-quick-lessons"
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden fixed bottom-5 left-4 z-30 flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-lg transition-all cursor-pointer active:scale-95"
            title="Open curriculum lessons menu"
            aria-label="Open lessons menu"
          >
            <BookOpen size={16} />
            <span>Lessons</span>
          </button>
        )}

        {/* Lesson View Area: Smooth, natural window scrolling */}
        <main className="flex-1 min-w-0 w-full max-w-full pb-32 sm:pb-24">
          <TopicView
            topic={activeTopic}
            progress={progress}
            onCompleteTopicQuiz={handleCompleteTopicQuiz}
            onNavigateTopic={handleSelectTopic}
            onToggleBookmark={handleToggleBookmark}
            speechRate={progress.speechRate}
            studyTheme={currentTheme}
          />
        </main>
      </div>

      {/* 3. Floating "Go to Top" Icon at bottom */}
      <ScrollToTop studyTheme={currentTheme} />

      {/* 4. Digital Badges Modal */}
      <BadgesModal
        isOpen={isBadgesModalOpen}
        onClose={() => setIsBadgesModalOpen(false)}
        progress={progress}
        speechRate={progress.speechRate}
        studyTheme={currentTheme}
      />

      {/* 5. Progress & Analytics Modal */}
      <ProgressModal
        isOpen={isProgressModalOpen}
        onClose={() => setIsProgressModalOpen(false)}
        progress={progress}
        onResetProgress={handleResetProgress}
        studyTheme={currentTheme}
      />

      {/* 6. Real-time Badge Unlock Notification Toast */}
      <BadgeUnlockToast
        badgeId={newlyAwardedBadgeId}
        onDismiss={() => setNewlyAwardedBadgeId(null)}
        onViewBadges={() => {
          setNewlyAwardedBadgeId(null);
          setIsBadgesModalOpen(true);
        }}
        studyTheme={currentTheme}
      />

    </div>
  );
}

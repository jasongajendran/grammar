import { UserProgress } from '../types';
import { BADGES } from '../data/badges';
import { ALL_TOPICS, LEVEL_METADATA } from '../data/curriculum';

const STORAGE_KEY = 'grammar_master_v1_progress';

const DEFAULT_PROGRESS: UserProgress = {
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
  selectedExplorerId: 'barnaby-cartographer',
  streakCount: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
};

export function loadUserProgress(): UserProgress {
  if (typeof window === 'undefined') return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const data = JSON.parse(raw);
    
    // Check streak
    const today = new Date().toISOString().split('T')[0];
    if (data.lastActiveDate !== today) {
      const lastDate = new Date(data.lastActiveDate);
      const currentDate = new Date(today);
      const diffDays = Math.round((currentDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
      
      if (diffDays === 1) {
        data.streakCount = (data.streakCount || 0) + 1;
      } else if (diffDays > 1) {
        data.streakCount = 1;
      }
      data.lastActiveDate = today;
      saveUserProgress(data);
    }

    return { ...DEFAULT_PROGRESS, ...data };
  } catch (e) {
    console.error('Failed to load grammar progress from localStorage', e);
    return DEFAULT_PROGRESS;
  }
}

export function saveUserProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save grammar progress', e);
  }
}

export function checkAndAwardBadges(
  progress: UserProgress,
  onBadgeAwarded?: (badgeId: string) => void
): { updatedProgress: UserProgress; newlyEarnedBadges: string[] } {
  const newBadges: string[] = [];
  const earned = new Set(progress.earnedBadges);
  const now = new Date().toISOString();
  const unlockDates = { ...progress.badgeUnlockDates };

  const award = (id: string) => {
    if (!earned.has(id)) {
      earned.add(id);
      newBadges.push(id);
      unlockDates[id] = now;
      if (onBadgeAwarded) onBadgeAwarded(id);
    }
  };

  // First step master
  if (progress.completedTopics.length >= 1) {
    award('badge-starter');
  }

  // Level 1 mastery
  const l1Topics = ALL_TOPICS.filter(t => t.level === 'level-1').map(t => t.id);
  if (l1Topics.every(id => progress.completedTopics.includes(id))) {
    award('badge-level-1');
  }

  // Level 2 mastery
  const l2Topics = ALL_TOPICS.filter(t => t.level === 'level-2').map(t => t.id);
  if (l2Topics.every(id => progress.completedTopics.includes(id))) {
    award('badge-level-2');
  }

  // Level 3 mastery
  const l3Topics = ALL_TOPICS.filter(t => t.level === 'level-3').map(t => t.id);
  if (l3Topics.every(id => progress.completedTopics.includes(id))) {
    award('badge-level-3');
  }

  // Level 4 mastery
  const l4Topics = ALL_TOPICS.filter(t => t.level === 'level-4').map(t => t.id);
  if (l4Topics.every(id => progress.completedTopics.includes(id))) {
    award('badge-level-4');
  }

  // Level 5 mastery
  const l5Topics = ALL_TOPICS.filter(t => t.level === 'level-5').map(t => t.id);
  if (l5Topics.every(id => progress.completedTopics.includes(id))) {
    award('badge-level-5');
  }

  // Perfect scores
  const perfectScoresCount = Object.values(progress.quizScores).filter(score => score >= 100).length;
  if (perfectScoresCount >= 3) {
    award('badge-perfect-score');
  }

  // 3-day streak
  if (progress.streakCount >= 3) {
    award('badge-streak-3');
  }

  // Apostrophe Authority
  if (progress.completedTopics.includes('l2-apostrophes-contractions-possession') && 
      (progress.quizScores['l2-apostrophes-contractions-possession'] || 0) >= 100) {
    award('badge-apostrophe-ace');
  }

  // Clause conqueror
  if (progress.completedTopics.includes('l3-subordinating-conjunctions') && 
      progress.completedTopics.includes('l3-relative-clauses')) {
    award('badge-clause-conqueror');
  }

  // Ultimate Master
  if (ALL_TOPICS.every(t => progress.completedTopics.includes(t.id))) {
    award('badge-ultimate-master');
  }

  const updatedProgress: UserProgress = {
    ...progress,
    earnedBadges: Array.from(earned),
    badgeUnlockDates: unlockDates,
  };

  if (newBadges.length > 0) {
    saveUserProgress(updatedProgress);
  }

  return { updatedProgress, newlyEarnedBadges: newBadges };
}

// Web Audio synthesizer for crisp, pleasant auditory feedback
export function playSound(type: 'correct' | 'incorrect' | 'complete' | 'badge' | 'click') {
  if (typeof window === 'undefined') return;
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    
    if (type === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } else if (type === 'correct') {
      const now = ctx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.12, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.25);
      });
    } else if (type === 'incorrect') {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(180, now + 0.2);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === 'badge' || type === 'complete') {
      const now = ctx.currentTime;
      [392.00, 523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0.15, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.35);
      });
    }
  } catch {
    // Ignore audio context autoplay errors
  }
}

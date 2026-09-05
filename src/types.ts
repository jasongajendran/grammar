export type DifficultyLevel = 'level-1' | 'level-2' | 'level-3' | 'level-4' | 'level-5';

export type Category = 
  | 'parts-of-speech' 
  | 'sentence-structure' 
  | 'punctuation-mechanics' 
  | 'advanced-syntax';

export interface ExampleSentence {
  id: string;
  sentence: string;
  highlightWords?: string[];
  explanation: string;
  contextNote?: string;
}

export interface TopicSection {
  id: string;
  title: string;
  content: string; // Markdown or structured text
  bulletPoints?: string[];
  examples: ExampleSentence[]; // Minimum 2 examples
  ruleSummary?: string;
}

export interface TipTrick {
  id: string;
  title: string;
  trick: string;
  mnemonic?: string;
  commonMistake: string;
  correctWay: string;
  explanation: string;
}

export type ExerciseType = 
  | 'multiple-choice' 
  | 'word-clicker' 
  | 'sentence-builder' 
  | 'error-detective' 
  | 'clause-matcher';

export interface BaseExercise {
  id: string;
  type: ExerciseType;
  difficultyStep: 1 | 2 | 3 | 4;
  prompt: string;
  instruction: string;
  hint?: string;
  explanation: string;
}

export interface MultipleChoiceExercise extends BaseExercise {
  type: 'multiple-choice';
  options: string[];
  correctIndex: number;
}

export interface WordClickerExercise extends BaseExercise {
  type: 'word-clicker';
  sentence: string;
  words: string[];
  targetIndices: number[]; // Indices of the words to identify
  targetCategoryLabel: string; // e.g. "proper noun", "modal verb", "fronted adverbial"
}

export interface SentenceBuilderExercise extends BaseExercise {
  type: 'sentence-builder';
  scrambledWords: string[];
  correctSentence: string;
}

export interface ErrorDetectiveExercise extends BaseExercise {
  type: 'error-detective';
  sentenceWithMistake: string;
  words: string[];
  errorWordIndex: number;
  correctedWord: string;
  ruleViolated: string;
}

export interface ClauseMatcherExercise extends BaseExercise {
  type: 'clause-matcher';
  sentence: string;
  mainClause: string;
  subordinateClause: string;
  conjunctionOrConnective: string;
}

export type InteractiveExercise = 
  | MultipleChoiceExercise 
  | WordClickerExercise 
  | SentenceBuilderExercise 
  | ErrorDetectiveExercise 
  | ClauseMatcherExercise;

export interface GrammarTopic {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  level: DifficultyLevel;
  levelLabel: string;
  levelStage: string; // e.g. "Key Stage 1", "Key Stage 2 (Lower)", "GCSE"
  ageGroup: string; // e.g. "Ages 5-7", "Ages 14-16"
  category: Category;
  categoryLabel: string;
  iconName: string;
  overview: string;
  whyItMatters: string;
  sections: TopicSection[];
  tipsAndTricks: TipTrick[];
  exercises: InteractiveExercise[];
  estimatedMinutes: number;
  prerequisites?: string[];
  nextTopicId?: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  level: DifficultyLevel | 'all';
  category: string;
  unlockedCriteria: string;
}

export interface ExplorerCompanion {
  id: string;
  name: string;
  title: string;
  badge: string;
  avatar: string;
  color: string;
  gradient: string;
  bgLight: string;
  bgDark: string;
  borderLight: string;
  borderDark: string;
  favoriteLandmark: string;
  specialty: string;
  quotes: string[];
}

export type StudyTheme = 
  | 'pastel-warm' 
  | 'pastel-sage' 
  | 'pastel-lavender' 
  | 'pastel-peach' 
  | 'pastel-night'
  | 'warm-paper' 
  | 'calm-sage' 
  | 'dark-study';

export type FontSizePreference = 'normal' | 'large' | 'xlarge';

export interface UserProgress {
  completedTopics: string[]; // topic IDs
  quizScores: Record<string, number>; // topicId -> highest score percentage
  quizAttempts: Record<string, number>; // topicId -> number of attempts
  earnedBadges: string[]; // badge IDs
  badgeUnlockDates: Record<string, string>; // badgeId -> ISO string
  bookmarkedTopics: string[];
  totalCorrectAnswers: number;
  speechRate: number; // 0.8, 1.0, 1.2
  studyTheme?: StudyTheme; // Eye comfort pastel theme
  fontSize?: FontSizePreference; // Font size scale
  soundEffectsEnabled: boolean;
  lastStudiedTopicId?: string;
  streakCount: number;
  lastActiveDate: string; // YYYY-MM-DD
}

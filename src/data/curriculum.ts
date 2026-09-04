import { DifficultyLevel, GrammarTopic } from '../types';
import { LEVEL_1_TOPICS } from './level1';
import { LEVEL_2_TOPICS } from './level2';
import { LEVEL_3_TOPICS } from './level3';
import { LEVEL_4_TOPICS } from './level4';
import { LEVEL_5_TOPICS } from './level5';

export const ALL_TOPICS: GrammarTopic[] = [
  ...LEVEL_1_TOPICS,
  ...LEVEL_2_TOPICS,
  ...LEVEL_3_TOPICS,
  ...LEVEL_4_TOPICS,
  ...LEVEL_5_TOPICS,
];

export interface LevelMetadata {
  level: DifficultyLevel;
  number: number;
  label: string;
  stageName: string;
  targetAge: string;
  description: string;
  badgeTitle: string;
  accentColor: string; // Tailwind class
  bgColor: string;
  borderColor: string;
  textColor: string;
  topicsCount: number;
}

export const LEVEL_METADATA: Record<DifficultyLevel, LevelMetadata> = {
  'level-1': {
    level: 'level-1',
    number: 1,
    label: 'Level 1: Starter',
    stageName: 'Key Stage 1 (Primary)',
    targetAge: 'Ages 5–7',
    description: 'Foundational parts of speech, punctuation basics, and simple sentences.',
    badgeTitle: 'KS1 Foundation Hero',
    accentColor: 'emerald',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-700',
    topicsCount: LEVEL_1_TOPICS.length,
  },
  'level-2': {
    level: 'level-2',
    number: 2,
    label: 'Level 2: Foundation',
    stageName: 'Lower Key Stage 2 (Primary)',
    targetAge: 'Ages 7–9',
    description: 'Pronouns, adverbs, prepositions, FANBOYS conjunctions, and compound sentences.',
    badgeTitle: 'Lower KS2 Explorer',
    accentColor: 'blue',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
    topicsCount: LEVEL_2_TOPICS.length,
  },
  'level-3': {
    level: 'level-3',
    number: 3,
    label: 'Level 3: Intermediate',
    stageName: 'Upper Key Stage 2 (Primary / SATs)',
    targetAge: 'Ages 9–11',
    description: 'Fronted adverbials, modal verbs, complex sentences, relative clauses, and speech marks.',
    badgeTitle: 'Upper KS2 Champion',
    accentColor: 'indigo',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    textColor: 'text-indigo-700',
    topicsCount: LEVEL_3_TOPICS.length,
  },
  'level-4': {
    level: 'level-4',
    number: 4,
    label: 'Level 4: Advanced',
    stageName: 'Key Stage 3 (Secondary)',
    targetAge: 'Ages 11–14',
    description: 'Active vs passive voice, semicolons and colons, subjunctive mood, and complex agreement.',
    badgeTitle: 'KS3 Syntax Commander',
    accentColor: 'amber',
    bgColor: 'bg-amber-100',
    borderColor: 'border-amber-300',
    textColor: 'text-slate-950 font-bold',
    topicsCount: LEVEL_4_TOPICS.length,
  },
  'level-5': {
    level: 'level-5',
    number: 5,
    label: 'Level 5: Master',
    stageName: 'GCSE / Key Stage 4 (Secondary)',
    targetAge: 'Ages 14–16',
    description: 'Nominalisation, dangling modifier prevention, conditionals, and balanced rhetoric.',
    badgeTitle: 'GCSE Grammar Grandmaster',
    accentColor: 'rose',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    textColor: 'text-rose-700',
    topicsCount: LEVEL_5_TOPICS.length,
  }
};

export function getTopicsByLevel(level: DifficultyLevel): GrammarTopic[] {
  return ALL_TOPICS.filter(t => t.level === level);
}

export function getTopicById(id: string): GrammarTopic | undefined {
  return ALL_TOPICS.find(t => t.id === id);
}

export function getNextTopic(currentId: string): GrammarTopic | undefined {
  const index = ALL_TOPICS.findIndex(t => t.id === currentId);
  if (index !== -1 && index < ALL_TOPICS.length - 1) {
    return ALL_TOPICS[index + 1];
  }
  return undefined;
}

export function getPrevTopic(currentId: string): GrammarTopic | undefined {
  const index = ALL_TOPICS.findIndex(t => t.id === currentId);
  if (index > 0) {
    return ALL_TOPICS[index - 1];
  }
  return undefined;
}

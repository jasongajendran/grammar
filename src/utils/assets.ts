import mascotImg from '../assets/images/highland_grammar_mascot_1788595738755.jpg';
import castleImg from '../assets/images/castle_aurora_magic_1788595751822.jpg';
import scholarImg from '../assets/images/scholar_study_library_1788595764945.jpg';
import trophyImg from '../assets/images/grammar_trophy_1788595779530.jpg';
import { DifficultyLevel } from '../types';

export const APP_IMAGES = {
  mascot: mascotImg,
  castleAurora: castleImg,
  scholarLibrary: scholarImg,
  trophy: trophyImg,
};

/**
 * Returns the most fitting thematic hero artwork for each difficulty level
 */
export function getThematicImageForLevel(level: DifficultyLevel): {
  src: string;
  alt: string;
  tagline: string;
} {
  switch (level) {
    case 'level-1':
      return {
        src: mascotImg,
        alt: 'Friendly mascot reading an illuminated grammar book',
        tagline: 'Embark on your journey into nouns, verbs, and punctuation across the UK!',
      };
    case 'level-2':
      return {
        src: castleImg,
        alt: 'Historic British castle illuminated by starry skies with glowing scrolls',
        tagline: 'Discover pronouns, adverbs, and compound sentences across the British Isles.',
      };
    case 'level-3':
      return {
        src: castleImg,
        alt: 'Medieval castle courtyard with speech bubbles and clause bridges',
        tagline: 'Master complex sentences, dialogue punctuation, and fronted adverbials.',
      };
    case 'level-4':
      return {
        src: scholarImg,
        alt: 'Scholar library with bookshelves and manuscripts',
        tagline: 'Master advanced syntax, active and passive voice, and semicolons.',
      };
    case 'level-5':
      return {
        src: scholarImg,
        alt: 'Scholarly desk with quill, leather-bound volumes, and historic skyline at twilight',
        tagline: 'Refine academic register, rhetorical parallelism, and GCSE Grade 9 grammar mastery.',
      };
    default:
      return {
        src: mascotImg,
        alt: 'Grammar study companion',
        tagline: 'Explore the foundations of British English with rich UK-wide examples.',
      };
  }
}

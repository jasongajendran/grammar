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
        alt: 'Hamish the Highland Coo reading an illuminated grammar book in the Scottish hills',
        tagline: 'Join Hamish the Highland Coo on your first grammar adventure!',
      };
    case 'level-2':
      return {
        src: castleImg,
        alt: 'Ancient Scottish castle illuminated by aurora borealis with glowing scrolls',
        tagline: 'Discover clauses and punctuation beneath the Highland northern lights.',
      };
    case 'level-3':
      return {
        src: castleImg,
        alt: 'Highland fortress with magical glowing speech bubbles and connectors',
        tagline: 'Navigate complex sentences, dialogues, and I SAW A WABUB connectors.',
      };
    case 'level-4':
      return {
        src: scholarImg,
        alt: 'Cozy Scottish scholar library overlooking Edinburgh Castle with ancient manuscripts',
        tagline: 'Master advanced syntax, active/passive voice, and semicolons in the scholar study.',
      };
    case 'level-5':
      return {
        src: scholarImg,
        alt: 'Scholarly desk with quill, leather-bound volumes, and Edinburgh skyline at twilight',
        tagline: 'Refine academic register, rhetorical parallelism, and GCSE Grade 9 mastery.',
      };
    default:
      return {
        src: mascotImg,
        alt: 'Scottish grammar mascot',
        tagline: 'Explore the grammar of British English with Scottish cultural flair.',
      };
  }
}

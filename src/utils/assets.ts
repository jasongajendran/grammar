import mascotImg from '../assets/images/highland_grammar_mascot_1788595738755.jpg';
import castleImg from '../assets/images/castle_aurora_magic_1788595751822.jpg';
import scholarImg from '../assets/images/scholar_study_library_1788595764945.jpg';
import trophyImg from '../assets/images/grammar_trophy_1788595779530.jpg';
import explorerGuideImg from '../assets/images/explorer_adventure_guide_1788609344173.jpg';
import explorerLandscapeImg from '../assets/images/explorer_journey_landscape_1788609360212.jpg';
import explorerCompassMapImg from '../assets/images/explorer_compass_map_1788609373758.jpg';
import { DifficultyLevel, ExplorerCompanion } from '../types';

export const APP_IMAGES = {
  mascot: mascotImg,
  castleAurora: castleImg,
  scholarLibrary: scholarImg,
  trophy: trophyImg,
  explorerGuide: explorerGuideImg,
  explorerLandscape: explorerLandscapeImg,
  explorerCompassMap: explorerCompassMapImg,
};

export const EXPLORER_COMPANIONS: ExplorerCompanion[] = [
  {
    id: 'barnaby-cartographer',
    name: 'Captain Barnaby',
    title: 'The Sentence Cartographer',
    badge: 'Compass & Map',
    avatar: explorerGuideImg,
    color: 'amber',
    gradient: 'from-amber-500 to-orange-500',
    bgLight: 'bg-amber-500/10',
    bgDark: 'bg-amber-950/30',
    borderLight: 'border-amber-300',
    borderDark: 'border-amber-700/50',
    favoriteLandmark: 'Greenwich Prime Meridian & Tower Bridge',
    specialty: 'Clauses, Prepositions & Sentence Navigation',
    quotes: [
      "Every sentence is an uncharted expedition! The subject is your compass, and the verb is your ship's engine.",
      "Mind your prepositions: whether we journey 'over the hill' or 'through the mist', direction matters!",
      "A well-placed comma is like dropping anchor in a peaceful cove before continuing your voyage.",
      "Steady as she goes! Even the most complex relative clause has a safe harbor to dock in."
    ]
  },
  {
    id: 'clementine-botanist',
    name: 'Lady Clementine',
    title: 'The Botanical Word-Collector',
    badge: 'Flora & Magnifier',
    avatar: mascotImg,
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-500',
    bgLight: 'bg-emerald-500/10',
    bgDark: 'bg-emerald-950/30',
    borderLight: 'border-emerald-300',
    borderDark: 'border-emerald-700/50',
    favoriteLandmark: 'Kew Royal Botanic Gardens & Eden Project',
    specialty: 'Vivid Adjectives, Sensory Verbs & Descriptive Nouns',
    quotes: [
      "Notice how descriptive adjectives paint colors upon the page, just like rare orchids in Victorian glasshouses!",
      "Collect words like botanical specimens! Choose 'magnificent' over 'nice' and 'strolled' over 'walked'.",
      "Fronted adverbials set the scenic atmospheric stage: 'Silently through the misty arboretum, the fox trotted.'",
      "Punctuation marks are like garden trellises: they give your flourishing thoughts sturdy structure to climb!"
    ]
  },
  {
    id: 'arthur-chronicler',
    name: 'Arthur the Chronicler',
    title: 'The Heritage Time-Voyager',
    badge: 'Ancient Scroll & Quill',
    avatar: scholarImg,
    color: 'purple',
    gradient: 'from-purple-500 to-indigo-600',
    bgLight: 'bg-purple-500/10',
    bgDark: 'bg-purple-950/30',
    borderLight: 'border-purple-300',
    borderDark: 'border-purple-700/50',
    favoriteLandmark: "Shakespeare's Globe & Stonehenge",
    specialty: 'Historic Voices, Subjunctive Mood & Rhetoric',
    quotes: [
      "Hark! In passive voice, the deed itself steps into the candlelight: 'The ancient charter was signed at Runnymede.'",
      "The semicolon is the scholar's gem; it balances two proud thoughts in perfect grammatical equilibrium.",
      "The subjunctive mood opens portals to hypothetical realms: 'If King Harold were here today, he would marvel.'",
      "Parallel structure gives your sentences the resounding rhythm of Roman arches and great British rhetoric."
    ]
  },
  {
    id: 'pip-aeronaut',
    name: 'Pip the Aeronaut',
    title: 'The Skyward Clockwork Navigator',
    badge: 'Airship & Goggles',
    avatar: trophyImg,
    color: 'sky',
    gradient: 'from-sky-500 to-blue-600',
    bgLight: 'bg-sky-500/10',
    bgDark: 'bg-sky-950/30',
    borderLight: 'border-sky-300',
    borderDark: 'border-sky-700/50',
    favoriteLandmark: 'Elizabeth Tower (Big Ben) & Clifton Suspension Bridge',
    specialty: 'Modal Auxiliary Verbs & Conditional Air-Routes',
    quotes: [
      "Modal verbs gauge certainty like an altimeter: 'We might drift' versus 'We shall triumph'!",
      "Zero conditionals are laws of gravity: when the boiler heats, steam rises! Simple and immutable.",
      "Navigate past dangling modifiers! Make sure the subject flying the airship is the one doing the gazing.",
      "Full steam ahead! You have unlocked another altitude of grammatical elevation!"
    ]
  }
];

export function getExplorer(id?: string): ExplorerCompanion {
  const found = EXPLORER_COMPANIONS.find(e => e.id === id);
  return found || EXPLORER_COMPANIONS[0];
}

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
        src: explorerLandscapeImg,
        alt: 'Iconic British expedition adventure scene with Big Ben, airship, and river',
        tagline: 'Embark with the explorers into nouns, verbs, and punctuation across the UK!',
      };
    case 'level-2':
      return {
        src: castleImg,
        alt: 'Historic British castle illuminated by starry skies with glowing scrolls',
        tagline: 'Discover pronouns, adverbs, and compound sentences across the British Isles.',
      };
    case 'level-3':
      return {
        src: explorerCompassMapImg,
        alt: 'Explorer compass resting on an antique parchment map with glowing badges',
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
        src: explorerLandscapeImg,
        alt: 'Historic British expedition landscape with airships, bridges, and twilight towers',
        tagline: 'Refine academic register, rhetorical parallelism, and GCSE Grade 9 grammar mastery.',
      };
    default:
      return {
        src: explorerGuideImg,
        alt: 'Grammar study explorer guide with magnifying glass and parchment map',
        tagline: 'Explore the foundations of British English with rich UK-wide examples.',
      };
  }
}

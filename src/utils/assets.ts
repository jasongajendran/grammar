import mascotImg from '../assets/images/highland_grammar_mascot_1788595738755.jpg';
import castleImg from '../assets/images/castle_aurora_magic_1788595751822.jpg';
import scholarImg from '../assets/images/scholar_study_library_1788595764945.jpg';
import trophyImg from '../assets/images/grammar_trophy_1788595779530.jpg';
import explorerGuideImg from '../assets/images/explorer_adventure_guide_1788609344173.jpg';
import explorerLandscapeImg from '../assets/images/explorer_journey_landscape_1788609360212.jpg';
import explorerCompassMapImg from '../assets/images/explorer_compass_map_1788609373758.jpg';
import visualStudyPrepImg from '../assets/images/grammar_visual_study_prep_1788726135454.jpg';
import partsOfSpeechChestImg from '../assets/images/parts_of_speech_chest_1788726150647.jpg';
import syntaxBridgeImg from '../assets/images/syntax_bridge_clauses_1788726165132.jpg';
import { DifficultyLevel, ExplorerCompanion } from '../types';

export const APP_IMAGES = {
  mascot: mascotImg,
  castleAurora: castleImg,
  scholarLibrary: scholarImg,
  trophy: trophyImg,
  explorerGuide: explorerGuideImg,
  explorerLandscape: explorerLandscapeImg,
  explorerCompassMap: explorerCompassMapImg,
  visualStudyPrep: visualStudyPrepImg,
  partsOfSpeechChest: partsOfSpeechChestImg,
  syntaxBridge: syntaxBridgeImg,
};

export interface VisualStudyCard {
  topicId: string;
  image: string;
  imageAlt: string;
  badge: string;
  title: string;
  mnemonic: string;
  visualAnchor: string;
  keyRule: string;
  illustratedClue: string;
  companionTip: string;
}

export const VISUAL_STUDY_PREP: Record<string, VisualStudyCard> = {
  'l1-nouns': {
    topicId: 'l1-nouns',
    image: partsOfSpeechChestImg,
    imageAlt: 'Visual study chart of Nouns in British English showing London landmarks and everyday items',
    badge: 'Visual Memory Anchor',
    title: 'The Noun Picture Anchor',
    mnemonic: 'Person, Place, Thing, Idea',
    visualAnchor: '🏷️ Capital Letter Tag = Proper Noun (Big Ben); 📦 Common Box = Common Noun (bus, castle).',
    keyRule: 'Proper nouns are unique names and ALWAYS wear a capital letter anywhere in a sentence.',
    illustratedClue: 'Look for capital letters on British landmarks and map locations.',
    companionTip: 'Lady Clementine says: "Pinpoint whether the item is one-of-a-kind (Proper) or one of many (Common)!"',
  },
  'l1-verbs': {
    topicId: 'l1-verbs',
    image: partsOfSpeechChestImg,
    imageAlt: 'Visual study chart of Action Verbs and State Verbs with running deer and solid mountains',
    badge: 'Visual Memory Anchor',
    title: 'The Verb Engine & Anchor',
    mnemonic: 'Doing, Being, or Feeling',
    visualAnchor: '⚡ Sparking Engine = Action Verb (dashed, sailed); ⚓ Solid Anchor = State/Linking Verb (is, remains).',
    keyRule: 'Every complete English sentence MUST contain at least one finite verb acting as the heartbeat.',
    illustratedClue: 'Ask: "What is the subject doing, or what state are they in?"',
    companionTip: 'Captain Barnaby notes: "A sentence without a verb is like an explorer ship stranded without sails!"',
  },
  'l1-adjectives': {
    topicId: 'l1-adjectives',
    image: partsOfSpeechChestImg,
    imageAlt: 'Visual palette of adjectives painting vivid colors on nouns in the British Isles',
    badge: 'Visual Memory Anchor',
    title: 'The Adjective Color Palette',
    mnemonic: 'What kind? Which one? How many?',
    visualAnchor: '🎨 Color Palette = Adjective sitting in front of a Noun (the misty loch, the golden crown).',
    keyRule: 'Adjectives modify nouns to specify color, size, origin, material, or sensory texture.',
    illustratedClue: 'Take away the adjective—does the sentence still make sense, but lose its vivid picture?',
    companionTip: 'Lady Clementine says: "Choose crisp sensory adjectives like *emerald* and *thundering* over bland words!"',
  },
  'l1-capital-letters-full-stops': {
    topicId: 'l1-capital-letters-full-stops',
    image: visualStudyPrepImg,
    imageAlt: 'Visual study guide showing Capital Letter entrance gates and Full Stop traffic signals',
    badge: 'Visual Memory Anchor',
    title: 'The Sentence Border Guards',
    mnemonic: 'Capital at the start, Full stop at the end',
    visualAnchor: '🚦 Green Entrance Gate = Capital Letter; 🛑 Red Brake Beacon = Full Stop (.) / Question (?) / Exclamation (!).',
    keyRule: 'Never let a sentence wander without an uppercase starter and a definitive closing punctuation mark.',
    illustratedClue: 'Check the first letter of the first word, and check the very last symbol.',
    companionTip: 'Pip the Aeronaut advises: "Check your flight borders: start tall with a capital, land clean with a full stop!"',
  },
  'l1-simple-sentences': {
    topicId: 'l1-simple-sentences',
    image: visualStudyPrepImg,
    imageAlt: 'Visual study diagram of a simple sentence with Subject train engine and Predicate carriage',
    badge: 'Visual Memory Anchor',
    title: 'The Single-Thought Express',
    mnemonic: 'Subject (Who) + Predicate (Does what)',
    visualAnchor: '🚂 Train Locomotive = Subject (The red squirrel) + 🚃 Freight Carriage = Verb & Object (found an acorn).',
    keyRule: 'A simple sentence contains exactly ONE independent clause expressing a complete thought.',
    illustratedClue: 'Count the clauses: one subject doing one main action = simple sentence.',
    companionTip: 'Captain Barnaby says: "One locomotive, one cargo! Keep the thought intact and self-sufficient."',
  },
  'l3-fronted-adverbials': {
    topicId: 'l3-fronted-adverbials',
    image: syntaxBridgeImg,
    imageAlt: 'Visual study diagram showing a Fronted Adverbial setting the stage with a comma hook',
    badge: 'Visual Memory Anchor',
    title: 'The Stage-Setting Spotlight',
    mnemonic: 'Time, Place, Frequency, Manner + COMMA',
    visualAnchor: '🎭 Stage Spotlight = Fronted Adverbial phrase; 🪝 Golden Hook = Comma (,) separating it from the main clause.',
    keyRule: 'When an adverbial starts a sentence, it MUST be followed by a comma before the main clause begins.',
    illustratedClue: 'Look for: "Before dawn,", "In the misty Scottish glen,", "Silently,".',
    companionTip: 'Arthur the Chronicler notes: "Fronted adverbials frame the historical scene before the action unfolds!"',
  },
  'l3-subordinating-conjunctions': {
    topicId: 'l3-subordinating-conjunctions',
    image: syntaxBridgeImg,
    imageAlt: 'Visual study bridge showing I SAW A WABUB linking dependent clauses to main stone pillars',
    badge: 'Visual Memory Anchor',
    title: 'The I SAW A WABUB Bridge',
    mnemonic: 'If, Since, As, When, Although, While, After, Before, Until, Because',
    visualAnchor: '🌉 Iron Suspension Cables = Subordinating Conjunctions connecting a subordinate clause to the main stone pillar.',
    keyRule: 'If the subordinate clause comes FIRST, place a comma after it. If it comes second, no comma is needed.',
    illustratedClue: 'Subordinate clauses cannot stand alone as sentences; they depend on the main clause bridge.',
    companionTip: 'Captain Barnaby says: "Memorise I SAW A WABUB like points on a nautical compass!"',
  },
  'l4-active-passive-voice': {
    topicId: 'l4-active-passive-voice',
    image: syntaxBridgeImg,
    imageAlt: 'Visual study guide of Active and Passive Voice spotlight shifting in British architecture',
    badge: 'Visual Memory Anchor',
    title: 'The Spotlight Reverser',
    mnemonic: 'Active = Doer Acts; Passive = Receiver in Spotlight',
    visualAnchor: '🔦 Spotlight on Architect = Active ("Wren designed the cathedral"); 🔦 Spotlight on Cathedral = Passive ("The cathedral was designed by Wren").',
    keyRule: 'Passive voice uses [Form of BE] + [Past Participle] + optional [by agent].',
    illustratedClue: 'If the grammatical subject is receiving the action rather than performing it, the voice is passive.',
    companionTip: 'Arthur the Chronicler says: "Use passive voice in formal histories and reports when the outcome matters most!"',
  },
  'l4-semicolons-colons': {
    topicId: 'l4-semicolons-colons',
    image: visualStudyPrepImg,
    imageAlt: 'Visual study diagram of Semicolon balancing scales and Colon stage curtains opening',
    badge: 'Visual Memory Anchor',
    title: 'The Semicolon Balance & Colon Curtain',
    mnemonic: 'Semicolon = Balance (=); Colon = Here it comes (👉)',
    visualAnchor: '⚖️ Balanced Scales = Semicolon (;) linking 2 complete sentences; 🎪 Opening Velvet Curtains = Colon (:) introducing list or revelation.',
    keyRule: 'Both sides of a semicolon MUST be able to stand alone as independent complete sentences.',
    illustratedClue: 'Test with a full stop: if you can replace the semicolon with a period, your semicolon is used correctly.',
    companionTip: 'Arthur the Chronicler notes: "The semicolon creates a dignified pause without the abrupt halt of a full stop."',
  },
  'l5-conditionals': {
    topicId: 'l5-conditionals',
    image: explorerLandscapeImg,
    imageAlt: 'Visual study chart of 4 conditional altitudes from scientific facts to past regrets',
    badge: 'Visual Memory Anchor',
    title: 'The 4 Conditional Altitudes',
    mnemonic: 'Zero (Fact) → First (Likely) → Second (Dream) → Third (Past Regret)',
    visualAnchor: '🏔️ Ground Level = Zero (If ice heats, it melts); 🛩️ Low Flight = First (If it rains, we will shelter); 🎈 High Airship = Second (If I had wings, I would fly); 🚀 Starry Orbit = Third (If we had checked the map, we would not have strayed).',
    keyRule: 'Third conditional (Past Unreal) uses: If + Past Perfect (had done), would have + Past Participle.',
    illustratedClue: 'Check the tense in the IF-clause to determine the correct modal form in the main clause.',
    companionTip: 'Pip the Aeronaut advises: "Match your conditional altitude: never mix past hypothetical tenses with present facts!"',
  }
};

/**
 * Returns the default visual study card for any topic
 */
export function getVisualStudyCard(topicId: string, level?: DifficultyLevel | string): VisualStudyCard {
  if (VISUAL_STUDY_PREP[topicId]) {
    return VISUAL_STUDY_PREP[topicId];
  }

  // Fallback visual study card with relevant artwork
  const validLevel = (level && ['level-1', 'level-2', 'level-3', 'level-4', 'level-5'].includes(level))
    ? (level as DifficultyLevel)
    : 'level-1';
  const thematic = getThematicImageForLevel(validLevel);
  return {
    topicId,
    image: thematic.src,
    imageAlt: thematic.alt,
    badge: 'Visual Memory Anchor',
    title: 'British Grammar Visual Study Guide',
    mnemonic: 'Observe • Diagram • Apply',
    visualAnchor: '🗺️ Map the sentence structure: identify the core subject, action, and modifiers.',
    keyRule: 'Read sentences aloud to test natural British cadence, clause balance, and clear punctuation.',
    illustratedClue: 'Look for the relationship between the main clause and its surrounding descriptive elements.',
    companionTip: 'Captain Barnaby says: "Use visual landmarks and clause diagrams to cement your grammar intuition!"',
  };
}

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

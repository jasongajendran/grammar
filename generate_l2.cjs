const fs = require('fs');

const fileHeader = `import { GrammarTopic } from '../types';

export const LEVEL_2_TOPICS: GrammarTopic[] = [
`;

// Helper to construct topics
const topics = [
  // 1. Pronouns
  {
    id: 'l2-pronouns',
    slug: 'pronouns-personal-possessive',
    title: 'Pronouns: Personal & Possessive',
    subtitle: 'Replacing repetitive nouns with agile words like I, she, they, mine, and ours.',
    level: 'level-2',
    levelLabel: 'Level 2: Foundation',
    levelStage: 'Lower Key Stage 2',
    ageGroup: 'Ages 7–9',
    category: 'word-classes',
    categoryLabel: 'Word Classes',
    iconName: 'UserCheck',
    estimatedMinutes: 6,
    overview: 'A **pronoun** is a word used in place of a noun or noun phrase. Without pronouns, our speech and writing would sound clunky and unnaturally repetitive (for example: *"Isla took Isla\'s backpack because Isla was going to Isla\'s school"*).',
    whyItMatters: 'Using pronouns correctly makes your prose flow naturally and helps maintain clear subject and object relationships in sentences.',
    sections: [
      {
        id: 'sec-personal-pronouns',
        title: '1. Personal Pronouns (Subject & Object)',
        content: 'Personal pronouns refer to specific people, animals, or things:',
        bulletPoints: [
          '**Subject Pronouns (Doers):** I, you, he, she, it, we, they (for example: ***She*** *explored the grounds of Edinburgh Castle*).',
          '**Object Pronouns (Receivers):** me, you, him, her, it, us, them (for example: *The park ranger guided **us** through the woods*).'
        ],
        examples: [
          {
            id: 'ex-l2-pr1',
            sentence: '**They** boarded the ferry to Belfast, and the captain greeted **them** warmly.',
            highlightWords: ['They', 'them'],
            explanation: '**They** is a subject pronoun (doing the boarding); **them** is an object pronoun (receiving the greeting).',
            contextNote: 'UK ferry voyage'
          },
          {
            id: 'ex-l2-pr2',
            sentence: 'Callum showed **me** his map of Snowdonia.',
            highlightWords: ['me'],
            explanation: '**me** is the object pronoun receiving the action of showing.',
            contextNote: 'Map reading in Wales'
          },
          {
            id: 'ex-l2-pr3',
            sentence: '**We** spotted a herd of red deer near Loch Lomond.',
            highlightWords: ['We'],
            explanation: '**We** is the plural subject pronoun doing the spotting.',
            contextNote: 'Scottish wildlife trip'
          }
        ],
        ruleSummary: 'Subject pronouns do the action; object pronouns receive the action.'
      },
      {
        id: 'sec-possessive-pronouns',
        title: '2. Possessive Pronouns (Ownership Without Nouns)',
        content: 'Possessive pronouns show ownership without needing to repeat the noun:',
        bulletPoints: [
          '**Possessive Pronouns:** mine, yours, his, hers, its, ours, theirs.',
          '**Example:** *That compass belongs to Isla. -> That compass is **hers**.*',
          '**Key Rule:** Possessive pronouns NEVER take an apostrophe (*ours*, *theirs*, *its*).'
        ],
        examples: [
          {
            id: 'ex-l2-pr4',
            sentence: 'The blue raincoat is **mine**, but the waterproof boots are **yours**.',
            highlightWords: ['mine', 'yours'],
            explanation: '**mine** and **yours** show possession without repeating raincoat or boots.',
            contextNote: 'Hiking equipment'
          },
          {
            id: 'ex-l2-pr5',
            sentence: 'Isla left her notebook at home, so Arthur lent her **his**.',
            highlightWords: ['his'],
            explanation: '**his** replaces "his notebook".',
            contextNote: 'Classroom sharing'
          },
          {
            id: 'ex-l2-pr6',
            sentence: 'That trophy belongs to the York football team; the victory is **theirs**.',
            highlightWords: ['theirs'],
            explanation: '**theirs** shows ownership by the team (no apostrophe!).',
            contextNote: 'School sports day'
          }
        ],
        ruleSummary: 'Possessive pronouns replace "possessive adjective + noun" and never take apostrophes.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l2-pr1',
        title: 'The "Cover-Up" Polite Order Rule',
        trick: 'When talking about yourself and another person, always put the other person FIRST: *"Callum and I"* (Subject) or *"Callum and me"* (Object). Cover up "Callum and" to test: *"I went to the library"* (Correct!), NOT *"Me went to the library"*.',
        mnemonic: 'Put others first, then test with "I" or "me" alone!',
        commonMistake: 'Saying *"Me and Isla went to London"*.',
        correctWay: 'Say *"Isla and **I** went to London"* (Because "I went", not "Me went").',
        explanation: 'Testing the pronoun without the extra person reveals whether you need subject "I" or object "me".'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l2-pr',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which pronoun correctly completes this sentence: "____ visited the Roman Baths in Bath last weekend."',
        instruction: 'Choose the subject pronoun that fits.',
        options: ['Us', 'We', 'Them', 'Him'],
        correctIndex: 1,
        explanation: '**We** is a subject pronoun doing the action of visiting.'
      },
      {
        id: 'ex-q2-l2-pr',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Click all the pronouns in this sentence.',
        instruction: 'Identify the words replacing nouns.',
        sentence: 'She gave him a golden ticket to the London Eye.',
        words: ['She', 'gave', 'him', 'a', 'golden', 'ticket', 'to', 'the', 'London', 'Eye.'],
        targetIndices: [0, 2],
        targetCategoryLabel: 'pronoun',
        explanation: '**She** (subject pronoun) and **him** (object pronoun) are pronouns.'
      },
      {
        id: 'gen-pro-1',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which sentence uses possessive pronouns correctly?',
        instruction: 'Select the sentence with correct possessive pronoun usage.',
        options: [
          'The picnic basket is our\'s.',
          'The picnic basket is ours.',
          'The picnic basket is oures.',
          'The picnic basket is our\'s.'
        ],
        correctIndex: 1,
        explanation: 'Possessive pronouns like "ours", "yours", and "theirs" never use apostrophes.'
      },
      {
        id: 'gen2-pro-1',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Choose the correct pronoun: "Isla and ____ walked along the Severn Estuary."',
        instruction: 'Select the subject pronoun.',
        options: ['me', 'I', 'us', 'myself'],
        correctIndex: 1,
        explanation: '"I" is the correct subject pronoun. Test by removing "Isla and": "I walked along the Severn Estuary."'
      },
      {
        id: 'ex-l2-pr-5',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find the pronoun error in this sentence.',
        instruction: 'Click on the incorrect pronoun.',
        sentenceWithMistake: 'Me and Arthur saw a red squirrel in the woods.',
        words: ['Me', 'and', 'Arthur', 'saw', 'a', 'red', 'squirrel', 'in', 'the', 'woods.'],
        errorWordIndex: 0,
        correctedWord: 'I',
        ruleViolated: 'Subject pronoun rule',
        explanation: 'Use subject pronoun "I" instead of object pronoun "Me" as the subject of the verb "saw" ("Arthur and I saw...").'
      },
      {
        id: 'ex-l2-pr-6',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Replace the underlined nouns with a pronoun: "The teacher called **Callum and Isla** into the hall."',
        instruction: 'Select the suitable object pronoun.',
        options: ['they', 'them', 'their', 'themselves'],
        correctIndex: 1,
        explanation: '"Them" is the object pronoun receiving the action of being called.'
      },
      {
        id: 'ex-l2-pr-7',
        type: 'sentence-builder',
        difficultyStep: 2,
        prompt: 'Build a sentence using personal pronouns.',
        instruction: 'Rearrange the words into a correct sentence.',
        scrambledWords: ['She', 'gave', 'us', 'the', 'keys.'],
        correctSentence: 'She gave us the keys.',
        explanation: '"She" is the subject pronoun and "us" is the object pronoun.'
      },
      {
        id: 'ex-l2-pr-8',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Click the possessive pronoun in this sentence.',
        instruction: 'Identify the word showing ownership.',
        sentence: 'This sketchbook is mine.',
        words: ['This', 'sketchbook', 'is', 'mine.'],
        targetIndices: [3],
        targetCategoryLabel: 'possessive pronoun',
        explanation: '"mine" is a possessive pronoun showing ownership of the sketchbook.'
      },
      {
        id: 'ex-l2-pr-9',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which pronoun belongs in the gap? "The museum guide showed ____ the ancient Celtic coins."',
        instruction: 'Select the object pronoun.',
        options: ['we', 'us', 'our', 'ourselves'],
        correctIndex: 1,
        explanation: '"us" is the object pronoun receiving the action of showing.'
      },
      {
        id: 'ex-l2-pr-10',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Select the sentence where the pronoun "it" replaces a singular noun.',
        instruction: 'Identify the sentence with clear pronoun reference.',
        options: [
          'The old clock struck twelve, and it chimed loudly.',
          'The boys played football and it ran fast.',
          'Isla and Callum ate lunch and it was happy.',
          'The clouds floated and it rained flowers.'
        ],
        correctIndex: 0,
        explanation: '"it" clearly refers back to the singular noun "The old clock".'
      },
      {
        id: 'ex-l2-pr-11',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Identify the incorrect possessive pronoun spelling.',
        instruction: 'Click the word with the unnecessary apostrophe.',
        sentenceWithMistake: 'That winning telescope is their\'s.',
        words: ['That', 'winning', 'telescope', 'is', 'their\'s.'],
        errorWordIndex: 4,
        correctedWord: 'theirs.',
        ruleViolated: 'Possessive pronoun spelling',
        explanation: 'Possessive pronouns like "theirs", "ours", and "yours" do not take an apostrophe.'
      },
      {
        id: 'ex-l2-pr-12',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which pair of pronouns correctly completes: "____ offered ____ a slice of warm Victoria sponge cake."',
        instruction: 'Select Subject then Object pronoun.',
        options: [
          'He / me',
          'Him / I',
          'Me / he',
          'Them / she'
        ],
        correctIndex: 0,
        explanation: '"He" (subject pronoun) offered "me" (object pronoun).'
      },
      {
        id: 'ex-l2-pr-13',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Click all subject pronouns in this sentence.',
        instruction: 'Select the pronouns performing actions.',
        sentence: 'When they arrived, we welcomed them warmly.',
        words: ['When', 'they', 'arrived,', 'we', 'welcomed', 'them', 'warmly.'],
        targetIndices: [1, 3],
        targetCategoryLabel: 'subject pronoun',
        explanation: '"they" and "we" are subject pronouns doing the actions of arriving and welcoming.'
      },
      {
        id: 'ex-l2-pr-14',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Build a sentence with possessive pronouns.',
        instruction: 'Assemble the words correctly.',
        scrambledWords: ['The', 'victory', 'was', 'ours.'],
        correctSentence: 'The victory was ours.',
        explanation: '"ours" is a possessive pronoun showing ownership of the victory.'
      },
      {
        id: 'ex-l2-pr-15',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Which sentence is polite and grammatically correct?',
        instruction: 'Choose the sentence with correct pronoun order and form.',
        options: [
          'Me and Isla went to the British Museum.',
          'Isla and I went to the British Museum.',
          'I and Isla went to the British Museum.',
          'Isla and me went to the British Museum.'
        ],
        correctIndex: 1,
        explanation: 'In polite British English, place the other person first ("Isla and...") and use subject pronoun "I".'
      }
    ]
  }
];

console.log('Writing test generator...');

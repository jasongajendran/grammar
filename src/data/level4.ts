import { GrammarTopic } from '../types';

export const LEVEL_4_TOPICS: GrammarTopic[] = [
  {
    id: 'l4-active-passive-voice',
    slug: 'active-passive-voice',
    title: 'Active vs Passive Voice',
    subtitle: 'Shifting focus between the doer of the action and the receiver.',
    level: 'level-4',
    levelLabel: 'Level 4: Advanced',
    levelStage: 'Key Stage 3',
    ageGroup: 'Ages 11–14',
    category: 'advanced-syntax',
    categoryLabel: 'Advanced Syntax',
    iconName: 'Repeat',
    estimatedMinutes: 8,
    overview: 'In an **active voice** sentence, the subject actively PERFORMS the verb (*"The scientist discovered the vaccine"*). In a **passive voice** sentence, the subject RECEIVES the action (*"The vaccine was discovered by the scientist"*). Passive voice is constructed with a form of the auxiliary verb **to be** + **past participle**.',
    whyItMatters: 'Passive voice is vital for scientific reports, historical accounts, and formal British journalism where the action itself is more important than who did it.',
    sections: [
      {
        id: 'sec-active-vs-passive',
        title: '1. Comparing Active and Passive Structures',
        content: 'Observe how the focus shifts between the two voices:',
        bulletPoints: [
          '**Active (Doer -> Action -> Receiver):** *William the Conqueror built the Tower of London.*',
          '**Passive (Receiver -> Action by Doer):** *The Tower of London was built by William the Conqueror.*',
          '**Agentless Passive (Doer omitted):** *The ancient manuscript was stolen during the night.*'
        ],
        examples: [
          {
            id: 'ex-l4-apv1',
            sentence: 'The Magna Carta was signed by King John in **1215** at Runnymede.',
            highlightWords: ['was signed by'],
            explanation: 'Passive voice structure: "was" (auxiliary) + "signed" (past participle) + "by King John" (agent).',
            contextNote: 'British constitutional history'
          },
          {
            id: 'ex-l4-apv2',
            sentence: 'The fierce storm battered the Cornish coastline throughout the night.',
            highlightWords: ['battered'],
            explanation: 'Active voice: The subject ("The fierce storm") directly performs the action ("battered").',
            contextNote: 'Cornish weather'
          }
        ],
        ruleSummary: 'Active: Subject DOES action. Passive: Subject RECEIVES action (to be + past participle).'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l4-apv1',
        title: 'The "Zombies" Test for Passive Voice',
        trick: 'If you can insert the phrase **"...by zombies"** after the verb and the sentence remains grammatically sound, the sentence is in the PASSIVE voice! Example: *"The town was evacuated (by zombies)"* -> Passive!',
        mnemonic: 'Can it happen "...by zombies"? It\'s Passive!',
        commonMistake: 'Thinking passive voice is a grammatical error.',
        correctWay: 'Use active voice for energetic storytelling, and passive voice for formal lab reports and objective news reporting.',
        explanation: 'Both voices are legitimate stylistic choices.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l4-apv',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which of the following sentences is written in the PASSIVE voice?',
        instruction: 'Identify the passive construction.',
        options: [
          'Alexander Fleming discovered penicillin in 1928.',
          'Penicillin was discovered by Alexander Fleming in 1928.',
          'Fleming carefully inspected the petri dishes.',
          'The laboratory technician assisted the doctor.'
        ],
        correctIndex: 1,
        explanation: '**Penicillin was discovered by Alexander Fleming in 1928.** is passive because penicillin receives the action.'
      },
      {
        id: 'ex-q2-l4-apv',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the PASSIVE VERB PHRASE in this sentence.',
        instruction: 'Click the auxiliary verb and past participle.',
        sentence: 'The new railway bridge was constructed by skilled engineers.',
        words: ['The', 'new', 'railway', 'bridge', 'was', 'constructed', 'by', 'skilled', 'engineers.'],
        targetIndices: [4, 5],
        targetCategoryLabel: 'Passive Verb Phrase',
        explanation: '**was constructed** forms the passive verb phrase (be + past participle).'
      }
    ]
  },
  {
    id: 'l4-semicolons-colons',
    slug: 'semicolons-colons',
    title: 'Semicolons & Colons: Advanced Punctuation',
    subtitle: 'Elevating sentence balance, relationships, and formal lists.',
    level: 'level-4',
    levelLabel: 'Level 4: Advanced',
    levelStage: 'Key Stage 3',
    ageGroup: 'Ages 11–14',
    category: 'punctuation-mechanics',
    categoryLabel: 'Punctuation & Mechanics',
    iconName: 'Sliders',
    estimatedMinutes: 8,
    overview: 'The **semicolon (;)** links two closely related independent clauses without needing a conjunction like "and" or "but". The **colon (:)** acts like an arrow or drumroll, introducing an explanation, an elaboration, a quotation, or a formal list.',
    whyItMatters: 'Proper usage of semicolons and colons is one of the quickest ways to achieve Grade 7–9 marks in GCSE English Language.',
    sections: [
      {
        id: 'sec-semicolon-rules',
        title: '1. The Semicolon (;)',
        content: 'A semicolon is stronger than a comma, but softer than a full stop:',
        bulletPoints: [
          '**Linking Related Clauses:** *The rain continued to pour; we abandoned the match.*',
          '**With Conjunctive Adverbs:** *The exam was difficult; however, she passed with flying colours.*',
          '**In Complex Lists:** Used to separate items that already contain internal commas (*We visited Bath, Somerset; St Andrews, Fife; and Conwy, Wales.*)'
        ],
        examples: [
          {
            id: 'ex-l4-sc-1',
            sentence: 'The fog descended over London; Big Ben disappeared from view entirely.',
            highlightWords: [';'],
            explanation: 'The semicolon connects two independent clauses that are intimately related in cause and effect.',
            contextNote: 'London weather scene'
          },
          {
            id: 'ex-l4-sc-2',
            sentence: 'The orchestra completed its rehearsal; consequently, the auditorium fell silent.',
            highlightWords: ['; consequently,'],
            explanation: 'Semicolon preceding a transitional adverb "consequently", followed by a comma.',
            contextNote: 'Concert hall'
          }
        ],
        ruleSummary: 'Semicolons connect two independent sentences without a conjunction.'
      },
      {
        id: 'sec-colon-rules',
        title: '2. The Colon (:) as a Revealer',
        content: 'A colon signals that what follows explains, illustrates, or lists what was just stated. The clause BEFORE the colon must be a complete independent clause.',
        bulletPoints: [
          '**Introducing an Explanation:** *There was only one possible explanation: someone had left the garden gate unlatched.*',
          '**Introducing a Formal List:** *Please pack the following items: waterproof boots, a compass, and a torch.*'
        ],
        examples: [
          {
            id: 'ex-l4-sc-3',
            sentence: 'Charlotte made a solemn promise: she would never reveal the location of the hidden diary.',
            highlightWords: [':'],
            explanation: 'The colon introduces the exact content of the solemn promise.',
            contextNote: 'Literary suspense'
          },
          {
            id: 'ex-l4-sc-4',
            sentence: 'The recipe required three core British staples: mature Cheddar cheese, crusty bread, and salted butter.',
            highlightWords: [':'],
            explanation: 'The colon follows a complete clause and introduces a specific list.',
            contextNote: 'Traditional British food'
          }
        ],
        ruleSummary: 'Colons introduce lists, definitions, or direct explanations following a complete clause.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l4-sc-1',
        title: 'The Colon Pre-Condition Test',
        trick: 'Read ONLY the words before your colon. If they do not form a complete sentence on their own, you CANNOT use a colon! Example: *"The ingredients are: flour, eggs"* is INCORRECT. Write *"The cake requires three ingredients: flour, eggs, and sugar."*',
        mnemonic: 'Complete sentence BEFORE the colon!',
        commonMistake: 'Using a semicolon when a colon is needed for an explanation.',
        correctWay: 'Use a colon when the second clause explains or answers the first clause.',
        explanation: 'A colon points forward; a semicolon balances equal statements.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l4-sc',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which punctuation mark correctly fills the gap? "The museum was closed for renovations ___ we decided to visit the art gallery instead."',
        instruction: 'Choose the best punctuation to connect two independent clauses.',
        options: [',', ';', ':', '-'],
        correctIndex: 1,
        explanation: 'A **semicolon (;)** connects two independent clauses without a conjunction.'
      },
      {
        id: 'ex-q2-l4-sc',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find the incorrectly placed colon in this list introduction.',
        instruction: 'Click the word after which the colon was wrongly inserted.',
        sentenceWithMistake: 'The equipment you will need includes: a pencil, a ruler, and an eraser.',
        words: ['The', 'equipment', 'you', 'will', 'need', 'includes:', 'a', 'pencil,', 'a', 'ruler.'],
        errorWordIndex: 5,
        correctedWord: 'includes',
        ruleViolated: 'Do not place a colon directly after a verb like "includes" or "are".',
        explanation: 'A colon cannot directly follow the verb "includes" because the clause before it is incomplete.'
      }
    ]
  },
  {
    id: 'l4-subjunctive-mood',
    slug: 'subjunctive-mood-british-english',
    title: 'The Subjunctive Mood in British English',
    subtitle: 'Expressing wishes, hypothetical conditions, and formal demands.',
    level: 'level-4',
    levelLabel: 'Level 4: Advanced',
    levelStage: 'Key Stage 3',
    ageGroup: 'Ages 11–14',
    category: 'advanced-syntax',
    categoryLabel: 'Advanced Syntax',
    iconName: 'Compass',
    estimatedMinutes: 8,
    overview: 'The **subjunctive mood** is a special verb form used to express **hypothetical situations, wishes, conditions contrary to fact**, or **formal demands/recommendations**. The most famous subjunctive form is using **"were"** instead of "was" (*"If I were you..."*), and using the bare root verb for demands (*"The Headteacher insisted that he attend the meeting"*).',
    whyItMatters: 'The subjunctive mood is explicitly specified in the UK National Curriculum and GCSE English language examinations.',
    sections: [
      {
        id: 'sec-subjunctive-forms',
        title: '1. The Two Primary Subjunctive Structures',
        content: 'Learn how verbs morph in the subjunctive mood:',
        bulletPoints: [
          '**Hypothetical / Contrary to Fact ("were" instead of "was"):** *If I **were** the Prime Minister, I would increase education funding.* (Not *If I was...*)',
          '**Wishes:** *I wish it **were** summer holiday.*',
          '**Mandative / Formal Demands (bare root verb):** *The committee demanded that the building **remain** closed.* (Not *remains* or *remained*)',
          '**Fixed British Idioms:** *God **save** the King; **Be** that as it may; If need **be**.*'
        ],
        examples: [
          {
            id: 'ex-l4-sm1',
            sentence: 'If I **were** in your position, I would accept the scholarship to Oxford.',
            highlightWords: ['were'],
            explanation: 'Subjunctive "were" used with the singular pronoun "I" to express a hypothetical condition.',
            contextNote: 'Academic decision'
          },
          {
            id: 'ex-l4-sm2',
            sentence: 'The doctor recommended that he **rest** for two full weeks.',
            highlightWords: ['rest'],
            explanation: 'Mandative subjunctive: uses the bare root form "rest" rather than "rests" or "rested".',
            contextNote: 'Medical advice'
          }
        ],
        ruleSummary: 'Hypothetical: Use "were" (If I were...). Formal demand: Use bare root verb (demanded that he go).'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l4-sm1',
        title: 'The Beyonce Rule ("If I Were a Boy")',
        trick: 'Whenever you are talking about something imaginary or impossible right now, switch "was" to **"were"**! E.g., *"If she **were** here right now..."*',
        mnemonic: 'Imaginary situation? Always use WERE!',
        commonMistake: 'Writing *"I demand that he is punished"*.',
        correctWay: 'Write *"I demand that he **be** punished."*',
        explanation: 'After verbs of demanding/requesting, use the subjunctive base form "be".'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l4-sm',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Select the sentence written correctly in the SUBJUNCTIVE mood:',
        instruction: 'Pick the correct formal subjunctive sentence.',
        options: [
          'If I was a bird, I would fly across the channel.',
          'If I were a bird, I would fly across the channel.',
          'If I am a bird, I would fly across the channel.',
          'If I will be a bird, I would fly across the channel.'
        ],
        correctIndex: 1,
        explanation: '**If I were a bird...** is the correct subjunctive form for a condition contrary to fact.'
      },
      {
        id: 'ex-q2-l4-sm',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Choose the correct mandative subjunctive verb: "The council proposed that the historic library ___ preserved."',
        instruction: 'Select the correct base verb form.',
        options: ['is', 'was', 'be', 'being'],
        correctIndex: 2,
        explanation: 'Use **be**: "The council proposed that the historic library **be** preserved."'
      }
    ]
  },
  {
    id: 'l4-subject-verb-agreement',
    slug: 'subject-verb-agreement-complex',
    title: 'Subject-Verb Agreement: Tricky Subjects',
    subtitle: 'Collective nouns, compound subjects, and indefinite pronouns.',
    level: 'level-4',
    levelLabel: 'Level 4: Advanced',
    levelStage: 'Key Stage 3',
    ageGroup: 'Ages 11–14',
    category: 'advanced-syntax',
    categoryLabel: 'Advanced Syntax',
    iconName: 'CheckCheck',
    estimatedMinutes: 8,
    overview: 'The basic rule of **subject-verb agreement** is simple: singular subjects take singular verbs, and plural subjects take plural verbs. However, English contains tricky situations like **collective nouns** (*the team, the government*), **indefinite pronouns** (*everyone, neither*), and intervening phrases that cause common errors.',
    whyItMatters: 'British English has distinctive collective noun conventions compared to American English.',
    sections: [
      {
        id: 'sec-tricky-agreement',
        title: '1. British Collective Nouns & Tricky Pronouns',
        content: 'Master these nuanced rules of agreement:',
        bulletPoints: [
          '**British Collective Nouns:** In British English, collective nouns like *team, family, government, choir* can take either a singular OR plural verb depending on whether they act as one unit or individual members (*The team is winning* vs *The team are arguing among themselves*).',
          '**Indefinite Pronouns:** *Everyone, everybody, nobody, someone, neither, either* are grammatically SINGULAR (*Everyone **has** arrived*, not *have*).',
          '**Intervening Phrases:** Words between subject and verb do not change the subject (*The box of vintage biscuits **was** opened*).'
        ],
        examples: [
          {
            id: 'ex-l4-sva1',
            sentence: 'Neither of the ancient manuscripts **was** damaged during the flood.',
            highlightWords: ['Neither', 'was'],
            explanation: '"Neither" is singular, so it takes the singular verb "was" despite the plural noun "manuscripts".',
            contextNote: 'Library archive'
          },
          {
            id: 'ex-l4-sva2',
            sentence: 'The committee **have** reached different conclusions regarding the new railway.',
            highlightWords: ['committee have'],
            explanation: 'British English allows the plural verb "have" when committee members act individually.',
            contextNote: 'British civic planning'
          }
        ],
        ruleSummary: 'Ignore words in between; match the verb to the true grammatical subject.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l4-sva1',
        title: 'The "Cover the Middle" Trick',
        trick: 'When a prepositional phrase sits between the subject and the verb, cover it with your thumb! Example: *"The bag of juicy apples [is / are] heavy"* -> *"The bag is heavy"*!',
        mnemonic: 'Find the real subject; ignore the intervening phrase!',
        commonMistake: 'Writing *"One of my friends are coming"* because of "friends".',
        correctWay: 'Write *"One of my friends **is** coming."*',
        explanation: '"One" is the singular subject, not "friends".'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l4-sva',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Choose the correct verb: "Every one of the passengers ___ required to show a valid ticket."',
        instruction: 'Match subject and verb correctly.',
        options: ['are', 'is', 'were', 'have been'],
        correctIndex: 1,
        explanation: '**is** is correct because "Every one" is a singular subject.'
      }
    ]
  }
];

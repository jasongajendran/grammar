import { GrammarTopic } from '../types';

export const LEVEL_5_TOPICS: GrammarTopic[] = [
  {
    id: 'l5-nominalisation',
    slug: 'nominalisation-academic-register',
    title: 'Nominalisation: Crafting Academic Register',
    subtitle: 'Transforming verbs and adjectives into abstract nouns to create authoritative prose.',
    level: 'level-5',
    levelLabel: 'Level 5: Master',
    levelStage: 'GCSE / Key Stage 4',
    ageGroup: 'Ages 14–16',
    category: 'advanced-syntax',
    categoryLabel: 'Advanced Syntax',
    iconName: 'Sparkles',
    estimatedMinutes: 9,
    overview: '**Nominalisation** is the grammatical process of converting verbs (actions) or adjectives (qualities) into abstract nouns (e.g., *react -> reaction*, *expand -> expansion*, *intense -> intensity*). It is the cornerstone of academic, scientific, historical, and formal essay writing in British GCSEs and A-Levels.',
    whyItMatters: 'Nominalisation condenses clauses, removes informal personal pronouns, and creates an objective, academic tone.',
    sections: [
      {
        id: 'sec-nominalisation-examples',
        title: '1. Converting Actions to Concepts',
        content: 'Observe how nominalisation elevates everyday sentences into formal academic discourse:',
        bulletPoints: [
          '**Informal (Verbal):** *Because the climate was getting warmer rapidly, many glaciers began to melt.*',
          '**Academic (Nominalised):** *The **rapid warming** of the climate caused widespread glacial **depletion**.*',
          '**Common Suffixes for Nominalisation:** *-tion, -sion, -ment, -ance, -ity, -ness, -ence* (e.g. *investigate -> investigation*, *develop -> development*)'
        ],
        examples: [
          {
            id: 'ex-l5-nom1',
            sentence: 'The **discovery** of penicillin in 1928 led to the **eradication** of numerous bacterial diseases.',
            highlightWords: ['discovery', 'eradication'],
            explanation: 'Nouns "discovery" (from *discover*) and "eradication" (from *eradicate*) create concise academic weight.',
            contextNote: 'Scientific history essay'
          },
          {
            id: 'ex-l5-nom2',
            sentence: 'The **destruction** of the rainforests threatens the **survival** of indigenous species.',
            highlightWords: ['destruction', 'survival'],
            explanation: 'Abstract nouns replace clauses like *"when people destroy rainforests, species might not survive"*.',
            contextNote: 'Environmental analysis'
          }
        ],
        ruleSummary: 'Nominalisation turns verbs/adjectives into abstract nouns for concise, formal prose.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l5-nom1',
        title: 'The Academic Density Balance',
        trick: 'Use nominalisation to pack information tightly in essay introductions and conclusions. However, don\'t over-stuff sentences with too many "-tion" words in creative writing, or it will become stiff and robotic.',
        mnemonic: 'Turn the ACTION into the CONCEPT!',
        commonMistake: 'Piling on five nominalised nouns in one clause, obscuring meaning.',
        correctWay: 'Maintain a crisp, clear main verb to carry the sentence forward.',
        explanation: 'Academic writing balances noun density with clear verbal movement.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l5-nom',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'What is the nominalised noun form of the verb "persuade"?',
        instruction: 'Select the abstract noun.',
        options: ['persuasive', 'persuading', 'persuasion', 'persuaded'],
        correctIndex: 2,
        explanation: '**Persuasion** is the nominalised noun form of the verb "persuade".'
      },
      {
        id: 'ex-q2-l5-nom',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the two NOMINALISED NOUNS in this academic sentence.',
        instruction: 'Click the abstract nouns derived from verbs.',
        sentence: 'The rapid expansion of industry caused massive migration to cities.',
        words: ['The', 'rapid', 'expansion', 'of', 'industry', 'caused', 'massive', 'migration', 'to', 'cities.'],
        targetIndices: [2, 7],
        targetCategoryLabel: 'Nominalised Noun',
        explanation: '**Expansion** (from expand) and **migration** (from migrate) are nominalised nouns.'
      }
    ]
  },
  {
    id: 'l5-dangling-modifiers',
    slug: 'participle-phrases-dangling-modifiers',
    title: 'Participle Phrases & Avoiding Dangling Modifiers',
    subtitle: 'Ensuring your introductory phrases logically attach to the right subject.',
    level: 'level-5',
    levelLabel: 'Level 5: Master',
    levelStage: 'GCSE / Key Stage 4',
    ageGroup: 'Ages 14–16',
    category: 'advanced-syntax',
    categoryLabel: 'Advanced Syntax',
    iconName: 'AlertTriangle',
    estimatedMinutes: 9,
    overview: 'A **participle phrase** begins with a present participle (*-ing*) or past participle (*-ed / -en*) and acts as an adjective modifying a noun. A **dangling modifier** occurs when the noun being described is missing or placed too far away, creating unintentional comedy (e.g. *"Walking down the street, the trees looked lovely"* means the trees were walking down the street!).',
    whyItMatters: 'Dangling modifiers are one of the most penalised syntactic errors in GCSE and A-Level essays.',
    sections: [
      {
        id: 'sec-dangling-modifiers-rules',
        title: '1. The Dangling Modifier Hazard',
        content: 'The subject performing the action of an introductory participle phrase MUST be the very first noun right after the comma:',
        bulletPoints: [
          '**Error (Dangling):** *Having completed the homework, the television was turned on.* (Did the television complete the homework? No!)',
          '**Corrected:** *Having completed the homework, **Lucas** turned on the television.*',
          '**Error (Misplaced):** *Covered in chocolate sauce, I devoured the warm pudding.* (Were you covered in chocolate sauce, or was the pudding?)'
        ],
        examples: [
          {
            id: 'ex-l5-dm1',
            sentence: '**Gazing through the telescope,** the astronomer observed a distant comet.',
            highlightWords: ['Gazing through the telescope,', 'the astronomer'],
            explanation: 'Correct syntax: "the astronomer" immediately follows the comma as the person doing the gazing.',
            contextNote: 'Astronomical observation'
          },
          {
            id: 'ex-l5-dm2',
            sentence: '**Exhausted after the marathon,** the athlete collapsed gratefully across the finish line.',
            highlightWords: ['Exhausted after the marathon,', 'the athlete'],
            explanation: '"The athlete" is the one who was exhausted, directly adjacent to the participle phrase.',
            contextNote: 'Athletics event'
          }
        ],
        ruleSummary: 'The noun immediately following an introductory modifier MUST be the one performing the action.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l5-dm1',
        title: 'The First-Noun-After-Comma Check',
        trick: 'Always look at the VERY FIRST WORD after your introductory comma. Ask: *"Is THIS person or object the one doing the action described in the opening phrase?"*',
        mnemonic: 'Introductory phrase -> Subject MUST follow the comma!',
        commonMistake: 'Placing an inanimate object immediately after a human action phrase.',
        correctWay: 'Place the actual human agent right after the comma.',
        explanation: 'Keeps sentences logically and syntactically sound.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l5-dm',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which of the following sentences avoids a dangling modifier?',
        instruction: 'Pick the grammatically correct sentence.',
        options: [
          'Running for the bus, my satchel fell into a puddle.',
          'Running for the bus, I dropped my satchel into a puddle.',
          'Running for the bus, the puddle caught my satchel.',
          'Running for the bus, my shoe became muddy.'
        ],
        correctIndex: 1,
        explanation: '**Running for the bus, I dropped my satchel into a puddle.** is correct because "I" was the one running.'
      }
    ]
  },
  {
    id: 'l5-conditionals',
    slug: 'conditional-clauses-mastery',
    title: 'Conditionals: Zero, First, Second, Third & Mixed',
    subtitle: 'Navigating realities, probabilities, hypothetical dreams, and past regrets.',
    level: 'level-5',
    levelLabel: 'Level 5: Master',
    levelStage: 'GCSE / Key Stage 4',
    ageGroup: 'Ages 14–16',
    category: 'advanced-syntax',
    categoryLabel: 'Advanced Syntax',
    iconName: 'HelpCircle',
    estimatedMinutes: 9,
    overview: '**Conditional sentences** discuss known factors or hypothetical situations and their consequences. Full conditional sentences contain a conditional clause (often called the *if-clause*) and the consequence clause.',
    whyItMatters: 'Mastering all five conditional structures enables sophisticated rhetorical argumentation in GCSE English analysis.',
    sections: [
      {
        id: 'sec-conditional-types',
        title: '1. The Five British English Conditionals',
        content: 'Observe the formula for each conditional tier:',
        bulletPoints: [
          '**Zero Conditional (Universal Truths):** *If you heat water to 100°C, it boils.* (If + Present Simple, Present Simple)',
          '**First Conditional (Real Future Possibility):** *If it rains tomorrow, we will visit the British Museum.* (If + Present Simple, will + base)',
          '**Second Conditional (Unreal Present/Hypothetical):** *If I won the lottery, I would buy a castle in the Scottish Highlands.* (If + Past Simple, would + base)',
          '**Third Conditional (Unreal Past Regret):** *If she had revised thoroughly, she would have passed the GCSE exam.* (If + Past Perfect, would have + past participle)',
          '**Mixed Conditional (Past cause, present effect):** *If I had caught that morning train, I would be in Edinburgh right now.*'
        ],
        examples: [
          {
            id: 'ex-l5-cd1',
            sentence: 'If the Prime Minister **had listened** to the advisors, the crisis **would have been avoided**.',
            highlightWords: ['had listened', 'would have been avoided'],
            explanation: 'Third conditional expressing a past counterfactual regret: Past Perfect ("had listened") + Modal Perfect ("would have been avoided").',
            contextNote: 'Political discourse'
          },
          {
            id: 'ex-l5-cd2',
            sentence: 'If you **mix** blue and yellow pigment, you **create** green.',
            highlightWords: ['mix', 'create'],
            explanation: 'Zero conditional representing a scientific fact using Present Simple in both clauses.',
            contextNote: 'Colour theory'
          }
        ],
        ruleSummary: '0 = Facts | 1 = Likely future | 2 = Hypothetical present | 3 = Past counterfactual/regret.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l5-cd1',
        title: 'Never Put "Would" in the "If" Clause',
        trick: 'In standard British English, **never** put "would" inside the *if-clause*! Say: *"If I had known..."*, NEVER *"If I would have known..."*.',
        mnemonic: 'No "would" in the "if" clause!',
        commonMistake: 'Saying *"If I would of been there, I would have helped"*.',
        correctWay: 'Write *"If I **had been** there, I would have helped."*',
        explanation: 'The condition clause requires past perfect (had been), while the result clause takes would have.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l5-cd',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which sentence represents a THIRD CONDITIONAL (unreal past situation)?',
        instruction: 'Pick the third conditional sentence.',
        options: [
          'If it rains, the grass gets wet.',
          'If you study, you will succeed.',
          'If I were wealthy, I would travel the globe.',
          'If we had left earlier, we would have caught the Eurostar.'
        ],
        correctIndex: 3,
        explanation: '**If we had left earlier, we would have caught the Eurostar.** uses "had left" (past perfect) and "would have caught".'
      }
    ]
  },
  {
    id: 'l5-parallel-structure',
    slug: 'parallel-structure-rhetoric',
    title: 'Parallel Structure & Balanced Syntax',
    subtitle: 'Crafting persuasive, rhythmic English with syntactical balance.',
    level: 'level-5',
    levelLabel: 'Level 5: Master',
    levelStage: 'GCSE / Key Stage 4',
    ageGroup: 'Ages 14–16',
    category: 'advanced-syntax',
    categoryLabel: 'Advanced Syntax',
    iconName: 'Equal',
    estimatedMinutes: 9,
    overview: '**Parallel structure** (also called parallelism) means using the same grammatical pattern for two or more words, phrases, or clauses in a series. This creates harmony, rhythm, and rhetorical power in writing and speech.',
    whyItMatters: 'Winston Churchill, William Shakespeare, and Charles Dickens used parallel syntax to deliver legendary British speeches and prose.',
    sections: [
      {
        id: 'sec-parallelism-rules',
        title: '1. Maintaining Grammatical Symmetry',
        content: 'All items in a list or coordinated pair must share the same grammatical form:',
        bulletPoints: [
          '**Faulty (Unbalanced):** *Charlotte enjoys **swimming**, **to hike**, and **baking cakes**.*',
          '**Parallel (Balanced Gerunds):** *Charlotte enjoys **swimming**, **hiking**, and **baking** cakes.*',
          '**Famous Rhetorical Parallelism (Churchill):** *"We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields..."*'
        ],
        examples: [
          {
            id: 'ex-l5-ps1',
            sentence: 'The candidate promised **to reform** taxation, **to improve** public transport, and **to protect** ancient woodlands.',
            highlightWords: ['to reform', 'to improve', 'to protect'],
            explanation: 'Symmetrical infinitive verbs ("to reform", "to improve", "to protect") create persuasive political balance.',
            contextNote: 'Political rhetoric'
          },
          {
            id: 'ex-l5-ps2',
            sentence: 'The novel was praised for its **vivid imagery**, its **compelling dialogue**, and its **unforgettable climax**.',
            highlightWords: ['vivid imagery', 'compelling dialogue', 'unforgettable climax'],
            explanation: 'Each item in the tricolon consists of [possessive pronoun + adjective + noun].',
            contextNote: 'Literary criticism'
          }
        ],
        ruleSummary: 'Parallel elements must match in grammatical form (all gerunds, all infinitives, or all noun phrases).'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l5-ps1',
        title: 'The Tricolon / Rule of Three',
        trick: 'In English rhetoric, grouping three parallel phrases together (a tricolon) creates the most satisfying psychological impact on the listener.',
        mnemonic: 'Match the pattern across all three parts!',
        commonMistake: 'Switching from an "-ing" word to a "to [verb]" phrase halfway through a list.',
        correctWay: 'Keep all verbs in the exact same tense and format throughout the series.',
        explanation: 'Prevents jarring syntactic shifts.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l5-ps',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Select the sentence with PERFECT parallel structure:',
        instruction: 'Pick the grammatically balanced sentence.',
        options: [
          'The guide instructed us to stay together, walking quietly, and don\'t touch artifacts.',
          'The guide instructed us to stay together, to walk quietly, and not to touch artifacts.',
          'The guide instructed us to stay together, walk quiet, and no touching.',
          'The guide instructed us staying together, to walk quietly, and do not touch.'
        ],
        correctIndex: 1,
        explanation: '**The guide instructed us to stay together, to walk quietly, and not to touch artifacts.** maintains parallel infinitive verbs throughout.'
      }
    ]
  }
];

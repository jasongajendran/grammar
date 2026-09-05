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
    overview: '**Nominalisation** is the grammatical process of converting verbs (actions) or adjectives (qualities) into abstract nouns (for example: *discover -> discovery*, *reconstruct -> reconstruction*, *resilient -> resilience*). It is the cornerstone of academic, scientific, historical, and formal essay writing in British GCSEs and A-Levels.',
    whyItMatters: 'Nominalisation condenses clauses, removes informal personal pronouns, and creates an objective, academic tone.',
    sections: [
      {
        id: 'sec-nominalisation-examples',
        title: '1. Converting Actions to Concepts',
        content: 'Observe how nominalisation elevates everyday narrative into formal academic discourse:',
        bulletPoints: [
          '**Informal Narrative (Verbal):** *Because ancient Britons built defensive earthworks at Maiden Castle, they protected their communities effectively.*',
          '**Academic Prose (Nominalised):** *The **construction** of defensive earthworks at Maiden Castle ensured the effective **protection** of local communities.*',
          '**Common Suffixes for Nominalisation:** *-tion, -sion, -ment, -ance, -ity, -ness, -ence* (for example: *restore -> restoration of Conwy Castle; establish -> establishment of the NHS; expand -> expansion of Roman London*).'
        ],
        examples: [
          {
            id: 'ex-l5-nom1',
            sentence: 'The **restoration** of Conwy Castle in the twentieth century transformed the fortress into a global symbol of medieval heritage.',
            highlightWords: ['restoration'],
            explanation: 'The abstract noun "restoration" (from the verb *restore*) creates authoritative historical conciseness.',
            contextNote: 'Historic British architecture'
          },
          {
            id: 'ex-l5-nom2',
            sentence: 'The successful **reintroduction** of the red kite across England and Wales represents a triumph for ecological **conservation**.',
            highlightWords: ['reintroduction', 'conservation'],
            explanation: 'Abstract nouns replace wordy clauses like *"when conservationists reintroduced kites and conserved habitats"*.',
            contextNote: 'UK biodiversity report'
          },
          {
            id: 'ex-l5-nom3',
            sentence: 'The **completion** of the Grand Union Canal in 1805 enabled the **transportation** of heavy commercial freight across the Midlands.',
            highlightWords: ['completion', 'transportation'],
            explanation: 'Nominalised nouns provide dense, objective historical framing.',
            contextNote: 'British industrial engineering'
          }
        ],
        ruleSummary: 'Nominalisation turns verbs/adjectives into abstract nouns for concise, formal prose.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l5-nom1',
        title: 'The Academic Density Balance',
        trick: 'Use nominalisation to pack information tightly in essay introductions and analytical conclusions. However, do not over-stuff sentences with too many "-tion" words in creative writing, or it will feel sterile and heavy.',
        mnemonic: 'Turn the ACTION into the CONCEPT!',
        commonMistake: 'Piling on five nominalised nouns in one clause, obscuring the human story.',
        correctWay: 'Maintain a crisp, clear main verb to carry the sentence forward smoothly.',
        explanation: 'Academic writing balances noun density with clear verbal movement.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l5-nom',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'What is the nominalised noun form of the verb "conclude"?',
        instruction: 'Select the abstract noun.',
        options: ['conclusive', 'concluding', 'conclusion', 'concluded'],
        correctIndex: 2,
        explanation: '**Conclusion** is the nominalised noun form derived from the verb "conclude".'
      },
      {
        id: 'ex-q2-l5-nom',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the two NOMINALISED NOUNS in this academic sentence.',
        instruction: 'Click the abstract nouns derived from verbs.',
        sentence: 'The rapid industrialisation of Manchester caused significant migration from rural counties.',
        words: ['The', 'rapid', 'industrialisation', 'of', 'Manchester', 'caused', 'significant', 'migration', 'from', 'rural', 'counties.'],
        targetIndices: [2, 7],
        targetCategoryLabel: 'Nominalised Noun',
        explanation: '**Industrialisation** (from industrialise) and **migration** (from migrate) are nominalised nouns.'
      }
    
    ,
      {
        id: 'gen-nom-1',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Which phrase is the nominalised version of "They discovered the cure quickly"?',
        instruction: 'Select the phrase that turns the action into a noun phrase.',
        options: [
          'The quick discovery of the cure',
          'Discovering the cure quickly',
          'They quickly made a discovery of the cure',
          'When they discovered the cure quickly'
        ],
        correctIndex: 0,
        explanation: '"The quick discovery of the cure" turns the verb "discovered" into the noun "discovery", which is a hallmark of academic writing.'
      }
    ,
      {
        id: 'gen2-nom-1',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Build the sentence using nominalisation for an academic tone.',
        instruction: 'Arrange the words to form a noun-heavy, formal sentence.',
        scrambledWords: ['The', 'implementation', 'of', 'the', 'policy', 'caused', 'widespread', 'debate.'],
        correctSentence: 'The implementation of the policy caused widespread debate.',
        explanation: '"The implementation of the policy" changes the verb "implement" into a noun phrase, elevating the register.'
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
    overview: 'A **participle phrase** begins with a present participle (*-ing*) or past participle (*-ed / -en*) and acts as an adjective modifying a noun. A **dangling modifier** occurs when the noun being described is missing or placed too far away, creating unintentional comedy (for example: *"Walking through the national park, the mountains looked magnificent"* implies the mountains were walking through the park!).',
    whyItMatters: 'Dangling modifiers are one of the most penalised syntactic errors in GCSE and A-Level essays.',
    sections: [
      {
        id: 'sec-dangling-modifiers-rules',
        title: '1. The Dangling Modifier Hazard',
        content: 'The subject performing the action of an introductory participle phrase MUST be the very first noun placed directly after the comma:',
        bulletPoints: [
          '**Error (Dangling participle):** *Trekking across the Lake District, the snow-capped fells looked magnificent.* (Did the fells do the trekking? No!)',
          '**Corrected (Proper agent):** *Trekking across the Lake District, the **ramblers** gazed at the magnificent fells.*',
          '**Error (Misplaced modifier):** *Steeped in medieval legend, the tourist explored the ruined abbey.* (Was the tourist steeped in legend, or was the abbey?)',
          '**Corrected:** *Steeped in medieval legend, the **ruined abbey** fascinated the tourist.*'
        ],
        examples: [
          {
            id: 'ex-l5-dm1',
            sentence: '**Gazing across the silver expanse of Windermere,** the ornithologist spotted a peregrine falcon dive for prey.',
            highlightWords: ['Gazing across the silver expanse of Windermere,', 'the ornithologist'],
            explanation: 'Correct syntax: "the ornithologist" immediately follows the comma as the person doing the gazing.',
            contextNote: 'Lake District wildlife observation'
          },
          {
            id: 'ex-l5-dm2',
            sentence: '**Dressed in traditional ceremonial robes,** the Lord Mayor led the civic procession through the historic city centre.',
            highlightWords: ['Dressed in traditional ceremonial robes,', 'the Lord Mayor'],
            explanation: '"The Lord Mayor" is the person wearing the robes, placed directly adjacent to the introductory participle phrase.',
            contextNote: 'Civic ceremonial procession'
          },
          {
            id: 'ex-l5-dm3',
            sentence: '**Braving the bitter Atlantic squalls,** the lifeboat crew docked the vessel safely at the Cornish harbour.',
            highlightWords: ['Braving the bitter Atlantic squalls,', 'the lifeboat crew'],
            explanation: '"The lifeboat crew" performs the courageous action of braving the squalls, correctly positioned right after the comma.',
            contextNote: 'RNLI maritime rescue'
          }
        ],
        ruleSummary: 'The noun immediately following an introductory modifier MUST be the one performing the action.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l5-dm1',
        title: 'The First-Noun-After-Comma Check',
        trick: 'Always look at the VERY FIRST WORD after your introductory comma. Ask: *"Is THIS person or creature the one doing the action described in the opening phrase?"*',
        mnemonic: 'Introductory phrase -> Real Subject MUST follow the comma!',
        commonMistake: 'Placing an inanimate object immediately after a human action phrase (for example: *"Hiking the trail, my backpack broke"*).',
        correctWay: 'Place the actual human agent right after the comma: *"Hiking the trail, I noticed my backpack tore."*',
        explanation: 'Keeps sentences logically, grammatically, and stylistically sound.'
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
          'Climbing Scafell Pike, our water bottle was dropped into the ravine.',
          'Climbing Scafell Pike, we dropped our water bottle into the ravine.',
          'Climbing Scafell Pike, the ravine caught our water bottle.',
          'Climbing Scafell Pike, our boots became muddy.'
        ],
        correctIndex: 1,
        explanation: '**Climbing Scafell Pike, we dropped our water bottle into the ravine.** is correct because "we" were the ones doing the climbing.'
      }
    
    ,
      {
        id: 'gen-part-1',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Which sentence does NOT contain a dangling modifier?',
        instruction: 'Select the grammatically correct sentence.',
        options: [
          'Walking down the street, the trees were beautiful.',
          'Having finished the assignment, the TV was turned on.',
          'Exhausted from the marathon, she collapsed on the sofa.',
          'To bake a cake, the oven must be preheated.'
        ],
        correctIndex: 2,
        explanation: 'In option 3, the modifying phrase "Exhausted from the marathon" correctly modifies "she". The other options have modifiers that do not logically apply to the subjects that follow them.'
      }
    ,
      {
        id: 'gen2-part-1',
        type: 'error-detective',
        difficultyStep: 5,
        prompt: 'Identify the dangling modifier issue.',
        instruction: 'Click the word that incorrectly receives the action of the modifier.',
        sentenceWithMistake: 'Looking out the window, the mountains were covered in snow.',
        words: ['Looking', 'out', 'the', 'window,', 'the', 'mountains', 'were', 'covered', 'in', 'snow.'],
        errorWordIndex: 5,
        correctedWord: 'we saw the mountains',
        ruleViolated: 'Grammar Rule',
        explanation: 'The mountains were not "looking out the window". The sentence needs a human subject immediately after the comma (e.g., "...window, we saw the mountains...").'
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
    overview: '**Conditional sentences** discuss known realities or hypothetical situations and their logical consequences. Full conditional sentences contain a conditional clause (introduced by *if*, *unless*, or *provided that*) and the main result clause.',
    whyItMatters: 'Mastering all five conditional structures enables sophisticated rhetorical argumentation in GCSE English analysis.',
    sections: [
      {
        id: 'sec-conditional-types',
        title: '1. The Five British English Conditionals',
        content: 'Observe the grammatical formula and usage for each conditional tier:',
        bulletPoints: [
          '**Zero Conditional (Universal Truths & Scientific Laws):** (for example: *If winter temperatures plunge across the Yorkshire Dales, upland streams **freeze** solid.* [If + Present Simple, Present Simple])',
          '**First Conditional (Real & Probable Future Scenarios):** (for example: *If the ferry leaves Portsmouth on schedule, we **will arrive** on the Isle of Wight by noon.* [If + Present Simple, will + base])',
          '**Second Conditional (Unreal Present & Hypothetical Dreams):** (for example: *If I owned a country estate in the Cotswolds, I **would establish** a wildflower meadow for bees.* [If + Past Simple, would + base])',
          '**Third Conditional (Unreal Past Counterfactual & Regrets):** (for example: *If King Harold **had maintained** higher ground, the Battle of Hastings might have unfolded differently.* [If + Past Perfect, would have + past participle])',
          '**Mixed Conditional (Past cause with present consequence):** (for example: *If Victorian engineers **had not constructed** the Thames Embankment in 1870, central London **would still face** severe river flooding today.*)'
        ],
        examples: [
          {
            id: 'ex-l5-cd1',
            sentence: 'If the mountain rescue team **had not acted** with such swiftness, the lost hikers **would have succumbed** to hypothermia.',
            highlightWords: ['had not acted', 'would have succumbed'],
            explanation: 'Third conditional expressing a past counterfactual: Past Perfect ("had not acted") + Modal Perfect ("would have succumbed").',
            contextNote: 'Peak District rescue emergency'
          },
          {
            id: 'ex-l5-cd2',
            sentence: 'If gale force winds **exceed** fifty knots, the English Channel ferry operators **suspend** all departures.',
            highlightWords: ['exceed', 'suspend'],
            explanation: 'Zero conditional representing standard maritime policy using Present Simple in both clauses.',
            contextNote: 'Channel maritime safety'
          },
          {
            id: 'ex-l5-cd3',
            sentence: 'If you **visit** London during the Proms season, you **will witness** classical performances from world-renowned musicians.',
            highlightWords: ['visit', 'will witness'],
            explanation: 'First conditional predicting a real, likely future event during the BBC Proms season.',
            contextNote: 'Royal Albert Hall festival'
          }
        ],
        ruleSummary: '0 = Facts | 1 = Likely future | 2 = Hypothetical present | 3 = Past counterfactual | Mixed = Past cause + Present effect.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l5-cd1',
        title: 'Never Put "Would" in the "If" Clause',
        trick: 'In standard British English, **never** put "would" inside the *if-clause*! Say: *"If I had known..."*, NEVER *"If I would have known..."*.',
        mnemonic: 'No "would" in the "if" clause!',
        commonMistake: 'Saying *"If I would of visited London, I would have seen the British Museum"*.',
        correctWay: 'Write *"If I **had visited** London, I would have seen the British Museum."*',
        explanation: 'The condition clause requires past perfect (had visited), while the result clause takes would have.'
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
          'If it rains in Manchester, the river swells.',
          'If you train hard, you will win the tournament.',
          'If I were the museum curator, I would display the Roman mosaic.',
          'If the organist had tuned the cathedral pipes earlier, the harmony would have been flawless.'
        ],
        correctIndex: 3,
        explanation: '**If the organist had tuned the cathedral pipes earlier, the harmony would have been flawless.** uses "had tuned" (past perfect) and "would have been" (modal perfect).'
      }
    
    ,
      {
        id: 'gen-cond-1',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Which sentence correctly uses the third conditional (unreal past)?',
        instruction: 'Select the correct third conditional sentence.',
        options: [
          'If I had studied harder, I would pass the exam.',
          'If I studied harder, I would have passed the exam.',
          'If I had studied harder, I would have passed the exam.',
          'If I study harder, I will pass the exam.'
        ],
        correctIndex: 2,
        explanation: 'The third conditional requires "if + past perfect (had studied)" and "would have + past participle (would have passed)" to describe a hypothetical situation in the past.'
      }
    ,
      {
        id: 'gen2-cond-1',
        type: 'clause-matcher',
        difficultyStep: 5,
        prompt: 'Identify the condition (if-clause) and the result (main clause) in this mixed conditional.',
        instruction: 'Match the clauses.',
        sentence: 'If I had invested in that company, I would be rich now.',
        mainClause: 'I would be rich now',
        subordinateClause: 'If I had invested in that company',
        conjunctionOrConnective: 'Conjunction',
        explanation: 'This mixed conditional uses an unreal past condition (had invested) and an unreal present result (would be rich).'
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
    overview: '**Parallel structure** (also known as parallelism) means maintaining the same grammatical pattern across two or more coordinate words, phrases, or clauses in a series. This produces rhythmic beauty, clarity, and rhetorical weight in speech and composition.',
    whyItMatters: 'Parallel syntax is the hallmark of great British prose, used by William Shakespeare, Jane Austen, and Winston Churchill to craft memorable rhetoric.',
    sections: [
      {
        id: 'sec-parallelism-rules',
        title: '1. Maintaining Grammatical Symmetry',
        content: 'All coordinated elements in a list, pair, or comparison must share the exact same grammatical shape:',
        bulletPoints: [
          '**Faulty & Jarring (Unbalanced):** *The visitor enjoyed **hiking** along the coast, **to tour** the historic castle, and **a taste of** local cider.*',
          '**Parallel & Elegant (Balanced Gerunds):** *The visitor enjoyed **hiking** along the coast, **touring** the historic castle, and **tasting** local cider.*',
          '**Parallel Infinitives:** *The council resolved **to defend** their borough, **to protect** green spaces, and **to preserve** their civic heritage.*',
          '**Rhetorical Parallelism in British History (Winston Churchill, 1940):** *"We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets..."*'
        ],
        examples: [
          {
            id: 'ex-l5-ps1',
            sentence: 'The national park trust aims **to restore** ancient oak woodlands, **to protect** peat bogs, and **to reintroduce** native British species.',
            highlightWords: ['to restore', 'to protect', 'to reintroduce'],
            explanation: 'Balanced infinitive verbs ("to restore", "to protect", "to reintroduce") create persuasive rhetorical symmetry.',
            contextNote: 'National nature reserve manifesto'
          },
          {
            id: 'ex-l5-ps2',
            sentence: 'The cultural festival was praised for its **vibrant brass fanfares**, its **dynamic theatrical staging**, and its **mesmerising choral performances**.',
            highlightWords: ['vibrant brass fanfares', 'dynamic theatrical staging', 'mesmerising choral performances'],
            explanation: 'Each element in the tricolon follows the identical pattern: [adjective + noun phrase].',
            contextNote: 'Arts festival review'
          },
          {
            id: 'ex-l5-ps3',
            sentence: 'Jane Austen composed novels that were **deeply observant**, **wittily satirical**, and **brilliantly insightful** regarding society.',
            highlightWords: ['deeply observant', 'wittily satirical', 'brilliantly insightful'],
            explanation: 'Parallel construction: [adverb of degree + descriptive adjective].',
            contextNote: 'Literary appraisal of Jane Austen'
          }
        ],
        ruleSummary: 'Parallel elements must match in grammatical form (all gerunds, all infinitives, or all matching noun phrases).'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l5-ps1',
        title: 'The Tricolon / Rule of Three',
        trick: 'In British rhetoric, grouping three parallel phrases together (a tricolon) produces the most compelling psychological resonance for an audience.',
        mnemonic: 'Match the pattern across all three parts!',
        commonMistake: 'Switching from an "-ing" word to a "to [verb]" phrase halfway through a series.',
        correctWay: 'Keep all verbs in the exact same format throughout the entire series.',
        explanation: 'Maintains syntactic momentum and avoids awkward cadence.'
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
          'The tour guide instructed us to stay together, walking quietly, and don\'t touch artifacts.',
          'The tour guide instructed us to stay together, to walk quietly, and not to touch artifacts.',
          'The tour guide instructed us to stay together, walk quiet, and no touching.',
          'The tour guide instructed us staying together, to walk quietly, and do not touch.'
        ],
        correctIndex: 1,
        explanation: '**The tour guide instructed us to stay together, to walk quietly, and not to touch artifacts.** maintains parallel infinitive verbs throughout.'
      }
    
    ,
      {
        id: 'gen-para-1',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Identify the word that breaks the parallel structure.',
        instruction: 'Click the word that disrupts the pattern.',
        sentenceWithMistake: 'She likes hiking, swimming, and to ride her bicycle.',
        words: ['She', 'likes', 'hiking,', 'swimming,', 'and', 'to', 'ride', 'her', 'bicycle.'],
        errorWordIndex: 5,
        correctedWord: 'riding',
        ruleViolated: 'Grammar Rule',
        explanation: 'To maintain parallel structure, the items in the list should all be in the same form (gerunds: hiking, swimming, riding).'
      }
    ,
      {
        id: 'gen2-para-1',
        type: 'multiple-choice',
        difficultyStep: 5,
        prompt: 'Which sentence demonstrates flawless parallel structure?',
        instruction: 'Choose the sentence where all list items share the same grammatical form.',
        options: [
          'The manager asked the team to prepare the report, to review the data, and presenting the findings.',
          'The manager asked the team to prepare the report, review the data, and present the findings.',
          'The manager asked the team preparing the report, to review the data, and present the findings.',
          'The manager asked the team to prepare the report, reviewed the data, and present the findings.'
        ],
        correctIndex: 1,
        explanation: 'All three verbs are in the base form (infinitive without "to" repeated): prepare, review, present. This creates a perfect parallel structure.'
    }
    ]
  }
];

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
    overview: '**Nominalisation** is the grammatical process of converting verbs (actions) or adjectives (qualities) into abstract nouns (for example: *discover -> discovery*, *reconstruct -> reconstruction*, *resilient -> resilience*). It is the cornerstone of academic, scientific, historical, and formal essay writing in British GCSEs and Scottish Highers.',
    whyItMatters: 'Nominalisation condenses clauses, removes informal personal pronouns, and creates an objective, academic tone.',
    sections: [
      {
        id: 'sec-nominalisation-examples',
        title: '1. Converting Actions to Concepts',
        content: 'Observe how nominalisation elevates everyday narrative into formal academic discourse:',
        bulletPoints: [
          '**Informal Narrative (Verbal):** *Because the Scottish clans gathered at Bannockburn, they defended their nation bravely.*',
          '**Academic Prose (Nominalised):** *The **mobilisation** of the Scottish clans at Bannockburn ensured the **preservation** of national sovereignty.*',
          '**Common Suffixes for Nominalisation:** *-tion, -sion, -ment, -ance, -ity, -ness, -ence* (for example: *restore -> restoration of Stirling Castle; establish -> establishment of the Scottish Parliament; expand -> expansion of Edinburgh*).'
        ],
        examples: [
          {
            id: 'ex-l5-nom1',
            sentence: 'The **restoration** of Eilean Donan Castle in the twentieth century transformed the fortress into a global symbol of Scottish heritage.',
            highlightWords: ['restoration'],
            explanation: 'The abstract noun "restoration" (from the verb *restore*) creates authoritative historical conciseness.',
            contextNote: 'Scottish historical architecture'
          },
          {
            id: 'ex-l5-nom2',
            sentence: 'The successful **reintroduction** of the beaver and red kite to the Scottish Highlands represents a triumph for ecological **conservation**.',
            highlightWords: ['reintroduction', 'conservation'],
            explanation: 'Abstract nouns replace wordy clauses like *"when rangers reintroduced beavers and conserved habitats"*.',
            contextNote: 'Highland biodiversity report'
          },
          {
            id: 'ex-l5-nom3',
            sentence: 'The **completion** of the Caledonian Canal in 1822 enabled the **navigation** of inland waterways across the Great Glen.',
            highlightWords: ['completion', 'navigation'],
            explanation: 'Nominalised nouns provide dense, objective historical framing.',
            contextNote: 'Scottish civil engineering'
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
        sentence: 'The rapid industrialisation of Glasgow caused significant migration from the Highlands.',
        words: ['The', 'rapid', 'industrialisation', 'of', 'Glasgow', 'caused', 'significant', 'migration', 'from', 'Highlands.'],
        targetIndices: [2, 7],
        targetCategoryLabel: 'Nominalised Noun',
        explanation: '**Industrialisation** (from industrialise) and **migration** (from migrate) are nominalised nouns.'
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
    overview: 'A **participle phrase** begins with a present participle (*-ing*) or past participle (*-ed / -en*) and acts as an adjective modifying a noun. A **dangling modifier** occurs when the noun being described is missing or placed too far away, creating unintentional comedy (for example: *"Walking through the Scottish glen, the mountains looked magnificent"* implies the mountains were walking through the glen!).',
    whyItMatters: 'Dangling modifiers are one of the most penalised syntactic errors in GCSE and A-Level essays.',
    sections: [
      {
        id: 'sec-dangling-modifiers-rules',
        title: '1. The Dangling Modifier Hazard',
        content: 'The subject performing the action of an introductory participle phrase MUST be the very first noun placed directly after the comma:',
        bulletPoints: [
          '**Error (Dangling participle):** *Trekking across the Cairngorms, the snow-capped peaks looked magnificent.* (Did the peaks do the trekking? No!)',
          '**Corrected (Proper agent):** *Trekking across the Cairngorms, the **mountaineers** gazed at the magnificent peaks.*',
          '**Error (Misplaced modifier):** *Steeped in ancient legend, the tourist explored the ruined Scottish castle.* (Was the tourist steeped in legend, or was the castle?)',
          '**Corrected:** *Steeped in ancient legend, the **ruined Scottish castle** fascinated the tourist.*'
        ],
        examples: [
          {
            id: 'ex-l5-dm1',
            sentence: '**Gazing across the silver expanse of Loch Ness,** the ornithologist spotted a golden eagle dive for prey.',
            highlightWords: ['Gazing across the silver expanse of Loch Ness,', 'the ornithologist'],
            explanation: 'Correct syntax: "the ornithologist" immediately follows the comma as the person doing the gazing.',
            contextNote: 'Highland birdwatching'
          },
          {
            id: 'ex-l5-dm2',
            sentence: '**Dressed in the traditional Royal Stewart tartan,** the piper led the parade down Edinburgh\'s Royal Mile.',
            highlightWords: ['Dressed in the traditional Royal Stewart tartan,', 'the piper'],
            explanation: '"The piper" is the person wearing the tartan, placed directly adjacent to the introductory participle phrase.',
            contextNote: 'Edinburgh ceremonial procession'
          },
          {
            id: 'ex-l5-dm3',
            sentence: '**Braving the bitter Atlantic squalls,** the ferry crew docked the vessel safely at Stornoway harbour.',
            highlightWords: ['Braving the bitter Atlantic squalls,', 'the ferry crew'],
            explanation: '"The ferry crew" performs the courageous action of braving the squalls, correctly positioned right after the comma.',
            contextNote: 'Hebridean maritime transport'
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
          'Climbing Ben Nevis, our water bottle was dropped into the ravine.',
          'Climbing Ben Nevis, we dropped our water bottle into the ravine.',
          'Climbing Ben Nevis, the ravine caught our water bottle.',
          'Climbing Ben Nevis, our boots became muddy.'
        ],
        correctIndex: 1,
        explanation: '**Climbing Ben Nevis, we dropped our water bottle into the ravine.** is correct because "we" were the ones doing the climbing.'
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
          '**Zero Conditional (Universal Truths & Scientific Laws):** (for example: *If winter temperatures plunge across the Cairngorms, mountain lochs **freeze** solid.* [If + Present Simple, Present Simple])',
          '**First Conditional (Real & Probable Future Scenarios):** (for example: *If the ferry leaves Oban on schedule, we **will arrive** on the Isle of Mull by noon.* [If + Present Simple, will + base])',
          '**Second Conditional (Unreal Present & Hypothetical Dreams):** (for example: *If I owned an ancient Scottish estate, I **would establish** a sanctuary for red squirrels.* [If + Past Simple, would + base])',
          '**Third Conditional (Unreal Past Counterfactual & Regrets):** (for example: *If Bonnie Prince Charlie **had chosen** higher ground, the Battle of Culloden might have unfolded differently.* [If + Past Perfect, would have + past participle])',
          '**Mixed Conditional (Past cause with present consequence):** (for example: *If Victorian engineers **had not constructed** the Forth Rail Bridge in 1890, Edinburgh and Fife **would still be** severed by water today.*)'
        ],
        examples: [
          {
            id: 'ex-l5-cd1',
            sentence: 'If the Scottish mountain rescue team **had not acted** with such swiftness, the lost climbers **would have succumbed** to hypothermia.',
            highlightWords: ['had not acted', 'would have succumbed'],
            explanation: 'Third conditional expressing a past counterfactual: Past Perfect ("had not acted") + Modal Perfect ("would have succumbed").',
            contextNote: 'Highland rescue emergency'
          },
          {
            id: 'ex-l5-cd2',
            sentence: 'If ocean winds **exceed** fifty knots, the Pentland Firth ferry operators **suspend** all departures.',
            highlightWords: ['exceed', 'suspend'],
            explanation: 'Zero conditional representing standard maritime policy using Present Simple in both clauses.',
            contextNote: 'Scottish maritime safety'
          },
          {
            id: 'ex-l5-cd3',
            sentence: 'If you **visit** Edinburgh during August, you **will witness** performances from artists around the globe.',
            highlightWords: ['visit', 'will witness'],
            explanation: 'First conditional predicting a real, likely future event during the Edinburgh Festival Fringe.',
            contextNote: 'Edinburgh international festival'
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
        commonMistake: 'Saying *"If I would of visited Edinburgh, I would have seen the castle"*.',
        correctWay: 'Write *"If I **had visited** Edinburgh, I would have seen the castle."*',
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
          'If it rains in Glasgow, the river swells.',
          'If you train hard, you will toss the caber.',
          'If I were the clan chief, I would host a great ceilidh.',
          'If the piper had tuned his chanter earlier, the harmony would have been flawless.'
        ],
        correctIndex: 3,
        explanation: '**If the piper had tuned his chanter earlier, the harmony would have been flawless.** uses "had tuned" (past perfect) and "would have been" (modal perfect).'
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
    whyItMatters: 'Parallel syntax is the hallmark of great British prose, used by Robert Burns, Walter Scott, and Winston Churchill to craft memorable rhetoric.',
    sections: [
      {
        id: 'sec-parallelism-rules',
        title: '1. Maintaining Grammatical Symmetry',
        content: 'All coordinated elements in a list, pair, or comparison must share the exact same grammatical shape:',
        bulletPoints: [
          '**Faulty & Jarring (Unbalanced):** *The visitor enjoyed **hiking** in the Highlands, **to tour** Stirling Castle, and **a taste of** fresh shortbread.*',
          '**Parallel & Elegant (Balanced Gerunds):** *The visitor enjoyed **hiking** in the Highlands, **touring** Stirling Castle, and **tasting** fresh shortbread.*',
          '**Parallel Infinitives:** *The clan chief resolved **to defend** their glen, **to protect** their families, and **to preserve** their ancient traditions.*',
          '**Rhetorical Parallelism in Scottish History (The Declaration of Arbroath, 1320):** *"It is in truth not for glory, nor riches, nor honours that we are fighting, but for freedom alone..."*'
        ],
        examples: [
          {
            id: 'ex-l5-ps1',
            sentence: 'The Highland conservation project aims **to restore** native Caledonian pinewoods, **to rewild** historical glens, and **to protect** indigenous Scottish wildlife.',
            highlightWords: ['to restore', 'to rewild', 'to protect'],
            explanation: 'Balanced infinitive verbs ("to restore", "to rewild", "to protect") create persuasive rhetorical symmetry.',
            contextNote: 'Cairngorms National Park manifesto'
          },
          {
            id: 'ex-l5-ps2',
            sentence: 'The Braemar gathering was praised for its **formidable caber tosses**, its **electrifying bagpipe fanfares**, and its **graceful Highland dancing**.',
            highlightWords: ['formidable caber tosses', 'electrifying bagpipe fanfares', 'graceful Highland dancing'],
            explanation: 'Each element in the tricolon follows the identical pattern: [adjective + noun phrase].',
            contextNote: 'Highland Games review'
          },
          {
            id: 'ex-l5-ps3',
            sentence: 'Robert Burns composed poems that were **deeply romantic**, **fiercely patriotic**, and **richly observant** of everyday Scottish life.',
            highlightWords: ['deeply romantic', 'fiercely patriotic', 'richly observant'],
            explanation: 'Parallel construction: [adverb of degree + descriptive adjective].',
            contextNote: 'Literary appraisal of Robert Burns'
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
          'The Scottish guide instructed us to stay together, walking quietly, and don\'t touch artifacts.',
          'The Scottish guide instructed us to stay together, to walk quietly, and not to touch artifacts.',
          'The Scottish guide instructed us to stay together, walk quiet, and no touching.',
          'The Scottish guide instructed us staying together, to walk quietly, and do not touch.'
        ],
        correctIndex: 1,
        explanation: '**The Scottish guide instructed us to stay together, to walk quietly, and not to touch artifacts.** maintains parallel infinitive verbs throughout.'
      }
    ]
  }
];

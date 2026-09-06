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
        explanation: '✔ **Conclusion** is the nominalised noun form derived from the verb "conclude".'
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
        explanation: '✔ **Industrialisation** (from industrialise) and **migration** (from migrate) are nominalised nouns.'
      },
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
        explanation: '✔ **The quick discovery of the cure** turns the verb "discovered" into the noun "discovery".'
      },
      {
        id: 'gen2-nom-1',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Build the sentence using nominalisation for an academic tone.',
        instruction: 'Arrange the words to form a noun-heavy, formal sentence.',
        scrambledWords: ['The', 'implementation', 'of', 'the', 'policy', 'caused', 'widespread', 'debate.'],
        correctSentence: 'The implementation of the policy caused widespread debate.',
        explanation: '✔ "The implementation of the policy" turns "implement" into a nominalised noun.'
      },
      {
        id: 'ex-nom-5',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'What is the nominalised noun for the adjective "resilient"?',
        instruction: 'Select the abstract noun.',
        options: ['resilience', 'resiliently', 'resilience', 'resisting'],
        correctIndex: 0,
        explanation: '✔ **Resilience** is the abstract noun created from the adjective "resilient".'
      },
      {
        id: 'ex-nom-6',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the NOMINALISED NOUN in this historical summary.',
        instruction: 'Click the nominalised noun.',
        sentence: 'The expansion of the railway network transformed Victorian trade.',
        words: ['The', 'expansion', 'of', 'the', 'railway', 'network', 'transformed', 'Victorian', 'trade.'],
        targetIndices: [1],
        targetCategoryLabel: 'Nominalised Noun',
        explanation: '✔ **expansion** (from expand) is the nominalised noun.'
      },
      {
        id: 'ex-nom-7',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Find the informal verbal phrase that should be nominalised for a GCSE essay.',
        instruction: 'Click the informal verb clause.',
        sentenceWithMistake: 'When the government decided to act quickly saved the economy.',
        words: ['When', 'the', 'government', 'decided', 'to', 'act', 'quickly', 'saved', 'the', 'economy.'],
        errorWordIndex: 3,
        correctedWord: 'decision',
        ruleViolated: 'Nominalise "decided" to "decision" for academic register',
        explanation: '✔ Replace "When the government decided" with "The government\'s **decision**".'
      },
      {
        id: 'ex-nom-8',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Reconstruct an academic sentence using "restoration".',
        instruction: 'Arrange the words.',
        scrambledWords: ['The', 'restoration', 'of', 'the', 'cathedral', 'took', 'twenty', 'years.'],
        correctSentence: 'The restoration of the cathedral took twenty years.',
        explanation: '✔ "The restoration of the cathedral" uses the nominalised noun "restoration".'
      },
      {
        id: 'ex-nom-9',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which suffix is NOT typically used for nominalisation?',
        instruction: 'Identify the non-nominalising suffix.',
        options: ['-fully', '-tion', '-ment', '-ity'],
        correctIndex: 0,
        explanation: '✔ **-fully** forms adverbs, not nominalised abstract nouns.'
      },
      {
        id: 'ex-nom-10',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Tap on the NOMINALISED NOUN derived from "establish".',
        instruction: 'Click the nominalised noun.',
        sentence: 'The establishment of the National Health Service in 1948 was a milestone.',
        words: ['The', 'establishment', 'of', 'the', 'National', 'Health', 'Service', 'in', '1948', 'was', 'a', 'milestone.'],
        targetIndices: [1],
        targetCategoryLabel: 'Nominalised Noun',
        explanation: '✔ **establishment** is nominalised from the verb "establish".'
      },
      {
        id: 'ex-nom-11',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'How does nominalisation affect tone in analytical writing?',
        instruction: 'Select the primary stylistic effect.',
        options: [
          'It creates an authoritative, objective, and dense academic register.',
          'It makes the writing sound like a fairy tale.',
          'It shortens sentences to single words.',
          'It replaces all verbs with slang.'
        ],
        correctIndex: 0,
        explanation: '✔ Nominalisation elevates register by focusing on concepts rather than actors.'
      },
      {
        id: 'ex-nom-12',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Identify the wordy informal verb that can be nominalised to "destruction".',
        instruction: 'Click the verb phrase.',
        sentenceWithMistake: 'The enemy destroyed the city completely in 1066.',
        words: ['The', 'enemy', 'destroyed', 'the', 'city', 'completely', 'in', '1066.'],
        errorWordIndex: 2,
        correctedWord: 'destruction of',
        ruleViolated: 'Nominalise "destroyed" into "destruction"',
        explanation: '✔ Academic form: "The complete **destruction** of the city..."'
      },
      {
        id: 'ex-nom-13',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Build a sentence with "preservation".',
        instruction: 'Assemble the sentence.',
        scrambledWords: ['Wildlife', 'preservation', 'requires', 'international', 'cooperation.'],
        correctSentence: 'Wildlife preservation requires international cooperation.',
        explanation: '✔ "Wildlife preservation" uses nominalised noun "preservation".'
      },
      {
        id: 'ex-nom-14',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Which sentence demonstrates the most effective use of nominalisation?',
        instruction: 'Select the academic sentence.',
        options: [
          'The reduction of carbon emissions remains crucial for environmental stability.',
          'Because factories reduced carbon emissions, the environment got stable.',
          'People reducing emissions will make stuff stable.',
          'We must reduce emissions so stability happens.'
        ],
        correctIndex: 0,
        explanation: '✔ "The reduction of carbon emissions..." uses academic nominalisation.'
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
        explanation: '✔ **Climbing Scafell Pike, we dropped our water bottle...** is correct because "we" were doing the climbing.'
      },
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
        explanation: '✔ In "Exhausted from the marathon, she collapsed on the sofa", the phrase correctly modifies "she".'
      },
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
        ruleViolated: 'Subject following comma must be the doer of "Looking"',
        explanation: '✔ The mountains were not looking out the window. A human subject is required after the comma.'
      },
      {
        id: 'ex-dm-4',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Fix this dangling modifier: "Driving through Snowdonia, the scenery was breathtaking."',
        instruction: 'Select the logically sound correction.',
        options: [
          'Driving through Snowdonia, we admired the breathtaking scenery.',
          'Driving through Snowdonia, the car admired the scenery.',
          'Driving through Snowdonia, breathtaking was the scenery.',
          'Driving through Snowdonia, the mountains drove the car.'
        ],
        correctIndex: 0,
        explanation: '✔ "we" immediately follows the comma as the agent doing the driving.'
      },
      {
        id: 'ex-dm-5',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the INTRODUCTORY PARTICIPLE PHRASE in this sentence.',
        instruction: 'Click the opening modifier.',
        sentence: 'Having finished the research, the student closed her laptop.',
        words: ['Having', 'finished', 'the', 'research,', 'the', 'student', 'closed', 'her', 'laptop.'],
        targetIndices: [0, 1, 2, 3],
        targetCategoryLabel: 'Participle Phrase',
        explanation: '✔ **Having finished the research,** is the introductory perfect participle phrase.'
      },
      {
        id: 'ex-dm-6',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Spot the dangling modifier where an inanimate object follows the action.',
        instruction: 'Click the incorrect subject after the comma.',
        sentenceWithMistake: 'Walking into the museum, the ancient sword caught my eye.',
        words: ['Walking', 'into', 'the', 'museum,', 'the', 'ancient', 'sword', 'caught', 'my', 'eye.'],
        errorWordIndex: 5,
        correctedWord: 'I noticed the ancient sword',
        ruleViolated: 'Subject after comma must be the person walking',
        explanation: '✔ The sword was not walking into the museum. The human "I" should follow the comma.'
      },
      {
        id: 'ex-dm-7',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Construct a correct sentence starting with a participle phrase.',
        instruction: 'Order the words so the doer follows the comma.',
        scrambledWords: ['Glancing', 'at', 'the', 'map,', 'the', 'hiker', 'found', 'the', 'trail.'],
        correctSentence: 'Glancing at the map, the hiker found the trail.',
        explanation: '✔ "the hiker" (doer) directly follows "Glancing at the map,".'
      },
      {
        id: 'ex-dm-8',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'What makes a modifier "dangling"?',
        instruction: 'Select the structural definition.',
        options: [
          'When the noun intended to be modified is omitted or logically separated from the modifier.',
          'When a sentence has no full stop.',
          'When an adjective is capitalized.',
          'When a sentence contains two verbs.'
        ],
        correctIndex: 0,
        explanation: '✔ A modifier dangles when its target noun is missing or misplaced.'
      },
      {
        id: 'ex-dm-9',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Tap on the NOUN modified by "Built in the seventeenth century".',
        instruction: 'Click the modified noun.',
        sentence: 'Built in the seventeenth century, the manor house overlooks the valley.',
        words: ['Built', 'in', 'the', 'seventeenth', 'century,', 'the', 'manor', 'house', 'overlooks', 'the', 'valley.'],
        targetIndices: [6, 7],
        targetCategoryLabel: 'Modified Noun',
        explanation: '✔ **manor house** is the structure built in the seventeenth century.'
      },
      {
        id: 'ex-dm-10',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Which sentence contains a MISPLACED modifier?',
        instruction: 'Identify the sentence with ambiguous placement.',
        options: [
          'The professor served tea to the students in porcelain cups.',
          'Covered in icing, the baker decorated the cake.',
          'Running quickly, the dog caught the ball.',
          'Written in Latin, the manuscript was hard to decipher.'
        ],
        correctIndex: 1,
        explanation: '✔ "Covered in icing, the baker decorated..." implies the baker was covered in icing!'
      },
      {
        id: 'ex-dm-11',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Identify the dangling participle error.',
        instruction: 'Click the noun incorrectly modified.',
        sentenceWithMistake: 'Sailing across the Atlantic, the land was finally sighted.',
        words: ['Sailing', 'across', 'the', 'Atlantic,', 'the', 'land', 'was', 'finally', 'sighted.'],
        errorWordIndex: 5,
        correctedWord: 'the sailors sighted land',
        ruleViolated: 'Land cannot sail across the Atlantic',
        explanation: '✔ "land" cannot sail. Correct to "the sailors sighted land".'
      },
      {
        id: 'ex-dm-12',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Arrange words into a logically flawless sentence with an opening modifier.',
        instruction: 'Order the words.',
        scrambledWords: ['Soaring', 'above', 'the', 'cliffs,', 'the', 'eagle', 'spotted', 'its', 'prey.'],
        correctSentence: 'Soaring above the cliffs, the eagle spotted its prey.',
        explanation: '✔ "the eagle" is the creature soaring above the cliffs.'
      },
      {
        id: 'ex-dm-13',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Choose the correct sentence to replace: "To pass the exam, hard study is required."',
        instruction: 'Select the sentence with a clear agent.',
        options: [
          'To pass the exam, you must study hard.',
          'To pass the exam, the books must be read.',
          'To pass the exam, high marks are needed.',
          'To pass the exam, questions are answered.'
        ],
        correctIndex: 0,
        explanation: '✔ "you" is the agent who must study to pass the exam.'
      },
      {
        id: 'ex-dm-14',
        type: 'word-clicker',
        difficultyStep: 5,
        prompt: 'Tap on the CORRECT AGENT following the introductory participle phrase.',
        instruction: 'Click the agent noun.',
        sentence: 'Surrounded by ancient oaks, the secluded cottage provided total peace.',
        words: ['Surrounded', 'by', 'ancient', 'oaks,', 'the', 'secluded', 'cottage', 'provided', 'total', 'peace.'],
        targetIndices: [5, 6],
        targetCategoryLabel: 'Correct Agent Noun',
        explanation: '✔ **secluded cottage** is the entity surrounded by ancient oaks.'
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
        explanation: '✔ **If the organist had tuned... would have been...** uses Past Perfect + Modal Perfect.'
      },
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
        explanation: '✔ Third conditional requires "if + past perfect" and "would have + past participle".'
      },
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
        explanation: '✔ Mixed conditional: unreal past condition ("had invested") + unreal present result ("would be rich").'
      },
      {
        id: 'ex-cd-4',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Which conditional type expresses scientific facts or general truths (e.g. "If water freezes, it turns to ice")?',
        instruction: 'Select the conditional tier.',
        options: ['Zero Conditional', 'First Conditional', 'Second Conditional', 'Third Conditional'],
        correctIndex: 0,
        explanation: '✔ **Zero Conditional** uses Present Simple in both clauses for universal truths.'
      },
      {
        id: 'ex-cd-5',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the CONDITIONAL CONJUNCTION introducing the condition clause.',
        instruction: 'Click the conditional connective.',
        sentence: 'Unless the rain stops soon, the cricket match will be postponed.',
        words: ['Unless', 'the', 'rain', 'stops', 'soon,', 'the', 'cricket', 'match', 'will', 'be', 'postponed.'],
        targetIndices: [0],
        targetCategoryLabel: 'Conditional Conjunction',
        explanation: '✔ **Unless** introduces the conditional clause (meaning "if not").'
      },
      {
        id: 'ex-cd-6',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Spot the incorrect use of "would" in the "if" clause.',
        instruction: 'Click the erroneous "would".',
        sentenceWithMistake: 'If I would have known about the traffic, I would have taken the train.',
        words: ['If', 'I', 'would', 'have', 'known', 'about', 'the', 'traffic,', 'I', 'would', 'have', 'taken', 'the', 'train.'],
        errorWordIndex: 2,
        correctedWord: 'had',
        ruleViolated: 'Do not use "would" inside the if-clause of third conditionals',
        explanation: '✔ Correct to: "If I **had** known about the traffic..." (never "would have known" in the if-clause).'
      },
      {
        id: 'ex-cd-7',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Construct a SECOND CONDITIONAL sentence expressing a hypothetical present scenario.',
        instruction: 'Order the words.',
        scrambledWords: ['If', 'I', 'won', 'the', 'lottery,', 'I', 'would', 'buy', 'a', 'castle.'],
        correctSentence: 'If I won the lottery, I would buy a castle.',
        explanation: '✔ "If + Past Simple, would + base verb" forms the second conditional.'
      },
      {
        id: 'ex-cd-8',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Complete the FIRST CONDITIONAL: "If the train ___ on time, we will reach London by noon."',
        instruction: 'Select the present simple verb.',
        options: ['arrives', 'will arrive', 'arrived', 'had arrived'],
        correctIndex: 0,
        explanation: '✔ First conditional uses Present Simple in the if-clause: "If the train **arrives**...".'
      },
      {
        id: 'ex-cd-9',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Tap on the MODAL VERB + HAVE + PAST PARTICIPLE forming the third conditional result clause.',
        instruction: 'Click the modal perfect verb phrase.',
        sentence: 'If we had left earlier, we would have caught the ferry.',
        words: ['If', 'we', 'had', 'left', 'earlier,', 'we', 'would', 'have', 'caught', 'the', 'ferry.'],
        targetIndices: [6, 7, 8],
        targetCategoryLabel: 'Modal Perfect Result',
        explanation: '✔ **would have caught** forms the third conditional result.'
      },
      {
        id: 'ex-cd-10',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'What is a MIXED CONDITIONAL sentence?',
        instruction: 'Select the definition.',
        options: [
          'A sentence combining a past condition with a present result (or vice versa).',
          'A sentence with three "if" clauses.',
          'A conditional sentence written in passive voice.',
          'A sentence with no verbs.'
        ],
        correctIndex: 0,
        explanation: '✔ Mixed conditionals link different time frames (e.g. past cause -> present effect).'
      },
      {
        id: 'ex-cd-11',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Identify the spoken English error "would of" in this third conditional.',
        instruction: 'Click "of" which should be "have".',
        sentenceWithMistake: 'She would of passed the test if she had revised.',
        words: ['She', 'would', 'of', 'passed', 'the', 'test', 'if', 'she', 'had', 'revised.'],
        errorWordIndex: 2,
        correctedWord: 'have',
        ruleViolated: 'Use "would have", never "would of"',
        explanation: '✔ Write **would have**, never the illiterate spoken contraction "would of".'
      },
      {
        id: 'ex-cd-12',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Reconstruct a third conditional counterfactual sentence.',
        instruction: 'Arrange the scrambled words.',
        scrambledWords: ['If', 'they', 'had', 'listened,', 'they', 'would', 'have', 'avoided', 'the', 'trap.'],
        correctSentence: 'If they had listened, they would have avoided the trap.',
        explanation: '✔ Past perfect condition + modal perfect result.'
      },
      {
        id: 'ex-cd-13',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Choose the correct verb form: "Provided that the weather ___ clear, the launch will proceed."',
        instruction: 'Select the conditional verb.',
        options: ['remains', 'remained', 'would remain', 'had remained'],
        correctIndex: 0,
        explanation: '✔ "Provided that" functions like "if" in a first conditional sentence.'
      },
      {
        id: 'ex-cd-14',
        type: 'clause-matcher',
        difficultyStep: 5,
        prompt: 'Match the condition and result clauses in this second conditional.',
        instruction: 'Identify main and subordinate clauses.',
        sentence: 'If I lived near the sea, I would swim every morning.',
        mainClause: 'I would swim every morning',
        subordinateClause: 'If I lived near the sea',
        conjunctionOrConnective: 'If',
        explanation: '✔ "If I lived near the sea" is the hypothetical condition clause.'
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
        explanation: '✔ **...to stay together, to walk quietly, and not to touch...** maintains parallel infinitives.'
      },
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
        ruleViolated: 'Maintain matching gerund forms (riding, not to ride)',
        explanation: '✔ Change "to ride" to **riding** so all items are gerunds.'
      },
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
        explanation: '✔ All three verbs use the base infinitive form: prepare, review, present.'
      },
      {
        id: 'ex-ps-4',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'What is a "tricolon" in rhetoric?',
        instruction: 'Select the definition.',
        options: [
          'A series of three parallel words, phrases, or clauses.',
          'A sentence with three colons.',
          'A punctuation mark made of three dots.',
          'A paragraph with three sentences.'
        ],
        correctIndex: 0,
        explanation: '✔ A tricolon is a rhetorical grouping of three parallel syntactical units.'
      },
      {
        id: 'ex-ps-5',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the word that FAILS parallel alignment in: "He enjoys reading, writing, and to cook."',
        instruction: 'Click the non-parallel verb phrase.',
        sentence: 'He enjoys reading, writing, and to cook.',
        words: ['He', 'enjoys', 'reading,', 'writing,', 'and', 'to', 'cook.'],
        targetIndices: [5, 6],
        targetCategoryLabel: 'Non-Parallel Infinitive',
        explanation: '✔ **to cook** breaks the gerund pattern (reading, writing, cooking).'
      },
      {
        id: 'ex-ps-6',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Construct a parallel sentence using three gerunds.',
        instruction: 'Arrange the words.',
        scrambledWords: ['She', 'excelled', 'at', 'swimming,', 'running,', 'and', 'cycling.'],
        correctSentence: 'She excelled at swimming, running, and cycling.',
        explanation: '✔ "swimming, running, and cycling" maintains parallel gerunds.'
      },
      {
        id: 'ex-ps-7',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which famous British speech quote illustrates rhetorical parallelism?',
        instruction: 'Select the quote.',
        options: [
          'We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields...',
          'To be or not to be, that is the question.',
          'It was the best of times, it was the worst of times.',
          'All of the above demonstrate parallelism.'
        ],
        correctIndex: 3,
        explanation: '✔ All three famous quotes rely heavily on structural parallelism.'
      },
      {
        id: 'ex-ps-8',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Identify the adjective that breaks noun parallelism.',
        instruction: 'Click the mismatched word in the list.',
        sentenceWithMistake: 'The athlete valued endurance, strength, and being fast.',
        words: ['The', 'athlete', 'valued', 'endurance,', 'strength,', 'and', 'being', 'fast.'],
        errorWordIndex: 6,
        correctedWord: 'speed',
        ruleViolated: 'Match abstract nouns (endurance, strength, speed)',
        explanation: '✔ Change "being fast" to abstract noun **speed**.'
      },
      {
        id: 'ex-ps-9',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Tap on the THREE PARALLEL INFINITIVES in this sentence.',
        instruction: 'Click the three infinitives.',
        sentence: 'The government promised to reduce taxes, to create jobs, and to build schools.',
        words: ['The', 'government', 'promised', 'to', 'reduce', 'taxes,', 'to', 'create', 'jobs,', 'and', 'to', 'build', 'schools.'],
        targetIndices: [3, 4, 6, 7, 10, 11],
        targetCategoryLabel: 'Parallel Infinitives',
        explanation: '✔ **to reduce, to create, to build** are parallel infinitives.'
      },
      {
        id: 'ex-ps-10',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'How does parallel structure improve prose quality?',
        instruction: 'Select the primary benefits.',
        options: [
          'It enhances readability, rhythmic flow, and persuasive impact.',
          'It makes every sentence twice as long.',
          'It removes the need for capital letters.',
          'It replaces punctuation with spaces.'
        ],
        correctIndex: 0,
        explanation: '✔ Parallelism builds syntactical rhythm and structural clarity.'
      },
      {
        id: 'ex-ps-11',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Fix the non-parallel verb in this comparison: "She prefers working in a team to solve problems alone."',
        instruction: 'Click the non-parallel verb form.',
        sentenceWithMistake: 'She prefers working in a team to solve problems alone.',
        words: ['She', 'prefers', 'working', 'in', 'a', 'team', 'to', 'solve', 'problems', 'alone.'],
        errorWordIndex: 7,
        correctedWord: 'solving',
        ruleViolated: 'Comparison "prefers X to Y" requires matching forms (working... to solving...)',
        explanation: '✔ Parallel structure: "prefers **working**... to **solving**...".'
      },
      {
        id: 'ex-ps-12',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Build a sentence with three parallel adjective-noun pairs.',
        instruction: 'Order the words.',
        scrambledWords: ['We', 'admired', 'her', 'keen', 'mind,', 'warm', 'heart,', 'and', 'noble', 'spirit.'],
        correctSentence: 'We admired her keen mind, warm heart, and noble spirit.',
        explanation: '✔ [keen mind], [warm heart], [noble spirit] share identical syntax.'
      },
      {
        id: 'ex-ps-13',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Which sentence maintains parallel structure with correlative conjunctions ("not only... but also")?',
        instruction: 'Select the balanced sentence.',
        options: [
          'The campaign was not only creative but also effective.',
          'The campaign was not only creative but also worked effectively.',
          'Not only was the campaign creative, but also effective.',
          'The campaign not only was creative but effective also.'
        ],
        correctIndex: 0,
        explanation: '✔ "not only [adjective] but also [adjective]" is perfectly parallel.'
      },
      {
        id: 'ex-ps-14',
        type: 'word-clicker',
        difficultyStep: 5,
        prompt: 'Tap on the ADVERBS forming parallel structure in: "He spoke clearly, passionately, and persuasively."',
        instruction: 'Click the three parallel adverbs.',
        sentence: 'He spoke clearly, passionately, and persuasively.',
        words: ['He', 'spoke', 'clearly,', 'passionately,', 'and', 'persuasively.'],
        targetIndices: [2, 3, 5],
        targetCategoryLabel: 'Parallel Adverbs',
        explanation: '✔ **clearly, passionately, persuasively** are three parallel adverbs.'
      }
    ]
  },
  {
    id: 'l5-final-assessment',
    slug: 'level-5-final-assessment',
    title: 'Level 5 Final Assessment: GCSE & KS4 Grandmaster',
    subtitle: '50 master-level questions testing nominalisation, dangling modifiers, conditionals, and parallel structure.',
    level: 'level-5',
    levelLabel: 'Level 5: Master',
    levelStage: 'GCSE / Key Stage 4',
    ageGroup: 'Ages 14–16',
    category: 'advanced-syntax',
    categoryLabel: 'Advanced Syntax',
    iconName: 'Award',
    estimatedMinutes: 30,
    overview: 'This comprehensive **50-question Final Assessment** evaluates your grandmaster status across all Level 5 GCSE / Key Stage 4 topics: Nominalisation, Dangling & Misplaced Modifiers, Conditional Clauses, and Parallel Structure. Achieving a top score earns you the **GCSE Grammar Grandmaster Badge**.',
    whyItMatters: 'Mastery of these four advanced syntactic pillars unlocks top Grade 8/9 performance in GCSE English Language and English Literature.',
    sections: [
      {
        id: 'sec-l5-fa-overview',
        title: 'Level 5 Final Assessment Structure',
        content: 'You will solve 50 master-level questions covering all four topics:',
        bulletPoints: [
          '**Questions 1–12:** Nominalisation & Academic Register',
          '**Questions 13–25:** Participle Phrases & Dangling Modifiers',
          '**Questions 26–38:** Conditional Clauses (Zero, 1st, 2nd, 3rd & Mixed)',
          '**Questions 39–50:** Parallel Structure & Rhetorical Balance'
        ],
        examples: [
          {
            id: 'ex-l5-fa-demo',
            sentence: 'The **implementation** of sustainable policies ensured that if local councils **had acted** sooner, ecological **restoration** would be flourishing today.',
            highlightWords: ['implementation', 'had acted', 'restoration'],
            explanation: 'Demonstrates synthesis of nominalisation with mixed conditional syntax.',
            contextNote: 'GCSE Grandmaster Synthesis'
          }
        ],
        ruleSummary: 'Analyze syntax meticulously and apply the exact rules mastered in Level 5.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l5-fa-1',
        title: 'Grandmaster Exam Strategy',
        trick: '1) Look for abstract nouns (-tion, -ment) for nominalisation. 2) Check the first noun after commas for dangling modifiers. 3) Never put "would" in "if" clauses. 4) Ensure all list items share identical grammatical form!',
        mnemonic: 'Noun-Density -> Agent-Check -> No-Would-In-If -> Symmetry!',
        commonMistake: 'Misidentifying dangling modifiers by ignoring the noun directly following the comma.',
        correctWay: 'Always trace the introductory participle directly to the first noun after the comma.',
        explanation: 'Ensures 100% accuracy on advanced syntax assessments.'
      }
    ],
    exercises: [
      // TOPIC 1: Nominalisation (Q1-12)
      {
        id: 'l5-fa-q1',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Topic 1: Nominalisation • Question 1 of 50',
        instruction: 'What is the nominalised noun derived from the verb "analyze"?',
        options: ['analysis', 'analytical', 'analyzing', 'analytically'],
        correctIndex: 0,
        explanation: '✔ **Analysis** is the nominalised abstract noun.'
      },
      {
        id: 'l5-fa-q2',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Topic 1: Nominalisation • Question 2 of 50',
        instruction: 'Tap on the NOMINALISED NOUN in this sentence.',
        sentence: 'The investigation revealed several financial discrepancies.',
        words: ['The', 'investigation', 'revealed', 'several', 'financial', 'discrepancies.'],
        targetIndices: [1],
        targetCategoryLabel: 'Nominalised Noun',
        explanation: '✔ **investigation** (from investigate) is the nominalised noun.'
      },
      {
        id: 'l5-fa-q3',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Topic 1: Nominalisation • Question 3 of 50',
        instruction: 'Convert "They restored the ruined castle" into a nominalised noun phrase.',
        options: [
          'The restoration of the ruined castle',
          'Restoring the castle which was ruined',
          'They made a restoration',
          'When the castle was restored'
        ],
        correctIndex: 0,
        explanation: '✔ "The restoration of the ruined castle" is the nominalised noun phrase.'
      },
      {
        id: 'l5-fa-q4',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Topic 1: Nominalisation • Question 4 of 50',
        instruction: 'Click the verb that should be nominalised to "destruction" for academic register.',
        sentenceWithMistake: 'The storm destroyed the crops, causing famine.',
        words: ['The', 'storm', 'destroyed', 'the', 'crops,', 'causing', 'famine.'],
        errorWordIndex: 2,
        correctedWord: 'destruction of',
        ruleViolated: 'Nominalise "destroyed" into "destruction"',
        explanation: '✔ Academic register: "The **destruction** of the crops caused famine."'
      },
      {
        id: 'l5-fa-q5',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Topic 1: Nominalisation • Question 5 of 50',
        instruction: 'Build an academic sentence using nominalisation.',
        scrambledWords: ['The', 'completion', 'of', 'the', 'project', 'brought', 'relief.'],
        correctSentence: 'The completion of the project brought relief.',
        explanation: '✔ "The completion of the project" uses nominalised noun "completion".'
      },
      {
        id: 'l5-fa-q6',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Topic 1: Nominalisation • Question 6 of 50',
        instruction: 'Which suffix converts the adjective "resilient" into a nominalised noun?',
        options: ['-ence', '-ly', '-able', '-ish'],
        correctIndex: 0,
        explanation: '✔ **-ence**: creates the noun "resilience".'
      },
      {
        id: 'l5-fa-q7',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Topic 1: Nominalisation • Question 7 of 50',
        instruction: 'Tap on the two NOMINALISED NOUNS in this sentence.',
        sentence: 'The reduction of taxes led to the growth of businesses.',
        words: ['The', 'reduction', 'of', 'taxes', 'led', 'to', 'the', 'growth', 'of', 'businesses.'],
        targetIndices: [1, 7],
        targetCategoryLabel: 'Nominalised Nouns',
        explanation: '✔ **reduction** (from reduce) and **growth** (from grow) are nominalised nouns.'
      },
      {
        id: 'l5-fa-q8',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Topic 1: Nominalisation • Question 8 of 50',
        instruction: 'Why is nominalisation prized in GCSE academic essay writing?',
        options: [
          'It creates an authoritative, objective register by turning actions into concepts.',
          'It adds rhymes to paragraphs.',
          'It removes all punctuation.',
          'It forces every sentence into present tense.'
        ],
        correctIndex: 0,
        explanation: '✔ Nominalisation converts active narratives into dense academic prose.'
      },
      {
        id: 'l5-fa-q9',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Topic 1: Nominalisation • Question 9 of 50',
        instruction: 'Construct a formal sentence using "establishment".',
        scrambledWords: ['The', 'establishment', 'of', 'law', 'ensured', 'public', 'safety.'],
        correctSentence: 'The establishment of law ensured public safety.',
        explanation: '✔ "The establishment of law" uses nominalisation effectively.'
      },
      {
        id: 'l5-fa-q10',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Topic 1: Nominalisation • Question 10 of 50',
        instruction: 'Click the informal verbal clause that should be nominalised to "implementation".',
        sentenceWithMistake: 'When they implemented the policy, chaos ensued.',
        words: ['When', 'they', 'implemented', 'the', 'policy,', 'chaos', 'ensued.'],
        errorWordIndex: 2,
        correctedWord: 'implementation of',
        ruleViolated: 'Nominalise "implemented" to "implementation"',
        explanation: '✔ Academic form: "The **implementation** of the policy...".'
      },
      {
        id: 'l5-fa-q11',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Topic 1: Nominalisation • Question 11 of 50',
        instruction: 'Identify the noun form of "persist".',
        options: ['persistence', 'persistently', 'persisting', 'persisted'],
        correctIndex: 0,
        explanation: '✔ **Persistence** is the abstract noun form.'
      },
      {
        id: 'l5-fa-q12',
        type: 'word-clicker',
        difficultyStep: 4,
        prompt: 'Topic 1: Nominalisation • Question 12 of 50',
        instruction: 'Tap on the NOMINALISED NOUN derived from "expand".',
        sentence: 'The rapid expansion of Roman London reshaped Britain.',
        words: ['The', 'rapid', 'expansion', 'of', 'Roman', 'London', 'reshaped', 'Britain.'],
        targetIndices: [2],
        targetCategoryLabel: 'Nominalised Noun',
        explanation: '✔ **expansion** is nominalised from "expand".'
      },

      // TOPIC 2: Dangling & Misplaced Modifiers (Q13-25)
      {
        id: 'l5-fa-q13',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Topic 2: Dangling Modifiers • Question 13 of 50',
        instruction: 'Which sentence avoids a dangling modifier?',
        options: [
          'Walking down the lane, the cottage appeared through the trees.',
          'Walking down the lane, I spotted the cottage through the trees.',
          'Walking down the lane, the trees framed the cottage.',
          'Walking down the lane, my umbrella blew away.'
        ],
        correctIndex: 1,
        explanation: '✔ **...I spotted...** is correct because "I" did the walking.'
      },
      {
        id: 'l5-fa-q14',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Topic 2: Dangling Modifiers • Question 14 of 50',
        instruction: 'Tap on the INTRODUCTORY PARTICIPLE PHRASE in this sentence.',
        sentence: 'Gazing through the telescope, the astronomer identified a new comet.',
        words: ['Gazing', 'through', 'the', 'telescope,', 'the', 'astronomer', 'identified', 'a', 'new', 'comet.'],
        targetIndices: [0, 1, 2, 3],
        targetCategoryLabel: 'Participle Phrase',
        explanation: '✔ **Gazing through the telescope,** is the opening modifier.'
      },
      {
        id: 'l5-fa-q15',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Topic 2: Dangling Modifiers • Question 15 of 50',
        instruction: 'What rule prevents a dangling modifier error?',
        options: [
          'The noun performing the modifier\'s action MUST immediately follow the comma.',
          'Always put modifiers at the end of sentences.',
          'Never use commas after opening phrases.',
          'Modifiers must only contain adjectives.'
        ],
        correctIndex: 0,
        explanation: '✔ The doer of the introductory phrase must follow the comma.'
      },
      {
        id: 'l5-fa-q16',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Topic 2: Dangling Modifiers • Question 16 of 50',
        instruction: 'Click the wrong subject that creates a dangling modifier.',
        sentenceWithMistake: 'Hiking up the hill, my hat blew away.',
        words: ['Hiking', 'up', 'the', 'hill,', 'my', 'hat', 'blew', 'away.'],
        errorWordIndex: 5,
        correctedWord: 'I lost my hat',
        ruleViolated: 'A hat cannot hike up the hill',
        explanation: '✔ The hat was not hiking. The human subject "I" must follow the comma.'
      },
      {
        id: 'l5-fa-q17',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Topic 2: Dangling Modifiers • Question 17 of 50',
        instruction: 'Build a grammatically correct sentence starting with a participle phrase.',
        scrambledWords: ['Exhausted', 'from', 'the', 'climb,', 'the', 'hikers', 'rested.'],
        correctSentence: 'Exhausted from the climb, the hikers rested.',
        explanation: '✔ "the hikers" were the ones exhausted from the climb.'
      },
      {
        id: 'l5-fa-q18',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Topic 2: Dangling Modifiers • Question 18 of 50',
        instruction: 'What is a "misplaced modifier"?',
        options: [
          'A modifier placed too far from the word it describes, creating unintended meaning.',
          'A sentence with no adjectives.',
          'A verb written in the wrong tense.',
          'A question without a question mark.'
        ],
        correctIndex: 0,
        explanation: '✔ Misplaced modifiers sit separated from their target words.'
      },
      {
        id: 'l5-fa-q19',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Topic 2: Dangling Modifiers • Question 19 of 50',
        instruction: 'Tap on the CORRECT NOUN modified by "Braving the icy weather".',
        sentence: 'Braving the icy weather, the postman delivered the letters.',
        words: ['Braving', 'the', 'icy', 'weather,', 'the', 'postman', 'delivered', 'the', 'letters.'],
        targetIndices: [5],
        targetCategoryLabel: 'Modified Agent',
        explanation: '✔ **postman** is the person braving the icy weather.'
      },
      {
        id: 'l5-fa-q20',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Topic 2: Dangling Modifiers • Question 20 of 50',
        instruction: 'Click the inanimate subject misplaced after an action modifier.',
        sentenceWithMistake: 'Opening the old journal, the yellowed pages fell out.',
        words: ['Opening', 'the', 'old', 'journal,', 'the', 'yellowed', 'pages', 'fell', 'out.'],
        errorWordIndex: 6,
        correctedWord: 'I saw yellowed pages fall out',
        ruleViolated: 'Pages cannot open the journal',
        explanation: '✔ Pages cannot open a journal. Place "I" after the comma.'
      },
      {
        id: 'l5-fa-q21',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Topic 2: Dangling Modifiers • Question 21 of 50',
        instruction: 'Fix: "Having reached the summit, the view was spectacular."',
        options: [
          'Having reached the summit, we marveled at the spectacular view.',
          'Having reached the summit, the mountain showed a view.',
          'Having reached the summit, spectacular was the view.',
          'Having reached the summit, the camera took a picture.'
        ],
        correctIndex: 0,
        explanation: '✔ "we" reached the summit and marveled at the view.'
      },
      {
        id: 'l5-fa-q22',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Topic 2: Dangling Modifiers • Question 22 of 50',
        instruction: 'Assemble a sentence with a past participle opening modifier.',
        scrambledWords: ['Hidden', 'in', 'the', 'fog,', 'the', 'ship', 'sailed', 'silently.'],
        correctSentence: 'Hidden in the fog, the ship sailed silently.',
        explanation: '✔ "the ship" was hidden in the fog.'
      },
      {
        id: 'l5-fa-q23',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Topic 2: Dangling Modifiers • Question 23 of 50',
        instruction: 'Which sentence correctly places the modifier "nearly"?',
        options: [
          'She nearly earned fifty pounds yesterday.',
          'She earned nearly fifty pounds yesterday.',
          'Nearly she earned fifty pounds yesterday.',
          'She earned fifty pounds nearly yesterday.'
        ],
        correctIndex: 1,
        explanation: '✔ "nearly fifty pounds" modifies the amount earned accurately.'
      },
      {
        id: 'l5-fa-q24',
        type: 'word-clicker',
        difficultyStep: 4,
        prompt: 'Topic 2: Dangling Modifiers • Question 24 of 50',
        instruction: 'Tap on the PARTICIPLE in this modifier: "Written in haste, the essay contained errors."',
        sentence: 'Written in haste, the essay contained errors.',
        words: ['Written', 'in', 'haste,', 'the', 'essay', 'contained', 'errors.'],
        targetIndices: [0],
        targetCategoryLabel: 'Past Participle',
        explanation: '✔ **Written** is the past participle starting the modifier.'
      },
      {
        id: 'l5-fa-q25',
        type: 'error-detective',
        difficultyStep: 5,
        prompt: 'Topic 2: Dangling Modifiers • Question 25 of 50',
        instruction: 'Click the noun incorrectly attached to "To qualify for the finals".',
        sentenceWithMistake: 'To qualify for the finals, two matches must be won.',
        words: ['To', 'qualify', 'for', 'the', 'finals,', 'two', 'matches', 'must', 'be', 'won.'],
        errorWordIndex: 6,
        correctedWord: 'the team must win two matches',
        ruleViolated: 'Matches cannot qualify for finals',
        explanation: '✔ Matches do not qualify. Correct to "the team must win...".'
      },

      // TOPIC 3: Conditionals (Q26-38)
      {
        id: 'l5-fa-q26',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Topic 3: Conditionals • Question 26 of 50',
        instruction: 'Which sentence represents a FIRST CONDITIONAL (likely future event)?',
        options: [
          'If you heat ice, it melts.',
          'If it rains tomorrow, we will stay indoors.',
          'If I were rich, I would buy an island.',
          'If he had called, I would have answered.'
        ],
        correctIndex: 1,
        explanation: '✔ **If it rains tomorrow, we will stay indoors.** is first conditional.'
      },
      {
        id: 'l5-fa-q27',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Topic 3: Conditionals • Question 27 of 50',
        instruction: 'Tap on the PAST PERFECT VERB in this third conditional if-clause.',
        sentence: 'If the captain had heeded the warnings, the collision would have been avoided.',
        words: ['If', 'the', 'captain', 'had', 'heeded', 'the', 'warnings,', 'the', 'collision', 'would', 'have', 'been', 'avoided.'],
        targetIndices: [3, 4],
        targetCategoryLabel: 'Past Perfect Verb',
        explanation: '✔ **had heeded** is the past perfect verb in the third conditional condition.'
      },
      {
        id: 'l5-fa-q28',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Topic 3: Conditionals • Question 28 of 50',
        instruction: 'Complete the SECOND CONDITIONAL: "If I ___ the Mayor, I would improve public transport."',
        options: ['were', 'was to be', 'am', 'had been'],
        correctIndex: 0,
        explanation: '✔ **were**: Subjunctive "were" is standard in second conditional if-clauses.'
      },
      {
        id: 'l5-fa-q29',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Topic 3: Conditionals • Question 29 of 50',
        instruction: 'Click the spoken grammar error "would of" in this sentence.',
        sentenceWithMistake: 'If you had asked, I would of helped you.',
        words: ['If', 'you', 'had', 'asked,', 'I', 'would', 'of', 'helped', 'you.'],
        errorWordIndex: 6,
        correctedWord: 'have',
        ruleViolated: 'Never write "would of"; use "would have"',
        explanation: '✔ Replace "of" with **have**: "would **have** helped".'
      },
      {
        id: 'l5-fa-q30',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Topic 3: Conditionals • Question 30 of 50',
        instruction: 'Build a zero conditional sentence stating a scientific law.',
        scrambledWords: ['If', 'water', 'reaches', '100°C,', 'it', 'boils.'],
        correctSentence: 'If water reaches 100°C, it boils.',
        explanation: '✔ Zero conditional uses Present Simple in both clauses.'
      },
      {
        id: 'l5-fa-q31',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Topic 3: Conditionals • Question 31 of 50',
        instruction: 'What is wrong with: "If I would have seen him, I would have spoken to him"?',
        options: [
          'The first "would have" should be past perfect "had".',
          'It needs a question mark.',
          'Spoken should be speaked.',
          'There is no error.'
        ],
        correctIndex: 0,
        explanation: '✔ Do NOT place "would have" inside the if-clause: "If I **had** seen him...".'
      },
      {
        id: 'l5-fa-q32',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Topic 3: Conditionals • Question 32 of 50',
        instruction: 'Tap on the MAIN RESULT CLAUSE in this second conditional.',
        sentence: 'If she studied German, she would understand the opera.',
        words: ['If', 'she', 'studied', 'German,', 'she', 'would', 'understand', 'the', 'opera.'],
        targetIndices: [4, 5, 6, 7, 8],
        targetCategoryLabel: 'Main Result Clause',
        explanation: '✔ **she would understand the opera** is the result clause.'
      },
      {
        id: 'l5-fa-q33',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Topic 3: Conditionals • Question 33 of 50',
        instruction: 'Which connective means "if not"?',
        options: ['Unless', 'Provided that', 'As long as', 'In case'],
        correctIndex: 0,
        explanation: '✔ **Unless** means "if not" (e.g. "Unless it rains..." = "If it does not rain...").'
      },
      {
        id: 'l5-fa-q34',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Topic 3: Conditionals • Question 34 of 50',
        instruction: 'Click the incorrect verb in this first conditional if-clause.',
        sentenceWithMistake: 'If the weather will improve, we will go hiking.',
        words: ['If', 'the', 'weather', 'will', 'improve,', 'we', 'will', 'go', 'hiking.'],
        errorWordIndex: 3,
        correctedWord: 'improves',
        ruleViolated: 'Use present simple in first conditional if-clauses',
        explanation: '✔ Use Present Simple in if-clauses: "If the weather **improves**...".'
      },
      {
        id: 'l5-fa-q35',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Topic 3: Conditionals • Question 35 of 50',
        instruction: 'Assemble a third conditional sentence.',
        scrambledWords: ['If', 'the', 'alarm', 'had', 'rung,', 'we', 'would', 'have', 'woken.'],
        correctSentence: 'If the alarm had rung, we would have woken.',
        explanation: '✔ Past perfect condition + modal perfect result.'
      },
      {
        id: 'l5-fa-q36',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Topic 3: Conditionals • Question 36 of 50',
        instruction: 'What structure forms a MIXED CONDITIONAL (past cause + present result)?',
        options: [
          'If + Past Perfect, would + base verb',
          'If + Present Simple, will + base verb',
          'If + Past Simple, would have + past participle',
          'If + Present Simple, Present Simple'
        ],
        correctIndex: 0,
        explanation: '✔ "If + Past Perfect (past cause), would + base verb (present effect)".'
      },
      {
        id: 'l5-fa-q37',
        type: 'word-clicker',
        difficultyStep: 4,
        prompt: 'Topic 3: Conditionals • Question 37 of 50',
        instruction: 'Tap on the RESULT VERB in this mixed conditional: "If I had taken that flight, I would be in London now."',
        sentence: 'If I had taken that flight, I would be in London now.',
        words: ['If', 'I', 'had', 'taken', 'that', 'flight,', 'I', 'would', 'be', 'in', 'London', 'now.'],
        targetIndices: [7, 8],
        targetCategoryLabel: 'Present Result Verb',
        explanation: '✔ **would be** shows the present result of a past event.'
      },
      {
        id: 'l5-fa-q38',
        type: 'clause-matcher',
        difficultyStep: 5,
        prompt: 'Topic 3: Conditionals • Question 38 of 50',
        instruction: 'Match the clauses in this third conditional.',
        sentence: 'If the guide had brought a compass, we would not have lost our way.',
        mainClause: 'we would not have lost our way',
        subordinateClause: 'If the guide had brought a compass',
        conjunctionOrConnective: 'If',
        explanation: '✔ "If the guide had brought a compass" is the past counterfactual condition.'
      },

      // TOPIC 4: Parallel Structure (Q39-50)
      {
        id: 'l5-fa-q39',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Topic 4: Parallel Structure • Question 39 of 50',
        instruction: 'Which sentence maintains parallel structure across three gerunds?',
        options: [
          'He likes running, jumping, and to swim.',
          'He likes running, jumping, and swimming.',
          'He likes to run, jumping, and swimming.',
          'He likes run, jump, and swim.'
        ],
        correctIndex: 1,
        explanation: '✔ **...running, jumping, and swimming.** uses three parallel gerunds.'
      },
      {
        id: 'l5-fa-q40',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Topic 4: Parallel Structure • Question 40 of 50',
        instruction: 'Tap on the NON-PARALLEL phrase in: "The report was thorough, concise, and contained accuracy."',
        sentence: 'The report was thorough, concise, and contained accuracy.',
        words: ['The', 'report', 'was', 'thorough,', 'concise,', 'and', 'contained', 'accuracy.'],
        targetIndices: [6, 7],
        targetCategoryLabel: 'Non-Parallel Verb Phrase',
        explanation: '✔ **contained accuracy** breaks the adjective pattern (thorough, concise, accurate).'
      },
      {
        id: 'l5-fa-q41',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Topic 4: Parallel Structure • Question 41 of 50',
        instruction: 'Fix the error: "She promised to listen carefully, to speak clearly, and writing neatly."',
        options: [
          'She promised to listen carefully, to speak clearly, and to write neatly.',
          'She promised listening carefully, speaking clearly, and to write neatly.',
          'She promised to listen carefully, speak clearly, and writing neatly.',
          'She promised listen carefully, speak clearly, write neatly.'
        ],
        correctIndex: 0,
        explanation: '✔ Maintaining parallel infinitives ("to listen, to speak, to write") is correct.'
      },
      {
        id: 'l5-fa-q42',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Topic 4: Parallel Structure • Question 42 of 50',
        instruction: 'Click the word that breaks noun phrase parallelism.',
        sentenceWithMistake: 'We seek liberty, justice, and being equal.',
        words: ['We', 'seek', 'liberty,', 'justice,', 'and', 'being', 'equal.'],
        errorWordIndex: 5,
        correctedWord: 'equality',
        ruleViolated: 'Match abstract nouns (liberty, justice, equality)',
        explanation: '✔ Replace "being equal" with abstract noun **equality**.'
      },
      {
        id: 'l5-fa-q43',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Topic 4: Parallel Structure • Question 43 of 50',
        instruction: 'Build a sentence with parallel infinitive verbs.',
        scrambledWords: ['He', 'wants', 'to', 'study', 'hard,', 'to', 'pass', 'exams,', 'and', 'to', 'succeed.'],
        correctSentence: 'He wants to study hard, to pass exams, and to succeed.',
        explanation: '✔ All three verbs are parallel infinitives ("to study, to pass, to succeed").'
      },
      {
        id: 'l5-fa-q44',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Topic 4: Parallel Structure • Question 44 of 50',
        instruction: 'Select the sentence with parallel structure using "not only... but also":',
        options: [
          'The novel is not only engaging but also informative.',
          'The novel is not only engaging but also informs readers.',
          'Not only is the novel engaging, but also informative.',
          'The novel not only engages but also informative.'
        ],
        correctIndex: 0,
        explanation: '✔ "not only [adjective] but also [adjective]" is perfectly parallel.'
      },
      {
        id: 'l5-fa-q45',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Topic 4: Parallel Structure • Question 45 of 50',
        instruction: 'Tap on the THREE PARALLEL ADVERBS in this sentence.',
        sentence: 'The choir sang loudly, clearly, and harmoniously.',
        words: ['The', 'choir', 'sang', 'loudly,', 'clearly,', 'and', 'harmoniously.'],
        targetIndices: [3, 4, 6],
        targetCategoryLabel: 'Parallel Adverbs',
        explanation: '✔ **loudly, clearly, harmoniously** form a parallel tricolon of adverbs.'
      },
      {
        id: 'l5-fa-q46',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Topic 4: Parallel Structure • Question 46 of 50',
        instruction: 'Click the non-parallel verb in: "The job requires writing code, testing software, and to deploy apps."',
        sentenceWithMistake: 'The job requires writing code, testing software, and to deploy apps.',
        words: ['The', 'job', 'requires', 'writing', 'code,', 'testing', 'software,', 'and', 'to', 'deploy', 'apps.'],
        errorWordIndex: 8,
        correctedWord: 'deploying',
        ruleViolated: 'Maintain gerund pattern (writing, testing, deploying)',
        explanation: '✔ Change "to deploy" to gerund **deploying**.'
      },
      {
        id: 'l5-fa-q47',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Topic 4: Parallel Structure • Question 47 of 50',
        instruction: 'Which sentence demonstrates parallel structure in a comparison?',
        options: [
          'Teaching students requires more patience than grading papers.',
          'To teach students requires more patience than grading papers.',
          'Teaching students requires more patience than to grade papers.',
          'To teach students requires more patience than paper grading.'
        ],
        correctIndex: 0,
        explanation: '✔ "Teaching... than grading..." maintains parallel gerunds across the comparison.'
      },
      {
        id: 'l5-fa-q48',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Topic 4: Parallel Structure • Question 48 of 50',
        instruction: 'Assemble a tricolon sentence with parallel noun phrases.',
        scrambledWords: ['We', 'admired', 'the', 'majestic', 'peaks,', 'the', 'crystal', 'lakes,', 'and', 'the', 'dense', 'forests.'],
        correctSentence: 'We admired the majestic peaks, the crystal lakes, and the dense forests.',
        explanation: '✔ Three parallel [determiner + adjective + noun] phrases.'
      },
      {
        id: 'l5-fa-q49',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Topic 4: Parallel Structure • Question 49 of 50',
        instruction: 'What is the rhetorical function of parallel structure in persuasive speech writing?',
        options: [
          'It creates cadence, symmetry, and memorable psychological emphasis.',
          'It makes speeches harder to understand.',
          'It replaces all verbs with adjectives.',
          'It forces sentences to be under five words.'
        ],
        correctIndex: 0,
        explanation: '✔ Parallelism provides powerful rhetorical rhythm and memorable balance.'
      },
      {
        id: 'l5-fa-q50',
        type: 'word-clicker',
        difficultyStep: 5,
        prompt: 'Topic 4: Parallel Structure • Question 50 of 50',
        instruction: 'Tap on the THREE PARALLEL VERBS in this sentence.',
        sentence: 'We came, we saw, we conquered.',
        words: ['We', 'came,', 'we', 'saw,', 'we', 'conquered.'],
        targetIndices: [1, 3, 5],
        targetCategoryLabel: 'Parallel Past Simple Verbs',
        explanation: '✔ **came, saw, conquered** form Julius Caesar\'s famous parallel tricolon (Veni, vidi, vici).'
      }
    ]
  }
];

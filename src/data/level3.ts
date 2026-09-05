import { GrammarTopic } from '../types';

export const LEVEL_3_TOPICS: GrammarTopic[] = [
  {
    id: 'l3-determiners',
    slug: 'determiners-articles-demonstratives',
    title: 'Determiners: Articles, Demonstratives & Quantifiers',
    subtitle: 'Signalling what kind of reference is being made to a noun.',
    level: 'level-3',
    levelLabel: 'Level 3: Intermediate',
    levelStage: 'Upper Key Stage 2',
    ageGroup: 'Ages 9–11',
    category: 'parts-of-speech',
    categoryLabel: 'Parts of Speech',
    iconName: 'Layers',
    estimatedMinutes: 7,
    overview: 'A **determiner** sits before a noun or noun phrase to specify which one, how many, or whose it is. Determiners include **articles** (a, an, the), **demonstratives** (this, that, these, those), **possessives** (my, your, his, her, its, our, their), and **quantifiers** (some, many, all, few, three).',
    whyItMatters: 'In Key Stage 2 SATs, identifying determiners is a core assessment objective.',
    sections: [
      {
        id: 'sec-determiner-types',
        title: '1. Types of Determiners in British English',
        content: 'Determiners fall into several distinct categories:',
        bulletPoints: [
          '**Definite Article:** **the** (refers to a specific item already known to the listener) (for example: *We boarded **the** Jacobite steam train at Fort William*).',
          '**Indefinite Articles:** **a** (before consonant sounds) and **an** (before vowel sounds) (for example: *We spotted **a** Highland pony and **an** eagle circling overhead*).',
          '**Demonstratives:** **this, that, these, those** (pointing in space or time) (for example: ***These** woollen tartans were woven in Selkirk, while **that** sporran was handcrafted in Inverness*).',
          '**Possessive Determiners:** **my, your, our, their, his, her, its** (sitting directly before a noun) (for example: *The piper adjusted **his** glengarry bonnet before leading **our** parade*).',
          '**Quantifiers & Numerals:** **several, few, every, each, three, many** (for example: ***Several** tourists spotted seals in the Moray Firth, while **few** hikers braved the summit in winter*).'
        ],
        examples: [
          {
            id: 'ex-l3-det1',
            sentence: '**Those** **three** Highland stags grazed peacefully beside **the** shimmering waters of Loch Tay.',
            highlightWords: ['Those', 'three', 'the'],
            explanation: '**Those** is a demonstrative determiner; **three** is a numerical determiner; **the** is a definite article.',
            contextNote: 'Scottish loch wildlife'
          },
          {
            id: 'ex-l3-det2',
            sentence: '**Every** pupil in **our** Aberdeen class received **an** illustrated atlas of Scottish geography.',
            highlightWords: ['Every', 'our', 'an'],
            explanation: '**Every** is a quantifier determiner; **our** is a possessive determiner; **an** is an indefinite article used before vowel sound "illustrated".',
            contextNote: 'Scottish classroom study'
          },
          {
            id: 'ex-l3-det3',
            sentence: '**A** lone bagpiper stood atop **that** craggy Highland knoll at sunset.',
            highlightWords: ['A', 'that'],
            explanation: '**A** is an indefinite article introducing the piper; **that** is a demonstrative determiner pointing to the specific knoll.',
            contextNote: 'Highland evening'
          }
        ],
        ruleSummary: 'Determiners introduce and specify nouns (articles, demonstratives, possessives, quantifiers).'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l3-det1',
        title: 'A vs An Sound Rule (Not Just Letters!)',
        trick: 'Use **an** before words that START WITH A VOWEL SOUND, not just the vowel letter! For example: *an hour* (silent h = vowel sound), but *a university* (starts with a "yoo" consonant sound).',
        mnemonic: 'Listen to the SOUND, not just the spelling!',
        commonMistake: 'Writing *"an historic occasion"* or *"an university"*.',
        correctWay: 'In modern British English, write *"a historic Scottish monument"* and *"a university in Edinburgh"*.',
        explanation: 'Because "historic" has an audible "h" sound, and "university" begins with a /j/ consonant sound.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l3-det',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which word in this sentence is a DEMONSTRATIVE determiner? "Those antique silver brooches were discovered near Stirling Castle."',
        instruction: 'Identify the demonstrative determiner.',
        options: ['Those', 'antique', 'discovered', 'near'],
        correctIndex: 0,
        explanation: '**Those** points specifically to the brooches, making it a demonstrative determiner.'
      },
      {
        id: 'ex-q2-l3-det',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on all the DETERMINERS in this sentence.',
        instruction: 'Click each determiner (articles, possessives, quantifiers).',
        sentence: 'Several hikers checked their compasses near the mountain.',
        words: ['Several', 'hikers', 'checked', 'their', 'compasses', 'near', 'the', 'mountain.'],
        targetIndices: [0, 3, 6],
        targetCategoryLabel: 'Determiner',
        explanation: '**Several** (quantifier), **their** (possessive determiner), and **the** (definite article) are all determiners.'
      }
    ]
  },
  {
    id: 'l3-fronted-adverbials',
    slug: 'fronted-adverbials',
    title: 'Fronted Adverbials & The Comma Rule',
    subtitle: 'Hooking the reader by placing time, manner, or location right at the front.',
    level: 'level-3',
    levelLabel: 'Level 3: Intermediate',
    levelStage: 'Upper Key Stage 2',
    ageGroup: 'Ages 9–11',
    category: 'sentence-structure',
    categoryLabel: 'Sentence Structure',
    iconName: 'CornerUpRight',
    estimatedMinutes: 7,
    overview: 'A **fronted adverbial** is a word, phrase, or clause that normally sits at the end of a sentence, but has been moved right to the FRONT of the sentence to show **where**, **when**, **how**, or **how often** the action took place. In British English grammar, a fronted adverbial is almost always followed by a **comma (, )**.',
    whyItMatters: 'Fronted adverbials are one of the most prominent features in the UK Key Stage 2 English syllabus, creating exciting sentence variety.',
    sections: [
      {
        id: 'sec-fronted-adverbials-rule',
        title: '1. The Fronted Adverbial Formula',
        content: 'When an adverbial is placed before the main clause, it sets the scene and creates anticipation:',
        bulletPoints: [
          '**Time (When?):** (for example: *Early the following morning, the ferry left the port of Oban for the Isle of Mull.*)',
          '**Place (Where?):** (for example: *High above the snow-capped peaks of the Cairngorms, a majestic golden eagle circled.*)',
          '**Manner (How?):** (for example: *Without making a sound, the stealthy Scottish wildcat prowled through the purple heather.*)',
          '**Frequency (How often?):** (for example: *Every New Year\'s Eve, thousands of revellers gather on Edinburgh\'s Royal Mile for Hogmanay.*)'
        ],
        examples: [
          {
            id: 'ex-l3-fa1',
            sentence: '**As the morning mist rolled across Loch Ness,** the mysterious surface rippled without warning.',
            highlightWords: ['As the morning mist rolled across Loch Ness,'],
            explanation: 'This fronted adverbial clause of time and atmosphere sets the scene and is separated from the main clause by a comma.',
            contextNote: 'Highland loch atmosphere'
          },
          {
            id: 'ex-l3-fa2',
            sentence: '**Deep beneath the granite walls of Edinburgh Castle,** historians uncovered a medieval vaulted chamber.',
            highlightWords: ['Deep beneath the granite walls of Edinburgh Castle,'],
            explanation: 'This prepositional phrase acts as a fronted adverbial of place, followed by a comma before the main clause.',
            contextNote: 'Scottish castle discovery'
          },
          {
            id: 'ex-l3-fa3',
            sentence: '**With immense strength and precision,** the champion athlete tossed the heavy wooden caber.',
            highlightWords: ['With immense strength and precision,'],
            explanation: 'Fronted adverbial of manner indicating how the Highland athlete tossed the caber.',
            contextNote: 'Braemar Highland Games'
          }
        ],
        ruleSummary: 'Fronted Adverbial + Comma + Main Clause (Subject + Verb).'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l3-fa1',
        title: 'The "Move It to the Back" Test',
        trick: 'To check if a phrase is a fronted adverbial, try moving it to the very end of your sentence. If the sentence still makes perfect grammatical sense, it is indeed a fronted adverbial! For example: *"Without warning, the Highland storm hit"* -> *"The Highland storm hit without warning."*',
        mnemonic: 'Fronted Adverbial -> Don\'t forget the COMMA after it!',
        commonMistake: 'Forgetting the mandatory comma after the fronted adverbial.',
        correctWay: 'Always place a comma immediately following the fronted adverbial phrase.',
        explanation: 'The comma provides a brief pause for the reader before the main action begins.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l3-fa',
        type: 'word-clicker',
        difficultyStep: 1,
        prompt: 'Tap on the entire FRONTED ADVERBIAL at the start of this sentence.',
        instruction: 'Click the words forming the fronted adverbial of time.',
        sentence: 'Before the sun had risen, the Highland fishermen set off across the sea loch.',
        words: ['Before', 'the', 'sun', 'had', 'risen,', 'the', 'Highland', 'fishermen', 'set', 'off', 'across', 'the', 'sea', 'loch.'],
        targetIndices: [0, 1, 2, 3, 4],
        targetCategoryLabel: 'Fronted Adverbial',
        explanation: '**Before the sun had risen,** is a fronted adverbial clause of time setting the stage for the main clause.'
      },
      {
        id: 'ex-q2-l3-fa',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find where the missing comma should be placed after the fronted adverbial.',
        instruction: 'Click on the word that needs a comma right after it.',
        sentenceWithMistake: 'Across the misty Highland valley the lone bagpipe music echoed.',
        words: ['Across', 'the', 'misty', 'Highland', 'valley', 'the', 'lone', 'bagpipe', 'music', 'echoed.'],
        errorWordIndex: 4,
        correctedWord: 'valley,',
        ruleViolated: 'A fronted adverbial must be separated from the main clause by a comma.',
        explanation: 'There must be a comma after "valley" -> **Across the misty Highland valley,**'
      }
    ]
  },
  {
    id: 'l3-subordinating-conjunctions',
    slug: 'subordinating-conjunctions-complex-sentences',
    title: 'Subordinating Conjunctions: I SAW A WABUB',
    subtitle: 'Constructing rich complex sentences with main and subordinate clauses.',
    level: 'level-3',
    levelLabel: 'Level 3: Intermediate',
    levelStage: 'Upper Key Stage 2',
    ageGroup: 'Ages 9–11',
    category: 'sentence-structure',
    categoryLabel: 'Sentence Structure',
    iconName: 'GitPullRequest',
    estimatedMinutes: 7,
    overview: 'A **subordinating conjunction** introduces a **subordinate clause** (a clause that cannot stand on its own as a complete sentence). A sentence that contains one main clause and at least one subordinate clause is called a **complex sentence**.',
    whyItMatters: 'Mastering the British primary school mnemonic **I SAW A WABUB** unlocks advanced sentence construction.',
    sections: [
      {
        id: 'sec-isawawabub',
        title: '1. The "I SAW A WABUB" Conjunctions',
        content: 'This famous UK mnemonic helps remember the most common subordinating conjunctions:',
        bulletPoints: [
          '**I - If:** (for example: ***If** the gale calms down by evening, we will sail across to the Isle of Skye.*)',
          '**S - Since:** (for example: ***Since** ancient medieval times, Edinburgh Castle has guarded the volcanic crag above the capital.*)',
          '**A - As:** (for example: ***As** the golden sun dipped behind Ben Nevis, red deer gathered silently in the heather.*)',
          '**W - When:** (for example: ***When** the pipe major raised his ceremonial mace, the entire band struck up in unison.*)',
          '**A - Although:** (for example: ***Although** the waters of Loch Ness were icy cold, the charity swimmers completed the crossing.*)',
          '**W - While:** (for example: ***While** the Atlantic storm battered the rocky coastline, we sat cosily inside the inn enjoying Cullen skink.*)',
          '**A - After:** (for example: ***After** Robert the Bruce watched the persistent spider in the cave, he resolved to fight on.*)',
          '**B - Before:** (for example: ***Before** darkness fell over Glen Coe, the weary mountaineers reached their stone refuge.*)',
          '**U - Until:** (for example: *The ceilidh band played energetic jigs **until** the town clock chimed midnight on Hogmanay.*)',
          '**B - Because:** (for example: *Visitors travel from all over the world to Stirling **because** it was the royal home of Mary Queen of Scots.*)'
        ],
        examples: [
          {
            id: 'ex-l3-sc1',
            sentence: '**Although** snow fell heavily over the Cairngorms, the mountain rescue team reached the stranded climbers safely.',
            highlightWords: ['Although', 'the mountain rescue team reached the stranded climbers safely'],
            explanation: '"Although snow fell heavily over the Cairngorms" is the subordinate clause; "the mountain rescue team reached the stranded climbers safely" is the main clause.',
            contextNote: 'Scottish mountain rescue'
          },
          {
            id: 'ex-l3-sc2',
            sentence: 'The Jacobite steam train halted on the Glenfinnan Viaduct **because** photographers had gathered along the hillside.',
            highlightWords: ['because'],
            explanation: '"The Jacobite steam train halted on the Glenfinnan Viaduct" is the main clause; "because photographers had gathered along the hillside" is the subordinate clause explaining the reason.',
            contextNote: 'Highland railway adventure'
          },
          {
            id: 'ex-l3-sc3',
            sentence: '**While** the pipers tuned their chanters, the Highland dancers adjusted their crossed swords.',
            highlightWords: ['While', 'the Highland dancers adjusted their crossed swords'],
            explanation: '"While the pipers tuned their chanters" is a subordinate clause of time preceding the main clause.',
            contextNote: 'Highland Games competition'
          }
        ],
        ruleSummary: 'Complex Sentence = Main Clause (makes complete sense alone) + Subordinate Clause (introduced by subordinating conjunction).'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l3-sc1',
        title: 'The Subordinate Comma Rule',
        trick: 'If the subordinate clause comes FIRST, you MUST put a comma after it. If the main clause comes first, you usually do NOT need a comma!',
        mnemonic: 'Subordinate First = COMMA! Main Clause First = NO COMMA!',
        commonMistake: 'Writing a subordinate clause alone as if it were a full sentence (for example: *"Because it was freezing in Inverness."*).',
        correctWay: 'Attach it to a main clause: *"We lit the peat fire because it was freezing in Inverness."*',
        explanation: 'A subordinate clause cannot stand alone as a complete sentence.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l3-sc',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which word is a subordinating conjunction from the I SAW A WABUB list?',
        instruction: 'Pick the subordinating conjunction.',
        options: ['And', 'Although', 'But', 'Or'],
        correctIndex: 1,
        explanation: '**Although** is a subordinating conjunction. (And, But, Or are coordinating FANBOYS conjunctions).'
      },
      {
        id: 'ex-q2-l3-sc',
        type: 'clause-matcher',
        difficultyStep: 2,
        prompt: 'Identify the Main Clause and Subordinate Clause in this sentence.',
        instruction: 'Review how the clauses divide.',
        sentence: 'When the ferry docked at Stornoway, the excited passengers stepped onto the Isle of Lewis.',
        mainClause: 'the excited passengers stepped onto the Isle of Lewis',
        subordinateClause: 'When the ferry docked at Stornoway',
        conjunctionOrConnective: 'When',
        explanation: '"When the ferry docked at Stornoway" is the subordinate clause introduced by "When", while "the excited passengers stepped onto the Isle of Lewis" can stand alone as the main clause.'
      }
    ]
  },
  {
    id: 'l3-relative-clauses',
    slug: 'relative-clauses-pronouns',
    title: 'Relative Clauses & Relative Pronouns',
    subtitle: 'Embedding precise detail into nouns using who, which, that, whose, and where.',
    level: 'level-3',
    levelLabel: 'Level 3: Intermediate',
    levelStage: 'Upper Key Stage 2',
    ageGroup: 'Ages 9–11',
    category: 'sentence-structure',
    categoryLabel: 'Sentence Structure',
    iconName: 'Share2',
    estimatedMinutes: 7,
    overview: 'A **relative clause** is a special type of subordinate clause that modifies or gives additional information about a noun. It is introduced by a **relative pronoun** (**who, which, that, whose, whom**) or a relative adverb (**where, when, why**).',
    whyItMatters: 'Relative clauses allow writers to combine multiple ideas into one sophisticated sentence.',
    sections: [
      {
        id: 'sec-relative-pronouns-usage',
        title: '1. Choosing the Right Relative Pronoun',
        content: 'Use the correct relative pronoun according to the noun being described:',
        bulletPoints: [
          '**Who (For people):** (for example: *Robert the Bruce, **who** led Scotland in the fourteenth century, rallied his countrymen at Bannockburn.*)',
          '**Which (For animals, objects, and buildings):** (for example: *Eilean Donan Castle, **which** sits where three sea lochs meet, was reconstructed stone by stone.*)',
          '**That (For people, animals, and things in defining clauses):** (for example: *The traditional fiddle tune **that** the musician performed was composed two centuries ago.*)',
          '**Whose (To show possession):** (for example: *The piper **whose** fingers moved effortlessly over the chanter won the gold medal.*)',
          '**Where / When (For places and times):** (for example: *The Isle of Skye is the magical place **where** towering volcanic pinnacles overlook the Atlantic Ocean.*)'
        ],
        examples: [
          {
            id: 'ex-l3-rc1',
            sentence: 'Mary Queen of Scots, **who was crowned at Stirling Castle as an infant**, lived a tumultuous and dramatic life.',
            highlightWords: ['who was crowned at Stirling Castle as an infant'],
            explanation: '"who was crowned at Stirling Castle as an infant" is an embedded non-defining relative clause framed by a pair of commas.',
            contextNote: 'Scottish historical figure'
          },
          {
            id: 'ex-l3-rc2',
            sentence: 'We photographed the ancient stone bridge **which crosses the River Tay at Aberfeldy**.',
            highlightWords: ['which crosses the River Tay at Aberfeldy'],
            explanation: '"which crosses the River Tay at Aberfeldy" gives extra geographical information about the stone bridge.',
            contextNote: 'Perthshire landmark'
          },
          {
            id: 'ex-l3-rc3',
            sentence: 'The mountaineer met a local shepherd **whose border collie was herding sheep across the hillside**.',
            highlightWords: ['whose border collie was herding sheep across the hillside'],
            explanation: '"whose border collie was herding sheep across the hillside" shows possession belonging to the shepherd.',
            contextNote: 'Highland pastoral scene'
          }
        ],
        ruleSummary: 'Relative Clause = Relative Pronoun (who/which/that/whose) + modifying clause.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l3-rc1',
        title: 'Embedded Relative Clauses (Commas like Bread Slices)',
        trick: 'When a relative clause sits in the middle of a sentence, put a comma before AND after it (like two slices of bread in a sandwich)! If you remove the relative clause, the remaining sentence must still make complete sense.',
        mnemonic: 'Can you take out the commas and the sentence still survives?',
        commonMistake: 'Using "which" for human beings (for example: *"The bagpiper which won the prize"*).',
        correctWay: 'Use "who" for people: *"The bagpiper **who** won the prize."*',
        explanation: 'In standard British English, "who" is reserved for human beings.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l3-rc',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Choose the correct relative pronoun: "The Scottish ranger ___ guided our trek through the Cairngorms knew every animal trail."',
        instruction: 'Pick the pronoun for a person.',
        options: ['which', 'who', 'where', 'when'],
        correctIndex: 1,
        explanation: 'Use **who** when referring to people (the Scottish ranger).'
      },
      {
        id: 'ex-q2-l3-rc',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the entire RELATIVE CLAUSE in this sentence.',
        instruction: 'Click the words in the relative clause.',
        sentence: 'The stone cottage which stood beside the loch looked magical.',
        words: ['The', 'stone', 'cottage', 'which', 'stood', 'beside', 'the', 'loch', 'looked', 'magical.'],
        targetIndices: [3, 4, 5, 6, 7],
        targetCategoryLabel: 'Relative Clause',
        explanation: '**which stood beside the loch** is the relative clause modifying "The stone cottage".'
      }
    ]
  },
  {
    id: 'l3-modal-verbs',
    slug: 'modal-verbs-possibility-obligation',
    title: 'Modal Verbs: Possibility, Obligation & Certainty',
    subtitle: 'Adjusting certainty and necessity: can, could, might, should, must, will.',
    level: 'level-3',
    levelLabel: 'Level 3: Intermediate',
    levelStage: 'Upper Key Stage 2',
    ageGroup: 'Ages 9–11',
    category: 'parts-of-speech',
    categoryLabel: 'Parts of Speech',
    iconName: 'Gauge',
    estimatedMinutes: 6,
    overview: 'A **modal verb** is a special helping (auxiliary) verb that expresses **certainty, possibility, ability, permission, or obligation**. The core modal verbs are: **can, could, may, might, shall, should, will, would, must**, and **ought to**.',
    whyItMatters: 'Modal verbs allow writers to calibrate how likely or mandatory an event is.',
    sections: [
      {
        id: 'sec-modal-degrees',
        title: '1. Degrees of Certainty and Obligation',
        content: 'Modal verbs change the tone of a sentence drastically:',
        bulletPoints: [
          '**High Certainty / Fact:** (for example: *The Royal Edinburgh Military Tattoo **will** take place on the castle esplanade in August.*)',
          '**Possibility / Low Certainty:** (for example: *A pod of bottlenose dolphins **might** appear in the Moray Firth this afternoon.*)',
          '**Strong Obligation / Rule:** (for example: *Hikers **must** carry a compass and waterproof map when exploring the Scottish Highlands.*)',
          '**Advice / Recommendation:** (for example: *You **should** sample warm Cullen skink and freshly baked oatcakes when visiting the coast.*)',
          '**Ability:** (for example: *The master piper **can** perform dozens of traditional Gaelic laments from memory.*)'
        ],
        examples: [
          {
            id: 'ex-l3-mv1',
            sentence: 'All ferry passengers **must** follow the crew\'s safety instructions when crossing the Minch.',
            highlightWords: ['must'],
            explanation: '**Must** indicates an essential legal and safety obligation on board.',
            contextNote: 'Scottish maritime transit'
          },
          {
            id: 'ex-l3-mv2',
            sentence: 'The weather forecast suggests it **might** snow on the summit of Ben Nevis by twilight.',
            highlightWords: ['might'],
            explanation: '**Might** expresses possibility and uncertainty rather than a definite guarantee.',
            contextNote: 'Scottish mountain weather'
          },
          {
            id: 'ex-l3-mv3',
            sentence: 'Visitors **should** book their Edinburgh festival tickets well in advance to avoid disappointment.',
            highlightWords: ['should'],
            explanation: '**Should** offers wise counsel and recommendation to travellers.',
            contextNote: 'Edinburgh cultural planning'
          }
        ],
        ruleSummary: 'Modal verbs pair with root verbs to indicate possibility, ability, necessity, or certainty.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l3-mv1',
        title: 'The Modal Root Verb Rule',
        trick: 'Modal verbs are NEVER followed by an "-s" or "-ed" ending on the main verb. The main verb stays in its bare infinitive form (for example: *He must **go***, never *He must goes*).',
        mnemonic: 'Modal verb + Bare infinitive root!',
        commonMistake: 'Saying *"I should of visited Loch Ness"* instead of *"I should have visited Loch Ness"*.',
        correctWay: 'Always write **should have** or the contraction **should\'ve** (never *"should of"*).',
        explanation: '"Of" is a preposition, not an auxiliary verb.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l3-mv',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which modal verb shows the HIGHEST level of certainty?',
        instruction: 'Pick the most certain modal verb.',
        options: ['might', 'could', 'definitely will', 'will'],
        correctIndex: 3,
        explanation: '**Will** expresses complete certainty that an event is taking place in the future.'
      },
      {
        id: 'ex-q2-l3-mv',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the MODAL VERB in this sentence.',
        instruction: 'Click the modal auxiliary verb.',
        sentence: 'You should always check the mountain forecast before hiking.',
        words: ['You', 'should', 'always', 'check', 'the', 'mountain', 'forecast', 'before', 'hiking.'],
        targetIndices: [1],
        targetCategoryLabel: 'Modal Verb',
        explanation: '**Should** is a modal verb giving strong advice and recommendation.'
      }
    ]
  },
  {
    id: 'l3-direct-speech-inverted-commas',
    slug: 'direct-speech-inverted-commas',
    title: 'Direct Speech: Inverted Commas (Speech Marks)',
    subtitle: 'The strict British punctuation rules for recording spoken dialogue.',
    level: 'level-3',
    levelLabel: 'Level 3: Intermediate',
    levelStage: 'Upper Key Stage 2',
    ageGroup: 'Ages 9–11',
    category: 'punctuation-mechanics',
    categoryLabel: 'Punctuation & Mechanics',
    iconName: 'MessageSquare',
    estimatedMinutes: 7,
    overview: 'In British English, **inverted commas** (also called speech marks or quotation marks: `"..."` or `\'...\'`) hug the exact words spoken out loud by a character. Punctuation (commas, question marks, full stops) must sit **INSIDE** the closing inverted comma before the reporting clause.',
    whyItMatters: 'Direct speech formatting is heavily tested in KS2 SATs and GCSE creative writing.',
    sections: [
      {
        id: 'sec-speech-rules-uk',
        title: '1. The Four Golden Rules of Direct Speech',
        content: 'Follow these four rules every time someone speaks in a story:',
        bulletPoints: [
          '**Rule 1 - Open & Close (Exact words only):** Inverted commas wrap only around the words actually uttered (for example: *"Keep your eyes on the loch," whispered the guide*).',
          '**Rule 2 - Capital Start (Spoken opening):** The first spoken word inside the speech marks begins with a capital letter (for example: *Hamish shouted, "**Look** at the golden eagle!"*).',
          '**Rule 3 - Punctuation Inside (The shield):** A comma, full stop, exclamation mark, or question mark sits *inside* the closing speech mark (for example: *"Have you heard the bagpipes**?**" asked Fiona*).',
          '**Rule 4 - New Speaker, New Line:** Start a brand new paragraph whenever a different character speaks (for example: *"I love Highland reels," said Callum. <br/>"So do I," replied Morag*).'
        ],
        examples: [
          {
            id: 'ex-l3-ds1',
            sentence: '**"Please pass the freshly baked Scottish shortbread,"** whispered Penelope politely.',
            highlightWords: ['"Please pass the freshly baked Scottish shortbread,"'],
            explanation: 'The comma is placed INSIDE the closing speech marks before the reporting clause "whispered Penelope politely".',
            contextNote: 'Scottish afternoon tea'
          },
          {
            id: 'ex-l3-ds2',
            sentence: 'The ferry captain shouted, **"Secure the mooring lines before the Atlantic tide rises!"**',
            highlightWords: ['"Secure the mooring lines before the Atlantic tide rises!"'],
            explanation: 'A comma introduces the direct speech, and the exclamation mark sits safely inside the quotation marks.',
            contextNote: 'Hebridean ferry harbour'
          },
          {
            id: 'ex-l3-ds3',
            sentence: '**"Did you catch sight of Urquhart Castle through the fog?"** enquired the curious tourist.',
            highlightWords: ['"Did you catch sight of Urquhart Castle through the fog?"'],
            explanation: 'The question mark belongs inside the closing inverted comma, followed by a lowercase reporting verb.',
            contextNote: 'Loch Ness exploration'
          }
        ],
        ruleSummary: 'Inverted commas wrap spoken words, and terminal punctuation stays inside the quotes.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l3-ds1',
        title: 'The Punctuation Shield',
        trick: 'Think of the closing speech mark as an umbrella or shield protecting the punctuation mark! The comma, full stop, question mark, or exclamation mark must stay under the shield on the inside.',
        mnemonic: 'Punctuation goes INSIDE the speech marks!',
        commonMistake: 'Putting the comma outside the speech marks (for example: *"Look at the castle", whispered Callum.*).',
        correctWay: 'Write: *"Look at the castle," whispered Callum.*',
        explanation: 'In British grammar, terminal speech punctuation belongs within the quotes.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l3-ds',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which sentence is punctuated correctly according to British English speech rules?',
        instruction: 'Select the perfectly punctuated dialogue sentence.',
        options: [
          '"Where is the bagpipe workshop"? asked Oliver.',
          '"Where is the bagpipe workshop?" asked Oliver.',
          '"where is the bagpipe workshop?" asked Oliver.',
          '"Where is the bagpipe workshop", asked Oliver?'
        ],
        correctIndex: 1,
        explanation: '**"Where is the bagpipe workshop?" asked Oliver.** is correct because "Where" is capitalised and the question mark is inside the speech marks.'
      },
      {
        id: 'ex-q2-l3-ds',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find the incorrectly placed punctuation mark in this sentence.',
        instruction: 'Click the mistake in speech punctuation.',
        sentenceWithMistake: '"The Highland train is arriving now", announced the conductor.',
        words: ['"The', 'Highland', 'train', 'is', 'arriving', 'now",', 'announced', 'the', 'conductor.'],
        errorWordIndex: 5,
        correctedWord: 'now,"',
        ruleViolated: 'The comma must be placed INSIDE the closing inverted commas.',
        explanation: 'The comma should be placed inside: **"The Highland train is arriving now,"**.'
      }
    ]
  }
];

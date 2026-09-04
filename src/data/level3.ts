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
          '**Definite Article:** **the** (refers to a specific item already known to the listener)',
          '**Indefinite Articles:** **a** (before consonant sounds: *a unicorn, a book*) and **an** (before vowel sounds: *an hour, an apple*)',
          '**Demonstratives:** **this, that, these, those** (pointing in space or time)',
          '**Possessive Determiners:** **my, your, our, their, his, her, its** (sitting directly before the noun)',
          '**Quantifiers & Numerals:** **several, few, every, each, three, many**'
        ],
        examples: [
          {
            id: 'ex-l3-det1',
            sentence: '**Those** **three** swans glided gracefully across **the** tranquil lake.',
            highlightWords: ['Those', 'three', 'the'],
            explanation: '**Those** is a demonstrative determiner; **three** is a numerical determiner; **the** is a definite article.',
            contextNote: 'Royal river wildlife'
          },
          {
            id: 'ex-l3-det2',
            sentence: '**Every** pupil must bring **their** own pencil case to **an** examination.',
            highlightWords: ['Every', 'their', 'an'],
            explanation: '**Every** is a quantifier determiner; **their** is a possessive determiner; **an** is an indefinite article.',
            contextNote: 'School examination'
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
        correctWay: 'In modern British English, write *"a historic occasion"* and *"a university"*.',
        explanation: 'Because "historic" has a pronounced "h" and "university" begins with a /j/ sound.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l3-det',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which word in this sentence is a DEMONSTRATIVE determiner? "Those antique coins were discovered in Yorkshire."',
        instruction: 'Identify the demonstrative determiner.',
        options: ['Those', 'antique', 'discovered', 'in'],
        correctIndex: 0,
        explanation: '**Those** points specifically to the coins, making it a demonstrative determiner.'
      },
      {
        id: 'ex-q2-l3-det',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on all the DETERMINERS in this sentence.',
        instruction: 'Click each determiner (articles, possessives, quantifiers).',
        sentence: 'Several pupils ate their lunch under the oak tree.',
        words: ['Several', 'pupils', 'ate', 'their', 'lunch', 'under', 'the', 'oak', 'tree.'],
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
        content: 'When an adverbial is placed before the main clause, it sets the scene:',
        bulletPoints: [
          '**Time (When?):** *Early the following morning, the ship set sail.*',
          '**Place (Where?):** *High above the snow-capped mountains, an eagle soared.*',
          '**Manner (How?):** *Without making a sound, the cat crept forward.*',
          '**Frequency (How often?):** *Every Tuesday afternoon, we practice choir.*'
        ],
        examples: [
          {
            id: 'ex-l3-fa1',
            sentence: '**As the clock struck midnight,** the ancient clock tower began to chime.',
            highlightWords: ['As the clock struck midnight,'],
            explanation: 'This fronted adverbial of time sets the scene and is separated from the main clause by a comma.',
            contextNote: 'Midnight atmosphere'
          },
          {
            id: 'ex-l3-fa2',
            sentence: '**Deep beneath the castle dungeons,** the knights uncovered a secret passage.',
            highlightWords: ['Deep beneath the castle dungeons,'],
            explanation: 'This prepositional phrase acts as a fronted adverbial of place, followed by a comma.',
            contextNote: 'Historical discovery'
          }
        ],
        ruleSummary: 'Fronted Adverbial + Comma + Main Clause (Subject + Verb).'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l3-fa1',
        title: 'The "Move It to the Back" Test',
        trick: 'To check if a phrase is a fronted adverbial, try moving it to the very end of your sentence. If the sentence still makes perfect grammatical sense, it is indeed a fronted adverbial! Example: *"Without warning, the storm hit"* -> *"The storm hit without warning."*',
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
        sentence: 'Before the sun had risen, the fishermen set off to sea.',
        words: ['Before', 'the', 'sun', 'had', 'risen,', 'the', 'fishermen', 'set', 'off', 'to', 'sea.'],
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
        sentenceWithMistake: 'In the middle of the dark forest the explorers pitched their tent.',
        words: ['In', 'the', 'middle', 'of', 'the', 'dark', 'forest', 'the', 'explorers', 'pitched', 'tent.'],
        errorWordIndex: 6,
        correctedWord: 'forest,',
        ruleViolated: 'A fronted adverbial must be separated from the main clause by a comma.',
        explanation: 'There must be a comma after "forest" -> **In the middle of the dark forest,**'
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
          '**I** - If',
          '**S** - Since',
          '**A** - As',
          '**W** - When',
          '**A** - Although',
          '**W** - While',
          '**A** - After',
          '**B** - Before',
          '**U** - Until',
          '**B** - Because'
        ],
        examples: [
          {
            id: 'ex-l3-sc1',
            sentence: '**Although** it was freezing cold, the hardy swimmers plunged into the Scottish loch.',
            highlightWords: ['Although', 'the hardy swimmers plunged into the Scottish loch'],
            explanation: '"Although it was freezing cold" is the subordinate clause; "the hardy swimmers plunged into the Scottish loch" is the main clause.',
            contextNote: 'Scottish loch swimming'
          },
          {
            id: 'ex-l3-sc2',
            sentence: 'The train ground to a halt **because** sheep had wandered onto the railway tracks.',
            highlightWords: ['because'],
            explanation: '"The train ground to a halt" is the main clause; "because sheep had wandered onto the railway tracks" is the subordinate clause explaining why.',
            contextNote: 'Rural British train travel'
          }
        ],
        ruleSummary: 'Complex Sentence = Main Clause (makes sense alone) + Subordinate Clause (starts with subordinating conjunction).'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l3-sc1',
        title: 'The Subordinate Comma Rule',
        trick: 'If the subordinate clause comes FIRST, you MUST put a comma after it. If the main clause comes first, you usually do NOT need a comma!',
        mnemonic: 'Subordinate First = COMMA! Main Clause First = NO COMMA!',
        commonMistake: 'Writing a subordinate clause alone as if it were a full sentence (e.g. *"Because it was raining."*).',
        correctWay: 'Attach it to a main clause: *"We brought umbrellas because it was raining."*',
        explanation: 'A subordinate clause cannot stand alone.'
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
        sentence: 'When the bell chimed three o\'clock, the excited children packed their satchels.',
        mainClause: 'the excited children packed their satchels',
        subordinateClause: 'When the bell chimed three o\'clock',
        conjunctionOrConnective: 'When',
        explanation: '"When the bell chimed three o\'clock" is the subordinate clause introduced by "When", while "the excited children packed their satchels" can stand alone as the main clause.'
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
          '**Who:** For people (*The scientist who discovered the fossil...*)',
          '**Which:** For animals and objects (*The castle, which was built in 1066...*)',
          '**That:** For people, animals, and things (*The book that I borrowed...*)',
          '**Whose:** To show possession (*The boy whose dog escaped...*)',
          '**Where / When:** For places and times (*The village where Shakespeare was born...*)'
        ],
        examples: [
          {
            id: 'ex-l3-rc1',
            sentence: 'Queen Victoria, **who reigned for sixty-three years**, oversaw immense industrial change.',
            highlightWords: ['who reigned for sixty-three years'],
            explanation: '"who reigned for sixty-three years" is a non-defining relative clause embedded with pair of commas.',
            contextNote: 'Victorian British history'
          },
          {
            id: 'ex-l3-rc2',
            sentence: 'We climbed the ancient oak tree **which stood in the village square**.',
            highlightWords: ['which stood in the village square'],
            explanation: '"which stood in the village square" gives extra information about the ancient oak tree.',
            contextNote: 'Village landmark'
          }
        ],
        ruleSummary: 'Relative Clause = Relative Pronoun (who/which/that/whose) + modifying clause.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l3-rc1',
        title: 'Embedded Relative Clauses (Commalike Sandwiches)',
        trick: 'When a relative clause sits in the middle of a sentence, put a comma before AND after it (like two slices of bread)! If you remove the relative clause, the remaining sentence must still make complete sense.',
        mnemonic: 'Can you take out the commas and the sentence still survives?',
        commonMistake: 'Using "which" for human beings (e.g. *"The teacher which taught me"*).',
        correctWay: 'Use "who" for people: *"The teacher **who** taught me."*',
        explanation: 'In standard British English, "who" is reserved for people.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l3-rc',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Choose the correct relative pronoun: "The detective ___ solved the mystery received an award."',
        instruction: 'Pick the pronoun for a person.',
        options: ['which', 'who', 'where', 'when'],
        correctIndex: 1,
        explanation: 'Use **who** when referring to people (the detective).'
      },
      {
        id: 'ex-q2-l3-rc',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the entire RELATIVE CLAUSE in this sentence.',
        instruction: 'Click the words in the relative clause.',
        sentence: 'The cottage which had a thatched roof looked charming.',
        words: ['The', 'cottage', 'which', 'had', 'a', 'thatched', 'roof', 'looked', 'charming.'],
        targetIndices: [2, 3, 4, 5, 6],
        targetCategoryLabel: 'Relative Clause',
        explanation: '**which had a thatched roof** is the relative clause modifying "The cottage".'
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
          '**High Certainty / Fact:** *It **will** rain tomorrow.*',
          '**Possibility / Low Certainty:** *It **might** / **could** rain tomorrow.*',
          '**Strong Obligation / Rule:** *You **must** wear a seatbelt.*',
          '**Advice / Recommendation:** *You **should** eat your vegetables.*',
          '**Ability:** *Eleanor **can** play the cello.*'
        ],
        examples: [
          {
            id: 'ex-l3-mv1',
            sentence: 'Passengers **must** mind the gap between the train and the platform edge.',
            highlightWords: ['must'],
            explanation: '**Must** indicates an essential safety obligation on London Underground.',
            contextNote: 'London transport safety'
          },
          {
            id: 'ex-l3-mv2',
            sentence: 'The clouds are gathering; it **might** snow in the Scottish Highlands tonight.',
            highlightWords: ['might'],
            explanation: '**Might** expresses possibility rather than absolute certainty.',
            contextNote: 'Scottish weather forecast'
          }
        ],
        ruleSummary: 'Modal verbs pair with root verbs to indicate possibility, ability, necessity, or certainty.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l3-mv1',
        title: 'The Modal Root Verb Rule',
        trick: 'Modal verbs are NEVER followed by an "-s" or "-ed" ending on the main verb. The main verb stays in its bare infinitive form (e.g. *He must **go***, never *He must goes*).',
        mnemonic: 'Modal verb + Bare infinitive root!',
        commonMistake: 'Saying *"I should of gone"* instead of *"I should have gone"*.',
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
        explanation: '**Will** expresses certainty that an event is taking place in the future.'
      },
      {
        id: 'ex-q2-l3-mv',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the MODAL VERB in this sentence.',
        instruction: 'Click the modal auxiliary verb.',
        sentence: 'You should always check both ways before crossing the road.',
        words: ['You', 'should', 'always', 'check', 'both', 'ways', 'before', 'crossing', 'road.'],
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
        content: 'Follow these rules every time someone speaks in a story:',
        bulletPoints: [
          '**Rule 1 - Open & Close:** Inverted commas go only around the words actually spoken out loud.',
          '**Rule 2 - Capital Start:** The first spoken word inside the speech marks begins with a capital letter.',
          '**Rule 3 - Punctuation Inside:** A comma, full stop, exclamation mark, or question mark sits *inside* the closing speech mark.',
          '**Rule 4 - New Speaker, New Line:** Start a brand new line/paragraph whenever a different character speaks.'
        ],
        examples: [
          {
            id: 'ex-l3-ds1',
            sentence: '**"Please pass the strawberry jam,"** whispered Penelope politely.',
            highlightWords: ['"Please pass the strawberry jam,"'],
            explanation: 'The comma is placed INSIDE the closing speech marks before the reporting clause "whispered Penelope politely".',
            contextNote: 'Breakfast dialogue'
          },
          {
            id: 'ex-l3-ds2',
            sentence: 'The captain shouted, **"All hands on deck immediately!"**',
            highlightWords: ['"All hands on deck immediately!"'],
            explanation: 'A comma introduces the speech, and the exclamation mark sits safely inside the quotation marks.',
            contextNote: 'Nautical adventure'
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
        commonMistake: 'Putting the comma outside the speech marks (e.g. *"Stop running", shouted Mum.*).',
        correctWay: 'Write: *"Stop running," shouted Mum.*',
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
          '"Where are my boots"? asked Oliver.',
          '"Where are my boots?" asked Oliver.',
          '"where are my boots?" asked Oliver.',
          '"Where are my boots", asked Oliver?'
        ],
        correctIndex: 1,
        explanation: '**"Where are my boots?" asked Oliver.** is correct because "Where" is capitalised and the question mark is inside the speech marks.'
      },
      {
        id: 'ex-q2-l3-ds',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find the incorrectly placed punctuation mark in this sentence.',
        instruction: 'Click the mistake in speech punctuation.',
        sentenceWithMistake: '"The train is arriving now", announced the conductor.',
        words: ['"The', 'train', 'is', 'arriving', 'now",', 'announced', 'the', 'conductor.'],
        errorWordIndex: 4,
        correctedWord: 'now,"',
        ruleViolated: 'The comma must be placed INSIDE the closing inverted commas.',
        explanation: 'The comma should be placed inside: **"The train is arriving now,"**.'
      }
    ]
  }
];

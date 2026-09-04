import { GrammarTopic } from '../types';

export const LEVEL_2_TOPICS: GrammarTopic[] = [
  {
    id: 'l2-pronouns',
    slug: 'pronouns-personal-possessive',
    title: 'Pronouns: Personal & Possessive',
    subtitle: 'Avoiding clunky repetition by replacing nouns smoothly.',
    level: 'level-2',
    levelLabel: 'Level 2: Foundation',
    levelStage: 'Lower Key Stage 2',
    ageGroup: 'Ages 7–9',
    category: 'parts-of-speech',
    categoryLabel: 'Parts of Speech',
    iconName: 'UserCheck',
    estimatedMinutes: 6,
    overview: 'A **pronoun** is a word used in place of a noun or noun phrase to avoid repeating the same names over and over again. Instead of saying *"Jack picked up Jack\'s bag because Jack was late"*, we say *"Jack picked up **his** bag because **he** was late"*!',
    whyItMatters: 'Pronouns make sentences sound natural, cohesive, and easy to read.',
    sections: [
      {
        id: 'sec-personal-pronouns',
        title: '1. Personal Pronouns (Subject & Object)',
        content: 'Personal pronouns represent specific people or things. They change form depending on whether they are the **subject** (doing the action) or the **object** (receiving the action).',
        bulletPoints: [
          '**Subject Pronouns (Doers):** I, you, he, she, it, we, they',
          '**Object Pronouns (Receivers):** me, you, him, her, it, us, them',
          '**Example:** **She** (subject) gave the binoculars to **him** (object).'
        ],
        examples: [
          {
            id: 'ex-l2-pr1',
            sentence: '**They** explored the ancient ruins while the guide explained the history to **them**.',
            highlightWords: ['They', 'them'],
            explanation: '**They** is the subject pronoun doing the exploring; **them** is the object pronoun receiving the explanation.',
            contextNote: 'Historical excursion'
          },
          {
            id: 'ex-l2-pr2',
            sentence: 'When **we** visited the Lake District, **it** rained every single afternoon.',
            highlightWords: ['we', 'it'],
            explanation: '**We** refers to the family/group; **it** is an impersonal pronoun referring to the weather.',
            contextNote: 'Cumbrian holiday'
          }
        ],
        ruleSummary: 'Subject pronouns do the verb; Object pronouns receive the verb.'
      },
      {
        id: 'sec-possessive-pronouns',
        title: '2. Possessive Pronouns (Showing Ownership)',
        content: 'Possessive pronouns show who owns something without needing an apostrophe. Common possessive pronouns include: **mine, yours, his, hers, its, ours, theirs**.',
        bulletPoints: [
          '**Possessive Determiners (sit before noun):** my coat, your umbrella, their dog',
          '**Possessive Pronouns (stand alone):** The coat is *mine*, the umbrella is *yours*, the victory is *theirs*.'
        ],
        examples: [
          {
            id: 'ex-l2-pr3',
            sentence: 'Is this red cricket bat **yours** or is it **mine**?',
            highlightWords: ['yours', 'mine'],
            explanation: '**Yours** and **mine** stand alone to show ownership of the cricket bat.',
            contextNote: 'British sports'
          },
          {
            id: 'ex-l2-pr4',
            sentence: 'The robin built **its** nest inside the old garden shed.',
            highlightWords: ['its'],
            explanation: '**Its** shows ownership belonging to the bird. (Note: NO apostrophe!).',
            contextNote: 'Wildlife in the garden'
          }
        ],
        ruleSummary: 'Possessive pronouns (mine, yours, ours, theirs, its) never use apostrophes.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l2-pr1',
        title: 'The "Between You and Me" / "I vs Me" Test',
        trick: 'To know whether to use "I" or "me", temporarily remove the other person from the sentence! Example: *"James and (I/me) went to the shop"* -> *"I went to the shop"*, so *"James and I"* is correct.',
        mnemonic: 'Take the other person away to hear what sounds right!',
        commonMistake: 'Saying *"The teacher spoke to James and I"* (Incorrect object).',
        correctWay: 'Say *"The teacher spoke to James and me"* (Because you say *"The teacher spoke to me"*).',
        explanation: 'After a preposition like "to" or "between", always use object pronouns (me, him, her, us, them).'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l2-pr',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which pronoun correctly completes this sentence? "Grandma baked fairy cakes for Toby and ___."',
        instruction: 'Choose the correct personal pronoun.',
        options: ['I', 'me', 'mine', 'myself'],
        correctIndex: 1,
        explanation: 'Use **me** because Grandma baked cakes for **me** (object of preposition "for").'
      },
      {
        id: 'ex-q2-l2-pr',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on all the PRONOUNS in this sentence.',
        instruction: 'Click each pronoun.',
        sentence: 'She gave him the keys because they were his.',
        words: ['She', 'gave', 'him', 'the', 'keys', 'because', 'they', 'were', 'his.'],
        targetIndices: [0, 2, 6, 8],
        targetCategoryLabel: 'Pronoun',
        explanation: '**She** (subject), **him** (object), **they** (subject), and **his** (possessive pronoun) are all pronouns.'
      }
    ]
  },
  {
    id: 'l2-adverbs',
    slug: 'adverbs-manner-time-place',
    title: 'Adverbs: Manner, Time, Place & Degree',
    subtitle: 'Modifying verbs, adjectives, and other adverbs to add precision.',
    level: 'level-2',
    levelLabel: 'Level 2: Foundation',
    levelStage: 'Lower Key Stage 2',
    ageGroup: 'Ages 7–9',
    category: 'parts-of-speech',
    categoryLabel: 'Parts of Speech',
    iconName: 'Activity',
    estimatedMinutes: 6,
    overview: 'An **adverb** gives more information about how, when, where, or to what extent an action happens. Most adverbs of manner end in the suffix **-ly** (e.g. *cautiously, swiftly*), but many common adverbs do not (e.g. *often, yesterday, everywhere, very*).',
    whyItMatters: 'Adverbs bring drama and nuance to actions, answering questions like *How? When? Where?* and *How often?*.',
    sections: [
      {
        id: 'sec-adverb-types',
        title: '1. The Four Major Types of Adverbs',
        content: 'Adverbs are classified according to the question they answer:',
        bulletPoints: [
          '**Adverbs of Manner (How?):** quietly, frantically, gracefully, clumsily',
          '**Adverbs of Time (When?):** yesterday, soon, immediately, afterwards',
          '**Adverbs of Place (Where?):** outside, upstairs, everywhere, nearby',
          '**Adverbs of Degree & Frequency (How much/How often?):** extremely, very, always, rarely'
        ],
        examples: [
          {
            id: 'ex-l2-adv1',
            sentence: 'The red fox crept **stealthily** through the misty garden **yesterday**.',
            highlightWords: ['stealthily', 'yesterday'],
            explanation: '**Stealthily** tells us HOW the fox crept (manner). **Yesterday** tells us WHEN (time).',
            contextNote: 'Garden wildlife'
          },
          {
            id: 'ex-l2-adv2',
            sentence: 'The train arrived **quite** **late** because snow fell **heavily** **everywhere**.',
            highlightWords: ['quite', 'late', 'heavily', 'everywhere'],
            explanation: '**Heavily** (manner), **everywhere** (place), **late** (time), and **quite** (degree).',
            contextNote: 'British winter transit'
          }
        ],
        ruleSummary: 'Adverbs modify verbs by describing How, When, Where, or How Much.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l2-adv1',
        title: 'Good vs Well in British English',
        trick: '**Good** is an adjective (describes a noun). **Well** is an adverb (describes how you do something).',
        mnemonic: 'You play a GOOD game of football (Adjective), but you play WELL (Adverb)!',
        commonMistake: 'Saying *"I did good in my spelling test"* instead of *"I did well"*.',
        correctWay: 'Say: *"I did **well** in my spelling test."*',
        explanation: '"Did" is a verb, so it must be modified by the adverb "well".'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l2-adv',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which word in this sentence is an adverb of MANNER (tells how)?',
        instruction: 'Sentence: "The brass band played enthusiastically on the village green."',
        options: ['brass', 'played', 'enthusiastically', 'green'],
        correctIndex: 2,
        explanation: '**Enthusiastically** describes HOW the band played.'
      },
      {
        id: 'ex-q2-l2-adv',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the ADVERB OF PLACE in this sentence.',
        instruction: 'Click the word showing where the action happened.',
        sentence: 'The children looked everywhere for the lost puppy.',
        words: ['The', 'children', 'looked', 'everywhere', 'for', 'the', 'lost', 'puppy.'],
        targetIndices: [3],
        targetCategoryLabel: 'Adverb of Place',
        explanation: '**Everywhere** answers the question "Where did they look?".'
      }
    ]
  },
  {
    id: 'l2-prepositions',
    slug: 'prepositions-place-time-direction',
    title: 'Prepositions & Prepositional Phrases',
    subtitle: 'Mapping time, space, position, and direction.',
    level: 'level-2',
    levelLabel: 'Level 2: Foundation',
    levelStage: 'Lower Key Stage 2',
    ageGroup: 'Ages 7–9',
    category: 'parts-of-speech',
    categoryLabel: 'Parts of Speech',
    iconName: 'MapPin',
    estimatedMinutes: 6,
    overview: 'A **preposition** shows the relationship between a noun (or pronoun) and another word in the sentence. Prepositions tell us where something is in **space**, when it happens in **time**, or which **direction** it is moving.',
    whyItMatters: 'Prepositions build prepositional phrases that add vital setting and temporal context to sentences.',
    sections: [
      {
        id: 'sec-preposition-types',
        title: '1. Position, Time, and Movement',
        content: 'Prepositions connect nouns to the rest of the clause:',
        bulletPoints: [
          '**Place & Position:** under, above, between, behind, beneath, alongside',
          '**Time:** before, during, after, until, throughout, at midnight',
          '**Direction:** towards, through, across, into, onto, past'
        ],
        examples: [
          {
            id: 'ex-l2-prep1',
            sentence: 'The squirrel darted **across** the lawn and disappeared **beneath** the wooden shed.',
            highlightWords: ['across', 'beneath'],
            explanation: '**Across** indicates direction; **beneath** indicates physical location.',
            contextNote: 'Garden wildlife'
          },
          {
            id: 'ex-l2-prep2',
            sentence: '**During** the thunderstorm, we gathered **inside** the cosy kitchen.',
            highlightWords: ['During', 'inside'],
            explanation: '**During** shows time; **inside** shows position.',
            contextNote: 'Cosy evening'
          }
        ],
        ruleSummary: 'Preposition + Noun/Pronoun = Prepositional Phrase (e.g. *under the table*, *at three o\'clock*).'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l2-prep1',
        title: 'The "Squirrel & Tree" Rule',
        trick: 'Almost anything a squirrel can do to a tree is a preposition! A squirrel can run *up* a tree, *down* a tree, *around* a tree, *behind* a tree, *into* a tree, *past* a tree, or sleep *under* a tree!',
        mnemonic: 'Think: What can a squirrel do relative to a tree?',
        commonMistake: 'Confusing "off of" (American slang) with proper British "off".',
        correctWay: 'Say: *"He stepped **off** the pavement"* (never *"off of"*).',
        explanation: 'In standard British English, "of" is redundant after "off".'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l2-prep',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which word is a preposition of TIME in: "We will eat lunch after the museum tour"?',
        instruction: 'Pick the time preposition.',
        options: ['eat', 'after', 'museum', 'tour'],
        correctIndex: 1,
        explanation: '**After** indicates the timing of the meal.'
      },
      {
        id: 'ex-q2-l2-prep',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on all the PREPOSITIONS in this sentence.',
        instruction: 'Click each preposition.',
        sentence: 'The badger burrowed through the hedge and into the field.',
        words: ['The', 'badger', 'burrowed', 'through', 'the', 'hedge', 'and', 'into', 'the', 'field.'],
        targetIndices: [3, 7],
        targetCategoryLabel: 'Preposition',
        explanation: '**Through** and **into** show movement and direction.'
      }
    ]
  },
  {
    id: 'l2-conjunctions-fanboys',
    slug: 'coordinating-conjunctions-fanboys',
    title: 'Coordinating Conjunctions: The FANBOYS Rule',
    subtitle: 'Joining equal words, phrases, and independent clauses with ease.',
    level: 'level-2',
    levelLabel: 'Level 2: Foundation',
    levelStage: 'Lower Key Stage 2',
    ageGroup: 'Ages 7–9',
    category: 'parts-of-speech',
    categoryLabel: 'Parts of Speech',
    iconName: 'Link',
    estimatedMinutes: 6,
    overview: 'A **coordinating conjunction** is a joining word that links two words, two phrases, or two independent clauses of **equal grammatical importance**. There are exactly seven coordinating conjunctions in English, remembered by the famous acronym **FANBOYS**.',
    whyItMatters: 'Using FANBOYS helps you build compound sentences and connect ideas smoothly without choppy repetition.',
    sections: [
      {
        id: 'sec-fanboys-breakdown',
        title: '1. The Seven FANBOYS Conjunctions',
        content: 'Each letter in FANBOYS stands for a specific conjunction with its own meaning:',
        bulletPoints: [
          '**F - For:** Gives a reason (similar to *because*): *He wore a coat, for it was freezing.*',
          '**A - And:** Adds one thing to another: *We had tea and scones.*',
          '**N - Nor:** Used with negative statements: *She did not eat, nor did she drink.*',
          '**B - But:** Shows contrast or surprise: *The walk was exhausting, but it was rewarding.*',
          '**O - Or:** Presents a choice or alternative: *Would you prefer milk or water?*',
          '**Y - Yet:** Shows unexpected contrast (like *even so*): *The castle was ancient, yet sturdy.*',
          '**S - So:** Shows the result or consequence: *The rain poured, so we stayed inside.*'
        ],
        examples: [
          {
            id: 'ex-l2-c1',
            sentence: 'Benjamin wanted to ride his bicycle, **but** the tyre was completely flat.',
            highlightWords: ['but'],
            explanation: '**But** links two complete independent clauses that contrast with each other.',
            contextNote: 'Everyday obstacle'
          },
          {
            id: 'ex-l2-c2',
            sentence: 'The museum was closed on Monday, **so** we visited the botanical gardens instead.',
            highlightWords: ['so'],
            explanation: '**So** shows the result of the museum being closed.',
            contextNote: 'Day out in Britain'
          }
        ],
        ruleSummary: 'FANBOYS = For, And, Nor, But, Or, Yet, So.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l2-c1',
        title: 'The FANBOYS Comma Rule',
        trick: 'When you use a FANBOYS conjunction to join two COMPLETE sentences (clauses that could each stand alone as full sentences), place a **comma** before the conjunction!',
        mnemonic: 'Two full sentences + FANBOYS = Comma before the word!',
        commonMistake: 'Putting a comma before "and" when just joining two simple words (e.g. *apples, and pears*).',
        correctWay: 'Write: *apples and pears* (No comma needed when joining two words).',
        explanation: 'A comma is only required when joining two independent clauses.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l2-fanboys',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which acronym helps you remember all seven coordinating conjunctions?',
        instruction: 'Select the correct memory tool.',
        options: ['PESTLE', 'FANBOYS', 'PEMDAS', 'ROYGBIV'],
        correctIndex: 1,
        explanation: '**FANBOYS** = For, And, Nor, But, Or, Yet, So.'
      },
      {
        id: 'ex-q2-l2-fanboys',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Choose the best conjunction: "Sophie studied hard for the test, ___ she achieved top marks."',
        instruction: 'Select the conjunction showing result.',
        options: ['nor', 'yet', 'so', 'for'],
        correctIndex: 2,
        explanation: '**So** shows the direct result of studying hard.'
      }
    ]
  },
  {
    id: 'l2-compound-sentences',
    slug: 'compound-sentences',
    title: 'Compound Sentences: Joining Ideas',
    subtitle: 'Connecting two independent thoughts into a balanced sentence.',
    level: 'level-2',
    levelLabel: 'Level 2: Foundation',
    levelStage: 'Lower Key Stage 2',
    ageGroup: 'Ages 7–9',
    category: 'sentence-structure',
    categoryLabel: 'Sentence Structure',
    iconName: 'GitMerge',
    estimatedMinutes: 6,
    overview: 'A **compound sentence** contains two or more **independent clauses** (clauses that can stand alone as complete sentences) joined by a coordinating conjunction (FANBOYS) or a semicolon.',
    whyItMatters: 'Compound sentences prevent your writing from feeling like a list of robotic short sentences.',
    sections: [
      {
        id: 'sec-compound-structure',
        title: '1. Anatomy of a Compound Sentence',
        content: 'To make a compound sentence, you take two simple sentences and connect them:',
        bulletPoints: [
          '**Clause 1 (Independent):** *The sun set behind the hills.*',
          '**Coordinating Conjunction + Comma:** *, and*',
          '**Clause 2 (Independent):** *the stars twinkled in the clear night sky.*',
          '**Combined Compound Sentence:** *The sun set behind the hills, and the stars twinkled in the clear night sky.*'
        ],
        examples: [
          {
            id: 'ex-l2-cmp1',
            sentence: 'The bell rang for break time, **and** the pupils rushed onto the playground.',
            highlightWords: ['and'],
            explanation: 'Both "The bell rang for break time" and "the pupils rushed onto the playground" are full sentences joined by ", and".',
            contextNote: 'School day'
          },
          {
            id: 'ex-l2-cmp2',
            sentence: 'The detective searched the study carefully, **yet** she found no clue.',
            highlightWords: ['yet'],
            explanation: 'Two independent clauses joined by ", yet" showing unexpected contrast.',
            contextNote: 'Mystery story'
          }
        ],
        ruleSummary: 'Compound Sentence = Independent Clause + [Comma + FANBOYS] + Independent Clause.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l2-cmp1',
        title: 'The Two-Sentence Test',
        trick: 'Cover up the conjunction. If both sides of your sentence can stand by themselves as complete, valid sentences, you have successfully built a compound sentence!',
        mnemonic: 'Can both halves stand alone? If yes, it is COMPOUND!',
        commonMistake: 'Creating a **comma splice** by joining two sentences with ONLY a comma and no conjunction (e.g. *The bell rang, the pupils ran out*).',
        correctWay: 'Add a coordinating conjunction: *The bell rang, **and** the pupils ran out.*',
        explanation: 'A comma alone is not strong enough to join two independent clauses in English.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l2-cmp',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which of the following is a TRUE compound sentence?',
        instruction: 'Pick the sentence with two independent clauses joined by a conjunction.',
        options: [
          'Running quickly down the leafy street.',
          'The wind howled through the trees, but the sturdy cottage stood firm.',
          'Because the weather was chilly in November.',
          'Charlotte and Lucas ate fish and chips by the seaside.'
        ],
        correctIndex: 1,
        explanation: '**The wind howled through the trees, but the sturdy cottage stood firm.** has two complete independent clauses joined by ", but".'
      },
      {
        id: 'ex-q2-l2-cmp',
        type: 'sentence-builder',
        difficultyStep: 2,
        prompt: 'Build a compound sentence from these parts.',
        instruction: 'Assemble the independent clauses and coordinating conjunction.',
        scrambledWords: ['Arthur', 'tea,', 'the', 'brewed', 'baked', 'Isla', 'and', 'scones.'],
        correctSentence: 'Arthur brewed the tea, and Isla baked scones.',
        explanation: 'Clause 1: "Arthur brewed the tea" + ", and" + Clause 2: "Isla baked scones".'
      }
    ]
  },
  {
    id: 'l2-apostrophes-contractions-possession',
    slug: 'apostrophes-contractions-possession',
    title: 'Apostrophes: Contractions & Singular Possession',
    subtitle: 'Mastering the two main jobs of the most misunderstood punctuation mark.',
    level: 'level-2',
    levelLabel: 'Level 2: Foundation',
    levelStage: 'Lower Key Stage 2',
    ageGroup: 'Ages 7–9',
    category: 'punctuation-mechanics',
    categoryLabel: 'Punctuation & Mechanics',
    iconName: 'Zap',
    estimatedMinutes: 6,
    overview: 'In British English, the **apostrophe (\')** has only TWO legitimate purposes: **omission/contraction** (showing where letters have been left out) and **possession** (showing who owns what). It is NEVER used to make words plural!',
    whyItMatters: 'Misplaced apostrophes (like the infamous "greengrocer\'s apostrophe" on signs) look sloppy and change the meaning of sentences.',
    sections: [
      {
        id: 'sec-apostrophe-contraction',
        title: '1. Apostrophes of Contraction (Omission)',
        content: 'When two words are squeezed together into one shorter word, the apostrophe marks the spot where letters have been removed:',
        bulletPoints: [
          'do not -> **don\'t** (the \' replaces \'o\')',
          'is not -> **isn\'t**',
          'they have -> **they\'ve** (the \' replaces \'ha\')',
          'I would / I had -> **I\'d**',
          'will not -> **won\'t** (irregular contraction)'
        ],
        examples: [
          {
            id: 'ex-l2-ap1',
            sentence: '**We\'ll** go to the seaside if **it\'s** sunny this afternoon.',
            highlightWords: ["We'll", "it's"],
            explanation: "**We'll** stands for *we will*; **it's** stands for *it is*.",
            contextNote: 'British weather plans'
          },
          {
            id: 'ex-l2-ap2',
            sentence: 'He **couldn\'t** find his umbrella, so he **didn\'t** leave the house.',
            highlightWords: ["couldn't", "didn't"],
            explanation: "**Couldn't** = could not; **didn't** = did not.",
            contextNote: 'Rainy day'
          }
        ],
        ruleSummary: 'The apostrophe sits exactly where the missing letters used to be.'
      },
      {
        id: 'sec-apostrophe-singular-possession',
        title: '2. Singular Possession (\'s)',
        content: 'To show that something belongs to ONE person, animal, or thing, add **\'s** after the singular noun.',
        bulletPoints: [
          'The toy belonging to the puppy -> the **puppy\'s** toy',
          'The crown belonging to the Queen -> the **Queen\'s** crown',
          'The pen belonging to James -> **James\'s** pen (or *James\'*)'
        ],
        examples: [
          {
            id: 'ex-l2-ap3',
            sentence: 'The **blackbird\'s** nest was hidden safely among the ivy leaves.',
            highlightWords: ["blackbird's"],
            explanation: 'The nest belongs to ONE blackbird, so we write **blackbird\'s**.',
            contextNote: 'Garden wildlife'
          },
          {
            id: 'ex-l2-ap4',
            sentence: '**Harry\'s** sister borrowed the teacher\'s dictionary.',
            highlightWords: ["Harry's", "teacher's"],
            explanation: 'Singular possession for Harry and the teacher.',
            contextNote: 'Classroom setting'
          }
        ],
        ruleSummary: 'Singular noun + \'s = ownership belonging to one thing.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l2-ap1',
        title: 'The Ultimate "It\'s vs Its" Rule',
        trick: '**It\'s** ALWAYS means **it is** or **it has**. If you cannot substitute "it is", then use **its** (possessive).',
        mnemonic: 'If you can say "it is", use the apostrophe: IT\'S!',
        commonMistake: 'Writing *"The dog wagged it\'s tail"*. (Incorrect!)',
        correctWay: 'Write *"The dog wagged **its** tail"* (Because you would never say *"The dog wagged it is tail"*).',
        explanation: 'Possessive pronouns like its, his, hers, and theirs never use apostrophes.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l2-ap',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Choose the correct form: "The cat licked ___ paws after finishing its dinner."',
        instruction: 'Select its or it\'s.',
        options: ["it's", "its", "its'", "it is'"],
        correctIndex: 1,
        explanation: '**its** is the possessive pronoun showing the cat owns its paws.'
      },
      {
        id: 'ex-q2-l2-ap',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find the word with the incorrect greengrocer\'s apostrophe.',
        instruction: 'Click on the plural word that should not have an apostrophe.',
        sentenceWithMistake: 'Fresh apple\'s and juicy oranges are on sale at the market.',
        words: ['Fresh', "apple's", 'and', 'juicy', 'oranges', 'are', 'on', 'sale.'],
        errorWordIndex: 1,
        correctedWord: 'apples',
        ruleViolated: 'Never use an apostrophe to make a simple plural noun.',
        explanation: 'The plural of apple is simply **apples** (no ownership is being shown).'
      }
    ]
  }
];

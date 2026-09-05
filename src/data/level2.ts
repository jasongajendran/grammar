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
    overview: 'A **pronoun** is a word used in place of a noun or noun phrase to avoid repeating the same names over and over again. Instead of saying *"Oliver picked up Oliver\'s violin because Oliver was late for the orchestra rehearsal"*, we write *"Oliver picked up **his** violin because **he** was late for the orchestra rehearsal"*!',
    whyItMatters: 'Pronouns make sentences sound natural, cohesive, and easy to read.',
    sections: [
      {
        id: 'sec-personal-pronouns',
        title: '1. Personal Pronouns (Subject & Object)',
        content: 'Personal pronouns represent specific people, creatures, or objects. They change form depending on whether they are the **subject** (doing the action) or the **object** (receiving the action).',
        bulletPoints: [
          '**Subject Pronouns (Doers):** I, you, he, she, it, we, they (for example: *When **we** visited Windsor Castle, **she** guided us through the royal palace*).',
          '**Object Pronouns (Receivers):** me, you, him, her, it, us, them (for example: *The park ranger gave **us** a map of the Lake District and showed **them** where red deer graze*).',
          '**Impersonal Pronoun ("It"):** Refers to weather, time, distances, or nature (for example: ***It** snowed heavily across the peaks of Snowdonia throughout December*).'
        ],
        examples: [
          {
            id: 'ex-l2-pr1',
            sentence: '**They** explored the ancient ruins of Conwy Castle while the local guide explained Welsh history to **them**.',
            highlightWords: ['They', 'them'],
            explanation: '**They** is the subject pronoun doing the exploring; **them** is the object pronoun receiving the guide\'s explanation.',
            contextNote: 'Historic castle excursion'
          },
          {
            id: 'ex-l2-pr2',
            sentence: 'When **we** sailed across Lake Windermere, **it** began to drizzle softly over the tranquil islands.',
            highlightWords: ['we', 'it'],
            explanation: '**We** refers to the family/group; **it** is an impersonal pronoun referring to the weather.',
            contextNote: 'Lake District holiday'
          },
          {
            id: 'ex-l2-pr3',
            sentence: 'The marathon runner smiled proudly as the judges awarded **her** the first-place gold medal.',
            highlightWords: ['her'],
            explanation: '**Her** is an object pronoun receiving the action of the judges awarding the medal.',
            contextNote: 'Athletic championship'
          }
        ],
        ruleSummary: 'Subject pronouns do the verb; Object pronouns receive the verb.'
      },
      {
        id: 'sec-possessive-pronouns',
        title: '2. Possessive Pronouns (Showing Ownership)',
        content: 'Possessive pronouns show who owns something without needing an apostrophe. Common possessive pronouns include: **mine, yours, his, hers, its, ours, theirs**.',
        bulletPoints: [
          '**Possessive Determiners (sit directly before a noun):** my coat, your umbrella, our backpacks, their bicycles (for example: *Fiona carefully fastened **her** woollen winter scarf*).',
          '**Possessive Pronouns (stand alone without a noun):** mine, yours, his, hers, ours, theirs (for example: *This compass is **mine**, but the map case is **his***).',
          '**The Possessive "Its" (No apostrophe!):** Shows ownership belonging to an animal, vehicle, or object (for example: *The golden eagle preened **its** dark brown feathers*).'
        ],
        examples: [
          {
            id: 'ex-l2-pr4',
            sentence: 'Is this woollen winter scarf **yours**, or is it **mine**?',
            highlightWords: ['yours', 'mine'],
            explanation: '**Yours** and **mine** stand alone to show ownership of the scarf without naming the noun again.',
            contextNote: 'Winter apparel'
          },
          {
            id: 'ex-l2-pr5',
            sentence: 'The peregrine falcon returned swiftly to **its** nest above the cliffs of the Avon Gorge.',
            highlightWords: ['its'],
            explanation: '**Its** shows ownership belonging to the bird. (Crucial rule: possessive *its* NEVER takes an apostrophe!).',
            contextNote: 'UK bird of prey'
          },
          {
            id: 'ex-l2-pr6',
            sentence: 'Our rowing team completed the course in record time, but the regatta trophy was rightfully **theirs**.',
            highlightWords: ['theirs'],
            explanation: '**Theirs** stands independently as a possessive pronoun referring to the winning team\'s trophy.',
            contextNote: 'Rowing regatta'
          }
        ],
        ruleSummary: 'Possessive pronouns (mine, yours, ours, theirs, its) never use apostrophes.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l2-pr1',
        title: 'The "Between You and Me" / "I vs Me" Test',
        trick: 'To know whether to use "I" or "me", temporarily remove the other person from the sentence! For example: *"Callum and (I/me) climbed Snowdon"* -> *"I climbed Snowdon"*, so *"Callum and I"* is correct.',
        mnemonic: 'Take the other person away to hear what sounds right!',
        commonMistake: 'Saying *"The guide gave a map to Callum and I"* (Incorrect object).',
        correctWay: 'Say *"The guide gave a map to Callum and me"* (Because you say *"The guide gave a map to me"*).',
        explanation: 'After a preposition like "for", "to", or "between", always use object pronouns (me, him, her, us, them).'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l2-pr',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which pronoun correctly completes this sentence? "Grandmother baked warm shortbread for Morag and ___."',
        instruction: 'Choose the correct personal pronoun.',
        options: ['I', 'me', 'mine', 'myself'],
        correctIndex: 1,
        explanation: 'Use **me** because Grandmother baked shortbread for **me** (object of preposition "for").'
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
    overview: 'An **adverb** gives more information about how, when, where, or to what extent an action happens. Most adverbs of manner end in the suffix **-ly** (for example: *cautiously, swiftly, fiercely*), but many common adverbs do not (for example: *often, yesterday, everywhere, very, quite*).',
    whyItMatters: 'Adverbs bring drama and nuance to actions, answering questions like *How? When? Where?* and *How often?*.',
    sections: [
      {
        id: 'sec-adverb-types',
        title: '1. The Four Major Types of Adverbs',
        content: 'Adverbs are classified according to the specific question they answer:',
        bulletPoints: [
          '**Adverbs of Manner (How?):** quietly, frantically, gracefully, clumsily, mournfully, fiercely (for example: *The church choir sang **sweetly** across the ancient stone cathedral*).',
          '**Adverbs of Time (When?):** yesterday, soon, immediately, afterwards, promptly, today (for example: *The passenger ferry to the Isle of Wight departed **promptly** as the sun rose*).',
          '**Adverbs of Place (Where?):** outside, upstairs, everywhere, nearby, abroad, underground (for example: *Thick silver mist gathered **everywhere** over the calm waters of the Norfolk Broads*).',
          '**Adverbs of Degree & Frequency (How much / How often?):** extremely, remarkably, always, rarely, seldom, thoroughly (for example: *The winter wind blowing off the North Sea was **remarkably** bitter*).'
        ],
        examples: [
          {
            id: 'ex-l2-adv1',
            sentence: 'The red fox stalked **stealthily** through the quiet autumn woodland **yesterday**.',
            highlightWords: ['stealthily', 'yesterday'],
            explanation: '**Stealthily** tells us HOW the fox moved (manner). **Yesterday** tells us WHEN it occurred (time).',
            contextNote: 'British woodland wildlife'
          },
          {
            id: 'ex-l2-adv2',
            sentence: 'The Manchester tram arrived **quite** **punctually**, although rain fell **heavily** **outside**.',
            highlightWords: ['quite', 'punctually', 'heavily', 'outside'],
            explanation: '**Quite** (degree), **punctually** (manner/time), **heavily** (manner), and **outside** (place).',
            contextNote: 'UK city transit'
          },
          {
            id: 'ex-l2-adv3',
            sentence: 'The morris dancers leapt **vigorously** and cheered **enthusiastically** at the annual village fair.',
            highlightWords: ['vigorously', 'enthusiastically'],
            explanation: 'Both adverbs of manner describe the energy and excitement of the performers.',
            contextNote: 'Traditional village festival'
          }
        ],
        ruleSummary: 'Adverbs modify verbs by describing How, When, Where, or How Much.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l2-adv1',
        title: 'Good vs Well in British English',
        trick: '**Good** is an adjective (describes a noun: *a good match*). **Well** is an adverb (describes how you perform an action: *she played well*).',
        mnemonic: 'You play a GOOD game of tennis (Adjective), but you play WELL (Adverb)!',
        commonMistake: 'Saying *"The choir sang good"* instead of *"The choir sang well"*.',
        correctWay: 'Say: *"The choir sang **well** during the concert."*',
        explanation: '"Sang" is a verb, so it must be modified by the adverb "well".'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l2-adv',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which word in this sentence is an adverb of MANNER (tells how)?',
        instruction: 'Sentence: "The brass band marched proudly through the streets of York."',
        options: ['brass', 'marched', 'proudly', 'streets'],
        correctIndex: 2,
        explanation: '**Proudly** describes HOW the band marched (manner).'
      },
      {
        id: 'ex-q2-l2-adv',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the ADVERB OF PLACE in this sentence.',
        instruction: 'Click the word showing where the action happened.',
        sentence: 'The hikers searched everywhere for the hidden woodland waterfall.',
        words: ['The', 'hikers', 'searched', 'everywhere', 'for', 'the', 'hidden', 'waterfall.'],
        targetIndices: [3],
        targetCategoryLabel: 'Adverb of Place',
        explanation: '**Everywhere** answers the question "Where did they search?".'
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
        content: 'Prepositions connect nouns to the rest of the clause, establishing exact relationships:',
        bulletPoints: [
          '**Place & Position (Where?):** under, above, between, behind, beneath, alongside, atop (for example: *Tintagel Castle sits dramatically **atop** a rugged rocky headland where Atlantic waves crash*).',
          '**Time (When?):** before, during, after, until, throughout, at midnight, upon dawn (for example: *The choristers assembled outside St Paul\'s Cathedral **before** sunrise*).',
          '**Direction & Movement (Which way?):** towards, through, across, into, onto, past, down (for example: *The canal barge glided **across** the aqueduct **into** the valley*).'
        ],
        examples: [
          {
            id: 'ex-l2-prep1',
            sentence: 'The red squirrel darted **across** the pine needles and disappeared **beneath** the wooden shelter.',
            highlightWords: ['across', 'beneath'],
            explanation: '**Across** indicates direction and movement; **beneath** indicates physical location and position.',
            contextNote: 'Cumbrian forest wildlife'
          },
          {
            id: 'ex-l2-prep2',
            sentence: '**During** the Midsummer festival, crowds listened attentively **to** the acoustic folk concert.',
            highlightWords: ['During', 'to'],
            explanation: '**During** shows the time when the event took place; **to** shows the direction of attention.',
            contextNote: 'Summer cultural festival'
          },
          {
            id: 'ex-l2-prep3',
            sentence: 'We trekked **along** the coastal path **towards** the lighthouse.',
            highlightWords: ['along', 'towards'],
            explanation: '**Along** and **towards** are prepositions of movement mapping the hikers\' route.',
            contextNote: 'Pembrokeshire coastal trail'
          }
        ],
        ruleSummary: 'Preposition + Noun/Pronoun = Prepositional Phrase (for example: *beside the river*, *at midnight*).'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l2-prep1',
        title: 'The "Eagle & Mountain" Test',
        trick: 'Almost anything a golden eagle or red kite can do to a mountain is a preposition! A bird can fly *over* a mountain, *around* a mountain, *towards* a mountain, *past* a mountain, or nest *upon* a mountain.',
        mnemonic: 'Think: What can an eagle do relative to a mountain?',
        commonMistake: 'Writing "off of" (colloquial slang) instead of proper British "off".',
        correctWay: 'Say: *"He stepped **off** the ferry onto the Isle of Wight"* (never *"off of"*).',
        explanation: 'In standard British English, "of" is redundant after "off".'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l2-prep',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which word is a preposition of TIME in: "We will visit the natural history museum after lunch"?',
        instruction: 'Pick the time preposition.',
        options: ['visit', 'after', 'museum', 'lunch'],
        correctIndex: 1,
        explanation: '**After** indicates the timing of the museum visit relative to lunch.'
      },
      {
        id: 'ex-q2-l2-prep',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on all the PREPOSITIONS in this sentence.',
        instruction: 'Click each preposition.',
        sentence: 'The salmon leaped through the waterfall and into the deep pool.',
        words: ['The', 'salmon', 'leaped', 'through', 'the', 'waterfall', 'and', 'into', 'the', 'pool.'],
        targetIndices: [3, 7],
        targetCategoryLabel: 'Preposition',
        explanation: '**Through** and **into** show movement and direction as the salmon swims upriver.'
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
        content: 'Each letter in FANBOYS stands for a specific conjunction with its own meaning and purpose:',
        bulletPoints: [
          '**F - For (Gives a reason, similar to *because*):** (for example: *He wrapped his warm coat tightly, **for** the sea gale bit fiercely*).',
          '**A - And (Adds one idea or item to another):** (for example: *The bell-ringers pulled the ropes, **and** clear chimes echoed across the cathedral close*).',
          '**N - Nor (Introduces an additional negative statement):** (for example: *The dense mist did not lift from the valley, **nor** did the sun break through*).',
          '**B - But (Shows direct contrast or conflict):** (for example: *We attempted to hike up Scafell Pike in the morning, **but** sudden rain forced us back*).',
          '**O - Or (Presents an alternative or choice):** (for example: *Would you like a hot bowl of traditional vegetable broth, **or** would you prefer a warm pasty?*).',
          '**Y - Yet (Shows unexpected or surprising contrast):** (for example: *The medieval castle was centuries old, **yet** its granite battlements remained completely intact*).',
          '**S - So (Shows a result or consequence):** (for example: *The mountain pass was blocked by heavy snowfall, **so** we took the coastal train instead*).'
        ],
        examples: [
          {
            id: 'ex-l2-c1',
            sentence: 'Callum wanted to compete in the regional hurdles race, **but** he had sprained his wrist the previous evening.',
            highlightWords: ['but'],
            explanation: '**But** links two complete independent clauses that contrast with each other.',
            contextNote: 'Track and field contest'
          },
          {
            id: 'ex-l2-c2',
            sentence: 'The city museum was closed for maintenance, **so** we strolled through the botanical gardens instead.',
            highlightWords: ['so'],
            explanation: '**So** introduces the logical result of the museum being closed.',
            contextNote: 'Weekend city excursion'
          },
          {
            id: 'ex-l2-c3',
            sentence: 'The climb up Snowdon was steep, **yet** every hiker marveled at the panoramic view across the Welsh valleys.',
            highlightWords: ['yet'],
            explanation: '**Yet** connects the challenge of the climb with the surprising delight of the view.',
            contextNote: 'Mountain climb in Eryri'
          }
        ],
        ruleSummary: 'FANBOYS = For, And, Nor, But, Or, Yet, So.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l2-c1',
        title: 'The FANBOYS Comma Rule',
        trick: 'When you use a FANBOYS conjunction to join two COMPLETE sentences (clauses that could each stand alone as full sentences), place a **comma** right before the conjunction!',
        mnemonic: 'Two full sentences + FANBOYS = Comma before the word!',
        commonMistake: 'Putting a comma before "and" when just joining two simple words (for example: *scones, and jam*).',
        correctWay: 'Write: *scones and jam* (No comma needed when joining just two words).',
        explanation: 'A comma is only required when joining two independent clauses.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l2-fanboys',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which acronym helps you remember all seven coordinating conjunctions in English?',
        instruction: 'Select the correct memory tool.',
        options: ['PESTLE', 'FANBOYS', 'PEMDAS', 'ROYGBIV'],
        correctIndex: 1,
        explanation: '**FANBOYS** = For, And, Nor, But, Or, Yet, So.'
      },
      {
        id: 'ex-q2-l2-fanboys',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Choose the best conjunction: "Fiona practised her violin pieces diligently, ___ she performed magnificently at the school concert."',
        instruction: 'Select the conjunction showing result.',
        options: ['nor', 'yet', 'so', 'for'],
        correctIndex: 2,
        explanation: '**So** shows the direct consequence and result of practising diligently.'
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
    overview: 'A **compound sentence** contains two or more **independent clauses** (clauses that can stand alone as complete, meaningful sentences) joined by a coordinating conjunction (FANBOYS) with a comma, or by a semicolon.',
    whyItMatters: 'Compound sentences prevent your writing from feeling like a list of choppy, robotic short sentences.',
    sections: [
      {
        id: 'sec-compound-structure',
        title: '1. Anatomy of a Compound Sentence',
        content: 'To construct a compound sentence, take two simple sentences and connect them with a comma and a FANBOYS conjunction:',
        bulletPoints: [
          '**Clause 1 (Independent thought):** *The storm clouds darkened over the Mourne Mountains.*',
          '**Coordinating Conjunction with Comma:** *, and*',
          '**Clause 2 (Independent thought):** *lightning illuminated the rocky crags of the summit.*',
          '**Combined Compound Sentence:** *The storm clouds darkened over the Mourne Mountains, and lightning illuminated the rocky crags of the summit.*'
        ],
        examples: [
          {
            id: 'ex-l2-cmp1',
            sentence: 'The brass band played outside the town hall, **and** the crowd cheered in joyful celebration.',
            highlightWords: ['and'],
            explanation: 'Both "The brass band played outside the town hall" and "the crowd cheered in joyful celebration" are complete standalone sentences joined by ", and".',
            contextNote: 'Community festival'
          },
          {
            id: 'ex-l2-cmp2',
            sentence: 'The ferry captain sounded the foghorn twice, **yet** the dense sea mist refused to clear from Plymouth Sound.',
            highlightWords: ['yet'],
            explanation: 'Two independent clauses joined by ", yet", showing unexpected contrast between the signal and the weather.',
            contextNote: 'Coastal maritime scene'
          },
          {
            id: 'ex-l2-cmp3',
            sentence: 'David stoked the log fire in the hearth, **for** the winter wind whistled coldly through the Cumbrian valley.',
            highlightWords: ['for'],
            explanation: 'Clause 1 joined to Clause 2 using ", for" to give the reason why David stoked the fire.',
            contextNote: 'Countryside cottage life'
          }
        ],
        ruleSummary: 'Compound Sentence = Independent Clause + [Comma + FANBOYS] + Independent Clause.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l2-cmp1',
        title: 'The Two-Sentence Test',
        trick: 'Cover up the conjunction. If both sides of your sentence can stand by themselves as complete, grammatically sound sentences, you have successfully built a compound sentence!',
        mnemonic: 'Can both halves stand alone? If yes, it is COMPOUND!',
        commonMistake: 'Creating a **comma splice** by joining two sentences with ONLY a comma and no conjunction (for example: *The trumpets sounded, the orchestra played*).',
        correctWay: 'Add a coordinating conjunction: *The trumpets sounded, **and** the orchestra played.*',
        explanation: 'A comma alone is not strong enough to join two independent clauses in standard British English.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l2-cmp',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which of the following is a TRUE compound sentence?',
        instruction: 'Pick the sentence with two independent clauses joined by a coordinating conjunction.',
        options: [
          'Sailing swiftly across the tranquil waters of the lake.',
          'The Atlantic wind howled through the glen, but the sturdy stone cottage stood firm.',
          'Because the winter weather was freezing in Aberdeen.',
          'Isla and Callum ate warm shortbread by the fireside.'
        ],
        correctIndex: 1,
        explanation: '**The Atlantic wind howled through the glen, but the sturdy stone cottage stood firm.** has two complete independent clauses joined by ", but".'
      },
      {
        id: 'ex-q2-l2-cmp',
        type: 'sentence-builder',
        difficultyStep: 2,
        prompt: 'Build a compound sentence from these parts.',
        instruction: 'Assemble the independent clauses and coordinating conjunction in order.',
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
        content: 'When two words are squeezed together into one shorter word, the apostrophe marks the exact spot where letters have been removed:',
        bulletPoints: [
          '**do not -> don\'t** (the apostrophe replaces \'o\') (for example: *We **don\'t** fear the chilly mountain mist*).',
          '**is not -> isn\'t** (the apostrophe replaces \'o\') (for example: *The elusive badger **isn\'t** easy to spot*).',
          '**they have -> they\'ve** (the apostrophe replaces \'ha\') (for example: * **They\'ve** arrived in Belfast for the festival*).',
          '**I would / I had -> I\'d** (the apostrophe replaces \'woul\' or \'ha\') (for example: * **I\'d** love to visit the Giant\'s Causeway*).',
          '**will not -> won\'t** (an irregular contraction) (for example: *The ferry **won\'t** depart in high gale-force winds*).'
        ],
        examples: [
          {
            id: 'ex-l2-ap1',
            sentence: '**We\'ll** take the morning train to Cardiff if **it\'s** running on time.',
            highlightWords: ["We'll", "it's"],
            explanation: "**We'll** stands for *we will*; **it's** stands for *it is*.",
            contextNote: 'UK travel planning'
          },
          {
            id: 'ex-l2-ap2',
            sentence: 'Callum **couldn\'t** find his hiking compass, so he **didn\'t** join the morning expedition.',
            highlightWords: ["couldn't", "didn't"],
            explanation: "**Couldn't** = could not; **didn't** = did not.",
            contextNote: 'Outdoor expedition'
          },
          {
            id: 'ex-l2-ap3',
            sentence: '**They\'re** hiking along the scenic trails of the Peak District National Park.',
            highlightWords: ["They're"],
            explanation: "**They're** is a contraction for *they are*, with the apostrophe replacing the letter 'a'.",
            contextNote: 'Peak District trekking'
          }
        ],
        ruleSummary: 'The apostrophe sits exactly where the missing letters used to be.'
      },
      {
        id: 'sec-apostrophe-singular-possession',
        title: '2. Singular Possession (\'s)',
        content: 'To show that something belongs to ONE person, creature, or thing, add **\'s** directly after the singular noun.',
        bulletPoints: [
          'The whistle belonging to the referee -> the **referee\'s** whistle (for example: *The **referee\'s** whistle echoed across Wembley Stadium*).',
          'The telescope belonging to the astronomer -> the **astronomer\'s** telescope (for example: *The **astronomer\'s** observatory stood atop the hill*).',
          'The stag belonging to the forest -> the **stag\'s** antlers (for example: *The **stag\'s** magnificent antlers were silhouetted against the morning sky*).',
          'A name ending in \'s\': James, Charles -> **James\'s** or **Charles\'s** (for example: *We read King **Charles\'s** coronation address*).'
        ],
        examples: [
          {
            id: 'ex-l2-ap4',
            sentence: 'The **red kite\'s** nest was perched high upon the oak tree in the Welsh valley.',
            highlightWords: ["red kite's"],
            explanation: 'The nest belongs to ONE red kite, so we add **\'s** after the singular noun.',
            contextNote: 'Valley wildlife habitat'
          },
          {
            id: 'ex-l2-ap5',
            sentence: '**Emma\'s** grandmother baked the most delectable warm scones in the village.',
            highlightWords: ["Emma's"],
            explanation: 'Singular possession: the grandmother of Emma.',
            contextNote: 'Family baking tradition'
          },
          {
            id: 'ex-l2-ap6',
            sentence: 'The **Exmoor pony\'s** thick, shaggy coat protected it from freezing winter rain.',
            highlightWords: ["Exmoor pony's"],
            explanation: 'The shaggy coat belongs to ONE Exmoor pony (singular possession).',
            contextNote: 'Animal adaptation'
          }
        ],
        ruleSummary: 'Singular noun + \'s = ownership belonging to one individual thing.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l2-ap1',
        title: 'The Ultimate "It\'s vs Its" Rule',
        trick: '**It\'s** ALWAYS means **it is** or **it has**. If you cannot substitute "it is", then use **its** (possessive pronoun).',
        mnemonic: 'If you can say "it is", use the apostrophe: IT\'S!',
        commonMistake: 'Writing *"The pony swished it\'s tail"*. (Incorrect!)',
        correctWay: 'Write *"The pony swished **its** tail"* (Because you would never say *"The pony swished it is tail"*).',
        explanation: 'Possessive pronouns like its, his, hers, ours, and theirs never take apostrophes.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l2-ap',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Choose the correct form: "The clever red fox cleaned ___ paws after hunting."',
        instruction: 'Select its or it\'s.',
        options: ["it's", "its", "its'", "it is'"],
        correctIndex: 1,
        explanation: '**its** is the possessive pronoun showing that the fox owns its paws.'
      },
      {
        id: 'ex-q2-l2-ap',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find the word with the incorrect greengrocer\'s apostrophe.',
        instruction: 'Click on the plural word that should not have an apostrophe.',
        sentenceWithMistake: 'Fresh apple\'s and crisp oatcakes are on sale at the farmers market.',
        words: ['Fresh', "apple's", 'and', 'crisp', 'oatcakes', 'are', 'on', 'sale.'],
        errorWordIndex: 1,
        correctedWord: 'apples',
        ruleViolated: 'Never use an apostrophe to make a simple plural noun.',
        explanation: 'The plural of apple is simply **apples** (no ownership or contraction is being shown).'
      }
    ]
  }
];

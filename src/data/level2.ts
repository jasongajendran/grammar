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
    overview: 'A **pronoun** is a word used in place of a noun or noun phrase to avoid repeating the same names over and over again. Instead of saying *"Hamish picked up Hamish\'s bagpipes because Hamish was late for the ceilidh"*, we write *"Hamish picked up **his** bagpipes because **he** was late for the ceilidh"*!',
    whyItMatters: 'Pronouns make sentences sound natural, cohesive, and easy to read.',
    sections: [
      {
        id: 'sec-personal-pronouns',
        title: '1. Personal Pronouns (Subject & Object)',
        content: 'Personal pronouns represent specific people, creatures, or objects. They change form depending on whether they are the **subject** (doing the action) or the **object** (receiving the action).',
        bulletPoints: [
          '**Subject Pronouns (Doers):** I, you, he, she, it, we, they (for example: *When **we** visited Stirling Castle, **she** guided us through the royal palace*).',
          '**Object Pronouns (Receivers):** me, you, him, her, it, us, them (for example: *The park ranger gave **us** a map of the Cairngorms and showed **them** where golden eagles nest*).',
          '**Impersonal Pronoun ("It"):** Refers to weather, time, distances, or nature (for example: ***It** snowed heavily across the peaks of Ben Nevis throughout December*).'
        ],
        examples: [
          {
            id: 'ex-l2-pr1',
            sentence: '**They** explored the ancient ruins of Urquhart Castle while the local guide explained Scottish clan history to **them**.',
            highlightWords: ['They', 'them'],
            explanation: '**They** is the subject pronoun doing the exploring; **them** is the object pronoun receiving the guide\'s explanation.',
            contextNote: 'Scottish historical excursion'
          },
          {
            id: 'ex-l2-pr2',
            sentence: 'When **we** sailed across Loch Lomond, **it** began to drizzle softly over the tranquil islands.',
            highlightWords: ['we', 'it'],
            explanation: '**We** refers to the family/group; **it** is an impersonal pronoun referring to the Scottish Highland weather.',
            contextNote: 'Loch Lomond holiday'
          },
          {
            id: 'ex-l2-pr3',
            sentence: 'The Highland dancer smiled proudly as the judges awarded **her** the first-place gold medal.',
            highlightWords: ['her'],
            explanation: '**Her** is an object pronoun receiving the action of the judges awarding the medal.',
            contextNote: 'Highland Games championship'
          }
        ],
        ruleSummary: 'Subject pronouns do the verb; Object pronouns receive the verb.'
      },
      {
        id: 'sec-possessive-pronouns',
        title: '2. Possessive Pronouns (Showing Ownership)',
        content: 'Possessive pronouns show who owns something without needing an apostrophe. Common possessive pronouns include: **mine, yours, his, hers, its, ours, theirs**.',
        bulletPoints: [
          '**Possessive Determiners (sit directly before a noun):** my coat, your umbrella, our tartan, their bagpipes (for example: *Fiona carefully fastened **her** woollen tartan shawl*).',
          '**Possessive Pronouns (stand alone without a noun):** mine, yours, his, hers, ours, theirs (for example: *This sporran is **mine**, but the ceremonial dagger is **his***).',
          '**The Possessive "Its" (No apostrophe!):** Shows ownership belonging to an animal, vehicle, or object (for example: *The golden eagle preened **its** dark brown feathers*).'
        ],
        examples: [
          {
            id: 'ex-l2-pr4',
            sentence: 'Is this woollen tartan scarf **yours**, or is it **mine**?',
            highlightWords: ['yours', 'mine'],
            explanation: '**Yours** and **mine** stand alone to show ownership of the tartan scarf without naming the noun again.',
            contextNote: 'Scottish apparel'
          },
          {
            id: 'ex-l2-pr5',
            sentence: 'The osprey returned swiftly to **its** nest above the pine trees of the Cairngorms.',
            highlightWords: ['its'],
            explanation: '**Its** shows ownership belonging to the bird. (Crucial rule: possessive *its* NEVER takes an apostrophe!).',
            contextNote: 'Highland bird of prey'
          },
          {
            id: 'ex-l2-pr6',
            sentence: 'Our team tossed the heavy caber thirty feet, but the grand trophy was rightfully **theirs**.',
            highlightWords: ['theirs'],
            explanation: '**Theirs** stands independently as a possessive pronoun referring to the winning team\'s trophy.',
            contextNote: 'Braemar Highland Games'
          }
        ],
        ruleSummary: 'Possessive pronouns (mine, yours, ours, theirs, its) never use apostrophes.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l2-pr1',
        title: 'The "Between You and Me" / "I vs Me" Test',
        trick: 'To know whether to use "I" or "me", temporarily remove the other person from the sentence! For example: *"Callum and (I/me) climbed Arthur\'s Seat"* -> *"I climbed Arthur\'s Seat"*, so *"Callum and I"* is correct.',
        mnemonic: 'Take the other person away to hear what sounds right!',
        commonMistake: 'Saying *"The piper played a tune for Callum and I"* (Incorrect object).',
        correctWay: 'Say *"The piper played a tune for Callum and me"* (Because you say *"The piper played a tune for me"*).',
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
          '**Adverbs of Manner (How?):** quietly, frantically, gracefully, clumsily, mournfully, fiercely (for example: *The lone piper played **mournfully** across the mist-shrouded valley of Glen Coe*).',
          '**Adverbs of Time (When?):** yesterday, soon, immediately, afterwards, promptly, today (for example: *The CalMac ferry to the Isle of Lewis departed **promptly** as the sun rose*).',
          '**Adverbs of Place (Where?):** outside, upstairs, everywhere, nearby, abroad, underground (for example: *Thick silver mist gathered **everywhere** over the dark surface of Loch Ness*).',
          '**Adverbs of Degree & Frequency (How much / How often?):** extremely, remarkably, always, rarely, seldom, thoroughly (for example: *The winter wind blowing off the North Sea was **remarkably** bitter*).'
        ],
        examples: [
          {
            id: 'ex-l2-adv1',
            sentence: 'The Scottish wildcat stalked **stealthily** through the heather moorland **yesterday**.',
            highlightWords: ['stealthily', 'yesterday'],
            explanation: '**Stealthily** tells us HOW the wildcat moved (manner). **Yesterday** tells us WHEN it occurred (time).',
            contextNote: 'Scottish Highland wildlife'
          },
          {
            id: 'ex-l2-adv2',
            sentence: 'The Edinburgh tram arrived **quite** **punctually**, although snow fell **heavily** **outside**.',
            highlightWords: ['quite', 'punctually', 'heavily', 'outside'],
            explanation: '**Quite** (degree), **punctually** (manner/time), **heavily** (manner), and **outside** (place).',
            contextNote: 'Scottish city transit'
          },
          {
            id: 'ex-l2-adv3',
            sentence: 'The Highland dancers leapt **vigorously** and cheered **enthusiastically** at the annual gathering.',
            highlightWords: ['vigorously', 'enthusiastically'],
            explanation: 'Both adverbs of manner describe the energy and excitement of the dancers during the performance.',
            contextNote: 'Highland Games celebration'
          }
        ],
        ruleSummary: 'Adverbs modify verbs by describing How, When, Where, or How Much.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l2-adv1',
        title: 'Good vs Well in British English',
        trick: '**Good** is an adjective (describes a noun: *a good ceilidh*). **Well** is an adverb (describes how you perform an action: *she danced well*).',
        mnemonic: 'You play a GOOD game of shinty (Adjective), but you play WELL (Adverb)!',
        commonMistake: 'Saying *"The piper played good"* instead of *"The piper played well"*.',
        correctWay: 'Say: *"The piper played **well** during the parade."*',
        explanation: '"Played" is a verb, so it must be modified by the adverb "well".'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l2-adv',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which word in this sentence is an adverb of MANNER (tells how)?',
        instruction: 'Sentence: "The pipe band marched proudly along the Royal Mile in Edinburgh."',
        options: ['pipe', 'marched', 'proudly', 'Royal'],
        correctIndex: 2,
        explanation: '**Proudly** describes HOW the band marched (manner).'
      },
      {
        id: 'ex-q2-l2-adv',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the ADVERB OF PLACE in this sentence.',
        instruction: 'Click the word showing where the action happened.',
        sentence: 'The hikers searched everywhere for the hidden Highland waterfall.',
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
          '**Place & Position (Where?):** under, above, between, behind, beneath, alongside, atop (for example: *Eilean Donan Castle sits majestically **atop** a small rocky island where three sea lochs meet*).',
          '**Time (When?):** before, during, after, until, throughout, at midnight, upon dawn (for example: *The pipers assembled outside Stirling Castle **before** sunrise*).',
          '**Direction & Movement (Which way?):** towards, through, across, into, onto, past, down (for example: *The paddle steamer glided **across** the calm waters of Loch Katrine **into** the misty bay*).'
        ],
        examples: [
          {
            id: 'ex-l2-prep1',
            sentence: 'The red squirrel darted **across** the pine needles and disappeared **beneath** the wooden shelter.',
            highlightWords: ['across', 'beneath'],
            explanation: '**Across** indicates direction and movement; **beneath** indicates physical location and position.',
            contextNote: 'Cairngorms forest wildlife'
          },
          {
            id: 'ex-l2-prep2',
            sentence: '**During** the Burns Night supper, guests listened attentively **to** the traditional address to the haggis.',
            highlightWords: ['During', 'to'],
            explanation: '**During** shows the time when the event took place; **to** shows the direction of attention.',
            contextNote: 'Scottish Burns Night celebration'
          },
          {
            id: 'ex-l2-prep3',
            sentence: 'We trekked **along** the West Highland Way **towards** the foot of Ben Nevis.',
            highlightWords: ['along', 'towards'],
            explanation: '**Along** and **towards** are prepositions of movement mapping the hikers\' route.',
            contextNote: 'Highland trail trek'
          }
        ],
        ruleSummary: 'Preposition + Noun/Pronoun = Prepositional Phrase (for example: *beside the loch*, *at midnight*).'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l2-prep1',
        title: 'The "Eagle & Mountain" Test',
        trick: 'Almost anything a golden eagle can do to a mountain is a preposition! An eagle can fly *over* a mountain, *around* a mountain, *towards* a mountain, *past* a mountain, or nest *upon* a mountain.',
        mnemonic: 'Think: What can an eagle do relative to a mountain?',
        commonMistake: 'Writing "off of" (colloquial slang) instead of proper British "off".',
        correctWay: 'Say: *"He stepped **off** the ferry onto the Isle of Skye"* (never *"off of"*).',
        explanation: 'In standard British English, "of" is redundant after "off".'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l2-prep',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which word is a preposition of TIME in: "We will visit the Robert Burns museum after lunch"?',
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
          '**F - For (Gives a reason, similar to *because*):** (for example: *He wrapped his woollen tartan tightly, **for** the Scottish gale bit fiercely*).',
          '**A - And (Adds one idea or item to another):** (for example: *The piper played a lively reel, **and** the ceilidh dancers twirled across the wooden floor*).',
          '**N - Nor (Introduces an additional negative statement):** (for example: *The dense mist did not lift from Loch Ness, **nor** did the mysterious creature reveal itself*).',
          '**B - But (Shows direct contrast or conflict):** (for example: *We attempted to summit Ben Nevis in the morning, **but** sudden blizzard winds turned us back*).',
          '**O - Or (Presents an alternative or choice):** (for example: *Would you like a bowl of warm Scottish Cullen skink, **or** would you prefer oat porridge?*).',
          '**Y - Yet (Shows unexpected or surprising contrast):** (for example: *The medieval castle was ancient, **yet** its granite battlements remained completely intact*).',
          '**S - So (Shows a result or consequence):** (for example: *The ferry to the Isle of Skye was delayed by rough seas, **so** we drank hot tea by the harbour*).'
        ],
        examples: [
          {
            id: 'ex-l2-c1',
            sentence: 'Callum wanted to compete in the caber toss, **but** he had sprained his wrist the previous evening.',
            highlightWords: ['but'],
            explanation: '**But** links two complete independent clauses that contrast with each other.',
            contextNote: 'Highland Games contest'
          },
          {
            id: 'ex-l2-c2',
            sentence: 'The Edinburgh castle museum was closed for maintenance, **so** we strolled through the Royal Botanic Garden instead.',
            highlightWords: ['so'],
            explanation: '**So** introduces the logical result of the museum being closed.',
            contextNote: 'Edinburgh day out'
          },
          {
            id: 'ex-l2-c3',
            sentence: 'The climb up Arthur\'s Seat was steep, **yet** every hiker marveled at the panoramic view of the Firth of Forth.',
            highlightWords: ['yet'],
            explanation: '**Yet** connects the challenge of the climb with the surprising delight of the view.',
            contextNote: 'Edinburgh mountain climb'
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
        commonMistake: 'Putting a comma before "and" when just joining two simple words (for example: *shortbread, and oatcakes*).',
        correctWay: 'Write: *shortbread and oatcakes* (No comma needed when joining just two words).',
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
        prompt: 'Choose the best conjunction: "Fiona practised her fiddle pieces diligently, ___ she performed magnificently at the Edinburgh ceilidh."',
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
          '**Clause 1 (Independent thought):** *The storm clouds darkened over Loch Ness.*',
          '**Coordinating Conjunction with Comma:** *, and*',
          '**Clause 2 (Independent thought):** *lightning illuminated the ancient battlements of Urquhart Castle.*',
          '**Combined Compound Sentence:** *The storm clouds darkened over Loch Ness, and lightning illuminated the ancient battlements of Urquhart Castle.*'
        ],
        examples: [
          {
            id: 'ex-l2-cmp1',
            sentence: 'The bagpipes sounded across the parade ground, **and** the Highland regiment marched in perfect synchrony.',
            highlightWords: ['and'],
            explanation: 'Both "The bagpipes sounded across the parade ground" and "the Highland regiment marched in perfect synchrony" are complete standalone sentences joined by ", and".',
            contextNote: 'Edinburgh Castle military tattoo'
          },
          {
            id: 'ex-l2-cmp2',
            sentence: 'The ferry captain sounded the foghorn twice, **yet** the dense sea mist refused to clear from the Firth of Forth.',
            highlightWords: ['yet'],
            explanation: 'Two independent clauses joined by ", yet", showing unexpected contrast between the signal and the weather.',
            contextNote: 'Scottish maritime scene'
          },
          {
            id: 'ex-l2-cmp3',
            sentence: 'Hamish stoked the peat fire in the hearth, **for** the Scottish winter wind whistled coldly through the glen.',
            highlightWords: ['for'],
            explanation: 'Clause 1 joined to Clause 2 using ", for" to give the reason why Hamish stoked the fire.',
            contextNote: 'Highland cottage life'
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
        commonMistake: 'Creating a **comma splice** by joining two sentences with ONLY a comma and no conjunction (for example: *The bagpipes sounded, the regiment marched*).',
        correctWay: 'Add a coordinating conjunction: *The bagpipes sounded, **and** the regiment marched.*',
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
          'Sailing swiftly across the dark waters of Loch Ness.',
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
          '**do not -> don\'t** (the apostrophe replaces \'o\') (for example: *We **don\'t** fear the chilly Highland mist*).',
          '**is not -> isn\'t** (the apostrophe replaces \'o\') (for example: *The Loch Ness monster **isn\'t** easy to spot*).',
          '**they have -> they\'ve** (the apostrophe replaces \'ha\') (for example: * **They\'ve** arrived in Edinburgh for the festival*).',
          '**I would / I had -> I\'d** (the apostrophe replaces \'woul\' or \'ha\') (for example: * **I\'d** love to climb the Cuillin mountains on Skye*).',
          '**will not -> won\'t** (an irregular contraction) (for example: *The ferry **won\'t** depart in high gale-force winds*).'
        ],
        examples: [
          {
            id: 'ex-l2-ap1',
            sentence: '**We\'ll** take the scenic Highland train if **it\'s** running on time this morning.',
            highlightWords: ["We'll", "it's"],
            explanation: "**We'll** stands for *we will*; **it's** stands for *it is*.",
            contextNote: 'Scottish travel planning'
          },
          {
            id: 'ex-l2-ap2',
            sentence: 'Hamish **couldn\'t** find his tartan sporran, so he **didn\'t** join the opening procession.',
            highlightWords: ["couldn't", "didn't"],
            explanation: "**Couldn't** = could not; **didn't** = did not.",
            contextNote: 'Traditional gathering'
          },
          {
            id: 'ex-l2-ap3',
            sentence: '**They\'re** hiking along the scenic trails of the Cairngorms National Park.',
            highlightWords: ["They're"],
            explanation: "**They're** is a contraction for *they are*, with the apostrophe replacing the letter 'a'.",
            contextNote: 'Highland trekking'
          }
        ],
        ruleSummary: 'The apostrophe sits exactly where the missing letters used to be.'
      },
      {
        id: 'sec-apostrophe-singular-possession',
        title: '2. Singular Possession (\'s)',
        content: 'To show that something belongs to ONE person, creature, or thing, add **\'s** directly after the singular noun.',
        bulletPoints: [
          'The bagpipes belonging to the piper -> the **piper\'s** bagpipes (for example: *The **piper\'s** melodies carried across the glen*).',
          'The castle belonging to the clan chief -> the **chief\'s** castle (for example: *The **chief\'s** fortress stood upon a granite promontory*).',
          'The stag belonging to the Highlands -> the **stag\'s** antlers (for example: *The **stag\'s** magnificent antlers were silhouetted against the morning sky*).',
          'A name ending in \'s\': James, Burns -> **James\'s** or **Burns\'s** (for example: *We read Robert **Burns\'s** famous poetry on Burns Night*).'
        ],
        examples: [
          {
            id: 'ex-l2-ap4',
            sentence: 'The **golden eagle\'s** aerie was perched high upon the rocky crag of the mountain.',
            highlightWords: ["golden eagle's"],
            explanation: 'The aerie (nest) belongs to ONE golden eagle, so we add **\'s** after the singular noun.',
            contextNote: 'Highland bird habitat'
          },
          {
            id: 'ex-l2-ap5',
            sentence: '**Morag\'s** grandmother baked the most delectable Scottish shortbread in the village.',
            highlightWords: ["Morag's"],
            explanation: 'Singular possession: the grandmother of Morag.',
            contextNote: 'Family baking tradition'
          },
          {
            id: 'ex-l2-ap6',
            sentence: 'The **Highland cow\'s** thick, shaggy coat protected it from freezing winter rain.',
            highlightWords: ["Highland cow's"],
            explanation: 'The shaggy coat belongs to ONE Highland cow (singular possession).',
            contextNote: 'Scottish farm animal'
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
        commonMistake: 'Writing *"The Highland pony swished it\'s tail"*. (Incorrect!)',
        correctWay: 'Write *"The Highland pony swished **its** tail"* (Because you would never say *"The pony swished it is tail"*).',
        explanation: 'Possessive pronouns like its, his, hers, ours, and theirs never take apostrophes.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l2-ap',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Choose the correct form: "The Scottish wildcat cleaned ___ paws after hunting."',
        instruction: 'Select its or it\'s.',
        options: ["it's", "its", "its'", "it is'"],
        correctIndex: 1,
        explanation: '**its** is the possessive pronoun showing that the wildcat owns its paws.'
      },
      {
        id: 'ex-q2-l2-ap',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find the word with the incorrect greengrocer\'s apostrophe.',
        instruction: 'Click on the plural word that should not have an apostrophe.',
        sentenceWithMistake: 'Fresh apple\'s and Scottish oatcakes are on sale at the farmers market.',
        words: ['Fresh', "apple's", 'and', 'Scottish', 'oatcakes', 'are', 'on', 'sale.'],
        errorWordIndex: 1,
        correctedWord: 'apples',
        ruleViolated: 'Never use an apostrophe to make a simple plural noun.',
        explanation: 'The plural of apple is simply **apples** (no ownership or contraction is being shown).'
      }
    ]
  }
];

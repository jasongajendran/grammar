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
    overview: 'In an **active voice** sentence, the subject actively PERFORMS the verb (*"Winston Churchill led the wartime government"*). In a **passive voice** sentence, the subject RECEIVES the action (*"The wartime government was led by Winston Churchill"*). Passive voice is constructed with a form of the auxiliary verb **to be** + **past participle**.',
    whyItMatters: 'Passive voice is vital for scientific reports, historical accounts, and formal British journalism where the action or discovery itself is more important than who did it.',
    sections: [
      {
        id: 'sec-active-vs-passive',
        title: '1. Comparing Active and Passive Structures',
        content: 'Observe how the thematic focus shifts between the two voices:',
        bulletPoints: [
          '**Active Voice (Doer -> Action -> Receiver):** The subject takes initiative (for example: *Sir Alexander Fleming discovered penicillin in his London laboratory.*)',
          '**Passive Voice (Receiver -> Action by Doer):** The emphasis shifts to the receiver (for example: *Penicillin was discovered by Sir Alexander Fleming in 1928.*)',
          '**Agentless Passive (Doer omitted or unknown):** Used when the doer is obvious or irrelevant (for example: *The prehistoric standing stones of Stonehenge were erected during the Bronze Age.*)'
        ],
        examples: [
          {
            id: 'ex-l4-apv1',
            sentence: 'The historic Magna Carta **was signed by** King John at Runnymede in **1215**.',
            highlightWords: ['was signed by'],
            explanation: 'Passive voice structure: "was" (past auxiliary) + "signed" (past participle) + "by King John" (agent phrase).',
            contextNote: 'British constitutional history'
          },
          {
            id: 'ex-l4-apv2',
            sentence: 'A ferocious Atlantic squall battered the harbour walls of Penzance throughout the stormy night.',
            highlightWords: ['battered'],
            explanation: 'Active voice: The grammatical subject ("A ferocious Atlantic squall") directly performs the action ("battered").',
            contextNote: 'Cornish coastal storm'
          },
          {
            id: 'ex-l4-apv3',
            sentence: 'The Crown Jewels of the United Kingdom **are preserved** securely within the Tower of London.',
            highlightWords: ['are preserved'],
            explanation: 'Agentless passive construction highlighting the national treasures rather than the security guards.',
            contextNote: 'Tower of London royal heritage'
          }
        ],
        ruleSummary: 'Active: Subject DOES action. Passive: Subject RECEIVES action (to be + past participle).'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l4-apv1',
        title: 'The "By Roman Legionaries" Test',
        trick: 'If you can insert the phrase **"...by Roman legionaries"** (or "...by detectives") after the verb and the sentence remains grammatically sound, the sentence is in the PASSIVE voice! For example: *"The fortress was defended (by Roman legionaries)"* -> Passive!',
        mnemonic: 'Can it happen "...by Roman legionaries"? It\'s Passive!',
        commonMistake: 'Assuming passive voice is an error or always "bad writing".',
        correctWay: 'Use active voice for vivid narrative pace, and passive voice for scientific journals and formal historical records.',
        explanation: 'Both voices are legitimate stylistic tools when used intentionally.'
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
          'Alexander Graham Bell patented the telephone in 1876.',
          'The telephone was patented by Alexander Graham Bell in 1876.',
          'Bell conducted experiments in his workshop.',
          'The British inventor revolutionised telecommunications.'
        ],
        correctIndex: 1,
        explanation: '**The telephone was patented by Alexander Graham Bell in 1876.** is passive because the telephone receives the action.'
      },
      {
        id: 'ex-q2-l4-apv',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the PASSIVE VERB PHRASE in this sentence.',
        instruction: 'Click the auxiliary verb and past participle.',
        sentence: 'The iconic Clifton Suspension Bridge was engineered by Isambard Kingdom Brunel.',
        words: ['The', 'iconic', 'Clifton', 'Suspension', 'Bridge', 'was', 'engineered', 'by', 'Isambard', 'Kingdom', 'Brunel.'],
        targetIndices: [5, 6],
        targetCategoryLabel: 'Passive Verb Phrase',
        explanation: '**was engineered** forms the passive verb phrase (be + past participle).'
      }
    
    ,
      {
        id: 'gen-act-1',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Identify the sentence written in the passive voice.',
        instruction: 'Select the passive sentence.',
        options: [
          'The dog bit the postman.',
          'The chef cooked a delicious meal.',
          'The new bridge was designed by a famous architect.',
          'The choir sang beautifully.'
        ],
        correctIndex: 2,
        explanation: 'In the passive voice, the subject of the sentence (the new bridge) receives the action, and the agent (by a famous architect) is introduced with "by".'
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
          '**Linking Related Clauses:** Connects two balanced statements without a conjunction (for example: *A fierce gale swept across the Bristol Channel; all ferry sailings to Cardiff were cancelled immediately.*)',
          '**With Conjunctive Adverbs:** Precedes transition words like *however, consequently, furthermore* (for example: *The ascent of Scafell Pike was arduous; nevertheless, every mountaineer achieved the snow-covered summit.*)',
          '**In Complex Serial Lists:** Separates items that already contain internal commas (for example: *Our British itinerary stopped at York, North Yorkshire; Conwy, North Wales; and Derry, Northern Ireland.*)'
        ],
        examples: [
          {
            id: 'ex-l4-sc-1',
            sentence: 'Thick mountain fog descended over Snowdonia; the hikers immediately consulted their compass.',
            highlightWords: [';'],
            explanation: 'The semicolon connects two independent clauses that are intimately linked in cause and consequence.',
            contextNote: 'Welsh mountain navigation'
          },
          {
            id: 'ex-l4-sc-2',
            sentence: 'The brass band completed its final rehearsal; consequently, a respectful hush settled over the cathedral hall.',
            highlightWords: ['; consequently,'],
            explanation: 'Semicolon preceding the conjunctive adverb "consequently", punctuated by a following comma.',
            contextNote: 'Cathedral brass concert'
          },
          {
            id: 'ex-l4-sc-3',
            sentence: 'The British literary archive preserves works by William Shakespeare, the Stratford playwright; Jane Austen, the Hampshire novelist; and Charles Dickens, the Victorian chronicler.',
            highlightWords: ['; Jane Austen, the Hampshire novelist;', '; and Charles Dickens, the Victorian chronicler.'],
            explanation: 'Semicolons separate list items containing internal appositive commas.',
            contextNote: 'British literary heritage'
          }
        ],
        ruleSummary: 'Semicolons connect two independent sentences without a conjunction.'
      },
      {
        id: 'sec-colon-rules',
        title: '2. The Colon (:) as a Revealer',
        content: 'A colon signals that what follows explains, illustrates, or itemises what was just stated. The clause BEFORE the colon must be a complete, grammatically sound sentence.',
        bulletPoints: [
          '**Introducing a Direct Explanation:** Explains or answers the preceding clause (for example: *The coastal guide gave a confident reassurance: tidal surveys proved the causeway was completely safe to cross.*)',
          '**Introducing a Formal List:** Presents items after a full introductory sentence (for example: *A traditional British cream tea requires three indispensable items: fresh warm scones, thick clotted cream, and strawberry jam.*)'
        ],
        examples: [
          {
            id: 'ex-l4-sc-4',
            sentence: 'Admiral Nelson issued a famous signal: every crew member was expected to perform their duty with courage.',
            highlightWords: [':'],
            explanation: 'The colon introduces the exact content of the admiral\'s famous signal.',
            contextNote: 'British naval history'
          },
          {
            id: 'ex-l4-sc-5',
            sentence: 'The Yorkshire farmer packed four essential tools for the day: a sturdy spade, a coil of rope, a whetstone, and a warm thermos of tea.',
            highlightWords: [':'],
            explanation: 'The colon follows a complete independent clause and introduces the four essential items.',
            contextNote: 'Rural farming routine'
          }
        ],
        ruleSummary: 'Colons introduce lists, definitions, or direct explanations following a complete clause.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l4-sc-1',
        title: 'The Colon Pre-Condition Test',
        trick: 'Read ONLY the words before your colon. If they do not form a complete sentence on their own, you CANNOT use a colon! For example: *"The necessary ingredients are: flour, butter, sugar"* is INCORRECT. Write *"A traditional British Victoria sponge requires three simple ingredients: flour, butter, and sugar."*',
        mnemonic: 'Complete sentence BEFORE the colon!',
        commonMistake: 'Using a semicolon when a colon is required for an explanation.',
        correctWay: 'Use a colon when the second clause explains or amplifies the first clause.',
        explanation: 'A colon points forward like an arrow; a semicolon balances two equal thoughts.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l4-sc',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which punctuation mark correctly fills the gap? "The ferry from Dover was delayed by high swells ___ we spent the afternoon visiting the castle."',
        instruction: 'Choose the best punctuation to connect two independent clauses.',
        options: [',', ';', ':', '-'],
        correctIndex: 1,
        explanation: 'A **semicolon (;)** connects two independent clauses without a coordinating conjunction.'
      },
      {
        id: 'ex-q2-l4-sc',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find the incorrectly placed colon in this list introduction.',
        instruction: 'Click the word after which the colon was wrongly inserted.',
        sentenceWithMistake: 'The equipment you will need includes: a compass, a waterproof map, and warm mittens.',
        words: ['The', 'equipment', 'you', 'will', 'need', 'includes:', 'a', 'compass,', 'a', 'waterproof', 'map.'],
        errorWordIndex: 5,
        correctedWord: 'includes',
        ruleViolated: 'Do not place a colon directly after a verb like "includes" or "are".',
        explanation: 'A colon cannot directly follow the verb "includes" because the clause before it is grammatically incomplete.'
      }
    
    ,
      {
        id: 'gen-semi-1',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Which sentence correctly uses a semicolon?',
        instruction: 'Select the correct sentence.',
        options: [
          'I have a big test tomorrow; I can\'t go out tonight.',
          'I have a big test tomorrow; because I need to study.',
          'I have a big test tomorrow; and I can\'t go out.',
          'I have a big test tomorrow; so I can\'t go out.'
        ],
        correctIndex: 0,
        explanation: 'A semicolon is used to link two independent but closely related clauses without a coordinating conjunction (like and, but, so).'
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
    overview: 'The **subjunctive mood** is a special verb form used to express **hypothetical situations, wishes, conditions contrary to fact**, or **formal demands and recommendations**. The most famous subjunctive form uses **"were"** instead of "was" (*"If I were you..."*), and uses the bare root verb for demands (*"The council insisted that he attend the gathering"*).',
    whyItMatters: 'The subjunctive mood is explicitly specified in the UK National Curriculum and GCSE English language examinations.',
    sections: [
      {
        id: 'sec-subjunctive-forms',
        title: '1. The Primary Subjunctive Structures',
        content: 'Learn how verbs morph in the subjunctive mood in British English:',
        bulletPoints: [
          '**Hypothetical / Contrary to Fact ("were" instead of "was"):** (for example: *If I **were** the Warden of Windsor Castle, I would restore the Great Hall with medieval tapestries.*)',
          '**Wishes & Unreal Desires:** (for example: *The lone sentry wished it **were** less blustery upon the exposed battlements.*)',
          '**Mandative / Formal Demands (bare root verb):** (for example: *The heritage society demanded that the historic Welsh cottage **remain** undisturbed.*)',
          '**Fixed British Idioms:** (for example: *God **save** the King; **Be** that as it may; Come what **may**; If need **be**.*)'
        ],
        examples: [
          {
            id: 'ex-l4-sm1',
            sentence: 'If I **were** to hike the entire Pennine Way, I would train for months in advance.',
            highlightWords: ['were'],
            explanation: 'Subjunctive "were" used with the first-person pronoun "I" to express a hypothetical trekking scenario.',
            contextNote: 'National trail planning'
          },
          {
            id: 'ex-l4-sm2',
            sentence: 'The UK Parliament recommended that the ancient oak forests **be** protected by law.',
            highlightWords: ['be'],
            explanation: 'Mandative subjunctive: uses the bare root verb "be" rather than indicative "are" or "were".',
            contextNote: 'Woodland conservation'
          },
          {
            id: 'ex-l4-sm3',
            sentence: 'The harbour master insisted that every sailor **wear** a life vest before entering the open bay.',
            highlightWords: ['wear'],
            explanation: 'Mandative subjunctive bare infinitive "wear" (not "wears"), following the verb of insistence.',
            contextNote: 'Maritime safety navigation'
          }
        ],
        ruleSummary: 'Hypothetical: Use "were" (If I were...). Formal demand: Use bare root verb (demanded that he attend).'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l4-sm1',
        title: 'The "If I Were" Rule',
        trick: 'Whenever you are talking about something imaginary or impossible right now, switch "was" to **"were"**! For example: *"If she **were** in London right now, she would love the West End theatre."*',
        mnemonic: 'Imaginary situation? Always use WERE!',
        commonMistake: 'Writing *"The committee demanded that Arthur is expelled"*.',
        correctWay: 'Write *"The committee demanded that Arthur **be** expelled."*',
        explanation: 'After verbs of demanding, insisting, or recommending, standard English requires the subjunctive base form "be".'
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
          'If I was an eagle, I would glide across the Lake District.',
          'If I were an eagle, I would glide across the Lake District.',
          'If I am an eagle, I would glide across the Lake District.',
          'If I will be an eagle, I would glide across the Lake District.'
        ],
        correctIndex: 1,
        explanation: '**If I were an eagle...** is the correct subjunctive form for a condition contrary to fact.'
      },
      {
        id: 'ex-q2-l4-sm',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Choose the correct mandative subjunctive verb: "The local council proposed that the historic pier ___ restored."',
        instruction: 'Select the correct base verb form.',
        options: ['is', 'was', 'be', 'being'],
        correctIndex: 2,
        explanation: 'Use **be**: "The local council proposed that the historic pier **be** restored."'
      }
    
    ,
      {
        id: 'gen-subj-1',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Select the sentence that correctly uses the subjunctive mood.',
        instruction: 'Choose the grammatically correct option.',
        options: [
          'The doctor recommended that he rests for a few days.',
          'The doctor recommended that he rest for a few days.',
          'The doctor recommended that he resting for a few days.',
          'The doctor recommended that he will rest for a few days.'
        ],
        correctIndex: 1,
        explanation: 'The subjunctive mood requires the base form of the verb ("rest") after verbs like "recommend", "suggest", or "insist" in a "that" clause.'
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
    overview: 'The basic rule of **subject-verb agreement** is simple: singular subjects take singular verbs, and plural subjects take plural verbs. However, English contains tricky situations like **collective nouns** (*the brass band, the committee*), **indefinite pronouns** (*everyone, neither*), and intervening phrases that cause common errors.',
    whyItMatters: 'British English has distinctive collective noun conventions compared to American English.',
    sections: [
      {
        id: 'sec-tricky-agreement',
        title: '1. British Collective Nouns & Tricky Pronouns',
        content: 'Master these nuanced rules of agreement:',
        bulletPoints: [
          '**British Collective Nouns (Unit vs Individuals):** In British English, collective nouns like *band, choir, committee, team* can take singular OR plural verbs depending on whether members act together or separately (for example: *The brass band **is** competing in London* versus *The brass band **are** tuning their instruments individually*).',
          '**Indefinite Pronouns (Grammatically Singular):** *Everyone, nobody, somebody, neither, either* take singular verbs (for example: *Neither of the mountain passes **was** accessible during the snowstorm.*)',
          '**Intervening Phrases (Ignore the Middle):** Prepositional phrases between subject and verb do not alter agreement (for example: *The hamper of traditional British butter biscuits **was** delivered promptly.*)'
        ],
        examples: [
          {
            id: 'ex-l4-sva1',
            sentence: 'Neither of the ancient monastic scrolls **was** damaged during the museum refurbishment.',
            highlightWords: ['Neither', 'was'],
            explanation: '"Neither" is grammatically singular, taking the singular verb "was" regardless of the plural noun "scrolls".',
            contextNote: 'British library archives'
          },
          {
            id: 'ex-l4-sva2',
            sentence: 'The judging panel **have** disagreed on who delivered the finest orchestral performance.',
            highlightWords: ['panel have'],
            explanation: 'British English commonly uses the plural verb "have" when panel members act as individual dissenting persons.',
            contextNote: 'Music festival competition'
          },
          {
            id: 'ex-l4-sva3',
            sentence: 'Every one of the choir members **wears** a bespoke choral robe tailored in England.',
            highlightWords: ['Every one', 'wears'],
            explanation: '"Every one" is a singular subject, requiring the singular verb "wears".',
            contextNote: 'Cathedral choral group'
          }
        ],
        ruleSummary: 'Ignore words in between; match the verb to the true grammatical subject.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l4-sva1',
        title: 'The "Cover the Middle" Trick',
        trick: 'When a prepositional phrase sits between the subject and the verb, cover it with your thumb! For example: *"The herd of dairy cows [is / are] grazing"* -> *"The herd is grazing"*!',
        mnemonic: 'Find the real subject; ignore the intervening phrase!',
        commonMistake: 'Writing *"One of my Welsh cousins are visiting"* because of "cousins".',
        correctWay: 'Write *"One of my Welsh cousins **is** visiting."*',
        explanation: '"One" is the singular subject, not the plural "cousins".'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l4-sva',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Choose the correct verb: "Every one of the ferry passengers ___ required to follow the safety briefing."',
        instruction: 'Match subject and verb correctly.',
        options: ['are', 'is', 'were', 'have been'],
        correctIndex: 1,
        explanation: '**is** is correct because "Every one" is a singular subject.'
      }
    
    ,
      {
        id: 'gen-sva-1',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Find the subject-verb agreement error.',
        instruction: 'Click the incorrect verb.',
        sentenceWithMistake: 'A bouquet of yellow roses lend colour and fragrance to the room.',
        words: ['A', 'bouquet', 'of', 'yellow', 'roses', 'lend', 'colour', 'and', 'fragrance', 'to', 'the', 'room.'],
        errorWordIndex: 5,
        correctedWord: 'lends',
        explanation: 'The subject is "bouquet" (singular), not "roses" (which is part of the prepositional phrase). Therefore, the verb should be "lends".'
      }
    ]
  }
];

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
        explanation: '✔ **The telephone was patented by Alexander Graham Bell in 1876.** is passive because the telephone receives the action.'
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
        explanation: '✔ **was engineered** forms the passive verb phrase (be + past participle).'
      },
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
        explanation: '✔ In the passive voice, the subject of the sentence (the new bridge) receives the action.'
      },
      {
        id: 'gen2-act-1',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Build this sentence in the PASSIVE voice.',
        instruction: 'Arrange the words so the action happens TO the subject.',
        scrambledWords: ['The', 'window', 'was', 'broken', 'by', 'the', 'storm.'],
        correctSentence: 'The window was broken by the storm.',
        explanation: '✔ In the passive voice, the receiver (window) is the subject, using "was broken by".'
      },
      {
        id: 'ex-apv-5',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Convert to passive voice: "William Shakespeare wrote Hamlet in 1600."',
        instruction: 'Select the correct passive transformation.',
        options: [
          'Hamlet was written by William Shakespeare in 1600.',
          'William Shakespeare was writing Hamlet in 1600.',
          'Hamlet wrote William Shakespeare in 1600.',
          'Shakespeare had written Hamlet by 1600.'
        ],
        correctIndex: 0,
        explanation: '✔ "Hamlet" (receiver) becomes subject + "was written" (passive verb) + "by William Shakespeare".'
      },
      {
        id: 'ex-apv-6',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the AGENT PHRASE introduced by "by" in this passive sentence.',
        instruction: 'Click the words showing who performed the action.',
        sentence: 'The national anthem was sung by the cathedral choir.',
        words: ['The', 'national', 'anthem', 'was', 'sung', 'by', 'the', 'cathedral', 'choir.'],
        targetIndices: [5, 6, 7, 8],
        targetCategoryLabel: 'Agent Phrase',
        explanation: '✔ **by the cathedral choir** identifies the doer of the action in passive voice.'
      },
      {
        id: 'ex-apv-7',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'What is an "agentless passive" sentence?',
        instruction: 'Select the correct definition.',
        options: [
          'A passive sentence where the agent (doer of the action) is omitted.',
          'An active sentence with no direct object.',
          'A sentence written without any verbs.',
          'A sentence with multiple subjects.'
        ],
        correctIndex: 0,
        explanation: '✔ Agentless passives omit the doer (e.g., *"The vault was locked at sunset"*).'
      },
      {
        id: 'ex-apv-8',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Find the passive verb error in this sentence.',
        instruction: 'Click the incorrect past participle form.',
        sentenceWithMistake: 'The ancient scroll was wrote by a medieval monk.',
        words: ['The', 'ancient', 'scroll', 'was', 'wrote', 'by', 'a', 'medieval', 'monk.'],
        errorWordIndex: 4,
        correctedWord: 'written',
        ruleViolated: 'Passive voice requires past participle (written, not wrote)',
        explanation: '✔ Passive voice requires the auxiliary verb + PAST PARTICIPLE (**was written**).'
      },
      {
        id: 'ex-apv-9',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Construct an AGENTLESS PASSIVE sentence in the past tense.',
        instruction: 'Arrange the scrambled words.',
        scrambledWords: ['The', 'Roman', 'ruins', 'were', 'excavated', 'in', '1920.'],
        correctSentence: 'The Roman ruins were excavated in 1920.',
        explanation: '✔ "were excavated" is passive voice without specifying who performed the excavation.'
      },
      {
        id: 'ex-apv-10',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which genre of writing heavily relies on PASSIVE VOICE for objectivity?',
        instruction: 'Select the primary genre.',
        options: [
          'Scientific lab reports and formal historical records',
          'Comic strips and bedtime stories',
          'Action movie screenplays',
          'Personal diary entries'
        ],
        correctIndex: 0,
        explanation: '✔ Scientific and historical writing uses passive voice to focus on facts rather than individuals.'
      },
      {
        id: 'ex-apv-11',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Tap on the ACTIVE VERB in this sentence.',
        instruction: 'Click the active verb.',
        sentence: 'The lighthouse keeper illuminated the stormy coast.',
        words: ['The', 'lighthouse', 'keeper', 'illuminated', 'the', 'stormy', 'coast.'],
        targetIndices: [3],
        targetCategoryLabel: 'Active Verb',
        explanation: '✔ **illuminated**: Active verb directly performed by "the lighthouse keeper".'
      },
      {
        id: 'ex-apv-12',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Which test helps determine if a sentence is passive?',
        instruction: 'Select the trick.',
        options: [
          'Add "...by Roman legionaries" after the verb.',
          'Change the sentence into a question.',
          'Remove all adjectives.',
          'Capitalise the main verb.'
        ],
        correctIndex: 0,
        explanation: '✔ If "...by Roman legionaries" fits grammatically after the verb, the sentence is passive.'
      },
      {
        id: 'ex-apv-13',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Identify the active/passive tense inconsistency error.',
        instruction: 'Click the verb form that breaks passive harmony.',
        sentenceWithMistake: 'The manuscript was edited and publish yesterday.',
        words: ['The', 'manuscript', 'was', 'edited', 'and', 'publish', 'yesterday.'],
        errorWordIndex: 5,
        correctedWord: 'published',
        ruleViolated: 'Coordinated passive verbs must both be past participles',
        explanation: '✔ Coordinated passive verbs must match: **was edited and published**.'
      },
      {
        id: 'ex-apv-14',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Convert "The gale blew down the century-old oak" into passive voice.',
        instruction: 'Arrange the words.',
        scrambledWords: ['The', 'century-old', 'oak', 'was', 'blown', 'down', 'by', 'the', 'gale.'],
        correctSentence: 'The century-old oak was blown down by the gale.',
        explanation: '✔ Receiver ("The century-old oak") + passive verb ("was blown down") + agent ("by the gale").'
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
        explanation: '✔ A **semicolon (;)** connects two independent clauses without a coordinating conjunction.'
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
        explanation: '✔ A colon cannot directly follow the verb "includes" because the clause before it is incomplete.'
      },
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
        explanation: '✔ A semicolon links two independent clauses without a coordinating conjunction.'
      },
      {
        id: 'gen2-semi-1',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Find the "comma splice" error that should be a semicolon.',
        instruction: 'Click the comma that incorrectly joins two independent clauses.',
        sentenceWithMistake: 'The wind howled outside, the fireplace kept the room warm.',
        words: ['The', 'wind', 'howled', 'outside,', 'the', 'fireplace', 'kept', 'the', 'room', 'warm.'],
        errorWordIndex: 3,
        correctedWord: 'outside;',
        ruleViolated: 'Fix comma splices using a semicolon',
        explanation: '✔ A comma splice occurs when two independent sentences are joined by just a comma. Use a semicolon.'
      },
      {
        id: 'ex-sc-5',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'What MUST be true about the clause preceding a COLON introducing a list?',
        instruction: 'Select the mandatory colon rule.',
        options: [
          'It must be a complete independent clause.',
          'It must end with a verb.',
          'It must contain at least three adjectives.',
          'It must be a question.'
        ],
        correctIndex: 0,
        explanation: '✔ The text before a colon must stand as a complete grammatical sentence.'
      },
      {
        id: 'ex-sc-6',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the SEMICOLON in this sentence.',
        instruction: 'Click the semicolon punctuation mark.',
        sentence: 'The storm rattled the windows; nevertheless, the family sat cosily inside.',
        words: ['The', 'storm', 'rattled', 'the', 'windows;', 'nevertheless,', 'the', 'family', 'sat', 'cosily', 'inside.'],
        targetIndices: [4],
        targetCategoryLabel: 'Semicolon',
        explanation: '✔ **windows;** includes the semicolon connecting the two clauses.'
      },
      {
        id: 'ex-sc-7',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Identify the punctuation error where a colon was used instead of a semicolon.',
        instruction: 'Click the misplaced colon.',
        sentenceWithMistake: 'Rain poured heavily: however we continued our hike.',
        words: ['Rain', 'poured', 'heavily:', 'however', 'we', 'continued', 'our', 'hike.'],
        errorWordIndex: 2,
        correctedWord: 'heavily;',
        ruleViolated: 'Use a semicolon before conjunctive adverbs like "however"',
        explanation: '✔ Use a semicolon before "however" when connecting independent clauses.'
      },
      {
        id: 'ex-sc-8',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Why are semicolons used in complex lists (e.g. "Edinburgh, Scotland; Cardiff, Wales; Belfast, Northern Ireland")?',
        instruction: 'Select the functional reason.',
        options: [
          'To separate list items that already contain internal commas.',
          'To make the list sound dramatic.',
          'Because commas are forbidden in lists.',
          'To replace capital letters.'
        ],
        correctIndex: 0,
        explanation: '✔ Semicolons prevent confusion when list items contain internal commas.'
      },
      {
        id: 'ex-sc-9',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Arrange these words to build a sentence using a colon to introduce an explanation.',
        instruction: 'Build the correct sentence.',
        scrambledWords: ['The', 'captain', 'had', 'one', 'motive:', 'he', 'wanted', 'victory.'],
        correctSentence: 'The captain had one motive: he wanted victory.',
        explanation: '✔ "he wanted victory" directly explains what the "one motive" was.'
      },
      {
        id: 'ex-sc-10',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which punctuation mark acts like a "drumroll" introducing a result or definition?',
        instruction: 'Select the punctuation mark.',
        options: ['Colon (:)', 'Semicolon (;)', 'Comma (,)', 'Hyphen (-)'],
        correctIndex: 0,
        explanation: '✔ A **colon (:)** points forward like an arrow to reveal or explain.'
      },
      {
        id: 'ex-sc-11',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Tap on the COLON in this sentence.',
        instruction: 'Click the colon symbol.',
        sentence: 'The hiker packed three items: a map, a compass, and a torch.',
        words: ['The', 'hiker', 'packed', 'three', 'items:', 'a', 'map,', 'a', 'compass,', 'and', 'a', 'torch.'],
        targetIndices: [4],
        targetCategoryLabel: 'Colon',
        explanation: '✔ **items:** contains the colon introducing the list.'
      },
      {
        id: 'ex-sc-12',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Can a semicolon be followed by a coordinating conjunction (FANBOYS)?',
        instruction: 'Select the correct usage rule.',
        options: [
          'No! Semicolons REPLACE coordinating conjunctions.',
          'Yes, semicolons must always be followed by "and".',
          'Only when writing poetry.',
          'Yes, if followed by "but".'
        ],
        correctIndex: 0,
        explanation: '✔ Do NOT combine semicolons with FANBOYS conjunctions (use one or the other).'
      },
      {
        id: 'ex-sc-13',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Find the colon error following a verb.',
        instruction: 'Click the word where a colon was incorrectly attached to a verb.',
        sentenceWithMistake: 'The three British capitals we visited were: London, Edinburgh, and Cardiff.',
        words: ['The', 'three', 'British', 'capitals', 'we', 'visited', 'were:', 'London,', 'Edinburgh,', 'and', 'Cardiff.'],
        errorWordIndex: 6,
        correctedWord: 'were',
        ruleViolated: 'Never place a colon directly after "were" or "are"',
        explanation: '✔ Never place a colon directly after a linking verb like "were".'
      },
      {
        id: 'ex-sc-14',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Assemble a complex sentence joined by a semicolon and conjunctive adverb.',
        instruction: 'Order the words properly.',
        scrambledWords: ['The', 'fog', 'thickened;', 'however,', 'the', 'ship', 'sailed', 'on.'],
        correctSentence: 'The fog thickened; however, the ship sailed on.',
        explanation: '✔ Independent clause + semicolon + "however," + independent clause.'
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
        explanation: '✔ **If I were an eagle...** is the correct subjunctive form for a condition contrary to fact.'
      },
      {
        id: 'ex-q2-l4-sm',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Choose the correct mandative subjunctive verb: "The local council proposed that the historic pier ___ restored."',
        instruction: 'Select the correct base verb form.',
        options: ['is', 'was', 'be', 'being'],
        correctIndex: 2,
        explanation: '✔ Use **be**: "The local council proposed that the historic pier **be** restored."'
      },
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
        explanation: '✔ The subjunctive mood requires the base form of the verb ("rest") after "recommended that".'
      },
      {
        id: 'gen2-subj-1',
        type: 'word-clicker',
        difficultyStep: 4,
        prompt: 'Tap the verb in the subjunctive mood.',
        instruction: 'Identify the base form verb after a formal demand.',
        sentence: 'It is essential that she arrive on time for the meeting.',
        words: ['It', 'is', 'essential', 'that', 'she', 'arrive', 'on', 'time', 'for', 'the', 'meeting.'],
        targetIndices: [5],
        targetCategoryLabel: 'Subjunctive Verb',
        explanation: '✔ "arrive" (instead of "arrives") is in the subjunctive mood following "It is essential that...".'
      },
      {
        id: 'ex-sm-5',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Which fixed idiom contains a traditional subjunctive verb?',
        instruction: 'Select the British subjunctive idiom.',
        options: ['Be that as it may', 'By and large', 'Over and out', 'First and foremost'],
        correctIndex: 0,
        explanation: '✔ **Be that as it may** uses the subjunctive base verb "Be".'
      },
      {
        id: 'ex-sm-6',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the SUBJUNCTIVE VERB in this hypothetical sentence.',
        instruction: 'Click the subjunctive verb.',
        sentence: 'I wish it were warmer along the coast today.',
        words: ['I', 'wish', 'it', 'were', 'warmer', 'along', 'the', 'coast', 'today.'],
        targetIndices: [3],
        targetCategoryLabel: 'Subjunctive Verb',
        explanation: '✔ **were**: Used instead of "was" to express an unreal wish.'
      },
      {
        id: 'ex-sm-7',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Find the non-subjunctive error in this formal demand.',
        instruction: 'Click the verb that should be changed to base form "attend".',
        sentenceWithMistake: 'The judge demanded that the witness attends court.',
        words: ['The', 'judge', 'demanded', 'that', 'the', 'witness', 'attends', 'court.'],
        errorWordIndex: 6,
        correctedWord: 'attend',
        ruleViolated: 'Mandative subjunctive requires bare base verb (attend)',
        explanation: '✔ Mandative subjunctive requires bare infinitive: **that the witness attend**.'
      },
      {
        id: 'ex-sm-8',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Why is "were" used instead of "was" in "If he were king"?',
        instruction: 'Select the grammatical reason.',
        options: [
          'Because "were" expresses a condition contrary to fact (subjunctive mood).',
          'Because "he" is a plural pronoun.',
          'Because "was" is forbidden in British English.',
          'Because it is written in future tense.'
        ],
        correctIndex: 0,
        explanation: '✔ "were" signals the subjunctive mood for unreal/hypothetical states.'
      },
      {
        id: 'ex-sm-9',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Build a hypothetical subjunctive sentence.',
        instruction: 'Arrange the words in order.',
        scrambledWords: ['If', 'I', 'were', 'you,', 'I', 'would', 'accept', 'the', 'offer.'],
        correctSentence: 'If I were you, I would accept the offer.',
        explanation: '✔ "If I were you," uses the standard subjunctive for advice.'
      },
      {
        id: 'ex-sm-10',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which verb triggers a mandative subjunctive clause?',
        instruction: 'Select the triggering verb.',
        options: ['Insist / Demand / Recommend', 'Walk / Run / Jump', 'See / Hear / Touch', 'Like / Enjoy / Prefer'],
        correctIndex: 0,
        explanation: '✔ Verbs of insistence, recommendation, or demand trigger the mandative subjunctive.'
      },
      {
        id: 'ex-sm-11',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Tap on the MANDATIVE SUBJUNCTIVE verb in this sentence.',
        instruction: 'Click the base form verb.',
        sentence: 'The headteacher requested that every pupil wear school uniform.',
        words: ['The', 'headteacher', 'requested', 'that', 'every', 'pupil', 'wear', 'school', 'uniform.'],
        targetIndices: [6],
        targetCategoryLabel: 'Subjunctive Verb',
        explanation: '✔ **wear** (not "wears") is the mandative subjunctive verb.'
      },
      {
        id: 'ex-sm-12',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Complete with subjunctive: "The chairman insisted that the meeting ___ adjourned immediately."',
        instruction: 'Choose the correct subjunctive verb.',
        options: ['be', 'is', 'was', 'were to be'],
        correctIndex: 0,
        explanation: '✔ **be**: "The chairman insisted that the meeting **be** adjourned immediately."'
      },
      {
        id: 'ex-sm-13',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Find the error in this subjunctive wish.',
        instruction: 'Click the verb "was" that should be "were".',
        sentenceWithMistake: 'He wished he was able to fly over the mountains.',
        words: ['He', 'wished', 'he', 'was', 'able', 'to', 'fly', 'over', 'the', 'mountains.'],
        errorWordIndex: 3,
        correctedWord: 'were',
        ruleViolated: 'Subjunctive wish rule',
        explanation: '✔ Expressing an unreal wish requires subjunctive **were**: "wished he **were** able".'
      },
      {
        id: 'ex-sm-14',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Reconstruct a formal recommendation using mandative subjunctive.',
        instruction: 'Arrange the words.',
        scrambledWords: ['The', 'doctor', 'recommended', 'that', 'she', 'take', 'a', 'rest.'],
        correctSentence: 'The doctor recommended that she take a rest.',
        explanation: '✔ "recommended that she take" (not "takes") is the mandative subjunctive.'
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
        explanation: '✔ **is** is correct because "Every one" is a singular subject.'
      },
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
        ruleViolated: 'Match subject "bouquet" with singular verb "lends"',
        explanation: '✔ The subject is "bouquet" (singular), not "roses". Use "lends".'
      },
      {
        id: 'gen2-sva-1',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Choose the correct verb for this collective noun (acting as a single unit):',
        instruction: 'Select the verb that agrees with the subject.',
        options: [
          'The jury have finally reached a verdict.',
          'The jury has finally reached a verdict.',
          'The jury are finally reached a verdict.',
          'The jury is finally reach a verdict.'
        ],
        correctIndex: 1,
        explanation: '✔ When a collective noun (jury) acts as a single unified body, it takes a singular verb (has).'
      },
      {
        id: 'ex-sva-4',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Which verb correctly completes: "Neither of the two roads ___ to the castle."',
        instruction: 'Select the singular verb.',
        options: ['leads', 'lead', 'are leading', 'have led'],
        correctIndex: 0,
        explanation: '✔ **leads**: "Neither" is a singular indefinite pronoun, so it requires "leads".'
      },
      {
        id: 'ex-sva-5',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the SINGULAR SUBJECT in this sentence.',
        instruction: 'Click the true grammatical subject.',
        sentence: 'The box of old silver coins was found in the cellar.',
        words: ['The', 'box', 'of', 'old', 'silver', 'coins', 'was', 'found', 'in', 'the', 'cellar.'],
        targetIndices: [1],
        targetCategoryLabel: 'Singular Subject',
        explanation: '✔ **box** is the true singular subject (not "coins").'
      },
      {
        id: 'ex-sva-6',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find the agreement error in this sentence.',
        instruction: 'Click the verb that fails to agree with "One".',
        sentenceWithMistake: 'One of my best friends live in Manchester.',
        words: ['One', 'of', 'my', 'best', 'friends', 'live', 'in', 'Manchester.'],
        errorWordIndex: 5,
        correctedWord: 'lives',
        ruleViolated: 'Subject "One" requires singular verb "lives"',
        explanation: '✔ The subject "One" requires the singular verb **lives**.'
      },
      {
        id: 'ex-sva-7',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'How do British collective nouns (e.g. "team", "family", "committee") behave with verbs?',
        instruction: 'Select the British English rule.',
        options: [
          'They can take singular OR plural verbs depending on whether members act as one unit or as individuals.',
          'They must ALWAYS take plural verbs.',
          'They must ALWAYS take singular verbs.',
          'They do not take verbs.'
        ],
        correctIndex: 0,
        explanation: '✔ British English allows plural verbs when members act individually.'
      },
      {
        id: 'ex-sva-8',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Arrange these words to make a sentence with correct subject-verb agreement.',
        instruction: 'Order the words properly.',
        scrambledWords: ['Each', 'of', 'the', 'pupils', 'has', 'a', 'textbook.'],
        correctSentence: 'Each of the pupils has a textbook.',
        explanation: '✔ "Each" is singular and takes the singular verb "has".'
      },
      {
        id: 'ex-sva-9',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Tap on the VERB that agrees with the compound subject joined by "and".',
        instruction: 'Click the plural verb.',
        sentence: 'Bread and butter are served with every meal.',
        words: ['Bread', 'and', 'butter', 'are', 'served', 'with', 'every', 'meal.'],
        targetIndices: [3],
        targetCategoryLabel: 'Plural Verb',
        explanation: '✔ **are**: Compound subjects joined by "and" usually take a plural verb.'
      },
      {
        id: 'ex-sva-10',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which sentence has CORRECT subject-verb agreement with "either... or"?',
        instruction: 'Select the correct sentence.',
        options: [
          'Either the manager or the assistants are attending.',
          'Either the manager or the assistants is attending.',
          'Either the manager or the assistants be attending.',
          'Either the manager or the assistants was attending.'
        ],
        correctIndex: 0,
        explanation: '✔ With "either... or", the verb agrees with the subject CLOSER to it ("assistants are").'
      },
      {
        id: 'ex-sva-11',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Identify the verb error influenced by an intervening prepositional phrase.',
        instruction: 'Click the incorrect verb.',
        sentenceWithMistake: 'The crate of fresh Yorkshire apples have arrived at the harbour.',
        words: ['The', 'crate', 'of', 'fresh', 'Yorkshire', 'apples', 'have', 'arrived', 'at', 'the', 'harbour.'],
        errorWordIndex: 6,
        correctedWord: 'has',
        ruleViolated: 'Subject "crate" requires singular verb "has"',
        explanation: '✔ Subject is "crate" (singular), so use **has arrived**.'
      },
      {
        id: 'ex-sva-12',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Construct a sentence with an indefinite pronoun subject.',
        instruction: 'Arrange the words.',
        scrambledWords: ['Everyone', 'in', 'the', 'choir', 'sings', 'beautifully.'],
        correctSentence: 'Everyone in the choir sings beautifully.',
        explanation: '✔ "Everyone" is singular and takes "sings".'
      },
      {
        id: 'ex-sva-13',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Choose the correct verb: "Ten miles ___ a long distance to walk in freezing fog."',
        instruction: 'Select the verb for a single unit of measurement.',
        options: ['is', 'are', 'were', 'have been'],
        correctIndex: 0,
        explanation: '✔ **is**: Expressions of distance, money, or time as a single unit take singular verbs.'
      },
      {
        id: 'ex-sva-14',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Find the subject-verb error in this compound subject sentence.',
        instruction: 'Click the incorrect verb.',
        sentenceWithMistake: 'Neither the captain nor the crew members was prepared for the storm.',
        words: ['Neither', 'the', 'captain', 'nor', 'the', 'crew', 'members', 'was', 'prepared', 'for', 'the', 'storm.'],
        errorWordIndex: 7,
        correctedWord: 'were',
        ruleViolated: 'Verb agrees with closest subject "crew members"',
        explanation: '✔ The subject closest to the verb is plural ("crew members"), so use **were**.'
      }
    ]
  },
  {
    id: 'l4-final-assessment',
    slug: 'level-4-final-assessment',
    title: 'Level 4 Final Assessment: Key Stage 3 Master',
    subtitle: '50 comprehensive questions testing active/passive voice, semicolons/colons, subjunctive mood, and complex agreement.',
    level: 'level-4',
    levelLabel: 'Level 4: Advanced',
    levelStage: 'Key Stage 3',
    ageGroup: 'Ages 11–14',
    category: 'advanced-syntax',
    categoryLabel: 'Advanced Syntax',
    iconName: 'Award',
    estimatedMinutes: 30,
    overview: 'This comprehensive **50-question Final Assessment** tests your mastery across all four Level 4 Key Stage 3 topics: Active vs Passive Voice, Semicolons & Colons, Subjunctive Mood, and Complex Subject-Verb Agreement. Successfully completing this assessment earns you the **KS3 Syntax Commander Badge**.',
    whyItMatters: 'Achieving a high score demonstrates full readiness for Key Stage 3 assessment and GCSE English Language syntax standards.',
    sections: [
      {
        id: 'sec-l4-fa-overview',
        title: 'Level 4 Final Assessment Structure',
        content: 'You will tackle 50 questions covering all Level 4 topics:',
        bulletPoints: [
          '**Questions 1–12:** Active vs Passive Voice',
          '**Questions 13–25:** Semicolons, Colons & Dashes',
          '**Questions 26–38:** The Subjunctive Mood in British English',
          '**Questions 39–50:** Complex Subject-Verb Agreement'
        ],
        examples: [
          {
            id: 'ex-l4-fa-demo',
            sentence: 'The historical discovery **was documented** by researchers; consequently, Parliament passed the preservation act.',
            highlightWords: ['was documented', '; consequently,'],
            explanation: 'Combines passive voice ("was documented by") with advanced punctuation (semicolon + conjunctive adverb).',
            contextNote: 'KS3 Syntax synthesis'
          }
        ],
        ruleSummary: 'Read each prompt carefully and apply the explicit rules learned in Level 4.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l4-fa-1',
        title: 'Level 4 Mastery Strategy',
        trick: 'Check passive agent phrases ("...by X"), test colons with the complete sentence rule, look for subjunctive base verbs ("be", "were"), and match subject-verb agreement by ignoring prepositional phrases!',
        mnemonic: 'Voice -> Punctuation -> Subjunctive -> Agreement!',
        commonMistake: 'Rushing through complex punctuation options without checking clause independence.',
        correctWay: 'Break every complex sentence down into its constituent clauses.',
        explanation: 'Ensures precision on multi-clause advanced grammar questions.'
      }
    ],
    exercises: [
      // TOPIC 1: Active vs Passive Voice (Q1-12)
      {
        id: 'l4-fa-q1',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Topic 1: Active vs Passive Voice • Question 1 of 50',
        instruction: 'Which sentence is written in the PASSIVE voice?',
        options: [
          'Isambard Kingdom Brunel designed the Clifton Suspension Bridge.',
          'The Clifton Suspension Bridge was designed by Isambard Kingdom Brunel.',
          'Brunel engineered famous railways across Britain.',
          'The bridge spans the Avon Gorge.'
        ],
        correctIndex: 1,
        explanation: '✔ **The Clifton Suspension Bridge was designed by Isambard Kingdom Brunel.** is passive.'
      },
      {
        id: 'l4-fa-q2',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Topic 1: Active vs Passive Voice • Question 2 of 50',
        instruction: 'Tap on the PASSIVE VERB PHRASE in this sentence.',
        sentence: 'The priceless manuscript was discovered in the British Library vault.',
        words: ['The', 'priceless', 'manuscript', 'was', 'discovered', 'in', 'the', 'British', 'Library', 'vault.'],
        targetIndices: [3, 4],
        targetCategoryLabel: 'Passive Verb Phrase',
        explanation: '✔ **was discovered** is the passive verb phrase (was + past participle).'
      },
      {
        id: 'l4-fa-q3',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Topic 1: Active vs Passive Voice • Question 3 of 50',
        instruction: 'Convert to active voice: "Penicillin was discovered by Sir Alexander Fleming in 1928."',
        options: [
          'Sir Alexander Fleming discovered penicillin in 1928.',
          'Sir Alexander Fleming was discovering penicillin in 1928.',
          'Penicillin discovered Sir Alexander Fleming in 1928.',
          'Penicillin had been discovered by Fleming in 1928.'
        ],
        correctIndex: 0,
        explanation: '✔ **Sir Alexander Fleming discovered penicillin in 1928.** is the active voice equivalent.'
      },
      {
        id: 'l4-fa-q4',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Topic 1: Active vs Passive Voice • Question 4 of 50',
        instruction: 'Click the incorrect verb form in this passive sentence.',
        sentenceWithMistake: 'The ancient castle was rebuild after the fire.',
        words: ['The', 'ancient', 'castle', 'was', 'rebuild', 'after', 'the', 'fire.'],
        errorWordIndex: 4,
        correctedWord: 'rebuilt',
        ruleViolated: 'Passive voice requires past participle (rebuilt)',
        explanation: '✔ Passive voice requires past participle: **was rebuilt**.'
      },
      {
        id: 'l4-fa-q5',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Topic 1: Active vs Passive Voice • Question 5 of 50',
        instruction: 'Build an AGENTLESS PASSIVE sentence.',
        scrambledWords: ['The', 'monument', 'was', 'erected', 'in', '1850.'],
        correctSentence: 'The monument was erected in 1850.',
        explanation: '✔ "The monument was erected in 1850." omits the agent.'
      },
      {
        id: 'l4-fa-q6',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Topic 1: Active vs Passive Voice • Question 6 of 50',
        instruction: 'What phrase can be inserted after a verb to test if a sentence is passive?',
        options: ['...by Roman legionaries', '...and then', '...because of that', '...very quickly'],
        correctIndex: 0,
        explanation: '✔ "...by Roman legionaries" tests if the subject receives the action.'
      },
      {
        id: 'l4-fa-q7',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Topic 1: Active vs Passive Voice • Question 7 of 50',
        instruction: 'Tap on the AGENT PHRASE in this passive sentence.',
        sentence: 'The symphony was performed by the Royal Philharmonic Orchestra.',
        words: ['The', 'symphony', 'was', 'performed', 'by', 'the', 'Royal', 'Philharmonic', 'Orchestra.'],
        targetIndices: [4, 5, 6, 7, 8],
        targetCategoryLabel: 'Agent Phrase',
        explanation: '✔ **by the Royal Philharmonic Orchestra** identifies the doer.'
      },
      {
        id: 'l4-fa-q8',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Topic 1: Active vs Passive Voice • Question 8 of 50',
        instruction: 'Why is passive voice often preferred in scientific papers?',
        options: [
          'It emphasizes the objective experiment or discovery over the researcher.',
          'It makes the paper longer.',
          'Because active voice is illegal in science.',
          'It replaces all nouns with pronouns.'
        ],
        correctIndex: 0,
        explanation: '✔ Passive voice focuses objectively on the scientific process.'
      },
      {
        id: 'l4-fa-q9',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Topic 1: Active vs Passive Voice • Question 9 of 50',
        instruction: 'Convert "The gale destroyed the coastal pier" to passive voice.',
        scrambledWords: ['The', 'coastal', 'pier', 'was', 'destroyed', 'by', 'the', 'gale.'],
        correctSentence: 'The coastal pier was destroyed by the gale.',
        explanation: '✔ Receiver ("The coastal pier") + passive verb ("was destroyed") + agent ("by the gale").'
      },
      {
        id: 'l4-fa-q10',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Topic 1: Active vs Passive Voice • Question 10 of 50',
        instruction: 'Click the active verb that breaks the passive sentence flow.',
        sentenceWithMistake: 'The report was drafted by the team and submit yesterday.',
        words: ['The', 'report', 'was', 'drafted', 'by', 'the', 'team', 'and', 'submit', 'yesterday.'],
        errorWordIndex: 8,
        correctedWord: 'submitted',
        ruleViolated: 'Coordinated passive verbs must be past participles',
        explanation: '✔ Both coordinated verbs must be past participles: **drafted and submitted**.'
      },
      {
        id: 'l4-fa-q11',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Topic 1: Active vs Passive Voice • Question 11 of 50',
        instruction: 'Identify the active sentence among these choices.',
        options: [
          'The lifeboat rescued three stranded sailors during the storm.',
          'Three stranded sailors were rescued during the storm.',
          'The vessel was damaged by high waves.',
          'The distress call was received at midnight.'
        ],
        correctIndex: 0,
        explanation: '✔ **The lifeboat rescued three stranded sailors...** is active.'
      },
      {
        id: 'l4-fa-q12',
        type: 'word-clicker',
        difficultyStep: 4,
        prompt: 'Topic 1: Active vs Passive Voice • Question 12 of 50',
        instruction: 'Tap on the AUXILIARY VERB forming part of the passive voice.',
        sentence: 'The Crown Jewels are guarded round the clock.',
        words: ['The', 'Crown', 'Jewels', 'are', 'guarded', 'round', 'the', 'clock.'],
        targetIndices: [3],
        targetCategoryLabel: 'Auxiliary Verb (to be)',
        explanation: '✔ **are** is the present auxiliary verb combined with past participle "guarded".'
      },

      // TOPIC 2: Semicolons & Colons (Q13-25)
      {
        id: 'l4-fa-q13',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Topic 2: Semicolons & Colons • Question 13 of 50',
        instruction: 'Which punctuation mark links two independent clauses without a conjunction?',
        options: ['Semicolon (;)', 'Comma (,)', 'Colon (:)', 'Hyphen (-)'],
        correctIndex: 0,
        explanation: '✔ A **semicolon (;)** connects two closely related independent clauses.'
      },
      {
        id: 'l4-fa-q14',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Topic 2: Semicolons & Colons • Question 14 of 50',
        instruction: 'Tap on the SEMICOLON connecting the independent clauses.',
        sentence: 'The fog thickened rapidly; the captain ordered the foghorn sounded.',
        words: ['The', 'fog', 'thickened', 'rapidly;', 'the', 'captain', 'ordered', 'the', 'foghorn', 'sounded.'],
        targetIndices: [3],
        targetCategoryLabel: 'Semicolon',
        explanation: '✔ **rapidly;** contains the semicolon.'
      },
      {
        id: 'l4-fa-q15',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Topic 2: Semicolons & Colons • Question 15 of 50',
        instruction: 'What must precede a COLON introducing a list or explanation?',
        options: [
          'A complete independent clause',
          'A single adjective',
          'A coordinating conjunction',
          'A prepositional phrase'
        ],
        correctIndex: 0,
        explanation: '✔ The text before a colon must form a complete independent clause.'
      },
      {
        id: 'l4-fa-q16',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Topic 2: Semicolons & Colons • Question 16 of 50',
        instruction: 'Click the word where a colon was placed incorrectly after a verb.',
        sentenceWithMistake: 'Our excursion includes: York, Harrogate, and Ripon.',
        words: ['Our', 'excursion', 'includes:', 'York,', 'Harrogate,', 'and', 'Ripon.'],
        errorWordIndex: 2,
        correctedWord: 'includes',
        ruleViolated: 'Never place a colon directly after a verb like "includes"',
        explanation: '✔ Remove the colon after "includes".'
      },
      {
        id: 'l4-fa-q17',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Topic 2: Semicolons & Colons • Question 17 of 50',
        instruction: 'Build a sentence using a semicolon and conjunctive adverb.',
        scrambledWords: ['The', 'rain', 'stopped;', 'however,', 'the', 'ground', 'remained', 'soggy.'],
        correctSentence: 'The rain stopped; however, the ground remained soggy.',
        explanation: '✔ Independent clause + semicolon + "however," + independent clause.'
      },
      {
        id: 'l4-fa-q18',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Topic 2: Semicolons & Colons • Question 18 of 50',
        instruction: 'Why are semicolons used in complex lists?',
        options: [
          'To separate list items that contain internal commas.',
          'To replace all full stops.',
          'To show excitement.',
          'Because colons are not allowed in lists.'
        ],
        correctIndex: 0,
        explanation: '✔ Semicolons prevent comma clutter when list items have internal commas.'
      },
      {
        id: 'l4-fa-q19',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Topic 2: Semicolons & Colons • Question 19 of 50',
        instruction: 'Tap on the COLON in this sentence.',
        sentence: 'The detective reached one conclusion: the motive was jealousy.',
        words: ['The', 'detective', 'reached', 'one', 'conclusion:', 'the', 'motive', 'was', 'jealousy.'],
        targetIndices: [4],
        targetCategoryLabel: 'Colon',
        explanation: '✔ **conclusion:** contains the colon introducing the explanation.'
      },
      {
        id: 'l4-fa-q20',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Topic 2: Semicolons & Colons • Question 20 of 50',
        instruction: 'Click the comma splice error that requires a semicolon.',
        sentenceWithMistake: 'The wind was howling, we decided to stay inside.',
        words: ['The', 'wind', 'was', 'howling,', 'we', 'decided', 'to', 'stay', 'inside.'],
        errorWordIndex: 3,
        correctedWord: 'howling;',
        ruleViolated: 'Fix comma splice using a semicolon',
        explanation: '✔ Replace the comma splice with a semicolon: **howling; we decided**.'
      },
      {
        id: 'l4-fa-q21',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Topic 2: Semicolons & Colons • Question 21 of 50',
        instruction: 'Which sentence correctly uses a COLON to introduce an explanation?',
        options: [
          'The museum had a clear rule: no flash photography is permitted inside.',
          'The rule was: no flash photography.',
          'Visitors must: refrain from photography.',
          'No flash photography is: strictly enforced.'
        ],
        correctIndex: 0,
        explanation: '✔ Option 1 places a full clause before the colon and an explanation after.'
      },
      {
        id: 'l4-fa-q22',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Topic 2: Semicolons & Colons • Question 22 of 50',
        instruction: 'Arrange these words to make a sentence introducing a formal list with a colon.',
        scrambledWords: ['The', 'recipe', 'requires', 'three', 'spices:', 'cinnamon,', 'nutmeg,', 'and', 'cloves.'],
        correctSentence: 'The recipe requires three spices: cinnamon, nutmeg, and cloves.',
        explanation: '✔ Independent clause + colon + list items.'
      },
      {
        id: 'l4-fa-q23',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Topic 2: Semicolons & Colons • Question 23 of 50',
        instruction: 'What is wrong with: "I like hiking; and camping"?',
        options: [
          'A semicolon should not be followed by a coordinating conjunction like "and".',
          'It needs a colon after hiking.',
          '"Camping" should be capitalized.',
          'It is completely correct.'
        ],
        correctIndex: 0,
        explanation: '✔ Do NOT combine a semicolon with a coordinating conjunction.'
      },
      {
        id: 'l4-fa-q24',
        type: 'word-clicker',
        difficultyStep: 4,
        prompt: 'Topic 2: Semicolons & Colons • Question 24 of 50',
        instruction: 'Tap on the CONJUNCTIVE ADVERB following the semicolon.',
        sentence: 'The mountain path was steep; nevertheless, the walkers persevered.',
        words: ['The', 'mountain', 'path', 'was', 'steep;', 'nevertheless,', 'the', 'walkers', 'persevered.'],
        targetIndices: [5],
        targetCategoryLabel: 'Conjunctive Adverb',
        explanation: '✔ **nevertheless,** is the conjunctive adverb following the semicolon.'
      },
      {
        id: 'l4-fa-q25',
        type: 'error-detective',
        difficultyStep: 5,
        prompt: 'Topic 2: Semicolons & Colons • Question 25 of 50',
        instruction: 'Click the misplaced colon following "are".',
        sentenceWithMistake: 'The ingredients are: flour, eggs, and milk.',
        words: ['The', 'ingredients', 'are:', 'flour,', 'eggs,', 'and', 'milk.'],
        errorWordIndex: 2,
        correctedWord: 'are',
        ruleViolated: 'Never place a colon directly after a linking verb like "are"',
        explanation: '✔ Remove colon after "are": "The ingredients are flour, eggs, and milk."'
      },

      // TOPIC 3: Subjunctive Mood (Q26-38)
      {
        id: 'l4-fa-q26',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Topic 3: Subjunctive Mood • Question 26 of 50',
        instruction: 'Which sentence correctly uses the subjunctive mood for an unreal wish?',
        options: [
          'If I were in London, I would visit Westminster Abbey.',
          'If I was in London, I will visit Westminster Abbey.',
          'If I am in London, I would visit Westminster Abbey.',
          'If I will be in London, I visit Westminster Abbey.'
        ],
        correctIndex: 0,
        explanation: '✔ **If I were in London...** is the correct subjunctive form.'
      },
      {
        id: 'l4-fa-q27',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Topic 3: Subjunctive Mood • Question 27 of 50',
        instruction: 'Tap on the SUBJUNCTIVE VERB in this sentence.',
        sentence: 'The headteacher insisted that Arthur report to the office.',
        words: ['The', 'headteacher', 'insisted', 'that', 'Arthur', 'report', 'to', 'the', 'office.'],
        targetIndices: [5],
        targetCategoryLabel: 'Mandative Subjunctive Verb',
        explanation: '✔ **report** (bare infinitive, not "reports") is the mandative subjunctive.'
      },
      {
        id: 'l4-fa-q28',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Topic 3: Subjunctive Mood • Question 28 of 50',
        instruction: 'Complete with the mandative subjunctive: "The council proposed that the park ___ open until dusk."',
        options: ['remain', 'remains', 'remained', 'is remaining'],
        correctIndex: 0,
        explanation: '✔ **remain**: Mandative subjunctive uses the bare root verb.'
      },
      {
        id: 'l4-fa-q29',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Topic 3: Subjunctive Mood • Question 29 of 50',
        instruction: 'Click the verb that breaks the mandative subjunctive rule.',
        sentenceWithMistake: 'The guide recommended that everyone wears sturdy boots.',
        words: ['The', 'guide', 'recommended', 'that', 'everyone', 'wears', 'sturdy', 'boots.'],
        errorWordIndex: 5,
        correctedWord: 'wear',
        ruleViolated: 'Mandative subjunctive requires bare verb (wear, not wears)',
        explanation: '✔ Use bare root verb: **everyone wear** sturdy boots.'
      },
      {
        id: 'l4-fa-q30',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Topic 3: Subjunctive Mood • Question 30 of 50',
        instruction: 'Arrange the words to form a subjunctive sentence.',
        scrambledWords: ['If', 'I', 'were', 'the', 'captain,', 'I', 'would', 'steer', 'north.'],
        correctSentence: 'If I were the captain, I would steer north.',
        explanation: '✔ "If I were the captain," uses subjunctive "were".'
      },
      {
        id: 'l4-fa-q31',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Topic 3: Subjunctive Mood • Question 31 of 50',
        instruction: 'Which fixed idiom contains a subjunctive verb?',
        options: ['God save the King', 'By and large', 'All in all', 'Out and about'],
        correctIndex: 0,
        explanation: '✔ **God save the King** uses the subjunctive verb "save".'
      },
      {
        id: 'l4-fa-q32',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Topic 3: Subjunctive Mood • Question 32 of 50',
        instruction: 'Tap on the SUBJUNCTIVE "were" in this hypothetical clause.',
        sentence: 'She wished she were able to attend the performance.',
        words: ['She', 'wished', 'she', 'were', 'able', 'to', 'attend', 'the', 'performance.'],
        targetIndices: [3],
        targetCategoryLabel: 'Subjunctive Verb',
        explanation: '✔ **were** expresses an unreal wish.'
      },
      {
        id: 'l4-fa-q33',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Topic 3: Subjunctive Mood • Question 33 of 50',
        instruction: 'Complete: "The judge ordered that the evidence ___ presented in court."',
        options: ['be', 'is', 'was', 'being'],
        correctIndex: 0,
        explanation: '✔ **be**: "ordered that the evidence **be** presented".'
      },
      {
        id: 'l4-fa-q34',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Topic 3: Subjunctive Mood • Question 34 of 50',
        instruction: 'Click the verb "was" that should be subjunctive "were".',
        sentenceWithMistake: 'If he was here today, he would explain the whole story.',
        words: ['If', 'he', 'was', 'here', 'today,', 'he', 'would', 'explain', 'the', 'whole', 'story.'],
        errorWordIndex: 2,
        correctedWord: 'were',
        ruleViolated: 'Use subjunctive "were" for hypothetical present conditions',
        explanation: '✔ Change "was" to **were**: "If he **were** here today".'
      },
      {
        id: 'l4-fa-q35',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Topic 3: Subjunctive Mood • Question 35 of 50',
        instruction: 'Build a sentence with a mandative subjunctive clause.',
        scrambledWords: ['The', 'committee', 'requested', 'that', 'he', 'resign', 'immediately.'],
        correctSentence: 'The committee requested that he resign immediately.',
        explanation: '✔ "requested that he resign" uses bare infinitive "resign".'
      },
      {
        id: 'l4-fa-q36',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Topic 3: Subjunctive Mood • Question 36 of 50',
        instruction: 'What is the subjunctive form of "to be" used after formal recommendations?',
        options: ['be', 'is', 'am', 'are'],
        correctIndex: 0,
        explanation: '✔ **be** is the subjunctive form of "to be".'
      },
      {
        id: 'l4-fa-q37',
        type: 'word-clicker',
        difficultyStep: 4,
        prompt: 'Topic 3: Subjunctive Mood • Question 37 of 50',
        instruction: 'Tap on the SUBJUNCTIVE verb form in this sentence.',
        sentence: 'Far be it from me to criticize your decision.',
        words: ['Far', 'be', 'it', 'from', 'me', 'to', 'criticize', 'your', 'decision.'],
        targetIndices: [1],
        targetCategoryLabel: 'Subjunctive Verb',
        explanation: '✔ **be** in "Far be it from me" is a fixed subjunctive idiom.'
      },
      {
        id: 'l4-fa-q38',
        type: 'error-detective',
        difficultyStep: 5,
        prompt: 'Topic 3: Subjunctive Mood • Question 38 of 50',
        instruction: 'Click the verb form that violates mandative subjunctive grammar.',
        sentenceWithMistake: 'It is essential that every member signs the document.',
        words: ['It', 'is', 'essential', 'that', 'every', 'member', 'signs', 'the', 'document.'],
        errorWordIndex: 5,
        correctedWord: 'sign',
        ruleViolated: 'Use bare verb "sign" after "It is essential that"',
        explanation: '✔ Change "signs" to bare infinitive **sign**.'
      },

      // TOPIC 4: Complex Subject-Verb Agreement (Q39-50)
      {
        id: 'l4-fa-q39',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Topic 4: Complex Subject-Verb Agreement • Question 39 of 50',
        instruction: 'Choose the correct verb: "Neither of the two maps ___ accurate."',
        options: ['is', 'are', 'were', 'have been'],
        correctIndex: 0,
        explanation: '✔ **is**: "Neither" is a singular indefinite pronoun.'
      },
      {
        id: 'l4-fa-q40',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Topic 4: Complex Subject-Verb Agreement • Question 40 of 50',
        instruction: 'Tap on the TRUE SINGULAR SUBJECT in this sentence.',
        sentence: 'The crate of fresh oranges was delivered to the market.',
        words: ['The', 'crate', 'of', 'fresh', 'oranges', 'was', 'delivered', 'to', 'the', 'market.'],
        targetIndices: [1],
        targetCategoryLabel: 'Singular Subject',
        explanation: '✔ **crate** is the singular subject (ignore "oranges").'
      },
      {
        id: 'l4-fa-q41',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Topic 4: Complex Subject-Verb Agreement • Question 41 of 50',
        instruction: 'Select the sentence with CORRECT subject-verb agreement.',
        options: [
          'Each of the choir members has a folder.',
          'Each of the choir members have a folder.',
          'Each of the choir members having a folder.',
          'Each of the choir members are having a folder.'
        ],
        correctIndex: 0,
        explanation: '✔ **Each... has** is grammatically correct.'
      },
      {
        id: 'l4-fa-q42',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Topic 4: Complex Subject-Verb Agreement • Question 42 of 50',
        instruction: 'Click the verb that fails to agree with singular "One".',
        sentenceWithMistake: 'One of the mountain hikers are missing.',
        words: ['One', 'of', 'the', 'mountain', 'hikers', 'are', 'missing.'],
        errorWordIndex: 5,
        correctedWord: 'is',
        ruleViolated: 'Subject "One" requires singular verb "is"',
        explanation: '✔ Change "are" to **is**: "One of the mountain hikers **is** missing."'
      },
      {
        id: 'l4-fa-q43',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Topic 4: Complex Subject-Verb Agreement • Question 43 of 50',
        instruction: 'Arrange the words to make a correct sentence.',
        scrambledWords: ['A', 'bouquet', 'of', 'roses', 'smells', 'delightful.'],
        correctSentence: 'A bouquet of roses smells delightful.',
        explanation: '✔ Subject "bouquet" (singular) + verb "smells".'
      },
      {
        id: 'l4-fa-q44',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Topic 4: Complex Subject-Verb Agreement • Question 44 of 50',
        instruction: 'With "either... or", which noun determines verb agreement?',
        options: [
          'The subject closer to the verb',
          'The first subject in the sentence',
          'Always singular',
          'Always plural'
        ],
        correctIndex: 0,
        explanation: '✔ The verb agrees with the subject closest to it.'
      },
      {
        id: 'l4-fa-q45',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Topic 4: Complex Subject-Verb Agreement • Question 45 of 50',
        instruction: 'Tap on the VERB agreeing with the collective noun acting as a single unit.',
        sentence: 'The committee has approved the new budget.',
        words: ['The', 'committee', 'has', 'approved', 'the', 'new', 'budget.'],
        targetIndices: [2],
        targetCategoryLabel: 'Singular Verb',
        explanation: '✔ **has** agrees with "committee" acting as a single unit.'
      },
      {
        id: 'l4-fa-q46',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Topic 4: Complex Subject-Verb Agreement • Question 46 of 50',
        instruction: 'Click the verb that fails to agree with "Everyone".',
        sentenceWithMistake: 'Everyone in the audience were cheering loudly.',
        words: ['Everyone', 'in', 'the', 'audience', 'were', 'cheering', 'loudly.'],
        errorWordIndex: 4,
        correctedWord: 'was',
        ruleViolated: '"Everyone" is singular and requires "was"',
        explanation: '✔ "Everyone" takes singular verb **was**.'
      },
      {
        id: 'l4-fa-q47',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Topic 4: Complex Subject-Verb Agreement • Question 47 of 50',
        instruction: 'Choose the correct verb: "Twenty pounds ___ a fair price for the guidebook."',
        options: ['is', 'are', 'were', 'have been'],
        correctIndex: 0,
        explanation: '✔ Sums of money acting as a single quantity take singular verb **is**.'
      },
      {
        id: 'l4-fa-q48',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Topic 4: Complex Subject-Verb Agreement • Question 48 of 50',
        instruction: 'Build a sentence with an intervening prepositional phrase.',
        scrambledWords: ['The', 'list', 'of', 'winners', 'was', 'announced', 'today.'],
        correctSentence: 'The list of winners was announced today.',
        explanation: '✔ Subject "list" (singular) takes "was".'
      },
      {
        id: 'l4-fa-q49',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Topic 4: Complex Subject-Verb Agreement • Question 49 of 50',
        instruction: 'Select the sentence with proper agreement using "Neither... nor":',
        options: [
          'Neither the captain nor the sailors were aware of the fog.',
          'Neither the captain nor the sailors was aware of the fog.',
          'Neither the captain nor the sailors be aware of the fog.',
          'Neither the captain nor the sailors is aware of the fog.'
        ],
        correctIndex: 0,
        explanation: '✔ Verb agrees with closest plural subject "sailors were".'
      },
      {
        id: 'l4-fa-q50',
        type: 'word-clicker',
        difficultyStep: 5,
        prompt: 'Topic 4: Complex Subject-Verb Agreement • Question 50 of 50',
        instruction: 'Tap on the SINGULAR VERB that agrees with "Neither".',
        sentence: 'Neither of the two solutions is entirely satisfactory.',
        words: ['Neither', 'of', 'the', 'two', 'solutions', 'is', 'entirely', 'satisfactory.'],
        targetIndices: [5],
        targetCategoryLabel: 'Singular Verb',
        explanation: '✔ **is** agrees with singular "Neither".'
      }
    ]
  }
];

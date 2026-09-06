import { GrammarTopic } from '../types';

export const LEVEL_1_TOPICS: GrammarTopic[] = [
  {
    id: 'l1-nouns',
    slug: 'nouns-common-proper',
    title: 'Nouns: Common & Proper Nouns',
    subtitle: 'The building blocks of English: naming people, places, animals, and things.',
    level: 'level-1',
    levelLabel: 'Level 1: Beginner',
    levelStage: 'Key Stage 1',
    ageGroup: 'Ages 5–7',
    category: 'parts-of-speech',
    categoryLabel: 'Parts of Speech',
    iconName: 'Package',
    estimatedMinutes: 5,
    overview: 'A noun is a naming word. Everything you can see, touch, or talk about has a name. Nouns are divided into **common nouns** (everyday objects) and **proper nouns** (special names that always start with a capital letter).',
    whyItMatters: 'Nouns provide the subject of every sentence. Without nouns, we cannot tell anyone who or what we are speaking about.',
    sections: [
      {
        id: 'sec-common-nouns',
        title: '1. What is a Common Noun?',
        content: 'A **common noun** is the general name for an everyday person, place, animal, or thing. It does **not** take a capital letter unless it starts a sentence.',
        bulletPoints: [
          '**People (general jobs & family):** boy, teacher, pilot, farmer, sister (for example: *The **farmer** tended his flock of sheep*).',
          '**Places (general locations):** park, school, beach, castle, island, valley (for example: *The ancient **castle** stood quietly on the rocky cliff*).',
          '**Animals (creatures & wildlife):** badger, stag, hedgehog, otter, eagle, sheep (for example: *A cautious **badger** snuffled through the damp woods*).',
          '**Things (everyday objects):** pencil, biscuit, boat, bicycle, teapot, lantern (for example: *She poured hot tea into a ceramic **cup** while eating a butter **biscuit***).'
        ],
        examples: [
          {
            id: 'ex-l1-n1',
            sentence: 'The shaggy brown **pony** grazed beside the clear mountain **stream**.',
            highlightWords: ['pony', 'stream'],
            explanation: '**Pony** (an animal) and **stream** (a landscape feature) are general everyday things, so they are common nouns.',
            contextNote: 'Dartmoor National Park nature'
          },
          {
            id: 'ex-l1-n2',
            sentence: 'The friendly **ferryman** steered the small wooden **boat** across the misty **harbour**.',
            highlightWords: ['ferryman', 'boat', 'harbour'],
            explanation: '**Ferryman** (a person), **boat** (an object), and **harbour** (a place) are common nouns written in lowercase.',
            contextNote: 'Cornish coastal harbour'
          },
          {
            id: 'ex-l1-n3',
            sentence: 'A red **kite** circled high above the craggy **valley**.',
            highlightWords: ['kite', 'valley'],
            explanation: '**Kite** names the bird and **valley** names the landscape; both are common nouns.',
            contextNote: 'Welsh valley wildlife'
          }
        ],
        ruleSummary: 'Common nouns name general things and use lowercase letters.'
      },
      {
        id: 'sec-proper-nouns',
        title: '2. What is a Proper Noun?',
        content: 'A **proper noun** is a specific, official name for a particular person, place, day, month, festival, or landmark. A proper noun **always begins with a capital letter**.',
        bulletPoints: [
          '**Names of specific people:** Oliver, Isla, William Shakespeare, Dylan Thomas (for example: ***William Shakespeare** wrote famous plays in London*).',
          '**Specific places & landmarks:** London, Cardiff, Belfast, Edinburgh, Giant\'s Causeway, Snowdonia, Tower Bridge (for example: *The view of **Tower Bridge** over the **Thames** is iconic*).',
          '**Days, Months & Celebrations:** Monday, Friday, August, December, St David\'s Day, St Patrick\'s Day (for example: *We celebrate **St Andrew\'s Day** in **November***).',
          '**Countries, Nations & Languages:** England, Scotland, Wales, Northern Ireland, Welsh, British English (for example: *Road signs in **Wales** are written in both **Welsh** and **English***).'
        ],
        examples: [
          {
            id: 'ex-l1-n4',
            sentence: '**Oliver** and **Fiona** visited **Cardiff Castle** on **Saturday**.',
            highlightWords: ['Oliver', 'Fiona', 'Cardiff Castle', 'Saturday'],
            explanation: '**Oliver** and **Fiona** (people), **Cardiff Castle** (historic Welsh landmark), and **Saturday** (day of the week) are all proper nouns requiring initial capital letters.',
            contextNote: 'Cardiff landmark visit'
          },
          {
            id: 'ex-l1-n5',
            sentence: 'In the month of **August**, visitors from across the globe gather for the **Edinburgh International Festival**.',
            highlightWords: ['August', 'Edinburgh International Festival'],
            explanation: '**August** (calendar month) and **Edinburgh International Festival** (official cultural event title) are proper nouns.',
            contextNote: 'UK cultural festival'
          },
          {
            id: 'ex-l1-n6',
            sentence: 'Geologists explored the hexagonal basalt columns of **Giant\'s Causeway** in **Northern Ireland**.',
            highlightWords: ['Giant\'s Causeway', 'Northern Ireland'],
            explanation: '**Giant\'s Causeway** is a specific geological landmark and **Northern Ireland** is a nation.',
            contextNote: 'Northern Ireland landmark'
          }
        ],
        ruleSummary: 'Proper nouns are unique names and ALWAYS start with a capital letter.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l1-n1',
        title: 'The "The" Test for Nouns',
        trick: 'If you can place the word **the** or **a** in front of a word and it makes complete sense, it is usually a noun (for example: *the biscuit*, *a hedgehog*, *the teapot*).',
        mnemonic: 'Can I put "A" or "The" in front? If YES, it is a Noun!',
        commonMistake: 'Writing "london", "cardiff" or "monday" with lowercase letters.',
        correctWay: 'Always write **London**, **Cardiff**, and **Monday** with initial capital letters.',
        explanation: 'Names of days, months, and towns are proper nouns and require a capital letter in British English.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l1-nouns',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which word in this sentence is a common noun?',
        instruction: 'Select the common noun from the options below.',
        options: ['Quickly', 'Castle', 'Under', 'Shiny'],
        correctIndex: 1,
        explanation: '**Castle** is a place/thing, making it a common noun. "Quickly" is an adverb, "Under" is a preposition, and "Shiny" is an adjective.'
      },
      {
        id: 'ex-q2-l1-nouns',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on all the PROPER NOUNS in the sentence below.',
        instruction: 'Click each word that should be classified as a proper noun.',
        sentence: 'Emma and Oliver explored Warwick Castle last July.',
        words: ['Emma', 'and', 'Oliver', 'explored', 'Warwick', 'Castle', 'last', 'July.'],
        targetIndices: [0, 2, 4, 5, 7],
        targetCategoryLabel: 'Proper Noun',
        explanation: '**Emma**, **Oliver**, **Warwick**, **Castle**, and **July** are all proper nouns because they name specific people, a fortress, and a calendar month.'
      },
      {
        id: 'ex-q3-l1-nouns',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Find the word that was written incorrectly without a capital letter.',
        instruction: 'Tap on the mistake in the sentence.',
        sentenceWithMistake: 'We are travelling to london on Friday morning.',
        words: ['We', 'are', 'travelling', 'to', 'london', 'on', 'Friday', 'morning.'],
        errorWordIndex: 4,
        correctedWord: 'London',
        ruleViolated: 'Proper nouns representing cities must start with a capital letter.',
        explanation: '**London** is a city name (proper noun) and must be capitalised as **London**.'
      },
      {
        id: 'ex-q4-l1-nouns',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Build a sentence containing a proper noun and a common noun in the correct order.',
        instruction: 'Tap the words in order to construct the proper sentence.',
        scrambledWords: ['tea.', 'poured', 'Arthur', 'the', 'hot'],
        correctSentence: 'Arthur poured the hot tea.',
        explanation: '**Arthur** is the proper noun subject, followed by the verb "poured" and the common noun "tea".'
      }
    
    ,
      {
        id: 'gen-noun-1',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Identify the noun that should NOT be capitalised in this sentence.',
        instruction: 'Click the word that is incorrectly capitalised.',
        sentenceWithMistake: 'The famous University professor gave a lecture on modern Philosophy.',
        words: ['The', 'famous', 'University', 'professor', 'gave', 'a', 'lecture', 'on', 'modern', 'Philosophy.'],
        errorWordIndex: 2,
        correctedWord: 'university',
        ruleViolated: 'Grammar Rule',
        explanation: 'When used generally, "university" is a common noun. It is only capitalised when referring to a specific institution (e.g., Oxford University).'
      },
      {
        id: 'gen-noun-2',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which sentence demonstrates the correct usage of abstract nouns?',
        instruction: 'Select the sentence where the abstract noun is used properly.',
        options: [
          'She has a great knowledges of history.',
          'His courage in the face of danger was admirable.',
          'We need more informations before making a decision.',
          'The sadnesses he felt was overwhelming.'
        ],
        correctIndex: 1,
        explanation: '"Courage" is an uncountable abstract noun correctly used in the singular. "Knowledge", "information", and "sadness" are uncountable and do not normally take an "s".'
      }
    ,
      {
        id: 'gen2-noun-1',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which word in the following sentence is a PROPER noun?',
        instruction: 'Select the proper noun.',
        options: ['museum', 'London', 'dinosaur', 'exhibition'],
        correctIndex: 1,
        explanation: '"London" is a specific place and must be capitalised, making it a proper noun.'
    }
    ,
      {
        "id": "ex-add-noun-1",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Find the proper noun needing a capital letter.",
        "instruction": "Select the proper noun from the choices below.",
        "options": [
                "visiting",
                "scotland",
                "next",
                "week"
        ],
        "correctIndex": 1,
        "explanation": "✔ scotland: Specific country name requiring capital S (Scotland).\n✖ visiting: Action verb.\n✖ next / week: Time words."
},
      {
        "id": "ex-add-noun-2",
        "type": "word-clicker",
        "difficultyStep": 2,
        "prompt": "Identify the common noun for an object.",
        "instruction": "Click on the word that names an object.",
        "sentence": "The girl put her pencil into her school bag.",
        "words": [
                "The",
                "girl",
                "put",
                "her",
                "pencil",
                "into",
                "her",
                "school",
                "bag."
        ],
        "targetIndices": [
                4
        ],
        "targetCategoryLabel": "common noun (object)",
        "explanation": "✔ pencil: Everyday object noun.\n✖ girl: Noun for person.\n✖ bag: Noun for container."
},
      {
        "id": "ex-add-noun-3",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Which word is a proper noun for a day of the week?",
        "instruction": "Choose the proper noun.",
        "options": [
                "morning",
                "Wednesday",
                "tomorrow",
                "weekend"
        ],
        "correctIndex": 1,
        "explanation": "✔ Wednesday: Specific named day of the week (proper noun).\n✖ morning, tomorrow, weekend: Common time words."
},
      {
        "id": "ex-add-noun-4",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Which word in this sentence is a common noun for a place?",
        "instruction": "Select the common place noun.",
        "options": [
                "ran",
                "park",
                "smoothly",
                "happy"
        ],
        "correctIndex": 1,
        "explanation": "✔ park: Common noun for a place.\n✖ ran: Action verb.\n✖ smoothly: Adverb.\n✖ happy: Adjective."
},
      {
        "id": "ex-add-noun-5",
        "type": "word-clicker",
        "difficultyStep": 2,
        "prompt": "Click on the proper noun that names a month.",
        "instruction": "Click on the month proper noun.",
        "sentence": "Our school holiday begins in July.",
        "words": [
                "Our",
                "school",
                "holiday",
                "begins",
                "in",
                "July."
        ],
        "targetIndices": [
                5
        ],
        "targetCategoryLabel": "month proper noun",
        "explanation": "✔ July: Named month of the year (proper noun needing capital J).\n✖ holiday: Common noun.\n✖ begins: Action verb."
},
      {
        "id": "ex-add-noun-6",
        "type": "error-detective",
        "difficultyStep": 2,
        "prompt": "Find the country name missing a capital letter.",
        "instruction": "Click the word needing a capital letter.",
        "sentenceWithMistake": "They flew to france last summer.",
        "words": [
                "They",
                "flew",
                "to",
                "france",
                "last",
                "summer."
        ],
        "errorWordIndex": 3,
        "correctedWord": "France",
        "ruleViolated": "Names of countries are proper nouns and require a capital letter.",
        "explanation": "✔ France: Proper noun requiring capital F.\n✖ flew: Action verb.\n✖ summer: Season noun."
}
    ]
  },
  {
    id: 'l1-verbs',
    slug: 'verbs-action-being',
    title: 'Verbs: Action Words & State of Being',
    subtitle: 'The engine of the sentence: doing, thinking, feeling, and being.',
    level: 'level-1',
    levelLabel: 'Level 1: Beginner',
    levelStage: 'Key Stage 1',
    ageGroup: 'Ages 5–7',
    category: 'parts-of-speech',
    categoryLabel: 'Parts of Speech',
    iconName: 'Zap',
    estimatedMinutes: 5,
    overview: 'A **verb** is an action word or a word that shows a state of being. Every complete English sentence MUST contain at least one verb. Without a verb, nothing happens!',
    whyItMatters: 'Verbs provide motion, time (tense), and life to writing. Strong verbs make descriptions vivid and exciting.',
    sections: [
      {
        id: 'sec-action-verbs',
        title: '1. Action Verbs (Doing Words)',
        content: 'Action verbs tell us what someone or something is **doing**, **making**, or **performing**.',
        bulletPoints: [
          '**Physical actions (movement & work):** jump, sprint, pedal, paint, bake, climb (for example: *The athletes **sprinted** along the Olympic running track*).',
          '**Sound actions (noises & voices):** whisper, roar, chime, whistle, chant (for example: *Big Ben **chimed** across the foggy London streets*).',
          '**Mental actions (thoughts & feelings):** think, remember, imagine, admire, wonder (for example: *The walker **admired** the dramatic peaks of Snowdonia*).'
        ],
        examples: [
          {
            id: 'ex-l1-v1',
            sentence: 'The red kite **soared** majestically across the valleys of Eryri in Wales.',
            highlightWords: ['soared'],
            explanation: '**Soared** is the physical flying action performed by the red kite.',
            contextNote: 'Welsh valley wildlife'
          },
          {
            id: 'ex-l1-v2',
            sentence: 'Grandmother **baked** warm crusty scones with sweet strawberry jam.',
            highlightWords: ['baked'],
            explanation: '**Baked** is the physical kitchen action Grandmother completed.',
            contextNote: 'British baking'
          },
          {
            id: 'ex-l1-v3',
            sentence: 'A playful river otter **splashed** through the cool waters of Lake Windermere.',
            highlightWords: ['splashed'],
            explanation: '**Splashed** is the vigorous movement action of the otter.',
            contextNote: 'Lake District wildlife'
          }
        ],
        ruleSummary: 'Action verbs show what the subject does or feels.'
      },
      {
        id: 'sec-verbs-to-be',
        title: '2. Helping & State of Being Verbs ("To Be")',
        content: 'Not all verbs are energetic actions! Some verbs simply tell us that something **exists** or describe a state of being. The most common state of being verbs are forms of **to be**: *is, am, are, was, were*. Other linking verbs include *seem, look, feel, become, remain*.',
        bulletPoints: [
          '**Present state (what someone or something is right now):** I *am* happy; The weather *is* rainy; We *are* ready (for example: *London **is** the capital city of the United Kingdom*).',
          '**Past state (what someone or something was in the past):** The castle *was* ancient; The soldiers *were* brave (for example: *Conwy Castle **was** a formidable medieval fortress*).',
          '**Linking role (connecting a subject directly to its description):** These verbs link a subject to an adjective or descriptive noun (for example: *Tower Bridge **remains** magnificent*; *The Lake District fells **look** breathtaking in summer*; *The waters of Strangford Lough **seemed** peaceful*).'
        ],
        examples: [
          {
            id: 'ex-l1-v4',
            sentence: 'London **is** the historic capital city of the United Kingdom.',
            highlightWords: ['is'],
            explanation: '**Is** is a state-of-being verb connecting London to its official description.',
            contextNote: 'UK geography'
          },
          {
            id: 'ex-l1-v5',
            sentence: 'The mountaineers **were** triumphant when they reached the rocky summit of Snowdon.',
            highlightWords: ['were'],
            explanation: '**Were** shows the past state of being and feeling of the mountaineers.',
            contextNote: 'Welsh mountain trek'
          },
          {
            id: 'ex-l1-v6',
            sentence: 'The ancient stone towers of Bamburgh Castle **looked** dramatic against the North Sea waves.',
            highlightWords: ['looked'],
            explanation: '**Looked** is a linking verb connecting the castle towers to their description (*dramatic*).',
            contextNote: 'Northumberland coastal castle'
          }
        ],
        ruleSummary: 'State-of-being and linking verbs (is, are, was, were, seems, remains) link subjects to their descriptions.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l1-v1',
        title: 'The "Can you DO it?" Test',
        trick: 'To find an action verb, ask yourself: *"Can a person or animal DO this?"* (for example: Can you swim? Yes! Can you table? No!). For being verbs, test if you can replace the word with *is* or *was*.',
        mnemonic: 'Verbs are words of DOING, THINKING, or BEING!',
        commonMistake: 'Confusing nouns with verbs in words that can be both (for example: *a run* versus *to run*).',
        correctWay: 'Look at the job the word is doing in that exact sentence.',
        explanation: 'In *"I enjoyed the run"*, run is a noun. In *"I run across the heather hills"*, run is an action verb.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l1-verbs',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which word in this list is an action verb?',
        instruction: 'Pick the doing word.',
        options: ['Teapot', 'Gallop', 'Yellow', 'Careful'],
        correctIndex: 1,
        explanation: '**Gallop** is an action that a pony or horse can perform, so it is an action verb.'
      },
      {
        id: 'ex-q2-l1-verbs',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the two VERBS in the sentence below.',
        instruction: 'Identify both the action verb and the state verb.',
        sentence: 'The red deer bounded across the meadow and was very swift.',
        words: ['The', 'red', 'deer', 'bounded', 'across', 'the', 'meadow', 'and', 'was', 'very', 'swift.'],
        targetIndices: [3, 8],
        targetCategoryLabel: 'Verb',
        explanation: '**Bounded** is an action verb showing how the deer moved, and **was** is a state-of-being verb.'
      },
      {
        id: 'ex-q3-l1-verbs',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Build a sentence with an exciting action verb.',
        instruction: 'Order the words to create the sentence.',
        scrambledWords: ['river.', 'across', 'swam', 'fox', 'The', 'the'],
        correctSentence: 'The fox swam across the river.',
        explanation: 'Sentence order: Subject (The fox) + Action Verb (swam) + Prepositional phrase (across the river).'
      }
    
    ,
      {
        id: 'gen-verb-1',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Select the two auxiliary (helping) verbs in this sentence.',
        instruction: 'Click the helping verbs.',
        sentence: 'The committee has been working tirelessly on the new public health initiative.',
        words: ['The', 'committee', 'has', 'been', 'working', 'tirelessly', 'on', 'the', 'new', 'public', 'health', 'initiative.'],
        targetIndices: [2, 3],
        targetCategoryLabel: 'Auxiliary Verb',
        explanation: '"has" and "been" are auxiliary verbs that help form the present perfect continuous tense with the main action verb "working".'
      },
      {
        id: 'gen-verb-2',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which of these sentences features a stative verb (a verb that describes a state of being, not an action)?',
        instruction: 'Pick the sentence containing a stative verb.',
        options: [
          'The chef is tasting the soup to see if it needs salt.',
          'I am thinking about going to the cinema tonight.',
          'She completely understands the complex mathematical theory.',
          'They are having a great time at the festival.'
        ],
        correctIndex: 2,
        explanation: '"understands" is a stative verb representing a mental state. "tasting", "thinking" (as an active process), and "having" (experiencing) are used as action verbs here.'
      }
    ,
      {
        id: 'gen2-verb-1',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Tap on the action verb in this sentence.',
        instruction: 'Find the doing word.',
        sentence: 'The fierce wind rattled the old wooden windows.',
        words: ['The', 'fierce', 'wind', 'rattled', 'the', 'old', 'wooden', 'windows.'],
        targetIndices: [3],
        targetCategoryLabel: 'Action Verb',
        explanation: '"rattled" describes the action that the wind performed.'
    }
    ,
      {
        "id": "ex-add-verb-1",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Which word is an action verb showing speech?",
        "instruction": "Pick the action verb.",
        "options": [
                "whisper",
                "whisperer",
                "whispery",
                "whispering-cat"
        ],
        "correctIndex": 0,
        "explanation": "✔ whisper: Action verb showing spoken action.\n✖ whisperer: Noun.\n✖ whispery: Adjective."
},
      {
        "id": "ex-add-verb-2",
        "type": "word-clicker",
        "difficultyStep": 2,
        "prompt": "Identify the state of being verb.",
        "instruction": "Click on the state of being verb.",
        "sentence": "The playful puppies were excited to see us.",
        "words": [
                "The",
                "playful",
                "puppies",
                "were",
                "excited",
                "to",
                "see",
                "us."
        ],
        "targetIndices": [
                3
        ],
        "targetCategoryLabel": "state of being verb",
        "explanation": "✔ were: Past tense being verb (form of to be).\n✖ playful: Adjective.\n✖ puppies: Common noun."
},
      {
        "id": "ex-add-verb-3",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Which sentence contains a clear physical action verb?",
        "instruction": "Select the sentence with an action verb.",
        "options": [
                "The eagle soared through the sky.",
                "The eagle is very big.",
                "The blue sky above.",
                "An eagle in the tree."
        ],
        "correctIndex": 0,
        "explanation": "✔ The eagle soared through the sky.: soared is a physical action verb.\n✖ is: being verb.\n✖ Others: incomplete phrases."
},
      {
        "id": "ex-add-verb-4",
        "type": "error-detective",
        "difficultyStep": 2,
        "prompt": "Find the word that should be an action verb instead of a noun.",
        "instruction": "Click on the incorrect noun word.",
        "sentenceWithMistake": "The children laughter in the garden.",
        "words": [
                "The",
                "children",
                "laughter",
                "in",
                "the",
                "garden."
        ],
        "errorWordIndex": 2,
        "correctedWord": "laughed",
        "ruleViolated": "A sentence requires an action verb (laughed) rather than a noun (laughter).",
        "explanation": "✔ laughed: Action verb showing what children did.\n✖ laughter: Noun."
},
      {
        "id": "ex-add-verb-5",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Which word is an action verb in: \"The horse jumped over the fence.\"",
        "instruction": "Select the action verb.",
        "options": [
                "horse",
                "jumped",
                "over",
                "fence"
        ],
        "correctIndex": 1,
        "explanation": "✔ jumped: Action verb executed by the horse.\n✖ horse & fence: Common nouns.\n✖ over: Preposition."
},
      {
        "id": "ex-add-verb-6",
        "type": "word-clicker",
        "difficultyStep": 2,
        "prompt": "Click on the action verb in this sentence.",
        "instruction": "Click on the doing word.",
        "sentence": "She painted a lovely picture of the sea.",
        "words": [
                "She",
                "painted",
                "a",
                "lovely",
                "picture",
                "of",
                "the",
                "sea."
        ],
        "targetIndices": [
                1
        ],
        "targetCategoryLabel": "action verb",
        "explanation": "✔ painted: Action verb.\n✖ lovely: Adjective.\n✖ picture / sea: Common nouns."
},
      {
        "id": "ex-add-verb-7",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Which word completes the sentence with a state of being verb?",
        "instruction": "Select the state of being verb.",
        "options": [
                "is",
                "bark",
                "run",
                "fuzzy"
        ],
        "correctIndex": 0,
        "explanation": "✔ is: State of being verb connecting subject and descriptor.\n✖ bark / run: Action verbs.\n✖ fuzzy: Adjective."
},
      {
        "id": "ex-add-verb-8",
        "type": "sentence-builder",
        "difficultyStep": 2,
        "prompt": "Unscramble these words to form a simple sentence with an action verb.",
        "instruction": "Arrange the words correctly.",
        "scrambledWords": [
                "swam",
                "The",
                "duck",
                "across",
                "lake.",
                "the"
        ],
        "correctSentence": "The duck swam across the lake.",
        "explanation": "✔ The duck swam across the lake.: \"swam\" is the action verb performed by the subject \"The duck\"."
}
    ]
  },
  {
    id: 'l1-adjectives',
    slug: 'adjectives-describing-words',
    title: 'Adjectives: Describing Words',
    subtitle: 'Bringing colour, size, texture, and detail to nouns.',
    level: 'level-1',
    levelLabel: 'Level 1: Beginner',
    levelStage: 'Key Stage 1',
    ageGroup: 'Ages 5–7',
    category: 'parts-of-speech',
    categoryLabel: 'Parts of Speech',
    iconName: 'Palette',
    estimatedMinutes: 5,
    overview: 'An **adjective** is a word that describes, qualifies, or gives more information about a noun or pronoun. Adjectives tell us **what kind**, **which one**, or **how many**.',
    whyItMatters: 'Adjectives paint vivid pictures in the reader\'s mind. Instead of just "a castle", we can write "a towering, storm-battered coastal fortress".',
    sections: [
      {
        id: 'sec-types-adjectives',
        title: '1. What do Adjectives Describe?',
        content: 'Adjectives can describe many different qualities of a noun:',
        bulletPoints: [
          '**Colours & Appearance:** crimson, emerald, golden, sparkling, gloomy, purple (for example: *The **purple** heather carpeted the **windy** Yorkshire moors*).',
          '**Size & Shape:** colossal, miniature, circular, narrow, towering, rugged (for example: *A **towering** granite cliff protects the harbour from **howling** gales*).',
          '**Feelings & Personality:** cheerful, courageous, gentle, proud, fierce (for example: *The **courageous** lifeboat crew launched into the stormy sea*).',
          '**Touch, Taste & Sound:** crunchy, scorching, deafening, silky, buttery (for example: *We enjoyed **warm**, **buttery** scones alongside hot tea*).'
        ],
        examples: [
          {
            id: 'ex-l1-adj1',
            sentence: 'The **ancient**, **stone** lighthouse overlooked the **deep**, **sparkling** bay.',
            highlightWords: ['ancient', 'stone', 'deep', 'sparkling'],
            explanation: '**Ancient** (age) and **stone** (material) describe the lighthouse. **Deep** and **sparkling** describe the bay.',
            contextNote: 'Cornish coastal landscape'
          },
          {
            id: 'ex-l1-adj2',
            sentence: 'Fiona wore a **cosy**, **woollen** scarf on the **frosty** winter morning in York.',
            highlightWords: ['cosy', 'woollen', 'frosty'],
            explanation: '**Cosy** and **woollen** describe the scarf, while **frosty** describes the morning.',
            contextNote: 'Northern winter morning'
          },
          {
            id: 'ex-l1-adj3',
            sentence: 'The **wild**, **rugged** peaks of the Lake District appeared **dramatic** under dark storm clouds.',
            highlightWords: ['wild', 'rugged', 'dramatic'],
            explanation: '**Wild** and **rugged** sit before the noun *peaks*, while **dramatic** follows the linking verb *appeared*.',
            contextNote: 'Cumbrian mountain scenery'
          }
        ],
        ruleSummary: 'Adjectives usually sit directly before the noun they describe or after a linking verb.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l1-adj1',
        title: 'The Sense Check for Adjectives',
        trick: 'Ask your five senses: What does it look, sound, smell, taste, or feel like? (for example: *the roaring waterfall*, *the sweet wildflower honey*).',
        mnemonic: 'Adjectives ADD colour and detail to Nouns!',
        commonMistake: 'Using too many adjectives in a row without commas (for example: *the big brown fluffy friendly dog*).',
        correctWay: 'Pick one or two powerful adjectives and separate them with a comma (for example: *the scruffy, energetic terrier*).',
        explanation: 'In British primary school, this creates an **expanded noun phrase**.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l1-adj',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which word is an adjective describing size?',
        instruction: 'Select the size adjective.',
        options: ['Quickly', 'Enormous', 'Elephant', 'Stomp'],
        correctIndex: 1,
        explanation: '**Enormous** describes large size, making it an adjective.'
      },
      {
        id: 'ex-q2-l1-adj',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on all the ADJECTIVES in this sentence.',
        instruction: 'Click the describing words.',
        sentence: 'The curious seal swam through the crystal waters near the rocky coastal cove.',
        words: ['The', 'curious', 'seal', 'swam', 'through', 'the', 'crystal', 'waters', 'near', 'the', 'rocky', 'coastal', 'cove.'],
        targetIndices: [1, 6, 10, 11],
        targetCategoryLabel: 'Adjective',
        explanation: '**Curious** describes the seal, **crystal** describes the waters, **rocky** and **coastal** describe the cove.'
      }
    
    ,
      {
        id: 'gen-adj-1',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Identify the sentence with the correct order of adjectives.',
        instruction: 'Choose the grammatically correct option.',
        options: [
          'He bought a red beautiful Italian sports car.',
          'He bought a beautiful red Italian sports car.',
          'He bought an Italian beautiful red sports car.',
          'He bought a sports red beautiful Italian car.'
        ],
        correctIndex: 1,
        explanation: 'The standard order of adjectives in English is: Opinion (beautiful), Colour (red), Origin (Italian), Purpose (sports).'
      }
    ,
      {
        id: 'gen2-adj-1',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Find the adjective that is in the wrong position.',
        instruction: 'Click the incorrectly placed describing word.',
        sentenceWithMistake: 'She drove a car blue down the winding country lane.',
        words: ['She', 'drove', 'a', 'car', 'blue', 'down', 'the', 'winding', 'country', 'lane.'],
        errorWordIndex: 4,
        correctedWord: 'blue car',
        ruleViolated: 'Grammar Rule',
        explanation: 'In English, adjectives typically come BEFORE the noun they describe (a blue car).'
    }
    ,
      {
        "id": "ex-add-adj-1",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Which word is an adjective describing texture?",
        "instruction": "Select the texture adjective.",
        "options": [
                "rough",
                "roughly",
                "roughness",
                "roughing"
        ],
        "correctIndex": 0,
        "explanation": "✔ rough: Adjective describing touch/texture.\n✖ roughly: Adverb.\n✖ roughness: Noun."
},
      {
        "id": "ex-add-adj-2",
        "type": "word-clicker",
        "difficultyStep": 2,
        "prompt": "Find the size adjective.",
        "instruction": "Click on the size adjective.",
        "sentence": "A tiny mouse nibbled the yellow cheese.",
        "words": [
                "A",
                "tiny",
                "mouse",
                "nibbled",
                "the",
                "yellow",
                "cheese."
        ],
        "targetIndices": [
                1
        ],
        "targetCategoryLabel": "size adjective",
        "explanation": "✔ tiny: Size adjective describing mouse.\n✖ mouse / cheese: Nouns.\n✖ yellow: Color adjective."
},
      {
        "id": "ex-add-adj-3",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Which pair contains TWO adjectives?",
        "instruction": "Choose the pair of adjectives.",
        "options": [
                "cold and windy",
                "cold and wind",
                "freeze and wind",
                "chilly and blew"
        ],
        "correctIndex": 0,
        "explanation": "✔ cold and windy: Both words describe weather conditions.\n✖ wind: Noun.\n✖ freeze / blew: Action verbs."
},
      {
        "id": "ex-add-adj-4",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Select the taste adjective for a fresh lemon.",
        "instruction": "Pick the taste adjective.",
        "options": [
                "sour",
                "salty",
                "furry",
                "quiet"
        ],
        "correctIndex": 0,
        "explanation": "✔ sour: Taste adjective describing lemons.\n✖ furry: Texture adjective.\n✖ quiet: Sound adjective."
},
      {
        "id": "ex-add-adj-5",
        "type": "word-clicker",
        "difficultyStep": 2,
        "prompt": "Find the temperature adjective.",
        "instruction": "Click on the temperature adjective.",
        "sentence": "He drank a cup of steaming hot cocoa.",
        "words": [
                "He",
                "drank",
                "a",
                "cup",
                "of",
                "steaming",
                "hot",
                "cocoa."
        ],
        "targetIndices": [
                6
        ],
        "targetCategoryLabel": "temperature adjective",
        "explanation": "✔ hot: Temperature adjective describing cocoa.\n✖ drank: Action verb.\n✖ cocoa: Noun."
},
      {
        "id": "ex-add-adj-6",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Find the quality adjective describing the detective.",
        "instruction": "Select the adjective.",
        "options": [
                "clever",
                "detective",
                "solved",
                "puzzle"
        ],
        "correctIndex": 0,
        "explanation": "✔ clever: Quality adjective describing detective.\n✖ detective & puzzle: Common nouns.\n✖ solved: Action verb."
},
      {
        "id": "ex-add-adj-7",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Which word is an adjective describing sound?",
        "instruction": "Select the sound adjective.",
        "options": [
                "noisy",
                "loudly",
                "noise",
                "echo"
        ],
        "correctIndex": 0,
        "explanation": "✔ noisy: Sound adjective (e.g. noisy room).\n✖ loudly: Adverb.\n✖ noise / echo: Common nouns."
},
      {
        "id": "ex-add-adj-8",
        "type": "word-clicker",
        "difficultyStep": 2,
        "prompt": "Click on the adjective describing color.",
        "instruction": "Click on the color adjective.",
        "sentence": "A red balloon drifted into the sky.",
        "words": [
                "A",
                "red",
                "balloon",
                "drifted",
                "into",
                "the",
                "sky."
        ],
        "targetIndices": [
                1
        ],
        "targetCategoryLabel": "color adjective",
        "explanation": "✔ red: Color adjective describing balloon.\n✖ balloon / sky: Common nouns.\n✖ drifted: Action verb."
},
      {
        "id": "ex-add-adj-9",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Which sentence contains an adjective describing shape?",
        "instruction": "Select the sentence with a shape adjective.",
        "options": [
                "The round ball rolled away.",
                "The ball rolled away.",
                "A ball on the grass.",
                "The ball is here."
        ],
        "correctIndex": 0,
        "explanation": "✔ The round ball rolled away.: \"round\" is a shape adjective.\n✖ Other sentences lack shape descriptors."
},
      {
        "id": "ex-add-adj-10",
        "type": "word-clicker",
        "difficultyStep": 2,
        "prompt": "Click on the adjective describing feeling or emotion.",
        "instruction": "Click on the emotion adjective.",
        "sentence": "The happy children cheered loudly.",
        "words": [
                "The",
                "happy",
                "children",
                "cheered",
                "loudly."
        ],
        "targetIndices": [
                1
        ],
        "targetCategoryLabel": "emotion adjective",
        "explanation": "✔ happy: Emotion adjective.\n✖ children: Common noun.\n✖ cheered: Action verb.\n✖ loudly: Adverb."
},
      {
        "id": "ex-add-adj-11",
        "type": "error-detective",
        "difficultyStep": 2,
        "prompt": "Find the incorrect noun used where an adjective belongs.",
        "instruction": "Click on the incorrect noun.",
        "sentenceWithMistake": "She wore a warmth coat outside.",
        "words": [
                "She",
                "wore",
                "a",
                "warmth",
                "coat",
                "outside."
        ],
        "errorWordIndex": 3,
        "correctedWord": "warm",
        "ruleViolated": "An adjective (warm) must describe a noun (coat), not an abstract noun (warmth).",
        "explanation": "✔ warm: Temperature adjective describing coat.\n✖ warmth: Abstract noun."
},
      {
        "id": "ex-add-adj-12",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Which option best completes: \"The ___ lion roared at the crowd.\"",
        "instruction": "Select the most fitting adjective.",
        "options": [
                "fierce",
                "slowly",
                "jumped",
                "whistle"
        ],
        "correctIndex": 0,
        "explanation": "✔ fierce: Quality adjective describing lion.\n✖ slowly: Adverb.\n✖ jumped: Action verb.\n✖ whistle: Noun/Verb."
}
    ]
  },
  {
    id: 'l1-capital-letters-full-stops',
    slug: 'capital-letters-full-stops',
    title: 'Punctuation Basics: Capital Letters & Full Stops',
    subtitle: 'The golden rules of starting and ending every sentence in English.',
    level: 'level-1',
    levelLabel: 'Level 1: Beginner',
    levelStage: 'Key Stage 1',
    ageGroup: 'Ages 5–7',
    category: 'punctuation-mechanics',
    categoryLabel: 'Punctuation & Mechanics',
    iconName: 'Dot',
    estimatedMinutes: 5,
    overview: 'In British English, every sentence must begin with a **capital letter** and conclude with a suitable terminal punctuation mark: usually a **full stop (.)**, a **question mark (?)**, or an **exclamation mark (!)**.',
    whyItMatters: 'Without punctuation, sentences would bleed into one another, making reading confusing and chaotic.',
    sections: [
      {
        id: 'sec-capitals-rules',
        title: '1. When to Use a Capital Letter',
        content: 'Always use a capital letter in these three vital places:',
        bulletPoints: [
          '**Start of a sentence:** **T**he ferry sailed out into the English Channel.',
          '**Proper nouns (names of people, places, days, and months):** **F**iona, **L**ondon, **C**ardiff, **B**elfast, **A**ugust, **T**uesday (for example: *On **M**onday, **C**ameron climbed **S**nowdon*).',
          '**The personal pronoun "I":** When referring to yourself, **I** is ALWAYS capitalised, even in the middle of a sentence (for example: *"Isla and **I** watched the dolphins jump along the coast"*).'
        ],
        examples: [
          {
            id: 'ex-l1-p1',
            sentence: '**M**orag and **I** visited the **B**ritish **M**useum in **L**ondon.',
            highlightWords: ['Morag', 'I', 'British Museum', 'London'],
            explanation: 'Starts the sentence (Morag), personal pronoun (I), museum title (Proper noun), and city (London).',
            contextNote: 'London cultural trip'
          },
          {
            id: 'ex-l1-p2',
            sentence: '**T**he red squirrel gathered hazelnuts beneath the oak trees of the **L**ake **D**istrict.**',
            highlightWords: ['The', 'Lake District', '.'],
            explanation: 'Starts with a capital **T**, capitalises the national park name (**Lake District**), and finishes with a clear **full stop (.)**.',
            contextNote: 'Cumbrian wildlife'
          },
          {
            id: 'ex-l1-p3',
            sentence: '**D**id you spot the puffins nesting on the cliffs of the **F**arne **I**slands**?**',
            highlightWords: ['Did', 'Farne Islands', '?'],
            explanation: 'Starts with a capital letter, capitalises the island name, and finishes with a question mark (?) because it asks a question.',
            contextNote: 'Coastal island enquiry'
          }
        ],
        ruleSummary: 'Every sentence starts with a Capital Letter and ends with a Full Stop (or ? / !).'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l1-p1',
        title: 'The Breath Test for Full Stops',
        trick: 'Read your work out loud. Where your voice naturally drops and takes a full breath, you have finished a complete thought and need a full stop (for example: *The musicians finished their tune. The audience cheered loudly.*).',
        mnemonic: 'Capitals start the journey, Full Stops park the car!',
        commonMistake: 'Writing lowercase "i" for yourself (for example: *me and i went to the shop*).',
        correctWay: 'Always write capital **I** (for example: *Isla and I went to the shop*).',
        explanation: 'In English, the personal pronoun "I" is always written as a single capital letter.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l1-p',
        type: 'error-detective',
        difficultyStep: 1,
        prompt: 'Find the word that is missing a capital letter.',
        instruction: 'Click on the lowercase word that should be capitalised.',
        sentenceWithMistake: 'every morning, the guards march outside Buckingham Palace.',
        words: ['every', 'morning,', 'the', 'guards', 'march', 'outside', 'Buckingham', 'Palace.'],
        errorWordIndex: 0,
        correctedWord: 'Every',
        ruleViolated: 'The first word of a sentence must start with a capital letter.',
        explanation: 'Every new sentence must start with a capital letter: **Every**.'
      },
      {
        id: 'ex-q2-l1-p',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Which of the following sentences is punctuated 100% correctly?',
        instruction: 'Select the correctly punctuated British English sentence.',
        options: [
          'on saturdays i visit York with Jack',
          'On Saturdays, I visit York with Jack.',
          'on Saturdays, i visit york with jack.',
          'On saturdays, I visit York with jack.'
        ],
        correctIndex: 1,
        explanation: '**On Saturdays, I visit York with Jack.** is correct because "On" starts the sentence, "Saturdays", "York", and "Jack" are proper nouns, and "I" is capitalised.'
      }
    
    ,
      {
        id: 'gen-cap-1',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find the word that is missing a capital letter.',
        instruction: 'Click the word that should start with a capital.',
        sentenceWithMistake: 'My friend sarah is moving to London next month.',
        words: ['My', 'friend', 'sarah', 'is', 'moving', 'to', 'London', 'next', 'month.'],
        errorWordIndex: 2,
        correctedWord: 'Sarah',
        ruleViolated: 'Grammar Rule',
        explanation: 'Proper nouns, such as names of people (Sarah), must always start with a capital letter.'
      }
    ,
      {
        id: 'gen2-cap-1',
        type: 'sentence-builder',
        difficultyStep: 2,
        prompt: 'Build a properly punctuated sentence.',
        instruction: 'Arrange the words. Pay attention to capitals and full stops.',
        scrambledWords: ['We', 'went', 'to', 'the', 'park', 'on', 'Sunday.'],
        correctSentence: 'We went to the park on Sunday.',
        explanation: 'The sentence must start with a capital (We), use a capital for the day of the week (Sunday), and end with a full stop.'
    }
    ,
      {
        "id": "ex-add-p-1",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Which word must start with a capital letter?",
        "instruction": "Select the proper noun.",
        "options": [
                "london",
                "city",
                "town",
                "street"
        ],
        "correctIndex": 0,
        "explanation": "✔ london: Proper noun for UK capital city (London).\n✖ city, town, street: Everyday common nouns."
},
      {
        "id": "ex-add-p-2",
        "type": "error-detective",
        "difficultyStep": 2,
        "prompt": "Find the lowercase word at the start of the sentence.",
        "instruction": "Click the word needing a capital letter.",
        "sentenceWithMistake": "owls fly quietly at night.",
        "words": [
                "owls",
                "fly",
                "quietly",
                "at",
                "night."
        ],
        "errorWordIndex": 0,
        "correctedWord": "Owls",
        "ruleViolated": "Every sentence must begin with a capital letter.",
        "explanation": "✔ Owls: First word needs capital O.\n✖ fly, quietly, at, night: Correct lowercase."
},
      {
        "id": "ex-add-p-3",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Which punctuation mark ends a telling statement?",
        "instruction": "Choose the correct mark.",
        "options": [
                "Full stop (.)",
                "Comma (,)",
                "Question mark (?)",
                "Apostrophe (')"
        ],
        "correctIndex": 0,
        "explanation": "✔ Full stop (.): Signals sentence completion.\n✖ Question mark: For asking questions.\n✖ Comma: For lists/pauses."
},
      {
        "id": "ex-add-p-4",
        "type": "error-detective",
        "difficultyStep": 2,
        "prompt": "Find the person name missing a capital letter.",
        "instruction": "Click the name word.",
        "sentenceWithMistake": "My sister emma plays football.",
        "words": [
                "My",
                "sister",
                "emma",
                "plays",
                "football."
        ],
        "errorWordIndex": 2,
        "correctedWord": "Emma",
        "ruleViolated": "Names of people are proper nouns and require a capital letter.",
        "explanation": "✔ Emma: Name requires capital E.\n✖ sister: Common noun."
},
      {
        "id": "ex-add-p-5",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Which sentence has perfect capitalisation and full stop?",
        "instruction": "Select the correct sentence.",
        "options": [
                "Sam visited London on Monday.",
                "sam visited london on monday.",
                "Sam visited london on Monday",
                "sam Visited London On monday."
        ],
        "correctIndex": 0,
        "explanation": "✔ Sam visited London on Monday.: Capital S (name/start), L (city), M (day), full stop at end.\n✖ Others miss proper capitals."
},
      {
        "id": "ex-add-p-6",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Why is the word \"I\" always capitalised?",
        "instruction": "Select the grammar rule.",
        "options": [
                "It is the personal pronoun I",
                "It is an action verb",
                "It is a common noun",
                "It ends a sentence"
        ],
        "correctIndex": 0,
        "explanation": "✔ It is the personal pronoun I: Rule requires personal pronoun I to be capitalised.\n✖ I is not a verb or noun."
},
      {
        "id": "ex-add-p-7",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Which word requires a capital letter because it is a person's name?",
        "instruction": "Select the proper noun.",
        "options": [
                "oliver",
                "boy",
                "friend",
                "student"
        ],
        "correctIndex": 0,
        "explanation": "✔ oliver: Proper noun for a person's name (Oliver).\n✖ boy, friend, student: Common nouns."
},
      {
        "id": "ex-add-p-8",
        "type": "word-clicker",
        "difficultyStep": 2,
        "prompt": "Click on the word that needs a capital letter for a town name.",
        "instruction": "Click on the town proper noun.",
        "sentence": "We traveled to oxford by train.",
        "words": [
                "We",
                "traveled",
                "to",
                "oxford",
                "by",
                "train."
        ],
        "targetIndices": [
                3
        ],
        "targetCategoryLabel": "town proper noun",
        "explanation": "✔ oxford: Proper noun town name (Oxford).\n✖ train: Common noun."
},
      {
        "id": "ex-add-p-9",
        "type": "error-detective",
        "difficultyStep": 2,
        "prompt": "Find the day of the week missing a capital letter.",
        "instruction": "Click the word needing a capital letter.",
        "sentenceWithMistake": "The exam is on friday morning.",
        "words": [
                "The",
                "exam",
                "is",
                "on",
                "friday",
                "morning."
        ],
        "errorWordIndex": 4,
        "correctedWord": "Friday",
        "ruleViolated": "Days of the week are proper nouns and must begin with a capital letter.",
        "explanation": "✔ Friday: Proper noun day requiring capital F.\n✖ exam, morning: Common nouns."
},
      {
        "id": "ex-add-p-10",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Which sentence uses the correct capitalisation for \"I\"?",
        "instruction": "Select the correctly capitalised sentence.",
        "options": [
                "Yesterday I played in the park.",
                "Yesterday i played in the park.",
                "yesterday i Played in the park.",
                "Yesterday I Played In the park."
        ],
        "correctIndex": 0,
        "explanation": "✔ Yesterday I played in the park.: Capital Y (sentence start), Capital I (personal pronoun).\n✖ Others miscapitalize I or other words."
},
      {
        "id": "ex-add-p-11",
        "type": "sentence-builder",
        "difficultyStep": 2,
        "prompt": "Arrange these words into a correctly punctuated sentence.",
        "instruction": "Arrange the words correctly.",
        "scrambledWords": [
                "loves",
                "Isla",
                "apples.",
                "eating"
        ],
        "correctSentence": "Isla loves eating apples.",
        "explanation": "✔ Isla loves eating apples.: Begins with capital I for name/sentence start and ends with full stop."
},
      {
        "id": "ex-add-p-12",
        "type": "multiple-choice",
        "difficultyStep": 2,
        "prompt": "Where should the full stop be placed in this sentence?",
        "instruction": "The sun was shining bright",
        "options": [
                "At the end: \"The sun was shining bright.\"",
                "In the middle: \"The sun. was shining bright\"",
                "At the start: \".The sun was shining bright\"",
                "No full stop is needed."
        ],
        "correctIndex": 0,
        "explanation": "✔ At the end: Full stops mark the conclusion of a sentence.\n✖ Full stops cannot be placed at the start or mid-phrase."
}
    ]
  },
  {
    id: 'l1-simple-sentences',
    slug: 'simple-sentences-subject-verb',
    title: 'Simple Sentences: Subject & Verb',
    subtitle: 'Constructing a complete thought with a who/what and a doing word.',
    level: 'level-1',
    levelLabel: 'Level 1: Beginner',
    levelStage: 'Key Stage 1',
    ageGroup: 'Ages 5–7',
    category: 'sentence-structure',
    categoryLabel: 'Sentence Structure',
    iconName: 'FileText',
    estimatedMinutes: 5,
    overview: 'A **simple sentence** expresses a complete thought. It must contain at least one **subject** (who or what the sentence is about) and one **predicate** with a **finite verb** (what the subject is doing or being).',
    whyItMatters: 'Understanding simple sentences forms the foundation for all complex, expressive writing.',
    sections: [
      {
        id: 'sec-subject-verb',
        title: '1. The Core Halves of a Simple Sentence',
        content: 'Every complete simple sentence has two core components (and often an optional receiver of the action called an object):',
        bulletPoints: [
          '**The Subject (Who or what performs the action):** A person, animal, place, or thing (for example: ***The red kite** banked sharply in the sky*).',
          '**The Verb (Predicate action or state):** The doing or being word (for example: *The Flying Scotsman steam train **rumbled** across the viaduct*).',
          '**The Direct Object (Optional receiver):** The person or thing receiving the action (for example: *Arthur caught **a bouncing football** in the park*).'
        ],
        examples: [
          {
            id: 'ex-l1-s1',
            sentence: '**The Flying Scotsman steam train** **whistled** proudly as it crossed the viaduct.',
            highlightWords: ['The Flying Scotsman steam train', 'whistled'],
            explanation: '**The Flying Scotsman steam train** is the subject performing the action. **Whistled** is the finite verb.',
            contextNote: 'British railway heritage'
          },
          {
            id: 'ex-l1-s2',
            sentence: '**Dylan** **played** a cheerful folk tune on his violin.',
            highlightWords: ['Dylan', 'played'],
            explanation: '**Dylan** is the subject. **Played** is the action verb, and "a cheerful folk tune" is the object.',
            contextNote: 'Musical performance'
          },
          {
            id: 'ex-l1-s3',
            sentence: '**The wild pony** **stood** quietly beside the gorse bushes.',
            highlightWords: ['The wild pony', 'stood'],
            explanation: '**The wild pony** is the subject. **Stood** is the verb expressing position.',
            contextNote: 'National park wildlife'
          }
        ],
        ruleSummary: 'A simple sentence = 1 Subject + 1 Finite Verb expressing one complete thought.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l1-s1',
        title: 'Spotting Sentence Fragments',
        trick: 'If a group of words is missing either a subject or a verb, it is only a **fragment** (for example: *"Running across the open fields"* is a fragment because it does not state WHO is running!).',
        mnemonic: 'Who does what? That makes a sentence!',
        commonMistake: 'Leaving off the verb and writing just a phrase (for example: *"The friendly pony in the stable"*).',
        correctWay: 'Add the verb: *"The friendly pony slept peacefully in the stable."*',
        explanation: 'A complete sentence must stand alone and make complete sense.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l1-s',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which of the following is a COMPLETE simple sentence?',
        instruction: 'Pick the option that has both a subject and a verb.',
        options: [
          'Under the old stone bridge by the river.',
          'The noisy tractor rumbled down the farm lane.',
          'Eating delicious warm apple crumble.',
          'The gentle pony beside the hedge.'
        ],
        correctIndex: 1,
        explanation: '**The noisy tractor rumbled down the farm lane.** has both a clear subject (The noisy tractor) and a finite verb (rumbled).'
      },
      {
        id: 'ex-q2-l1-s',
        type: 'sentence-builder',
        difficultyStep: 2,
        prompt: 'Arrange these words to make a complete simple sentence.',
        instruction: 'Order the words properly.',
        scrambledWords: ['in', 'The', 'owl', 'hooted', 'the', 'night.'],
        correctSentence: 'The owl hooted in the night.',
        explanation: 'Subject: The owl | Verb: hooted | Prepositional phrase: in the night.'
      }
    
    ,
      {
        id: 'gen-sim-1',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Reconstruct the simple sentence correctly.',
        instruction: 'Arrange the scrambled words to form a complete simple sentence.',
        scrambledWords: ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.'],
        correctSentence: 'The quick brown fox jumps over the lazy dog.',
        explanation: 'This famous pangram forms a simple sentence: "The quick brown fox" is the subject, and "jumps over the lazy dog" is the predicate.'
      }
    ,
      {
        id: 'gen2-sim-1',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Identify the SUBJECT of this sentence: "Under the bed slept a tiny kitten."',
        instruction: 'Who or what is performing the action?',
        options: ['Under the bed', 'slept', 'a tiny', 'a tiny kitten'],
        correctIndex: 3,
        explanation: 'Even though it comes at the end, "a tiny kitten" is the subject because the kitten is the one doing the sleeping.'
    }
    ]
  },
  {
  "id": "l1-final-assessment",
  "slug": "level-1-final-assessment",
  "title": "Level 1: Final Assessment (50 Questions)",
  "subtitle": "The ultimate test covering Nouns, Verbs, Adjectives, Capitals & Full Stops, and Simple Sentences.",
  "level": "level-1",
  "levelLabel": "Level 1: Final Test",
  "levelStage": "Key Stage 1",
  "ageGroup": "Ages 5–7",
  "category": "sentence-structure",
  "categoryLabel": "Level 1 Master Exam",
  "iconName": "Award",
  "estimatedMinutes": 20,
  "overview": "Test everything you have learned in Level 1! This final assessment features **50 questions** spanning all 5 foundational topics (10 questions per topic). Answer carefully and read the concise explanations to earn your Level 1 Gold Badge!",
  "whyItMatters": "Mastering foundational grammar gives children the confidence to write clearly, express ideas accurately, and excel in Key Stage 1 SATs assessments.",
  "sections": [
    {
      "id": "sec-l1-fa-overview",
      "title": "Assessment Guidelines & Advice",
      "content": "Work through each question step by step. Every question includes **clear feedback icons** (`✔` for correct and `✖` for incorrect choices) so you can understand why each option is right or wrong.",
      "bulletPoints": [
        "**10 Questions on Nouns:** Common vs Proper Nouns & Capitalization.",
        "**10 Questions on Verbs:** Action Words & State of Being.",
        "**10 Questions on Adjectives:** Describing Size, Touch, Color & Quality.",
        "**10 Questions on Capitals & Full Stops:** Sentence Boundaries & Names.",
        "**10 Questions on Simple Sentences:** Identifying Subjects & Verbs."
      ],
      "examples": [
        {
          "id": "ex-l1-fa-sample",
          "sentence": "The **smart fox** **jumped** over the wall.",
          "explanation": "✔ **smart** (adjective), **fox** (noun), **jumped** (verb). Understanding word roles is the key to passing this test!",
          "contextNote": "KS1 Final Assessment Sample"
        }
      ],
      "ruleSummary": "Read each sentence slowly, pick the best answer, and review the feedback icons."
    }
  ],
  "tipsAndTricks": [
    {
      "id": "tip-l1-fa-1",
      "title": "Final Exam Tip: The Spotting Method",
      "trick": "Ask yourself: Is this naming something (noun), doing something (verb), describing something (adjective), or punctuation?",
      "mnemonic": "Noun = Name, Verb = Do, Adjective = Describe!",
      "commonMistake": "Rushing through without checking capital letters on proper nouns.",
      "correctWay": "Double check proper nouns like London, Isla, and Monday for initial capital letters.",
      "explanation": "Taking time to check punctuation and capital letters prevents easy mistakes."
    }
  ],
  "exercises": [
    {
      "id": "fa-q1",
      "type": "multiple-choice",
      "difficultyStep": 1,
      "prompt": "Topic 1: Nouns • Question 1 of 10",
      "instruction": "Which word is a common noun in this sentence: \"The red bus drove into town.\"",
      "options": [
        "red",
        "bus",
        "drove",
        "into"
      ],
      "correctIndex": 1,
      "explanation": "✔ bus: General name for a vehicle (common noun).\n✖ red: Adjective describing bus. ✖ drove: Action verb. ✖ into: Preposition."
    },
    {
      "id": "fa-q2",
      "type": "multiple-choice",
      "difficultyStep": 1,
      "prompt": "Topic 1: Nouns • Question 2 of 10",
      "instruction": "Which word is a proper noun that always needs a capital letter?",
      "options": [
        "park",
        "castle",
        "london",
        "garden"
      ],
      "correctIndex": 2,
      "explanation": "✔ london: Specific name of the UK capital city (proper noun).\n✖ park, castle, garden: General names for places (common nouns)."
    },
    {
      "id": "fa-q3",
      "type": "multiple-choice",
      "difficultyStep": 1,
      "prompt": "Topic 1: Nouns • Question 3 of 10",
      "instruction": "Find the proper noun in: \"Isla loves reading books on Sunday.\"",
      "options": [
        "books",
        "loves",
        "Sunday",
        "reading"
      ],
      "correctIndex": 2,
      "explanation": "✔ Sunday: Specific name of a day of the week (proper noun).\n✖ books: Common noun. ✖ loves, reading: Action verbs."
    },
    {
      "id": "fa-q4",
      "type": "multiple-choice",
      "difficultyStep": 1,
      "prompt": "Topic 1: Nouns • Question 4 of 10",
      "instruction": "Which word is an everyday common noun for a person?",
      "options": [
        "Oliver",
        "teacher",
        "England",
        "Monday"
      ],
      "correctIndex": 1,
      "explanation": "✔ teacher: General job title (common noun).\n✖ Oliver, England, Monday: Specific names requiring capitals (proper nouns)."
    },
    {
      "id": "fa-q5",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 1: Nouns • Question 5 of 10",
      "instruction": "Which of these words is NOT a noun?",
      "options": [
        "apple",
        "doctor",
        "swiftly",
        "island"
      ],
      "correctIndex": 2,
      "explanation": "✔ swiftly: Adverb describing how an action is done.\n✖ apple (thing), doctor (person), island (place): All valid nouns."
    },
    {
      "id": "fa-q6",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 1: Nouns • Question 6 of 10",
      "instruction": "Identify the common noun for an animal in: \"A fluffy rabbit hopped across the lawn.\"",
      "options": [
        "fluffy",
        "rabbit",
        "hopped",
        "across"
      ],
      "correctIndex": 1,
      "explanation": "✔ rabbit: General name for an animal (common noun).\n✖ fluffy: Adjective. ✖ hopped: Action verb. ✖ across: Preposition."
    },
    {
      "id": "fa-q7",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 1: Nouns • Question 7 of 10",
      "instruction": "Why does \"Cardiff\" require a capital letter?",
      "options": [
        "It is an action word",
        "It is a proper noun for a city",
        "It describes a color",
        "It ends a sentence"
      ],
      "correctIndex": 1,
      "explanation": "✔ It is a proper noun for a city: Official names of cities always start with capital letters.\n✖ Other choices describe verbs or adjectives."
    },
    {
      "id": "fa-q8",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 1: Nouns • Question 8 of 10",
      "instruction": "Which sentence contains TWO proper nouns?",
      "options": [
        "Leo lives in Manchester.",
        "The boy likes his dog.",
        "A cat sat on the mat.",
        "She ate a sweet apple."
      ],
      "correctIndex": 0,
      "explanation": "✔ Leo lives in Manchester.: Leo (person) & Manchester (city) are both proper nouns.\n✖ The other sentences contain only common nouns."
    },
    {
      "id": "fa-q9",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 1: Nouns • Question 9 of 10",
      "instruction": "Which word passes the noun test when you place \"The\" in front?",
      "options": [
        "sing",
        "teapot",
        "brightly",
        "under"
      ],
      "correctIndex": 1,
      "explanation": "✔ teapot: \"The teapot\" makes complete sense (noun).\n✖ \"The sing\", \"The brightly\", \"The under\" make no sense."
    },
    {
      "id": "fa-q10",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 1: Nouns • Question 10 of 10",
      "instruction": "Find the common noun for a place in: \"The children ran toward the beach.\"",
      "options": [
        "children",
        "ran",
        "beach",
        "toward"
      ],
      "correctIndex": 2,
      "explanation": "✔ beach: Common noun for a place.\n✖ children: Noun for people. ✖ ran: Verb. ✖ toward: Preposition."
    },
    {
      "id": "fa-q11",
      "type": "multiple-choice",
      "difficultyStep": 1,
      "prompt": "Topic 2: Verbs • Question 1 of 10",
      "instruction": "Which word is an action verb in: \"The robin sang a sweet song.\"",
      "options": [
        "robin",
        "sang",
        "sweet",
        "song"
      ],
      "correctIndex": 1,
      "explanation": "✔ sang: Action verb showing what the robin did.\n✖ robin (noun), sweet (adjective), song (noun)."
    },
    {
      "id": "fa-q12",
      "type": "multiple-choice",
      "difficultyStep": 1,
      "prompt": "Topic 2: Verbs • Question 2 of 10",
      "instruction": "Find the verb showing state of being: \"The kitten is very sleepy.\"",
      "options": [
        "kitten",
        "is",
        "very",
        "sleepy"
      ],
      "correctIndex": 1,
      "explanation": "✔ is: State of being verb (a form of \"to be\").\n✖ kitten (noun), sleepy (adjective), very (adverb)."
    },
    {
      "id": "fa-q13",
      "type": "multiple-choice",
      "difficultyStep": 1,
      "prompt": "Topic 2: Verbs • Question 3 of 10",
      "instruction": "Which word is NOT an action verb?",
      "options": [
        "jump",
        "splash",
        "green",
        "gallop"
      ],
      "correctIndex": 2,
      "explanation": "✔ green: Color adjective describing a noun.\n✖ jump, splash, gallop: Physical action verbs."
    },
    {
      "id": "fa-q14",
      "type": "multiple-choice",
      "difficultyStep": 1,
      "prompt": "Topic 2: Verbs • Question 4 of 10",
      "instruction": "Choose the correct verb to complete: \"The children ___ games in the park.\"",
      "options": [
        "played",
        "yellow",
        "quietly",
        "biscuit"
      ],
      "correctIndex": 0,
      "explanation": "✔ played: Action verb completing the sentence.\n✖ yellow (adjective), quietly (adverb), biscuit (noun)."
    },
    {
      "id": "fa-q15",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 2: Verbs • Question 5 of 10",
      "instruction": "What is the action verb in: \"The train arrived at the station.\"",
      "options": [
        "train",
        "arrived",
        "at",
        "station"
      ],
      "correctIndex": 1,
      "explanation": "✔ arrived: Action verb telling what the train did.\n✖ train & station (nouns), at (preposition)."
    },
    {
      "id": "fa-q16",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 2: Verbs • Question 6 of 10",
      "instruction": "Which being verb completes: \"We ___ happy to help.\"",
      "options": [
        "are",
        "run",
        "cloud",
        "swift"
      ],
      "correctIndex": 0,
      "explanation": "✔ are: Being/linking verb connecting \"We\" with \"happy\".\n✖ run (action), cloud (noun), swift (adjective)."
    },
    {
      "id": "fa-q17",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 2: Verbs • Question 7 of 10",
      "instruction": "Identify the verb in: \"The baker kneads the bread dough.\"",
      "options": [
        "baker",
        "kneads",
        "bread",
        "dough"
      ],
      "correctIndex": 1,
      "explanation": "✔ kneads: Action verb showing the baker's action.\n✖ baker, bread, dough: All nouns."
    },
    {
      "id": "fa-q18",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 2: Verbs • Question 8 of 10",
      "instruction": "Which word is a verb showing mental activity?",
      "options": [
        "think",
        "table",
        "purple",
        "window"
      ],
      "correctIndex": 0,
      "explanation": "✔ think: Mental state verb.\n✖ table & window (nouns), purple (adjective)."
    },
    {
      "id": "fa-q19",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 2: Verbs • Question 9 of 10",
      "instruction": "Find the action verb in: \"Water trickles down the stream.\"",
      "options": [
        "water",
        "trickles",
        "down",
        "stream"
      ],
      "correctIndex": 1,
      "explanation": "✔ trickles: Action verb for flowing water.\n✖ water & stream (nouns), down (preposition)."
    },
    {
      "id": "fa-q20",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 2: Verbs • Question 10 of 10",
      "instruction": "Which word acts as the verb in \"Stars shine in the night sky.\"",
      "options": [
        "stars",
        "shine",
        "night",
        "sky"
      ],
      "correctIndex": 1,
      "explanation": "✔ shine: Verb describing what stars do.\n✖ stars, night, sky: Nouns."
    },
    {
      "id": "fa-q21",
      "type": "multiple-choice",
      "difficultyStep": 1,
      "prompt": "Topic 3: Adjectives • Question 1 of 10",
      "instruction": "Which word is an adjective in: \"The sleepy puppy curled up.\"",
      "options": [
        "sleepy",
        "puppy",
        "curled",
        "up"
      ],
      "correctIndex": 0,
      "explanation": "✔ sleepy: Adjective describing the puppy.\n✖ puppy (noun), curled (verb), up (preposition)."
    },
    {
      "id": "fa-q22",
      "type": "multiple-choice",
      "difficultyStep": 1,
      "prompt": "Topic 3: Adjectives • Question 2 of 10",
      "instruction": "Find the adjective describing size in: \"A giant oak tree grew here.\"",
      "options": [
        "giant",
        "oak",
        "tree",
        "grew"
      ],
      "correctIndex": 0,
      "explanation": "✔ giant: Size adjective describing the tree.\n✖ oak (noun modifier), tree (noun), grew (verb)."
    },
    {
      "id": "fa-q23",
      "type": "multiple-choice",
      "difficultyStep": 1,
      "prompt": "Topic 3: Adjectives • Question 3 of 10",
      "instruction": "Which word is an adjective for texture: \"The soft cushion sat on the chair.\"",
      "options": [
        "soft",
        "cushion",
        "sat",
        "chair"
      ],
      "correctIndex": 0,
      "explanation": "✔ soft: Texture adjective describing cushion.\n✖ cushion & chair (nouns), sat (verb)."
    },
    {
      "id": "fa-q24",
      "type": "multiple-choice",
      "difficultyStep": 1,
      "prompt": "Topic 3: Adjectives • Question 4 of 10",
      "instruction": "Which word is NOT an adjective?",
      "options": [
        "bright",
        "crunchy",
        "jump",
        "warm"
      ],
      "correctIndex": 2,
      "explanation": "✔ jump: Action verb.\n✖ bright, crunchy, warm: Describing adjectives."
    },
    {
      "id": "fa-q25",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 3: Adjectives • Question 5 of 10",
      "instruction": "Find the color adjective in: \"She wore a bright yellow coat.\"",
      "options": [
        "she",
        "wore",
        "yellow",
        "coat"
      ],
      "correctIndex": 2,
      "explanation": "✔ yellow: Color adjective describing coat.\n✖ she (pronoun), wore (verb), coat (noun)."
    },
    {
      "id": "fa-q26",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 3: Adjectives • Question 6 of 10",
      "instruction": "Which adjective describes taste?",
      "options": [
        "sweet",
        "tall",
        "loud",
        "heavy"
      ],
      "correctIndex": 0,
      "explanation": "✔ sweet: Taste adjective (e.g., sweet apple).\n✖ tall (height), loud (sound), heavy (weight)."
    },
    {
      "id": "fa-q27",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 3: Adjectives • Question 7 of 10",
      "instruction": "How many adjectives are in: \"Two clever foxes crossed the field.\"",
      "options": [
        "One",
        "Two",
        "Three",
        "None"
      ],
      "correctIndex": 1,
      "explanation": "✔ Two: \"Two\" (number) & \"clever\" (quality) both describe foxes.\n✖ Other options are incorrect counts."
    },
    {
      "id": "fa-q28",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 3: Adjectives • Question 8 of 10",
      "instruction": "Choose the best adjective: \"The ___ tea burned my tongue.\"",
      "options": [
        "hot",
        "walked",
        "pencil",
        "slowly"
      ],
      "correctIndex": 0,
      "explanation": "✔ hot: Temperature adjective describing tea.\n✖ walked (verb), pencil (noun), slowly (adverb)."
    },
    {
      "id": "fa-q29",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 3: Adjectives • Question 9 of 10",
      "instruction": "What does the adjective \"ancient\" mean in \"an ancient castle\"?",
      "options": [
        "Very old",
        "Very noisy",
        "Very small",
        "Very fast"
      ],
      "correctIndex": 0,
      "explanation": "✔ Very old: \"Ancient\" describes something from long ago.\n✖ Other choices give wrong meanings."
    },
    {
      "id": "fa-q30",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 3: Adjectives • Question 10 of 10",
      "instruction": "Find the adjective in: \"The dragon let out a fierce roar.\"",
      "options": [
        "dragon",
        "fierce",
        "roar",
        "out"
      ],
      "correctIndex": 1,
      "explanation": "✔ fierce: Adjective describing roar.\n✖ dragon & roar (nouns), out (preposition)."
    },
    {
      "id": "fa-q31",
      "type": "multiple-choice",
      "difficultyStep": 1,
      "prompt": "Topic 4: Capitals & Full Stops • Question 1 of 10",
      "instruction": "Where must every sentence begin?",
      "options": [
        "With a capital letter",
        "With a full stop",
        "With a comma",
        "With a number"
      ],
      "correctIndex": 0,
      "explanation": "✔ With a capital letter: Primary sentence punctuation rule.\n✖ Full stops end sentences; commas separate phrases."
    },
    {
      "id": "fa-q32",
      "type": "multiple-choice",
      "difficultyStep": 1,
      "prompt": "Topic 4: Capitals & Full Stops • Question 2 of 10",
      "instruction": "Which mark belongs at the end of a telling sentence?",
      "options": [
        "Full stop (.)",
        "Question mark (?)",
        "Comma (,)",
        "Exclamation mark (!)"
      ],
      "correctIndex": 0,
      "explanation": "✔ Full stop (.): Marks sentence completion.\n✖ Question marks ask questions; commas separate items."
    },
    {
      "id": "fa-q33",
      "type": "multiple-choice",
      "difficultyStep": 1,
      "prompt": "Topic 4: Capitals & Full Stops • Question 3 of 10",
      "instruction": "Which word ALWAYS needs a capital letter when standing alone?",
      "options": [
        "I",
        "you",
        "he",
        "we"
      ],
      "correctIndex": 0,
      "explanation": "✔ I: The personal pronoun \"I\" is always capitalized in English.\n✖ \"you\", \"he\", \"we\" are only capitalized at the start of a sentence."
    },
    {
      "id": "fa-q34",
      "type": "multiple-choice",
      "difficultyStep": 1,
      "prompt": "Topic 4: Capitals & Full Stops • Question 4 of 10",
      "instruction": "Which sentence is correctly punctuated?",
      "options": [
        "The sun set behind the hill.",
        "the sun set behind the hill.",
        "The sun set behind the hill",
        "the sun set behind the hill"
      ],
      "correctIndex": 0,
      "explanation": "✔ The sun set behind the hill.: Begins with capital \"T\" and ends with full stop.\n✖ Missing capital letter or missing full stop."
    },
    {
      "id": "fa-q35",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 4: Capitals & Full Stops • Question 5 of 10",
      "instruction": "Which city name contains a capital letter error?",
      "options": [
        "london",
        "Cardiff",
        "Edinburgh",
        "Belfast"
      ],
      "correctIndex": 0,
      "explanation": "✔ london: Should be \"London\" (proper noun city name).\n✖ Cardiff, Edinburgh, Belfast are correctly capitalized."
    },
    {
      "id": "fa-q36",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 4: Capitals & Full Stops • Question 6 of 10",
      "instruction": "Fix the punctuation in: \"my dog is called barnaby.\"",
      "options": [
        "My dog is called Barnaby.",
        "my Dog is called barnaby.",
        "My dog is Called barnaby.",
        "my dog is called Barnaby"
      ],
      "correctIndex": 0,
      "explanation": "✔ My dog is called Barnaby.: Capital \"M\" at start, capital \"B\" for Barnaby, and full stop at end.\n✖ Other options miss essential capitals or full stop."
    },
    {
      "id": "fa-q37",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 4: Capitals & Full Stops • Question 7 of 10",
      "instruction": "Why does \"Friday\" need a capital \"F\"?",
      "options": [
        "It is a day of the week (proper noun)",
        "It is an action verb",
        "It is an adjective",
        "It is a question"
      ],
      "correctIndex": 0,
      "explanation": "✔ It is a day of the week (proper noun): All days of the week require capital letters.\n✖ Friday is not a verb or adjective."
    },
    {
      "id": "fa-q38",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 4: Capitals & Full Stops • Question 8 of 10",
      "instruction": "How many capital letters are needed in: \"isla lives in scotland.\"",
      "options": [
        "2 (Isla, Scotland)",
        "1 (Isla)",
        "3 (Isla, Lives, Scotland)",
        "0"
      ],
      "correctIndex": 0,
      "explanation": "✔ 2 (Isla, Scotland): \"Isla\" (person/sentence start) and \"Scotland\" (country name).\n✖ Other choices are incorrect."
    },
    {
      "id": "fa-q39",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 4: Capitals & Full Stops • Question 9 of 10",
      "instruction": "Which full stop placement correctly separates two thoughts?",
      "options": [
        "The bell rang. All the children lined up.",
        "The bell rang All. the children lined up",
        "The bell. rang all the children lined up",
        "The bell rang all the children lined up."
      ],
      "correctIndex": 0,
      "explanation": "✔ The bell rang. All the children lined up.: Correctly splits two complete sentences.\n✖ Places full stop inside incomplete phrases."
    },
    {
      "id": "fa-q40",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 4: Capitals & Full Stops • Question 10 of 10",
      "instruction": "What is missing from: \"on Tuesday, we visited Tower Bridge\"",
      "options": [
        "Capital O on \"On\" and full stop at end",
        "Comma after Tuesday",
        "Capital W on \"We\"",
        "Nothing is missing"
      ],
      "correctIndex": 0,
      "explanation": "✔ Capital O on \"On\" and full stop at end: \"On\" starts sentence and end needs a full stop.\n✖ Other options leave sentence incomplete."
    },
    {
      "id": "fa-q41",
      "type": "multiple-choice",
      "difficultyStep": 1,
      "prompt": "Topic 5: Simple Sentences • Question 1 of 10",
      "instruction": "What two essential parts must every simple sentence have?",
      "options": [
        "A subject and a verb",
        "An adjective and an adverb",
        "A comma and a full stop",
        "Two nouns and a connector"
      ],
      "correctIndex": 0,
      "explanation": "✔ A subject and a verb: Subject is who/what; verb is the action or state.\n✖ Other combinations do not form a complete clause."
    },
    {
      "id": "fa-q42",
      "type": "multiple-choice",
      "difficultyStep": 1,
      "prompt": "Topic 5: Simple Sentences • Question 2 of 10",
      "instruction": "Find the subject in: \"The owl hooted in the oak tree.\"",
      "options": [
        "The owl",
        "hooted",
        "in the",
        "oak tree"
      ],
      "correctIndex": 0,
      "explanation": "✔ The owl: The subject performing the action.\n✖ hooted (verb), oak tree (location noun phrase)."
    },
    {
      "id": "fa-q43",
      "type": "multiple-choice",
      "difficultyStep": 1,
      "prompt": "Topic 5: Simple Sentences • Question 3 of 10",
      "instruction": "Which group of words forms a complete simple sentence?",
      "options": [
        "The bird sang.",
        "Running in the garden",
        "The red bicycle",
        "Under the big oak tree"
      ],
      "correctIndex": 0,
      "explanation": "✔ The bird sang.: Contains subject (\"The bird\") and verb (\"sang\").\n✖ Others are incomplete fragments missing subject or verb."
    },
    {
      "id": "fa-q44",
      "type": "multiple-choice",
      "difficultyStep": 1,
      "prompt": "Topic 5: Simple Sentences • Question 4 of 10",
      "instruction": "What is the verb in this simple sentence: \"The boat floated smoothly.\"",
      "options": [
        "boat",
        "floated",
        "smoothly",
        "the"
      ],
      "correctIndex": 1,
      "explanation": "✔ floated: Action verb executed by the subject.\n✖ boat (subject noun), smoothly (adverb)."
    },
    {
      "id": "fa-q45",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 5: Simple Sentences • Question 5 of 10",
      "instruction": "Why is \"The fluffy white cat\" NOT a complete sentence?",
      "options": [
        "It lacks a verb (action/state)",
        "It lacks a noun",
        "It has too many adjectives",
        "It lacks a capital letter"
      ],
      "correctIndex": 0,
      "explanation": "✔ It lacks a verb: Lacks an action or state (e.g., \"purred\").\n✖ It has a noun (\"cat\") and starts with capital \"T\"."
    },
    {
      "id": "fa-q46",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 5: Simple Sentences • Question 6 of 10",
      "instruction": "Which word is the subject performing the action in: \"Fiona painted a picture.\"",
      "options": [
        "Fiona",
        "painted",
        "picture",
        "a"
      ],
      "correctIndex": 0,
      "explanation": "✔ Fiona: Person doing the painting (subject).\n✖ painted (verb), picture (object noun)."
    },
    {
      "id": "fa-q47",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 5: Simple Sentences • Question 7 of 10",
      "instruction": "Turn this fragment into a complete simple sentence: \"The steam train ___.\"",
      "options": [
        "whistled loudly",
        "yellow and fast",
        "on the iron track",
        "very big"
      ],
      "correctIndex": 0,
      "explanation": "✔ whistled loudly: Adds verb \"whistled\" to complete the thought.\n✖ Other options lack verbs."
    },
    {
      "id": "fa-q48",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 5: Simple Sentences • Question 8 of 10",
      "instruction": "What is the subject in: \"Rain fell on the tin roof.\"",
      "options": [
        "Rain",
        "fell",
        "roof",
        "tin"
      ],
      "correctIndex": 0,
      "explanation": "✔ Rain: Noun subject doing the falling.\n✖ fell (verb), roof (noun object)."
    },
    {
      "id": "fa-q49",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 5: Simple Sentences • Question 9 of 10",
      "instruction": "Which sentence matches the pattern [Subject + Verb + Object]?",
      "options": [
        "The chef baked a pie.",
        "The chef slept.",
        "The pie was hot.",
        "Baking in the oven."
      ],
      "correctIndex": 0,
      "explanation": "✔ The chef (Subject) + baked (Verb) + a pie (Object).\n✖ \"The chef slept\" lacks object; \"Baking in the oven\" is a fragment."
    },
    {
      "id": "fa-q50",
      "type": "multiple-choice",
      "difficultyStep": 2,
      "prompt": "Topic 5: Simple Sentences • Question 10 of 10",
      "instruction": "Which sentence is a complete simple sentence?",
      "options": [
        "The wind blew gently.",
        "In the dark forest at night",
        "A fast sports car",
        "Skipping down the road"
      ],
      "correctIndex": 0,
      "explanation": "✔ The wind blew gently.: Complete clause with subject (\"wind\") and verb (\"blew\").\n✖ Others are incomplete phrases."
    }
  ]
}
];

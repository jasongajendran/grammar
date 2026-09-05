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
  }
];

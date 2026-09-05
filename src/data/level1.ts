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
          '**People (general jobs & family):** boy, teacher, piper, farmer, sister (for example: *The **piper** tuned his wooden instruments*).',
          '**Places (general locations):** park, school, beach, castle, island, glen (for example: *The ancient **castle** stood quietly on the rocky cliff*).',
          '**Animals (creatures & wildlife):** badger, stag, hedgehog, otter, eagle, sheep (for example: *A majestic **stag** stepped through the purple heather*).',
          '**Things (everyday objects):** pencil, biscuit, boat, kilt, teapot, lantern (for example: *She poured hot tea into a ceramic **cup** while eating a butter **biscuit***).'
        ],
        examples: [
          {
            id: 'ex-l1-n1',
            sentence: 'The shaggy Highland **cow** grazed beside the clear mountain **stream**.',
            highlightWords: ['cow', 'stream'],
            explanation: '**Cow** (an animal) and **stream** (a place/feature) are general everyday things, so they are common nouns.',
            contextNote: 'Scottish Highlands nature'
          },
          {
            id: 'ex-l1-n2',
            sentence: 'The friendly **ferryman** steered the small wooden **boat** across the misty **loch**.',
            highlightWords: ['ferryman', 'boat', 'loch'],
            explanation: '**Ferryman** (a person), **boat** (an object), and **loch** (a lake/place) are common nouns written in lowercase.',
            contextNote: 'Scottish loch journey'
          },
          {
            id: 'ex-l1-n3',
            sentence: 'A golden **eagle** circled high above the craggy **valley**.',
            highlightWords: ['eagle', 'valley'],
            explanation: '**Eagle** names the bird and **valley** names the landscape; both are common nouns.',
            contextNote: 'Cairngorms wildlife'
          }
        ],
        ruleSummary: 'Common nouns name general things and use lowercase letters.'
      },
      {
        id: 'sec-proper-nouns',
        title: '2. What is a Proper Noun?',
        content: 'A **proper noun** is a specific, official name for a particular person, place, day, month, festival, or landmark. A proper noun **always begins with a capital letter**.',
        bulletPoints: [
          '**Names of specific people:** Oliver, Isla, Robert Burns, Mary Queen of Scots (for example: ***Robert Burns** wrote famous Scottish songs*).',
          '**Specific places & landmarks:** Edinburgh, Inverness, Loch Ness, Arthur\'s Seat, River Tay, Stirling Castle (for example: *The view from **Arthur\'s Seat** over **Edinburgh** is spectacular*).',
          '**Days, Months & Celebrations:** Monday, Friday, August, December, Hogmanay, Burns Night (for example: *We celebrate **Hogmanay** on **New Year\'s Eve***).',
          '**Countries, Nations & Languages:** Scotland, England, Wales, Gaelic, British English (for example: *Many road signs in **Scotland** are written in both **Gaelic** and **English***).'
        ],
        examples: [
          {
            id: 'ex-l1-n4',
            sentence: '**Callum** and **Fiona** visited **Edinburgh Castle** on **Saturday**.',
            highlightWords: ['Callum', 'Fiona', 'Edinburgh Castle', 'Saturday'],
            explanation: '**Callum** and **Fiona** (people), **Edinburgh Castle** (famous Scottish monument), and **Saturday** (day of the week) are all proper nouns requiring initial capital letters.',
            contextNote: 'Edinburgh landmark visit'
          },
          {
            id: 'ex-l1-n5',
            sentence: 'In the month of **August**, tourists from all over the world gather for the **Edinburgh International Festival**.',
            highlightWords: ['August', 'Edinburgh International Festival'],
            explanation: '**August** (calendar month) and **Edinburgh International Festival** (official cultural event title) are proper nouns.',
            contextNote: 'Scottish cultural festival'
          },
          {
            id: 'ex-l1-n6',
            sentence: 'The famous monster hunter scanned **Loch Ness** near the ruins of **Urquhart Castle**.',
            highlightWords: ['Loch Ness', 'Urquhart Castle'],
            explanation: '**Loch Ness** is a specific Scottish body of water and **Urquhart Castle** is a historic monument.',
            contextNote: 'Loch Ness exploration'
          }
        ],
        ruleSummary: 'Proper nouns are unique names and ALWAYS start with a capital letter.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l1-n1',
        title: 'The "The" Test for Nouns',
        trick: 'If you can place the word **the** or **a** in front of a word and it makes complete sense, it is usually a noun (for example: *the biscuit*, *a hedgehog*, *the tartan*).',
        mnemonic: 'Can I put "A" or "The" in front? If YES, it is a Noun!',
        commonMistake: 'Writing "scotland", "edinburgh" or "monday" with lowercase letters.',
        correctWay: 'Always write **Scotland**, **Edinburgh**, and **Monday** with initial capital letters.',
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
        sentence: 'Isla and Hamish explored Stirling Castle last July.',
        words: ['Isla', 'and', 'Hamish', 'explored', 'Stirling', 'Castle', 'last', 'July.'],
        targetIndices: [0, 2, 4, 5, 7],
        targetCategoryLabel: 'Proper Noun',
        explanation: '**Isla**, **Hamish**, **Stirling**, **Castle**, and **July** are all proper nouns because they name specific people, a fortress, and a calendar month.'
      },
      {
        id: 'ex-q3-l1-nouns',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Find the word that was written incorrectly without a capital letter.',
        instruction: 'Tap on the mistake in the sentence.',
        sentenceWithMistake: 'We are travelling to scotland on Friday morning.',
        words: ['We', 'are', 'travelling', 'to', 'scotland', 'on', 'Friday', 'morning.'],
        errorWordIndex: 4,
        correctedWord: 'Scotland',
        ruleViolated: 'Proper nouns representing countries must start with a capital letter.',
        explanation: '**Scotland** is a country name (proper noun) and must be capitalised as **Scotland**.'
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
          '**Physical actions (movement & work):** jump, sprint, pedal, paint, bake, climb (for example: *The Highland dancer **leapt** over the crossed swords*).',
          '**Sound actions (noises & voices):** whisper, roar, chime, whistle, chant (for example: *The bagpipes **echoed** through the misty Scottish glen*).',
          '**Mental actions (thoughts & feelings):** think, remember, imagine, admire, wonder (for example: *The hiker **imagined** a mythical kelpie swimming beneath the waves of Loch Ness*).'
        ],
        examples: [
          {
            id: 'ex-l1-v1',
            sentence: 'The golden eagle **soared** majestically across the craggy peaks of the Isle of Skye.',
            highlightWords: ['soared'],
            explanation: '**Soared** is the physical flying action performed by the eagle.',
            contextNote: 'Isle of Skye wildlife'
          },
          {
            id: 'ex-l1-v2',
            sentence: 'Grandmother **baked** sweet buttery shortbread for the afternoon ceilidh.',
            highlightWords: ['baked'],
            explanation: '**Baked** is the physical kitchen action Grandmother completed.',
            contextNote: 'Scottish baking'
          },
          {
            id: 'ex-l1-v3',
            sentence: 'A playful river otter **splashed** through the cool waters of Loch Lomond.',
            highlightWords: ['splashed'],
            explanation: '**Splashed** is the vigorous movement action of the otter.',
            contextNote: 'Loch Lomond wildlife'
          }
        ],
        ruleSummary: 'Action verbs show what the subject does or feels.'
      },
      {
        id: 'sec-verbs-to-be',
        title: '2. Helping & State of Being Verbs ("To Be")',
        content: 'Not all verbs are energetic actions! Some verbs simply tell us that something **exists** or describe a state of being. The most common state of being verbs are forms of **to be**: *is, am, are, was, were*. Other linking verbs include *seem, look, feel, become, remain*.',
        bulletPoints: [
          '**Present state (what someone or something is right now):** I *am* happy; The weather *is* rainy; We *are* ready (for example: *Ben Nevis **is** the highest mountain in Scotland and the British Isles*).',
          '**Past state (what someone or something was in the past):** The castle *was* ancient; The soldiers *were* brave (for example: *Stirling Castle **was** an impenetrable fortress throughout the Scottish Wars of Independence*).',
          '**Linking role (connecting a subject directly to its description):** These verbs link a subject to an adjective or descriptive noun (for example: *Edinburgh Castle **remains** magnificent*; *The Scottish highlands **look** breathtaking in summer*; *The waters of Loch Ness **seemed** peaceful under the silver fog*).'
        ],
        examples: [
          {
            id: 'ex-l1-v4',
            sentence: 'Edinburgh **is** the historic capital city of Scotland.',
            highlightWords: ['is'],
            explanation: '**Is** is a state-of-being verb connecting Edinburgh to its official description.',
            contextNote: 'Scottish geography'
          },
          {
            id: 'ex-l1-v5',
            sentence: 'The mountaineers **were** triumphant when they reached the snowy summit of the Cairngorms.',
            highlightWords: ['were'],
            explanation: '**Were** shows the past state of being and feeling of the mountaineers.',
            contextNote: 'Highland mountain trek'
          },
          {
            id: 'ex-l1-v6',
            sentence: 'The ancient stone towers of Dunnottar Castle **looked** mysterious against the sea mist.',
            highlightWords: ['looked'],
            explanation: '**Looked** is a linking verb connecting the castle towers to their description (*mysterious*).',
            contextNote: 'Coastal Scottish castle'
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
        explanation: '**Gallop** is an action that a Highland pony can perform, so it is an action verb.'
      },
      {
        id: 'ex-q2-l1-verbs',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the two VERBS in the sentence below.',
        instruction: 'Identify both the action verb and the state verb.',
        sentence: 'The red deer bounded across the glen and was very swift.',
        words: ['The', 'red', 'deer', 'bounded', 'across', 'the', 'glen', 'and', 'was', 'very', 'swift.'],
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
    whyItMatters: 'Adjectives paint vivid pictures in the reader\'s mind. Instead of just "a castle", we can write "a towering, storm-battered Scottish fortress".',
    sections: [
      {
        id: 'sec-types-adjectives',
        title: '1. What do Adjectives Describe?',
        content: 'Adjectives can describe many different qualities of a noun:',
        bulletPoints: [
          '**Colours & Appearance:** crimson, emerald, golden, sparkling, gloomy, purple (for example: *The **purple** heather carpeted the **misty** Scottish hillsides*).',
          '**Size & Shape:** colossal, miniature, circular, narrow, towering, rugged (for example: *A **towering** granite crag protects the castle from **howling** winds*).',
          '**Feelings & Personality:** cheerful, courageous, gentle, proud, fierce (for example: *The **courageous** Scottish warriors defended the fortress*).',
          '**Touch, Taste & Sound:** crunchy, scorching, deafening, silky, buttery (for example: *We enjoyed **warm**, **buttery** Scottish shortbread alongside hot tea*).'
        ],
        examples: [
          {
            id: 'ex-l1-adj1',
            sentence: 'The **ancient**, **stone** castle overlooked the **deep**, **sparkling** loch.',
            highlightWords: ['ancient', 'stone', 'deep', 'sparkling'],
            explanation: '**Ancient** (age) and **stone** (material) describe the castle. **Deep** and **sparkling** describe the loch.',
            contextNote: 'Scottish loch landscape'
          },
          {
            id: 'ex-l1-adj2',
            sentence: 'Fiona wore a **cosy**, **tartan** scarf on the **frosty** winter morning in Aberdeen.',
            highlightWords: ['cosy', 'tartan', 'frosty'],
            explanation: '**Cosy** and **tartan** describe the scarf, while **frosty** describes the morning.',
            contextNote: 'Scottish winter morning'
          },
          {
            id: 'ex-l1-adj3',
            sentence: 'The **wild**, **rugged** peaks of the Cuillin range appeared **dramatic** under dark storm clouds.',
            highlightWords: ['wild', 'rugged', 'dramatic'],
            explanation: '**Wild** and **rugged** sit before the noun *peaks*, while **dramatic** follows the linking verb *appeared*.',
            contextNote: 'Isle of Skye mountain scenery'
          }
        ],
        ruleSummary: 'Adjectives usually sit directly before the noun they describe or after a linking verb.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l1-adj1',
        title: 'The Sense Check for Adjectives',
        trick: 'Ask your five senses: What does it look, sound, smell, taste, or feel like? (for example: *the roaring waterfall*, *the sweet heather honey*).',
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
        sentence: 'The curious seal swam through the crystal waters near the rocky Scottish cove.',
        words: ['The', 'curious', 'seal', 'swam', 'through', 'the', 'crystal', 'waters', 'near', 'the', 'rocky', 'Scottish', 'cove.'],
        targetIndices: [1, 6, 10, 11],
        targetCategoryLabel: 'Adjective',
        explanation: '**Curious** describes the seal, **crystal** describes the waters, **rocky** describes the cove, and **Scottish** is a proper adjective describing the cove.'
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
          '**Start of a sentence:** **T**he ferry sailed out into the Firth of Forth.',
          '**Proper nouns (names of people, places, days, and months):** **F**iona, **E**dinburgh, **S**cottish **H**ighlands, **A**ugust, **T**uesday (for example: *On **M**onday, **C**ameron climbed **B**en **N**evis*).',
          '**The personal pronoun "I":** When referring to yourself, **I** is ALWAYS capitalised, even in the middle of a sentence (for example: *"Isla and **I** watched the dolphins jump at Chanonry Point"*).'
        ],
        examples: [
          {
            id: 'ex-l1-p1',
            sentence: '**M**orag and **I** visited the **N**ational **M**useum of **S**cotland in **E**dinburgh.',
            highlightWords: ['Morag', 'I', 'National Museum of Scotland', 'Edinburgh'],
            explanation: 'Starts the sentence (Morag), personal pronoun (I), museum title (Proper noun), and city (Edinburgh).',
            contextNote: 'Scottish cultural trip'
          },
          {
            id: 'ex-l1-p2',
            sentence: '**T**he red squirrel gathered hazelnuts beneath the pine trees of the **C**airngorms.**',
            highlightWords: ['The', 'Cairngorms', '.'],
            explanation: 'Starts with a capital **T**, capitalises the national park name (**Cairngorms**), and finishes with a clear **full stop (.)**.',
            contextNote: 'Highland wildlife'
          },
          {
            id: 'ex-l1-p3',
            sentence: '**D**id you spot the seals resting on the rocks of the **I**sle of **M**ay**?**',
            highlightWords: ['Did', 'Isle of May', '?'],
            explanation: 'Starts with a capital letter, capitalises the island name, and finishes with a question mark (?) because it asks a question.',
            contextNote: 'Scottish island enquiry'
          }
        ],
        ruleSummary: 'Every sentence starts with a Capital Letter and ends with a Full Stop (or ? / !).'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l1-p1',
        title: 'The Breath Test for Full Stops',
        trick: 'Read your work out loud. Where your voice naturally drops and takes a full breath, you have finished a complete thought and need a full stop (for example: *The piper finished his tune. The crowd cheered loudly.*).',
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
        sentenceWithMistake: 'every morning, the pipers practise along the Royal Mile.',
        words: ['every', 'morning,', 'the', 'pipers', 'practise', 'along', 'the', 'Mile.'],
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
          'on saturdays i visit Stirling with Jack',
          'On Saturdays, I visit Stirling with Jack.',
          'on Saturdays, i visit stirling with jack.',
          'On saturdays, I visit Stirling with jack.'
        ],
        correctIndex: 1,
        explanation: '**On Saturdays, I visit Stirling with Jack.** is correct because "On" starts the sentence, "Saturdays", "Stirling", and "Jack" are proper nouns, and "I" is capitalised.'
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
          '**The Subject (Who or what performs the action):** A person, animal, place, or thing (for example: ***The golden eagle** banked sharply in the sky*).',
          '**The Verb (Predicate action or state):** The doing or being word (for example: *The Jacobite steam train **rumbled** across the Glenfinnan Viaduct*).',
          '**The Direct Object (Optional receiver):** The person or thing receiving the action (for example: *Hamish caught **a leaping silver salmon** in the River Tay*).'
        ],
        examples: [
          {
            id: 'ex-l1-s1',
            sentence: '**The Jacobite steam train** **whistled** proudly as it crossed the viaduct.',
            highlightWords: ['The Jacobite steam train', 'whistled'],
            explanation: '**The Jacobite steam train** is the subject performing the action. **Whistled** is the finite verb.',
            contextNote: 'Scottish Highland railway'
          },
          {
            id: 'ex-l1-s2',
            sentence: '**Callum** **played** an old Scottish tune on his bagpipes.',
            highlightWords: ['Callum', 'played'],
            explanation: '**Callum** is the subject. **Played** is the action verb, and "an old Scottish tune" is the object.',
            contextNote: 'Traditional music'
          },
          {
            id: 'ex-l1-s3',
            sentence: '**The red deer stag** **stood** proudly on the rocky crest.',
            highlightWords: ['The red deer stag', 'stood'],
            explanation: '**The red deer stag** is the subject. **Stood** is the verb expressing position.',
            contextNote: 'Highland wildlife'
          }
        ],
        ruleSummary: 'A simple sentence = 1 Subject + 1 Finite Verb expressing one complete thought.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l1-s1',
        title: 'Spotting Sentence Fragments',
        trick: 'If a group of words is missing either a subject or a verb, it is only a **fragment** (for example: *"Running across the Scottish moors"* is a fragment because it does not state WHO is running!).',
        mnemonic: 'Who does what? That makes a sentence!',
        commonMistake: 'Leaving off the verb and writing just a phrase (for example: *"The Highland pony in the stable"*).',
        correctWay: 'Add the verb: *"The Highland pony slept peacefully in the stable."*',
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
          'Under the stone bridge of the River Forth.',
          'The noisy tractor rumbled down the farm lane.',
          'Eating delicious butter shortbread.',
          'The shaggy Highland cow by the loch.'
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
    ]
  }
];

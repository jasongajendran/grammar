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
          '**People:** boy, teacher, doctor, sister',
          '**Places:** park, school, beach, castle',
          '**Animals:** badger, fox, hedgehog, robin',
          '**Things:** pencil, biscuit, double-decker bus, crown'
        ],
        examples: [
          {
            id: 'ex-l1-n1',
            sentence: 'The fluffy **cat** jumped over the garden **fence**.',
            highlightWords: ['cat', 'fence'],
            explanation: '**Cat** (an animal) and **fence** (an object) are general everyday things, so they are common nouns.',
            contextNote: 'Everyday observation'
          },
          {
            id: 'ex-l1-n2',
            sentence: 'The **children** played football in the local **park**.',
            highlightWords: ['children', 'park'],
            explanation: '**Children** (people) and **park** (a place) are common nouns written in lowercase.',
            contextNote: 'Recreational setting'
          }
        ],
        ruleSummary: 'Common nouns name general things and use lowercase letters.'
      },
      {
        id: 'sec-proper-nouns',
        title: '2. What is a Proper Noun?',
        content: 'A **proper noun** is a specific, official name for a particular person, place, day, month, or landmark. A proper noun **always begins with a capital letter**.',
        bulletPoints: [
          '**Names of people:** Oliver, Isla, William Shakespeare, Queen Elizabeth',
          '**Specific places:** London, Edinburgh, River Thames, Big Ben',
          '**Days & Months:** Monday, Friday, October, December',
          '**Countries & Languages:** England, Scotland, Wales, British English'
        ],
        examples: [
          {
            id: 'ex-l1-n3',
            sentence: '**Isla** visited **Big Ben** in **London** on **Saturday**.',
            highlightWords: ['Isla', 'Big Ben', 'London', 'Saturday'],
            explanation: '**Isla** (person), **Big Ben** (landmark), **London** (city), and **Saturday** (day) all name specific things and must start with a capital letter.',
            contextNote: 'British sightseeing'
          },
          {
            id: 'ex-l1-n4',
            sentence: 'Our family travelled to **Edinburgh Castle** during the month of **August**.',
            highlightWords: ['Edinburgh Castle', 'August'],
            explanation: '**Edinburgh Castle** is a famous Scottish monument and **August** is a specific month of the year.',
            contextNote: 'Scottish heritage'
          }
        ],
        ruleSummary: 'Proper nouns are unique names and ALWAYS start with a capital letter.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l1-n1',
        title: 'The "The" Test for Nouns',
        trick: 'If you can place the word **the** or **a** in front of a word and it makes sense, it is usually a noun (e.g. *the biscuit*, *a hedgehog*).',
        mnemonic: 'Can I put "A" or "The" in front? If YES, it is a Noun!',
        commonMistake: 'Writing "london" or "monday" with lowercase letters.',
        correctWay: 'Always write **London** and **Monday** with initial capital letters.',
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
        sentence: 'Harry and Charlotte visited Manchester last July.',
        words: ['Harry', 'and', 'Charlotte', 'visited', 'Manchester', 'last', 'July.'],
        targetIndices: [0, 2, 4, 6],
        targetCategoryLabel: 'Proper Noun',
        explanation: '**Harry**, **Charlotte**, **Manchester**, and **July** are all proper nouns because they name specific people, a city, and a month.'
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
          '**Physical actions:** jump, sprint, pedal, paint, bake',
          '**Sound actions:** whisper, roar, chime, whistle',
          '**Mental actions:** think, remember, imagine, wonder'
        ],
        examples: [
          {
            id: 'ex-l1-v1',
            sentence: 'The blackbird **chirped** brightly from the oak branch.',
            highlightWords: ['chirped'],
            explanation: '**Chirped** is the action performed by the blackbird.',
            contextNote: 'Garden wildlife'
          },
          {
            id: 'ex-l1-v2',
            sentence: 'George **baked** six warm scones for afternoon tea.',
            highlightWords: ['baked'],
            explanation: '**Baked** is the physical action George completed.',
            contextNote: 'British baking'
          }
        ],
        ruleSummary: 'Action verbs show what the subject does.'
      },
      {
        id: 'sec-verbs-to-be',
        title: '2. Helping & State of Being Verbs ("To Be")',
        content: 'Not all verbs are energetic actions! Some verbs simply tell us that something **exists** or describe a state of being. The most common state of being verbs are forms of **to be**: *is, am, are, was, were*.',
        bulletPoints: [
          '**Present state:** I *am* happy; The weather *is* rainy; We *are* ready.',
          '**Past state:** The castle *was* ancient; The soldiers *were* brave.',
          '**Linking:** These verbs link a subject to a description.'
        ],
        examples: [
          {
            id: 'ex-l1-v3',
            sentence: 'London **is** the bustling capital city of the United Kingdom.',
            highlightWords: ['is'],
            explanation: '**Is** is a state-of-being verb connecting London to its description.',
            contextNote: 'British geography'
          },
          {
            id: 'ex-l1-v4',
            sentence: 'The children **were** exhausted after the long country walk.',
            highlightWords: ['were'],
            explanation: '**Were** shows the past state of being of the children.',
            contextNote: 'State of feeling'
          }
        ],
        ruleSummary: 'State-of-being verbs (is, are, was, were) describe what someone or something IS.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l1-v1',
        title: 'The "Can you DO it?" Test',
        trick: 'To find a verb, ask yourself: *"Can a person or animal DO this?"* (e.g., Can you swim? Yes! Can you table? No!).',
        mnemonic: 'Verbs are words of DOING, THINKING, or BEING!',
        commonMistake: 'Confusing nouns with verbs in words that can be both (e.g. *a run* vs *to run*).',
        correctWay: 'Look at the job the word is doing in that exact sentence.',
        explanation: 'In *"I like the run"*, run is a noun. In *"I run every morning"*, run is an action verb.'
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
        explanation: '**Gallop** is an action that a horse can perform, so it is an action verb.'
      },
      {
        id: 'ex-q2-l1-verbs',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the two VERBS in the sentence below.',
        instruction: 'Identify both the action verb and the state verb.',
        sentence: 'The puppy splashed in puddles and was very happy.',
        words: ['The', 'puppy', 'splashed', 'in', 'puddles', 'and', 'was', 'very', 'happy.'],
        targetIndices: [2, 6],
        targetCategoryLabel: 'Verb',
        explanation: '**Splashed** is an action verb, and **was** is a state-of-being verb.'
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
    whyItMatters: 'Adjectives paint vivid pictures in the reader\'s mind. Instead of just "a dog", we can write "a playful, scruffy terrier".',
    sections: [
      {
        id: 'sec-types-adjectives',
        title: '1. What do Adjectives Describe?',
        content: 'Adjectives can describe many different qualities of a noun:',
        bulletPoints: [
          '**Colours & Appearance:** crimson, emerald, golden, sparkling, gloomy',
          '**Size & Shape:** colossal, miniature, circular, narrow',
          '**Feelings & Personality:** cheerful, courageous, grumpy, gentle',
          '**Touch, Taste & Sound:** crunchy, scorching, deafening, silky'
        ],
        examples: [
          {
            id: 'ex-l1-adj1',
            sentence: 'The **ancient**, **stone** bridge crossed the **murky** stream.',
            highlightWords: ['ancient', 'stone', 'murky'],
            explanation: '**Ancient** (age) and **stone** (material) describe the bridge. **Murky** describes the stream.',
            contextNote: 'Rural landscape'
          },
          {
            id: 'ex-l1-adj2',
            sentence: 'Emma wore a **cosy**, **woollen** jumper on the **frosty** morning.',
            highlightWords: ['cosy', 'woollen', 'frosty'],
            explanation: '**Cosy** and **woollen** describe the jumper, while **frosty** describes the morning.',
            contextNote: 'Winter setting'
          }
        ],
        ruleSummary: 'Adjectives usually sit directly before the noun they describe or after a linking verb.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l1-adj1',
        title: 'The Sense Check for Adjectives',
        trick: 'Ask your 5 senses: What does it look, sound, smell, taste, or feel like?',
        mnemonic: 'Adjectives ADD colour and detail to Nouns!',
        commonMistake: 'Using too many adjectives in a row without commas (e.g. *the big brown fluffy friendly dog*).',
        correctWay: 'Pick 1 or 2 powerful adjectives and separate them with a comma (e.g. *the scruffy, energetic dog*).',
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
        sentence: 'The curious robin perched on the wooden fence.',
        words: ['The', 'curious', 'robin', 'perched', 'on', 'the', 'wooden', 'fence.'],
        targetIndices: [1, 6],
        targetCategoryLabel: 'Adjective',
        explanation: '**Curious** describes the robin, and **wooden** describes the fence.'
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
          '**Start of a sentence:** **T**he train arrived on time.',
          '**Proper nouns:** **L**ucas, **B**irmingham, **M**ay, **T**uesday.',
          '**The pronoun "I":** When referring to yourself, **I** is ALWAYS capitalised, even in the middle of a sentence (*"Mia and I walked home"*).'
        ],
        examples: [
          {
            id: 'ex-l1-p1',
            sentence: '**O**liver and **I** visited the **N**atural **H**istory **M**useum in **L**ondon.',
            highlightWords: ['Oliver', 'I', 'Natural History Museum', 'London'],
            explanation: 'Starts the sentence (Oliver), personal pronoun (I), museum title (Proper noun), and city (London).',
            contextNote: 'London cultural trip'
          },
          {
            id: 'ex-l1-p2',
            sentence: '**T**he hedgehog curled into a spiky ball under the hedge**.**',
            highlightWords: ['The', '.'],
            explanation: 'Starts with a capital **T** and finishes with a clear **full stop (.)**.',
            contextNote: 'Garden nature'
          }
        ],
        ruleSummary: 'Every sentence starts with a Capital Letter and ends with a Full Stop (or ? / !).'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l1-p1',
        title: 'The Breath Test for Full Stops',
        trick: 'Read your work out loud. Where your voice naturally drops and takes a full breath, you have finished a complete thought and need a full stop.',
        mnemonic: 'Capitals start the journey, Full Stops park the car!',
        commonMistake: 'Writing lowercase "i" for yourself (e.g. *me and i went to the shop*).',
        correctWay: 'Always write capital **I** (e.g. *Mia and I went to the shop*).',
        explanation: 'In English, the personal pronoun "I" is always a single capital letter.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l1-p',
        type: 'error-detective',
        difficultyStep: 1,
        prompt: 'Find the word that is missing a capital letter.',
        instruction: 'Click on the lowercase word that should be capitalised.',
        sentenceWithMistake: 'every morning, the birds sing outside my bedroom window.',
        words: ['every', 'morning,', 'the', 'birds', 'sing', 'outside', 'my', 'window.'],
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
          'on saturdays i play tennis with Jack',
          'On Saturdays, I play tennis with Jack.',
          'on Saturdays, i play tennis with jack.',
          'On saturdays, I play Tennis with Jack.'
        ],
        correctIndex: 1,
        explanation: '**On Saturdays, I play tennis with Jack.** is correct because "On" starts the sentence, "Saturdays" and "Jack" are proper nouns, and "I" is capitalised.'
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
    overview: 'A **simple sentence** expresses a complete thought. It must contain at least one **subject** (who or what the sentence is about) and one **predicate** with a **verb** (what the subject is doing or being).',
    whyItMatters: 'Understanding simple sentences forms the foundation for all complex, expressive writing.',
    sections: [
      {
        id: 'sec-subject-verb',
        title: '1. The Two Halves of a Simple Sentence',
        content: 'Every complete simple sentence has two core components:',
        bulletPoints: [
          '**The Subject:** The person, place, or thing performing the action (*Who or what is doing it?*)',
          '**The Verb (Predicate):** The action or state (*What are they doing?*)',
          '**The Object (Optional):** The receiver of the action (*e.g., The dog chased the ball*).'
        ],
        examples: [
          {
            id: 'ex-l1-s1',
            sentence: '**The steam train** **whistled** loudly.',
            highlightWords: ['The steam train', 'whistled'],
            explanation: '**The steam train** is the subject. **Whistled** is the verb.',
            contextNote: 'Railway heritage'
          },
          {
            id: 'ex-l1-s2',
            sentence: '**Archie** **read** an exciting book about castles.',
            highlightWords: ['Archie', 'read'],
            explanation: '**Archie** is the subject doing the action. **Read** is the verb.',
            contextNote: 'Reading activity'
          }
        ],
        ruleSummary: 'A simple sentence = 1 Subject + 1 Finite Verb expressing one complete thought.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l1-s1',
        title: 'Spotting Sentence Fragments',
        trick: 'If a group of words is missing either a subject or a verb, it is only a **fragment** (e.g. *"Running through the park"* is not a sentence because it doesn\'t say WHO is running!).',
        mnemonic: 'Who does what? That makes a sentence!',
        commonMistake: 'Leaving off the verb and writing just a phrase.',
        correctWay: 'Add the subject and verb: *"The children were running through the park."*',
        explanation: 'A sentence must stand alone and make complete sense.'
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
          'Under the wooden table.',
          'The noisy tractor rumbled down the lane.',
          'Eating delicious strawberry jam.',
          'The fluffy white bunny in the garden.'
        ],
        correctIndex: 1,
        explanation: '**The noisy tractor rumbled down the lane.** has a subject (The noisy tractor) and a finite verb (rumbled).'
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

import json

# Final Assessment Exercises (50 questions)
fa_exercises = [
  # Pronouns (1-8)
  {
    "id": "l2-fa-q1", "type": "multiple-choice", "difficultyStep": 1,
    "prompt": "[Pronouns] Which subject pronoun correctly completes: '____ explored the prehistoric caves at Cheddar Gorge.'",
    "instruction": "Pick the correct subject pronoun.",
    "options": ["Us", "They", "Them", "Him"], "correctIndex": 1,
    "explanation": "✔ **They** is a subject pronoun doing the action. ✖ Us/Them/Him are object pronouns."
  },
  {
    "id": "l2-fa-q2", "type": "word-clicker", "difficultyStep": 1,
    "prompt": "[Pronouns] Click the object pronoun in this sentence.",
    "instruction": "Identify the word receiving the action.",
    "sentence": "The park ranger guided us safely across the river.",
    "words": ["The", "park", "ranger", "guided", "us", "safely", "across", "the", "river."],
    "targetIndices": [4], "targetCategoryLabel": "object pronoun",
    "explanation": "✔ **us** is the object pronoun receiving the action of guided."
  },
  {
    "id": "l2-fa-q3", "type": "multiple-choice", "difficultyStep": 2,
    "prompt": "[Pronouns] Which possessive pronoun correctly completes: 'The winning trophy is ____.'",
    "instruction": "Select the possessive pronoun without an apostrophe.",
    "options": ["our's", "ours", "oures", "our's'"], "correctIndex": 1,
    "explanation": "✔ **ours** is a possessive pronoun without an apostrophe."
  },
  {
    "id": "l2-fa-q4", "type": "error-detective", "difficultyStep": 2,
    "prompt": "[Pronouns] Spot the pronoun error in this sentence.",
    "instruction": "Click the incorrect pronoun.",
    "sentenceWithMistake": "Me and Arthur visited the science museum in London.",
    "words": ["Me", "and", "Arthur", "visited", "the", "science", "museum", "in", "London."],
    "errorWordIndex": 0, "correctedWord": "I", "ruleViolated": "Polite subject pronoun rule",
    "explanation": "✔ Use subject pronoun **I** ('Arthur and I visited')."
  },
  {
    "id": "l2-fa-q5", "type": "multiple-choice", "difficultyStep": 2,
    "prompt": "[Pronouns] Choose the correct pronoun: 'Isla gave ____ her spare pencil.'",
    "instruction": "Select the object pronoun.",
    "options": ["he", "him", "they", "she"], "correctIndex": 1,
    "explanation": "✔ **him** is the object pronoun receiving the pencil."
  },
  {
    "id": "l2-fa-q6", "type": "sentence-builder", "difficultyStep": 3,
    "prompt": "[Pronouns] Build a sentence using a possessive pronoun.",
    "instruction": "Arrange the words into a sentence.",
    "scrambledWords": ["The", "golden", "compass", "was", "hers."],
    "correctSentence": "The golden compass was hers.",
    "explanation": "✔ **hers** is a possessive pronoun replacing 'her compass'."
  },
  {
    "id": "l2-fa-q7", "type": "multiple-choice", "difficultyStep": 3,
    "prompt": "[Pronouns] Identify the pronoun that replaces 'the children': 'The teacher gave ____ a star sticker.'",
    "instruction": "Select the plural object pronoun.",
    "options": ["them", "they", "their", "themselves"], "correctIndex": 0,
    "explanation": "✔ **them** is the object pronoun replacing 'the children'."
  },
  {
    "id": "l2-fa-q8", "type": "multiple-choice", "difficultyStep": 3,
    "prompt": "[Pronouns] Which sentence uses pronouns politely and grammatically?",
    "instruction": "Select the polite subject phrase.",
    "options": ["Me and Callum went hiking.", "Callum and I went hiking.", "I and Callum went hiking.", "Callum and me went hiking."],
    "correctIndex": 1,
    "explanation": "✔ **Callum and I** puts the other person first and uses subject pronoun 'I'."
  },

  # Adverbs (9-16)
  {
    "id": "l2-fa-q9", "type": "multiple-choice", "difficultyStep": 1,
    "prompt": "[Adverbs] Identify the adverb of manner in: 'The red kite soared gracefully over the valley.'",
    "instruction": "Find the word telling HOW it soared.",
    "options": ["red", "soared", "gracefully", "valley"], "correctIndex": 2,
    "explanation": "✔ **gracefully** describes HOW the kite soared."
  },
  {
    "id": "l2-fa-q10", "type": "word-clicker", "difficultyStep": 1,
    "prompt": "[Adverbs] Click the adverb of time in this sentence.",
    "instruction": "Identify the word telling WHEN.",
    "sentence": "Tomorrow we will visit Edinburgh Castle.",
    "words": ["Tomorrow", "we", "will", "visit", "Edinburgh", "Castle."],
    "targetIndices": [0], "targetCategoryLabel": "adverb of time",
    "explanation": "✔ **Tomorrow** tells us WHEN the visit will happen."
  },
  {
    "id": "l2-fa-q11", "type": "multiple-choice", "difficultyStep": 2,
    "prompt": "[Adverbs] Which word is an adverb of place? 'The children searched ____ for the lost dog.'",
    "instruction": "Select the word telling WHERE.",
    "options": ["everywhere", "yesterday", "silently", "frequently"], "correctIndex": 0,
    "explanation": "✔ **everywhere** tells us WHERE they searched."
  },
  {
    "id": "l2-fa-q12", "type": "error-detective", "difficultyStep": 2,
    "prompt": "[Adverbs] Spot the incorrect adverb form.",
    "instruction": "Click the non-existent word.",
    "sentenceWithMistake": "The greyhound ran fastly to win the trophy.",
    "words": ["The", "greyhound", "ran", "fastly", "to", "win", "the", "trophy."],
    "errorWordIndex": 3, "correctedWord": "fast", "ruleViolated": "Irregular adverb 'fast'",
    "explanation": "✔ The adverb form of 'fast' is **fast** (not fastly)."
  },
  {
    "id": "l2-fa-q13", "type": "sentence-builder", "difficultyStep": 2,
    "prompt": "[Adverbs] Build a sentence with an adverb of manner.",
    "instruction": "Order the words correctly.",
    "scrambledWords": ["The", "stream", "flowed", "swiftly", "downstream."],
    "correctSentence": "The stream flowed swiftly downstream.",
    "explanation": "✔ **swiftly** describes how the stream flowed."
  },
  {
    "id": "l2-fa-q14", "type": "multiple-choice", "difficultyStep": 3,
    "prompt": "[Adverbs] Which sentence contains an adverb of frequency?",
    "instruction": "Select the sentence answering 'how often?'.",
    "options": ["The owl flew silently.", "She always eats breakfast at seven.", "The dog slept outside.", "They arrived early."],
    "correctIndex": 1,
    "explanation": "✔ **always** tells us how often she eats breakfast."
  },
  {
    "id": "l2-fa-q15", "type": "multiple-choice", "difficultyStep": 3,
    "prompt": "[Adverbs] Which of the following -ly words is an ADJECTIVE, not an adverb?",
    "instruction": "Find the word describing a noun.",
    "options": ["quietly", "lovely", "patiently", "eagerly"], "correctIndex": 1,
    "explanation": "✔ **lovely** is an adjective ('a lovely day')."
  },
  {
    "id": "l2-fa-q16", "type": "word-clicker", "difficultyStep": 3,
    "prompt": "[Adverbs] Click the adverb modifying an adjective in: 'The weather was surprisingly warm.'",
    "instruction": "Identify the adverb modifying 'warm'.",
    "sentence": "The weather was surprisingly warm today.",
    "words": ["The", "weather", "was", "surprisingly", "warm", "today."],
    "targetIndices": [3], "targetCategoryLabel": "adverb",
    "explanation": "✔ **surprisingly** modifies the adjective 'warm'."
  },

  # Prepositions (17-24)
  {
    "id": "l2-fa-q17", "type": "multiple-choice", "difficultyStep": 1,
    "prompt": "[Prepositions] Choose the preposition of place: 'The cat slept ___ the warm radiator.'",
    "instruction": "Select the position preposition.",
    "options": ["beside", "during", "since", "because"], "correctIndex": 0,
    "explanation": "✔ **beside** shows location relative to the radiator."
  },
  {
    "id": "l2-fa-q18", "type": "word-clicker", "difficultyStep": 1,
    "prompt": "[Prepositions] Click the preposition of direction in this sentence.",
    "instruction": "Identify movement across a space.",
    "sentence": "The ferry sailed across the English Channel.",
    "words": ["The", "ferry", "sailed", "across", "the", "English", "Channel."],
    "targetIndices": [3], "targetCategoryLabel": "preposition of direction",
    "explanation": "✔ **across** shows direction of travel."
  },
  {
    "id": "l2-fa-q19", "type": "multiple-choice", "difficultyStep": 2,
    "prompt": "[Prepositions] Which preposition of time correctly fits: 'We will meet ___ five o'clock.'",
    "instruction": "Select the exact clock time preposition.",
    "options": ["at", "on", "in", "under"], "correctIndex": 0,
    "explanation": "✔ Use **at** for specific clock times."
  },
  {
    "id": "l2-fa-q20", "type": "error-detective", "difficultyStep": 2,
    "prompt": "[Prepositions] Spot the extra redundant preposition word.",
    "instruction": "Click the unnecessary word.",
    "sentenceWithMistake": "Isla stepped off of the boat at the pier.",
    "words": ["Isla", "stepped", "off", "of", "the", "boat", "at", "the", "pier."],
    "errorWordIndex": 3, "correctedWord": "boat", "ruleViolated": "Redundant preposition rule",
    "explanation": "✔ Write 'off the boat' rather than 'off of the boat'."
  },
  {
    "id": "l2-fa-q21", "type": "sentence-builder", "difficultyStep": 2,
    "prompt": "[Prepositions] Build a sentence with a prepositional phrase.",
    "instruction": "Order the words into a complete sentence.",
    "scrambledWords": ["The", "fox", "ran", "through", "the", "dense", "forest."],
    "correctSentence": "The fox ran through the dense forest.",
    "explanation": "✔ **through the dense forest** is a prepositional phrase."
  },
  {
    "id": "l2-fa-q22", "type": "multiple-choice", "difficultyStep": 3,
    "prompt": "[Prepositions] Which preposition shows position between two objects?",
    "instruction": "Select the correct word.",
    "options": ["between", "among", "through", "during"], "correctIndex": 0,
    "explanation": "✔ **between** refers to position relative to two items."
  },
  {
    "id": "l2-fa-q23", "type": "multiple-choice", "difficultyStep": 3,
    "prompt": "[Prepositions] Select the sentence where 'into' shows movement inside.",
    "instruction": "Choose the movement sentence.",
    "options": ["The diver leaped into the cool sea.", "The diver swam in the cool sea.", "The diver rested on the beach.", "The diver waited by the shore."],
    "correctIndex": 0,
    "explanation": "✔ **into** shows movement entering the water."
  },
  {
    "id": "l2-fa-q24", "type": "word-clicker", "difficultyStep": 3,
    "prompt": "[Prepositions] Click the time preposition in: 'During the storm, we stayed warm indoors.'",
    "instruction": "Select the preposition indicating duration.",
    "sentence": "During the storm, we stayed warm indoors.",
    "words": ["During", "the", "storm,", "we", "stayed", "warm", "indoors."],
    "targetIndices": [0], "targetCategoryLabel": "preposition of time",
    "explanation": "✔ **During** is a preposition of time indicating a period."
  },

  # FANBOYS Conjunctions (25-33)
  {
    "id": "l2-fa-q25", "type": "multiple-choice", "difficultyStep": 1,
    "prompt": "[FANBOYS] Which FANBOYS conjunction shows RESULT?",
    "instruction": "Select the conjunction indicating result.",
    "options": ["So", "But", "Or", "Nor"], "correctIndex": 0,
    "explanation": "✔ **So** shows consequence or result. ✖ But shows contrast."
  },
  {
    "id": "l2-fa-q26", "type": "word-clicker", "difficultyStep": 1,
    "prompt": "[FANBOYS] Click the coordinating conjunction in this sentence.",
    "instruction": "Identify the FANBOYS word.",
    "sentence": "The orchestra played, and the audience applauded.",
    "words": ["The", "orchestra", "played,", "and", "the", "audience", "applauded."],
    "targetIndices": [3], "targetCategoryLabel": "coordinating conjunction",
    "explanation": "✔ **and** is the coordinating conjunction joining two clauses."
  },
  {
    "id": "l2-fa-q27", "type": "multiple-choice", "difficultyStep": 2,
    "prompt": "[FANBOYS] Which conjunction fits best: 'He was tired, ___ he continued running.'",
    "instruction": "Select the contrast conjunction.",
    "options": ["yet", "so", "or", "for"], "correctIndex": 0,
    "explanation": "✔ **yet** shows unexpected contrast."
  },
  {
    "id": "l2-fa-q28", "type": "error-detective", "difficultyStep": 2,
    "prompt": "[FANBOYS] Spot the misplaced comma around 'but'.",
    "instruction": "Click the word after which the comma was placed incorrectly.",
    "sentenceWithMistake": "The wind blew hard but, we reached the summit.",
    "words": ["The", "wind", "blew", "hard", "but,", "we", "reached", "the", "summit."],
    "errorWordIndex": 4, "correctedWord": "hard,", "ruleViolated": "Comma placement before conjunction",
    "explanation": "✔ Place comma BEFORE 'but' (hard, but we...)."
  },
  {
    "id": "l2-fa-q29", "type": "sentence-builder", "difficultyStep": 2,
    "prompt": "[FANBOYS] Build a sentence using 'or'.",
    "instruction": "Arrange the words into a sentence.",
    "scrambledWords": ["We", "can", "walk,", "or", "we", "can", "take", "the", "bus."],
    "correctSentence": "We can walk, or we can take the bus.",
    "explanation": "✔ **or** connects two choices."
  },
  {
    "id": "l2-fa-q30", "type": "multiple-choice", "difficultyStep": 3,
    "prompt": "[FANBOYS] What does 'for' mean when used as a FANBOYS conjunction?",
    "instruction": "Select the meaning of 'for'.",
    "options": ["because", "after", "although", "unless"], "correctIndex": 0,
    "explanation": "✔ **for** means 'because' or 'since' as a coordinating conjunction."
  },
  {
    "id": "l2-fa-q31", "type": "multiple-choice", "difficultyStep": 3,
    "prompt": "[FANBOYS] Which sentence correctly uses 'nor'?",
    "instruction": "Identify the negative addition sentence.",
    "options": ["He did not complain, nor did he quit.", "He did not complain nor, did he quit.", "He did not complain, nor, did he quit.", "He did not complain nor he, did quit."],
    "correctIndex": 0,
    "explanation": "✔ 'He did not complain, nor did he quit.' uses comma + nor correctly."
  },
  {
    "id": "l2-fa-q32", "type": "word-clicker", "difficultyStep": 3,
    "prompt": "[FANBOYS] Click the FANBOYS conjunction in: 'The hearth was warm, for the fire was stoked.'",
    "instruction": "Select 'for' as a conjunction.",
    "sentence": "The hearth was warm, for the fire was stoked.",
    "words": ["The", "hearth", "was", "warm,", "for", "the", "fire", "was", "stoked."],
    "targetIndices": [4], "targetCategoryLabel": "coordinating conjunction",
    "explanation": "✔ **for** joins the reason clause."
  },
  {
    "id": "l2-fa-q33", "type": "multiple-choice", "difficultyStep": 3,
    "prompt": "[FANBOYS] Which FANBOYS letter stands for 'addition'?",
    "instruction": "Select the letter and word.",
    "options": ["A - And", "B - But", "S - So", "O - Or"], "correctIndex": 0,
    "explanation": "✔ **A** stands for **And** (addition)."
  },

  # Compound Sentences (34-42)
  {
    "id": "l2-fa-q34", "type": "multiple-choice", "difficultyStep": 1,
    "prompt": "[Compound Sentences] Which of the following is a genuine compound sentence?",
    "instruction": "Look for two independent clauses joined by comma + FANBOYS.",
    "options": ["The gale blew, and the waves crashed against the pier.", "Walking along the windy coastal path near Dover.", "Because it was freezing outside in Newcastle.", "Isla and Callum packed their leather satchels."],
    "correctIndex": 0,
    "explanation": "✔ Two complete sentences joined by ', and'."
  },
  {
    "id": "l2-fa-q35", "type": "error-detective", "difficultyStep": 1,
    "prompt": "[Compound Sentences] Spot the comma splice error.",
    "instruction": "Click the comma where a conjunction is missing.",
    "sentenceWithMistake": "The bell rang, the pupils lined up in order.",
    "words": ["The", "bell", "rang,", "the", "pupils", "lined", "up", "in", "order."],
    "errorWordIndex": 2, "correctedWord": "rang, and", "ruleViolated": "Comma splice error",
    "explanation": "✔ Add a conjunction like 'and' or 'so' after the comma."
  },
  {
    "id": "l2-fa-q36", "type": "sentence-builder", "difficultyStep": 2,
    "prompt": "[Compound Sentences] Assemble a compound sentence.",
    "instruction": "Order the words correctly.",
    "scrambledWords": ["The", "sun", "rose,", "and", "the", "birds", "sang."],
    "correctSentence": "The sun rose, and the birds sang.",
    "explanation": "✔ Clause 1 + ', and' + Clause 2."
  },
  {
    "id": "l2-fa-q37", "type": "multiple-choice", "difficultyStep": 2,
    "prompt": "[Compound Sentences] Which sentence is NOT compound?",
    "instruction": "Find the complex or simple sentence.",
    "options": ["I wanted cake, but she wanted pie.", "Although it rained, we enjoyed the walk.", "The sun shone, so we went outside.", "You can rest, or you can join us."],
    "correctIndex": 1,
    "explanation": "✔ 'Although it rained...' is a complex sentence starting with subordinating conjunction 'Although'."
  },
  {
    "id": "l2-fa-q38", "type": "clause-matcher", "difficultyStep": 2,
    "prompt": "[Compound Sentences] Identify clauses in: 'The clock struck twelve, and the lights dimmed.'",
    "instruction": "Break down the clauses.",
    "sentence": "The clock struck twelve, and the lights dimmed.",
    "mainClause": "The clock struck twelve",
    "subordinateClause": "the lights dimmed",
    "conjunctionOrConnective": "and",
    "explanation": "✔ Both parts are independent clauses joined by 'and'."
  },
  {
    "id": "l2-fa-q39", "type": "word-clicker", "difficultyStep": 3,
    "prompt": "[Compound Sentences] Click the conjunction joining two clauses.",
    "instruction": "Select the joining word.",
    "sentence": "The path was rugged, yet the hikers pressed on.",
    "words": ["The", "path", "was", "rugged,", "yet", "the", "hikers", "pressed", "on."],
    "targetIndices": [4], "targetCategoryLabel": "coordinating conjunction",
    "explanation": "✔ **yet** joins the two independent clauses."
  },
  {
    "id": "l2-fa-q40", "type": "multiple-choice", "difficultyStep": 3,
    "prompt": "[Compound Sentences] What test proves a sentence is compound?",
    "instruction": "Select the two-sentence test.",
    "options": ["Removing the conjunction leaves two complete sentences.", "Removing the verb leaves a noun phrase.", "It must contain at least three commas.", "It must start with an adverb."],
    "correctIndex": 0,
    "explanation": "✔ If both halves stand as complete independent sentences, it is compound."
  },
  {
    "id": "l2-fa-q41", "type": "sentence-builder", "difficultyStep": 3,
    "prompt": "[Compound Sentences] Build a compound sentence with 'but'.",
    "instruction": "Order the words into a sentence.",
    "scrambledWords": ["The", "snow", "fell,", "but", "we", "stayed", "warm."],
    "correctSentence": "The snow fell, but we stayed warm.",
    "explanation": "✔ Clause 1 + ', but' + Clause 2."
  },
  {
    "id": "l2-fa-q42", "type": "multiple-choice", "difficultyStep": 3,
    "prompt": "[Compound Sentences] Which punctuation mark belongs before a FANBOYS conjunction joining two independent clauses?",
    "instruction": "Select the punctuation mark.",
    "options": ["comma (,)", "full stop (.)", "exclamation mark (!)", "question mark (?)"],
    "correctIndex": 0,
    "explanation": "✔ Place a comma before the coordinating conjunction in compound sentences."
  },

  # Apostrophes (43-50)
  {
    "id": "l2-fa-q43", "type": "multiple-choice", "difficultyStep": 1,
    "prompt": "[Apostrophes] Which contraction replaces 'do not'?",
    "instruction": "Select the correct contraction.",
    "options": ["don't", "dont'", "do'nt", "d'ont"], "correctIndex": 0,
    "explanation": "✔ **don't** replaces the 'o' in 'not' with an apostrophe."
  },
  {
    "id": "l2-fa-q44", "type": "error-detective", "difficultyStep": 1,
    "prompt": "[Apostrophes] Find the greengrocer's plural apostrophe error.",
    "instruction": "Click the word with the wrong apostrophe.",
    "sentenceWithMistake": "Fresh banana's are on sale at the local market.",
    "words": ["Fresh", "banana's", "are", "on", "sale", "at", "the", "local", "market."],
    "errorWordIndex": 1, "correctedWord": "bananas", "ruleViolated": "Plural apostrophe prohibition",
    "explanation": "✔ Plural nouns (bananas) never take an apostrophe."
  },
  {
    "id": "l2-fa-q45", "type": "multiple-choice", "difficultyStep": 2,
    "prompt": "[Apostrophes] Choose the correct singular possessive form: 'The ___ collar was red.'",
    "instruction": "Select the form showing ownership by one dog.",
    "options": ["dog's", "dogs'", "dogs", "doges"], "correctIndex": 0,
    "explanation": "✔ **dog's** shows ownership belonging to one dog."
  },
  {
    "id": "l2-fa-q46", "type": "word-clicker", "difficultyStep": 2,
    "prompt": "[Apostrophes] Click the word with an apostrophe of contraction.",
    "instruction": "Identify the contraction.",
    "sentence": "We couldn't find the old map of Cardiff.",
    "words": ["We", "couldn't", "find", "the", "old", "map", "of", "Cardiff."],
    "targetIndices": [1], "targetCategoryLabel": "contraction",
    "explanation": "✔ **couldn't** = could not."
  },
  {
    "id": "l2-fa-q47", "type": "multiple-choice", "difficultyStep": 2,
    "prompt": "[Apostrophes] Which sentence correctly uses 'it's'?",
    "instruction": "Identify where 'it's' means 'it is'.",
    "options": ["It's a sunny afternoon in Cornwall.", "The dog wagged it's tail.", "The car lost it's mirror.", "The bird swished it's feathers."],
    "correctIndex": 0,
    "explanation": "✔ 'It's a sunny afternoon' = 'It is a sunny afternoon'."
  },
  {
    "id": "l2-fa-q48", "type": "sentence-builder", "difficultyStep": 3,
    "prompt": "[Apostrophes] Build a sentence with a possessive apostrophe.",
    "instruction": "Order the words into a sentence.",
    "scrambledWords": ["Isla's", "cat", "slept", "by", "the", "fire."],
    "correctSentence": "Isla's cat slept by the fire.",
    "explanation": "✔ **Isla's** shows singular possession."
  },
  {
    "id": "l2-fa-q49", "type": "multiple-choice", "difficultyStep": 3,
    "prompt": "[Apostrophes] What two words make up 'won't'?",
    "instruction": "Select the original words.",
    "options": ["will not", "would not", "was not", "were not"], "correctIndex": 0,
    "explanation": "✔ **won't** is the irregular contraction for **will not**."
  },
  {
    "id": "l2-fa-q50", "type": "multiple-choice", "difficultyStep": 3,
    "prompt": "[Apostrophes] Which option shows correct singular possession for a name ending in s (e.g. Charles)?",
    "instruction": "Select the standard British English form.",
    "options": ["Charles's crown", "Charle's crown", "Charless' crown", "Charles's' crown"],
    "correctIndex": 0,
    "explanation": "✔ Add **'s** to singular names ending in s (Charles's crown)."
  }
]

# Write a python script to assemble the TS file directly!
ts_code = f"""import {{ GrammarTopic }} from '../types';

export const LEVEL_2_TOPICS: GrammarTopic[] = [
  // 1. PRONOUNS
  {{
    id: 'l2-pronouns',
    slug: 'pronouns-personal-possessive',
    title: 'Pronouns: Personal & Possessive',
    subtitle: 'Replacing repetitive nouns with agile words like I, she, they, mine, and ours.',
    level: 'level-2',
    levelLabel: 'Level 2: Foundation',
    levelStage: 'Lower Key Stage 2',
    ageGroup: 'Ages 7–9',
    category: 'word-classes',
    categoryLabel: 'Word Classes',
    iconName: 'UserCheck',
    estimatedMinutes: 6,
    overview: 'A **pronoun** is a word used in place of a noun or noun phrase. Without pronouns, our speech and writing would sound clunky and unnaturally repetitive (for example: *"Isla took Isla\\'s backpack because Isla was going to Isla\\'s school"*).',
    whyItMatters: 'Using pronouns correctly makes your prose flow naturally and helps maintain clear subject and object relationships in sentences.',
    sections: [
      {{
        id: 'sec-personal-pronouns',
        title: '1. Personal Pronouns (Subject & Object)',
        content: 'Personal pronouns refer to specific people, animals, or things:',
        bulletPoints: [
          '**Subject Pronouns (Doers):** I, you, he, she, it, we, they (for example: ***She*** *explored the grounds of Edinburgh Castle*).',
          '**Object Pronouns (Receivers):** me, you, him, her, it, us, them (for example: *The park ranger guided **us** through the woods*).'
        ],
        examples: [
          {{
            id: 'ex-l2-pr1',
            sentence: '**They** boarded the ferry to Belfast, and the captain greeted **them** warmly.',
            highlightWords: ['They', 'them'],
            explanation: '**They** is a subject pronoun (doing the boarding); **them** is an object pronoun (receiving the greeting).',
            contextNote: 'UK ferry voyage'
          }},
          {{
            id: 'ex-l2-pr2',
            sentence: 'Callum showed **me** his map of Snowdonia.',
            highlightWords: ['me'],
            explanation: '**me** is the object pronoun receiving the action of showing.',
            contextNote: 'Map reading in Wales'
          }},
          {{
            id: 'ex-l2-pr3',
            sentence: '**We** spotted a herd of red deer near Loch Lomond.',
            highlightWords: ['We'],
            explanation: '**We** is the plural subject pronoun doing the spotting.',
            contextNote: 'Scottish wildlife trip'
          }}
        ],
        ruleSummary: 'Subject pronouns do the action; object pronouns receive the action.'
      }},
      {{
        id: 'sec-possessive-pronouns',
        title: '2. Possessive Pronouns (Ownership Without Nouns)',
        content: 'Possessive pronouns show ownership without needing to repeat the noun:',
        bulletPoints: [
          '**Possessive Pronouns:** mine, yours, his, hers, its, ours, theirs.',
          '**Example:** *That compass belongs to Isla. -> That compass is **hers**.*',
          '**Key Rule:** Possessive pronouns NEVER take an apostrophe (*ours*, *theirs*, *its*).'
        ],
        examples: [
          {{
            id: 'ex-l2-pr4',
            sentence: 'The blue raincoat is **mine**, but the waterproof boots are **yours**.',
            highlightWords: ['mine', 'yours'],
            explanation: '**mine** and **yours** show possession without repeating raincoat or boots.',
            contextNote: 'Hiking equipment'
          }},
          {{
            id: 'ex-l2-pr5',
            sentence: 'Isla left her notebook at home, so Arthur lent her **his**.',
            highlightWords: ['his'],
            explanation: '**his** replaces "his notebook".',
            contextNote: 'Classroom sharing'
          }},
          {{
            id: 'ex-l2-pr6',
            sentence: 'That trophy belongs to the York football team; the victory is **theirs**.',
            highlightWords: ['theirs'],
            explanation: '**theirs** shows ownership by the team (no apostrophe!).',
            contextNote: 'School sports day'
          }}
        ],
        ruleSummary: 'Possessive pronouns replace "possessive adjective + noun" and never take apostrophes.'
      }}
    ],
    tipsAndTricks: [
      {{
        id: 'tip-l2-pr1',
        title: 'The "Cover-Up" Polite Order Rule',
        trick: 'When talking about yourself and another person, always put the other person FIRST: *"Callum and I"* (Subject) or *"Callum and me"* (Object). Cover up "Callum and" to test: *"I went to the library"* (Correct!), NOT *"Me went to the library"*.',
        mnemonic: 'Put others first, then test with "I" or "me" alone!',
        commonMistake: 'Saying *"Me and Isla went to London"*.',
        correctWay: 'Say *"Isla and **I** went to London"* (Because "I went", not "Me went").',
        explanation: 'Testing the pronoun without the extra person reveals whether you need subject "I" or object "me".'
      }}
    ],
    exercises: [
      {{
        id: 'ex-q1-l2-pr',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which pronoun correctly completes this sentence: "____ visited the Roman Baths in Bath last weekend."',
        instruction: 'Choose the subject pronoun that fits.',
        options: ['Us', 'We', 'Them', 'Him'],
        correctIndex: 1,
        explanation: '**We** is a subject pronoun doing the action of visiting.'
      }},
      {{
        id: 'ex-q2-l2-pr',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Click all the pronouns in this sentence.',
        instruction: 'Identify the words replacing nouns.',
        sentence: 'She gave him a golden ticket to the London Eye.',
        words: ['She', 'gave', 'him', 'a', 'golden', 'ticket', 'to', 'the', 'London', 'Eye.'],
        targetIndices: [0, 2],
        targetCategoryLabel: 'pronoun',
        explanation: '**She** (subject pronoun) and **him** (object pronoun) are pronouns.'
      }},
      {{
        id: 'gen-pro-1',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which sentence uses possessive pronouns correctly?',
        instruction: 'Select the sentence with correct possessive pronoun usage.',
        options: [
          'The picnic basket is our\\'s.',
          'The picnic basket is ours.',
          'The picnic basket is oures.',
          'The picnic basket is our\\'s.'
        ],
        correctIndex: 1,
        explanation: 'Possessive pronouns like "ours", "yours", and "theirs" never use apostrophes.'
      }},
      {{
        id: 'gen2-pro-1',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Choose the correct pronoun: "Isla and ____ walked along the Severn Estuary."',
        instruction: 'Select the subject pronoun.',
        options: ['me', 'I', 'us', 'myself'],
        correctIndex: 1,
        explanation: '"I" is the correct subject pronoun. Test by removing "Isla and": "I walked along the Severn Estuary."'
      }},
      {{
        id: 'ex-l2-pr-5',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find the pronoun error in this sentence.',
        instruction: 'Click on the incorrect pronoun.',
        sentenceWithMistake: 'Me and Arthur saw a red squirrel in the woods.',
        words: ['Me', 'and', 'Arthur', 'saw', 'a', 'red', 'squirrel', 'in', 'the', 'woods.'],
        errorWordIndex: 0,
        correctedWord: 'I',
        ruleViolated: 'Subject pronoun rule',
        explanation: 'Use subject pronoun "I" instead of object pronoun "Me" as the subject of the verb "saw" ("Arthur and I saw...").'
      }},
      {{
        id: 'ex-l2-pr-6',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Replace the underlined nouns with a pronoun: "The teacher called Callum and Isla into the hall."',
        instruction: 'Select the suitable object pronoun.',
        options: ['they', 'them', 'their', 'themselves'],
        correctIndex: 1,
        explanation: '"Them" is the object pronoun receiving the action of being called.'
      }},
      {{
        id: 'ex-l2-pr-7',
        type: 'sentence-builder',
        difficultyStep: 2,
        prompt: 'Build a sentence using personal pronouns.',
        instruction: 'Rearrange the words into a correct sentence.',
        scrambledWords: ['She', 'gave', 'us', 'the', 'keys.'],
        correctSentence: 'She gave us the keys.',
        explanation: '"She" is the subject pronoun and "us" is the object pronoun.'
      }},
      {{
        id: 'ex-l2-pr-8',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Click the possessive pronoun in this sentence.',
        instruction: 'Identify the word showing ownership.',
        sentence: 'This sketchbook is mine.',
        words: ['This', 'sketchbook', 'is', 'mine.'],
        targetIndices: [3],
        targetCategoryLabel: 'possessive pronoun',
        explanation: '"mine" is a possessive pronoun showing ownership of the sketchbook.'
      }},
      {{
        id: 'ex-l2-pr-9',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which pronoun belongs in the gap? "The museum guide showed ____ the ancient Celtic coins."',
        instruction: 'Select the object pronoun.',
        options: ['we', 'us', 'our', 'ourselves'],
        correctIndex: 1,
        explanation: '"us" is the object pronoun receiving the action of showing.'
      }},
      {{
        id: 'ex-l2-pr-10',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Select the sentence where the pronoun "it" replaces a singular noun.',
        instruction: 'Identify the sentence with clear pronoun reference.',
        options: [
          'The old clock struck twelve, and it chimed loudly.',
          'The boys played football and it ran fast.',
          'Isla and Callum ate lunch and it was happy.',
          'The clouds floated and it rained flowers.'
        ],
        correctIndex: 0,
        explanation: '"it" clearly refers back to the singular noun "The old clock".'
      }},
      {{
        id: 'ex-l2-pr-11',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Identify the incorrect possessive pronoun spelling.',
        instruction: 'Click the word with the unnecessary apostrophe.',
        sentenceWithMistake: 'That winning telescope is their\\'s.',
        words: ['That', 'winning', 'telescope', 'is', 'their\\'s.'],
        errorWordIndex: 4,
        correctedWord: 'theirs.',
        ruleViolated: 'Possessive pronoun spelling',
        explanation: 'Possessive pronouns like "theirs", "ours", and "yours" do not take an apostrophe.'
      }},
      {{
        id: 'ex-l2-pr-12',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which pair of pronouns correctly completes: "____ offered ____ a slice of warm Victoria sponge cake."',
        instruction: 'Select Subject then Object pronoun.',
        options: [
          'He / me',
          'Him / I',
          'Me / he',
          'Them / she'
        ],
        correctIndex: 0,
        explanation: '"He" (subject pronoun) offered "me" (object pronoun).'
      }},
      {{
        id: 'ex-l2-pr-13',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Click all subject pronouns in this sentence.',
        instruction: 'Select the pronouns performing actions.',
        sentence: 'When they arrived, we welcomed them warmly.',
        words: ['When', 'they', 'arrived,', 'we', 'welcomed', 'them', 'warmly.'],
        targetIndices: [1, 3],
        targetCategoryLabel: 'subject pronoun',
        explanation: '"they" and "we" are subject pronouns doing the actions of arriving and welcoming.'
      }},
      {{
        id: 'ex-l2-pr-14',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Build a sentence with possessive pronouns.',
        instruction: 'Assemble the words correctly.',
        scrambledWords: ['The', 'victory', 'was', 'ours.'],
        correctSentence: 'The victory was ours.',
        explanation: '"ours" is a possessive pronoun showing ownership of the victory.'
      }},
      {{
        id: 'ex-l2-pr-15',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Which sentence is polite and grammatically correct?',
        instruction: 'Choose the sentence with correct pronoun order and form.',
        options: [
          'Me and Isla went to the British Museum.',
          'Isla and I went to the British Museum.',
          'I and Isla went to the British Museum.',
          'Isla and me went to the British Museum.'
        ],
        correctIndex: 1,
        explanation: 'In polite British English, place the other person first ("Isla and...") and use subject pronoun "I".'
      }}
    ]
  }},

  // 2. ADVERBS
  {{
    id: 'l2-adverbs',
    slug: 'adverbs-manner-time-place',
    title: 'Adverbs: Manner, Time & Place',
    subtitle: 'Adding rich detail to verbs by describing how, when, where, and how often.',
    level: 'level-2',
    levelLabel: 'Level 2: Foundation',
    levelStage: 'Lower Key Stage 2',
    ageGroup: 'Ages 7–9',
    category: 'word-classes',
    categoryLabel: 'Word Classes',
    iconName: 'Zap',
    estimatedMinutes: 6,
    overview: 'An **adverb** modifies a verb, adjective, or another adverb. It provides vital extra context by answering questions like **How?** (Manner), **When?** (Time), **Where?** (Place), and **How often?** (Frequency).',
    whyItMatters: 'Adverbs turn plain, dull statements into vivid, precise descriptions.',
    sections: [
      {{
        id: 'sec-adverb-types',
        title: '1. The Four Major Families of Adverbs',
        content: 'Adverbs tell us more about the action taking place:',
        bulletPoints: [
          '**Adverbs of Manner (How?):** *swiftly, gently, fiercely, patiently, well* (for example: *The red kite glided **swiftly** over the valley*).',
          '**Adverbs of Time (When?):** *yesterday, now, soon, tomorrow, later* (for example: *The steam train departed **yesterday***).',
          '**Adverbs of Place (Where?):** *here, everywhere, outside, upstairs, nearby* (for example: *The children played **outside***).',
          '**Adverbs of Frequency (How often?):** *always, often, sometimes, rarely, never* (for example: *Puffins **often** nest along Antrim cliffs*).'
        ],
        examples: [
          {{
            id: 'ex-l2-adv1',
            sentence: 'The tawny owl hunted **silently** in the moonlit forest.',
            highlightWords: ['silently'],
            explanation: '**silently** is an adverb of manner answering *How did the owl hunt?*',
            contextNote: 'Night woodland wildlife'
          }},
          {{
            id: 'ex-l2-adv2',
            sentence: 'The parade will commence **tomorrow** at noon in Cardiff.',
            highlightWords: ['tomorrow'],
            explanation: '**tomorrow** is an adverb of time answering *When will it commence?*',
            contextNote: 'Welsh cultural festival'
          }},
          {{
            id: 'ex-l2-adv3',
            sentence: 'The lighthouse beam swept **everywhere** across the stormy sea.',
            highlightWords: ['everywhere'],
            explanation: '**everywhere** is an adverb of place answering *Where did it sweep?*',
            contextNote: 'Cornish coast maritime'
          }}
        ],
        ruleSummary: 'Identify adverbs by asking How?, When?, Where?, or How often? about the verb.'
      }}
    ],
    tipsAndTricks: [
      {{
        id: 'tip-l2-adv1',
        title: 'The "-ly" Trap Warning!',
        trick: 'Many adverbs of manner end in **-ly** (*quick -> quickly*), but NOT ALL -ly words are adverbs! Words like *friendly*, *lovely*, and *lonely* are actually **adjectives** (*a friendly dog*). Also, words like *fast* and *hard* can be adverbs without -ly!',
        mnemonic: 'Ask what the word DOES, not just what it ENDS in!',
        commonMistake: 'Thinking *fastly* is a word. (It is not!)',
        correctWay: 'Use *fast*: *"The greyhound ran **fast**"* (Adverb modifying *ran*).',
        explanation: '*Fast* functions as both adjective and adverb in British English.'
      }}
    ],
    exercises: [
      {{
        id: 'ex-q1-l2-adv',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which word is the adverb of manner in this sentence: "The brass band played triumphantly outside City Hall."',
        instruction: 'Find the word describing HOW they played.',
        options: ['brass', 'played', 'triumphantly', 'outside'],
        correctIndex: 2,
        explanation: '**triumphantly** is an adverb of manner describing HOW the band played.'
      }},
      {{
        id: 'ex-q2-l2-adv',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Click the adverb of time in this sentence.',
        instruction: 'Identify the word telling WHEN.',
        sentence: 'We will visit the Giant\\'s Causeway tomorrow.',
        words: ['We', 'will', 'visit', 'the', 'Giant\\'s', 'Causeway', 'tomorrow.'],
        targetIndices: [6],
        targetCategoryLabel: 'adverb of time',
        explanation: '**tomorrow** tells us WHEN the visit will take place.'
      }},
      {{
        id: 'gen-adv-1',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which word in the following sentence is an adverb? "The choir sang beautifully in the old cathedral."',
        instruction: 'Select the adverb.',
        options: ['choir', 'sang', 'beautifully', 'cathedral'],
        correctIndex: 2,
        explanation: '"beautifully" is an adverb of manner modifying the verb "sang".'
      }},
      {{
        id: 'gen2-adv-1',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Identify the type of adverb underlined: "The children searched **everywhere** for the lost key."',
        instruction: 'Identify the adverb type.',
        options: ['Adverb of Manner', 'Adverb of Time', 'Adverb of Place', 'Adverb of Frequency'],
        correctIndex: 2,
        explanation: '"everywhere" answers "where?" so it is an adverb of place.'
      }},
      {{
        id: 'ex-l2-adv-5',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Click the adverb of manner in this sentence.',
        instruction: 'Identify the word describing how the action was performed.',
        sentence: 'The old clock ticked loudly in the silent hall.',
        words: ['The', 'old', 'clock', 'ticked', 'loudly', 'in', 'the', 'silent', 'hall.'],
        targetIndices: [4],
        targetCategoryLabel: 'adverb of manner',
        explanation: '"loudly" describes HOW the clock ticked.'
      }},
      {{
        id: 'ex-l2-adv-6',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Which of the following contains an adverb of frequency?',
        instruction: 'Select the sentence answering "how often?".',
        options: [
          'The lifeboat crew responded immediately.',
          'Puffins return to the cliffs annually.',
          'The ferry sailed across the harbour.',
          'He spoke softly to the frightened puppy.'
        ],
        correctIndex: 1,
        explanation: '"annually" tells us HOW OFTEN the puffins return.'
      }},
      {{
        id: 'ex-l2-adv-7',
        type: 'sentence-builder',
        difficultyStep: 2,
        prompt: 'Build a sentence with an adverb of manner.',
        instruction: 'Arrange the words correctly.',
        scrambledWords: ['The', 'river', 'flowed', 'swiftly', 'through', 'the', 'glen.'],
        correctSentence: 'The river flowed swiftly through the glen.',
        explanation: '"swiftly" is an adverb modifying "flowed".'
      }},
      {{
        id: 'ex-l2-adv-8',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Find the incorrect adverb form.',
        instruction: 'Click on the wrong word.',
        sentenceWithMistake: 'The athlete ran fastly to win the silver medal.',
        words: ['The', 'athlete', 'ran', 'fastly', 'to', 'win', 'the', 'silver', 'medal.'],
        errorWordIndex: 3,
        correctedWord: 'fast',
        ruleViolated: 'Irregular adverb rule',
        explanation: '"fastly" is not a word; the adverb form of "fast" is simply "fast".'
      }},
      {{
        id: 'ex-l2-adv-9',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which sentence uses "hard" as an adverb?',
        instruction: 'Identify "hard" modifying a verb.',
        options: [
          'The stone wall was hard and cold.',
          'The stone mason worked hard all morning.',
          'It was a hard exam on British history.',
          'The hard oak bench was uncomfortable.'
        ],
        correctIndex: 1,
        explanation: 'In "worked hard", "hard" is an adverb modifying the verb "worked".'
      }},
      {{
        id: 'ex-l2-adv-10',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Click all adverbs in this sentence.',
        instruction: 'Find both adverbs modifying verbs.',
        sentence: 'Yesterday the robin sang merrily outside.',
        words: ['Yesterday', 'the', 'robin', 'sang', 'merrily', 'outside.'],
        targetIndices: [0, 4, 5],
        targetCategoryLabel: 'adverb',
        explanation: '"Yesterday" (time), "merrily" (manner), and "outside" (place) are all adverbs.'
      }},
      {{
        id: 'ex-l2-adv-11',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Choose the correct adverb to complete: "The detective examined the crime scene ____."',
        instruction: 'Select the most appropriate adverb of manner.',
        options: ['curiously', 'carefully', 'yesterday', 'everywhere'],
        correctIndex: 1,
        explanation: '"carefully" is the adverb of manner describing how the detective examined the scene.'
      }},
      {{
        id: 'ex-l2-adv-12',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Build a sentence with an adverb of place.',
        instruction: 'Arrange the words into a sentence.',
        scrambledWords: ['The', 'crowds', 'gathered', 'outside', 'the', 'palace.'],
        correctSentence: 'The crowds gathered outside the palace.',
        explanation: '"outside" tells us WHERE the crowds gathered.'
      }},
      {{
        id: 'ex-l2-adv-13',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Which word is an ADJECTIVE, not an adverb?',
        instruction: 'Spot the -ly word that describes a noun.',
        options: ['quickly', 'friendly', 'patiently', 'quietly'],
        correctIndex: 1,
        explanation: '"friendly" is an adjective (e.g., "a friendly neighbour"). The others are adverbs.'
      }},
      {{
        id: 'ex-l2-adv-14',
        type: 'word-clicker',
        difficultyStep: 4,
        prompt: 'Click the adverb modifying an adjective: "The weather was surprisingly warm for September."',
        instruction: 'Find the adverb modifying "warm".',
        sentence: 'The weather was surprisingly warm for September.',
        words: ['The', 'weather', 'was', 'surprisingly', 'warm', 'for', 'September.'],
        targetIndices: [3],
        targetCategoryLabel: 'adverb modifying adjective',
        explanation: '"surprisingly" is an adverb modifying the adjective "warm".'
      }},
      {{
        id: 'ex-l2-adv-15',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Identify the sentence with an adverb of frequency.',
        instruction: 'Select the sentence answering "how often?".',
        options: [
          'Callum completed his homework thoroughly.',
          'Isla always feeds her pet rabbit at dawn.',
          'They arrived early for the morning assembly.',
          'She stepped carefully over the slippery rocks.'
        ],
        correctIndex: 1,
        explanation: '"always" tells us how often Isla feeds her rabbit.'
      }}
    ]
  }},

  // 3. PREPOSITIONS
  {{
    id: 'l2-prepositions',
    slug: 'prepositions-place-time-direction',
    title: 'Prepositions: Place, Time & Direction',
    subtitle: 'Pinpointing where things are, when events happen, and which way they move.',
    level: 'level-2',
    levelLabel: 'Level 2: Foundation',
    levelStage: 'Lower Key Stage 2',
    ageGroup: 'Ages 7–9',
    category: 'word-classes',
    categoryLabel: 'Word Classes',
    iconName: 'MapPin',
    estimatedMinutes: 6,
    overview: 'A **preposition** is a word placed before a noun or pronoun to show its relationship to another word in time, space, or direction (for example: *the squirrel ran **up** the tree*, *we meet **at** noon*, *walk **towards** the river*).',
    whyItMatters: 'Prepositions anchor your writing in time and space, giving exact geographical and temporal clarity.',
    sections: [
      {{
        id: 'sec-preposition-types',
        title: '1. Place, Time & Movement Prepositions',
        content: 'Prepositions fall into three main functional categories:',
        bulletPoints: [
          '**Prepositions of Place:** *under, above, beside, inside, between, behind, on, in* (for example: *The ferry docked **beside** the pier*).',
          '**Prepositions of Time:** *before, after, during, at, on, in, since, until* (for example: *We departed **before** sunrise*).',
          '**Prepositions of Direction/Movement:** *towards, across, through, into, along, over* (for example: *Hikers trudged **through** the valley*).'
        ],
        examples: [
          {{
            id: 'ex-l2-prep1',
            sentence: 'The puffins nested **under** the grassy turf on the cliffs of Antrim.',
            highlightWords: ['under'],
            explanation: '**under** is a preposition of place showing position.',
            contextNote: 'Coastal puffin sanctuary'
          }},
          {{
            id: 'ex-l2-prep2',
            sentence: 'The church bells rang **at** midnight on New Year\\'s Eve in Edinburgh.',
            highlightWords: ['at'],
            explanation: '**at** is a preposition of time specifying an exact moment.',
            contextNote: 'Scottish Hogmanay celebration'
          }},
          {{
            id: 'ex-l2-prep3',
            sentence: 'The rowing boat drifted smoothly **across** the calm waters of Windermere.',
            highlightWords: ['across'],
            explanation: '**across** is a preposition of direction showing movement from one side to the other.',
            contextNote: 'Lake District boating'
          }}
        ],
        ruleSummary: 'Prepositions introduce prepositional phrases (*preposition + noun*).'
      }}
    ],
    tipsAndTricks: [
      {{
        id: 'tip-l2-prep1',
        title: 'The Squirrel & Mountain Trick',
        trick: 'Imagine a squirrel and a tree (or a mountain). Anything a squirrel can do to a tree is usually a preposition: *under* the tree, *over* the tree, *around* the tree, *through* the tree, *beside* the tree, *into* the tree!',
        mnemonic: 'Where can a squirrel run? That is a preposition!',
        commonMistake: 'Confusing *off* with *off of*. (In standard British English, use *off*: *"He stepped **off** the train"*).',
        correctWay: 'Say *"He stepped **off** the platform"* rather than *"off of"*.',
        explanation: '*off of* is redundant in formal British English grammar.'
      }}
    ],
    exercises: [
      {{
        id: 'ex-q1-l2-prep',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which preposition completes this sentence: "The king sat ___ his ornate golden throne in Westminster Abbey."',
        instruction: 'Select the preposition of place.',
        options: ['on', 'during', 'since', 'because'],
        correctIndex: 0,
        explanation: '**on** shows position relative to the throne.'
      }},
      {{
        id: 'ex-q2-l2-prep',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Click the preposition of direction in this sentence.',
        instruction: 'Identify the word showing movement.',
        sentence: 'The red bus drove over the iconic Tower Bridge.',
        words: ['The', 'red', 'bus', 'drove', 'over', 'the', 'iconic', 'Tower', 'Bridge.'],
        targetIndices: [4],
        targetCategoryLabel: 'preposition',
        explanation: '**over** shows movement relative to Tower Bridge.'
      }},
      {{
        id: 'gen-prep-1',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Identify the preposition of time in this sentence: "We must finish our tour before dusk."',
        instruction: 'Select the preposition of time.',
        options: ['must', 'finish', 'before', 'dusk'],
        correctIndex: 2,
        explanation: '"before" shows the temporal relationship relative to dusk.'
      }},
      {{
        id: 'gen2-prep-1',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which sentence contains a prepositional phrase showing place?',
        instruction: 'Find the preposition showing location.',
        options: [
          'She ran quickly.',
          'The book is under the heavy wooden desk.',
          'They will arrive tomorrow.',
          'He spoke loudly.'
        ],
        correctIndex: 1,
        explanation: '"under the heavy wooden desk" is a prepositional phrase showing place.'
      }},
      {{
        id: 'ex-l2-prep-5',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Click the preposition in this sentence.',
        instruction: 'Identify the word showing location.',
        sentence: 'The badger burrowed beneath the roots of the ancient oak.',
        words: ['The', 'badger', 'burrowed', 'beneath', 'the', 'roots', 'of', 'the', 'ancient', 'oak.'],
        targetIndices: [3, 6],
        targetCategoryLabel: 'preposition',
        explanation: '"beneath" (place) and "of" are prepositions.'
      }},
      {{
        id: 'ex-l2-prep-6',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Choose the correct preposition of time: "The museum opens ___ nine o\\'clock in the morning."',
        instruction: 'Select the time preposition.',
        options: ['at', 'on', 'in', 'under'],
        correctIndex: 0,
        explanation: 'Use "at" for specific clock times (at nine o\\'clock).'
      }},
      {{
        id: 'ex-l2-prep-7',
        type: 'sentence-builder',
        difficultyStep: 2,
        prompt: 'Build a sentence with a preposition of direction.',
        instruction: 'Arrange the words correctly.',
        scrambledWords: ['The', 'train', 'sped', 'through', 'the', 'tunnel.'],
        correctSentence: 'The train sped through the tunnel.',
        explanation: '"through" is a preposition showing movement through a space.'
      }},
      {{
        id: 'ex-l2-prep-8',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Spot the redundant preposition phrase.',
        instruction: 'Click on the extra word.',
        sentenceWithMistake: 'The passenger stepped off of the bus at Trafalgar Square.',
        words: ['The', 'passenger', 'stepped', 'off', 'of', 'the', 'bus', 'at', 'Trafalgar', 'Square.'],
        errorWordIndex: 4,
        correctedWord: 'bus',
        ruleViolated: 'Redundant preposition rule',
        explanation: 'In standard British English, write "off the bus" rather than "off of the bus".'
      }},
      {{
        id: 'ex-l2-prep-9',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which preposition belongs in the sentence? "The cottage was nestled ____ two towering hills in the Peak District."',
        instruction: 'Select the preposition showing position between two objects.',
        options: ['between', 'among', 'through', 'during'],
        correctIndex: 0,
        explanation: 'Use "between" when referring to two distinct items.'
      }},
      {{
        id: 'ex-l2-prep-10',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Click the preposition of time: "During the summer holidays, we visited Cardiff Castle."',
        instruction: 'Select the time preposition.',
        sentence: 'During the summer holidays, we visited Cardiff Castle.',
        words: ['During', 'the', 'summer', 'holidays,', 'we', 'visited', 'Cardiff', 'Castle.'],
        targetIndices: [0],
        targetCategoryLabel: 'preposition of time',
        explanation: '"During" indicates a period of time.'
      }},
      {{
        id: 'ex-l2-prep-11',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Select the sentence with the preposition "into".',
        instruction: 'Identify movement entering a space.',
        options: [
          'The otter dived into the cool river water.',
          'The otter swam in the cool river water.',
          'The otter rested on the river bank.',
          'The otter rested beside the river bank.'
        ],
        correctIndex: 0,
        explanation: '"into" indicates movement from outside to inside a space.'
      }},
      {{
        id: 'ex-l2-prep-12',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Assemble a sentence containing a prepositional phrase.',
        instruction: 'Order the words into a sentence.',
        scrambledWords: ['A', 'robin', 'landed', 'upon', 'the', 'wooden', 'fence.'],
        correctSentence: 'A robin landed upon the wooden fence.',
        explanation: '"upon the wooden fence" is a prepositional phrase.'
      }},
      {{
        id: 'ex-l2-prep-13',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Choose the correct preposition: "The team worked tirelessly ____ sunrise until sunset."',
        instruction: 'Select the starting time preposition.',
        options: ['from', 'since', 'at', 'in'],
        correctIndex: 0,
        explanation: 'The structure "from... until..." indicates start and end points.'
      }},
      {{
        id: 'ex-l2-prep-14',
        type: 'word-clicker',
        difficultyStep: 4,
        prompt: 'Click all prepositions in this sentence.',
        instruction: 'Identify all prepositions.',
        sentence: 'After breakfast, we walked along the coast towards the lighthouse.',
        words: ['After', 'breakfast,', 'we', 'walked', 'along', 'the', 'coast', 'towards', 'the', 'lighthouse.'],
        targetIndices: [0, 4, 7],
        targetCategoryLabel: 'preposition',
        explanation: '"After" (time), "along" (direction), and "towards" (direction) are all prepositions.'
      }},
      {{
        id: 'ex-l2-prep-15',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Which preposition correctly completes: "The secret entrance was hidden ____ a heavy velvet curtain."',
        instruction: 'Select the spatial preposition.',
        options: ['behind', 'during', 'since', 'throughout'],
        correctIndex: 0,
        explanation: '"behind" indicates spatial location at the back of something.'
      }}
    ]
  }},

  // 4. CONJUNCTIONS FANBOYS
  {{
    id: 'l2-conjunctions-fanboys',
    slug: 'coordinating-conjunctions-fanboys',
    title: 'Coordinating Conjunctions (FANBOYS)',
    subtitle: 'Uniting words, phrases, and independent clauses with For, And, Nor, But, Or, Yet, and So.',
    level: 'level-2',
    levelLabel: 'Level 2: Foundation',
    levelStage: 'Lower Key Stage 2',
    ageGroup: 'Ages 7–9',
    category: 'sentence-structure',
    categoryLabel: 'Sentence Structure',
    iconName: 'Link',
    estimatedMinutes: 6,
    overview: 'A **coordinating conjunction** connects words, phrases, or clauses of equal grammatical importance. The acronym **FANBOYS** makes them effortless to remember: **F**or, **A**nd, **N**or, **B**ut, **O**r, **Y**et, **S**o.',
    whyItMatters: 'Coordinating conjunctions allow you to connect thoughts smoothly and establish clear logical relationships like contrast, cause, choice, and addition.',
    sections: [
      {{
        id: 'sec-fanboys-breakdown',
        title: '1. The FANBOYS Toolkit & Meanings',
        content: 'Each coordinating conjunction serves a distinct logical purpose:',
        bulletPoints: [
          '**F - For (Reason/Because):** *The hikers rested, **for** they were exhausted after climbing Scafell Pike.*',
          '**A - And (Addition):** *Callum packed his raincoat **and** Isla brought the map.*',
          '**N - Nor (And not - negative choice):** *He did not complain, **nor** did he slow down.*',
          '**B - But (Contrast/Exception):** *The sky was grey, **but** no rain fell over the valley.*',
          '**O - Or (Alternative/Option):** *We can visit the museum, **or** we can explore the botanical gardens.*',
          '**Y - Yet (Unexpected contrast):** *The sea was rough, **yet** the captain navigated safely.*',
          '**S - So (Result/Consequence):** *The storm intensified, **so** the ferry anchored in harbour.*'
        ],
        examples: [
          {{
            id: 'ex-l2-c1',
            sentence: 'The choir sang beautifully, **and** the audience applauded enthusiastically.',
            highlightWords: ['and'],
            explanation: '**and** adds two related ideas together.',
            contextNote: 'Concert performance'
          }},
          {{
            id: 'ex-l2-c2',
            sentence: 'Arthur wanted to buy the vintage compass, **but** he had forgotten his wallet.',
            highlightWords: ['but'],
            explanation: '**but** introduces a contrasting limitation or obstacle.',
            contextNote: 'Antique shop visit'
          }},
          {{
            id: 'ex-l2-c3',
            sentence: 'The mountain pass was blocked by snow, **so** the rescue team took the coastal path.',
            highlightWords: ['so'],
            explanation: '**so** introduces the logical consequence or result of the blocked pass.',
            contextNote: 'Mountain rescue route'
          }}
        ],
        ruleSummary: 'FANBOYS = For, And, Nor, But, Or, Yet, So.'
      }}
    ],
    tipsAndTricks: [
      {{
        id: 'tip-l2-c1',
        title: 'The FANBOYS Acronym Memory Lock',
        trick: 'Recite FANBOYS whenever you need to join two independent clauses. Remember: when joining two full sentences, ALWAYS place a comma right BEFORE the FANBOYS conjunction!',
        mnemonic: 'F-A-N-B-O-Y-S = For, And, Nor, But, Or, Yet, So!',
        commonMistake: 'Putting the comma AFTER the conjunction (e.g. *The wind blew but, we stayed warm*).',
        correctWay: 'Place comma BEFORE: *The wind blew**, but** we stayed warm.*',
        explanation: 'In standard British English, the comma precedes the coordinating conjunction.'
      }}
    ],
    exercises: [
      {{
        id: 'ex-q1-l2-fanboys',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which FANBOYS conjunction shows CONTRAST between two ideas?',
        instruction: 'Select the conjunction showing contrast.',
        options: ['And', 'So', 'But', 'Or'],
        correctIndex: 2,
        explanation: '**But** (and **Yet**) show contrast between two ideas.'
      }},
      {{
        id: 'ex-q2-l2-fanboys',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Click the coordinating conjunction in this sentence.',
        instruction: 'Identify the FANBOYS word.',
        sentence: 'The fog cleared quickly, so the ferry set sail for the Isle of Wight.',
        words: ['The', 'fog', 'cleared', 'quickly,', 'so', 'the', 'ferry', 'set', 'sail', 'for', 'the', 'Isle', 'of', 'Wight.'],
        targetIndices: [4],
        targetCategoryLabel: 'coordinating conjunction',
        explanation: '**so** is the FANBOYS conjunction showing the result.'
      }},
      {{
        id: 'gen-fan-1',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which FANBOYS conjunction best fits: "We wanted to go swimming, ___ the water was far too cold."',
        instruction: 'Select the best conjunction.',
        options: ['so', 'and', 'but', 'or'],
        correctIndex: 2,
        explanation: '"but" shows the contrast between wanting to swim and the water being too cold.'
      }},
      {{
        id: 'gen2-fan-1',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'What does the acronym FANBOYS stand for?',
        instruction: 'Select the correct list of 7 conjunctions.',
        options: [
          'First, And, Next, Because, Or, Yet, So',
          'For, And, Nor, But, Or, Yet, So',
          'For, Also, Never, But, Or, Yes, So',
          'From, And, Nor, Because, On, Yet, Since'
        ],
        correctIndex: 1,
        explanation: 'FANBOYS stands for For, And, Nor, But, Or, Yet, So.'
      }},
      {{
        id: 'ex-l2-fan-5',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Choose the conjunction that shows a RESULT: "The snow began to fall heavily, ___ we rushed inside the mountain hut."',
        instruction: 'Select the result conjunction.',
        options: ['but', 'so', 'or', 'nor'],
        correctIndex: 1,
        explanation: '"so" introduces the result of the heavy snowfall.'
      }},
      {{
        id: 'ex-l2-fan-6',
        type: 'sentence-builder',
        difficultyStep: 2,
        prompt: 'Build a sentence with "yet".',
        instruction: 'Assemble the words into a sentence.',
        scrambledWords: ['The', 'wind', 'was', 'bitter,', 'yet', 'they', 'marched', 'on.'],
        correctSentence: 'The wind was bitter, yet they marched on.',
        explanation: '"yet" shows unexpected contrast.'
      }},
      {{
        id: 'ex-l2-fan-7',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find the misplaced comma around the conjunction.',
        instruction: 'Click the word after which the comma was mistakenly placed.',
        sentenceWithMistake: 'The rain stopped and, the sun shone warmly.',
        words: ['The', 'rain', 'stopped', 'and,', 'the', 'sun', 'shone', 'warmly.'],
        errorWordIndex: 3,
        correctedWord: 'stopped,',
        ruleViolated: 'Comma placement rule',
        explanation: 'The comma belongs BEFORE the conjunction "and" (stopped, and the sun...).'
      }},
      {{
        id: 'ex-l2-fan-8',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Click the FANBOYS conjunction in this sentence.',
        instruction: 'Find the coordinating conjunction.',
        sentence: 'You can choose tea, or you can have hot chocolate.',
        words: ['You', 'can', 'choose', 'tea,', 'or', 'you', 'can', 'have', 'hot', 'chocolate.'],
        targetIndices: [4],
        targetCategoryLabel: 'coordinating conjunction',
        explanation: '"or" is a coordinating conjunction offering an alternative option.'
      }},
      {{
        id: 'ex-l2-fan-9',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which FANBOYS word means "because" or "for this reason"?',
        instruction: 'Select the cause conjunction.',
        options: ['For', 'Nor', 'Yet', 'Or'],
        correctIndex: 0,
        explanation: '"For" when used as a conjunction means "because" (e.g., "He stoked the fire, for it was cold").'
      }},
      {{
        id: 'ex-l2-fan-10',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Build a sentence using "nor".',
        instruction: 'Order the words correctly.',
        scrambledWords: ['He', 'did', 'not', 'rest,', 'nor', 'did', 'he', 'surrender.'],
        correctSentence: 'He did not rest, nor did he surrender.',
        explanation: '"nor" introduces a second negative idea.'
      }},
      {{
        id: 'ex-l2-fan-11',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which sentence correctly joins two clauses with "or"?',
        instruction: 'Identify the sentence with correct comma and conjunction.',
        options: [
          'We can hike up the hill, or we can stroll along the beach.',
          'We can hike up the hill or, we can stroll along the beach.',
          'We can hike up the hill or we, can stroll along the beach.',
          'We can hike up the hill, or, we can stroll along the beach.'
        ],
        correctIndex: 0,
        explanation: 'Place a comma immediately before "or" when joining two independent clauses.'
      }},
      {{
        id: 'ex-l2-fan-12',
        type: 'word-clicker',
        difficultyStep: 4,
        prompt: 'Click the conjunction showing cause in: "They stoked the hearth, for the winter night was freezing."',
        instruction: 'Identify "for" as a conjunction.',
        sentence: 'They stoked the hearth, for the winter night was freezing.',
        words: ['They', 'stoked', 'the', 'hearth,', 'for', 'the', 'winter', 'night', 'was', 'freezing.'],
        targetIndices: [4],
        targetCategoryLabel: 'coordinating conjunction (for)',
        explanation: '"for" is acting as a coordinating conjunction meaning "because".'
      }},
      {{
        id: 'ex-l2-fan-13',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Which FANBOYS conjunction best expresses an unexpected result?',
        instruction: 'Select the conjunction.',
        options: ['Yet', 'And', 'Or', 'So'],
        correctIndex: 0,
        explanation: '"Yet" shows an unexpected contrast or surprising outcome.'
      }},
      {{
        id: 'ex-l2-fan-14',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Find the conjunction used incorrectly.',
        instruction: 'Click the word that breaks the logical meaning.',
        sentenceWithMistake: 'The alarm sounded, or the firefighters responded instantly.',
        words: ['The', 'alarm', 'sounded,', 'or', 'the', 'firefighters', 'responded', 'instantly.'],
        errorWordIndex: 3,
        correctedWord: 'so',
        ruleViolated: 'Logical conjunction choice',
        explanation: 'Use "so" to show result rather than "or" which shows choice.'
      }},
      {{
        id: 'ex-l2-fan-15',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Select the sentence that uses "and" to connect two independent clauses correctly.',
        instruction: 'Look for comma + and.',
        options: [
          'The engine roared, and the train surged forward.',
          'The engine roared and, the train surged forward.',
          'The engine roared, and, the train surged forward.',
          'The engine roared and the train, surged forward.'
        ],
        correctIndex: 0,
        explanation: '"The engine roared, and the train surged forward." uses comma + and correctly.'
      }}
    ]
  }},

  // 5. COMPOUND SENTENCES
  {{
    id: 'l2-compound-sentences',
    slug: 'compound-sentences-coordinating-clauses',
    title: 'Compound Sentences',
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
      {{
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
          {{
            id: 'ex-l2-cmp1',
            sentence: 'The brass band played outside the town hall, **and** the crowd cheered in joyful celebration.',
            highlightWords: ['and'],
            explanation: 'Both "The brass band played outside the town hall" and "the crowd cheered in joyful celebration" are complete standalone sentences joined by ", and".',
            contextNote: 'Community festival'
          }},
          {{
            id: 'ex-l2-cmp2',
            sentence: 'The ferry captain sounded the foghorn twice, **yet** the dense sea mist refused to clear from Plymouth Sound.',
            highlightWords: ['yet'],
            explanation: 'Two independent clauses joined by ", yet", showing unexpected contrast between the signal and the weather.',
            contextNote: 'Coastal maritime scene'
          }},
          {{
            id: 'ex-l2-cmp3',
            sentence: 'David stoked the log fire in the hearth, **for** the winter wind whistled coldly through the Cumbrian valley.',
            highlightWords: ['for'],
            explanation: 'Clause 1 joined to Clause 2 using ", for" to give the reason why David stoked the fire.',
            contextNote: 'Countryside cottage life'
          }}
        ],
        ruleSummary: 'Compound Sentence = Independent Clause + [Comma + FANBOYS] + Independent Clause.'
      }}
    ],
    tipsAndTricks: [
      {{
        id: 'tip-l2-cmp1',
        title: 'The Two-Sentence Test',
        trick: 'Cover up the conjunction. If both sides of your sentence can stand by themselves as complete, grammatically sound sentences, you have successfully built a compound sentence!',
        mnemonic: 'Can both halves stand alone? If yes, it is COMPOUND!',
        commonMistake: 'Creating a **comma splice** by joining two sentences with ONLY a comma and no conjunction (for example: *The trumpets sounded, the orchestra played*).',
        correctWay: 'Add a coordinating conjunction: *The trumpets sounded, **and** the orchestra played.*',
        explanation: 'A comma alone is not strong enough to join two independent clauses in standard British English.'
      }}
    ],
    exercises: [
      {{
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
      }},
      {{
        id: 'ex-q2-l2-cmp',
        type: 'sentence-builder',
        difficultyStep: 2,
        prompt: 'Build a compound sentence from these parts.',
        instruction: 'Assemble the independent clauses and coordinating conjunction in order.',
        scrambledWords: ['Arthur', 'brewed', 'the', 'tea,', 'and', 'Isla', 'baked', 'scones.'],
        correctSentence: 'Arthur brewed the tea, and Isla baked scones.',
        explanation: 'Clause 1: "Arthur brewed the tea" + ", and" + Clause 2: "Isla baked scones".'
      }},
      {{
        id: 'gen-comp-1',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which of the following is a correctly punctuated compound sentence?',
        instruction: 'Select the correct sentence.',
        options: [
          'The sun was shining we decided to go for a walk.',
          'The sun was shining, and we decided to go for a walk.',
          'The sun was shining and, we decided to go for a walk.',
          'The sun was shining and we decided, to go for a walk.'
        ],
        correctIndex: 1,
        explanation: 'A compound sentence needs a comma before the coordinating conjunction (and) that joins the two independent clauses.'
      }},
      {{
        id: 'gen2-comp-1',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which of the following is NOT a compound sentence?',
        instruction: 'Identify the sentence that is simple or complex, but not compound.',
        options: [
          'I like tea, but my sister prefers coffee.',
          'We can go to the beach, or we can stay home.',
          'Because it was raining, we stayed indoors.',
          'He studied hard, so he passed the test.'
        ],
        correctIndex: 2,
        explanation: '"Because it was raining, we stayed indoors" is a complex sentence, using a subordinating conjunction (Because).'
      }},
      {{
        id: 'ex-l2-cmp-5',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Identify the comma splice error.',
        instruction: 'Click the comma where a conjunction should be added.',
        sentenceWithMistake: 'The lightning flashed brightly, the thunder crashed across the moor.',
        words: ['The', 'lightning', 'flashed', 'brightly,', 'the', 'thunder', 'crashed', 'across', 'the', 'moor.'],
        errorWordIndex: 3,
        correctedWord: 'brightly, and',
        ruleViolated: 'Comma splice prohibition',
        explanation: 'A comma alone cannot join two independent clauses; add a FANBOYS conjunction like "and".'
      }},
      {{
        id: 'ex-l2-cmp-6',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Which two simple sentences can be joined to form: "The bell rang, so the children lined up in the playground"?',
        instruction: 'Identify the two underlying independent clauses.',
        options: [
          '"The bell rang" and "the children lined up in the playground"',
          '"The bell rang so" and "the children lined up"',
          '"The bell" and "rang so the children lined up"',
          '"The bell rang" and "so in the playground"'
        ],
        correctIndex: 0,
        explanation: 'The two independent clauses are "The bell rang" and "the children lined up in the playground".'
      }},
      {{
        id: 'ex-l2-cmp-7',
        type: 'sentence-builder',
        difficultyStep: 2,
        prompt: 'Build a compound sentence using "but".',
        instruction: 'Order the words correctly.',
        scrambledWords: ['The', 'climb', 'was', 'steep,', 'but', 'the', 'view', 'was', 'rewarding.'],
        correctSentence: 'The climb was steep, but the view was rewarding.',
        explanation: 'Combines two independent thoughts with contrast.'
      }},
      {{
        id: 'ex-l2-cmp-8',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which sentence is a SIMPLE sentence, NOT a compound sentence?',
        instruction: 'Spot the sentence with only one main verb idea.',
        options: [
          'Isla and Callum ate lunch and drank apple juice.',
          'Isla ate lunch, and Callum drank apple juice.',
          'The sun set, so the temperature dropped quickly.',
          'We searched for the cave, but we found nothing.'
        ],
        correctIndex: 0,
        explanation: '"Isla and Callum ate lunch and drank apple juice" is a simple sentence with a compound subject and compound verb (no separate second subject).'
      }},
      {{
        id: 'ex-l2-cmp-9',
        type: 'clause-matcher',
        difficultyStep: 3,
        prompt: 'Identify the two clauses in this compound sentence.',
        instruction: 'Break down the clauses.',
        sentence: 'The train arrived on time, but the station master was missing.',
        mainClause: 'The train arrived on time',
        subordinateClause: 'the station master was missing',
        conjunctionOrConnective: 'but',
        explanation: 'Both "The train arrived on time" and "the station master was missing" are independent clauses joined by "but".'
      }},
      {{
        id: 'ex-l2-cmp-10',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Click the coordinating conjunction joining the two clauses.',
        instruction: 'Find the FANBOYS word.',
        sentence: 'The lighthouse keeper lit the lamp, for night was falling fast.',
        words: ['The', 'lighthouse', 'keeper', 'lit', 'the', 'lamp,', 'for', 'night', 'was', 'falling', 'fast.'],
        targetIndices: [6],
        targetCategoryLabel: 'coordinating conjunction',
        explanation: '"for" is the coordinating conjunction joining the two independent clauses.'
      }},
      {{
        id: 'ex-l2-cmp-11',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'How can you fix a comma splice like: "The tide rose, the fishermen pulled in their nets"?',
        instruction: 'Select the correct correction.',
        options: [
          'The tide rose, so the fishermen pulled in their nets.',
          'The tide rose the fishermen pulled in their nets.',
          'The tide rose, and, the fishermen pulled in their nets.',
          'The tide rose so, the fishermen pulled in their nets.'
        ],
        correctIndex: 0,
        explanation: 'Adding ", so" fixes the comma splice by properly joining the two independent clauses.'
      }},
      {{
        id: 'ex-l2-cmp-12',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Build a compound sentence using "for".',
        instruction: 'Arrange the words correctly.',
        scrambledWords: ['We', 'stayed', 'indoors,', 'for', 'the', 'gale', 'was', 'raging.'],
        correctSentence: 'We stayed indoors, for the gale was raging.',
        explanation: 'Clause 1 + ", for" + Clause 2.'
      }},
      {{
        id: 'ex-l2-cmp-13',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Which of the following compound sentences uses "yet" correctly?',
        instruction: 'Identify correct comma and usage.',
        options: [
          'The athlete was exhausted, yet she pushed forward across the finish line.',
          'The athlete was exhausted yet, she pushed forward across the finish line.',
          'The athlete was exhausted, yet, she pushed forward across the finish line.',
          'The athlete was exhausted yet she, pushed forward across the finish line.'
        ],
        correctIndex: 0,
        explanation: 'Comma belongs before "yet" when connecting independent clauses.'
      }},
      {{
        id: 'ex-l2-cmp-14',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Spot the missing comma before the FANBOYS conjunction.',
        instruction: 'Click the word that should have a comma after it.',
        sentenceWithMistake: 'The owl hooted in the oak tree and the bats fluttered through the night air.',
        words: ['The', 'owl', 'hooted', 'in', 'the', 'oak', 'tree', 'and', 'the', 'bats', 'fluttered', 'through', 'the', 'night', 'air.'],
        errorWordIndex: 6,
        correctedWord: 'tree,',
        ruleViolated: 'Comma before coordinating conjunction',
        explanation: 'In a compound sentence, place a comma before "and" when joining independent clauses.'
      }},
      {{
        id: 'ex-l2-cmp-15',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Which test confirms a sentence is compound rather than complex?',
        instruction: 'Select the correct test.',
        options: [
          'Cover up the conjunction: both halves can stand alone as complete sentences.',
          'Cover up the verb: the subject disappears.',
          'Cover up the capital letter: it becomes lowercase.',
          'Check if it starts with "Because" or "If".'
        ],
        correctIndex: 0,
        explanation: 'If both halves stand alone as complete sentences when the conjunction is removed, it is a compound sentence.'
      }}
    ]
  }},

  // 6. APOSTROPHES
  {{
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
    overview: 'In British English, the **apostrophe (\\')** has only TWO legitimate purposes: **omission/contraction** (showing where letters have been left out) and **possession** (showing who owns what). It is NEVER used to make words plural!',
    whyItMatters: 'Misplaced apostrophes (like the infamous "greengrocer\\'s apostrophe" on signs) look sloppy and change the meaning of sentences.',
    sections: [
      {{
        id: 'sec-apostrophe-contraction',
        title: '1. Apostrophes of Contraction (Omission)',
        content: 'When two words are squeezed together into one shorter word, the apostrophe marks the exact spot where letters have been removed:',
        bulletPoints: [
          '**do not -> don\\'t** (the apostrophe replaces \\'o\\') (for example: *We **don\\'t** fear the chilly mountain mist*).',
          '**is not -> isn\\'t** (the apostrophe replaces \\'o\\') (for example: *The elusive badger **isn\\'t** easy to spot*).',
          '**they have -> they\\'ve** (the apostrophe replaces \\'ha\\') (for example: ***They\\'ve** arrived in Belfast for the festival*).',
          '**I would / I had -> I\\'d** (the apostrophe replaces \\'woul\\' or \\'ha\\') (for example: ***I\\'d** love to visit the Giant\\'s Causeway*).',
          '**will not -> won\\'t** (an irregular contraction) (for example: *The ferry **won\\'t** depart in high gale-force winds*).'
        ],
        examples: [
          {{
            id: 'ex-l2-ap1',
            sentence: '**We\\'ll** take the morning train to Cardiff if **it\\'s** running on time.',
            highlightWords: ["We'll", "it's"],
            explanation: "**We'll** stands for *we will*; **it's** stands for *it is*.",
            contextNote: 'UK travel planning'
          }},
          {{
            id: 'ex-l2-ap2',
            sentence: 'Callum **couldn\\'t** find his hiking compass, so he **didn\\'t** join the morning expedition.',
            highlightWords: ["couldn't", "didn't"],
            explanation: "**Couldn't** = could not; **didn't** = did not.",
            contextNote: 'Outdoor expedition'
          }},
          {{
            id: 'ex-l2-ap3',
            sentence: '**They\\'re** hiking along the scenic trails of the Peak District National Park.',
            highlightWords: ["They're"],
            explanation: "**They're** is a contraction for *they are*, with the apostrophe replacing the letter 'a'.",
            contextNote: 'Peak District trekking'
          }}
        ],
        ruleSummary: 'The apostrophe sits exactly where the missing letters used to be.'
      }},
      {{
        id: 'sec-apostrophe-singular-possession',
        title: '2. Singular Possession (\\'s)',
        content: 'To show that something belongs to ONE person, creature, or thing, add **\\'s** directly after the singular noun.',
        bulletPoints: [
          'The whistle belonging to the referee -> the **referee\\'s** whistle (for example: *The **referee\\'s** whistle echoed across Wembley Stadium*).',
          'The telescope belonging to the astronomer -> the **astronomer\\'s** telescope (for example: *The **astronomer\\'s** observatory stood atop the hill*).',
          'The stag belonging to the forest -> the **stag\\'s** antlers (for example: *The **stag\\'s** magnificent antlers were silhouetted against the morning sky*).',
          'A name ending in \\'s\\': James, Charles -> **James\\'s** or **Charles\\'s** (for example: *We read King **Charles\\'s** coronation address*).'
        ],
        examples: [
          {{
            id: 'ex-l2-ap4',
            sentence: 'The **red kite\\'s** nest was perched high upon the oak tree in the Welsh valley.',
            highlightWords: ["red kite's"],
            explanation: 'The nest belongs to ONE red kite, so we add **\\'s** after the singular noun.',
            contextNote: 'Valley wildlife habitat'
          }},
          {{
            id: 'ex-l2-ap5',
            sentence: '**Emma\\'s** grandmother baked the most delectable warm scones in the village.',
            highlightWords: ["Emma's"],
            explanation: 'Singular possession: the grandmother of Emma.',
            contextNote: 'Family baking tradition'
          }},
          {{
            id: 'ex-l2-ap6',
            sentence: 'The **Exmoor pony\\'s** thick, shaggy coat protected it from freezing winter rain.',
            highlightWords: ["Exmoor pony's"],
            explanation: 'The shaggy coat belongs to ONE Exmoor pony (singular possession).',
            contextNote: 'Animal adaptation'
          }}
        ],
        ruleSummary: 'Singular noun + \\'s = ownership belonging to one individual thing.'
      }}
    ],
    tipsAndTricks: [
      {{
        id: 'tip-l2-ap1',
        title: 'The Ultimate "It\\'s vs Its" Rule',
        trick: '**It\\'s** ALWAYS means **it is** or **it has**. If you cannot substitute "it is", then use **its** (possessive pronoun).',
        mnemonic: 'If you can say "it is", use the apostrophe: IT\\'S!',
        commonMistake: 'Writing *"The pony swished it\\'s tail"*. (Incorrect!)',
        correctWay: 'Write *"The pony swished **its** tail"* (Because you would never say *"The pony swished it is tail"*).',
        explanation: 'Possessive pronouns like its, his, hers, ours, and theirs never take apostrophes.'
      }}
    ],
    exercises: [
      {{
        id: 'ex-q1-l2-ap',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Choose the correct form: "The clever red fox cleaned ___ paws after hunting."',
        instruction: 'Select its or it\\'s.',
        options: ["it\\'s", "its", "its'", "it is'"],
        correctIndex: 1,
        explanation: '**its** is the possessive pronoun showing that the fox owns its paws.'
      }},
      {{
        id: 'ex-q2-l2-ap',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find the word with the incorrect greengrocer\\'s apostrophe.',
        instruction: 'Click on the plural word that should not have an apostrophe.',
        sentenceWithMistake: 'Fresh apple\\'s and crisp oatcakes are on sale at the farmers market.',
        words: ['Fresh', "apple's", 'and', 'crisp', 'oatcakes', 'are', 'on', 'sale.'],
        errorWordIndex: 1,
        correctedWord: 'apples',
        ruleViolated: 'Never use an apostrophe to make a simple plural noun.',
        explanation: 'The plural of apple is simply **apples** (no ownership or contraction is being shown).'
      }},
      {{
        id: 'gen-apo-1',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Find the word with the incorrect apostrophe.',
        instruction: 'Click the word with the apostrophe error.',
        sentenceWithMistake: 'The cat chased it\\'s tail around the garden.',
        words: ['The', 'cat', 'chased', "it's", 'tail', 'around', 'the', 'garden.'],
        errorWordIndex: 3,
        correctedWord: 'its',
        ruleViolated: 'Grammar Rule',
        explanation: '"its" (without an apostrophe) is the possessive form. "it\\'s" is a contraction for "it is" or "it has".'
      }},
      {{
        id: 'gen2-apo-1',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Choose the correct plural possessive form: "The ___ coats were left in the hallway."',
        instruction: 'Select the form that means "the coats belonging to the children".',
        options: ['childrens', "childrens'", "children's", "childrens's"],
        correctIndex: 2,
        explanation: '"Children" is already an irregular plural, so we just add \\'s to show possession.'
      }},
      {{
        id: 'ex-l2-ap-5',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Which contraction stands for "do not"?',
        instruction: 'Select the correct contraction.',
        options: ["don't", "dont'", "do'nt", "d'ont"],
        correctIndex: 0,
        explanation: "don't places the apostrophe where the 'o' was removed from 'not'."
      }},
      {{
        id: 'ex-l2-ap-6',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Click the word with an apostrophe of contraction.',
        instruction: 'Identify the shortened word.',
        sentence: 'They didn\\'t catch the early train to York.',
        words: ['They', "didn't", 'catch', 'the', 'early', 'train', 'to', 'York.'],
        targetIndices: [1],
        targetCategoryLabel: 'contraction',
        explanation: "didn't is a contraction for 'did not'."
      }},
      {{
        id: 'ex-l2-ap-7',
        type: 'sentence-builder',
        difficultyStep: 2,
        prompt: 'Build a sentence with a singular possessive noun.',
        instruction: 'Assemble the words correctly.',
        scrambledWords: ["Callum's", 'dog', 'barked', 'at', 'the', 'postman.'],
        correctSentence: "Callum's dog barked at the postman.",
        explanation: "Callum's shows that the dog belongs to Callum."
      }},
      {{
        id: 'ex-l2-ap-8',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find the incorrect plural apostrophe in this menu sign.',
        instruction: 'Click the word with the greengrocer\\'s apostrophe.',
        sentenceWithMistake: 'Fresh carrot\\'s and crisp lettuce on sale today.',
        words: ['Fresh', "carrot's", 'and', 'crisp', 'lettuce', 'on', 'sale', 'today.'],
        errorWordIndex: 1,
        correctedWord: 'carrots',
        ruleViolated: 'Plural apostrophe prohibition',
        explanation: 'Simple plural nouns like carrots do not take an apostrophe.'
      }},
      {{
        id: 'ex-l2-ap-9',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which sentence correctly uses "it\\'s"?',
        instruction: 'Identify where "it\\'s" stands for "it is".',
        options: [
          'It\\'s a beautiful morning over the Lake District.',
          'The bird flapped it\\'s wings in the wind.',
          'The dog wagged it\\'s tail happily.',
          'The car lost it\\'s front wheel.'
        ],
        correctIndex: 0,
        explanation: '"It\\'s a beautiful morning" = "It is a beautiful morning". The others are possessive pronouns that must be "its".'
      }},
      {{
        id: 'ex-l2-ap-10',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Click the noun showing singular possession.',
        instruction: 'Select the possessive noun.',
        sentence: 'The owl\\'s sharp eyes scanned the dark field.',
        words: ['The', "owl's", 'sharp', 'eyes', 'scanned', 'the', 'dark', 'field.'],
        targetIndices: [1],
        targetCategoryLabel: 'singular possessive noun',
        explanation: "owl's shows that the sharp eyes belong to one owl."
      }},
      {{
        id: 'ex-l2-ap-11',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'What words make up the contraction "won\\'t"?',
        instruction: 'Select the original two words.',
        options: ['will not', 'would not', 'was not', 'were not'],
        correctIndex: 0,
        explanation: '"won\\'t" is an irregular contraction formed from "will not".'
      }},
      {{
        id: 'ex-l2-ap-12',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Build a sentence using "it\\'s".',
        instruction: 'Arrange the words correctly.',
        scrambledWords: ["It's", 'time', 'to', 'board', 'the', 'ferry.'],
        correctSentence: "It's time to board the ferry.",
        explanation: "It's = It is."
      }},
      {{
        id: 'ex-l2-ap-13',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Find the misplaced contraction apostrophe.',
        instruction: 'Click the word with the apostrophe in the wrong place.',
        sentenceWithMistake: 'We is\\'nt going to miss the museum tour.',
        words: ['We', "is'nt", 'going', 'to', 'miss', 'the', 'museum', 'tour.'],
        errorWordIndex: 1,
        correctedWord: "isn't",
        ruleViolated: 'Apostrophe position in contraction',
        explanation: 'The apostrophe belongs between n and t (isn\\'t) where the letter o was omitted.'
      }},
      {{
        id: 'ex-l2-ap-14',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Which option shows correct singular possession for a name ending in s (e.g. James)?',
        instruction: 'Select the standard British English form.',
        options: [
          "James's bicycle",
          "Jame's bicycle",
          "Jamess' bicycle",
          "James's' bicycle"
        ],
        correctIndex: 0,
        explanation: 'In standard British English, singular possession for names ending in s adds \\'s (James\\'s bicycle).'
      }},
      {{
        id: 'ex-l2-ap-15',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Which sentence contains NO apostrophe errors?',
        instruction: 'Identify the flawless sentence.',
        options: [
          'Arthur\\'s backpack is heavy, but he hasn\\'t complained.',
          'Arthurs backpack is heavy, but he has\\'nt complained.',
          'Arthur\\'s backpack is heavy, but he hasnt\\' complained.',
          'Arthurs\\' backpack is heavy, but he hasn\\'t complained.'
        ],
        correctIndex: 0,
        explanation: 'Arthur\\'s (singular possession) and hasn\\'t (has not contraction) are both correctly punctuated.'
      }}
    ]
  }},

  // 7. LEVEL 2 FINAL ASSESSMENT (50 Questions)
  {{
    id: 'l2-final-assessment',
    slug: 'level-2-final-assessment',
    title: 'Level 2: Final Assessment (50 Questions)',
    subtitle: 'The ultimate Lower KS2 mastery test covering Pronouns, Adverbs, Prepositions, FANBOYS Conjunctions, Compound Sentences, and Apostrophes.',
    level: 'level-2',
    levelLabel: 'Level 2: Final Test',
    levelStage: 'Lower Key Stage 2',
    ageGroup: 'Ages 7–9',
    category: 'sentence-structure',
    categoryLabel: 'Level 2 Master Exam',
    iconName: 'Award',
    estimatedMinutes: 20,
    overview: 'Test everything you have learned in Level 2! This final assessment features **50 questions** spanning all 6 Level 2 topics (8-9 questions per topic). Answer carefully and read the concise explanations with feedback icons to earn your Level 2 Gold Badge!',
    whyItMatters: 'Demonstrating mastery across all Level 2 topics earns you the Lower KS2 Explorer badge and unlocks Level 3: Intermediate!',
    sections: [
      {{
        id: 'sec-l2-fa-overview',
        title: 'Assessment Guidelines & Advice',
        content: 'Work through each question step by step. Every question includes clear feedback icons (✔ for correct and ✖ for incorrect choices) so you can understand why each option is right or wrong.',
        bulletPoints: [
          '**8 Questions on Pronouns:** Personal, Possessive, and Polite Subject Forms.',
          '**8 Questions on Adverbs:** Manner, Time, Place, Frequency, and -ly exceptions.',
          '**8 Questions on Prepositions:** Place, Time, Direction, and Prepositional Phrases.',
          '**9 Questions on FANBOYS Conjunctions:** For, And, Nor, But, Or, Yet, So.',
          '**9 Questions on Compound Sentences:** Connecting Independent Clauses & Comma Rules.',
          '**8 Questions on Apostrophes:** Contractions, Singular Possession, and Plural Errors.'
        ],
        examples: [
          {{
            id: 'ex-l2-fa-sample',
            sentence: 'The **red kite** glided **gracefully**, **and** the **owl** watched **from** **its** perch.',
            explanation: '✔ **gracefully** (adverb), **and** (FANBOYS conjunction), **from** (preposition), **its** (possessive pronoun). Understanding word classes is the key to passing this exam!',
            contextNote: 'Lower KS2 Final Assessment Sample'
          }}
        ],
        ruleSummary: 'Read each sentence slowly, pick the best answer, and review the feedback icons.'
      }}
    ],
    tipsAndTricks: [
      {{
        id: 'tip-l2-fa-1',
        title: 'Final Exam Tip: The Category Check',
        trick: 'Ask yourself: Is this word replacing a noun (pronoun), describing an action (adverb), showing position/time (preposition), joining clauses (FANBOYS), or marking missing letters/possession (apostrophe)?',
        mnemonic: 'Pronoun replaces, Adverb describes, Preposition positions, FANBOYS connects!',
        commonMistake: 'Rushing through without checking comma placement before FANBOYS conjunctions.',
        correctWay: 'Always check that a comma sits directly BEFORE the FANBOYS conjunction in compound sentences.',
        explanation: 'Taking time to verify punctuation prevents simple errors.'
      }}
    ],
    exercises: {json.dumps(fa_exercises, indent=4)}
  }}
];
"""

with open('src/data/level2.ts', 'w') as f:
    f.write(ts_code)

print("Successfully generated src/data/level2.ts!")


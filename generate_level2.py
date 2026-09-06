import json

# Let's create the 50 Final Assessment questions for Level 2
# Covering 6 topics:
# 1. Pronouns (8 Qs)
# 2. Adverbs (8 Qs)
# 3. Prepositions (8 Qs)
# 4. FANBOYS Conjunctions (9 Qs)
# 5. Compound Sentences (9 Qs)
# 6. Apostrophes (8 Qs)
# Total = 50 Qs!

final_assessment_exercises = [
  # Topic 1: Pronouns (1-8)
  {
    "id": "l2-fa-q1",
    "type": "multiple-choice",
    "difficultyStep": 1,
    "prompt": "[Pronouns] Which subject pronoun correctly completes: '____ explored the prehistoric caves at Cheddar Gorge.'",
    "instruction": "Pick the correct subject pronoun.",
    "options": ["Us", "They", "Them", "Him"],
    "correctIndex": 1,
    "explanation": "✔ **They** is a subject pronoun doing the action. ✖ Us/Them/Him are object pronouns."
  },
  {
    "id": "l2-fa-q2",
    "type": "word-clicker",
    "difficultyStep": 1,
    "prompt": "[Pronouns] Click the object pronoun in this sentence.",
    "instruction": "Identify the word receiving the action.",
    "sentence": "The park ranger guided us safely across the river.",
    "words": ["The", "park", "ranger", "guided", "us", "safely", "across", "the", "river."],
    "targetIndices": [4],
    "targetCategoryLabel": "object pronoun",
    "explanation": "✔ **us** is the object pronoun receiving the action of guided. ✖ 'ranger' is a noun."
  },
  {
    "id": "l2-fa-q3",
    "type": "multiple-choice",
    "difficultyStep": 2,
    "prompt": "[Pronouns] Which possessive pronoun correctly completes: 'The winning trophy is ____.'",
    "instruction": "Select the possessive pronoun without an apostrophe.",
    "options": ["our's", "ours", "oures", "our's'"],
    "correctIndex": 1,
    "explanation": "✔ **ours** is a possessive pronoun without an apostrophe. ✖ Possessive pronouns never take apostrophes."
  },
  {
    "id": "l2-fa-q4",
    "type": "error-detective",
    "difficultyStep": 2,
    "prompt": "[Pronouns] Spot the pronoun error in this sentence.",
    "instruction": "Click the incorrect pronoun.",
    "sentenceWithMistake": "Me and Arthur visited the science museum in London.",
    "words": ["Me", "and", "Arthur", "visited", "the", "science", "museum", "in", "London."],
    "errorWordIndex": 0,
    "correctedWord": "I",
    "ruleViolated": "Polite subject pronoun rule",
    "explanation": "✔ Use subject pronoun **I** ('Arthur and I visited'). ✖ 'Me' is an object pronoun."
  },
  {
    "id": "l2-fa-q5",
    "type": "multiple-choice",
    "difficultyStep": 2,
    "prompt": "[Pronouns] Choose the correct pronoun: 'Isla gave ____ her spare pencil.'",
    "instruction": "Select the object pronoun.",
    "options": ["he", "him", "they", "she"],
    "correctIndex": 1,
    "explanation": "✔ **him** is the object pronoun receiving the pencil. ✖ 'he/they/she' are subject pronouns."
  },
  {
    "id": "l2-fa-q6",
    "type": "sentence-builder",
    "difficultyStep": 3,
    "prompt": "[Pronouns] Build a sentence using a possessive pronoun.",
    "instruction": "Arrange the words into a sentence.",
    "scrambledWords": ["The", "golden", "compass", "was", "hers."],
    "correctSentence": "The golden compass was hers.",
    "explanation": "✔ **hers** is a possessive pronoun replacing 'her compass'."
  },
  {
    "id": "l2-fa-q7",
    "type": "multiple-choice",
    "difficultyStep": 3,
    "prompt": "[Pronouns] Identify the pronoun that replaces 'the children': 'The teacher gave ____ a star sticker.'",
    "instruction": "Select the plural object pronoun.",
    "options": ["them", "they", "their", "themselves"],
    "correctIndex": 0,
    "explanation": "✔ **them** is the object pronoun replacing 'the children'."
  },
  {
    "id": "l2-fa-q8",
    "type": "multiple-choice",
    "difficultyStep: 3",
    "prompt": "[Pronouns] Which sentence uses pronouns politely and grammatically?",
    "instruction": "Select the polite subject phrase.",
    "options": [
      "Me and Callum went hiking.",
      "Callum and I went hiking.",
      "I and Callum went hiking.",
      "Callum and me went hiking."
    ],
    "correctIndex": 1,
    "explanation": "✔ **Callum and I** puts the other person first and uses subject pronoun 'I'."
  },

  # Topic 2: Adverbs (9-16)
  {
    "id": "l2-fa-q9",
    "type": "multiple-choice",
    "difficultyStep": 1,
    "prompt": "[Adverbs] Identify the adverb of manner in: 'The red kite soared gracefully over the valley.'",
    "instruction": "Find the word telling HOW it soared.",
    "options": ["red", "soared", "gracefully", "valley"],
    "correctIndex": 2,
    "explanation": "✔ **gracefully** describes HOW the kite soared. ✖ 'red' is an adjective."
  },
  {
    "id": "l2-fa-q10",
    "type": "word-clicker",
    "difficultyStep": 1,
    "prompt": "[Adverbs] Click the adverb of time in this sentence.",
    "instruction": "Identify the word telling WHEN.",
    "sentence": "Tomorrow we will visit Edinburgh Castle.",
    "words": ["Tomorrow", "we", "will", "visit", "Edinburgh", "Castle."],
    "targetIndices": [0],
    "targetCategoryLabel": "adverb of time",
    "explanation": "✔ **Tomorrow** tells us WHEN the visit will happen."
  },
  {
    "id": "l2-fa-q11",
    "type": "multiple-choice",
    "difficultyStep": 2,
    "prompt": "[Adverbs] Which word is an adverb of place? 'The children searched ____ for the lost dog.'",
    "instruction": "Select the word telling WHERE.",
    "options": ["everywhere", "yesterday", "silently", "frequently"],
    "correctIndex": 0,
    "explanation": "✔ **everywhere** tells us WHERE they searched. ✖ 'yesterday' is time; 'silently' is manner."
  },
  {
    "id": "l2-fa-q12",
    "type": "error-detective",
    "difficultyStep": 2,
    "prompt": "[Adverbs] Spot the incorrect adverb form.",
    "instruction": "Click the non-existent word.",
    "sentenceWithMistake": "The greyhound ran fastly to win the trophy.",
    "words": ["The", "greyhound", "ran", "fastly", "to", "win", "the", "trophy."],
    "errorWordIndex": 3,
    "correctedWord": "fast",
    "ruleViolated": "Irregular adverb 'fast'",
    "explanation": "✔ The adverb form of 'fast' is **fast** (not fastly)."
  },
  {
    "id": "l2-fa-q13",
    "type": "sentence-builder",
    "difficultyStep": 2,
    "prompt": "[Adverbs] Build a sentence with an adverb of manner.",
    "instruction": "Order the words correctly.",
    "scrambledWords": ["The", "stream", "flowed", "swiftly", "downstream."],
    "correctSentence": "The stream flowed swiftly downstream.",
    "explanation": "✔ **swiftly** describes how the stream flowed."
  },
  {
    "id": "l2-fa-q14",
    "type": "multiple-choice",
    "difficultyStep": 3,
    "prompt": "[Adverbs] Which sentence contains an adverb of frequency?",
    "instruction": "Select the sentence answering 'how often?'.",
    "options": [
      "The owl flew silently.",
      "She always eats breakfast at seven.",
      "The dog slept outside.",
      "They arrived early."
    ],
    "correctIndex": 1,
    "explanation": "✔ **always** tells us how often she eats breakfast."
  },
  {
    "id": "l2-fa-q15",
    "type": "multiple-choice",
    "difficultyStep": 3,
    "prompt": "[Adverbs] Which of the following -ly words is an ADJECTIVE, not an adverb?",
    "instruction": "Find the word describing a noun.",
    "options": ["quietly", "lovely", "patiently", "eagerly"],
    "correctIndex": 1,
    "explanation": "✔ **lovely** is an adjective ('a lovely day'). ✖ quietly/patiently/eagerly are adverbs."
  },
  {
    "id": "l2-fa-q16",
    "type": "word-clicker",
    "difficultyStep": 3,
    "prompt": "[Adverbs] Click the adverb modifying an adjective in: 'The weather was surprisingly warm.'",
    "instruction": "Identify the adverb modifying 'warm'.",
    "sentence": "The weather was surprisingly warm today.",
    "words": ["The", "weather", "was", "surprisingly", "warm", "today."],
    "targetIndices": [3],
    "targetCategoryLabel": "adverb",
    "explanation": "✔ **surprisingly** modifies the adjective 'warm'."
  },

  # Topic 3: Prepositions (17-24)
  {
    "id": "l2-fa-q17",
    "type": "multiple-choice",
    "difficultyStep": 1,
    "prompt": "[Prepositions] Choose the preposition of place: 'The cat slept ___ the warm radiator.'",
    "instruction": "Select the position preposition.",
    "options": ["beside", "during", "since", "because"],
    "correctIndex": 0,
    "explanation": "✔ **beside** shows location relative to the radiator."
  },
  {
    "id": "l2-fa-q18",
    "type": "word-clicker",
    "difficultyStep": 1,
    "prompt": "[Prepositions] Click the preposition of direction in this sentence.",
    "instruction": "Identify movement across a space.",
    "sentence": "The ferry sailed across the English Channel.",
    "words": ["The", "ferry", "sailed", "across", "the", "English", "Channel."],
    "targetIndices": [3],
    "targetCategoryLabel": "preposition of direction",
    "explanation": "✔ **across** shows direction of travel."
  },
  {
    "id": "l2-fa-q19",
    "type": "multiple-choice",
    "difficultyStep": 2,
    "prompt": "[Prepositions] Which preposition of time correctly fits: 'We will meet ___ five o'clock.'",
    "instruction": "Select the exact clock time preposition.",
    "options": ["at", "on", "in", "under"],
    "correctIndex": 0,
    "explanation": "✔ Use **at** for specific clock times."
  },
  {
    "id": "l2-fa-q20",
    "type": "error-detective",
    "difficultyStep": 2,
    "prompt": "[Prepositions] Spot the extra redundant preposition word.",
    "instruction": "Click the unnecessary word.",
    "sentenceWithMistake": "Isla stepped off of the boat at the pier.",
    "words": ["Isla", "stepped", "off", "of", "the", "boat", "at", "the", "pier."],
    "errorWordIndex": 3,
    "correctedWord": "boat",
    "ruleViolated": "Redundant preposition rule",
    "explanation": "✔ Write 'off the boat' rather than 'off of the boat'."
  },
  {
    "id": "l2-fa-q21",
    "type": "sentence-builder",
    "difficultyStep": 2,
    "prompt": "[Prepositions] Build a sentence with a prepositional phrase.",
    "instruction": "Order the words into a complete sentence.",
    "scrambledWords": ["The", "fox", "ran", "through", "the", "dense", "forest."],
    "correctSentence": "The fox ran through the dense forest.",
    "explanation": "✔ **through the dense forest** is a prepositional phrase."
  },
  {
    "id": "l2-fa-q22",
    "type": "multiple-choice",
    "difficultyStep": 3,
    "prompt": "[Prepositions] Which preposition shows position between two objects?",
    "instruction": "Select the correct word.",
    "options": ["between", "among", "through", "during"],
    "correctIndex": 0,
    "explanation": "✔ **between** refers to position relative to two items."
  },
  {
    "id": "l2-fa-q23",
    "type": "multiple-choice",
    "difficultyStep": 3,
    "prompt": "[Prepositions] Select the sentence where 'into' shows movement inside.",
    "instruction": "Choose the movement sentence.",
    "options": [
      "The diver leaped into the cool sea.",
      "The diver swam in the cool sea.",
      "The diver rested on the beach.",
      "The diver waited by the shore."
    ],
    "correctIndex": 0,
    "explanation": "✔ **into** shows movement entering the water."
  },
  {
    "id": "l2-fa-q24",
    "type": "word-clicker",
    "difficultyStep": 3,
    "prompt": "[Prepositions] Click the time preposition in: 'During the storm, we stayed warm indoors.'",
    "instruction": "Select the preposition indicating duration.",
    "sentence": "During the storm, we stayed warm indoors.",
    "words": ["During", "the", "storm,", "we", "stayed", "warm", "indoors."],
    "targetIndices": [0],
    "targetCategoryLabel": "preposition of time",
    "explanation": "✔ **During** is a preposition of time indicating a period."
  },

  # Topic 4: FANBOYS Conjunctions (25-33)
  {
    "id": "l2-fa-q25",
    "type": "multiple-choice",
    "difficultyStep": 1,
    "prompt": "[FANBOYS] Which FANBOYS conjunction shows RESULT?",
    "instruction": "Select the conjunction indicating result.",
    "options": ["So", "But", "Or", "Nor"],
    "correctIndex": 0,
    "explanation": "✔ **So** shows consequence or result. ✖ But shows contrast."
  },
  {
    "id": "l2-fa-q26",
    "type": "word-clicker",
    "difficultyStep": 1,
    "prompt": "[FANBOYS] Click the coordinating conjunction in this sentence.",
    "instruction": "Identify the FANBOYS word.",
    "sentence": "The orchestra played, and the audience applauded.",
    "words": ["The", "orchestra", "played,", "and", "the", "audience", "applauded."],
    "targetIndices": [3],
    "targetCategoryLabel": "coordinating conjunction",
    "explanation": "✔ **and** is the coordinating conjunction joining two clauses."
  },
  {
    "id": "l2-fa-q27",
    "type": "multiple-choice",
    "difficultyStep": 2,
    "prompt": "[FANBOYS] Which conjunction fits best: 'He was tired, ___ he continued running.'",
    "instruction": "Select the contrast conjunction.",
    "options": ["yet", "so", "or", "for"],
    "correctIndex": 0,
    "explanation": "✔ **yet** shows unexpected contrast."
  },
  {
    "id": "l2-fa-q28",
    "type": "error-detective",
    "difficultyStep": 2,
    "prompt": "[FANBOYS] Spot the misplaced comma around 'but'.",
    "instruction": "Click the word after which the comma was placed incorrectly.",
    "sentenceWithMistake": "The wind blew hard but, we reached the summit.",
    "words": ["The", "wind", "blew", "hard", "but,", "we", "reached", "the", "summit."],
    "errorWordIndex": 4,
    "correctedWord": "hard,",
    "ruleViolated": "Comma placement before conjunction",
    "explanation": "✔ Place comma BEFORE 'but' (hard, but we...)."
  },
  {
    "id": "l2-fa-q29",
    "type": "sentence-builder",
    "difficultyStep": 2,
    "prompt": "[FANBOYS] Build a sentence using 'or'.",
    "instruction": "Arrange the words into a sentence.",
    "scrambledWords": ["We", "can", "walk,", "or", "we", "can", "take", "the", "bus."],
    "correctSentence": "We can walk, or we can take the bus.",
    "explanation": "✔ **or** connects two choices."
  },
  {
    "id": "l2-fa-q30",
    "type": "multiple-choice",
    "difficultyStep": 3,
    "prompt": "[FANBOYS] What does 'for' mean when used as a FANBOYS conjunction?",
    "instruction": "Select the meaning of 'for'.",
    "options": ["because", "after", "although", "unless"],
    "correctIndex": 0,
    "explanation": "✔ **for** means 'because' or 'since' as a coordinating conjunction."
  },
  {
    "id": "l2-fa-q31",
    "type": "multiple-choice",
    "difficultyStep": 3,
    "prompt": "[FANBOYS] Which sentence correctly uses 'nor'?",
    "instruction": "Identify the negative addition sentence.",
    "options": [
      "He did not complain, nor did he quit.",
      "He did not complain nor, did he quit.",
      "He did not complain, nor, did he quit.",
      "He did not complain nor he, did quit."
    ],
    "correctIndex": 0,
    "explanation": "✔ 'He did not complain, nor did he quit.' uses comma + nor correctly."
  },
  {
    "id": "l2-fa-q32",
    "type": "word-clicker",
    "difficultyStep": 3,
    "prompt": "[FANBOYS] Click the FANBOYS conjunction in: 'The hearth was warm, for the fire was stoked.'",
    "instruction": "Select 'for' as a conjunction.",
    "sentence": "The hearth was warm, for the fire was stoked.",
    "words": ["The", "hearth", "was", "warm,", "for", "the", "fire", "was", "stoked."],
    "targetIndices": [4],
    "targetCategoryLabel": "coordinating conjunction",
    "explanation": "✔ **for** joins the reason clause."
  },
  {
    "id": "l2-fa-q33",
    "type": "multiple-choice",
    "difficultyStep": 3,
    "prompt": "[FANBOYS] Which FANBOYS letter stands for 'addition'?",
    "instruction": "Select the letter and word.",
    "options": ["A - And", "B - But", "S - So", "O - Or"],
    "correctIndex": 0,
    "explanation": "✔ **A** stands for **And** (addition)."
  },

  # Topic 5: Compound Sentences (34-42)
  {
    "id": "l2-fa-q34",
    "type": "multiple-choice",
    "difficultyStep": 1,
    "prompt": "[Compound Sentences] Which of the following is a genuine compound sentence?",
    "instruction": "Look for two independent clauses joined by comma + FANBOYS.",
    "options": [
      "The gale blew, and the waves crashed against the pier.",
      "Walking along the windy coastal path near Dover.",
      "Because it was freezing outside in Newcastle.",
      "Isla and Callum packed their leather satchels."
    ],
    "correctIndex": 0,
    "explanation": "✔ Two complete sentences joined by ', and'."
  },
  {
    "id": "l2-fa-q35",
    "type": "error-detective",
    "difficultyStep": 1,
    "prompt": "[Compound Sentences] Spot the comma splice error.",
    "instruction": "Click the comma where a conjunction is missing.",
    "sentenceWithMistake": "The bell rang, the pupils lined up in order.",
    "words": ["The", "bell", "rang,", "the", "pupils", "lined", "up", "in", "order."],
    "errorWordIndex": 2,
    "correctedWord": "rang, and",
    "ruleViolated": "Comma splice error",
    "explanation": "✔ Add a conjunction like 'and' or 'so' after the comma."
  },
  {
    "id": "l2-fa-q36",
    "type": "sentence-builder",
    "difficultyStep": 2,
    "prompt": "[Compound Sentences] Assemble a compound sentence.",
    "instruction": "Order the words correctly.",
    "scrambledWords": ["The", "sun", "rose,", "and", "the", "birds", "sang."],
    "correctSentence": "The sun rose, and the birds sang.",
    "explanation": "✔ Clause 1 + ', and' + Clause 2."
  },
  {
    "id": "l2-fa-q37",
    "type": "multiple-choice",
    "difficultyStep": 2,
    "prompt": "[Compound Sentences] Which sentence is NOT compound?",
    "instruction": "Find the complex or simple sentence.",
    "options": [
      "I wanted cake, but she wanted pie.",
      "Although it rained, we enjoyed the walk.",
      "The sun shone, so we went outside.",
      "You can rest, or you can join us."
    ],
    "correctIndex": 1,
    "explanation": "✔ 'Although it rained...' is a complex sentence starting with subordinating conjunction 'Although'."
  },
  {
    "id": "l2-fa-q38",
    "type": "clause-matcher",
    "difficultyStep": 2,
    "prompt": "[Compound Sentences] Identify clauses in: 'The clock struck twelve, and the lights dimmed.'",
    "instruction": "Break down the clauses.",
    "sentence": "The clock struck twelve, and the lights dimmed.",
    "mainClause": "The clock struck twelve",
    "subordinateClause": "the lights dimmed",
    "conjunctionOrConnective": "and",
    "explanation": "✔ Both parts are independent clauses joined by 'and'."
  },
  {
    "id": "l2-fa-q39",
    "type": "word-clicker",
    "difficultyStep": 3,
    "prompt": "[Compound Sentences] Click the conjunction joining two clauses.",
    "instruction": "Select the joining word.",
    "sentence": "The path was rugged, yet the hikers pressed on.",
    "words": ["The", "path", "was", "rugged,", "yet", "the", "hikers", "pressed", "on."],
    "targetIndices": [4],
    "targetCategoryLabel": "coordinating conjunction",
    "explanation": "✔ **yet** joins the two independent clauses."
  },
  {
    "id": "l2-fa-q40",
    "type": "multiple-choice",
    "difficultyStep": 3,
    "prompt": "[Compound Sentences] What test proves a sentence is compound?",
    "instruction": "Select the two-sentence test.",
    "options": [
      "Removing the conjunction leaves two complete sentences.",
      "Removing the verb leaves a noun phrase.",
      "It must contain at least three commas.",
      "It must start with an adverb."
    ],
    "correctIndex": 0,
    "explanation": "✔ If both halves stand as complete independent sentences, it is compound."
  },
  {
    "id": "l2-fa-q41",
    "type": "sentence-builder",
    "difficultyStep": 3,
    "prompt": "[Compound Sentences] Build a compound sentence with 'but'.",
    "instruction": "Order the words into a sentence.",
    "scrambledWords": ["The", "snow", "fell,", "but", "we", "stayed", "warm."],
    "correctSentence": "The snow fell, but we stayed warm.",
    "explanation": "✔ Clause 1 + ', but' + Clause 2."
  },
  {
    "id": "l2-fa-q42",
    "type": "multiple-choice",
    "difficultyStep": 3,
    "prompt": "[Compound Sentences] Which punctuation mark belongs before a FANBOYS conjunction joining two independent clauses?",
    "instruction": "Select the punctuation mark.",
    "options": ["comma (,)", "full stop (.)", "exclamation mark (!)", "question mark (?)"],
    "correctIndex": 0,
    "explanation": "✔ Place a comma before the coordinating conjunction in compound sentences."
  },

  # Topic 6: Apostrophes (43-50)
  {
    "id": "l2-fa-q43",
    "type": "multiple-choice",
    "difficultyStep": 1,
    "prompt": "[Apostrophes] Which contraction replaces 'do not'?",
    "instruction": "Select the correct contraction.",
    "options": ["don't", "dont'", "do'nt", "d'ont"],
    "correctIndex": 0,
    "explanation": "✔ **don't** replaces the 'o' in 'not' with an apostrophe."
  },
  {
    "id": "l2-fa-q44",
    "type": "error-detective",
    "difficultyStep": 1,
    "prompt": "[Apostrophes] Find the greengrocer's plural apostrophe error.",
    "instruction": "Click the word with the wrong apostrophe.",
    "sentenceWithMistake": "Fresh banana's are on sale at the local market.",
    "words": ["Fresh", "banana's", "are", "on", "sale", "at", "the", "local", "market."],
    "errorWordIndex": 1,
    "correctedWord": "bananas",
    "ruleViolated": "Plural apostrophe prohibition",
    "explanation": "✔ Plural nouns (bananas) never take an apostrophe."
  },
  {
    "id": "l2-fa-q45",
    "type": "multiple-choice",
    "difficultyStep": 2,
    "prompt": "[Apostrophes] Choose the correct singular possessive form: 'The ___ collar was red.'",
    "instruction": "Select the form showing ownership by one dog.",
    "options": ["dog's", "dogs'", "dogs", "doges"],
    "correctIndex": 0,
    "explanation": "✔ **dog's** shows ownership belonging to one dog."
  },
  {
    "id": "l2-fa-q46",
    "type": "word-clicker",
    "difficultyStep": 2,
    "prompt": "[Apostrophes] Click the word with an apostrophe of contraction.",
    "instruction": "Identify the contraction.",
    "sentence": "We couldn't find the old map of Cardiff.",
    "words": ["We", "couldn't", "find", "the", "old", "map", "of", "Cardiff."],
    "targetIndices": [1],
    "targetCategoryLabel": "contraction",
    "explanation": "✔ **couldn't** = could not."
  },
  {
    "id": "l2-fa-q47",
    "type": "multiple-choice",
    "difficultyStep": 2,
    "prompt": "[Apostrophes] Which sentence correctly uses 'it's'?",
    "instruction": "Identify where 'it's' means 'it is'.",
    "options": [
      "It's a sunny afternoon in Cornwall.",
      "The dog wagged it's tail.",
      "The car lost it's mirror.",
      "The bird swished it's feathers."
    ],
    "correctIndex": 0,
    "explanation": "✔ 'It's a sunny afternoon' = 'It is a sunny afternoon'."
  },
  {
    "id": "l2-fa-q48",
    "type": "sentence-builder",
    "difficultyStep": 3,
    "prompt": "[Apostrophes] Build a sentence with a possessive apostrophe.",
    "instruction": "Order the words into a sentence.",
    "scrambledWords": ["Isla's", "cat", "slept", "by", "the", "fire."],
    "correctSentence": "Isla's cat slept by the fire.",
    "explanation": "✔ **Isla's** shows singular possession."
  },
  {
    "id": "l2-fa-q49",
    "type": "multiple-choice",
    "difficultyStep": 3,
    "prompt": "[Apostrophes] What two words make up 'won't'?",
    "instruction": "Select the original words.",
    "options": ["will not", "would not", "was not", "were not"],
    "correctIndex": 0,
    "explanation": "✔ **won't** is the irregular contraction for **will not**."
  },
  {
    "id": "l2-fa-q50",
    "type": "multiple-choice",
    "difficultyStep": 3,
    "prompt": "[Apostrophes] Which option shows correct singular possession for a name ending in s (e.g. Charles)?",
    "instruction": "Select the standard British English form.",
    "options": ["Charles's crown", "Charle's crown", "Charless' crown", "Charles's' crown"],
    "correctIndex": 0,
    "explanation": "✔ Add **'s** to singular names ending in s (Charles's crown)."
  }
]

print(f"Generated {len(final_assessment_exercises)} final assessment exercises.")


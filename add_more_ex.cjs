const fs = require('fs');

const generalExercises2 = {
  // Level 1
  'nouns-common-proper': [
    `{
        id: 'gen2-noun-1',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which word in the following sentence is a PROPER noun?',
        instruction: 'Select the proper noun.',
        options: ['museum', 'London', 'dinosaur', 'exhibition'],
        correctIndex: 1,
        explanation: '"London" is a specific place and must be capitalised, making it a proper noun.'
    }`
  ],
  'verbs-action-being': [
    `{
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
    }`
  ],
  'adjectives-describing-words': [
    `{
        id: 'gen2-adj-1',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Find the adjective that is in the wrong position.',
        instruction: 'Click the incorrectly placed describing word.',
        sentenceWithMistake: 'She drove a car blue down the winding country lane.',
        words: ['She', 'drove', 'a', 'car', 'blue', 'down', 'the', 'winding', 'country', 'lane.'],
        errorWordIndex: 4,
        correctedWord: 'blue car',
        explanation: 'In English, adjectives typically come BEFORE the noun they describe (a blue car).'
    }`
  ],
  'capital-letters-full-stops': [
    `{
        id: 'gen2-cap-1',
        type: 'sentence-builder',
        difficultyStep: 2,
        prompt: 'Build a properly punctuated sentence.',
        instruction: 'Arrange the words. Pay attention to capitals and full stops.',
        scrambledWords: ['We', 'went', 'to', 'the', 'park', 'on', 'Sunday.'],
        correctSentence: 'We went to the park on Sunday.',
        explanation: 'The sentence must start with a capital (We), use a capital for the day of the week (Sunday), and end with a full stop.'
    }`
  ],
  'simple-sentences-subject-verb': [
    `{
        id: 'gen2-sim-1',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Identify the SUBJECT of this sentence: "Under the bed slept a tiny kitten."',
        instruction: 'Who or what is performing the action?',
        options: ['Under the bed', 'slept', 'a tiny', 'a tiny kitten'],
        correctIndex: 3,
        explanation: 'Even though it comes at the end, "a tiny kitten" is the subject because the kitten is the one doing the sleeping.'
    }`
  ],

  // Level 2
  'pronouns-personal-possessive': [
    `{
        id: 'gen2-pro-1',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Find the incorrect pronoun in this sentence.',
        instruction: 'Click the pronoun that is grammatically wrong.',
        sentenceWithMistake: 'Her and David went to the cinema yesterday.',
        words: ['Her', 'and', 'David', 'went', 'to', 'the', 'cinema', 'yesterday.'],
        errorWordIndex: 0,
        correctedWord: 'She',
        explanation: '"She" is the correct subject pronoun to use here, as she is the one performing the action (went).'
    }`
  ],
  'adverbs-manner-time-place': [
    `{
        id: 'gen2-adv-1',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which sentence contains an adverb of TIME?',
        instruction: 'Select the sentence with a time adverb.',
        options: [
          'He spoke softly to the baby.',
          'They will arrive tomorrow.',
          'She looked everywhere for her keys.',
          'The car stopped abruptly.'
        ],
        correctIndex: 1,
        explanation: '"tomorrow" is an adverb of time, telling us WHEN they will arrive.'
    }`
  ],
  'prepositions-place-time-direction': [
    `{
        id: 'gen2-prep-1',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Tap on the preposition of direction.',
        instruction: 'Identify the word showing movement or direction.',
        sentence: 'The frightened cat dashed towards the open door.',
        words: ['The', 'frightened', 'cat', 'dashed', 'towards', 'the', 'open', 'door.'],
        targetIndices: [4],
        targetCategoryLabel: 'Preposition',
        explanation: '"towards" is a preposition showing the direction the cat moved.'
    }`
  ],
  'coordinating-conjunctions-fanboys': [
    `{
        id: 'gen2-fan-1',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Build a compound sentence using a FANBOYS conjunction.',
        instruction: 'Arrange the scrambled words.',
        scrambledWords: ['I', 'was', 'tired,', 'yet', 'I', 'finished', 'my', 'homework.'],
        correctSentence: 'I was tired, yet I finished my homework.',
        explanation: '"yet" is a coordinating conjunction showing contrast between being tired and finishing the work.'
    }`
  ],
  'compound-sentences': [
    `{
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
    }`
  ],
  'apostrophes-contractions-possession': [
    `{
        id: 'gen2-apo-1',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Choose the correct plural possessive form: "The ___ coats were left in the hallway."',
        instruction: 'Select the form that means "the coats belonging to the children".',
        options: ['childrens', 'childrens\\\\\\'', 'children\\\\\\'s', 'childrens\\\\\\'s'],
        correctIndex: 2,
        explanation: '"Children" is already an irregular plural, so we just add \\\\\\'s to show possession.'
    }`
  ],

  // Level 3
  'determiners-articles-demonstratives': [
    `{
        id: 'gen2-det-1',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Tap on the demonstrative determiner.',
        instruction: 'Click the word that specifies WHICH noun is being referred to.',
        sentence: 'I prefer those apples over the ones in this basket.',
        words: ['I', 'prefer', 'those', 'apples', 'over', 'the', 'ones', 'in', 'this', 'basket.'],
        targetIndices: [2, 8],
        targetCategoryLabel: 'Demonstrative Determiner',
        explanation: '"those" and "this" are demonstratives pointing to specific apples and a specific basket.'
    }`
  ],
  'fronted-adverbials': [
    `{
        id: 'gen2-front-1',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Identify the punctuation missing after the fronted adverbial.',
        instruction: 'Click the word that should have a comma after it.',
        sentenceWithMistake: 'Suddenly the lights went out in the entire building.',
        words: ['Suddenly', 'the', 'lights', 'went', 'out', 'in', 'the', 'entire', 'building.'],
        errorWordIndex: 0,
        correctedWord: 'Suddenly,',
        explanation: 'A comma is needed after a fronted adverbial to separate it from the main clause.'
    }`
  ],
  'subordinating-conjunctions-complex-sentences': [
    `{
        id: 'gen2-sub-1',
        type: 'clause-matcher',
        difficultyStep: 4,
        prompt: 'Identify the main clause and the subordinate clause in this sentence.',
        instruction: 'Read the sentence and understand which part relies on the other.',
        sentence: 'Unless you finish your vegetables, you cannot have any pudding.',
        mainClause: 'you cannot have any pudding',
        subordinateClause: 'Unless you finish your vegetables',
        explanation: 'The main clause makes sense on its own. The subordinate clause starts with "Unless" and is dependent.'
    }`
  ],
  'relative-clauses-pronouns': [
    `{
        id: 'gen2-rel-1',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which relative pronoun correctly completes: "The book ___ you lent me was fascinating."?',
        instruction: 'Select the correct pronoun for a thing.',
        options: ['who', 'whom', 'which', 'where'],
        correctIndex: 2,
        explanation: '"which" (or "that") is used for objects/things like "the book".'
    }`
  ],
  'modal-verbs-possibility-obligation': [
    `{
        id: 'gen2-mod-1',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Find the incorrectly used modal verb of obligation.',
        instruction: 'Click the modal verb that should be changed to make logical sense.',
        sentenceWithMistake: 'You mustn\\\\\\'t look both ways before crossing the street.',
        words: ['You', 'mustn\\\\\\'t', 'look', 'both', 'ways', 'before', 'crossing', 'the', 'street.'],
        errorWordIndex: 1,
        correctedWord: 'must',
        explanation: '"mustn\\\\\\'t" means you are forbidden to do it. You "must" (obligation) look both ways.'
    }`
  ],
  'direct-speech-inverted-commas': [
    `{
        id: 'gen2-ds-1',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Which sentence uses inverted commas (speech marks) correctly?',
        instruction: 'Select the correctly punctuated dialogue.',
        options: [
          '"I am going to the shops" said Mary.',
          'I am going to the shops, "said Mary."',
          '"I am going to the shops," said Mary.',
          '"I am going to the shops, said Mary."'
        ],
        correctIndex: 2,
        explanation: 'The spoken words are inside the inverted commas, and there is a comma before the closing speech marks separating it from the reporting clause.'
    }`
  ],

  // Level 4
  'active-passive-voice': [
    `{
        id: 'gen2-act-1',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Build this sentence in the PASSIVE voice.',
        instruction: 'Arrange the words so the action happens TO the subject.',
        scrambledWords: ['The', 'window', 'was', 'broken', 'by', 'the', 'storm.'],
        correctSentence: 'The window was broken by the storm.',
        explanation: 'In the passive voice, the receiver (window) is the subject, the verb uses "to be" + past participle (was broken), and the agent is introduced by "by".'
    }`
  ],
  'semicolons-colons': [
    `{
        id: 'gen2-semi-1',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Find the "comma splice" error that should be a semicolon.',
        instruction: 'Click the comma that incorrectly joins two independent clauses.',
        sentenceWithMistake: 'The wind howled outside, the fireplace kept the room warm.',
        words: ['The', 'wind', 'howled', 'outside,', 'the', 'fireplace', 'kept', 'the', 'room', 'warm.'],
        errorWordIndex: 3,
        correctedWord: 'outside;',
        explanation: 'A comma splice occurs when two independent sentences are joined by just a comma. You need a semicolon (or a conjunction like "but") here.'
    }`
  ],
  'subjunctive-mood-british-english': [
    `{
        id: 'gen2-subj-1',
        type: 'word-clicker',
        difficultyStep: 4,
        prompt: 'Tap the verb in the subjunctive mood.',
        instruction: 'Identify the base form of the verb used after a formal demand or suggestion.',
        sentence: 'It is essential that she arrive on time for the meeting.',
        words: ['It', 'is', 'essential', 'that', 'she', 'arrive', 'on', 'time', 'for', 'the', 'meeting.'],
        targetIndices: [5],
        targetCategoryLabel: 'Subjunctive Verb',
        explanation: '"arrive" (instead of "arrives") is in the subjunctive mood following "It is essential that...".'
    }`
  ],
  'subject-verb-agreement-complex': [
    `{
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
        explanation: 'When a collective noun (jury) acts as a single unified body, it takes a singular verb (has).'
    }`
  ],

  // Level 5
  'nominalisation-academic-register': [
    `{
        id: 'gen2-nom-1',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Build the sentence using nominalisation for an academic tone.',
        instruction: 'Arrange the words to form a noun-heavy, formal sentence.',
        scrambledWords: ['The', 'implementation', 'of', 'the', 'policy', 'caused', 'widespread', 'debate.'],
        correctSentence: 'The implementation of the policy caused widespread debate.',
        explanation: '"The implementation of the policy" changes the verb "implement" into a noun phrase, elevating the register.'
    }`
  ],
  'participle-phrases-dangling-modifiers': [
    `{
        id: 'gen2-part-1',
        type: 'error-detective',
        difficultyStep: 5,
        prompt: 'Identify the dangling modifier issue.',
        instruction: 'Click the word that incorrectly receives the action of the modifier.',
        sentenceWithMistake: 'Looking out the window, the mountains were covered in snow.',
        words: ['Looking', 'out', 'the', 'window,', 'the', 'mountains', 'were', 'covered', 'in', 'snow.'],
        errorWordIndex: 5,
        correctedWord: 'we saw the mountains',
        explanation: 'The mountains were not "looking out the window". The sentence needs a human subject immediately after the comma (e.g., "...window, we saw the mountains...").'
    }`
  ],
  'conditional-clauses-mastery': [
    `{
        id: 'gen2-cond-1',
        type: 'clause-matcher',
        difficultyStep: 5,
        prompt: 'Identify the condition (if-clause) and the result (main clause) in this mixed conditional.',
        instruction: 'Match the clauses.',
        sentence: 'If I had invested in that company, I would be rich now.',
        mainClause: 'I would be rich now',
        subordinateClause: 'If I had invested in that company',
        explanation: 'This mixed conditional uses an unreal past condition (had invested) and an unreal present result (would be rich).'
    }`
  ],
  'parallel-structure-rhetoric': [
    `{
        id: 'gen2-para-1',
        type: 'multiple-choice',
        difficultyStep: 5,
        prompt: 'Which sentence demonstrates flawless parallel structure?',
        instruction: 'Choose the sentence where all list items share the same grammatical form.',
        options: [
          'The manager asked the team to prepare the report, to review the data, and presenting the findings.',
          'The manager asked the team to prepare the report, review the data, and present the findings.',
          'The manager asked the team preparing the report, to review the data, and present the findings.',
          'The manager asked the team to prepare the report, reviewed the data, and present the findings.'
        ],
        correctIndex: 1,
        explanation: 'All three verbs are in the base form (infinitive without "to" repeated): prepare, review, present. This creates a perfect parallel structure.'
    }`
  ]
};

const files = ['level1.ts', 'level2.ts', 'level3.ts', 'level4.ts', 'level5.ts'];

files.forEach(file => {
  const p = `src/data/${file}`;
  let data = fs.readFileSync(p, 'utf8');

  let result = data;
  
  for (const [slug, exercises] of Object.entries(generalExercises2)) {
    let slugIndex = result.indexOf(`slug: '${slug}'`);
    if (slugIndex === -1) continue;
    
    let exStart = result.indexOf("exercises: [", slugIndex);
    if (exStart === -1) continue;
    
    let searchStart = exStart + "exercises: [".length;
    let openBrackets = 1;
    let closeIndex = searchStart;

    while (openBrackets > 0 && closeIndex < result.length) {
      if (result[closeIndex] === '[') openBrackets++;
      else if (result[closeIndex] === ']') openBrackets--;
      closeIndex++;
    }

    closeIndex--; // this is the index of the matching ']'
    
    let arrayContent = result.substring(searchStart, closeIndex).trim();
    let prefix = arrayContent.length > 0 && !arrayContent.endsWith(',') ? ',\n' : '\n';
    
    let injectedString = prefix + exercises.map(ex => "      " + ex).join(",\n");
    
    result = result.substring(0, closeIndex) + injectedString + "\n    " + result.substring(closeIndex);
  }
  
  fs.writeFileSync(p, result);
  console.log(`Updated ${file} with 2nd batch of exercises`);
});

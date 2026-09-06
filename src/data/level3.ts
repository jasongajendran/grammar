import { GrammarTopic } from '../types';

export const LEVEL_3_TOPICS: GrammarTopic[] = [
  {
    id: 'l3-determiners',
    slug: 'determiners-articles-demonstratives',
    title: 'Determiners: Articles, Demonstratives & Quantifiers',
    subtitle: 'Signalling what kind of reference is being made to a noun.',
    level: 'level-3',
    levelLabel: 'Level 3: Intermediate',
    levelStage: 'Upper Key Stage 2',
    ageGroup: 'Ages 9–11',
    category: 'parts-of-speech',
    categoryLabel: 'Parts of Speech',
    iconName: 'Layers',
    estimatedMinutes: 7,
    overview: 'A **determiner** sits before a noun or noun phrase to specify which one, how many, or whose it is. Determiners include **articles** (a, an, the), **demonstratives** (this, that, these, those), **possessives** (my, your, his, her, its, our, their), and **quantifiers** (some, many, all, few, three).',
    whyItMatters: 'In Key Stage 2 SATs, identifying determiners is a core assessment objective.',
    sections: [
      {
        id: 'sec-determiner-types',
        title: '1. Types of Determiners in British English',
        content: 'Determiners fall into several distinct categories:',
        bulletPoints: [
          '**Definite Article:** **the** (refers to a specific item already known to the listener) (for example: *We boarded **the** heritage steam train at Pickering*).',
          '**Indefinite Articles:** **a** (before consonant sounds) and **an** (before vowel sounds) (for example: *We spotted **a** wild pony and **an** eagle circling overhead*).',
          '**Demonstratives:** **this, that, these, those** (pointing in space or time) (for example: ***These** woollen blankets were woven in Wales, while **that** saddle was crafted in Somerset*).',
          '**Possessive Determiners:** **my, your, our, their, his, her, its** (sitting directly before a noun) (for example: *The brass conductor adjusted **his** uniform cap before leading **our** parade*).',
          '**Quantifiers & Numerals:** **several, few, every, each, three, many** (for example: ***Several** tourists spotted seals along the Norfolk coast, while **few** hikers braved the summit in winter*).'
        ],
        examples: [
          {
            id: 'ex-l3-det1',
            sentence: '**Those** **three** red deer grazed peacefully beside **the** shimmering waters of the lake.',
            highlightWords: ['Those', 'three', 'the'],
            explanation: '**Those** is a demonstrative determiner; **three** is a numerical determiner; **the** is a definite article.',
            contextNote: 'Cumbrian lake wildlife'
          },
          {
            id: 'ex-l3-det2',
            sentence: '**Every** pupil in **our** Belfast class received **an** illustrated atlas of British geography.',
            highlightWords: ['Every', 'our', 'an'],
            explanation: '**Every** is a quantifier determiner; **our** is a possessive determiner; **an** is an indefinite article used before vowel sound "illustrated".',
            contextNote: 'UK classroom study'
          },
          {
            id: 'ex-l3-det3',
            sentence: '**A** lone lighthouse keeper stood atop **that** craggy coastal cliff at sunset.',
            highlightWords: ['A', 'that'],
            explanation: '**A** is an indefinite article introducing the keeper; **that** is a demonstrative determiner pointing to the specific cliff.',
            contextNote: 'Coastal evening scene'
          }
        ],
        ruleSummary: 'Determiners introduce and specify nouns (articles, demonstratives, possessives, quantifiers).'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l3-det1',
        title: 'A vs An Sound Rule (Not Just Letters!)',
        trick: 'Use **an** before words that START WITH A VOWEL SOUND, not just the vowel letter! For example: *an hour* (silent h = vowel sound), but *a university* (starts with a "yoo" consonant sound).',
        mnemonic: 'Listen to the SOUND, not just the spelling!',
        commonMistake: 'Writing *"an historic occasion"* or *"an university"*.',
        correctWay: 'In modern British English, write *"a historic British monument"* and *"a university in Oxford"*.',
        explanation: 'Because "historic" has an audible "h" sound, and "university" begins with a /j/ consonant sound.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l3-det',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which word in this sentence is a DEMONSTRATIVE determiner? "Those antique silver brooches were discovered near Warwick Castle."',
        instruction: 'Identify the demonstrative determiner.',
        options: ['Those', 'antique', 'discovered', 'near'],
        correctIndex: 0,
        explanation: '✔ **Those**: Points directly to specific brooches.\n✖ antique (adjective), discovered (verb), near (preposition).'
      },
      {
        id: 'ex-q2-l3-det',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on all the DETERMINERS in this sentence.',
        instruction: 'Click each determiner (articles, possessives, quantifiers).',
        sentence: 'Several hikers checked their compasses near the mountain.',
        words: ['Several', 'hikers', 'checked', 'their', 'compasses', 'near', 'the', 'mountain.'],
        targetIndices: [0, 3, 6],
        targetCategoryLabel: 'Determiner',
        explanation: '✔ **Several** (quantifier), **their** (possessive determiner), and **the** (definite article) are determiners.'
      },
      {
        id: 'gen-det-1',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Choose the correct article: "She is ___ honest person and always tells the truth."',
        instruction: 'Select the appropriate article based on starting sound.',
        options: ['a', 'an', 'the', 'no article needed'],
        correctIndex: 1,
        explanation: '✔ **an**: "Honest" starts with a silent "h", producing a vowel sound (/ɒ/).'
      },
      {
        id: 'gen2-det-1',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Tap on both DEMONSTRATIVE determiners in the sentence below.',
        instruction: 'Click the words specifying which items.',
        sentence: 'I prefer those apples over the ones in this basket.',
        words: ['I', 'prefer', 'those', 'apples', 'over', 'the', 'ones', 'in', 'this', 'basket.'],
        targetIndices: [2, 8],
        targetCategoryLabel: 'Demonstrative Determiner',
        explanation: '✔ **those** and **this** are demonstratives pointing to specific apples and a specific basket.'
      },
      {
        id: 'ex-det-5',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Which word is a POSSESSIVE determiner in: "Our team celebrated after winning the cup."',
        instruction: 'Select the possessive determiner.',
        options: ['Our', 'team', 'winning', 'cup'],
        correctIndex: 0,
        explanation: '✔ **Our**: Sits before the noun "team" to show who owns/belongs to the team.'
      },
      {
        id: 'ex-det-6',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the two INDEFINITE ARTICLES in this sentence.',
        instruction: 'Click both indefinite articles.',
        sentence: 'A raven flew towards an old oak tree.',
        words: ['A', 'raven', 'flew', 'towards', 'an', 'old', 'oak', 'tree.'],
        targetIndices: [0, 4],
        targetCategoryLabel: 'Indefinite Article',
        explanation: '✔ **A** and **an** are indefinite articles introducing unspecified single nouns.'
      },
      {
        id: 'ex-det-7',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find the article mistake in this sentence.',
        instruction: 'Click the incorrect article word that should be changed to "an".',
        sentenceWithMistake: 'The train arrived a hour later than expected.',
        words: ['The', 'train', 'arrived', 'a', 'hour', 'later', 'than', 'expected.'],
        errorWordIndex: 3,
        correctedWord: 'an',
        ruleViolated: 'Use "an" before silent h vowel sounds',
        explanation: '✔ "hour" begins with a silent "h" (vowel sound), so it requires **an hour**.'
      },
      {
        id: 'ex-det-8',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Which word is a QUANTIFIER determiner in: "Many swallows migrated south for winter."',
        instruction: 'Identify the word showing quantity.',
        options: ['Many', 'swallows', 'migrated', 'winter'],
        correctIndex: 0,
        explanation: '✔ **Many**: Quantifier determiner specifying an approximate number.'
      },
      {
        id: 'ex-det-9',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Arrange these words to make a sentence featuring two determiners.',
        instruction: 'Build the correct sentence.',
        scrambledWords: ['The', 'swift', 'falcon', 'caught', 'a', 'field', 'mouse.'],
        correctSentence: 'The swift falcon caught a field mouse.',
        explanation: '✔ **The** (definite article) and **a** (indefinite article) specify the falcon and the mouse.'
      },
      {
        id: 'ex-det-10',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'What category of determiner is "every" in: "Every student received a medal."',
        instruction: 'Select the determiner sub-type.',
        options: ['Quantifier', 'Demonstrative', 'Possessive', 'Definite Article'],
        correctIndex: 0,
        explanation: '✔ **Quantifier**: "Every" distributes quantity across all items in a group.'
      },
      {
        id: 'ex-det-11',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Tap on the DEFINITE ARTICLE in this sentence.',
        instruction: 'Click the definite article.',
        sentence: 'The lighthouse illuminated the dark stormy sea.',
        words: ['The', 'lighthouse', 'illuminated', 'the', 'dark', 'stormy', 'sea.'],
        targetIndices: [0, 3],
        targetCategoryLabel: 'Definite Article',
        explanation: '✔ **The** (appears twice) is the definite article pointing to specific nouns.'
      },
      {
        id: 'ex-det-12',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which article correctly completes: "He studied at ___ university in Edinburgh."',
        instruction: 'Choose based on the sound of "university".',
        options: ['a', 'an', 'the', 'some'],
        correctIndex: 0,
        explanation: '✔ **a**: "University" starts with a consonant /j/ sound ("yoo"), so it takes "a".'
      },
      {
        id: 'ex-det-13',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Find the article error in this sentence.',
        instruction: 'Click the word that incorrectly uses "an".',
        sentenceWithMistake: 'France is an European country with rich history.',
        words: ['France', 'is', 'an', 'European', 'country', 'with', 'rich', 'history.'],
        errorWordIndex: 2,
        correctedWord: 'a',
        ruleViolated: 'Use "a" before words starting with a /j/ consonant sound',
        explanation: '✔ "European" starts with a "yoo" sound (/j/), so it requires **a European country**.'
      },
      {
        id: 'ex-det-14',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'How do demonstrative determiners change when referring to PLURAL items nearby?',
        instruction: 'Select the correct plural demonstrative.',
        options: ['this -> these', 'that -> these', 'this -> those', 'that -> this'],
        correctIndex: 0,
        explanation: '✔ **this** (singular nearby) becomes **these** (plural nearby).'
      }
    ]
  },
  {
    id: 'l3-fronted-adverbials',
    slug: 'fronted-adverbials',
    title: 'Fronted Adverbials & The Comma Rule',
    subtitle: 'Hooking the reader by placing time, manner, or location right at the front.',
    level: 'level-3',
    levelLabel: 'Level 3: Intermediate',
    levelStage: 'Upper Key Stage 2',
    ageGroup: 'Ages 9–11',
    category: 'sentence-structure',
    categoryLabel: 'Sentence Structure',
    iconName: 'CornerUpRight',
    estimatedMinutes: 7,
    overview: 'A **fronted adverbial** is a word, phrase, or clause that normally sits at the end of a sentence, but has been moved right to the FRONT of the sentence to show **where**, **when**, **how**, or **how often** the action took place. In British English grammar, a fronted adverbial is almost always followed by a **comma (, )**.',
    whyItMatters: 'Fronted adverbials are one of the most prominent features in the UK Key Stage 2 English syllabus, creating exciting sentence variety.',
    sections: [
      {
        id: 'sec-fronted-adverbials-rule',
        title: '1. The Fronted Adverbial Formula',
        content: 'When an adverbial is placed before the main clause, it sets the scene and creates anticipation:',
        bulletPoints: [
          '**Time (When?):** (for example: *Early the following morning, the passenger ferry left the port of Dover for France.*)',
          '**Place (Where?):** (for example: *High above the craggy peaks of Snowdonia, a majestic peregrine falcon circled.*)',
          '**Manner (How?):** (for example: *Without making a sound, the stealthy red fox prowled through the dense woodland.*)',
          '**Frequency (How often?):** (for example: *Every New Year\'s Eve, thousands of revellers gather beside Big Ben in London for the midnight chimes.*)'
        ],
        examples: [
          {
            id: 'ex-l3-fa1',
            sentence: '**As the morning mist rolled across the valley,** the mysterious surface of the lake rippled without warning.',
            highlightWords: ['As the morning mist rolled across the valley,'],
            explanation: 'This fronted adverbial clause of time and atmosphere sets the scene and is separated from the main clause by a comma.',
            contextNote: 'Lakeside morning atmosphere'
          },
          {
            id: 'ex-l3-fa2',
            sentence: '**Deep beneath the ancient walls of Dover Castle,** historians uncovered a medieval vaulted chamber.',
            highlightWords: ['Deep beneath the ancient walls of Dover Castle,'],
            explanation: 'This prepositional phrase acts as a fronted adverbial of place, followed by a comma before the main clause.',
            contextNote: 'Historic castle discovery'
          },
          {
            id: 'ex-l3-fa3',
            sentence: '**With immense strength and precision,** the champion athlete cleared the high bar.',
            highlightWords: ['With immense strength and precision,'],
            explanation: 'Fronted adverbial of manner indicating how the athlete executed the jump.',
            contextNote: 'Athletics championship'
          }
        ],
        ruleSummary: 'Fronted Adverbial + Comma + Main Clause (Subject + Verb).'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l3-fa1',
        title: 'The "Move It to the Back" Test',
        trick: 'To check if a phrase is a fronted adverbial, try moving it to the very end of your sentence. If the sentence still makes perfect grammatical sense, it is indeed a fronted adverbial! For example: *"Without warning, the coastal storm hit"* -> *"The coastal storm hit without warning."*',
        mnemonic: 'Fronted Adverbial -> Don\'t forget the COMMA after it!',
        commonMistake: 'Forgetting the mandatory comma after the fronted adverbial.',
        correctWay: 'Always place a comma immediately following the fronted adverbial phrase.',
        explanation: 'The comma provides a brief pause for the reader before the main action begins.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l3-fa',
        type: 'word-clicker',
        difficultyStep: 1,
        prompt: 'Tap on all words forming the FRONTED ADVERBIAL at the start of this sentence.',
        instruction: 'Click the words forming the fronted adverbial of time.',
        sentence: 'Before the sun had risen, the coastal fishermen set off across the bay.',
        words: ['Before', 'the', 'sun', 'had', 'risen,', 'the', 'coastal', 'fishermen', 'set', 'off', 'across', 'the', 'bay.'],
        targetIndices: [0, 1, 2, 3, 4],
        targetCategoryLabel: 'Fronted Adverbial',
        explanation: '✔ **Before the sun had risen,** is a fronted adverbial clause of time setting the stage.'
      },
      {
        id: 'ex-q2-l3-fa',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find where the missing comma should be placed after the fronted adverbial.',
        instruction: 'Click on the word that needs a comma right after it.',
        sentenceWithMistake: 'Across the misty autumn valley the lone church bells chimed.',
        words: ['Across', 'the', 'misty', 'autumn', 'valley', 'the', 'lone', 'church', 'bells', 'chimed.'],
        errorWordIndex: 4,
        correctedWord: 'valley,',
        ruleViolated: 'A fronted adverbial must be separated from the main clause by a comma.',
        explanation: '✔ A comma must follow "valley": **Across the misty autumn valley,**'
      },
      {
        id: 'gen-front-1',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Build a sentence starting with a fronted adverbial of manner.',
        instruction: 'Arrange the words correctly.',
        scrambledWords: ['Without', 'warning,', 'the', 'thunder', 'clapped', 'loudly.'],
        correctSentence: 'Without warning, the thunder clapped loudly.',
        explanation: '✔ "Without warning," is a fronted adverbial describing manner/timing.'
      },
      {
        id: 'gen2-front-1',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Identify the word missing a comma after the single-word fronted adverbial.',
        instruction: 'Click the word that should have a comma after it.',
        sentenceWithMistake: 'Suddenly the lights went out in the entire building.',
        words: ['Suddenly', 'the', 'lights', 'went', 'out', 'in', 'the', 'entire', 'building.'],
        errorWordIndex: 0,
        correctedWord: 'Suddenly,',
        ruleViolated: 'Fronted adverbial comma rule',
        explanation: '✔ "Suddenly" is a fronted adverbial of time/manner and requires a comma immediately after.'
      },
      {
        id: 'ex-fa-5',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'What type of fronted adverbial is: "High above the ancient oak tree,"?',
        instruction: 'Identify what aspect it describes.',
        options: ['Place (Where)', 'Time (When)', 'Manner (How)', 'Frequency (How often)'],
        correctIndex: 0,
        explanation: '✔ **Place (Where)**: Describes location high above the tree.'
      },
      {
        id: 'ex-fa-6',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the FRONTED ADVERBIAL of manner in this sentence.',
        instruction: 'Click the words showing HOW the cat moved.',
        sentence: 'As quiet as a shadow, the panther crept forward.',
        words: ['As', 'quiet', 'as', 'a', 'shadow,', 'the', 'panther', 'crept', 'forward.'],
        targetIndices: [0, 1, 2, 3, 4],
        targetCategoryLabel: 'Fronted Adverbial of Manner',
        explanation: '✔ **As quiet as a shadow,** describes how the panther crept.'
      },
      {
        id: 'ex-fa-7',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Which sentence correctly punctuate the fronted adverbial?',
        instruction: 'Select the sentence with the correct comma placement.',
        options: [
          'In the heat of the summer, we went swimming in the lake.',
          'In the heat, of the summer we went swimming in the lake.',
          'In the heat of the summer we went, swimming in the lake.',
          'In the heat of the summer we went swimming in the lake,'
        ],
        correctIndex: 0,
        explanation: '✔ **In the heat of the summer,** correctly places a comma right after the full adverbial phrase.'
      },
      {
        id: 'ex-fa-8',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find the punctuation error in this fronted adverbial sentence.',
        instruction: 'Click the word missing a comma.',
        sentenceWithMistake: 'Every December morning freezing fog covered the fields.',
        words: ['Every', 'December', 'morning', 'freezing', 'fog', 'covered', 'the', 'fields.'],
        errorWordIndex: 2,
        correctedWord: 'morning,',
        ruleViolated: 'Fronted adverbial comma rule',
        explanation: '✔ Put a comma after "morning" to separate the fronted adverbial from the main clause.'
      },
      {
        id: 'ex-fa-9',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Arrange these words to form a sentence starting with a fronted adverbial of place.',
        instruction: 'Order the words properly.',
        scrambledWords: ['Under', 'the', 'old', 'bridge,', 'a', 'troll', 'slept.'],
        correctSentence: 'Under the old bridge, a troll slept.',
        explanation: '✔ "Under the old bridge," sets the location, followed by subject "a troll" and verb "slept".'
      },
      {
        id: 'ex-fa-10',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'What type of fronted adverbial is: "Three times a week,"?',
        instruction: 'Identify the category.',
        options: ['Frequency (How often)', 'Place (Where)', 'Manner (How)', 'Degree (How much)'],
        correctIndex: 0,
        explanation: '✔ **Frequency (How often)**: Explains how many times an action repeats.'
      },
      {
        id: 'ex-fa-11',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Tap on the FRONTED ADVERBIAL of frequency in this sentence.',
        instruction: 'Click the fronted adverbial words.',
        sentence: 'Without fail, the train arrives at eight o\'clock.',
        words: ['Without', 'fail,', 'the', 'train', 'arrives', 'at', 'eight', 'o\'clock.'],
        targetIndices: [0, 1],
        targetCategoryLabel: 'Fronted Adverbial of Frequency/Manner',
        explanation: '✔ **Without fail,** acts as a fronted adverbial indicating certainty/regularity.'
      },
      {
        id: 'ex-fa-12',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'How can you test if a phrase at the front of a sentence is a fronted adverbial?',
        instruction: 'Select the "Move It" test rule.',
        options: [
          'Move it to the end of the sentence; it should still make sense.',
          'Change it into a noun phrase.',
          'Add a question mark at the end.',
          'Capitalise every word in the phrase.'
        ],
        correctIndex: 0,
        explanation: '✔ Moving the adverbial to the end preserves the sentence\'s core meaning.'
      },
      {
        id: 'ex-fa-13',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Find the comma error in this fronted adverbial of manner sentence.',
        instruction: 'Click the word needing a comma after it.',
        sentenceWithMistake: 'With great courage the knight faced the fierce dragon.',
        words: ['With', 'great', 'courage', 'the', 'knight', 'faced', 'the', 'fierce', 'dragon.'],
        errorWordIndex: 2,
        correctedWord: 'courage,',
        ruleViolated: 'Fronted adverbial comma rule',
        explanation: '✔ "With great courage," is a fronted adverbial of manner requiring a comma.'
      },
      {
        id: 'ex-fa-14',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Reconstruct this sentence with a fronted adverbial of time.',
        instruction: 'Arrange the scrambled words.',
        scrambledWords: ['Late', 'last', 'night,', 'a', 'shooting', 'star', 'streaked', 'across', 'the', 'sky.'],
        correctSentence: 'Late last night, a shooting star streaked across the sky.',
        explanation: '✔ "Late last night," is the fronted adverbial of time, followed by comma and main clause.'
      }
    ]
  },
  {
    id: 'l3-subordinating-conjunctions',
    slug: 'subordinating-conjunctions-complex-sentences',
    title: 'Subordinating Conjunctions: I SAW A WABUB',
    subtitle: 'Constructing rich complex sentences with main and subordinate clauses.',
    level: 'level-3',
    levelLabel: 'Level 3: Intermediate',
    levelStage: 'Upper Key Stage 2',
    ageGroup: 'Ages 9–11',
    category: 'sentence-structure',
    categoryLabel: 'Sentence Structure',
    iconName: 'GitPullRequest',
    estimatedMinutes: 7,
    overview: 'A **subordinating conjunction** introduces a **subordinate clause** (a clause that cannot stand on its own as a complete sentence). A sentence that contains one main clause and at least one subordinate clause is called a **complex sentence**.',
    whyItMatters: 'Mastering the British primary school mnemonic **I SAW A WABUB** unlocks advanced sentence construction.',
    sections: [
      {
        id: 'sec-isawawabub',
        title: '1. The "I SAW A WABUB" Conjunctions',
        content: 'This famous UK mnemonic helps remember the most common subordinating conjunctions:',
        bulletPoints: [
          '**I - If:** (for example: ***If** the sea gale calms down by evening, we will sail across to Anglesey.*)',
          '**S - Since:** (for example: ***Since** Roman times, the historic city walls have guarded Chester.*)',
          '**A - As:** (for example: ***As** the golden sun dipped behind the Cambrian Mountains, sheep grazed quietly in the valley.*)',
          '**W - When:** (for example: ***When** the conductor raised his ceremonial baton, the entire brass band struck up in unison.*)',
          '**A - Although:** (for example: ***Although** the waters of the lake were icy cold, the charity swimmers completed the course.*)',
          '**W - While:** (for example: ***While** the Atlantic storm battered the Cornish coast, we sat cosily inside the inn enjoying hot tea.*)',
          '**A - After:** (for example: ***After** Roman engineers completed the stone road, travel flourished throughout the province.*)',
          '**B - Before:** (for example: ***Before** darkness fell over the Yorkshire Dales, the weary ramblers reached their hostel.*)',
          '**U - Until:** (for example: *The folk band played energetic reels **until** the town clock chimed midnight on New Year\'s Eve.*)',
          '**B - Because:** (for example: *Visitors travel from all over the world to Stratford-upon-Avon **because** it was the birthplace of William Shakespeare.*)'
        ],
        examples: [
          {
            id: 'ex-l3-sc1',
            sentence: '**Although** snow fell heavily over the Pennines, the mountain rescue team reached the stranded walkers safely.',
            highlightWords: ['Although', 'the mountain rescue team reached the stranded walkers safely'],
            explanation: '"Although snow fell heavily over the Pennines" is the subordinate clause; "the mountain rescue team reached the stranded walkers safely" is the main clause.',
            contextNote: 'UK mountain rescue'
          },
          {
            id: 'ex-l3-sc2',
            sentence: 'The steam locomotive halted on the Ribblehead Viaduct **because** photographers had gathered along the hillside.',
            highlightWords: ['because'],
            explanation: '"The steam locomotive halted on the Ribblehead Viaduct" is the main clause; "because photographers had gathered along the hillside" is the subordinate clause explaining the reason.',
            contextNote: 'Yorkshire railway journey'
          },
          {
            id: 'ex-l3-sc3',
            sentence: '**While** the choir rehearsed in the vestry, the organist tuned the cathedral pipes.',
            highlightWords: ['While', 'the organist tuned the cathedral pipes'],
            explanation: '"While the choir rehearsed in the vestry" is a subordinate clause of time preceding the main clause.',
            contextNote: 'Cathedral choir rehearsal'
          }
        ],
        ruleSummary: 'Complex Sentence = Main Clause (makes complete sense alone) + Subordinate Clause (introduced by subordinating conjunction).'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l3-sc1',
        title: 'The Subordinate Comma Rule',
        trick: 'If the subordinate clause comes FIRST, you MUST put a comma after it. If the main clause comes first, you usually do NOT need a comma!',
        mnemonic: 'Subordinate First = COMMA! Main Clause First = NO COMMA!',
        commonMistake: 'Writing a subordinate clause alone as if it were a full sentence (for example: *"Because it was freezing outside."*).',
        correctWay: 'Attach it to a main clause: *"We lit the fire because it was freezing outside."*',
        explanation: 'A subordinate clause cannot stand alone as a complete sentence.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l3-sc',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which word is a subordinating conjunction from the I SAW A WABUB list?',
        instruction: 'Pick the subordinating conjunction.',
        options: ['And', 'Although', 'But', 'Or'],
        correctIndex: 1,
        explanation: '✔ **Although**: Subordinating conjunction introducing a dependent clause. (And, But, Or are FANBOYS coordinating conjunctions).'
      },
      {
        id: 'ex-q2-l3-sc',
        type: 'clause-matcher',
        difficultyStep: 2,
        prompt: 'Identify the Main Clause and Subordinate Clause in this sentence.',
        instruction: 'Review how the clauses divide.',
        sentence: 'When the ferry docked at Holyhead, the excited passengers stepped onto the Welsh coast.',
        mainClause: 'the excited passengers stepped onto the Welsh coast',
        subordinateClause: 'When the ferry docked at Holyhead',
        conjunctionOrConnective: 'When',
        explanation: '✔ "When the ferry docked at Holyhead" is dependent (subordinate clause); "the excited passengers..." can stand alone (main clause).'
      },
      {
        id: 'gen-sub-1',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Identify the subordinating conjunction in this complex sentence.',
        instruction: 'Click the subordinating conjunction.',
        sentence: 'Although the weather was terrible, they continued their hike.',
        words: ['Although', 'the', 'weather', 'was', 'terrible,', 'they', 'continued', 'their', 'hike.'],
        targetIndices: [0],
        targetCategoryLabel: 'Subordinating Conjunction',
        explanation: '✔ **Although** introduces the dependent clause, establishing contrast.'
      },
      {
        id: 'gen2-sub-1',
        type: 'clause-matcher',
        difficultyStep: 4,
        prompt: 'Identify the main clause and the subordinate clause in this sentence.',
        instruction: 'Read the sentence and separate main and subordinate ideas.',
        sentence: 'Unless you finish your vegetables, you cannot have any pudding.',
        mainClause: 'you cannot have any pudding',
        subordinateClause: 'Unless you finish your vegetables',
        conjunctionOrConnective: 'Unless',
        explanation: '✔ "you cannot have any pudding" is the main clause. "Unless you finish your vegetables" is the subordinate condition.'
      },
      {
        id: 'ex-sub-5',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'In the UK mnemonic "I SAW A WABUB", what does the letter "B" stand for?',
        instruction: 'Select the conjunction corresponding to B.',
        options: ['Because / Before', 'But / Both', 'By / Beside', 'Between / Beyond'],
        correctIndex: 0,
        explanation: '✔ **Because / Before**: The two "B"s in I SAW A WABUB stand for "Because" and "Before".'
      },
      {
        id: 'ex-sub-6',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the SUBORDINATING CONJUNCTION in this sentence.',
        instruction: 'Click the subordinating conjunction word.',
        sentence: 'The children played outside until the sun went down.',
        words: ['The', 'children', 'played', 'outside', 'until', 'the', 'sun', 'went', 'down.'],
        targetIndices: [4],
        targetCategoryLabel: 'Subordinating Conjunction',
        explanation: '✔ **until** joins the main clause ("The children played outside") with the subordinate clause.'
      },
      {
        id: 'ex-sub-7',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Identify the sentence fragment error caused by an unattached subordinate clause.',
        instruction: 'Click the word that starts the incomplete fragment.',
        sentenceWithMistake: 'We went inside. Because it started to pour with rain.',
        words: ['We', 'went', 'inside.', 'Because', 'it', 'started', 'to', 'pour', 'with', 'rain.'],
        errorWordIndex: 3,
        correctedWord: 'because',
        ruleViolated: 'Subordinate clause fragment rule',
        explanation: '✔ "Because it started to pour with rain" cannot stand alone as a sentence; join it to the main clause.'
      },
      {
        id: 'ex-sub-8',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'When is a comma REQUIRED in a complex sentence with a subordinating conjunction?',
        instruction: 'Select the comma rule for complex sentences.',
        options: [
          'When the subordinate clause comes FIRST.',
          'When the main clause comes FIRST.',
          'Commas are never used in complex sentences.',
          'Commas are used after every single word.'
        ],
        correctIndex: 0,
        explanation: '✔ When the subordinate clause is placed at the front of the sentence, a comma must follow it.'
      },
      {
        id: 'ex-sub-9',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Arrange these words to build a complex sentence with a subordinating clause first.',
        instruction: 'Order the words properly.',
        scrambledWords: ['While', 'the', 'rain', 'fell,', 'they', 'stayed', 'indoors.'],
        correctSentence: 'While the rain fell, they stayed indoors.',
        explanation: '✔ Subordinate clause ("While the rain fell,") + Main clause ("they stayed indoors.").'
      },
      {
        id: 'ex-sub-10',
        type: 'clause-matcher',
        difficultyStep: 3,
        prompt: 'Identify the clauses in: "If the wind calms down, we will sail across the bay."',
        instruction: 'Separate main and subordinate clauses.',
        sentence: 'If the wind calms down, we will sail across the bay.',
        mainClause: 'we will sail across the bay',
        subordinateClause: 'If the wind calms down',
        conjunctionOrConnective: 'If',
        explanation: '✔ "If the wind calms down" is the subordinate clause introduced by "If".'
      },
      {
        id: 'ex-sub-11',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Tap on the SUBORDINATING CONJUNCTION in this sentence.',
        instruction: 'Click the conjunction.',
        sentence: 'Since the road was flooded, the bus took a detour.',
        words: ['Since', 'the', 'road', 'was', 'flooded,', 'the', 'bus', 'took', 'a', 'detour.'],
        targetIndices: [0],
        targetCategoryLabel: 'Subordinating Conjunction',
        explanation: '✔ **Since** is the subordinating conjunction introducing cause/time.'
      },
      {
        id: 'ex-sub-12',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which pair of conjunctions contains ONE coordinating and ONE subordinating conjunction?',
        instruction: 'Select the pair.',
        options: ['and / because', 'and / but', 'if / although', 'because / since'],
        correctIndex: 0,
        explanation: '✔ **and** (FANBOYS coordinating) / **because** (WABUB subordinating).'
      },
      {
        id: 'ex-sub-13',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Find the missing comma in this complex sentence starting with a subordinate clause.',
        instruction: 'Click the word needing a comma after it.',
        sentenceWithMistake: 'As the sun dipped behind the hills the air turned cold.',
        words: ['As', 'the', 'sun', 'dipped', 'behind', 'the', 'hills', 'the', 'air', 'turned', 'cold.'],
        errorWordIndex: 6,
        correctedWord: 'hills,',
        ruleViolated: 'Comma after introductory subordinate clause',
        explanation: '✔ Place a comma after "hills" before starting the main clause.'
      },
      {
        id: 'ex-sub-14',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Construct a complex sentence where the subordinate clause comes SECOND.',
        instruction: 'Arrange the words correctly.',
        scrambledWords: ['We', 'stayed', 'inside', 'because', 'the', 'storm', 'was', 'raging.'],
        correctSentence: 'We stayed inside because the storm was raging.',
        explanation: '✔ Main clause ("We stayed inside") + Subordinate clause ("because the storm was raging") — no comma needed.'
      }
    ]
  },
  {
    id: 'l3-relative-clauses',
    slug: 'relative-clauses-pronouns',
    title: 'Relative Clauses & Relative Pronouns',
    subtitle: 'Embedding precise detail into nouns using who, which, that, whose, and where.',
    level: 'level-3',
    levelLabel: 'Level 3: Intermediate',
    levelStage: 'Upper Key Stage 2',
    ageGroup: 'Ages 9–11',
    category: 'sentence-structure',
    categoryLabel: 'Sentence Structure',
    iconName: 'Share2',
    estimatedMinutes: 7,
    overview: 'A **relative clause** is a special type of subordinate clause that modifies or gives additional information about a noun. It is introduced by a **relative pronoun** (**who, which, that, whose, whom**) or a relative adverb (**where, when, why**).',
    whyItMatters: 'Relative clauses allow writers to combine multiple ideas into one sophisticated sentence.',
    sections: [
      {
        id: 'sec-relative-pronouns-usage',
        title: '1. Choosing the Right Relative Pronoun',
        content: 'Use the correct relative pronoun according to the noun being described:',
        bulletPoints: [
          '**Who (For people):** (for example: *Queen Elizabeth I, **who** ruled England during the Tudor period, rallied her fleet at Tilbury.*)',
          '**Which (For animals, objects, and buildings):** (for example: *Caernarfon Castle, **which** sits beside the Menai Strait, was constructed with majestic polygonal towers.*)',
          '**That (For people, animals, and things in defining clauses):** (for example: *The traditional folk tune **that** the musician performed was composed two centuries ago.*)',
          '**Whose (To show possession):** (for example: *The violinist **whose** fingers moved effortlessly across the strings won the gold medal.*)',
          '**Where / When (For places and times):** (for example: *The Giant\'s Causeway is the remarkable place **where** thousands of basalt columns meet the sea.*)'
        ],
        examples: [
          {
            id: 'ex-l3-rc1',
            sentence: 'King Henry VIII, **who ruled England in the sixteenth century**, lived a dramatic and tumultuous life.',
            highlightWords: ['who ruled England in the sixteenth century'],
            explanation: '"who ruled England in the sixteenth century" is an embedded non-defining relative clause framed by a pair of commas.',
            contextNote: 'British historical figure'
          },
          {
            id: 'ex-l3-rc2',
            sentence: 'We photographed the ancient stone bridge **which crosses the River Avon at Bath**.',
            highlightWords: ['which crosses the River Avon at Bath'],
            explanation: '"which crosses the River Avon at Bath" gives extra geographical information about the stone bridge.',
            contextNote: 'Somerset landmark'
          },
          {
            id: 'ex-l3-rc3',
            sentence: 'The rambler met a local farmer **whose border collie was herding sheep across the hillside**.',
            highlightWords: ['whose border collie was herding sheep across the hillside'],
            explanation: '"whose border collie was herding sheep across the hillside" shows possession belonging to the farmer.',
            contextNote: 'Countryside pastoral scene'
          }
        ],
        ruleSummary: 'Relative Clause = Relative Pronoun (who/which/that/whose) + modifying clause.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l3-rc1',
        title: 'Embedded Relative Clauses (Commas like Bread Slices)',
        trick: 'When a relative clause sits in the middle of a sentence, put a comma before AND after it (like two slices of bread in a sandwich)! If you remove the relative clause, the remaining sentence must still make complete sense.',
        mnemonic: 'Can you take out the commas and the sentence still survives?',
        commonMistake: 'Using "which" for human beings (for example: *"The musician which won the prize"*).',
        correctWay: 'Use "who" for people: *"The musician **who** won the prize."*',
        explanation: 'In standard British English, "who" is reserved for human beings.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l3-rc',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Choose the correct relative pronoun: "The park ranger ___ guided our trek through the Lake District knew every woodland trail."',
        instruction: 'Pick the pronoun for a person.',
        options: ['which', 'who', 'where', 'when'],
        correctIndex: 1,
        explanation: '✔ **who**: Used when modifying human beings (the park ranger).'
      },
      {
        id: 'ex-q2-l3-rc',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on all words forming the RELATIVE CLAUSE in this sentence.',
        instruction: 'Click the words in the relative clause.',
        sentence: 'The stone cottage which stood beside the river looked magical.',
        words: ['The', 'stone', 'cottage', 'which', 'stood', 'beside', 'the', 'river', 'looked', 'magical.'],
        targetIndices: [3, 4, 5, 6, 7],
        targetCategoryLabel: 'Relative Clause',
        explanation: '✔ **which stood beside the river** is the relative clause modifying "cottage".'
      },
      {
        id: 'gen-rel-1',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which relative pronoun correctly completes: "The scientist ___ research won the prize is speaking tonight."?',
        instruction: 'Select the possessive relative pronoun.',
        options: ['who', 'whom', 'whose', 'which'],
        correctIndex: 2,
        explanation: '✔ **whose**: Possessive relative pronoun indicating the research belongs to the scientist.'
      },
      {
        id: 'gen2-rel-1',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which relative pronoun correctly completes: "The book ___ you lent me was fascinating."?',
        instruction: 'Select the correct pronoun for an object.',
        options: ['who', 'whom', 'which', 'where'],
        correctIndex: 2,
        explanation: '✔ **which**: Used for inanimate objects (the book).'
      },
      {
        id: 'ex-rel-5',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Which relative adverb introduces a relative clause describing a PLACE?',
        instruction: 'Select the relative word for places.',
        options: ['where', 'when', 'why', 'whose'],
        correctIndex: 0,
        explanation: '✔ **where**: Used when modifying locations or geographical places.'
      },
      {
        id: 'ex-rel-6',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the RELATIVE PRONOUN in this sentence.',
        instruction: 'Click the relative pronoun.',
        sentence: 'The girl whose cat went missing was relieved to find it.',
        words: ['The', 'girl', 'whose', 'cat', 'went', 'missing', 'was', 'relieved', 'to', 'find', 'it.'],
        targetIndices: [2],
        targetCategoryLabel: 'Relative Pronoun',
        explanation: '✔ **whose** is the possessive relative pronoun.'
      },
      {
        id: 'ex-rel-7',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find the relative pronoun error in this sentence.',
        instruction: 'Click the incorrect relative pronoun used for a person.',
        sentenceWithMistake: 'The athlete which won the gold medal smiled proudly.',
        words: ['The', 'athlete', 'which', 'won', 'the', 'gold', 'medal', 'smiled', 'proudly.'],
        errorWordIndex: 2,
        correctedWord: 'who',
        ruleViolated: 'Use "who" for human beings',
        explanation: '✔ Use **who** instead of "which" when describing people.'
      },
      {
        id: 'ex-rel-8',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Where must commas be placed when an embedded relative clause provides extra non-essential detail?',
        instruction: 'Select the comma rule for non-defining relative clauses.',
        options: [
          'Before AND after the relative clause.',
          'Only before the relative clause.',
          'Only after the relative clause.',
          'No commas are needed.'
        ],
        correctIndex: 0,
        explanation: '✔ Commas frame both sides of a non-defining embedded relative clause.'
      },
      {
        id: 'ex-rel-9',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Build a sentence with an embedded relative clause framed by commas.',
        instruction: 'Arrange the words in order.',
        scrambledWords: ['The', 'old', 'castle,', 'which', 'was', 'built', 'in', '1200,', 'still', 'stands.'],
        correctSentence: 'The old castle, which was built in 1200, still stands.',
        explanation: '✔ Subject ("The old castle,") + relative clause ("which was built in 1200,") + main verb phrase ("still stands.").'
      },
      {
        id: 'ex-rel-10',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Tap on the entire EMBEDDED RELATIVE CLAUSE in this sentence.',
        instruction: 'Click the embedded clause words.',
        sentence: 'My cousin, who plays the cello, joined a famous orchestra.',
        words: ['My', 'cousin,', 'who', 'plays', 'the', 'cello,', 'joined', 'a', 'famous', 'orchestra.'],
        targetIndices: [2, 3, 4, 5],
        targetCategoryLabel: 'Embedded Relative Clause',
        explanation: '✔ **who plays the cello** is the relative clause extra information.'
      },
      {
        id: 'ex-rel-11',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which relative pronoun best fits: "The moment ___ the bell rang, everyone cheered."',
        instruction: 'Select the relative pronoun for time.',
        options: ['when', 'where', 'which', 'whose'],
        correctIndex: 0,
        explanation: '✔ **when**: Introduces relative clauses modifying time nouns ("moment").'
      },
      {
        id: 'ex-rel-12',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Identify the misplaced comma in this defining relative clause sentence.',
        instruction: 'Click the unnecessary comma.',
        sentenceWithMistake: 'The dog, that barked all night belongs to our neighbour.',
        words: ['The', 'dog,', 'that', 'barked', 'all', 'night', 'belongs', 'to', 'our', 'neighbour.'],
        errorWordIndex: 1,
        correctedWord: 'dog',
        ruleViolated: 'Defining relative clauses do not take surrounding commas',
        explanation: '✔ Defining relative clauses starting with "that" do not use commas.'
      },
      {
        id: 'ex-rel-13',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Arrange the words to construct a sentence with a possessive relative pronoun.',
        instruction: 'Order the words correctly.',
        scrambledWords: ['The', 'teacher,', 'whose', 'car', 'is', 'blue,', 'arrived', 'early.'],
        correctSentence: 'The teacher, whose car is blue, arrived early.',
        explanation: '✔ "whose car is blue" is the possessive relative clause modifying "teacher".'
      },
      {
        id: 'ex-rel-14',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'What happens to a sentence if you REMOVE a non-defining relative clause?',
        instruction: 'Select the impact on sentence structure.',
        options: [
          'The remaining main clause still makes complete sense on its own.',
          'The sentence becomes incomplete and ungrammatical.',
          'The main verb changes to past tense.',
          'All nouns lose their capital letters.'
        ],
        correctIndex: 0,
        explanation: '✔ Non-defining relative clauses provide optional extra detail; removing them leaves a complete main clause.'
      }
    ]
  },
  {
    id: 'l3-modal-verbs',
    slug: 'modal-verbs-possibility-obligation',
    title: 'Modal Verbs: Possibility, Obligation & Certainty',
    subtitle: 'Adjusting certainty and necessity: can, could, might, should, must, will.',
    level: 'level-3',
    levelLabel: 'Level 3: Intermediate',
    levelStage: 'Upper Key Stage 2',
    ageGroup: 'Ages 9–11',
    category: 'parts-of-speech',
    categoryLabel: 'Parts of Speech',
    iconName: 'Gauge',
    estimatedMinutes: 6,
    overview: 'A **modal verb** is a special helping (auxiliary) verb that expresses **certainty, possibility, ability, permission, or obligation**. The core modal verbs are: **can, could, may, might, shall, should, will, would, must**, and **ought to**.',
    whyItMatters: 'Modal verbs allow writers to calibrate how likely or mandatory an event is.',
    sections: [
      {
        id: 'sec-modal-degrees',
        title: '1. Degrees of Certainty and Obligation',
        content: 'Modal verbs change the tone of a sentence drastically:',
        bulletPoints: [
          '**High Certainty / Fact:** (for example: *The Proms orchestral concert **will** take place at the Royal Albert Hall in London.*)',
          '**Possibility / Low Certainty:** (for example: *A pod of grey seals **might** appear along the Pembrokeshire coastline this afternoon.*)',
          '**Strong Obligation / Rule:** (for example: *Walkers **must** carry a compass and waterproof map when hiking in national parks.*)',
          '**Advice / Recommendation:** (for example: *You **should** sample warm Cornish pasties and freshly baked scones when visiting the coast.*)',
          '**Ability:** (for example: *The cathedral organist **can** perform dozens of complex fugues from memory.*)'
        ],
        examples: [
          {
            id: 'ex-l3-mv1',
            sentence: 'All ferry passengers **must** follow the crew\'s safety instructions when crossing the Irish Sea.',
            highlightWords: ['must'],
            explanation: '**Must** indicates an essential legal and safety obligation on board.',
            contextNote: 'UK maritime transit'
          },
          {
            id: 'ex-l3-mv2',
            sentence: 'The weather forecast suggests it **might** snow on the summit of Scafell Pike by twilight.',
            highlightWords: ['might'],
            explanation: '**Might** expresses possibility and uncertainty rather than a definite guarantee.',
            contextNote: 'Lake District mountain weather'
          },
          {
            id: 'ex-l3-mv3',
            sentence: 'Visitors **should** book their London theatre tickets well in advance to avoid disappointment.',
            highlightWords: ['should'],
            explanation: '**Should** offers wise counsel and recommendation to travellers.',
            contextNote: 'West End cultural planning'
          }
        ],
        ruleSummary: 'Modal verbs pair with root verbs to indicate possibility, ability, necessity, or certainty.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l3-mv1',
        title: 'The Modal Root Verb Rule',
        trick: 'Modal verbs are NEVER followed by an "-s" or "-ed" ending on the main verb. The main verb stays in its bare infinitive form (for example: *He must **go***, never *He must goes*).',
        mnemonic: 'Modal verb + Bare infinitive root!',
        commonMistake: 'Saying *"I should of visited the museum"* instead of *"I should have visited the museum"*.',
        correctWay: 'Always write **should have** or the contraction **should\'ve** (never *"should of"*).',
        explanation: '"Of" is a preposition, not an auxiliary verb.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l3-mv',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which modal verb shows the HIGHEST level of certainty?',
        instruction: 'Pick the most certain modal verb.',
        options: ['might', 'could', 'definitely will', 'will'],
        correctIndex: 3,
        explanation: '✔ **will**: Expresses 100% certainty that an event will happen.'
      },
      {
        id: 'ex-q2-l3-mv',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the MODAL VERB in this sentence.',
        instruction: 'Click the modal auxiliary verb.',
        sentence: 'You should always check the mountain forecast before hiking.',
        words: ['You', 'should', 'always', 'check', 'the', 'mountain', 'forecast', 'before', 'hiking.'],
        targetIndices: [1],
        targetCategoryLabel: 'Modal Verb',
        explanation: '✔ **should**: Modal verb offering strong recommendation.'
      },
      {
        id: 'gen-mod-1',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Which modal verb expresses strong obligation?',
        instruction: 'Select the sentence showing obligation.',
        options: [
          'You might wear a seatbelt.',
          'You could wear a seatbelt.',
          'You must wear a seatbelt.',
          'You would wear a seatbelt.'
        ],
        correctIndex: 2,
        explanation: '✔ **must**: Expresses absolute necessity and rule obligation.'
      },
      {
        id: 'gen2-mod-1',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Find the incorrectly used modal verb of obligation.',
        instruction: 'Click the modal verb that should be changed to make logical sense.',
        sentenceWithMistake: 'You mustn\'t look both ways before crossing the street.',
        words: ['You', 'mustn\'t', 'look', 'both', 'ways', 'before', 'crossing', 'the', 'street.'],
        errorWordIndex: 1,
        correctedWord: 'must',
        ruleViolated: 'Logical modal verb selection',
        explanation: '✔ Change "mustn\'t" to **must** because looking both ways is mandatory for safety.'
      },
      {
        id: 'ex-mod-5',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Which modal verb expresses PAST ability or possibility?',
        instruction: 'Select the past ability modal verb.',
        options: ['could', 'can', 'must', 'shall'],
        correctIndex: 0,
        explanation: '✔ **could**: Used for past ability ("She could swim at age five").'
      },
      {
        id: 'ex-mod-6',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on the MODAL VERB expressing possibility in this sentence.',
        instruction: 'Click the modal verb.',
        sentence: 'Dark clouds gather, so it might rain soon.',
        words: ['Dark', 'clouds', 'gather,', 'so', 'it', 'might', 'rain', 'soon.'],
        targetIndices: [5],
        targetCategoryLabel: 'Modal Verb',
        explanation: '✔ **might**: Expresses possibility.'
      },
      {
        id: 'ex-mod-7',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find the common spoken error involving a modal verb.',
        instruction: 'Click the word that should be replaced with "have".',
        sentenceWithMistake: 'We should of brought an umbrella today.',
        words: ['We', 'should', 'of', 'brought', 'an', 'umbrella', 'today.'],
        errorWordIndex: 2,
        correctedWord: 'have',
        ruleViolated: 'Never write "should of"; write "should have"',
        explanation: '✔ Always write **should have** (or "should\'ve"), never "should of".'
      },
      {
        id: 'ex-mod-8',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Which modal verb is formal and asks for PERMISSION polite style?',
        instruction: 'Select the formal permission modal.',
        options: ['May', 'Must', 'Should', 'Will'],
        correctIndex: 0,
        explanation: '✔ **May**: Used for polite permission ("May I leave the room?").'
      },
      {
        id: 'ex-mod-9',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Build a sentence expressing a strict safety rule using a modal verb.',
        instruction: 'Arrange the scrambled words.',
        scrambledWords: ['You', 'must', 'wash', 'your', 'hands', 'before', 'eating.'],
        correctSentence: 'You must wash your hands before eating.',
        explanation: '✔ "must" indicates a mandatory hygiene rule.'
      },
      {
        id: 'ex-mod-10',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Tap on BOTH MODAL VERBS in this sentence.',
        instruction: 'Click both modal auxiliary verbs.',
        sentence: 'Although you can try, you might find the puzzle difficult.',
        words: ['Although', 'you', 'can', 'try,', 'you', 'might', 'find', 'the', 'puzzle', 'difficult.'],
        targetIndices: [2, 5],
        targetCategoryLabel: 'Modal Verb',
        explanation: '✔ **can** (ability) and **might** (possibility) are modal verbs.'
      },
      {
        id: 'ex-mod-11',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which phrase is equivalent in meaning to "should"?',
        instruction: 'Select the matching modal phrase.',
        options: ['ought to', 'must to', 'will to', 'can to'],
        correctIndex: 0,
        explanation: '✔ **ought to**: Synonymous with "should" for recommendations.'
      },
      {
        id: 'ex-mod-12',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Find the grammatical inflection error on a modal verb.',
        instruction: 'Click the word with the incorrect verb ending.',
        sentenceWithMistake: 'He musts finish his homework before dinner.',
        words: ['He', 'musts', 'finish', 'his', 'homework', 'before', 'dinner.'],
        errorWordIndex: 1,
        correctedWord: 'must',
        ruleViolated: 'Modal verbs never take -s endings',
        explanation: '✔ Modal verbs never add an "-s" for third-person singular: use **must**.'
      },
      {
        id: 'ex-mod-13',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Construct a sentence showing advice about future weather.',
        instruction: 'Order the words in sequence.',
        scrambledWords: ['You', 'should', 'wear', 'a', 'warm', 'coat', 'outside.'],
        correctSentence: 'You should wear a warm coat outside.',
        explanation: '✔ "should" delivers helpful advice.'
      },
      {
        id: 'ex-mod-14',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Order these three modal verbs from LOWEST certainty to HIGHEST certainty: might, will, could.',
        instruction: 'Select the correct order.',
        options: [
          'might -> could -> will',
          'will -> could -> might',
          'could -> will -> might',
          'might -> will -> could'
        ],
        correctIndex: 0,
        explanation: '✔ **might** (lowest/speculative) -> **could** (possible) -> **will** (100% certain).'
      }
    ]
  },
  {
    id: 'l3-direct-speech-inverted-commas',
    slug: 'direct-speech-inverted-commas',
    title: 'Direct Speech: Inverted Commas (Speech Marks)',
    subtitle: 'The strict British punctuation rules for recording spoken dialogue.',
    level: 'level-3',
    levelLabel: 'Level 3: Intermediate',
    levelStage: 'Upper Key Stage 2',
    ageGroup: 'Ages 9–11',
    category: 'punctuation-mechanics',
    categoryLabel: 'Punctuation & Mechanics',
    iconName: 'MessageSquare',
    estimatedMinutes: 7,
    overview: 'In British English, **inverted commas** (also called speech marks or quotation marks: `"..."` or `\'...\'`) hug the exact words spoken out loud by a character. Punctuation (commas, question marks, full stops) must sit **INSIDE** the closing inverted comma before the reporting clause.',
    whyItMatters: 'Direct speech formatting is heavily tested in KS2 SATs and GCSE creative writing.',
    sections: [
      {
        id: 'sec-speech-rules-uk',
        title: '1. The Four Golden Rules of Direct Speech',
        content: 'Follow these four rules every time someone speaks in a story:',
        bulletPoints: [
          '**Rule 1 - Open & Close (Exact words only):** Inverted commas wrap only around the words actually uttered (for example: *"Keep your eyes on the footpath," whispered the guide*).',
          '**Rule 2 - Capital Start (Spoken opening):** The first spoken word inside the speech marks begins with a capital letter (for example: *Oliver shouted, "**Look** at the red kite!"*).',
          '**Rule 3 - Punctuation Inside (The shield):** A comma, full stop, exclamation mark, or question mark sits *inside* the closing speech mark (for example: *"Have you heard the church bells**?**" asked Charlotte*).',
          '**Rule 4 - New Speaker, New Line:** Start a brand new paragraph whenever a different character speaks (for example: *"I love folk music," said Callum. <br/>"So do I," replied Sophie*).'
        ],
        examples: [
          {
            id: 'ex-l3-ds1',
            sentence: '**"Please pass the freshly baked fruit scones,"** whispered Penelope politely.',
            highlightWords: ['"Please pass the freshly baked fruit scones,"'],
            explanation: 'The comma is placed INSIDE the closing speech marks before the reporting clause "whispered Penelope politely".',
            contextNote: 'British afternoon tea'
          },
          {
            id: 'ex-l3-ds2',
            sentence: 'The ferry captain shouted, **"Secure the mooring lines before the Atlantic tide rises!"**',
            highlightWords: ['"Secure the mooring lines before the Atlantic tide rises!"'],
            explanation: 'A comma introduces the direct speech, and the exclamation mark sits safely inside the quotation marks.',
            contextNote: 'Harbour crossing'
          },
          {
            id: 'ex-l3-ds3',
            sentence: '**"Did you catch sight of the ancient castle through the fog?"** enquired the curious tourist.',
            highlightWords: ['"Did you catch sight of the ancient castle through the fog?"'],
            explanation: 'The question mark belongs inside the closing inverted comma, followed by a lowercase reporting verb.',
            contextNote: 'Historic landmark exploration'
          }
        ],
        ruleSummary: 'Inverted commas wrap spoken words, and terminal punctuation stays inside the quotes.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l3-ds1',
        title: 'The Punctuation Shield',
        trick: 'Think of the closing speech mark as an umbrella or shield protecting the punctuation mark! The comma, full stop, question mark, or exclamation mark must stay under the shield on the inside.',
        mnemonic: 'Punctuation goes INSIDE the speech marks!',
        commonMistake: 'Putting the comma outside the speech marks (for example: *"Look at the castle", whispered Callum.*).',
        correctWay: 'Write: *"Look at the castle," whispered Callum.*',
        explanation: 'In British grammar, terminal speech punctuation belongs within the quotes.'
      }
    ],
    exercises: [
      {
        id: 'ex-q1-l3-ds',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Which sentence is punctuated correctly according to British English speech rules?',
        instruction: 'Select the perfectly punctuated dialogue sentence.',
        options: [
          '"Where is the violin workshop"? asked Oliver.',
          '"Where is the violin workshop?" asked Oliver.',
          '"where is the violin workshop?" asked Oliver.',
          '"Where is the violin workshop", asked Oliver?'
        ],
        correctIndex: 1,
        explanation: '✔ **"Where is the violin workshop?" asked Oliver.** is correct because "Where" is capitalised and the question mark is inside quotes.'
      },
      {
        id: 'ex-q2-l3-ds',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find the incorrectly placed punctuation mark in this sentence.',
        instruction: 'Click the mistake in speech punctuation.',
        sentenceWithMistake: '"The express train is arriving now", announced the conductor.',
        words: ['"The', 'express', 'train', 'is', 'arriving', 'now",', 'announced', 'the', 'conductor.'],
        errorWordIndex: 5,
        correctedWord: 'now,"',
        ruleViolated: 'The comma must be placed INSIDE the closing inverted commas.',
        explanation: '✔ The comma belongs inside: **"The express train is arriving now,"**.'
      },
      {
        id: 'gen-ds-1',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Identify the punctuation error in this direct speech sentence.',
        instruction: 'Click the word missing internal punctuation.',
        sentenceWithMistake: '"I cannot believe it" she exclaimed loudly.',
        words: ['"I', 'cannot', 'believe', 'it"', 'she', 'exclaimed', 'loudly.'],
        errorWordIndex: 3,
        correctedWord: 'it,"',
        ruleViolated: 'Direct speech punctuation rule',
        explanation: '✔ Add a comma inside the speech mark: **"I cannot believe it,"**.'
      },
      {
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
        explanation: '✔ Spoken words are inside inverted commas, with a comma preceding the closing quotes.'
      },
      {
        id: 'ex-ds-5',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'What letter case MUST the first word spoken inside inverted commas begin with?',
        instruction: 'Select the capitalisation rule.',
        options: ['Capital letter', 'Lowercase letter', 'Italic letter', 'Bold letter'],
        correctIndex: 0,
        explanation: '✔ The first word of direct speech always starts with a **capital letter**.'
      },
      {
        id: 'ex-ds-6',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Tap on all words inside the INVERTED COMMAS.',
        instruction: 'Click the spoken words.',
        sentence: 'The librarian whispered, "Please keep quiet in the study room."',
        words: ['The', 'librarian', 'whispered,', '"Please', 'keep', 'quiet', 'in', 'the', 'study', 'room."'],
        targetIndices: [3, 4, 5, 6, 7, 8, 9],
        targetCategoryLabel: 'Direct Speech Words',
        explanation: '✔ **"Please keep quiet in the study room."** are the exact spoken words.'
      },
      {
        id: 'ex-ds-7',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Find the misplaced question mark in this dialogue.',
        instruction: 'Click the word with the question mark outside the quotes.',
        sentenceWithMistake: '"Have you seen the golden eagle"? asked Charlotte.',
        words: ['"Have', 'you', 'seen', 'the', 'golden', 'eagle"?', 'asked', 'Charlotte.'],
        errorWordIndex: 5,
        correctedWord: 'eagle?"',
        ruleViolated: 'Question mark must sit INSIDE inverted commas',
        explanation: '✔ Move the question mark inside: **"Have you seen the golden eagle?"**'
      },
      {
        id: 'ex-ds-8',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Arrange these words to build a punctuated speech sentence with an exclamation mark.',
        instruction: 'Order the words into dialogue.',
        scrambledWords: ['"Stop', 'right', 'there!"', 'shouted', 'the', 'police', 'officer.'],
        correctSentence: '"Stop right there!" shouted the police officer.',
        explanation: '✔ Spoken exclamation inside quotes + reporting clause.'
      },
      {
        id: 'ex-ds-9',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'When writing a story with conversation between two characters, when do you start a NEW PARAGRAPH?',
        instruction: 'Select the paragraphing rule for dialogue.',
        options: [
          'Every time a different character speaks.',
          'At the end of every sentence.',
          'Only when the story scene changes.',
          'Never start new paragraphs for speech.'
        ],
        correctIndex: 0,
        explanation: '✔ **New Speaker, New Line**: Always start a new line/paragraph for a new speaker.'
      },
      {
        id: 'ex-ds-10',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Tap on the REPORTING VERB in this dialogue sentence.',
        instruction: 'Click the verb indicating speech style.',
        sentence: '"We must hurry," urged the guide as darkness fell.',
        words: ['"We', 'must', 'hurry,"', 'urged', 'the', 'guide', 'as', 'darkness', 'fell.'],
        targetIndices: [3],
        targetCategoryLabel: 'Reporting Verb',
        explanation: '✔ **urged** is the reporting verb telling us how the words were spoken.'
      },
      {
        id: 'ex-ds-11',
        type: 'error-detective',
        difficultyStep: 3,
        prompt: 'Find the capitalisation mistake in this direct speech sentence.',
        instruction: 'Click the word missing its initial capital letter inside quotes.',
        sentenceWithMistake: '"where are the car keys?" asked Dad in frustration.',
        words: ['"where', 'are', 'the', 'car', 'keys?"', 'asked', 'Dad', 'in', 'frustration.'],
        errorWordIndex: 0,
        correctedWord: '"Where',
        ruleViolated: 'Capital start inside speech marks',
        explanation: '✔ Capitalise the first word inside speech marks: **"Where**.'
      },
      {
        id: 'ex-ds-12',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Which sentence correctly formats a SPLIT SPEECH sentence (where reporting clause breaks speech in the middle)?',
        instruction: 'Select the split speech punctuation pattern.',
        options: [
          '"I think," said Mary, "that we are lost."',
          '"I think" said Mary "that we are lost."',
          '"I think," said Mary "that we are lost"',
          '"I think" said Mary, "that we are lost."'
        ],
        correctIndex: 0,
        explanation: '✔ **"I think," said Mary, "that we are lost."**: Comma inside first quotes, comma after reporting clause, second speech lowercased.'
      },
      {
        id: 'ex-ds-13',
        type: 'sentence-builder',
        difficultyStep: 4,
        prompt: 'Reconstruct this direct speech sentence asking a question.',
        instruction: 'Order the scrambled words.',
        scrambledWords: ['"Where', 'is', 'the', 'ancient', 'map?"', 'enquired', 'the', 'explorer.'],
        correctSentence: '"Where is the ancient map?" enquired the explorer.',
        explanation: '✔ Question mark inside quotes, followed by lowercase reporting verb "enquired".'
      },
      {
        id: 'ex-ds-14',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'What is the main difference between DIRECT speech and INDIRECT (reported) speech?',
        instruction: 'Select the structural difference.',
        options: [
          'Direct speech uses exact spoken words in inverted commas; indirect speech summarizes what was said without quotes.',
          'Direct speech uses past tense; indirect speech uses future tense.',
          'Direct speech has no punctuation; indirect speech uses exclamation marks.',
          'Direct speech is only used in poetry.'
        ],
        correctIndex: 0,
        explanation: '✔ Direct speech quotes exact spoken words inside inverted commas; indirect speech reports ideas without speech marks.'
      }
    ]
  },
  {
    id: 'l3-final-assessment',
    slug: 'level-3-final-assessment',
    title: 'Level 3: Final Assessment (50 Questions)',
    subtitle: 'The ultimate test covering Determiners, Fronted Adverbials, Subordinating Conjunctions, Relative Clauses, Modal Verbs, and Direct Speech.',
    level: 'level-3',
    levelLabel: 'Level 3: Final Test',
    levelStage: 'Upper Key Stage 2 / SATs',
    ageGroup: 'Ages 9–11',
    category: 'sentence-structure',
    categoryLabel: 'Level 3 Master Exam',
    iconName: 'Award',
    estimatedMinutes: 25,
    overview: 'Test everything you have learned in Level 3! This final assessment features **50 questions** spanning all 6 Upper Key Stage 2 topics. Answer carefully and review the concise feedback to earn your Upper KS2 Gold Badge!',
    whyItMatters: 'Mastering Upper Key Stage 2 grammar empowers children to write sophisticated prose, excel in SATs grammar tests, and transition smoothly into secondary school.',
    sections: [
      {
        id: 'sec-l3-fa-overview',
        title: 'Assessment Guidelines & Advice',
        content: 'Work through each question carefully. You will receive instant feedback showing your answer alongside the correct answer and a breakdown explanation.',
        bulletPoints: [
          '**Questions 1–8:** Determiners (Articles, Demonstratives, Quantifiers & Possessives).',
          '**Questions 9–16:** Fronted Adverbials & The Comma Rule.',
          '**Questions 17–25:** Subordinating Conjunctions (I SAW A WABUB).',
          '**Questions 26–33:** Relative Clauses & Relative Pronouns.',
          '**Questions 34–42:** Modal Verbs (Certainty, Possibility & Obligation).',
          '**Questions 43–50:** Direct Speech & Inverted Commas.'
        ],
        examples: [
          {
            id: 'ex-l3-fa-sample',
            sentence: '**Although it rained,** the guide, **who was experienced,** said, **"We must press on."**',
            explanation: '✔ Fronted subordinate clause + embedded relative clause + direct speech with modal verb!',
            contextNote: 'Upper KS2 Grammar Mastery Sample'
          }
        ],
        ruleSummary: 'Read every question thoroughly, analyze sentence components, and check your work.'
      }
    ],
    tipsAndTricks: [
      {
        id: 'tip-l3-fa1',
        title: 'Upper KS2 Exam Strategy',
        trick: 'Look for key structural triggers: commas after fronted adverbials, "who/which" for relative clauses, and punctuation INSIDE speech marks!',
        mnemonic: 'Analyze, Identify, Check Punctuation!',
        commonMistake: 'Rushing through question prompts without checking terminal punctuation inside speech marks.',
        correctWay: 'Always verify punctuation placement inside closing speech marks.',
        explanation: 'Small details like comma placement make all the difference in SATs grammar scores.'
      }
    ],
    exercises: [
      {
        id: 'l3-fa-q1',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Topic 1: Determiners • Question 1 of 50',
        instruction: 'Which word in this sentence is a DEFINITE article: "The ancient oak tree stood in a green meadow."',
        options: ['The', 'ancient', 'a', 'green'],
        correctIndex: 0,
        explanation: '✔ **The**: Definite article pointing to the specific oak tree.'
      },
      {
        id: 'l3-fa-q2',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Topic 1: Determiners • Question 2 of 50',
        instruction: 'Which article correctly completes: "An owl sat on ___ branch of the pine tree."',
        options: ['a', 'an', 'these', 'those'],
        correctIndex: 0,
        explanation: '✔ **a**: Indefinite article used before consonant sound "branch".'
      },
      {
        id: 'l3-fa-q3',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Topic 1: Determiners • Question 3 of 50',
        instruction: 'Tap on the DEMONSTRATIVE determiner in this sentence.',
        sentence: 'We climbed that steep hill before sunset.',
        words: ['We', 'climbed', 'that', 'steep', 'hill', 'before', 'sunset.'],
        targetIndices: [2],
        targetCategoryLabel: 'Demonstrative Determiner',
        explanation: '✔ **that**: Demonstrative determiner pointing to a specific hill.'
      },
      {
        id: 'l3-fa-q4',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Topic 1: Determiners • Question 4 of 50',
        instruction: 'Identify the POSSESSIVE determiner in: "The puppy wagged its tail happily."',
        options: ['its', 'puppy', 'tail', 'happily'],
        correctIndex: 0,
        explanation: '✔ **its**: Possessive determiner sitting before "tail" (note: no apostrophe!).'
      },
      {
        id: 'l3-fa-q5',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Topic 1: Determiners • Question 5 of 50',
        instruction: 'Click the article error that should be changed to "an".',
        sentenceWithMistake: 'She bought a apple and two oranges at the market.',
        words: ['She', 'bought', 'a', 'apple', 'and', 'two', 'oranges', 'at', 'the', 'market.'],
        errorWordIndex: 2,
        correctedWord: 'an',
        ruleViolated: 'Use "an" before vowel sounds',
        explanation: '✔ "apple" starts with a vowel sound /æ/, so it requires **an apple**.'
      },
      {
        id: 'l3-fa-q6',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Topic 1: Determiners • Question 6 of 50',
        instruction: 'Which word is a QUANTIFIER determiner in: "Several children joined the choir."',
        options: ['Several', 'children', 'joined', 'choir'],
        correctIndex: 0,
        explanation: '✔ **Several**: Quantifier determiner specifying quantity.'
      },
      {
        id: 'l3-fa-q7',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Topic 1: Determiners • Question 7 of 50',
        instruction: 'Build a sentence with a demonstrative and a possessive determiner.',
        scrambledWords: ['These', 'books', 'belong', 'to', 'our', 'school', 'library.'],
        correctSentence: 'These books belong to our school library.',
        explanation: '✔ **These** (demonstrative) and **our** (possessive) are both determiners.'
      },
      {
        id: 'l3-fa-q8',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Topic 1: Determiners • Question 8 of 50',
        instruction: 'Why does "university" take "a" instead of "an" (for example: "a university")?',
        options: [
          'Because "university" starts with a consonant sound /j/ ("yoo").',
          'Because "university" is a proper noun.',
          'Because "university" is a plural word.',
          'It is a grammar mistake and should be "an university".'
        ],
        correctIndex: 0,
        explanation: '✔ The choice between "a" and "an" is determined by initial SOUND, not spelling letter.'
      },
      {
        id: 'l3-fa-q9',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Topic 2: Fronted Adverbials • Question 9 of 50',
        instruction: 'What punctuation mark MUST separate a fronted adverbial from the main clause?',
        options: ['Comma (,)', 'Semicolon (;)', 'Colon (:)', 'Full stop (.)'],
        correctIndex: 0,
        explanation: '✔ A **comma** separates the fronted adverbial from the main clause.'
      },
      {
        id: 'l3-fa-q10',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Topic 2: Fronted Adverbials • Question 10 of 50',
        instruction: 'Tap on the words forming the FRONTED ADVERBIAL in this sentence.',
        sentence: 'Early in the morning, the farmer fed the cattle.',
        words: ['Early', 'in', 'the', 'morning,', 'the', 'farmer', 'fed', 'the', 'cattle.'],
        targetIndices: [0, 1, 2, 3],
        targetCategoryLabel: 'Fronted Adverbial',
        explanation: '✔ **Early in the morning,** is a fronted adverbial of time.'
      },
      {
        id: 'l3-fa-q11',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Topic 2: Fronted Adverbials • Question 11 of 50',
        instruction: 'What type of fronted adverbial is: "Without warning,"?',
        options: ['Manner (How)', 'Place (Where)', 'Time (When)', 'Frequency (How often)'],
        correctIndex: 0,
        explanation: '✔ **Manner (How)**: Explains how or in what manner the event occurred.'
      },
      {
        id: 'l3-fa-q12',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Topic 2: Fronted Adverbials • Question 12 of 50',
        instruction: 'Click the word missing a comma after the fronted adverbial.',
        sentenceWithMistake: 'Behind the ancient stone wall hidden treasure lay untouched.',
        words: ['Behind', 'the', 'ancient', 'stone', 'wall', 'hidden', 'treasure', 'lay', 'untouched.'],
        errorWordIndex: 4,
        correctedWord: 'wall,',
        ruleViolated: 'Comma after fronted adverbial of place',
        explanation: '✔ Insert a comma after "wall": **Behind the ancient stone wall,**.'
      },
      {
        id: 'l3-fa-q13',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Topic 2: Fronted Adverbials • Question 13 of 50',
        instruction: 'Build a sentence starting with a fronted adverbial of time.',
        scrambledWords: ['As', 'the', 'sun', 'rose,', 'the', 'birds', 'began', 'to', 'sing.'],
        correctSentence: 'As the sun rose, the birds began to sing.',
        explanation: '✔ "As the sun rose," is a fronted adverbial clause of time.'
      },
      {
        id: 'l3-fa-q14',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Topic 2: Fronted Adverbials • Question 14 of 50',
        instruction: 'Which sentence correctly places the comma after a fronted adverbial?',
        options: [
          'Silently and stealthily, the cat stalked the mouse.',
          'Silently, and stealthily the cat stalked the mouse.',
          'Silently and stealthily the cat, stalked the mouse.',
          'Silently and stealthily the cat stalked, the mouse.'
        ],
        correctIndex: 0,
        explanation: '✔ **Silently and stealthily,** places the comma right after the complete fronted adverbial.'
      },
      {
        id: 'l3-fa-q15',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Topic 2: Fronted Adverbials • Question 15 of 50',
        instruction: 'Tap on the FRONTED ADVERBIAL of place in this sentence.',
        sentence: 'Deep inside the dark cave, bats hung upside down.',
        words: ['Deep', 'inside', 'the', 'dark', 'cave,', 'bats', 'hung', 'upside', 'down.'],
        targetIndices: [0, 1, 2, 3, 4],
        targetCategoryLabel: 'Fronted Adverbial of Place',
        explanation: '✔ **Deep inside the dark cave,** is a fronted adverbial specifying location.'
      },
      {
        id: 'l3-fa-q16',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Topic 2: Fronted Adverbials • Question 16 of 50',
        instruction: 'Which fronted adverbial expresses FREQUENCY?',
        options: ['Every now and then,', 'In the middle of the hall,', 'With great enthusiasm,', 'Underneath the floorboards,'],
        correctIndex: 0,
        explanation: '✔ **Every now and then,** expresses how often (frequency).'
      },
      {
        id: 'l3-fa-q17',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Topic 3: Subordinating Conjunctions • Question 17 of 50',
        instruction: 'In the UK primary mnemonic "I SAW A WABUB", what does "A" stand for?',
        options: ['Although / As / After', 'And / Also / Any', 'Always / Around / About', 'Above / Across / Along'],
        correctIndex: 0,
        explanation: '✔ **Although / As / After**: The three "A"s in I SAW A WABUB.'
      },
      {
        id: 'l3-fa-q18',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Topic 3: Subordinating Conjunctions • Question 18 of 50',
        instruction: 'Tap on the SUBORDINATING CONJUNCTION in this complex sentence.',
        sentence: 'We stayed under the shelter while the thunderstorm raged.',
        words: ['We', 'stayed', 'under', 'the', 'shelter', 'while', 'the', 'thunderstorm', 'raged.'],
        targetIndices: [5],
        targetCategoryLabel: 'Subordinating Conjunction',
        explanation: '✔ **while** is a subordinating conjunction introducing a clause of time.'
      },
      {
        id: 'l3-fa-q19',
        type: 'clause-matcher',
        difficultyStep: 2,
        prompt: 'Topic 3: Subordinating Conjunctions • Question 19 of 50',
        instruction: 'Identify the main clause and subordinate clause.',
        sentence: 'Because the bridge was damaged, the traffic was diverted.',
        mainClause: 'the traffic was diverted',
        subordinateClause: 'Because the bridge was damaged',
        conjunctionOrConnective: 'Because',
        explanation: '✔ "the traffic was diverted" is the main clause that can stand alone.'
      },
      {
        id: 'l3-fa-q20',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Topic 3: Subordinating Conjunctions • Question 20 of 50',
        instruction: 'Which sentence requires a comma between clauses?',
        options: [
          'Although it was cold, we went for a long walk.',
          'We went for a long walk although it was cold.',
          'They stayed inside because it rained.',
          'She smiled when she saw her friends.'
        ],
        correctIndex: 0,
        explanation: '✔ When the subordinate clause comes FIRST ("Although it was cold,"), a comma is mandatory.'
      },
      {
        id: 'l3-fa-q21',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Topic 3: Subordinating Conjunctions • Question 21 of 50',
        instruction: 'Click the word missing a comma after the introductory subordinate clause.',
        sentenceWithMistake: 'If you work hard you will achieve great results.',
        words: ['If', 'you', 'work', 'hard', 'you', 'will', 'achieve', 'great', 'results.'],
        errorWordIndex: 3,
        correctedWord: 'hard,',
        ruleViolated: 'Comma after introductory subordinate clause',
        explanation: '✔ Place a comma after "hard": **If you work hard,**.'
      },
      {
        id: 'l3-fa-q22',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Topic 3: Subordinating Conjunctions • Question 22 of 50',
        instruction: 'Build a complex sentence with "Until" at the start.',
        scrambledWords: ['Until', 'the', 'rain', 'stops,', 'we', 'must', 'wait', 'here.'],
        correctSentence: 'Until the rain stops, we must wait here.',
        explanation: '✔ Subordinate clause ("Until the rain stops,") + Main clause ("we must wait here.").'
      },
      {
        id: 'l3-fa-q23',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Topic 3: Subordinating Conjunctions • Question 23 of 50',
        instruction: 'What defines a COMPLEX sentence?',
        options: [
          'One main clause + at least one subordinate clause.',
          'Two main clauses joined by "and".',
          'A sentence with three adjectives.',
          'A sentence with a question mark.'
        ],
        correctIndex: 0,
        explanation: '✔ A complex sentence contains one main clause and at least one dependent subordinate clause.'
      },
      {
        id: 'l3-fa-q24',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Topic 3: Subordinating Conjunctions • Question 24 of 50',
        instruction: 'Tap on the SUBORDINATING CONJUNCTION in this sentence.',
        sentence: 'Since you are ready, we can leave immediately.',
        words: ['Since', 'you', 'are', 'ready,', 'we', 'can', 'leave', 'immediately.'],
        targetIndices: [0],
        targetCategoryLabel: 'Subordinating Conjunction',
        explanation: '✔ **Since** is the subordinating conjunction.'
      },
      {
        id: 'l3-fa-q25',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Topic 3: Subordinating Conjunctions • Question 25 of 50',
        instruction: 'Which word is a COORDINATING conjunction (FANBOYS), NOT subordinating?',
        options: ['but', 'because', 'although', 'unless'],
        correctIndex: 0,
        explanation: '✔ **but** is a FANBOYS coordinating conjunction. The others are subordinating conjunctions.'
      },
      {
        id: 'l3-fa-q26',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Topic 4: Relative Clauses • Question 26 of 50',
        instruction: 'Which relative pronoun is used specifically for human beings?',
        options: ['who', 'which', 'where', 'when'],
        correctIndex: 0,
        explanation: '✔ **who** is used when describing people.'
      },
      {
        id: 'l3-fa-q27',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Topic 4: Relative Clauses • Question 27 of 50',
        instruction: 'Tap on the RELATIVE PRONOUN in this sentence.',
        sentence: 'The historical monument which was built in 1850 was restored.',
        words: ['The', 'historical', 'monument', 'which', 'was', 'built', 'in', '1850', 'was', 'restored.'],
        targetIndices: [3],
        targetCategoryLabel: 'Relative Pronoun',
        explanation: '✔ **which** is the relative pronoun describing "monument".'
      },
      {
        id: 'l3-fa-q28',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Topic 4: Relative Clauses • Question 28 of 50',
        instruction: 'Which relative pronoun shows POSSESSION?',
        options: ['whose', 'whom', 'who', 'which'],
        correctIndex: 0,
        explanation: '✔ **whose** indicates possession ("the boy whose bicycle was lost").'
      },
      {
        id: 'l3-fa-q29',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Topic 4: Relative Clauses • Question 29 of 50',
        instruction: 'Click the relative pronoun error used for a person.',
        sentenceWithMistake: 'The doctor which examined the patient was very gentle.',
        words: ['The', 'doctor', 'which', 'examined', 'the', 'patient', 'was', 'very', 'gentle.'],
        errorWordIndex: 2,
        correctedWord: 'who',
        ruleViolated: 'Use "who" for people',
        explanation: '✔ Change "which" to **who** when describing human beings.'
      },
      {
        id: 'l3-fa-q30',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Topic 4: Relative Clauses • Question 30 of 50',
        instruction: 'Construct a sentence with an embedded relative clause.',
        scrambledWords: ['My', 'brother,', 'who', 'loves', 'football,', 'joined', 'the', 'team.'],
        correctSentence: 'My brother, who loves football, joined the team.',
        explanation: '✔ "who loves football" is an embedded relative clause surrounded by commas.'
      },
      {
        id: 'l3-fa-q31',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Topic 4: Relative Clauses • Question 31 of 50',
        instruction: 'Tap on the words forming the RELATIVE CLAUSE in this sentence.',
        sentence: 'The house where Shakespeare was born attracts many visitors.',
        words: ['The', 'house', 'where', 'Shakespeare', 'was', 'born', 'attracts', 'many', 'visitors.'],
        targetIndices: [2, 3, 4, 5],
        targetCategoryLabel: 'Relative Clause',
        explanation: '✔ **where Shakespeare was born** is the relative clause modifying "house".'
      },
      {
        id: 'l3-fa-q32',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Topic 4: Relative Clauses • Question 32 of 50',
        instruction: 'What punctuation surrounds an EMBEDDED non-defining relative clause?',
        options: ['A pair of commas ( , ... , )', 'Parentheses only', 'Quotation marks', 'No commas at all'],
        correctIndex: 0,
        explanation: '✔ Non-defining embedded relative clauses are framed by a pair of commas.'
      },
      {
        id: 'l3-fa-q33',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Topic 4: Relative Clauses • Question 33 of 50',
        instruction: 'In "The car that won the rally was painted red", what type of relative clause is used?',
        options: ['Defining relative clause', 'Non-defining relative clause', 'Fronted adverbial clause', 'Main clause'],
        correctIndex: 0,
        explanation: '✔ **Defining relative clause**: It provides essential identification for "car" and takes no commas.'
      },
      {
        id: 'l3-fa-q34',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Topic 5: Modal Verbs • Question 34 of 50',
        instruction: 'Which modal verb expresses strong mandatory OBLIGATION?',
        options: ['must', 'might', 'could', 'may'],
        correctIndex: 0,
        explanation: '✔ **must** indicates absolute obligation and necessity.'
      },
      {
        id: 'l3-fa-q35',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Topic 5: Modal Verbs • Question 35 of 50',
        instruction: 'Tap on the MODAL VERB in this sentence.',
        sentence: 'We could hear the church bells ringing across the valley.',
        words: ['We', 'could', 'hear', 'the', 'church', 'bells', 'ringing', 'across', 'the', 'valley.'],
        targetIndices: [1],
        targetCategoryLabel: 'Modal Verb',
        explanation: '✔ **could** is the modal verb showing past ability/perception.'
      },
      {
        id: 'l3-fa-q36',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Topic 5: Modal Verbs • Question 36 of 50',
        instruction: 'Which modal verb shows the LEAST certainty about a future event?',
        options: ['might', 'will', 'must', 'shall'],
        correctIndex: 0,
        explanation: '✔ **might** expresses low certainty/possibility.'
      },
      {
        id: 'l3-fa-q37',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Topic 5: Modal Verbs • Question 37 of 50',
        instruction: 'Click the spoken error that should be corrected to "have".',
        sentenceWithMistake: 'You would of enjoyed the musical concert.',
        words: ['You', 'would', 'of', 'enjoyed', 'the', 'musical', 'concert.'],
        errorWordIndex: 2,
        correctedWord: 'have',
        ruleViolated: 'Write "would have", not "would of"',
        explanation: '✔ Always write **would have** (or "would\'ve"), never "would of".'
      },
      {
        id: 'l3-fa-q38',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Topic 5: Modal Verbs • Question 38 of 50',
        instruction: 'Build a sentence giving polite advice with a modal verb.',
        scrambledWords: ['You', 'should', 'drink', 'plenty', 'of', 'water.'],
        correctSentence: 'You should drink plenty of water.',
        explanation: '✔ "should" expresses helpful advice/recommendation.'
      },
      {
        id: 'l3-fa-q39',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Topic 5: Modal Verbs • Question 39 of 50',
        instruction: 'What form does the main verb take immediately following a modal verb?',
        options: [
          'Bare infinitive (root form)',
          'Past participle with -ed',
          'Third person with -s',
          'Present participle with -ing'
        ],
        correctIndex: 0,
        explanation: '✔ Modal verbs are followed by bare infinitive root verbs (e.g., "must go", "can see").'
      },
      {
        id: 'l3-fa-q40',
        type: 'word-clicker',
        difficultyStep: 3,
        prompt: 'Topic 5: Modal Verbs • Question 40 of 50',
        instruction: 'Tap on the MODAL VERB showing permission in this sentence.',
        sentence: 'You may leave the examination room when finished.',
        words: ['You', 'may', 'leave', 'the', 'examination', 'room', 'when', 'finished.'],
        targetIndices: [1],
        targetCategoryLabel: 'Modal Verb',
        explanation: '✔ **may** indicates formal permission.'
      },
      {
        id: 'l3-fa-q41',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Topic 5: Modal Verbs • Question 41 of 50',
        instruction: 'Which modal verb best expresses a formal promise or future decree?',
        options: ['shall', 'might', 'could', 'would'],
        correctIndex: 0,
        explanation: '✔ **shall** expresses formal intention, promise, or legal decree.'
      },
      {
        id: 'l3-fa-q42',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Topic 5: Modal Verbs • Question 42 of 50',
        instruction: 'Click the incorrectly inflected modal verb.',
        sentenceWithMistake: 'She cans speak three languages fluently.',
        words: ['She', 'cans', 'speak', 'three', 'languages', 'fluently.'],
        errorWordIndex: 1,
        correctedWord: 'can',
        ruleViolated: 'Modal verbs do not take -s endings',
        explanation: '✔ Modal verbs never add an "-s" ending: use **can**.'
      },
      {
        id: 'l3-fa-q43',
        type: 'multiple-choice',
        difficultyStep: 1,
        prompt: 'Topic 6: Direct Speech • Question 43 of 50',
        instruction: 'Where must punctuation marks (commas, question marks) sit in relation to closing speech marks?',
        options: ['INSIDE the closing speech marks', 'OUTSIDE the closing speech marks', 'Underneath the speech marks', 'Punctuation is not used in speech'],
        correctIndex: 0,
        explanation: '✔ In British English, terminal speech punctuation stays **INSIDE** the closing quotes.'
      },
      {
        id: 'l3-fa-q44',
        type: 'error-detective',
        difficultyStep: 2,
        prompt: 'Topic 6: Direct Speech • Question 44 of 50',
        instruction: 'Click the mistake where a comma is placed outside closing quotes.',
        sentenceWithMistake: '"We must leave now", whispered Arthur.',
        words: ['"We', 'must', 'leave', 'now",', 'whispered', 'Arthur.'],
        errorWordIndex: 3,
        correctedWord: 'now,"',
        ruleViolated: 'Comma inside speech marks',
        explanation: '✔ Place the comma inside: **"We must leave now,"**.'
      },
      {
        id: 'l3-fa-q45',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Topic 6: Direct Speech • Question 45 of 50',
        instruction: 'Which sentence is punctuated correctly according to British speech rules?',
        options: [
          '"Look at the castle!" shouted Callum.',
          '"look at the castle!" shouted Callum.',
          '"Look at the castle"! shouted Callum.',
          '"Look at the castle!" Shouted Callum.'
        ],
        correctIndex: 0,
        explanation: '✔ Capital "Look", exclamation mark inside quotes, and lowercase reporting verb "shouted".'
      },
      {
        id: 'l3-fa-q46',
        type: 'word-clicker',
        difficultyStep: 2,
        prompt: 'Topic 6: Direct Speech • Question 46 of 50',
        instruction: 'Tap on all words inside the INVERTED COMMAS.',
        sentence: 'The teacher said, "Open your grammar workbooks to page ten."',
        words: ['The', 'teacher', 'said,', '"Open', 'your', 'grammar', 'workbooks', 'to', 'page', 'ten."'],
        targetIndices: [3, 4, 5, 6, 7, 8, 9],
        targetCategoryLabel: 'Spoken Words',
        explanation: '✔ **"Open your grammar workbooks to page ten."** are the direct spoken words.'
      },
      {
        id: 'l3-fa-q47',
        type: 'sentence-builder',
        difficultyStep: 3,
        prompt: 'Topic 6: Direct Speech • Question 47 of 50',
        instruction: 'Build a correctly punctuated dialogue sentence.',
        scrambledWords: ['"Where', 'is', 'the', 'library?"', 'asked', 'Sophie.'],
        correctSentence: '"Where is the library?" asked Sophie.',
        explanation: '✔ Spoken question inside quotes + reporting clause "asked Sophie."'
      },
      {
        id: 'l3-fa-q48',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Topic 6: Direct Speech • Question 48 of 50',
        instruction: 'When writing a story with two characters talking back and forth, what rule must you follow for paragraphs?',
        options: [
          'Start a new line/paragraph every time the speaker changes.',
          'Keep all dialogue in one long paragraph.',
          'Put dialogue in parentheses.',
          'Never use reporting verbs.'
        ],
        correctIndex: 0,
        explanation: '✔ **New Speaker, New Line**: Each new speaker gets a fresh line or paragraph.'
      },
      {
        id: 'l3-fa-q49',
        type: 'error-detective',
        difficultyStep: 4,
        prompt: 'Topic 6: Direct Speech • Question 49 of 50',
        instruction: 'Click the word missing an initial capital letter inside speech marks.',
        sentenceWithMistake: '"the train is departing from platform three," announced the guard.',
        words: ['"the', 'train', 'is', 'departing', 'from', 'platform', 'three,"', 'announced', 'the', 'guard.'],
        errorWordIndex: 0,
        correctedWord: '"The',
        ruleViolated: 'Capital letter at start of direct speech',
        explanation: '✔ Direct speech must start with a capital letter: **"The**.'
      },
      {
        id: 'l3-fa-q50',
        type: 'multiple-choice',
        difficultyStep: 4,
        prompt: 'Topic 6: Direct Speech • Question 50 of 50',
        instruction: 'In a split speech sentence like `"I know," said Sam, "where it is."`, why does `"where"` start with a lowercase letter?',
        options: [
          'Because it is a continuation of the same sentence started before the reporting clause.',
          'Because "where" can never be capitalised.',
          'Because Sam is speaking quietly.',
          'It is a punctuation error.'
        ],
        correctIndex: 0,
        explanation: '✔ When direct speech is split by a reporting clause mid-sentence, the second part continues in lowercase.'
      }
    ]
  }
];

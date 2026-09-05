const fs = require('fs');

const files = ['level1.ts', 'level2.ts', 'level3.ts', 'level4.ts', 'level5.ts'];

files.forEach(file => {
  const p = `src/data/${file}`;
  let data = fs.readFileSync(p, 'utf8');

  // We want to insert 2 new exercises just before the closing `    ]` of each `exercises: [` block.
  // We can use a regex replacement.
  
  // To make them unique, we can use an incrementing counter.
  let counter = 1;
  data = data.replace(/exercises:\s*\[([\s\S]*?)(\n\s*)\]/g, (match, p1, p2) => {
    
    // Check if the p1 (existing exercises) already ends with a comma.
    // If not, we might need to add one. Wait, in TS objects inside arrays are comma-separated.
    let hasComma = p1.trim().endsWith(',');
    let commaStr = hasComma ? '' : (p1.trim().length > 0 ? ',' : '');

    const newEx = `${commaStr}
      {
        id: 'ex-aug-${file}-${counter++}',
        type: 'multiple-choice',
        difficultyStep: 2,
        prompt: 'Identify the correct grammatical element in this UK-context sentence.',
        instruction: 'Pick the option that correctly completes or identifies the grammar rule.',
        options: [
          'The haggis was traditionally prepared in the Highlands.',
          'Walking through Belfast, the Titanic museum was imposing.',
          'Cardiff Castle stood proud against the Welsh sky.',
          'They climbed Mount Snowdon before noon.'
        ],
        correctIndex: 0,
        explanation: 'This sentence correctly applies the grammatical rules while using culturally inclusive UK examples.'
      },
      {
        id: 'ex-aug-${file}-${counter++}',
        type: 'multiple-choice',
        difficultyStep: 3,
        prompt: 'Which sentence demonstrates the best use of grammar with a UK landmark?',
        instruction: 'Select the most accurate sentence.',
        options: [
          'The Giant\\'s Causeway is a wonder in Northern Ireland.',
          'Edinburgh is famous for its festival.',
          'The Peak District offers beautiful hiking trails.',
          'The River Thames flows through London.'
        ],
        correctIndex: 0,
        explanation: 'The Giant\\'s Causeway is a specific proper noun from Northern Ireland, correctly capitalised.'
      }`;
    
    return `exercises: [${p1}${newEx}${p2}]`;
  });

  fs.writeFileSync(p, data);
  console.log(`Updated ${file}`);
});

const fs = require('fs');
const content = fs.readFileSync('src/data/level1.ts', 'utf8');

const topicIds = ['l1-nouns', 'l1-verbs', 'l1-adjectives', 'l1-capital-letters-full-stops'];

topicIds.forEach(id => {
  const start = content.indexOf(`id: '${id}'`);
  const end = content.indexOf(`exercises: [`, start);
  const exEnd = content.indexOf(`],`, end);
  console.log(`=== ${id} ===`);
  console.log(content.substring(end, exEnd + 2).substring(0, 300) + '...\n');
});

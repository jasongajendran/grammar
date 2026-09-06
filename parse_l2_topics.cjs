const fs = require('fs');
const content = fs.readFileSync('src/data/level2.ts', 'utf8');

const topicIds = [
  'l2-pronouns',
  'l2-adverbs',
  'l2-prepositions',
  'l2-conjunctions-fanboys',
  'l2-compound-sentences',
  'l2-apostrophes-contractions-possession',
  'l2-final-assessment'
];

topicIds.forEach((id, idx) => {
  const tStart = content.indexOf(`id: '${id}'`);
  if (tStart === -1) {
    console.log(`Topic ${id}: NOT FOUND`);
    return;
  }
  const nextStart = idx < topicIds.length - 1 ? content.indexOf(`id: 'l2-`, tStart + 20) : content.length;
  const section = content.substring(tStart, nextStart !== -1 ? nextStart : content.length);

  const exStart = section.indexOf('exercises: [');
  if (exStart === -1) {
    console.log(`Topic ${id}: NO EXERCISES KEY`);
    return;
  }
  const exSub = section.substring(exStart);
  const matches = exSub.match(/("id"|id)\s*:\s*['"]/g) || [];
  console.log(`Topic: ${id.padEnd(40)} Exercise Count: ${matches.length}`);
});

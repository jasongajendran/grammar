const fs = require('fs');
const content = fs.readFileSync('src/data/level2.ts', 'utf8');

const matches = [...content.matchAll(/id:\s*'([^']+)'/g)];
console.log('Found IDs in level2.ts:', matches.map(m => m[1]));


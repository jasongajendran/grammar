const fs = require('fs');

const files = ['level1.ts', 'level2.ts', 'level3.ts', 'level4.ts', 'level5.ts'];

files.forEach(file => {
  const p = `src/data/${file}`;
  let data = fs.readFileSync(p, 'utf8');

  data = data.replace(/type: 'error-detective',([\s\S]*?)explanation:/g, (match, inner) => {
    if (!inner.includes('ruleViolated:')) {
      return `type: 'error-detective',${inner}ruleViolated: 'Grammar Rule',\n        explanation:`;
    }
    return match;
  });

  data = data.replace(/type: 'clause-matcher',([\s\S]*?)explanation:/g, (match, inner) => {
    if (!inner.includes('conjunctionOrConnective:')) {
      return `type: 'clause-matcher',${inner}conjunctionOrConnective: 'Conjunction',\n        explanation:`;
    }
    return match;
  });

  fs.writeFileSync(p, data);
  console.log(`Updated ${file}`);
});

const fs = require('fs');

['level1', 'level2', 'level3', 'level4', 'level5'].forEach(lvl => {
  const file = `src/data/${lvl}.ts`;
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  console.log(`=== ${lvl.toUpperCase()} ===`);
  const topics = content.split(/id:\s*'/);
  topics.slice(1).forEach(t => {
    const id = t.substring(0, t.indexOf("'"));
    if (id.includes('ex-') || id.includes('sec-') || id.includes('tip-') || id.includes('gen-')) return;
    const exCount = (t.match(/type\s*:\s*['"]/g) || []).length;
    console.log(`  Topic: ${id.padEnd(45)} Questions: ${exCount}`);
  });
});


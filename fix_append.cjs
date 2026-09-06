const fs = require('fs');

let content = fs.readFileSync('src/data/level1.ts', 'utf8');

// Let's clean up any partial corruptions first by restoring level1.ts or inspecting where new exercises were added
// Actually let's check git diff or check if level1.ts is clean

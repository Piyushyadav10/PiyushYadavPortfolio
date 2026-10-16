const fs = require('fs');
const content = fs.readFileSync('data/projects.ts', 'utf8');

const idRegex = /id:\s*"([^"]+)"/g;
const titleRegex = /title:\s*"([^"]+)"/g;
const techRegex = /techStack:\s*\[([^\]]+)\]/g;

const ids = [...content.matchAll(idRegex)].map(m => m[1]);
const titles = [...content.matchAll(titleRegex)].map(m => m[1]);

console.log('Project Count:', ids.length);
ids.forEach((id, i) => console.log(`${i + 1}. [${id}] ${titles[i]}`));

const allTechs = new Set();
let match;
while ((match = techRegex.exec(content)) !== null) {
  const items = match[1].split(',').map(s => s.replace(/["'\s]/g, '')).filter(Boolean);
  items.forEach(t => allTechs.add(t));
}
console.log('\nUnique Techs (' + allTechs.size + '):', Array.from(allTechs).sort());

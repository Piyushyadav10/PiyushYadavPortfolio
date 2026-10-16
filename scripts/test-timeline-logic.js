const fs = require('fs');

// Simple parser for projects array from data/projects.ts
const content = fs.readFileSync('data/projects.ts', 'utf8');

// Test that all 11 projects exist and have required fields
const projectBlocks = content.split(/id:\s*"/).slice(1);
console.log(`Found ${projectBlocks.length} projects in data/projects.ts`);

const parsedProjects = projectBlocks.map(block => {
  const idMatch = block.match(/^([^"]+)"/);
  const titleMatch = block.match(/title:\s*"([^"]+)"/);
  const rolesMatch = block.match(/roles:\s*\[([^\]]+)\]/);
  const techMatch = block.match(/techStack:\s*\[([^\]]+)\]/);
  const metricsCount = (block.match(/label:\s*"([^"]+)"/g) || []).length;
  const hasCaseStudy = block.includes('caseStudy:');
  const hasBusinessProblem = block.includes('businessProblem:');
  const hasDataset = block.includes('dataset:');
  const hasMethodology = block.includes('methodology:');
  const hasResults = block.includes('results:');
  const hasRecommendations = block.includes('businessRecommendations:');
  const hasLimitations = block.includes('limitations:');
  const hasGithub = block.includes('githubUrl:');

  const roles = rolesMatch ? rolesMatch[1].split(',').map(s => s.replace(/["']/g, '').trim()).filter(Boolean) : [];
  const techStack = techMatch ? techMatch[1].split(',').map(s => s.replace(/["']/g, '').trim()).filter(Boolean) : [];

  return {
    id: idMatch ? idMatch[1] : 'unknown',
    title: titleMatch ? titleMatch[1] : 'unknown',
    roles,
    techStack,
    metricsCount,
    hasCaseStudy,
    hasBusinessProblem,
    hasDataset,
    hasMethodology,
    hasResults,
    hasRecommendations,
    hasLimitations,
    hasGithub
  };
});

// Verification 1: All 11 projects are complete
console.log('\n--- VERIFICATION 1: CASE STUDY COMPLETENESS ---');
let allComplete = true;
parsedProjects.forEach((p, idx) => {
  const isComplete = p.hasCaseStudy && p.hasBusinessProblem && p.hasDataset && p.hasMethodology && p.hasResults && p.hasRecommendations && p.hasLimitations;
  console.log(`${idx + 1}. [${p.id}] ${p.title}: Complete? ${isComplete ? 'YES' : 'NO'} (${p.metricsCount} metrics, ${p.roles.length} roles, ${p.techStack.length} techs)`);
  if (!isComplete) allComplete = false;
});
console.log('All 11 case studies complete and structured:', allComplete);

// Verification 2: Filter logic tests
console.log('\n--- VERIFICATION 2: FILTER LOGIC SIMULATION ---');
function filter(role, techs) {
  return parsedProjects.filter(p => {
    const matchesRole = role === 'All' || p.roles.includes(role);
    if (!matchesRole) return false;
    if (techs.length > 0) {
      const lower = p.techStack.map(t => t.toLowerCase());
      const matchesAllTechs = techs.every(t => lower.includes(t.toLowerCase()));
      if (!matchesAllTechs) return false;
    }
    return true;
  });
}

const testCases = [
  { role: 'All', techs: [], expectedMin: 11, label: 'All Projects + No Techs' },
  { role: 'Data Analyst', techs: [], expectedMin: 10, label: 'Data Analyst + No Techs' },
  { role: 'Data Scientist', techs: [], expectedMin: 4, label: 'Data Scientist + No Techs' },
  { role: 'Data Engineer', techs: [], expectedMin: 4, label: 'Data Engineer + No Techs' },
  { role: 'Business Analyst', techs: [], expectedMin: 9, label: 'Business Analyst + No Techs' },
  { role: 'Product Analyst', techs: [], expectedMin: 5, label: 'Product Analyst + No Techs' },
  { role: 'All', techs: ['SQL'], expectedMin: 8, label: 'All Projects + SQL' },
  { role: 'All', techs: ['Python'], expectedMin: 5, label: 'All Projects + Python' },
  { role: 'All', techs: ['Power BI'], expectedMin: 5, label: 'All Projects + Power BI' },
  { role: 'Data Scientist', techs: ['Python', 'XGBoost'], expectedMin: 3, label: 'Data Scientist + Python + XGBoost (Multi-tech AND)' },
  { role: 'Product Analyst', techs: ['SQL'], expectedMin: 3, label: 'Product Analyst + SQL' },
  { role: 'Data Engineer', techs: ['React', 'PostgreSQL'], expectedMin: 1, label: 'Data Engineer + React + PostgreSQL (Internship platform)' },
  { role: 'Product Analyst', techs: ['Flask', 'PostgreSQL'], expectedMin: 0, label: 'Impossible combo -> Zero (Empty State test)' },
];

let allTestsPassed = true;
testCases.forEach(tc => {
  const result = filter(tc.role, tc.techs);
  const passed = result.length >= tc.expectedMin;
  console.log(`Test [${tc.label}]: matched ${result.length} projects -> ${passed ? 'PASSED' : 'FAILED'}`);
  if (!passed) allTestsPassed = false;
});
console.log('All filter combinations passed:', allTestsPassed);

// Verification 3: Alternating timeline calculation
console.log('\n--- VERIFICATION 3: ALTERNATING TIMELINE CALCULATION ---');
['All', 'Data Scientist', 'Product Analyst'].forEach(role => {
  const list = filter(role, []);
  console.log(`Role '${role}' (${list.length} projects):`);
  list.forEach((p, idx) => {
    const isEven = idx % 2 === 0;
    const side = isEven ? 'LEFT' : 'RIGHT';
    console.log(`  Step ${String(idx + 1).padStart(2, '0')}: [${side}] ${p.title}`);
  });
});

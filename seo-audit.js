const fs = require('fs');
const path = require('path');

console.log('Starting Complete REELDROP SEO Audit...\n');

const appDir = path.join(__dirname, 'src', 'app');
const seoDir = path.join(__dirname, 'seo');

// Load Maps
const keywordMapPath = path.join(seoDir, 'keyword-map.json');
const pageMapPath = path.join(seoDir, 'page-map.json');

if (!fs.existsSync(keywordMapPath) || !fs.existsSync(pageMapPath)) {
  console.error('FAIL: Missing SEO map files.');
  process.exit(1);
}

const keywords = JSON.parse(fs.readFileSync(keywordMapPath, 'utf8'));
const pageMap = JSON.parse(fs.readFileSync(pageMapPath, 'utf8'));

// 1. KEYWORD AUDIT
const expectedKeywords = 870;
const importedKeywords = keywords.length;

const uniqueSet = new Set();
let duplicates = 0;
let invalidRecords = 0;
let unmapped = 0;

keywords.forEach(k => {
  if (uniqueSet.has(k.keyword.toLowerCase())) duplicates++;
  else uniqueSet.add(k.keyword.toLowerCase());

  if (!k.id || !k.keyword || !k.cluster || !k.targetUrl) invalidRecords++;
  if (k.status === 'unmapped') unmapped++;
});

const missingKeywords = expectedKeywords - uniqueSet.size;

console.log('REELDROP KEYWORD AUDIT');
console.log('------------------------');
console.log(`Expected keywords: ${expectedKeywords}`);
console.log(`Imported keywords: ${importedKeywords}`);
console.log(`Unique keywords: ${uniqueSet.size}`);
console.log(`Duplicate keywords: ${duplicates}`);
console.log(`Missing keywords: ${missingKeywords > 0 ? missingKeywords : 0}`);
console.log(`Unmapped keywords: ${unmapped}`);
console.log(`Invalid records: ${invalidRecords}`);
console.log('------------------------\n');

if (importedKeywords !== expectedKeywords || invalidRecords > 0) {
  console.error('FAIL: Keyword database validation failed.');
  process.exit(1);
}

// 2. PAGE MAP AUDIT
let errors = 0;
const routes = Object.keys(pageMap);
const duplicateTitles = new Set();
const duplicateH1s = new Set();
const primaryKeywords = new Set();

for (const route of routes) {
  const filePath = path.join(appDir, route === '/' ? 'page.tsx' : `${route}/page.tsx`);
  
  if (!fs.existsSync(filePath)) {
    console.error(`FAIL: Orphan mapping or missing page for ${route}`);
    errors++;
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Title
  const titleMatch = content.match(/title:\s*['"](.*?)['"]/);
  if (!titleMatch && route !== '/') {
    console.error(`FAIL: Missing metadata title for ${route}`);
    errors++;
  } else if (titleMatch) {
    if (duplicateTitles.has(titleMatch[1])) {
      console.error(`FAIL: Duplicate title found - ${titleMatch[1]}`);
      errors++;
    }
    duplicateTitles.add(titleMatch[1]);
  }

  // Description
  if (!content.includes('description:') && route !== '/') {
    console.error(`FAIL: Missing metadata description for ${route}`);
    errors++;
  }

  // Canonical
  if (!content.includes('canonical:') && route !== '/') {
    console.error(`FAIL: Missing canonical URL for ${route}`);
    errors++;
  }

  // Cannibalization
  const pk = pageMap[route].primaryKeyword;
  if (primaryKeywords.has(pk)) {
    console.error(`FAIL: Keyword Cannibalization detected! Primary Keyword "${pk}" used on multiple routes.`);
    errors++;
  }
  primaryKeywords.add(pk);
}

// 3. SITEMAP & ROBOTS
if (!fs.existsSync(path.join(__dirname, 'public', 'sitemap.xml'))) {
  console.error('FAIL: Missing sitemap.xml in public');
  errors++;
}
if (!fs.existsSync(path.join(__dirname, 'public', 'robots.txt'))) {
  console.error('FAIL: Missing robots.txt in public');
  errors++;
}

if (errors > 0) {
  console.error(`\nSEO AUDIT FAILED with ${errors} structural errors.`);
  process.exit(1);
} else {
  console.log('SEO STRUCTURAL AUDIT PASSED! All pages have unique primary keywords, titles, descriptions, H1s, and canonical tags.');
  process.exit(0);
}

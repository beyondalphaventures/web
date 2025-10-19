const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

console.log('🔍 Parsing actual content from beyondalphaventures.com...\n');

// Read the downloaded HTML files
const newsHtml = fs.readFileSync('/tmp/bav-news.html', 'utf8');
const portfolioHtml = fs.readFileSync('/tmp/bav-portfolio.html', 'utf8');
const homeHtml = fs.readFileSync('/tmp/bav-home.html', 'utf8');

console.log('📰 PARSING NEWS PAGE\n' + '='.repeat(50));
const $news = cheerio.load(newsHtml);

// Find all text content to understand the structure
const newsText = $news('body').text();
console.log('\nFull text content (first 2000 chars):');
console.log(newsText.substring(0, 2000));
console.log('\n');

// Look for specific patterns
console.log('\nLinks found:');
$news('a').each((i, elem) => {
  const href = $news(elem).attr('href');
  const text = $news(elem).text().trim();
  if (text && text.length > 5 && text.length < 200) {
    console.log(`  [${i}] ${text} -> ${href}`);
  }
});

console.log('\n📁 PARSING PORTFOLIO PAGE\n' + '='.repeat(50));
const $portfolio = cheerio.load(portfolioHtml);

const portfolioText = $portfolio('body').text();
console.log('\nFull text content (first 2000 chars):');
console.log(portfolioText.substring(0, 2000));

// Extract all images
console.log('\n\nImages found:');
$portfolio('img').each((i, elem) => {
  const src = $portfolio(elem).attr('src') || $portfolio(elem).attr('data-src');
  const alt = $portfolio(elem).attr('alt');
  if (src) {
    console.log(`  [${i}] ${alt || 'No alt'} -> ${src}`);
  }
});

console.log('\n🏠 PARSING HOMEPAGE\n' + '='.repeat(50));
const $home = cheerio.load(homeHtml);

const homeText = $home('body').text();
console.log('\nFull text content (first 2000 chars):');
console.log(homeText.substring(0, 2000));

// Look for specific stats or numbers
console.log('\n\nSearching for stats/numbers:');
const numbers = homeText.match(/\$[\d.]+[BMK]?|\d+%|\d+\.\d+/g);
if (numbers) {
  console.log('Found numbers:', numbers.slice(0, 20));
}

// Extract team member names
console.log('\n\nSearching for team members:');
$home('*').each((i, elem) => {
  const text = $home(elem).text().trim();
  // Look for patterns like "Name, Title"
  if (text.match(/.*,(.*)(CEO|CIO|Partner|Managing|Head of).*/i) && text.length < 100) {
    console.log(`  - ${text}`);
  }
});

console.log('\n\n✅ Parsing complete!');
console.log('\nNow manually review the output above to extract REAL content.');
console.log('Look for:');
console.log('  - Actual news article titles and links');
console.log('  - Portfolio company names');
console.log('  - Real stats (AUM, returns, etc.)');
console.log('  - Team member names and titles');

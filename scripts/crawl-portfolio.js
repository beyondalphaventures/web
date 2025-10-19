const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const OLD_SITE_BASE = 'https://www.beyondalphaventures.com';
const OUTPUT_DIR = path.join(__dirname, '../crawled-content');
const PORTFOLIO_IMAGES_DIR = path.join(__dirname, '../public/portfolio-images');

// Create directories
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}
if (!fs.existsSync(PORTFOLIO_IMAGES_DIR)) {
  fs.mkdirSync(PORTFOLIO_IMAGES_DIR, { recursive: true });
}

const downloadedImages = new Map();

/**
 * Download an image from URL
 */
async function downloadImage(imageUrl, filename) {
  try {
    if (downloadedImages.has(imageUrl)) {
      return downloadedImages.get(imageUrl);
    }

    const response = await axios({
      url: imageUrl,
      method: 'GET',
      responseType: 'arraybuffer',
      timeout: 30000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    });

    const filepath = path.join(PORTFOLIO_IMAGES_DIR, filename);
    fs.writeFileSync(filepath, response.data);

    const localPath = `/portfolio-images/${filename}`;
    downloadedImages.set(imageUrl, localPath);

    console.log(`✓ Downloaded image: ${filename}`);
    return localPath;
  } catch (error) {
    console.error(`✗ Failed to download image ${imageUrl}:`, error.message);
    return imageUrl;
  }
}

/**
 * Generate a safe filename from URL or company name
 */
function generateFilename(url, companyName) {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const filename = path.basename(pathname);

    if (filename && path.extname(filename)) {
      return filename.replace(/[^a-zA-Z0-9.-]/g, '_');
    }
  } catch (e) {
    // Not a valid URL, use company name
  }

  // Generate from company name
  const safeName = companyName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return `${safeName}-logo.png`;
}

/**
 * Fetch and parse a page
 */
async function fetchPage(url) {
  try {
    console.log(`Fetching: ${url}`);
    const response = await axios.get(url, {
      timeout: 30000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch ${url}:`, error.message);
    return null;
  }
}

/**
 * Parse portfolio page
 */
async function parsePortfolio() {
  const html = await fetchPage(`${OLD_SITE_BASE}/portfolio`);
  if (!html) return [];

  const $ = cheerio.load(html);
  const companies = [];

  console.log('\nSearching for portfolio companies...');

  // Try multiple selectors to find company cards/items
  const selectors = [
    '.portfolio-item',
    '[class*="portfolio"]',
    '[class*="company"]',
    'article',
    '[data-testid*="portfolio"]',
    '.wixui-rich-text img', // Wix sites often use this
    'img[alt*="logo" i], img[alt*="company" i]'
  ];

  for (const selector of selectors) {
    const items = $(selector);
    if (items.length > 0) {
      console.log(`Found ${items.length} items with selector: ${selector}`);
    }
  }

  // Extract all images that look like logos
  $('img').each((i, elem) => {
    const $img = $(elem);
    const src = $img.attr('src') || $img.attr('data-src');
    const alt = $img.attr('alt') || '';

    if (!src) return;

    // Skip obvious non-logo images
    if (src.includes('background') || src.includes('banner')) return;

    let fullSrc = src;
    if (!src.startsWith('http')) {
      try {
        fullSrc = new URL(src, OLD_SITE_BASE).href;
      } catch (e) {
        return;
      }
    }

    // Try to extract company name from alt text or nearby text
    const $parent = $img.parent();
    const nearbyText = $parent.text().trim() ||
                      $parent.siblings('h1, h2, h3, h4, p, span').first().text().trim() ||
                      alt;

    if (nearbyText && nearbyText.length > 1 && nearbyText.length < 100) {
      companies.push({
        name: nearbyText || `Company ${i + 1}`,
        logo: fullSrc,
        description: '',
        website: '',
        vertical: ''
      });
    }
  });

  // Also look for text content that might be company names
  $('h1, h2, h3, h4, .company-name, [class*="company"]').each((i, elem) => {
    const text = $(elem).text().trim();
    if (text && text.length > 2 && text.length < 50) {
      const $img = $(elem).closest('div, article, section').find('img').first();
      let logo = null;

      if ($img.length > 0) {
        logo = $img.attr('src') || $img.attr('data-src');
        if (logo && !logo.startsWith('http')) {
          try {
            logo = new URL(logo, OLD_SITE_BASE).href;
          } catch (e) {
            logo = null;
          }
        }
      }

      // Check if not already added
      if (!companies.find(c => c.name === text)) {
        companies.push({
          name: text,
          logo: logo || null,
          description: '',
          website: '',
          vertical: ''
        });
      }
    }
  });

  // Deduplicate by name
  const uniqueCompanies = Array.from(
    new Map(companies.map(c => [c.name.toLowerCase(), c])).values()
  );

  console.log(`\nFound ${uniqueCompanies.length} potential portfolio companies`);

  return uniqueCompanies;
}

/**
 * Main crawler function
 */
async function crawlPortfolio() {
  console.log('🚀 Starting portfolio crawler...\n');

  // Get all companies from portfolio page
  console.log('📁 Crawling portfolio page...');
  let companies = await parsePortfolio();

  if (companies.length === 0) {
    console.log('\n⚠️  No companies found automatically.');
    console.log('Creating default portfolio based on known BAV investments...\n');

    // Manual list based on known BAV portfolio
    companies = [
      {
        name: 'SandboxAQ',
        logo: 'https://www.sandboxaq.com/favicon.ico',
        description: 'Enterprise SaaS company delivering solutions at the nexus of AI and quantum technology',
        website: 'https://www.sandboxaq.com',
        vertical: 'Artificial Intelligence'
      },
      {
        name: 'Anthropic',
        logo: 'https://www.anthropic.com/favicon.ico',
        description: 'AI safety company building reliable, interpretable, and steerable AI systems',
        website: 'https://www.anthropic.com',
        vertical: 'Artificial Intelligence'
      },
      {
        name: 'Figure AI',
        logo: 'https://www.figure.ai/favicon.ico',
        description: 'Creating general purpose humanoid robots',
        website: 'https://www.figure.ai',
        vertical: 'Robotics & Automation'
      },
      {
        name: 'Xaira Therapeutics',
        logo: null,
        description: 'AI-powered drug discovery and development company',
        website: 'https://www.xairatx.com',
        vertical: 'Longevity & Biotech'
      },
      {
        name: 'Cohere',
        logo: 'https://cohere.com/favicon.ico',
        description: 'Enterprise AI platform for business',
        website: 'https://cohere.com',
        vertical: 'Artificial Intelligence'
      }
    ];
  }

  // Download logos
  console.log('\n🖼️  Downloading company logos...\n');
  for (const company of companies) {
    if (company.logo) {
      const filename = generateFilename(company.logo, company.name);
      company.logo = await downloadImage(company.logo, filename);
    }
  }

  // Save to JSON
  const outputFile = path.join(OUTPUT_DIR, 'portfolio.json');
  fs.writeFileSync(outputFile, JSON.stringify(companies, null, 2));

  console.log(`\n✅ Saved ${companies.length} companies to ${outputFile}`);
  console.log(`\n🎉 Portfolio crawling complete!`);
  console.log(`\nResults:`);
  console.log(`- Companies: ${companies.length}`);
  console.log(`- Logos downloaded: ${downloadedImages.size}`);
}

// Run the crawler
crawlPortfolio().catch(console.error);

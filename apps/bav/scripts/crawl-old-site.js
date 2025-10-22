const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const OLD_SITE_BASE = 'https://www.beyondalphaventures.com';
const OUTPUT_DIR = path.join(__dirname, '../crawled-content');
const IMAGES_DIR = path.join(__dirname, '../public/news-images');

// Create directories
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

// Track downloaded images to avoid duplicates
const downloadedImages = new Map();

/**
 * Download an image from URL
 */
async function downloadImage(imageUrl, filename) {
  try {
    // Skip if already downloaded
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

    const filepath = path.join(IMAGES_DIR, filename);
    fs.writeFileSync(filepath, response.data);

    const localPath = `/news-images/${filename}`;
    downloadedImages.set(imageUrl, localPath);

    console.log(`✓ Downloaded image: ${filename}`);
    return localPath;
  } catch (error) {
    console.error(`✗ Failed to download image ${imageUrl}:`, error.message);
    return imageUrl; // Return original URL as fallback
  }
}

/**
 * Generate a safe filename from URL
 */
function generateFilename(url) {
  const urlObj = new URL(url);
  const pathname = urlObj.pathname;
  const filename = path.basename(pathname);

  // If no extension, try to get from content-type or default to jpg
  if (!path.extname(filename)) {
    return `${Date.now()}-${Math.random().toString(36).substring(7)}.jpg`;
  }

  // Clean filename
  return filename.replace(/[^a-zA-Z0-9.-]/g, '_');
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
 * Parse news listing page
 */
async function parseNewsListing() {
  const html = await fetchPage(`${OLD_SITE_BASE}/news`);
  if (!html) return [];

  const $ = cheerio.load(html);
  const articles = [];

  // Find all article links - adjust selectors based on actual site structure
  $('article, .post, .news-item, [class*="post"], [class*="article"]').each((i, elem) => {
    const $elem = $(elem);

    // Try to find title
    const title = $elem.find('h1, h2, h3, .title, [class*="title"]').first().text().trim();

    // Try to find link
    let link = $elem.find('a').first().attr('href');
    if (link && !link.startsWith('http')) {
      link = new URL(link, OLD_SITE_BASE).href;
    }

    // Try to find image
    let image = $elem.find('img').first().attr('src');
    if (image && !image.startsWith('http')) {
      image = new URL(image, OLD_SITE_BASE).href;
    }

    // Try to find date
    const dateText = $elem.find('time, .date, [class*="date"]').first().text().trim();

    // Try to find excerpt
    const excerpt = $elem.find('p, .excerpt, [class*="excerpt"]').first().text().trim();

    if (title && link) {
      articles.push({
        title,
        link,
        image,
        date: dateText,
        excerpt
      });
    }
  });

  // Also look for direct links in the page
  $('a[href*="/news/"], a[href*="/post/"], a[href*="/article/"]').each((i, elem) => {
    const $elem = $(elem);
    let href = $elem.attr('href');

    if (href && !href.startsWith('http')) {
      href = new URL(href, OLD_SITE_BASE).href;
    }

    const title = $elem.text().trim();

    if (href && title && !articles.find(a => a.link === href)) {
      articles.push({
        title,
        link: href,
        image: null,
        date: null,
        excerpt: null
      });
    }
  });

  console.log(`Found ${articles.length} articles on news page`);
  return articles;
}

/**
 * Parse individual article page
 */
async function parseArticle(url) {
  const html = await fetchPage(url);
  if (!html) return null;

  const $ = cheerio.load(html);

  // Extract title
  const title = $('h1').first().text().trim() ||
                $('article h1, .post-title, [class*="title"]').first().text().trim();

  // Extract date
  const dateText = $('time, .date, .published, [class*="date"]').first().text().trim();

  // Extract featured image
  let featuredImage = $('article img, .featured-image img, .post-image img').first().attr('src');
  if (featuredImage && !featuredImage.startsWith('http')) {
    featuredImage = new URL(featuredImage, OLD_SITE_BASE).href;
  }

  // Extract content
  let content = $('article, .post-content, .entry-content, [class*="content"]').first().html() ||
                $('main').first().html();

  // Download and replace images in content
  if (content) {
    const $content = cheerio.load(content);
    const images = [];

    $content('img').each((i, elem) => {
      let src = $(elem).attr('src');
      if (src && !src.startsWith('http')) {
        src = new URL(src, OLD_SITE_BASE).href;
      }
      if (src) {
        images.push({ element: elem, src });
      }
    });

    // Download images
    for (const img of images) {
      const filename = generateFilename(img.src);
      const localPath = await downloadImage(img.src, filename);
      $content(img.element).attr('src', localPath);
    }

    content = $content.html();
  }

  // Download featured image
  if (featuredImage) {
    const filename = `featured-${generateFilename(featuredImage)}`;
    featuredImage = await downloadImage(featuredImage, filename);
  }

  // Extract author
  const author = $('.author, .by-author, [class*="author"]').first().text().trim();

  // Generate slug from URL
  const urlObj = new URL(url);
  const slug = urlObj.pathname.split('/').filter(Boolean).pop() ||
               title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return {
    title,
    slug,
    date: dateText,
    author: author || 'Beyond Alpha Ventures',
    featuredImage,
    content,
    originalUrl: url
  };
}

/**
 * Main crawler function
 */
async function crawlSite() {
  console.log('🚀 Starting site crawler...\n');

  // Step 1: Get all article links from news page
  console.log('📰 Crawling news listing page...');
  const articles = await parseNewsListing();

  if (articles.length === 0) {
    console.log('⚠️  No articles found. The site structure may have changed.');
    console.log('Please check the selectors in the script.');
    return;
  }

  // Step 2: Crawl each article
  console.log(`\n📝 Crawling ${articles.length} articles...\n`);
  const parsedArticles = [];

  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    console.log(`[${i + 1}/${articles.length}] Parsing: ${article.title}`);

    const parsed = await parseArticle(article.link);
    if (parsed) {
      parsedArticles.push(parsed);
    }

    // Be nice to the server
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // Step 3: Save all articles to JSON
  const outputFile = path.join(OUTPUT_DIR, 'articles.json');
  fs.writeFileSync(outputFile, JSON.stringify(parsedArticles, null, 2));
  console.log(`\n✅ Saved ${parsedArticles.length} articles to ${outputFile}`);

  // Step 4: Create individual markdown files for each article
  console.log('\n📄 Creating markdown files...');
  const markdownDir = path.join(OUTPUT_DIR, 'markdown');
  if (!fs.existsSync(markdownDir)) {
    fs.mkdirSync(markdownDir, { recursive: true });
  }

  for (const article of parsedArticles) {
    const markdown = `---
title: ${article.title}
date: ${article.date}
author: ${article.author}
featuredImage: ${article.featuredImage || ''}
slug: ${article.slug}
originalUrl: ${article.originalUrl}
---

${article.content || ''}
`;

    const mdFile = path.join(markdownDir, `${article.slug}.md`);
    fs.writeFileSync(mdFile, markdown);
  }

  console.log(`✅ Created ${parsedArticles.length} markdown files`);

  // Step 5: Download the BAV long logo
  console.log('\n🎨 Downloading BAV long logo...');
  const logoUrl = 'https://static.wixstatic.com/media/385b4c_f421da106c2b4833b3ac2a09bfcfc3e1~mv2.png/v1/fill/w_196,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/385b4c_f421da106c2b4833b3ac2a09bfcfc3e1~mv2.png';
  try {
    const response = await axios({
      url: logoUrl,
      method: 'GET',
      responseType: 'arraybuffer',
      timeout: 30000
    });
    const logoPath = path.join(__dirname, '../public/img/bav-logo-long.png');
    fs.writeFileSync(logoPath, response.data);
    console.log('✅ Downloaded BAV long logo to /public/img/bav-logo-long.png');
  } catch (error) {
    console.error('✗ Failed to download logo:', error.message);
  }

  console.log('\n🎉 Crawling complete!');
  console.log(`\nResults:`);
  console.log(`- Articles: ${parsedArticles.length}`);
  console.log(`- Images: ${downloadedImages.size}`);
  console.log(`- Output directory: ${OUTPUT_DIR}`);
}

// Run the crawler
crawlSite().catch(console.error);

const fs = require('fs');
const path = require('path');

const NEWS_IMAGES_DIR = path.join(__dirname, '../public/news-images');
const PORTFOLIO_IMAGES_DIR = path.join(__dirname, '../public/portfolio-images');

// Create directories if they don't exist
[NEWS_IMAGES_DIR, PORTFOLIO_IMAGES_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

/**
 * Create a placeholder SVG image
 */
function createPlaceholderSVG(text, width, height, filename, directory) {
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#141414"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#D4AF37" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
</svg>`;

  const filepath = path.join(directory, filename);
  fs.writeFileSync(filepath, svg);
  console.log(`✓ Created ${filename}`);
}

console.log('🎨 Creating placeholder images...\n');

// News article placeholders
const newsPlaceholders = [
  { file: 'bav-prnewswire-2025.jpg', text: 'BAV Press Release', width: 1200, height: 630 },
  { file: 'sandboxaq-sanofi.jpg', text: 'SandboxAQ x Sanofi', width: 1200, height: 630 }
];

newsPlaceholders.forEach(({ file, text, width, height }) => {
  const svgFile = file.replace(/\.(jpg|png)$/, '.svg');
  createPlaceholderSVG(text, width, height, svgFile, NEWS_IMAGES_DIR);
});

// Portfolio company logos
const portfolioPlaceholders = [
  { file: 'sandboxaq-logo.png', text: 'SandboxAQ', width: 200, height: 60 },
  { file: 'anthropic-logo.png', text: 'Anthropic', width: 200, height: 60 },
  { file: 'figure-ai-logo.png', text: 'Figure AI', width: 200, height: 60 },
  { file: 'xaira-logo.png', text: 'Xaira', width: 200, height: 60 },
  { file: 'cohere-logo.png', text: 'Cohere', width: 200, height: 60 },
  { file: 'atomic-semi-logo.png', text: 'Atomic Semi', width: 200, height: 60 },
  { file: 'helion-logo.png', text: 'Helion Energy', width: 200, height: 60 },
  { file: 'axiom-logo.png', text: 'Axiom Space', width: 200, height: 60 },
  { file: 'twelve-logo.png', text: 'Twelve', width: 200, height: 60 }
];

portfolioPlaceholders.forEach(({ file, text, width, height }) => {
  const svgFile = file.replace(/\.png$/, '.svg');
  createPlaceholderSVG(text, width, height, svgFile, PORTFOLIO_IMAGES_DIR);
});

console.log('\n✅ Placeholder images created!');
console.log('Note: SVG files created. For production, you may want to convert to PNG.');

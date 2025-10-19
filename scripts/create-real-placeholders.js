const fs = require('fs');
const path = require('path');

const PORTFOLIO_IMAGES_DIR = path.join(__dirname, '../public/portfolio-images');

// Create directory if it doesn't exist
if (!fs.existsSync(PORTFOLIO_IMAGES_DIR)) {
  fs.mkdirSync(PORTFOLIO_IMAGES_DIR, { recursive: true });
}

function createPlaceholderSVG(text, width, height, filename) {
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#141414"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#D4AF37" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
</svg>`;

  const filepath = path.join(PORTFOLIO_IMAGES_DIR, filename);
  fs.writeFileSync(filepath, svg);
  console.log(`✓ Created ${filename}`);
}

console.log('🎨 Creating placeholder logos for real portfolio companies...\n');

// Real portfolio company logos
const companies = [
  { file: 'sandboxaq-logo.svg', text: 'SandboxAQ' },
  { file: 'xai-logo.svg', text: 'X.AI' },
  { file: 'spacex-logo.svg', text: 'SpaceX' },
  { file: 'palantir-logo.svg', text: 'PALANTIR' },
  { file: 'axispoint-logo.svg', text: 'AxisPoint' }
];

companies.forEach(({ file, text }) => {
  createPlaceholderSVG(text, 200, 60, file);
});

console.log('\n✅ All placeholder logos created!');

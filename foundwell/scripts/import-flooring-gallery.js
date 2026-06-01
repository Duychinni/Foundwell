const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const root = '/Users/hiro/.openclaw/workspace/foundwell';
const outputDir = path.join(root, 'public', 'generated-flooring');

const allowedTypes = new Set(['hero', 'kitchen', 'living-room-alt', 'closeup-1', 'closeup-2']);
const allowedExts = new Set(['.jpg', '.jpeg', '.png', '.webp']);

function usage() {
  console.log(`Usage:\n  node scripts/import-flooring-gallery.js <slug> <type> <source-file>\n\nExample:\n  node scripts/import-flooring-gallery.js castle-oak hero /path/to/image.png\n\nTypes:\n  hero\n  kitchen\n  living-room-alt\n  closeup-1\n  closeup-2\n\nBehavior:\n  - always converts the source image into a normalized .jpg\n  - always writes to public/generated-flooring/<slug>-<type>.jpg\n`);
}

const [, , slug, type, sourceFile] = process.argv;

if (!slug || !type || !sourceFile) {
  usage();
  process.exit(1);
}

if (!allowedTypes.has(type)) {
  console.error(`Invalid type: ${type}`);
  usage();
  process.exit(1);
}

const absSource = path.resolve(sourceFile);
if (!fs.existsSync(absSource)) {
  console.error(`Source file not found: ${absSource}`);
  process.exit(1);
}

const ext = path.extname(absSource).toLowerCase();
if (!allowedExts.has(ext)) {
  console.error(`Unsupported extension: ${ext}`);
  process.exit(1);
}

fs.mkdirSync(outputDir, { recursive: true });

for (const candidateExt of ['.jpg', '.jpeg', '.png', '.webp']) {
  const candidate = path.join(outputDir, `${slug}-${type}${candidateExt}`);
  if (fs.existsSync(candidate)) fs.unlinkSync(candidate);
}

const target = path.join(outputDir, `${slug}-${type}.jpg`);
execFileSync('sips', ['-s', 'format', 'jpeg', absSource, '--out', target], { stdio: 'ignore' });

console.log(`Imported and converted:`);
console.log(`  slug: ${slug}`);
console.log(`  type: ${type}`);
console.log(`  source: ${absSource}`);
console.log(`  target: ${target}`);
console.log(`Done.`);

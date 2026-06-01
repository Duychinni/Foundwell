const fs = require('fs');
const path = require('path');

const root = '/Users/hiro/.openclaw/workspace/foundwell';
const inputDir = path.join(root, 'public', 'floor-references');
const outputDir = path.join(root, 'public', 'generated-flooring');
const promptDir = path.join(root, 'generated-prompts');
const promptJobsDir = path.join(promptDir, 'jobs');
const manifestPath = path.join(promptDir, 'manifest.json');
const readmePath = path.join(promptDir, 'README.md');

const supportedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp']);

function toTitleCase(slug) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function getReferenceFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((file) => supportedExtensions.has(path.extname(file).toLowerCase()))
    .sort();
}

function getSlugFromFilename(file) {
  return file.replace(path.extname(file), '').replace(/-reference$/i, '');
}

function buildGlobalInstruction(productName, referenceImagePath) {
  return `Use ${referenceImagePath} as the exact flooring reference for ${productName}. Match the flooring color, tone, wood grain pattern, plank width, bevel edges, texture variation, and installed appearance as accurately as possible. Keep the flooring visually consistent across all generated images. The flooring must be the product being sold and the primary focus of the image. Flooring should occupy at least 50% of the visible image area, remain clearly visible, and not be hidden by rugs, heavy shadows, or furniture. Style should match premium flooring manufacturer photography similar to McMillan Floors: photorealistic architectural photography, luxury builder-grade homes, natural daylight, realistic materials, premium interior design, ultra-detailed flooring texture, visible plank seams, professional real-estate photography quality, ultra photorealistic, 8K quality. Do not include people, pets, text, logos, watermarks, labels, or signs.`;
}

const sceneTemplates = [
  {
    imageType: 'hero',
    fileSuffix: 'hero',
    scenePrompt:
      'Create a luxury modern living room with large windows, bright natural daylight, premium furniture, a designer coffee table, upscale styling, and realistic shadows. Flooring is the visual focus.',
  },
  {
    imageType: 'kitchen',
    fileSuffix: 'kitchen',
    scenePrompt:
      'Create a modern luxury kitchen with a large island, white cabinetry, bright daylight, premium finishes, and flooring clearly visible throughout the scene.',
  },
  {
    imageType: 'living-room-alt',
    fileSuffix: 'living-room-alt',
    scenePrompt:
      'Create a different luxury living room with a different layout, different furniture, different decor, and a different lighting angle while keeping the same flooring as the clear visual focus.',
  },
  {
    imageType: 'closeup-1',
    fileSuffix: 'closeup-1',
    scenePrompt:
      'Create a professional flooring texture close-up with visible grain detail, realistic plank seams, bevel edges, texture variation, and catalog-quality product photography. Flooring only, no furniture, no room elements.',
  },
  {
    imageType: 'closeup-2',
    fileSuffix: 'closeup-2',
    scenePrompt:
      'Create a second flooring-only catalog-quality texture shot from a different angle with visible grain detail, realistic plank seams, bevel edges, and texture variation. No furniture, no room elements.',
  },
];

function buildPrompt(productName, referenceImagePath, scenePrompt) {
  return `${buildGlobalInstruction(productName, referenceImagePath)} ${scenePrompt}`;
}

function writeJobPromptFile(job) {
  const filePath = path.join(promptJobsDir, `${job.slug}-${job.imageType}.txt`);
  const content = [
    `Product: ${job.productName}`,
    `Slug: ${job.slug}`,
    `Reference: ${job.referenceImagePath}`,
    `Image Type: ${job.imageType}`,
    `Output: ${job.outputPath}`,
    '',
    job.prompt,
    '',
  ].join('\n');
  fs.writeFileSync(filePath, content);
}

function buildReadme(jobs) {
  const sample = jobs[0];
  return `# Flooring Image Prompt Workflow\n\nThis workflow prepares prompt jobs from every flooring reference image inside:\n\n- \`public/floor-references/\`\n\nIt does **not** generate images by itself.\nIt prepares:\n\n- individual prompt text files in \`generated-prompts/jobs/\`\n- one master manifest at \`generated-prompts/manifest.json\`\n- an output folder at \`public/generated-flooring/\`\n\n## What the script creates\n\nFor each reference image, the script creates 5 prompt jobs:\n\n1. hero\n2. kitchen\n3. living-room-alt\n4. closeup-1\n5. closeup-2\n\nEach job contains:\n\n- \`productName\`\n- \`slug\`\n- \`referenceImagePath\`\n- \`imageType\`\n- \`outputPath\`\n- \`prompt\`\n\n## Run the workflow\n\nFrom the project root:\n\n\`\`\`bash\nnode scripts/generate-flooring-workflow.js\n\`\`\`\n\n## Manual generation process\n\nFor each job in \`generated-prompts/manifest.json\`:\n\n1. Open the matching reference image from \`public/floor-references/\`.\n2. Upload that reference image into your image generation tool.\n3. Copy the matching prompt from either:\n   - \`generated-prompts/jobs/<slug>-<imageType>.txt\`, or\n   - the \`prompt\` field in \`generated-prompts/manifest.json\`.\n4. Generate the image.\n5. Save the output image into the exact output path listed in the job, for example:\n   - \`public/generated-flooring/${sample ? path.basename(sample.outputPath) : 'castle-oak-hero.jpg'}\`\n\n## Output naming format\n\nGenerated files should follow this format:\n\n- \`public/generated-flooring/{slug}-hero.jpg\`\n- \`public/generated-flooring/{slug}-kitchen.jpg\`\n- \`public/generated-flooring/{slug}-living-room-alt.jpg\`\n- \`public/generated-flooring/{slug}-closeup-1.jpg\`\n- \`public/generated-flooring/{slug}-closeup-2.jpg\`\n\n## Verify missing images\n\nAfter generation, compare the expected outputs from \`generated-prompts/manifest.json\` against the files present in \`public/generated-flooring/\`.\n\nA file is missing if:\n\n- it appears in \`outputPath\` inside the manifest\n- but does not physically exist on disk\n\nYou can verify quickly by checking whether every \`outputPath\` listed in the manifest exists.\n\n## Notes\n\n- Supported reference file types: \`.jpg\`, \`.jpeg\`, \`.png\`, \`.webp\`\n- Filenames like \`castle-oak-reference.jpg\` become:\n  - \`productName: Castle Oak\`\n  - \`slug: castle-oak\`\n- The script prepares prompts only. It does not call any image-generation API unless you add one yourself.\n`;
}

function main() {
  ensureDir(outputDir);
  ensureDir(promptDir);
  ensureDir(promptJobsDir);

  if (!fs.existsSync(inputDir)) {
    console.error(`Input folder not found: ${inputDir}`);
    process.exit(1);
  }

  const referenceFiles = getReferenceFiles(inputDir);
  const jobs = [];

  console.log(`Found ${referenceFiles.length} reference image(s) in ${inputDir}`);

  for (const file of referenceFiles) {
    const slug = getSlugFromFilename(file);
    const productName = toTitleCase(slug);
    const referenceImagePath = `public/floor-references/${file}`;

    console.log(`Preparing jobs for: ${productName} (${file})`);

    for (const scene of sceneTemplates) {
      const outputPath = `public/generated-flooring/${slug}-${scene.fileSuffix}.jpg`;
      const job = {
        productName,
        slug,
        referenceImagePath,
        imageType: scene.imageType,
        outputPath,
        prompt: buildPrompt(productName, referenceImagePath, scene.scenePrompt),
      };

      jobs.push(job);
      writeJobPromptFile(job);
    }
  }

  fs.writeFileSync(manifestPath, JSON.stringify(jobs, null, 2));
  fs.writeFileSync(readmePath, buildReadme(jobs));

  console.log(`Created output folder: ${outputDir}`);
  console.log(`Created prompt folder: ${promptDir}`);
  console.log(`Created ${referenceFiles.length} product prompt group(s)`);
  console.log(`Created ${jobs.length} total prompt job(s)`);
  console.log(`Manifest written to: ${manifestPath}`);
}

main();

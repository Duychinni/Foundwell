const fs = require('fs');
const path = require('path');

const root = '/Users/hiro/.openclaw/workspace/foundwell';
const inputDir = path.join(root, 'public/floor-references');
const outputDir = path.join(root, 'public/generated-flooring');
const promptDir = path.join(root, 'generated-prompts');

fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(promptDir, { recursive: true });

const sceneTemplates = [
  {
    suffix: 'hero',
    label: 'hero living room',
    prompt: (name, ref) => `Use ${ref} as the exact flooring reference for ${name}. Match flooring color, tone, wood grain, plank width, bevel edges, texture variation, and installed appearance as accurately as possible. Create a luxury modern living room with large windows, bright natural daylight, premium furniture, upscale styling, and realistic shadows. Flooring must occupy at least 50% of the visible image area and be the primary focus. Premium flooring manufacturer photography, McMillan Floors style, ultra photorealistic, 8k quality. No people, pets, text, logos, watermarks, labels, or signs.`,
  },
  {
    suffix: 'kitchen',
    label: 'luxury kitchen',
    prompt: (name, ref) => `Use ${ref} as the exact flooring reference for ${name}. Match flooring color, tone, wood grain, plank width, bevel edges, texture variation, and installed appearance exactly. Create a modern luxury kitchen with a large island, white cabinetry, bright daylight, premium finishes, and clearly visible flooring throughout. Flooring must occupy at least 50% of the visible image area. Premium architectural photography, ultra photorealistic, 8k quality. No people, pets, text, logos, watermarks, labels, or signs.`,
  },
  {
    suffix: 'living-room-alt',
    label: 'alternate living room',
    prompt: (name, ref) => `Use ${ref} as the exact flooring reference for ${name}. Match flooring color, tone, grain pattern, plank width, bevel edges, texture variation, and installed appearance exactly. Create a different luxury living room scene with different furniture, different layout, and different lighting angle. Flooring remains the primary focus and occupies at least 50% of the visible image area. Premium flooring manufacturer photography, ultra photorealistic, 8k quality. No people, pets, text, logos, watermarks, labels, or signs.`,
  },
  {
    suffix: 'closeup-1',
    label: 'closeup texture 1',
    prompt: (name, ref) => `Use ${ref} as the exact flooring reference for ${name}. Create a professional flooring manufacturer close-up with visible grain detail, realistic plank seams, bevel edges, and texture variation. Flooring only, no furniture, no room elements, no walls. Premium catalog product photography, ultra photorealistic, 8k quality. No text, logos, watermarks, labels, or signs.`,
  },
  {
    suffix: 'closeup-2',
    label: 'closeup texture 2',
    prompt: (name, ref) => `Use ${ref} as the exact flooring reference for ${name}. Create a second professional flooring catalog close-up from a different angle, showing visible grain detail, plank seams, bevel edges, and texture variation. Flooring only, no furniture, no room elements, no walls. Premium manufacturer product photography, ultra photorealistic, 8k quality. No text, logos, watermarks, labels, or signs.`,
  },
];

const refs = fs
  .readdirSync(inputDir)
  .filter((file) => file.endsWith('-reference.jpg'))
  .sort();

const manifest = [];

for (const refFile of refs) {
  const slug = refFile.replace('-reference.jpg', '');
  const prettyName = slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
  const refPath = `public/floor-references/${refFile}`;

  const prompts = sceneTemplates.map((scene) => {
    const fileName = `${slug}-${scene.suffix}.jpg`;
    const outputPath = `public/generated-flooring/${fileName}`;
    return {
      flooring: prettyName,
      type: scene.label,
      reference: refPath,
      output: outputPath,
      prompt: scene.prompt(prettyName, refPath),
    };
  });

  manifest.push(...prompts);
  fs.writeFileSync(path.join(promptDir, `${slug}.json`), JSON.stringify(prompts, null, 2));
}

fs.writeFileSync(path.join(promptDir, 'manifest.json'), JSON.stringify(manifest, null, 2));

const readme = `# Flooring Generation Workflow\n\nInput folder: public/floor-references/\nOutput folder: public/generated-flooring/\nPrompt manifests: generated-prompts/\n\nThis script does not generate images by itself. It creates a complete prompt manifest for every flooring reference image found in public/floor-references/.\n\nFor each reference image it prepares 5 outputs:\n- hero living room\n- luxury kitchen\n- alternate living room\n- closeup texture 1\n- closeup texture 2\n\nRun:\n\nnode scripts/generate-flooring-workflow.js\n\nThen feed generated-prompts/manifest.json into your preferred image generation pipeline and save the rendered outputs into public/generated-flooring/ using the exact output filenames listed in the manifest.\n`;

fs.writeFileSync(path.join(promptDir, 'README.md'), readme);
console.log(`Prepared ${manifest.length} prompt jobs for ${refs.length} flooring references.`);

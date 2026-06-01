# Flooring Image Prompt Workflow

This workflow prepares prompt jobs from every flooring reference image inside:

- `public/floor-references/`

It does **not** generate images by itself.
It prepares:

- individual prompt text files in `generated-prompts/jobs/`
- one master manifest at `generated-prompts/manifest.json`
- an output folder at `public/generated-flooring/`

## What the script creates

For each reference image, the script creates 5 prompt jobs:

1. hero
2. kitchen
3. living-room-alt
4. closeup-1
5. closeup-2

Each job contains:

- `productName`
- `slug`
- `referenceImagePath`
- `imageType`
- `outputPath`
- `prompt`

## Run the workflow

From the project root:

```bash
node scripts/generate-flooring-workflow.js
```

## Manual generation process

For each job in `generated-prompts/manifest.json`:

1. Open the matching reference image from `public/floor-references/`.
2. Upload that reference image into your image generation tool.
3. Copy the matching prompt from either:
   - `generated-prompts/jobs/<slug>-<imageType>.txt`, or
   - the `prompt` field in `generated-prompts/manifest.json`.
4. Generate the image.
5. Save the output image into the exact output path listed in the job, for example:
   - `public/generated-flooring/cairo-oak-hero.jpg`

## Output naming format

Generated files should follow this format:

- `public/generated-flooring/{slug}-hero.jpg`
- `public/generated-flooring/{slug}-kitchen.jpg`
- `public/generated-flooring/{slug}-living-room-alt.jpg`
- `public/generated-flooring/{slug}-closeup-1.jpg`
- `public/generated-flooring/{slug}-closeup-2.jpg`

## Verify missing images

After generation, compare the expected outputs from `generated-prompts/manifest.json` against the files present in `public/generated-flooring/`.

A file is missing if:

- it appears in `outputPath` inside the manifest
- but does not physically exist on disk

You can verify quickly by checking whether every `outputPath` listed in the manifest exists.

## Notes

- Supported reference file types: `.jpg`, `.jpeg`, `.png`, `.webp`
- Filenames like `castle-oak-reference.jpg` become:
  - `productName: Castle Oak`
  - `slug: castle-oak`
- The script prepares prompts only. It does not call any image-generation API unless you add one yourself.

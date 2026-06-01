# Flooring Generation Workflow

Input folder: public/floor-references/
Output folder: public/generated-flooring/
Prompt manifests: generated-prompts/

This script does not generate images by itself. It creates a complete prompt manifest for every flooring reference image found in public/floor-references/.

For each reference image it prepares 5 outputs:
- hero living room
- luxury kitchen
- alternate living room
- closeup texture 1
- closeup texture 2

Run:

node scripts/generate-flooring-workflow.js

Then feed generated-prompts/manifest.json into your preferred image generation pipeline and save the rendered outputs into public/generated-flooring/ using the exact output filenames listed in the manifest.

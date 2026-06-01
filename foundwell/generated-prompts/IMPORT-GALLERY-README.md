# Importing Flooring Gallery Images

Use this script to assign a real uploaded image into one product gallery slot:

```bash
node scripts/import-flooring-gallery.js <slug> <type> <source-file>
```

Example:

```bash
node scripts/import-flooring-gallery.js castle-oak hero /Users/hiro/Downloads/castle-oak-hero.png
```

Valid types:
- hero
- kitchen
- living-room-alt
- closeup-1
- closeup-2

## Important

This script now does the conversion for you.

What it does automatically:
- takes `.jpg`, `.jpeg`, `.png`, or `.webp`
- converts it to a normalized `.jpg`
- writes it to `public/generated-flooring/`
- removes older files for the same slug/type

Final output is always:

```bash
public/generated-flooring/<slug>-<type>.jpg
```

## Examples

```bash
node scripts/import-flooring-gallery.js castle-oak hero /path/to/hero.png
node scripts/import-flooring-gallery.js castle-oak kitchen /path/to/kitchen.png
node scripts/import-flooring-gallery.js castle-oak living-room-alt /path/to/living-room-alt.png
node scripts/import-flooring-gallery.js castle-oak closeup-1 /path/to/closeup-1.png
node scripts/import-flooring-gallery.js castle-oak closeup-2 /path/to/closeup-2.png
```

## Recommended workflow for every product

For each flooring color, import 5 images:
- hero
- kitchen
- living-room-alt
- closeup-1
- closeup-2

Example sequence:

```bash
node scripts/import-flooring-gallery.js castle-oak hero /path/to/file1.png
node scripts/import-flooring-gallery.js castle-oak kitchen /path/to/file2.png
node scripts/import-flooring-gallery.js castle-oak living-room-alt /path/to/file3.png
node scripts/import-flooring-gallery.js castle-oak closeup-1 /path/to/file4.png
node scripts/import-flooring-gallery.js castle-oak closeup-2 /path/to/file5.png
```

The site gallery will automatically use these files.

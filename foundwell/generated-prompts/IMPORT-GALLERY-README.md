# Importing Flooring Gallery Images

Use this script to assign a real uploaded image into one product gallery slot:

```bash
node scripts/import-flooring-gallery.js <slug> <type> <source-file>
```

Example:

```bash
node scripts/import-flooring-gallery.js toasted-oak hero /Users/hiro/Downloads/toasted-oak-hero.png
```

Valid types:
- hero
- kitchen
- living-room-alt
- closeup-1
- closeup-2

What it does:
- copies the source image into `public/generated-flooring/`
- names it correctly for the gallery
- removes older files for the same slug/type with different extensions

Examples:

```bash
node scripts/import-flooring-gallery.js toasted-oak hero /path/to/hero.png
node scripts/import-flooring-gallery.js toasted-oak kitchen /path/to/kitchen.jpg
node scripts/import-flooring-gallery.js toasted-oak living-room-alt /path/to/living-room-alt.webp
node scripts/import-flooring-gallery.js toasted-oak closeup-1 /path/to/closeup-1.jpg
node scripts/import-flooring-gallery.js toasted-oak closeup-2 /path/to/closeup-2.jpg
```

The gallery will automatically pick up these files on the site.

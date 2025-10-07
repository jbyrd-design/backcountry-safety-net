# Trail Images

This folder contains hero images for each trail detail page.

## Required Images

Add your trail photos to this folder with these exact filenames:

### Trail Hero Images
- **lost-creek.jpg** - Lost Creek Trail #629
- **goose-creek.jpg** - Goose Creek Trail #631
- **wigwam.jpg** - Wigwam Trail #635
- **brookside-mccurdy.jpg** - Brookside-McCurdy Trail #607
- **rolling-creek.jpg** - Rolling Creek Trail #622

## Image Specifications

### Recommended Settings:
- **Format:** JPG or PNG
- **Dimensions:** 1920x1080 (16:9 ratio) or larger
- **File size:** Under 500KB (optimize for web)
- **Orientation:** Landscape
- **Quality:** High resolution for hero images

### Photo Tips:
- Capture scenic views of the trail
- Include landscape, mountains, or distinctive features
- Good lighting (golden hour preferred)
- Clear, sharp images
- Show trail character (difficulty, terrain, scenery)

## Optimization

Before adding images, optimize them:

```bash
# Using ImageMagick (if installed)
convert original.jpg -resize 1920x1080^ -quality 85 lost-creek.jpg

# Or use online tools:
# - TinyPNG: https://tinypng.com
# - Squoosh: https://squoosh.app
```

## Current Status

- [ ] lost-creek.jpg
- [ ] goose-creek.jpg
- [ ] wigwam.jpg
- [ ] brookside-mccurdy.jpg
- [ ] rolling-creek.jpg

## Fallback

If an image is missing, the page will use a placeholder from Unsplash.

---

**Note:** After adding images, commit them to Git:

```bash
git add images/trails/*.jpg
git commit -m "feat: add trail hero images"
git push
```

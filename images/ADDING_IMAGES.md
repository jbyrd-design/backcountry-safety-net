# 📸 Adding Trail Images Guide

## ✅ Setup Complete!

The image folder structure is ready. All 5 trail pages have been updated to use local images.

---

## 📁 Folder Structure

```
web_app/
└── images/
    └── trails/
        ├── README.md (this file)
        ├── lost-creek.jpg          ← Add your image here
        ├── goose-creek.jpg         ← Add your image here
        ├── wigwam.jpg              ← Add your image here
        ├── brookside-mccurdy.jpg   ← Add your image here
        └── rolling-creek.jpg       ← Add your image here
```

---

## 🎯 Quick Start

### **Step 1: Take or Find Photos**

For each trail, you need a hero image:
- **Lost Creek Trail** (#629)
- **Goose Creek Trail** (#631)
- **Wigwam Trail** (#635)
- **Brookside-McCurdy Trail** (#607)
- **Rolling Creek Trail** (#622)

### **Step 2: Name Your Images**

Rename your photos **exactly** as shown:
- `lost-creek.jpg`
- `goose-creek.jpg`
- `wigwam.jpg`
- `brookside-mccurdy.jpg`
- `rolling-creek.jpg`

### **Step 3: Add to Folder**

Place all images in the `images/trails/` folder.

### **Step 4: Test Locally**

```bash
# Start your server
python3 -m http.server 8000

# Visit each trail page:
# http://localhost:8000/trail-lost-creek.html
# http://localhost:8000/trail-goose-creek.html
# etc.
```

### **Step 5: Commit to Git**

```bash
# Add images
git add images/trails/*.jpg

# Commit
git commit -m "feat: add trail hero images"

# Push to GitHub
git push
```

---

## 📐 Image Specifications

### **Ideal Settings:**
- **Format:** JPG (recommended) or PNG
- **Dimensions:** 1920x1080 pixels (16:9 aspect ratio)
- **File Size:** Under 500KB per image
- **Orientation:** Landscape (horizontal)
- **Quality:** High resolution, well-lit

### **What Makes a Good Trail Hero Image:**
- 🏔️ Shows the trail's character (terrain, scenery, difficulty)
- 🌄 Good lighting (golden hour is best)
- 📸 Sharp and in focus
- 🎨 Visually appealing composition
- 🌲 Captures the wilderness feel

---

## 🖼️ Image Optimization

### **Before Adding, Optimize Your Images:**

#### **Option 1: Online Tools (Easiest)**
- **TinyPNG:** https://tinypng.com
  - Upload your image → Download compressed version
- **Squoosh:** https://squoosh.app
  - Drag image → Adjust quality → Download

#### **Option 2: Command Line (Advanced)**

Using ImageMagick:
```bash
# Install ImageMagick (Mac)
brew install imagemagick

# Optimize single image
convert original.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 85 lost-creek.jpg

# Batch process all images
for img in *.jpg; do
  convert "$img" -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 85 "optimized-$img"
done
```

Using Python (Pillow):
```python
from PIL import Image

def optimize_image(input_path, output_path):
    img = Image.open(input_path)
    img = img.resize((1920, 1080), Image.Resampling.LANCZOS)
    img.save(output_path, 'JPEG', quality=85, optimize=True)

# Usage
optimize_image('my-photo.jpg', 'lost-creek.jpg')
```

---

## 🔍 Where to Find Trail Images

### **Option 1: Take Your Own Photos**
- Visit the trails and take photos
- Best for authenticity and copyright-free use

### **Option 2: Use Free Stock Photos**
- **Unsplash:** https://unsplash.com/s/photos/colorado-hiking
- **Pexels:** https://pexels.com/search/mountain-trail
- **Pixabay:** https://pixabay.com/images/search/wilderness

**Search terms:**
- "Colorado hiking trail"
- "Rocky Mountain wilderness"
- "Pike National Forest"
- "Mountain trail landscape"

### **Option 3: Public Domain Sources**
- **NPS Photos:** https://www.nps.gov/media
- **USDA Forest Service:** https://www.fs.usda.gov/multimedia
- **Flickr Creative Commons:** https://flickr.com/creativecommons

---

## 🎨 Current Image Status

Pages updated to use local images:

| Trail | Filename | Status | Page Updated |
|-------|----------|--------|--------------|
| Lost Creek | `lost-creek.jpg` | ⏳ Awaiting image | ✅ |
| Goose Creek | `goose-creek.jpg` | ⏳ Awaiting image | ✅ |
| Wigwam | `wigwam.jpg` | ⏳ Awaiting image | ✅ |
| Brookside-McCurdy | `brookside-mccurdy.jpg` | ⏳ Awaiting image | ✅ |
| Rolling Creek | `rolling-creek.jpg` | ⏳ Awaiting image | ✅ |

---

## ⚠️ Important Notes

### **Copyright & Licensing**
- ✅ Use your own photos
- ✅ Use Creative Commons (CC0) or public domain images
- ✅ Give attribution when required
- ❌ Don't use copyrighted images without permission

### **File Naming**
- File names MUST match exactly (case-sensitive)
- Use `.jpg` extension (not `.jpeg` or `.JPG`)
- No spaces in filenames

### **What Happens if Image is Missing?**
- Currently shows no image (broken link)
- You could add fallback Unsplash URLs in CSS
- Or create placeholder images

---

## 🔄 Adding Fallback Images (Optional)

If you want Unsplash to show when local image is missing, you can modify the CSS:

```css
.trail-detail-hero {
    background: 
        linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), 
        url('images/trails/lost-creek.jpg'),
        url('https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070');
    /* Will try local first, then Unsplash fallback */
}
```

---

## 📊 Image Checklist

Before committing:

- [ ] All 5 images added to `images/trails/`
- [ ] Files named correctly (exact match)
- [ ] Images optimized (< 500KB each)
- [ ] Dimensions are 1920x1080 or similar
- [ ] Tested locally on all 5 pages
- [ ] Images look good on mobile
- [ ] Copyright/licensing is clear
- [ ] Committed to Git

---

## 🚀 After Adding Images

1. **Test locally first:**
   ```bash
   python3 -m http.server 8000
   ```

2. **Commit and push:**
   ```bash
   git add images/trails/*.jpg
   git commit -m "feat: add trail hero images

   - Added high-quality photos for all 5 trails
   - Optimized for web (< 500KB each)
   - Enhances visual appeal of trail pages"
   
   git push
   ```

3. **Verify on GitHub Pages:**
   - Wait 1-2 minutes for deployment
   - Visit your live site
   - Check all trail pages

---

## 💡 Tips for Best Results

1. **Consistency:** Try to use images with similar lighting/style
2. **Quality:** Don't scale up small images - find high-res originals
3. **Relevance:** Match the image to the trail's character
4. **Mobile:** Test how images look on smaller screens
5. **Loading:** Keep file sizes reasonable for fast loading

---

## ❓ Troubleshooting

### **Image doesn't show:**
- Check filename matches exactly
- Check file is in correct folder: `images/trails/`
- Check file extension is `.jpg` (not `.jpeg` or `.JPG`)
- Clear browser cache (Cmd+Shift+R)

### **Image looks stretched/squished:**
- Ensure image is landscape orientation
- Use 16:9 aspect ratio (1920x1080, 1600x900, etc.)
- The CSS `background-size: cover` will crop as needed

### **File size too large:**
- Use TinyPNG or Squoosh to compress
- Target 200-500KB per image
- Reduce dimensions if needed

---

## ✅ You're All Set!

The code is ready. Just add your 5 images and you're done! 🎉

**Questions?** Check the trail pages' CSS comments for the exact paths.

---

**Last Updated:** October 7, 2025

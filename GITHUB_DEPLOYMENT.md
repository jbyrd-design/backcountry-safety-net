# 🚀 GitHub Deployment Guide

Complete step-by-step instructions to push your Backcountry Safety Net project to GitHub.

---

## 📋 Prerequisites

Before you begin, make sure you have:

- [x] Git installed on your computer
  ```bash
  git --version  # Should show version 2.x or higher
  ```
- [x] GitHub account created at [github.com](https://github.com)
- [x] All project files ready in the `web_app` directory

---

## 🔧 Step 1: Initialize Git Repository

Open your terminal and navigate to your project directory:

```bash
cd "/Users/guestguest/Desktop/SCHOOL/NMSU/GEOG 578 - Intro to GIS/Term Project/Backcountry Safety Net/Term Project Final /web_app"
```

Initialize Git repository:

```bash
# Initialize git
git init

# Check status
git status
```

---

## 📝 Step 2: Configure Git (First Time Only)

If this is your first time using Git, configure your identity:

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email (use GitHub email)
git config --global user.email "your.email@example.com"

# Verify configuration
git config --list
```

---

## 📦 Step 3: Stage and Commit Files

Add all files to staging:

```bash
# Add all files
git add .

# Check what was added
git status
```

Create your initial commit:

```bash
# Commit with descriptive message
git commit -m "Initial commit: Complete backcountry safety web application

- Interactive risk mapping with Leaflet.js
- 5 detailed trail pages with USGS data
- Real-time weather integration (WeatherAPI.com)
- Risk analysis charts with Chart.js
- Responsive mobile-first design
- Flask backend API
- Complete documentation

Built for GEOG 578 at NMSU"
```

---

## 🌐 Step 4: Create GitHub Repository

### Option A: Using GitHub Website (Recommended)

1. **Go to GitHub:**
   - Visit [github.com](https://github.com)
   - Click the **"+"** icon in top right
   - Select **"New repository"**

2. **Configure Repository:**
   - **Repository name:** `backcountry-safety-net`
   - **Description:** `GIS-based recreation risk assessment for Pike National Forest - Interactive web app with trail data, weather integration, and risk analysis`
   - **Visibility:** Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click **"Create repository"**

3. **Copy the repository URL:**
   - You'll see: `https://github.com/YOUR-USERNAME/backcountry-safety-net.git`

### Option B: Using GitHub CLI

```bash
# Install GitHub CLI if needed: brew install gh

# Login to GitHub
gh auth login

# Create repository
gh repo create backcountry-safety-net --public --description "GIS-based recreation risk assessment for Pike National Forest"
```

---

## 🔗 Step 5: Connect Local Repo to GitHub

Add GitHub as remote origin:

```bash
# Replace YOUR-USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR-USERNAME/backcountry-safety-net.git

# Verify remote was added
git remote -v
```

---

## ⬆️ Step 6: Push to GitHub

Push your code to GitHub:

```bash
# Push to main branch
git branch -M main
git push -u origin main
```

If you're prompted for credentials:
- **Username:** Your GitHub username
- **Password:** Use a **Personal Access Token** (not your GitHub password)

### Creating a Personal Access Token:

1. Go to GitHub.com → Settings → Developer settings
2. Click "Personal access tokens" → "Tokens (classic)"
3. Click "Generate new token (classic)"
4. Give it a name: "Backcountry Safety Net"
5. Select scopes: `repo` (full control)
6. Click "Generate token"
7. **Copy the token immediately** (you won't see it again)
8. Use this token as your password when pushing

---

## 🌍 Step 7: Enable GitHub Pages (Optional)

Deploy your site live on GitHub Pages:

1. **Go to your repository on GitHub**
2. **Click "Settings" tab**
3. **Scroll to "Pages" section** (left sidebar)
4. **Under "Source":**
   - Branch: `main`
   - Folder: `/ (root)`
   - Click "Save"
5. **Wait 1-2 minutes**
6. **Visit:** `https://YOUR-USERNAME.github.io/backcountry-safety-net`

### Update README with Live Link:

```bash
# Edit README.md and replace the demo link:
# From: https://your-username.github.io/backcountry-safety-net
# To: https://YOUR-ACTUAL-USERNAME.github.io/backcountry-safety-net

git add README.md
git commit -m "docs: update live demo link"
git push
```

---

## 📸 Step 8: Add Screenshots (Optional but Recommended)

Create a screenshots directory:

```bash
mkdir -p docs/screenshots
```

Take screenshots of:
1. Main dashboard with map
2. Trail detail page
3. Risk analysis charts
4. Mobile view

Save them in `docs/screenshots/` with these names:
- `dashboard.png`
- `trail-detail.png`
- `charts.png`
- `mobile-view.png`

Add and commit:

```bash
git add docs/screenshots/
git commit -m "docs: add application screenshots"
git push
```

---

## 🔄 Step 9: Future Updates

When you make changes to your project:

```bash
# 1. Check what changed
git status

# 2. Add changed files
git add .

# 3. Commit with descriptive message
git commit -m "feat: add new trail or fix: resolve map bug"

# 4. Push to GitHub
git push
```

---

## 🏷️ Step 10: Create a Release (Optional)

Tag your project versions:

```bash
# Create a tag for version 1.0
git tag -a v1.0 -m "Release v1.0: Complete backcountry safety application"

# Push tag to GitHub
git push origin v1.0
```

On GitHub:
1. Go to "Releases"
2. Click "Draft a new release"
3. Choose tag: `v1.0`
4. Title: `Version 1.0 - Initial Release`
5. Describe features and changes
6. Click "Publish release"

---

## 🛠️ Troubleshooting

### "Repository already exists"
```bash
# Remove existing remote
git remote remove origin

# Add correct remote
git remote add origin https://github.com/YOUR-USERNAME/backcountry-safety-net.git
```

### "Permission denied"
- Make sure you're using Personal Access Token, not password
- Check token has `repo` permissions
- Try SSH instead of HTTPS

### "Changes not showing on GitHub"
```bash
# Make sure you committed
git status

# Make sure you pushed
git push origin main
```

### "GitHub Pages not working"
- Wait 5-10 minutes after enabling
- Check Settings → Pages for deployment status
- Ensure `index.html` is in root directory
- Clear browser cache

---

## 📊 Repository Best Practices

### Keep Repository Clean:
```bash
# Don't commit these:
- API keys (use environment variables)
- Large binary files (>100MB)
- Temporary files
- Cache directories
```

### Use Branches for Features:
```bash
# Create feature branch
git checkout -b feature/new-trail

# Make changes, commit
git add .
git commit -m "feat: add new trail data"

# Push feature branch
git push origin feature/new-trail

# Create pull request on GitHub
# Merge after review
```

### Write Good Commit Messages:
```
✅ Good:
- "feat: add Rolling Creek trail with USGS elevation data"
- "fix: resolve weather API timeout on mobile devices"
- "docs: update installation instructions"

❌ Bad:
- "update"
- "fixed stuff"
- "changes"
```

---

## 🎯 Success Checklist

After completing deployment, verify:

- [ ] Repository visible on GitHub
- [ ] All files uploaded correctly
- [ ] README.md displays properly
- [ ] License file present
- [ ] .gitignore working (no unnecessary files)
- [ ] GitHub Pages live (if enabled)
- [ ] All links in README working
- [ ] Repository description set
- [ ] Topics/tags added (gis, mapping, python, javascript)

---

## 🔗 Useful Commands Quick Reference

```bash
# Clone repository
git clone https://github.com/YOUR-USERNAME/backcountry-safety-net.git

# Check status
git status

# Add files
git add .
git add filename.html

# Commit
git commit -m "message"

# Push
git push

# Pull latest changes
git pull

# View commit history
git log

# Create branch
git checkout -b branch-name

# Switch branch
git checkout main

# View remotes
git remote -v

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes
git reset --hard
```

---

## 📧 Next Steps

After deployment:

1. **Share Your Work:**
   - Add link to your resume/CV
   - Include in your portfolio
   - Share with professors/classmates
   - Link from ArcGIS StoryMap

2. **Maintain the Project:**
   - Update weather API key if needed
   - Add new trails as you explore
   - Fix bugs reported by users
   - Improve documentation

3. **Showcase:**
   - Create a demo video
   - Write a blog post about the project
   - Present at GIS conferences
   - Submit to NMSU student showcase

---

## ✅ Deployment Complete!

Your repository is now live on GitHub! 🎉

**Repository URL:** `https://github.com/YOUR-USERNAME/backcountry-safety-net`

**GitHub Pages URL:** `https://YOUR-USERNAME.github.io/backcountry-safety-net`

---

**Need Help?**
- GitHub Documentation: https://docs.github.com
- Git Tutorial: https://git-scm.com/docs/gittutorial
- GitHub Pages Guide: https://pages.github.com

**Questions?** Open an issue in your repository or contact your instructor.

---

**Built for GEOG 578 - Introduction to GIS | New Mexico State University** 🏔️

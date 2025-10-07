# 🚀 START HERE - Push to GitHub

Your project is ready to be pushed to GitHub! Here are your options:

---

## ⚡ Quick Method (Automated Script)

**Easiest way - just run one command:**

```bash
./DEPLOY_TO_GITHUB.sh
```

The script will:
- ✅ Initialize Git repository
- ✅ Configure your Git user
- ✅ Stage all files
- ✅ Create initial commit
- ✅ Connect to GitHub
- ✅ Push your code

**Follow the prompts!**

---

## 📋 Manual Method (Step-by-Step)

If you prefer to do it manually, follow these commands:

### 1. Initialize Git

```bash
cd "/Users/guestguest/Desktop/SCHOOL/NMSU/GEOG 578 - Intro to GIS/Term Project/Backcountry Safety Net/Term Project Final /web_app"

git init
```

### 2. Configure Git (First Time)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 3. Add & Commit Files

```bash
git add .

git commit -m "Initial commit: Complete backcountry safety web application"
```

### 4. Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `backcountry-safety-net`
3. **Description:** `GIS-based recreation risk assessment for Pike National Forest`
4. Choose **Public** or **Private**
5. **DO NOT** check any initialization options
6. Click **"Create repository"**

### 5. Connect & Push

```bash
# Replace YOUR-USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR-USERNAME/backcountry-safety-net.git

git branch -M main

git push -u origin main
```

**When prompted for password, use a Personal Access Token:**
- Create at: [github.com/settings/tokens](https://github.com/settings/tokens)
- Click "Generate new token (classic)"
- Select `repo` scope
- Use token as password

---

## 🌐 Enable GitHub Pages (Optional)

Make your site live on the web:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 2-3 minutes
6. Visit: `https://YOUR-USERNAME.github.io/backcountry-safety-net`

---

## 📚 Documentation Files Created

Your repository now includes:

- ✅ **README.md** - Main project documentation with badges
- ✅ **LICENSE** - MIT License with data attribution
- ✅ **CONTRIBUTING.md** - Contribution guidelines
- ✅ **GITHUB_DEPLOYMENT.md** - Detailed deployment guide
- ✅ **.gitignore** - Excludes unnecessary files
- ✅ **DEPLOY_TO_GITHUB.sh** - Automated deployment script

---

## ✅ Deployment Checklist

After pushing to GitHub, verify:

- [ ] Repository is visible on GitHub
- [ ] README displays correctly
- [ ] All files uploaded (11 total files)
- [ ] No sensitive data (API keys are public, that's OK for this project)
- [ ] License file present
- [ ] Repository description set
- [ ] Topics added: `gis`, `mapping`, `python`, `javascript`, `leaflet`

---

## 🎯 Quick Commands Reference

```bash
# Check status
git status

# Add new files
git add .

# Commit changes
git commit -m "your message"

# Push to GitHub
git push

# Pull latest
git pull

# View history
git log --oneline
```

---

## 🆘 Troubleshooting

### "Permission denied"
- Use Personal Access Token, not password
- Create token at: https://github.com/settings/tokens

### "Repository already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/backcountry-safety-net.git
```

### "Nothing to commit"
- You may have already committed
- Run `git status` to check
- Proceed to push: `git push`

### Need detailed help?
- See **GITHUB_DEPLOYMENT.md** for comprehensive guide
- GitHub Docs: https://docs.github.com
- Git Tutorial: https://git-scm.com/docs/gittutorial

---

## 🎉 After Deployment

Once on GitHub, you can:

1. **Share your work:**
   - Add to your resume/portfolio
   - Include in ArcGIS StoryMap
   - Share with professors/classmates

2. **Enable GitHub Pages:**
   - Get a live URL for your web app
   - Share the link anywhere

3. **Maintain the project:**
   - Add new trails
   - Fix bugs
   - Improve features

---

## 📧 Questions?

- Check **GITHUB_DEPLOYMENT.md** for detailed instructions
- Open an issue on GitHub after deployment
- Ask your instructor for help

---

**Choose your method above and get started! 🚀**

**Your project is professional, well-documented, and ready to share!** 🏔️

---

**GEOG 578 - Introduction to GIS | New Mexico State University**

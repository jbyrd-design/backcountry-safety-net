#!/bin/bash

# ============================================
# Backcountry Safety Net - GitHub Deployment
# ============================================
# 
# This script helps you deploy your project to GitHub
# Run this from the web_app directory
#

echo "🏔️  Backcountry Safety Net - GitHub Deployment"
echo "=============================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first:"
    echo "   Download from: https://git-scm.com/downloads"
    exit 1
fi

echo "✅ Git is installed ($(git --version))"
echo ""

# Check if already initialized
if [ -d ".git" ]; then
    echo "⚠️  Git repository already initialized in this directory"
    echo ""
    read -p "Do you want to continue? (y/n): " continue_deploy
    if [ "$continue_deploy" != "y" ]; then
        echo "Deployment cancelled."
        exit 0
    fi
else
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
    echo ""
fi

# Configure git user (if not already configured)
if [ -z "$(git config user.name)" ]; then
    echo "📝 Git user configuration needed"
    read -p "Enter your name: " git_name
    read -p "Enter your email: " git_email
    git config --global user.name "$git_name"
    git config --global user.email "$git_email"
    echo "✅ Git configured"
    echo ""
fi

echo "Current Git user: $(git config user.name) <$(git config user.email)>"
echo ""

# Stage all files
echo "📁 Staging all files..."
git add .
echo "✅ Files staged"
echo ""

# Show status
echo "📊 Repository status:"
git status --short
echo ""

# Create initial commit
read -p "📝 Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Initial commit: Complete backcountry safety web application

- Interactive risk mapping with Leaflet.js
- 5 detailed trail pages with USGS data  
- Real-time weather integration (WeatherAPI.com)
- Risk analysis charts with Chart.js
- Responsive mobile-first design
- Flask backend API
- Complete documentation

Built for GEOG 578 at NMSU"
fi

git commit -m "$commit_msg"
echo "✅ Initial commit created"
echo ""

# Get GitHub repository URL
echo "🌐 GitHub Repository Setup"
echo "=========================="
echo ""
echo "Please create a new repository on GitHub:"
echo "1. Go to https://github.com/new"
echo "2. Repository name: backcountry-safety-net"
echo "3. Description: GIS-based recreation risk assessment for Pike National Forest"
echo "4. Visibility: Public (recommended) or Private"
echo "5. DO NOT initialize with README (we already have one)"
echo "6. Click 'Create repository'"
echo ""

read -p "Enter your GitHub repository URL (e.g., https://github.com/username/backcountry-safety-net.git): " repo_url

if [ -z "$repo_url" ]; then
    echo "❌ Repository URL is required"
    exit 1
fi

# Add remote
if git remote | grep -q "origin"; then
    echo "⚠️  Remote 'origin' already exists. Removing..."
    git remote remove origin
fi

git remote add origin "$repo_url"
echo "✅ Remote repository added"
echo ""

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
echo ""
echo "You may be prompted for credentials:"
echo "- Username: Your GitHub username"
echo "- Password: Use a Personal Access Token (NOT your GitHub password)"
echo ""
echo "To create a token:"
echo "1. Go to https://github.com/settings/tokens"
echo "2. Click 'Generate new token (classic)'"
echo "3. Select 'repo' scope"
echo "4. Copy the token and use it as your password"
echo ""

read -p "Press Enter to continue with push..."

git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 SUCCESS! Your project is now on GitHub!"
    echo "============================================"
    echo ""
    echo "Repository URL: ${repo_url%.git}"
    echo ""
    echo "Next steps:"
    echo "1. Visit your repository on GitHub"
    echo "2. Enable GitHub Pages (Settings → Pages → Source: main branch)"
    echo "3. Wait 1-2 minutes for deployment"
    echo "4. Your live site will be at: https://$(echo $repo_url | cut -d'/' -f4).github.io/backcountry-safety-net"
    echo ""
    echo "🏔️  Happy mapping!"
else
    echo ""
    echo "❌ Push failed. Common issues:"
    echo "1. Wrong credentials - Use Personal Access Token, not password"
    echo "2. Repository already has content - Try git pull first"
    echo "3. Network issues - Check your internet connection"
    echo ""
    echo "For detailed help, see GITHUB_DEPLOYMENT.md"
fi

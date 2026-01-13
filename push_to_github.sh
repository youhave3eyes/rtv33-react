#!/bin/bash

# RTV33 React - GitHub Push Script
# This script will help you push your code to GitHub

echo "🚀 RTV33 React - GitHub Setup"
echo "================================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in rtv33-react directory"
    exit 1
fi

echo "📝 Step 1: Create the GitHub repository"
echo "   Go to: https://github.com/new"
echo "   Repository name: rtv33-react"
echo "   Description: Raise The Vibration - Conscious Community Platform"
echo "   Make it Public or Private (your choice)"
echo "   DO NOT initialize with README, .gitignore, or license"
echo ""
read -p "Press ENTER when you've created the repository on GitHub..."

echo ""
echo "📡 Step 2: Adding remote repository..."
git remote add origin https://github.com/Youhave3eyes/rtv33-react.git

echo ""
echo "🔍 Step 3: Verifying remote..."
git remote -v

echo ""
echo "⬆️  Step 4: Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Done! Your code should now be on GitHub at:"
echo "   https://github.com/Youhave3eyes/rtv33-react"
echo ""
echo "🎉 Next steps:"
echo "   - Visit your repository to see your code"
echo "   - Enable GitHub Pages for free hosting (optional)"
echo "   - Add collaborators (optional)"
echo "   - Set up GitHub Actions for CI/CD (optional)"

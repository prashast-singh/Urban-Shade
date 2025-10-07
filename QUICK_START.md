# 🚀 Quick Start: Push to GitHub & Deploy

Your project is **ready to push to GitHub**! Follow these simple steps:

---

## ✅ Step 1: Create GitHub Repository

1. Go to **[github.com/new](https://github.com/new)**
2. Fill in:
   - **Repository name**: `urbanshade-landing` (or your choice)
   - **Description**: "Modern bilingual landing page for UrbanShade"
   - **Public** repository (required for free GitHub Pages)
   - ⚠️ **DO NOT** check any initialization options
3. Click **"Create repository"**

---

## ✅ Step 2: Push Your Code

Run these commands in your terminal:

```bash
# Navigate to your project (if not already there)
cd /Users/prashastsingh/Desktop/safaaProject

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/urbanshade-landing.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Important**: Replace `YOUR_USERNAME` with your actual GitHub username!

---

## ✅ Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"**
4. Done! 🎉

---

## ✅ Step 4: View Your Live Site

After 2-3 minutes, your site will be live at:

```
https://YOUR_USERNAME.github.io/urbanshade-landing/
```

---

## 🔄 Future Updates

To update your live site:

```bash
# Make changes to your code
# Then:
git add .
git commit -m "Description of your changes"
git push
```

GitHub will automatically rebuild and deploy! ✨

---

## 📊 Monitor Deployments

- Check the **Actions** tab in your GitHub repo
- See real-time build and deployment status
- View detailed logs if needed

---

## ⚡ Alternative: Manual Deploy

If you prefer manual control:

```bash
npm install
npm run deploy
```

Then change Pages source to "Deploy from a branch" → select `gh-pages`

---

**Need help?** Check `DEPLOYMENT.md` for detailed instructions and troubleshooting!

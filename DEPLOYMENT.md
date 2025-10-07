# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy the UrbanShade landing page to GitHub Pages.

---

## 📋 Prerequisites

- Git installed on your computer
- A GitHub account
- The project files (already created ✅)

---

## 🔧 Step 1: Initialize Git Repository

The project is now configured for GitHub Pages. Let's initialize git:

```bash
cd /Users/prashastsingh/Desktop/safaaProject
git init
git add .
git commit -m "Initial commit: UrbanShade landing page"
```

---

## 🌐 Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon (top right) → **"New repository"**
3. Repository settings:
   - **Name**: `urbanshade-landing` (or any name you prefer)
   - **Description**: "Modern bilingual landing page for UrbanShade"
   - **Visibility**: Public (required for free GitHub Pages)
   - ⚠️ **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

---

## 📤 Step 3: Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/urbanshade-landing.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username!

---

## ⚙️ Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. In the left sidebar, click **"Pages"**
4. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"**
5. The page will automatically deploy!

---

## 🎉 Step 5: Access Your Live Site

After 2-3 minutes, your site will be live at:

```
https://YOUR_USERNAME.github.io/urbanshade-landing/
```

The GitHub Actions workflow will automatically build and deploy whenever you push to the `main` branch!

---

## 🔄 Alternative: Manual Deployment with gh-pages

If you prefer manual deployment:

```bash
# Install dependencies first
npm install

# Deploy to GitHub Pages
npm run deploy
```

This will:
1. Build the project
2. Push the `dist` folder to a `gh-pages` branch
3. GitHub Pages will serve from that branch

**Note**: You'll need to change the Pages source to "Deploy from branch" and select `gh-pages` in repository settings.

---

## 📝 Making Updates

After the initial deployment, to update your site:

```bash
# Make your changes to the code
# Then commit and push:

git add .
git commit -m "Update: description of changes"
git push
```

GitHub Actions will automatically rebuild and redeploy! ✨

---

## 🛠️ Configuration Details

### What's Been Set Up:

✅ **Vite Config** - Base path set to `/urbanshade-landing/`
✅ **GitHub Actions Workflow** - Automatic deployment on push
✅ **Deploy Script** - Manual deployment option with `npm run deploy`
✅ **gh-pages Package** - Added for manual deployments

### Files Modified:

- `vite.config.js` - Added base path for GitHub Pages
- `package.json` - Added deploy scripts and gh-pages package
- `.github/workflows/deploy.yml` - GitHub Actions workflow

---

## 🎯 Recommended: Use GitHub Actions

**Why?**
- ✅ Automatic deployment on every push
- ✅ No need to run build commands locally
- ✅ Consistent builds in clean environment
- ✅ Free for public repositories

---

## 🐛 Troubleshooting

### Site shows 404 error
- Check that GitHub Pages is enabled in repository settings
- Verify the source is set to "GitHub Actions"
- Wait 2-3 minutes for first deployment

### CSS/Images not loading
- Verify `base: '/urbanshade-landing/'` in `vite.config.js`
- Make sure the repo name matches the base path

### Build fails in GitHub Actions
- Check the Actions tab for error logs
- Ensure all dependencies are in `package.json`
- Try running `npm run build` locally first

### Want to use a custom domain?
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update the `base` in `vite.config.js` to `'/'`

---

## 📊 Monitoring Deployments

- Go to the **"Actions"** tab in your GitHub repository
- You'll see all deployment runs
- Click any run to see detailed logs

---

## 🎨 Next Steps After Deployment

1. ✅ Test the live site on different devices
2. ✅ Share the URL with stakeholders
3. ✅ Set up a custom domain (optional)
4. ✅ Add analytics (Google Analytics, etc.)
5. ✅ Monitor performance with Lighthouse

---

**Your UrbanShade landing page is ready to go live! 🌿**


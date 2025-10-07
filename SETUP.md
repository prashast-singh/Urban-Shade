# Quick Setup Guide 🚀

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation Steps

1. **Navigate to the project directory:**

   ```bash
   cd safaaProject
   ```

2. **Install all dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The app will be available at `http://localhost:5173`
   - You should see the UrbanShade landing page!

## Features to Try

### 🌐 Language Switching

- Click the language toggle (🇬🇧/🇩🇪) in the navbar
- All text will instantly switch between English and German

### 📱 Responsive Design

- Resize your browser window or open on mobile
- The layout adapts beautifully to any screen size

### 🎨 Smooth Animations

- Scroll down the page to see fade-in animations
- Hover over cards in the Sustainability section
- Use the back-to-top button that appears when scrolling

### 📝 Contact Form

- Fill out and submit the contact form
- See a success message appear (no backend required)

## Project Highlights

✨ **Modern Tech Stack:**

- React with Vite for blazing-fast development
- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations
- i18next for professional internationalization

🎯 **Best Practices:**

- Component-based architecture
- Responsive design from mobile-first
- Accessibility-friendly markup
- Optimized performance

🌿 **UrbanShade Branding:**

- Green color scheme (#2e7d32, #81c784)
- Nature-focused imagery from Unsplash
- Clean, modern design aesthetic
- Professional typography (Inter font)

## Troubleshooting

**Port already in use?**

- Vite will automatically try the next available port
- Or specify a custom port: `npm run dev -- --port 3000`

**Dependencies not installing?**

- Try: `rm -rf node_modules package-lock.json && npm install`
- Make sure you have Node.js v16 or higher

**Build not working?**

- Check that all dependencies are installed
- Verify Node.js version: `node --version`

## Next Steps

- Customize the color scheme in `tailwind.config.js`
- Update translations in `src/i18n.js`
- Replace placeholder social links in `Footer.jsx`
- Add your own images or keep the Unsplash ones
- Deploy to Vercel, Netlify, or your preferred platform

Enjoy building with UrbanShade! 🌿

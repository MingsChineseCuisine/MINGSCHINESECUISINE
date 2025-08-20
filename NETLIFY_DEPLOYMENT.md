# Netlify Deployment Guide for Ming's Chinese Cuisine Website

## Overview
This project has been configured for deployment on Netlify as a static single-page application (SPA). The deployment uses mock data for demonstration purposes since Netlify doesn't support server-side Express.js applications out of the box.

## Prerequisites
- A Netlify account (free tier works fine)
- Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Options

### Option 1: Git-Based Deployment (Recommended)

1. **Push your code to a Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Ming's Chinese Cuisine website"
   git remote add origin [your-repo-url]
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Log in to [Netlify](https://app.netlify.com/)
   - Click "New site from Git"
   - Connect your Git provider (GitHub/GitLab/Bitbucket)
   - Select your repository
   - Netlify will automatically detect the `netlify.toml` configuration

3. **Build Settings (Auto-configured)**
   - **Build command**: `node build-netlify.js`
   - **Publish directory**: `dist/public`
   - **Node version**: 20 (specified in netlify.toml)

### Option 2: Manual Deploy

1. **Build the project locally**
   ```bash
   node build-netlify.js
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --dir=dist/public
   netlify deploy --prod --dir=dist/public
   ```

3. **Or drag & drop the dist/public folder**
   - Go to [Netlify](https://app.netlify.com/)
   - Drag the `dist/public` folder to the deploy area

## Features Configured for Netlify

### ✅ Client-Side Routing
- Single Page Application (SPA) routing with Wouter
- All routes redirect to `index.html` via `netlify.toml`
- Works with direct URL access and browser refresh

### ✅ Mock Data System
- Menu items, reservations, and contact forms use mock data
- No backend database required for demonstration
- Data structure matches the original schema

### ✅ Performance Optimizations
- Static asset caching (1 year cache for images, CSS, JS)
- Minified and optimized build output
- Image optimization and compression

### ✅ Responsive Design
- Mobile-first design works on all devices
- Touch-friendly interactions
- Optimized images for different screen sizes

## Live Features on Netlify

### Working Features:
- ✅ Menu browsing with categories
- ✅ Photo gallery with lightbox
- ✅ Responsive design and animations
- ✅ Contact information and location
- ✅ Social media links
- ✅ Scroll animations and hover effects
- ✅ Form validation (client-side)

### Mock Features (Demo Only):
- 🎭 Reservation form (logs to console)
- 🎭 Contact form (logs to console)
- 🎭 Menu data (static mock data)

## Upgrading to Full Functionality

To add real backend functionality, consider these Netlify-compatible options:

### 1. Netlify Forms (Simple)
- Replace form submissions with Netlify Forms
- Add `data-netlify="true"` to forms
- Submissions go to Netlify dashboard

### 2. Serverless Functions (Advanced)
- Create Netlify Functions in `netlify/functions/`
- Add database integration (Neon, Supabase, etc.)
- Replace mock API with real endpoints

### 3. Third-Party Services
- Airtable for data storage
- Typeform for reservations
- EmailJS for contact forms

## Environment Variables (if needed)
Add environment variables in Netlify dashboard:
- Site Settings → Environment Variables
- Prefix with `VITE_` for client-side access

## Custom Domain (Optional)
- Add custom domain in Site Settings → Domain Management
- Netlify provides free HTTPS certificates
- DNS configuration instructions provided by Netlify

## Troubleshooting

### Build Issues
- Check Node.js version (should be 20)
- Ensure all dependencies are in `package.json`
- Review build logs in Netlify dashboard

### Routing Issues
- Verify `netlify.toml` is in root directory
- Check that all internal links use relative paths
- Test SPA routing with direct URL access

### Asset Loading Issues
- Ensure images are in `attached_assets` folder
- Check import paths use `@assets/` prefix
- Verify build output includes all assets

## Support
For deployment issues:
- Check Netlify documentation
- Review build logs in Netlify dashboard
- Test builds locally first with `node build-netlify.js`
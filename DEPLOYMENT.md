# Deployment Guide for Vercel

## Issues Fixed

1. **Vercel Configuration**: Updated `vercel.json` to use the correct build settings for React applications
2. **Missing Icon**: Removed reference to non-existent `logo192.png` from `index.html`
3. **File Naming**: Renamed PDF file to remove spaces (`AhtIsham- Resume .pdf` → `AhtIsham-Resume.pdf`)
4. **File Path**: Updated Hero component to use the correct PDF filename

## Deployment Steps

1. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Fix deployment issues"
   git push
   ```

2. **Deploy to Vercel**:
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect it's a React app
   - The build should now work correctly

## Key Changes Made

### vercel.json
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "installCommand": "npm install",
  "framework": "create-react-app",
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Fixed Files
- `public/index.html`: Removed reference to missing `logo192.png`
- `src/components/Hero.tsx`: Updated PDF file path
- `public/AhtIsham-Resume.pdf`: Renamed from `AhtIsham- Resume .pdf`

## Why These Fixes Work

1. **Vercel Configuration**: The original config used `@vercel/static-build` which is not suitable for React apps. The new config uses the correct build commands.

2. **File References**: Missing files and spaces in filenames can cause 404 errors, leading to blank pages.

3. **Routing**: The SPA routing ensures all routes redirect to `index.html` for client-side routing.

Your app should now deploy successfully on Vercel without showing a blank page! 
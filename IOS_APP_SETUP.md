# iOS App Setup Guide

## Current Setup

Your Working Holiday Helper is now configured as a Progressive Web App (PWA) that can be installed on iOS devices.

### What's Been Added:

1. **iOS Meta Tags** in index.html:
   - `apple-mobile-web-app-capable`: Enables full-screen mode
   - `apple-mobile-web-app-status-bar-style`: Controls status bar appearance
   - `apple-mobile-web-app-title`: Sets the app name on home screen
   - `apple-touch-icon`: Specifies the app icon

2. **Updated manifest.json** with:
   - Relative paths for GitHub Pages compatibility
   - Standalone display mode
   - Portrait orientation
   - App icons configuration

3. **Service Worker** (sw.js):
   - Offline functionality
   - Caching for all pages
   - GitHub Pages path handling

4. **Install Prompt**:
   - Auto-shows for iOS Safari users
   - Remembers if user dismissed it
   - Provides step-by-step instructions

## Testing on iOS

### Method 1: GitHub Pages (Recommended)

1. **Deploy to GitHub Pages**:
   ```bash
   git add .
   git commit -m "Add iOS PWA support"
   git push origin master
   ```

2. **On your iPhone/iPad**:
   - Open Safari (must be Safari, not Chrome)
   - Go to: https://cronus87.github.io/WHVSite/
   - Wait for the install prompt to appear (2 seconds)
   - Or manually: Tap Share button → Add to Home Screen → Add

### Method 2: Local Testing

1. **Find your computer's IP**:
   ```bash
   # On Mac/Linux:
   ifconfig | grep inet
   # On Windows:
   ipconfig
   ```

2. **Start local server**:
   ```bash
   cd "/mnt/d/VS Code Projects/WHVSite"
   python3 -m http.server 8080
   ```

3. **On iPhone (same WiFi)**:
   - Open Safari
   - Go to: http://[YOUR-IP]:8080
   - Add to Home Screen

## Icon Setup

Currently using placeholder SVG icons. To use custom icons:

1. **Convert SVGs to PNGs**:
   - Open icon-192.svg and icon-512.svg in browser
   - Take screenshots or use online converter
   - Save as icon-192.png and icon-512.png

2. **Or create custom icons**:
   - 192x192px PNG (home screen icon)
   - 512x512px PNG (splash screen)
   - Use rounded corners (iOS will add them if not)
   - Avoid text near edges

## Features When Installed

- **Full screen**: No browser UI
- **Offline access**: All pages cached
- **Home screen icon**: Quick access
- **Native feel**: Looks like a real app

## Next Steps for Full Native App

If you want to submit to App Store later:

1. **Option 1: Capacitor** (Recommended)
   ```bash
   npm install @capacitor/core @capacitor/ios
   npx cap init
   npx cap add ios
   npx cap sync
   npx cap open ios
   ```

2. **Option 2: PWA to App Store**
   - Use services like PWABuilder
   - Or manual WKWebView wrapper

3. **Requirements for App Store**:
   - Apple Developer Account ($99/year)
   - Xcode on Mac
   - App Store screenshots
   - Privacy policy
   - Unique functionality beyond website

## Troubleshooting

### Install prompt not showing?
- Must use Safari on iOS
- Clear Safari cache
- Check if already installed
- Delete localStorage

### Icons not showing?
- Ensure PNG files exist
- Check paths in manifest.json
- Clear cache and reinstall

### Links not working?
- Check base tag is present
- Verify service worker is registered
- Check browser console for errors

## Current Status

✅ PWA configured for iOS
✅ Offline functionality working
✅ Install prompt implemented
✅ GitHub Pages compatible
🔄 Need to convert SVG icons to PNG
🔄 Test on actual iOS device

The app is ready to test on iOS devices via GitHub Pages!
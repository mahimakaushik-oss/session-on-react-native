# React Native Session - Student Setup Guide

## Welcome! 👋

Get ready for an exciting React Native session! Follow this guide to set up your development environment before the session starts.

---

## ⏰ Time Required: 15-30 minutes

---

## 📋 What You'll Need

### Required
1. Computer (Windows, Mac, or Linux)
2. Internet connection
3. Smartphone (iOS or Android) - optional but recommended

### Nice to Have
- Basic JavaScript knowledge
- Some React experience (helpful but not required)
- Excitement to build mobile apps!

---

## 🛠️ Step-by-Step Installation

### Step 1: Install Node.js

**What is Node.js?**
Runtime environment that lets us run JavaScript outside the browser.

**Installation:**

1. Visit: https://nodejs.org
2. Download the **LTS version** (recommended)
3. Run the installer
4. Follow the installation wizard (keep default settings)

**Verify Installation:**

Open Terminal (Mac/Linux) or Command Prompt (Windows) and type:

```bash
node --version
```

You should see something like: `v18.17.0` or higher

Then check npm:

```bash
npm --version
```

You should see something like: `9.6.7` or higher

✅ **Success!** If you see version numbers, Node.js and npm are installed.

❌ **Issue?** Restart your terminal/command prompt and try again.

---

### Step 2: Install a Code Editor

**We recommend VS Code** (free and popular)

**Installation:**

1. Visit: https://code.visualstudio.com
2. Download for your operating system
3. Install with default settings

**Recommended Extensions** (install after VS Code is ready):

Open VS Code → Extensions (left sidebar) → Search and install:

1. **React Native Tools** (by Microsoft)
2. **ES7+ React/Redux/React-Native snippets**
3. **Prettier - Code formatter**
4. **ESLint** (optional)

Don't worry if you don't install extensions now - you can add them later!

---

### Step 3: Install Expo Go App on Your Phone

**What is Expo Go?**
Mobile app that lets you preview your React Native app instantly.

**Installation:**

**For iOS (iPhone/iPad):**
1. Open App Store
2. Search "Expo Go"
3. Install the app

**For Android:**
1. Open Google Play Store
2. Search "Expo Go"
3. Install the app

**Don't have a smartphone?**
- You can still participate! We'll use emulators or you can watch the demos.
- You can set up an Android emulator later (more complex).

---

### Step 4: Test Your Setup

Let's create a test app to make sure everything works!

**Open Terminal/Command Prompt** and run these commands:

```bash
# Create a new app (this will take 2-5 minutes)
npx create-expo-app TestApp

# Navigate into the folder
cd TestApp

# Start the app
npx expo start
```

**What you should see:**
- Metro bundler starting
- QR code appears in terminal
- Instructions to open on your phone

**Test on your phone:**
1. Open Expo Go app
2. Scan the QR code with your camera (iOS) or within Expo Go (Android)
3. You should see "Open with Expo Go"
4. Tap it - your app should load!
5. You should see "Welcome to React Native" on your phone

**Test Hot Reload:**
1. Open the `App.js` file in VS Code
2. Change the text "Welcome" to "Hello"
3. Save the file (Ctrl+S or Cmd+S)
4. Look at your phone - the text should update automatically!

✅ **Success!** You're ready for the session!

---

## 🎉 You're All Set!

If you completed all steps, you're ready to go! See you at the session.

---

## 🚨 Troubleshooting

### Issue: "node: command not found"

**Solution:**
- Restart your terminal/command prompt
- If still not working, reinstall Node.js
- Make sure you selected the option to add Node to PATH during installation

---

### Issue: "npx create-expo-app" fails

**Solutions to try:**

1. **Update npm:**
   ```bash
   npm install -g npm@latest
   ```

2. **Clear npm cache:**
   ```bash
   npm cache clean --force
   ```

3. **Try again:**
   ```bash
   npx create-expo-app TestApp
   ```

---

### Issue: Can't see app on phone

**Check these:**
- ✅ Phone and computer on same WiFi network
- ✅ Expo Go app installed and updated
- ✅ Scanning the correct QR code
- ✅ Firewall not blocking connection

**Alternative:**
Try tunnel mode:
```bash
npx expo start --tunnel
```

---

### Issue: Port already in use

**Solution:**
```bash
npx expo start --port 8082
```

---

### Issue: "Cannot find module" errors

**Solution:**
```bash
cd TestApp
rm -rf node_modules
npm install
npx expo start
```

---

## 🆘 Still Having Issues?

**Don't worry!** You can still participate in the session:

1. Watch the live coding demos
2. Take notes
3. Set up your environment during/after the session
4. We'll help you during breaks

**The most important thing is to show up and learn!**

---

## 📱 Alternative: Expo Snack (No Installation)

If you can't install anything, use Expo Snack (online editor):

1. Visit: https://snack.expo.dev
2. Create a free account
3. Start coding in the browser!
4. Scan QR code with Expo Go app to see results

**Note:** Snack is great for learning but limited compared to local development.

---

## ✅ Pre-Session Checklist

Before the session starts:

- [ ] Node.js installed (check with `node --version`)
- [ ] npm installed (check with `npm --version`)
- [ ] VS Code (or any code editor) installed
- [ ] Expo Go app on phone (optional)
- [ ] Created test app successfully
- [ ] Verified hot reload works
- [ ] Joined session Zoom/Teams link

---

## 📚 Optional Pre-Session Preparation

Want to get ahead? Check out these (completely optional):

### Quick Reads (15 mins)
- React Native official docs: https://reactnative.dev
- "What is React Native?" on reactnative.dev

### Video (10 mins)
- Search YouTube: "React Native in 100 Seconds"
- Watch any intro to React Native video

### Practice (30 mins)
- Complete JavaScript refresher if rusty
- Review React basics (components, props, state)
- Play with Expo Snack: https://snack.expo.dev

**Remember:** These are OPTIONAL! You'll learn everything in the session.

---

## 🎯 What to Bring to the Session

- [ ] Laptop with Node.js installed
- [ ] Phone with Expo Go (optional)
- [ ] Charger (for laptop and phone)
- [ ] Notebook/note-taking app
- [ ] Questions and curiosity!
- [ ] Enthusiasm to build apps!

---

## 💡 Tips for Success

1. **Follow along** - Code with the instructor
2. **Ask questions** - No question is too basic
3. **Take breaks** - Stretch during breaks
4. **Experiment** - Try changing code during exercises
5. **Don't stress** - Making mistakes is part of learning!

---

## 📞 Need Help?

**Before the session:**
- Email: [instructor-email@example.com]
- Slack/Discord: [link-if-available]

**During the session:**
- Raise hand (virtual or physical)
- Use chat for technical issues
- We'll have troubleshooting time

**After the session:**
- All code examples will be shared
- Recording link (if recorded)
- Resources document

---

## 🚀 Session Overview

**What we'll build:**
1. First React Native app
2. Multi-screen app with tabs
3. Notification app with interactions

**What you'll learn:**
- React Native basics
- Components and styling
- State management
- Navigation
- Props and data flow
- Best practices

**Duration:** 2 hours (with breaks)

---

## 🎓 After the Session

You'll receive:
- Complete session guide
- All code examples
- Quick reference sheet
- Resource links
- Recording (if available)

---

## ⭐ Final Notes

**Don't panic if:**
- Setup takes longer than expected
- You encounter errors
- You can't install everything
- You're completely new to this

**Remember:**
- Everyone starts somewhere
- We'll help you during the session
- You'll have all materials after
- The community is very helpful

---

## 🎉 See You at the Session!

You're going to build amazing mobile apps. Let's do this! 🚀

---

**Questions before the session?**
Contact: [instructor-contact]

**Session Link:**
[Zoom/Teams/Meet link]

**Session Time:**
[Date and Time]

---

*Happy Coding!* 💻📱

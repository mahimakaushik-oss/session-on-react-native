# Quick Guide: Running Example Apps in Android Emulator

## 🚀 Quick Start (5 Minutes)

### Option 1: First App (Already Created! ✅)

The first example app is **ready to run right now**:

```bash
cd "C:\Users\Mahima Kaushik\Desktop\react-native-class\demo-apps\01-FirstApp"
npx expo start --android
```

That's it! The app will open in your Android emulator automatically.

---

## 📱 Running Any Example Quickly

### Method: Copy & Run

To run any other example, follow this simple 3-step process:

**Step 1: Create a new Expo app**
```bash
cd "C:\Users\Mahima Kaushik\Desktop\react-native-class\demo-apps"
npx create-expo-app <app-name>
```

**Step 2: Replace App.js**
- Copy the example code from `react-native-class/examples/`
- Paste into `demo-apps/<app-name>/App.js`

**Step 3: Run it**
```bash
cd <app-name>
npx expo start --android
```

---

## 🎯 Example-Specific Instructions

### Example 2: Tab Navigation

This example requires additional packages:

```bash
# Create app
cd "C:\Users\Mahima Kaushik\Desktop\react-native-class\demo-apps"
npx create-expo-app 02-TabNavigation

# Navigate into it
cd 02-TabNavigation

# Install navigation packages
npm install @react-navigation/native @react-navigation/bottom-tabs
npx expo install react-native-screens react-native-safe-area-context

# Copy code from examples/02-TabNavigation.js to App.js
# Then run:
npx expo start --android
```

---

### Example 3: Notification App

No extra packages needed!

```bash
# Create app
cd "C:\Users\Mahima Kaushik\Desktop\react-native-class\demo-apps"
npx create-expo-app 03-NotificationApp
cd 03-NotificationApp

# Copy code from examples/03-NotificationApp.js to App.js
# Then run:
npx expo start --android
```

---

### Example 4: Props Example

No extra packages needed!

```bash
# Create app
cd "C:\Users\Mahima Kaushik\Desktop\react-native-class\demo-apps"
npx create-expo-app 04-PropsExample
cd 04-PropsExample

# Copy code from examples/04-PropsExample.js to App.js
# Then run:
npx expo start --android
```

---

### Example 5: Redux Example

This example requires Redux packages:

```bash
# Create app
cd "C:\Users\Mahima Kaushik\Desktop\react-native-class\demo-apps"
npx create-expo-app 05-ReduxExample
cd 05-ReduxExample

# Install Redux packages
npm install @reduxjs/toolkit react-redux

# For this example, you need to create the store structure
# Copy these files from examples/05-ReduxExample.js:
# - App.js (root with Provider)
# - MainApp.js
# - store/index.js
# - store/notificationSlice.js
# - store/userSlice.js

# Then run:
npx expo start --android
```

**Note:** Redux example is more complex. See the full code in `examples/05-ReduxExample.js` for complete file structure.

---

## ⚡ Super Quick Demo Workflow

For your session tomorrow, here's the fastest way:

### Before Session (Setup)

**Option A: Use First App Only** (Simplest)
```bash
# Already done!
cd demo-apps/01-FirstApp
npx expo start --android
```

**Option B: Pre-create 2-3 Apps** (Recommended)
```bash
# Create Notification App (most impressive)
cd demo-apps
npx create-expo-app 03-NotificationApp
cd 03-NotificationApp
# Copy code from examples/03-NotificationApp.js to App.js

# Create Tab Navigation (shows navigation)
cd ..
npx create-expo-app 02-TabNavigation
cd 02-TabNavigation
npm install @react-navigation/native @react-navigation/bottom-tabs
npx expo install react-native-screens react-native-safe-area-context
# Copy code from examples/02-TabNavigation.js to App.js
```

### During Session

**For live coding:**
```bash
# Create fresh app
npx create-expo-app LiveDemo
cd LiveDemo
npx expo start --android

# Code in VS Code, see instant updates!
```

**For showing examples:**
```bash
# Switch to pre-made app
cd demo-apps/03-NotificationApp
npx expo start --android
# (Already has all the code)
```

---

## 🎬 Full Session Demo Script

### What I'd Recommend for Tomorrow

**Part 1: Live Code First App (30 min)**
```bash
# Start fresh
npx create-expo-app MyFirstApp
cd MyFirstApp
npx expo start --android

# Build the counter app step by step
# Students follow along
```

**Part 2: Show Pre-built Examples (30 min)**
```bash
# Show Notification App
cd ../demo-apps/03-NotificationApp
npx expo start --android
# Explain features, show code

# Show Tab Navigation
cd ../02-TabNavigation
npx expo start --android
# Explain navigation, show code
```

**Part 3: Live Code Props/State (30 min)**
```bash
# Modify MyFirstApp from Part 1
# Add props examples
# Show state management
```

---

## 📋 Pre-Session Checklist

**1 Hour Before:**

- [ ] Start emulator: `emulator -avd Medium_Phone_API_36.1`
- [ ] Test First App: `cd demo-apps/01-FirstApp && npx expo start -a`
- [ ] Verify it opens and works
- [ ] Stop it (Ctrl+C)
- [ ] Keep emulator running
- [ ] Open VS Code with examples folder

**During Session:**

- [ ] For live coding: `npx create-expo-app LiveDemo`
- [ ] For examples: `cd demo-apps/<example-name> && npx expo start -a`
- [ ] `-a` flag automatically opens in Android

---

## 🔄 Switching Between Apps

**To switch apps during demo:**

1. Stop current app: `Ctrl+C` in terminal
2. Navigate to new app: `cd ../other-app`
3. Start new app: `npx expo start -a`
4. Wait 10-20 seconds for it to load

**Pro Tip:** Use multiple terminals:
- Terminal 1: Live coding app
- Terminal 2: Pre-made examples
- Switch between terminals instead of stopping/starting

---

## 🐛 Troubleshooting

### App won't start
```bash
# Clear cache
npx expo start --clear --android
```

### Wrong app shows on emulator
```bash
# Close app on emulator
# Restart expo
npx expo start -a
```

### Metro bundler error
```bash
# Kill all metro processes
taskkill /F /IM node.exe
# Start again
npx expo start -a
```

### Emulator not connecting
```bash
# Check devices
adb devices

# Restart adb
adb kill-server
adb start-server
```

---

## 💡 Best Practices for Demo

1. **Test everything 30 minutes before**
2. **Keep emulator running** throughout session
3. **Use `npx expo start -a`** for auto-open
4. **Have backup**: Screenshots of working apps
5. **Pre-create 1-2 apps** to save time
6. **Use separate terminals** for faster switching

---

## ✅ What's Ready Right Now

You currently have:

- ✅ **01-FirstApp** - Ready to run!
  ```bash
  cd demo-apps/01-FirstApp
  npx expo start -a
  ```

- ⚙️ **Examples 2-5** - Code ready in `examples/` folder
  - Copy to new Expo apps as needed
  - Follow instructions above

---

## 🎯 Recommended Approach for Tomorrow

### Minimal Prep (10 minutes)

Just test the first app:
```bash
cd demo-apps/01-FirstApp
npx expo start -a
```

Use examples folder for reference during live coding.

### Optimal Prep (30 minutes)

Create Notification App too:
```bash
cd demo-apps
npx create-expo-app 03-NotificationApp
cd 03-NotificationApp
# Copy examples/03-NotificationApp.js content to App.js
npx expo start -a
# Verify it works
```

Now you have:
- First App for basic concepts
- Notification App for impressive demo

### Maximum Prep (1 hour)

Create all apps following the instructions above. But honestly, you don't need all 5 running. Pick 2-3 for demos, live code the rest.

---

## 📞 Quick Help

**App not showing?**
- Check emulator is running: `adb devices`
- Use `npx expo start --tunnel` if WiFi issues

**Want to show code + app side by side?**
- Position emulator window next to VS Code
- Edit code, watch emulator update!

**Need to restart everything?**
- Close emulator
- Kill terminal (Ctrl+C)
- Restart emulator
- Start app again

---

## ✨ You're Ready!

The first app is built and tested. You can:

1. ✅ **Run it right now** - Working example ready
2. 📚 **Use examples folder** - Reference for live coding
3. 🚀 **Create more as needed** - Follow guide above

**For tomorrow:** Test the first app one more time, and you're good to go!

```bash
# The golden command:
cd "C:\Users\Mahima Kaushik\Desktop\react-native-class\demo-apps\01-FirstApp"
npx expo start --android
```

Good luck with your session! 🎉

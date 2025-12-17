# Running React Native Apps in Android Emulator - Complete Guide

## 🎯 Overview

This guide will help you run all the React Native example apps in your Android emulator. Perfect for testing and demonstrating during your session!

---

## ✅ Prerequisites Check

You already have:
- ✅ Android SDK installed at: `C:\Users\Mahima Kaushik\AppData\Local\Android\Sdk`
- ✅ ADB (Android Debug Bridge) version 1.0.41
- ✅ Two emulators available:
  - Medium_Phone_API_36.1
  - Pixel_4

---

## 🚀 Quick Start - Running Apps

### Method 1: Using Expo (Easiest - Recommended)

Expo works seamlessly with Android emulator!

**Step 1: Start your Android emulator**
```bash
# If not already running, start an emulator
emulator -avd Medium_Phone_API_36.1
```

**Step 2: Create and run an Expo app**
```bash
# Navigate to your workspace
cd "C:\Users\Mahima Kaushik\Desktop\react-native-class"

# Create a new Expo app
npx create-expo-app DemoApp

# Navigate into it
cd DemoApp

# Start the app
npx expo start
```

**Step 3: Press 'a' in the terminal**
- When Expo starts, press `a` key
- This automatically opens the app in your running Android emulator
- That's it! Your app is now running.

**Step 4: See live changes**
- Edit `App.js`
- Save (Ctrl+S)
- See instant updates in the emulator!

---

### Method 2: Using React Native CLI (Advanced)

For apps that need native modules or you want full control:

**Step 1: Create React Native app**
```bash
npx react-native init MyApp
cd MyApp
```

**Step 2: Start Metro bundler**
```bash
npm start
```

**Step 3: In a NEW terminal, run on Android**
```bash
npm run android
# or
npx react-native run-android
```

---

## 📱 Managing Your Android Emulator

### Starting an Emulator

**Option 1: From Android Studio**
1. Open Android Studio
2. Click "Device Manager" (phone icon on right sidebar)
3. Click ▶️ play button next to your emulator
4. Wait for emulator to boot

**Option 2: From Command Line**
```bash
# List available emulators
emulator -list-avds

# Start specific emulator (runs in background)
emulator -avd Medium_Phone_API_36.1

# Or the Pixel 4
emulator -avd Pixel_4
```

**Check if emulator is running:**
```bash
adb devices
```

You should see:
```
List of devices attached
emulator-5554    device
```

### Stopping an Emulator

**Option 1: Close emulator window**
- Just close the emulator window

**Option 2: From command line**
```bash
adb -s emulator-5554 emu kill
```

### Troubleshooting Emulator

**Emulator is slow:**
```bash
# Start with more RAM and better graphics
emulator -avd Medium_Phone_API_36.1 -memory 4096 -gpu host
```

**Emulator won't start:**
```bash
# Kill any stuck processes
taskkill /F /IM qemu-system-x86_64.exe
taskkill /F /IM emulator.exe

# Try starting again
emulator -avd Medium_Phone_API_36.1
```

**Can't connect to emulator:**
```bash
# Restart ADB
adb kill-server
adb start-server
adb devices
```

---

## 🎨 Running the Example Apps

I've created runnable versions of all 5 examples. Here's how to test each one:

### Example 1: First App (Counter App)

```bash
# Navigate to the examples directory
cd "C:\Users\Mahima Kaushik\Desktop\react-native-class\demo-apps\01-FirstApp"

# Install dependencies (first time only)
npm install

# Start the app
npx expo start

# Press 'a' to open in Android emulator
```

**What you'll see:**
- Welcome screen with React Native logo
- Counter that increments/resets
- Demonstrates: Basic components, state, styling

---

### Example 2: Tab Navigation App

```bash
cd "C:\Users\Mahima Kaushik\Desktop\react-native-class\demo-apps\02-TabNavigation"

npm install
npx expo start
# Press 'a'
```

**What you'll see:**
- Three tabs: Home, Profile, Settings
- Navigate between tabs
- Icons that change when selected
- Demonstrates: React Navigation, multiple screens

---

### Example 3: Notification App

```bash
cd "C:\Users\Mahima Kaushik\Desktop\react-native-class\demo-apps\03-NotificationApp"

npm install
npx expo start
# Press 'a'
```

**What you'll see:**
- List of notifications
- Tap to mark as read
- Long press to delete
- Demonstrates: FlatList, state management, interactions

---

### Example 4: Props Example

```bash
cd "C:\Users\Mahima Kaushik\Desktop\react-native-class\demo-apps\04-PropsExample"

npm install
npx expo start
# Press 'a'
```

**What you'll see:**
- Multiple examples of props usage
- Interactive components
- Real-time prop updates
- Demonstrates: Props, callbacks, data flow

---

### Example 5: Redux Example

```bash
cd "C:\Users\Mahima Kaushik\Desktop\react-native-class\demo-apps\05-ReduxExample"

npm install
npx expo start
# Press 'a'
```

**What you'll see:**
- Notification app with Redux
- Add/delete/mark as read
- Centralized state management
- Demonstrates: Redux Toolkit, useSelector, useDispatch

---

## 🔧 Common Commands Reference

### Emulator Commands
```bash
# List emulators
emulator -list-avds

# Start emulator
emulator -avd Medium_Phone_API_36.1

# Start with options
emulator -avd Pixel_4 -memory 4096 -gpu host

# Check running devices
adb devices

# Kill emulator
adb -s emulator-5554 emu kill
```

### Expo Commands
```bash
# Create new app
npx create-expo-app AppName

# Start development server
npx expo start

# Start and open in Android
npx expo start --android

# Clear cache and start
npx expo start --clear

# Install dependencies
npm install

# Install Expo-compatible package
npx expo install package-name
```

### React Native CLI Commands
```bash
# Create new app
npx react-native init AppName

# Run on Android
npx react-native run-android

# Start Metro bundler
npm start

# Clear cache
npx react-native start --reset-cache
```

### ADB Commands
```bash
# List devices
adb devices

# Install APK
adb install app.apk

# Uninstall app
adb uninstall com.yourapp

# View logs
adb logcat

# Restart ADB server
adb kill-server
adb start-server

# Take screenshot
adb exec-out screencap -p > screenshot.png

# Screen recording
adb shell screenrecord /sdcard/demo.mp4
# Stop with Ctrl+C, then pull:
adb pull /sdcard/demo.mp4
```

---

## 🎬 Demo Workflow for Your Session

### Preparation (Before Session)

**1. Test all apps** (30 minutes before):
```bash
# Start emulator
emulator -avd Medium_Phone_API_36.1

# Test each app briefly
cd demo-apps/01-FirstApp && npx expo start
# Press 'a', verify it works, stop (Ctrl+C)

cd ../02-TabNavigation && npx expo start
# Press 'a', verify it works, stop

# Repeat for all apps
```

**2. Prepare demo app**:
```bash
cd "C:\Users\Mahima Kaushik\Desktop\react-native-class"
npx create-expo-app LiveDemo
cd LiveDemo
```

### During Session

**For Live Coding:**
```bash
# Have emulator running
# Have terminal split: one for code, one for Expo

# Terminal 1: Edit code in VS Code
# Terminal 2:
cd LiveDemo
npx expo start
# Press 'a' once

# Now code changes show instantly in emulator!
```

**For Showing Examples:**
```bash
# Navigate to example
cd demo-apps/03-NotificationApp

# Start it
npx expo start -a
# (-a flag automatically opens in Android)

# Show the app, explain code
# Stop when done (Ctrl+C)
```

---

## 📱 Emulator Tips & Tricks

### Keyboard Shortcuts (in emulator window)

- **Ctrl + M** - Open React Native Dev Menu
- **R** - Reload app
- **D** - Toggle Developer Menu
- **Ctrl + Mouse** - Pinch zoom gesture
- **F11** - Toggle fullscreen

### Taking Screenshots

**Method 1: Emulator toolbar**
- Click camera icon in emulator sidebar

**Method 2: Command line**
```bash
adb exec-out screencap -p > "screenshot-$(date +%Y%m%d-%H%M%S).png"
```

### Recording Screen

```bash
# Start recording (max 3 minutes)
adb shell screenrecord /sdcard/demo.mp4

# Do your demo in emulator

# Stop with Ctrl+C

# Pull video to computer
adb pull /sdcard/demo.mp4 ./session-demo.mp4
```

### Simulating Different Conditions

**Rotate screen:**
- Ctrl + Left/Right arrow

**Simulate location:**
```bash
adb emu geo fix -122.084 37.422
```

**Simulate battery level:**
```bash
adb shell dumpsys battery set level 20
```

---

## 🐛 Troubleshooting Guide

### Issue: Expo won't open in emulator

**Solution 1: Install Expo Go manually**
```bash
# Download Expo Go APK first, then:
adb install expo-go.apk
```

**Solution 2: Use development build**
```bash
npx expo start --dev-client
```

---

### Issue: "Metro bundler error"

**Solution:**
```bash
# Clear cache
npx expo start --clear

# If still failing
rm -rf node_modules
npm install
npx expo start --clear
```

---

### Issue: "Unable to connect to development server"

**Solution 1: Check ADB**
```bash
adb devices
# Should show: emulator-5554    device
```

**Solution 2: Reverse port**
```bash
adb reverse tcp:8081 tcp:8081
```

**Solution 3: Use tunnel**
```bash
npx expo start --tunnel
```

---

### Issue: App crashes on emulator

**Check logs:**
```bash
# React Native logs
npx react-native log-android

# Or full Android logs
adb logcat | grep ReactNative
```

---

### Issue: Emulator is very slow

**Solutions:**

1. **Enable Hardware Acceleration:**
   - Android Studio → Tools → AVD Manager
   - Edit emulator → Graphics: Hardware

2. **Increase RAM:**
   ```bash
   emulator -avd Medium_Phone_API_36.1 -memory 4096
   ```

3. **Use a lighter emulator:**
   - Create new AVD with lower API level
   - Use Pixel 4 instead of tablets

4. **Close other apps:**
   - Close Chrome, heavy applications
   - Emulator needs resources

---

### Issue: "Build failed" or gradle errors

**Solution:**
```bash
# Navigate to android folder (React Native CLI only)
cd android
./gradlew clean
cd ..

# Try again
npm run android
```

---

## 🎯 Quick Testing Checklist

Before your session, verify each app works:

- [ ] Emulator starts and shows home screen
- [ ] ADB shows device as connected
- [ ] Example 1: Counter increments/resets
- [ ] Example 2: Tabs switch correctly
- [ ] Example 3: Notifications tap/long-press work
- [ ] Example 4: Props examples display
- [ ] Example 5: Redux actions work
- [ ] Hot reload works (edit file, see changes)
- [ ] Can open React Native Dev Menu (Ctrl+M)

---

## 📊 Performance Optimization

### For Smoother Demo

**Before session:**
```bash
# Close unnecessary apps
# Ensure 8GB+ RAM available

# Start emulator with optimal settings
emulator -avd Medium_Phone_API_36.1 -memory 4096 -gpu host -cores 4
```

**During development:**
```bash
# Use Expo for faster reload
npx expo start

# Enable Fast Refresh (usually on by default)
```

---

## 🔄 Switching Between Apps Quickly

### Create a run script

Create `run-example.bat`:
```batch
@echo off
cd "C:\Users\Mahima Kaushik\Desktop\react-native-class\demo-apps\%1"
npx expo start --android
```

Usage:
```bash
run-example 01-FirstApp
run-example 02-TabNavigation
# etc.
```

---

## 📝 Session Day Checklist

### 1 Hour Before

- [ ] Start emulator: `emulator -avd Medium_Phone_API_36.1`
- [ ] Verify connection: `adb devices`
- [ ] Test one app to ensure everything works
- [ ] Have demo-apps folder open in VS Code
- [ ] Position emulator window for screen sharing
- [ ] Close unnecessary apps/notifications

### During Session

- [ ] Keep emulator window visible during screen share
- [ ] Use `npx expo start -a` for quick opening
- [ ] Have backup: screenshots of working apps
- [ ] Keep terminal visible for commands

### If Issues Occur

- [ ] Restart ADB: `adb kill-server && adb start-server`
- [ ] Restart emulator
- [ ] Use web version (Expo Snack) as backup
- [ ] Show code and screenshots if demo fails

---

## 🎓 Teaching Points About Emulator

When showing emulator to students:

**Explain:**
1. "This is a real Android device, just virtual"
2. "Same as testing on physical phone"
3. "Great for development - no phone needed"
4. "Can simulate different devices, OS versions"

**Show:**
- Dev menu (Ctrl+M)
- Hot reload in action
- How to debug
- Performance monitor

**Advantages:**
- ✅ No phone needed
- ✅ Easy screenshots/recording
- ✅ Test multiple devices
- ✅ Faster than real device sometimes

**Disadvantages:**
- ❌ Slower than physical device
- ❌ Can't test hardware features (camera, sensors)
- ❌ Different performance characteristics

---

## 🚀 Advanced: Multiple Emulators

Run multiple emulators simultaneously:

```bash
# Terminal 1
emulator -avd Medium_Phone_API_36.1

# Terminal 2
emulator -avd Pixel_4

# Check both running
adb devices
```

Deploy to specific device:
```bash
# Get device ID from adb devices
npx expo start

# Then manually select device in Expo
```

---

## 📚 Additional Resources

### Official Documentation
- [Android Studio Emulator](https://developer.android.com/studio/run/emulator)
- [Expo Android Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [React Native Android Setup](https://reactnative.dev/docs/environment-setup)

### Video Tutorials
- Search YouTube: "Android Emulator setup for React Native"
- Expo documentation has great video guides

---

## ✅ You're Ready!

You now have:
- ✅ Android emulator set up and running
- ✅ 5 demo apps ready to run
- ✅ Complete command reference
- ✅ Troubleshooting solutions
- ✅ Session workflow planned

**Test everything once more, and you're good to go!** 🚀

---

**Pro Tip:** Keep this guide open during your session for quick reference!

**Questions?** Test everything 30 minutes before the session starts.

**Good luck with your session tomorrow!** 💪

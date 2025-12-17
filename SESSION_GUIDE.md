# React Native - 2 Hour Comprehensive Session Guide

## Session Overview
**Duration:** 2 hours
**Format:** Interactive lecture with live coding demonstrations
**Target:** Developers familiar with JavaScript/React basics

---

## Session Timeline & Structure

### Part 1: Fundamentals (0:00 - 0:30) - 30 minutes

#### 1. What is React Native? (5 mins)
**Opening Hook:** "Who here has built a mobile app before? What was the biggest challenge?"

**Key Points:**
- Framework for building native mobile apps using JavaScript and React
- Created by Facebook (Meta) in 2015
- Write once, run on both iOS and Android
- Uses native components (not WebView like hybrid apps)
- Real native apps, not mobile websites

**Interactive:** Show comparison - Open Instagram app (built with React Native) vs a mobile website

**Analogy:** "Think of React Native as a translator - you speak JavaScript, it speaks Swift/Kotlin to the phone"

---

#### 1.1. How React Native Works (5 mins)
**The Bridge Architecture:**

React Native uses a unique "bridge" architecture that connects JavaScript code with native platform code.

**Three Main Threads:**

1. **JavaScript Thread**
   - Runs your React code
   - Handles business logic
   - Manages state and data

2. **Native Thread (UI Thread)**
   - Renders actual native components
   - Handles user interactions
   - Runs platform-specific code (Swift/Objective-C for iOS, Java/Kotlin for Android)

3. **Bridge**
   - Asynchronous communication layer
   - Serializes data between JS and Native
   - Batches updates for performance

**Visual Explanation:**
```
Your JavaScript Code
        ↓
   React Native
        ↓
   JavaScript VM (Hermes/JavaScriptCore)
        ↓
      Bridge (JSON messages)
        ↓
   Native Modules
        ↓
   Platform APIs (iOS/Android)
        ↓
   Native UI Components
```

**Step-by-Step Flow:**

1. **You write JSX:**
   ```jsx
   <View style={styles.container}>
     <Text>Hello!</Text>
   </View>
   ```

2. **React Native translates:**
   - `<View>` → iOS: `UIView` / Android: `ViewGroup`
   - `<Text>` → iOS: `UILabel` / Android: `TextView`

3. **Bridge sends instructions:**
   - JavaScript thread: "Create a View with these properties"
   - Bridge: Serializes the message
   - Native thread: Receives and creates actual native component

4. **User interacts:**
   - User taps button on native side
   - Event sent through bridge to JavaScript
   - JavaScript executes your `onPress` handler
   - Updates sent back to native to re-render

**Key Concepts:**

- **Declarative UI:** You describe what the UI should look like, React Native handles how
- **Virtual DOM:** React creates a virtual representation, calculates minimal changes
- **Batching:** Updates are batched for performance (not sent one-by-one)
- **Asynchronous:** Bridge is async, so heavy JS won't block UI

**New Architecture (2024+):**
React Native is moving to a new architecture:
- **JSI (JavaScript Interface):** Direct C++ layer, no bridge needed
- **Fabric:** New rendering system (faster, synchronous)
- **TurboModules:** Lazy-loaded native modules
- **Codegen:** Static type checking between JS and Native

**Real-World Impact:**
- Instagram uses RN: Smooth 60 FPS scrolling
- Discord chat: Real native performance
- Shopify: Complex animations work smoothly

**Interactive Demo:** Open React Native Debugger, show the bridge messages in action

**Common Question:** "Why not just use native code?"
- **RN Answer:** Write once, deploy iOS + Android + Web (with React Native Web)
- **Benefit:** Faster development, shared codebase, hot reloading
- **Trade-off:** Small performance overhead (usually negligible)

---

#### 2. What We Do With React Native (5 mins)
**Real-world examples:**
- Facebook, Instagram, Discord, Shopify, Uber Eats
- Cross-platform mobile apps
- Rapid prototyping
- Apps with frequent updates (OTA updates via CodePush)

**When to use:**
- Cross-platform development with single codebase
- Team already knows JavaScript/React
- Need fast development cycles
- Budget/time constraints

**When NOT to use:**
- Heavy 3D graphics/gaming (consider Unity)
- Platform-specific features dominate
- Maximum performance critical

---

#### 3. Requirements & Setup (8 mins)
**Prerequisites:**
- Node.js (LTS version)
- npm/npx (package managers)
- Code editor (VS Code recommended)
- For iOS: Mac with Xcode
- For Android: Android Studio

**Key Dependencies:**
```bash
node --version  # Should be v16+
npm --version   # Comes with Node
npx --version   # Comes with Node
```

**Development Approaches:**
1. **Expo (Recommended for beginners)**
   - Managed workflow
   - Quick setup
   - Limited native module access

2. **React Native CLI**
   - Full control
   - Access to all native modules
   - More complex setup

**Interactive Activity:** Quick poll - "Who has Node.js installed? Who has built a React app before?"

---

#### 4. Core Concepts of React Native (12 mins)

**A. Components (not HTML elements)**
```
HTML (React)          →    React Native
<div>                 →    <View>
<span>, <p>           →    <Text>
<img>                 →    <Image>
<input>               →    <TextInput>
<button>              →    <Button> / <Touchable*>
<scroll>              →    <ScrollView>
<ul>, <li>            →    <FlatList>
```

**B. Styling (JavaScript objects, not CSS)**
- No CSS files
- StyleSheet.create() for optimization
- Flexbox by default
- No pixels, use density-independent units

**C. Native Modules**
- Bridge between JS and native code
- Access camera, GPS, sensors, etc.

**D. Hot Reloading**
- See changes instantly
- Preserves state during development

**Interactive Demo:** Show side-by-side comparison of React vs React Native code

---

### Part 2: React vs React Native Deep Dive (0:30 - 0:45) - 15 minutes

#### 5. Key Differences

| Aspect | React (Web) | React Native |
|--------|-------------|--------------|
| **Platform** | Web browsers | iOS & Android |
| **Elements** | HTML tags | Native components |
| **Styling** | CSS files | StyleSheet objects |
| **Layout** | CSS Box Model | Flexbox (default) |
| **Navigation** | React Router | React Navigation |
| **Bundler** | Webpack/Vite | Metro |
| **Runtime** | Browser DOM | Native thread + JS thread |
| **Animation** | CSS/Web APIs | Animated API/Reanimated |

**Similarities:**
- Same React principles (components, props, state, hooks)
- Same lifecycle methods
- Same development patterns
- JSX syntax

**Code Comparison:**
```jsx
// React (Web)
function WebButton() {
  return (
    <div className="container">
      <button onClick={handlePress}>Click me</button>
    </div>
  );
}

// React Native
function NativeButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}
```

---

### Part 3: Hands-on Development (0:45 - 1:30) - 45 minutes

#### 6. Creating Your First App (10 mins)

**Live Coding - Follow Along:**

```bash
# Using Expo (easier)
npx create-expo-app@latest MyFirstApp
cd MyFirstApp
npx expo start

# Using React Native CLI (if needed)
npx react-native init MyFirstApp
cd MyFirstApp
npm run android  # or npm run ios
```

**Explain npm vs npx:**
- **npm:** Package manager, installs packages
- **npx:** Package runner, executes packages without installing globally
- Example: `npm install -g create-expo-app` vs `npx create-expo-app`

**First App Structure:**
```
MyFirstApp/
├── App.js              # Entry point
├── package.json        # Dependencies
├── app.json            # App configuration
├── assets/             # Images, fonts
└── node_modules/       # Installed packages
```

**Modify App.js together:**
```jsx
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My First React Native App!</Text>
      <Text style={styles.subtitle}>This is amazing! 🚀</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
});
```

---

#### 7. Building Tabs (10 mins)

**Install Dependencies:**
```bash
npm install @react-navigation/native @react-navigation/bottom-tabs
npx expo install react-native-screens react-native-safe-area-context
```

**Live Coding - Tab Navigation:**
```jsx
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenText}>Home Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenText}>Settings Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

**Interactive:** Students can add a third tab for "Profile"

---

#### 8. Simple Notification App (15 mins)

**Goal:** Build an app that displays notifications in a list

**Live Coding:**
```jsx
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function NotificationApp() {
  const [notifications, setNotifications] = useState([
    { id: '1', title: 'Welcome!', message: 'Thanks for using our app', read: false },
    { id: '2', title: 'New Update', message: 'Version 2.0 is available', read: false },
    { id: '3', title: 'Reminder', message: 'Complete your profile', read: true },
  ]);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const deleteNotification = (id) => {
    Alert.alert(
      'Delete Notification',
      'Are you sure?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          onPress: () =>
            setNotifications(notifications.filter((notif) => notif.id !== id)),
          style: 'destructive',
        },
      ]
    );
  };

  const renderNotification = ({ item }) => (
    <TouchableOpacity
      style={[styles.notifCard, item.read && styles.readCard]}
      onPress={() => markAsRead(item.id)}
      onLongPress={() => deleteNotification(item.id)}
    >
      <View style={styles.notifHeader}>
        <Text style={styles.notifTitle}>{item.title}</Text>
        {!item.read && <View style={styles.unreadDot} />}
      </View>
      <Text style={styles.notifMessage}>{item.message}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No notifications</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: '#fff',
  },
  notifCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  readCard: {
    opacity: 0.6,
    borderLeftColor: '#ccc',
  },
  notifHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  notifTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
  },
  notifMessage: {
    fontSize: 14,
    color: '#666',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#999',
  },
});
```

**Key Concepts Demonstrated:**
- useState for state management
- FlatList for efficient lists
- TouchableOpacity for interactions
- Alert API for native dialogs
- Conditional styling

---

#### 9. Props & Argument Passing (10 mins)

**Concept Explanation:**
Props = Properties passed from parent to child component

**Live Coding Example:**
```jsx
// Child Component
function NotificationCard({ title, message, onPress, isRead }) {
  return (
    <TouchableOpacity
      style={[styles.card, isRead && styles.readCard]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </TouchableOpacity>
  );
}

// Parent Component
function NotificationList() {
  const handlePress = (id) => {
    console.log('Pressed notification:', id);
  };

  return (
    <View>
      <NotificationCard
        title="Welcome"
        message="Thanks for joining"
        onPress={() => handlePress(1)}
        isRead={false}
      />
      <NotificationCard
        title="Update Available"
        message="New version released"
        onPress={() => handlePress(2)}
        isRead={true}
      />
    </View>
  );
}
```

**Advanced: Props Destructuring & Default Props**
```jsx
function UserCard({
  name = 'Guest',
  age,
  email,
  onProfileClick
}) {
  return (
    <View style={styles.card}>
      <Text>Name: {name}</Text>
      {age && <Text>Age: {age}</Text>}
      <Text>Email: {email}</Text>
      <TouchableOpacity onPress={onProfileClick}>
        <Text style={styles.link}>View Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
```

**Call by Value vs Call by Reference:**
```jsx
// Primitive (Call by Value) - number, string, boolean
const count = 5;
function increment(num) {
  num = num + 1;  // Doesn't affect original
  return num;
}
increment(count);  // count is still 5

// Objects/Arrays (Call by Reference)
const user = { name: 'John', age: 25 };
function updateAge(userObj) {
  userObj.age = 26;  // DOES affect original
}
updateAge(user);  // user.age is now 26

// Best Practice: Immutable Updates
const updatedUser = { ...user, age: 26 };  // Creates new object
```

**Interactive Exercise:** Students create a ProductCard component with props

---

### Part 4: Advanced Topics (1:30 - 1:50) - 20 minutes

#### 10. Redux, Navigation & Tab Switching (10 mins)

**State Management Evolution:**
```
Component State (useState)
    ↓
Context API (useContext)
    ↓
Redux (for large apps)
```

**When to use Redux:**
- Complex state shared across many components
- State updates from many places
- Need predictable state container
- Large team, need clear data flow

**Basic Redux Setup:**
```bash
npm install @reduxjs/toolkit react-redux
```

**Quick Redux Example:**
```jsx
// store/notificationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    items: [],
    unreadCount: 0,
  },
  reducers: {
    addNotification: (state, action) => {
      state.items.push(action.payload);
      state.unreadCount += 1;
    },
    markAsRead: (state, action) => {
      const notif = state.items.find(item => item.id === action.payload);
      if (notif && !notif.read) {
        notif.read = true;
        state.unreadCount -= 1;
      }
    },
  },
});

export const { addNotification, markAsRead } = notificationSlice.actions;
export default notificationSlice.reducer;

// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './notificationSlice';

export const store = configureStore({
  reducer: {
    notifications: notificationReducer,
  },
});

// App.js
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* Your app */}
      </NavigationContainer>
    </Provider>
  );
}

// Using in component
import { useSelector, useDispatch } from 'react-redux';
import { markAsRead } from './store/notificationSlice';

function NotificationScreen() {
  const notifications = useSelector(state => state.notifications.items);
  const dispatch = useDispatch();

  const handlePress = (id) => {
    dispatch(markAsRead(id));
  };

  return (/* UI */);
}
```

**Navigation Types:**
- Stack Navigation (screen stacking)
- Tab Navigation (bottom tabs)
- Drawer Navigation (side menu)

**Tab Switching Programmatically:**
```jsx
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <Button title="Go to Settings" onPress={goToSettings} />
  );
}
```

---

#### 11. npm vs npx & CLI Commands (5 mins)

**npm (Node Package Manager):**
```bash
npm install package-name       # Install locally
npm install -g package-name    # Install globally
npm uninstall package-name     # Remove package
npm update                     # Update packages
npm run script-name            # Run script from package.json
```

**npx (Node Package Execute):**
```bash
npx package-name              # Run without installing
npx create-expo-app MyApp     # Use latest version
npx react-native init MyApp   # Execute package directly
```

**Why npx?**
- No global installation needed
- Always uses latest version
- Saves disk space
- No version conflicts

**Common React Native CLI Commands:**
```bash
# Create new project
npx create-expo-app MyApp
npx react-native init MyApp

# Run app
npm start                      # Expo
npm run android               # Android
npm run ios                   # iOS

# Install dependencies
npm install                   # Install all
npm install package-name      # Install specific

# Useful commands
npx expo install package      # Expo-compatible install
npx react-native link         # Link native dependencies (old)
npm run build                 # Build for production
```

---

#### 12. Memory & Reference Concepts (5 mins)

**Call by Value (Primitives):**
```jsx
let a = 10;
let b = a;      // b gets a COPY of value
b = 20;         // a is still 10

// In function calls
function double(num) {
  num = num * 2;
  return num;
}
let x = 5;
double(x);      // x is still 5
```

**Call by Reference (Objects/Arrays):**
```jsx
let obj1 = { name: 'John' };
let obj2 = obj1;    // obj2 REFERENCES same object
obj2.name = 'Jane'; // obj1.name is now 'Jane'

// In function calls
function updateUser(user) {
  user.name = 'Updated';  // Modifies original
}
let person = { name: 'John' };
updateUser(person);  // person.name is now 'Updated'

// Arrays
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);   // arr1 is now [1, 2, 3, 4]
```

**React Native Best Practices:**
```jsx
// BAD - Mutating state
const updateState = () => {
  user.name = 'New Name';  // Don't mutate
  setUser(user);           // Won't trigger re-render
};

// GOOD - Immutable updates
const updateState = () => {
  setUser({ ...user, name: 'New Name' });  // New object
};

// Arrays
const addItem = () => {
  setItems([...items, newItem]);  // New array
};

const removeItem = (id) => {
  setItems(items.filter(item => item.id !== id));
};
```

---

### Part 5: Best Practices & Q&A (1:50 - 2:00) - 10 minutes

#### 13. Important Questions & Best Practices

**Common Pitfalls:**

1. **Mutating State Directly**
   ```jsx
   // ❌ Wrong
   items.push(newItem);
   setItems(items);

   // ✅ Correct
   setItems([...items, newItem]);
   ```

2. **Not Using Keys in Lists**
   ```jsx
   // ❌ Wrong
   <FlatList data={items} renderItem={renderItem} />

   // ✅ Correct
   <FlatList
     data={items}
     renderItem={renderItem}
     keyExtractor={(item) => item.id}
   />
   ```

3. **Styling Everything Inline**
   ```jsx
   // ❌ Wrong (creates new style object on every render)
   <View style={{ flex: 1, padding: 20 }} />

   // ✅ Correct
   <View style={styles.container} />
   ```

4. **Not Handling Async Properly**
   ```jsx
   // ❌ Wrong
   const data = fetch(url);  // Returns promise

   // ✅ Correct
   const response = await fetch(url);
   const data = await response.json();
   ```

**Performance Tips:**
- Use FlatList for long lists (not map)
- Memoize expensive components (React.memo)
- Use useCallback for function props
- Optimize images (resize, cache)
- Avoid anonymous functions in render

**Security:**
- Never store secrets in code
- Use secure storage for tokens
- Validate user input
- Use HTTPS only

---

#### 14. Swift vs JavaScript (Bonus)

**Quick Comparison:**

| Feature | JavaScript | Swift |
|---------|-----------|-------|
| **Type System** | Dynamic, loosely typed | Static, strongly typed |
| **Syntax** | C-style | Modern, clean |
| **Platform** | Cross-platform | Apple only |
| **Performance** | Interpreted (JIT) | Compiled (very fast) |
| **Learning Curve** | Easier | Steeper |

**Code Comparison:**
```javascript
// JavaScript
const greeting = "Hello";
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);

function greet(name) {
  return `Hello, ${name}!`;
}
```

```swift
// Swift
let greeting = "Hello"
let numbers = [1, 2, 3, 4, 5]
let doubled = numbers.map { $0 * 2 }

func greet(name: String) -> String {
  return "Hello, \(name)!"
}
```

**When to learn Swift:**
- iOS-specific features
- Maximum performance
- Deep iOS integration
- Apple ecosystem focus

---

## Interactive Elements Throughout Session

### Engagement Strategies:

1. **Quick Polls (use hand raises or chat):**
   - "Who has React experience?"
   - "iOS or Android user?"
   - "Biggest challenge with mobile dev?"

2. **Live Coding Challenges:**
   - "Add a third tab while I take questions"
   - "Change notification colors"
   - "Add a like button to notifications"

3. **Pair Programming:**
   - Share screen, ask students to guide
   - "What component should we use here?"
   - "How do we pass this data?"

4. **Q&A Breaks:**
   - After each major section (15-20 mins)
   - "Questions before we move on?"

5. **Real-world Scenarios:**
   - "How would you build a chat app?"
   - "What about offline support?"

---

## Resources to Share

**Official Documentation:**
- https://reactnative.dev
- https://docs.expo.dev
- https://reactnavigation.org

**Learning Resources:**
- React Native docs (best resource)
- Expo docs (for Expo users)
- YouTube: William Candillon, Catalin Miron
- GitHub: Browse popular RN projects

**Development Tools:**
- React Native Debugger
- Expo Go app (for testing)
- React DevTools
- Flipper (debugging)

---

## Pre-Session Checklist

**Before the session:**
- [ ] Test all code examples
- [ ] Prepare demo app
- [ ] Set up screen sharing
- [ ] Have Expo Go app ready
- [ ] Test internet connection
- [ ] Prepare backup slides (if live coding fails)
- [ ] Share prerequisite installation guide

**Environment Setup:**
- [ ] Node.js installed
- [ ] Expo CLI ready
- [ ] Code editor open
- [ ] Terminal ready
- [ ] Phone with Expo Go (for demos)

---

## Session Flow Summary

**0:00 - 0:30:** Theory (What, Why, Requirements, Core Concepts)
**0:30 - 0:45:** Comparisons (React vs RN)
**0:45 - 1:30:** Hands-on (First app, Tabs, Notifications, Props)
**1:30 - 1:50:** Advanced (Redux, Navigation, npm/npx, Memory)
**1:50 - 2:00:** Best Practices & Q&A

---

## Tips for Delivery

1. **Start Strong:** Hook them with "You'll build 3 apps in 2 hours"
2. **Show, Don't Just Tell:** Live code everything
3. **Manage Time:** Use timer, stick to schedule
4. **Handle Questions:** Park deep questions for end
5. **Energy:** Keep pace upbeat, show enthusiasm
6. **Failures:** If code breaks, debug together (learning opportunity)
7. **Check Understanding:** Ask "Does this make sense?" regularly

**Remember:** Students learn by doing. Maximize hands-on time!

---

## Post-Session Follow-up

**Share with students:**
- This guide
- All code examples
- Resources list
- Recording (if available)
- Contact for questions

**Feedback:**
- Quick survey
- What to cover deeper next time?
- Pace appropriate?

Good luck with your session! 🚀

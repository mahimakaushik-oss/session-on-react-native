# React Native Quick Reference Sheet

## Essential Commands

### Project Creation
```bash
# Using Expo (Recommended for beginners)
npx create-expo-app MyApp
cd MyApp
npx expo start

# Using React Native CLI
npx react-native init MyApp
cd MyApp
npm run android  # or npm run ios
```

### npm vs npx
- **npm**: Package manager (install, uninstall, update)
- **npx**: Package executor (run without installing)

```bash
npm install package-name    # Install package
npx create-expo-app        # Execute without installing
npm run start              # Run script from package.json
```

---

## Core Components

| Web (React) | React Native | Purpose |
|-------------|--------------|---------|
| `<div>` | `<View>` | Container |
| `<span>`, `<p>` | `<Text>` | Text display |
| `<img>` | `<Image>` | Images |
| `<input>` | `<TextInput>` | Text input |
| `<button>` | `<Button>` / `<TouchableOpacity>` | Buttons |
| `<ul>`, `<ol>` | `<FlatList>` | Lists |
| `<scroll>` | `<ScrollView>` | Scrollable area |

---

## Basic Component Structure

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MyComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MyComponent;
```

---

## State Management

### useState Hook
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="+" onPress={() => setCount(count + 1)} />
    </View>
  );
}
```

### Immutable Updates
```jsx
// Primitives (simple values)
setCount(count + 1);
setName('New Name');

// Objects - use spread operator
setUser({ ...user, name: 'New Name' });

// Arrays - create new array
setItems([...items, newItem]);              // Add
setItems(items.filter(item => item.id !== id)); // Remove
setItems(items.map(item =>
  item.id === id ? { ...item, done: true } : item
)); // Update
```

---

## Props (Passing Data)

### Parent to Child
```jsx
// Parent Component
function Parent() {
  return <Child name="John" age={25} />;
}

// Child Component - Receiving Props
function Child({ name, age }) {
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
}
```

### Child to Parent (Callbacks)
```jsx
// Parent Component
function Parent() {
  const handlePress = (data) => {
    console.log('Received:', data);
  };

  return <Child onPress={handlePress} />;
}

// Child Component
function Child({ onPress }) {
  return (
    <Button
      title="Click"
      onPress={() => onPress('Hello!')}
    />
  );
}
```

---

## Styling

### StyleSheet.create
```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});
```

### Flexbox (Default Layout)
```jsx
{
  // Direction
  flexDirection: 'row',      // or 'column' (default)

  // Main axis
  justifyContent: 'center',  // flex-start, flex-end, space-between, space-around

  // Cross axis
  alignItems: 'center',      // flex-start, flex-end, stretch

  // Sizing
  flex: 1,                   // Take available space

  // Spacing
  padding: 20,
  margin: 10,
  paddingHorizontal: 15,
  paddingVertical: 10,
}
```

### Conditional Styling
```jsx
<View style={[
  styles.box,
  isActive && styles.activeBox,
  { backgroundColor: color }
]} />
```

---

## Lists (FlatList)

### Basic Usage
```jsx
import { FlatList } from 'react-native';

function MyList() {
  const data = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}
```

### With Empty State
```jsx
<FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  ListEmptyComponent={
    <Text>No items found</Text>
  }
/>
```

---

## Navigation

### Installation
```bash
npm install @react-navigation/native @react-navigation/bottom-tabs
npx expo install react-native-screens react-native-safe-area-context
```

### Basic Setup
```jsx
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

### Navigate Between Screens
```jsx
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <Button
      title="Go to Profile"
      onPress={() => navigation.navigate('Profile')}
    />
  );
}
```

---

## User Interactions

### Touchable Components
```jsx
import { TouchableOpacity, TouchableHighlight } from 'react-native';

<TouchableOpacity onPress={() => console.log('Pressed!')}>
  <Text>Click Me</Text>
</TouchableOpacity>

<TouchableHighlight
  onPress={handlePress}
  onLongPress={handleLongPress}
  underlayColor="#ddd"
>
  <Text>Press & Hold</Text>
</TouchableHighlight>
```

### Text Input
```jsx
import { TextInput } from 'react-native';

function MyForm() {
  const [text, setText] = useState('');

  return (
    <TextInput
      style={styles.input}
      placeholder="Enter text"
      value={text}
      onChangeText={setText}
      secureTextEntry={false}  // true for passwords
      keyboardType="default"   // email-address, numeric, etc.
    />
  );
}
```

---

## Alerts & Dialogs

```jsx
import { Alert } from 'react-native';

// Simple alert
Alert.alert('Title', 'Message');

// With buttons
Alert.alert(
  'Delete Item',
  'Are you sure?',
  [
    { text: 'Cancel', style: 'cancel' },
    { text: 'Delete', onPress: () => deleteItem(), style: 'destructive' }
  ]
);
```

---

## Common Hooks

### useState
```jsx
const [state, setState] = useState(initialValue);
```

### useEffect
```jsx
import { useEffect } from 'react';

useEffect(() => {
  // Runs on mount and when dependencies change
  fetchData();

  // Cleanup function (optional)
  return () => {
    cleanup();
  };
}, [dependency]); // Empty array [] = run once on mount
```

### useContext
```jsx
import { useContext } from 'react';

const value = useContext(MyContext);
```

---

## Redux Toolkit (State Management)

### Installation
```bash
npm install @reduxjs/toolkit react-redux
```

### Slice Creation
```jsx
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

### Store Setup
```jsx
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

### Using in Component
```jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>{count}</Text>
      <Button title="+" onPress={() => dispatch(increment())} />
      <Button title="-" onPress={() => dispatch(decrement())} />
    </View>
  );
}
```

---

## Call by Value vs Reference

### Primitives (Value)
```jsx
// Numbers, Strings, Booleans
let a = 5;
let b = a;  // b gets COPY
b = 10;     // a is still 5
```

### Objects & Arrays (Reference)
```jsx
// Objects
let obj1 = { name: 'John' };
let obj2 = obj1;     // obj2 REFERENCES obj1
obj2.name = 'Jane';  // obj1.name also changes!

// Arrays
let arr1 = [1, 2, 3];
let arr2 = arr1;     // arr2 REFERENCES arr1
arr2.push(4);        // arr1 is now [1, 2, 3, 4]

// Solution: Create copies
let obj3 = { ...obj1 };      // Spread operator
let arr3 = [...arr1];        // Spread operator
let obj4 = JSON.parse(JSON.stringify(obj1));  // Deep copy
```

---

## Best Practices

### 1. Component Organization
```jsx
// Import statements
import React, { useState } from 'react';
import { View, Text } from 'react-native';

// Component
function MyComponent({ prop1, prop2 }) {
  // Hooks
  const [state, setState] = useState(0);

  // Functions
  const handlePress = () => {
    // ...
  };

  // Render
  return (
    <View>
      <Text>Content</Text>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  // ...
});

// Export
export default MyComponent;
```

### 2. Performance
- Use `FlatList` for long lists (not `.map()`)
- Memoize with `React.memo()` for expensive components
- Use `useCallback` for function props
- Optimize images (resize, compress)

### 3. Common Mistakes to Avoid
```jsx
// ❌ Wrong - Mutating state
items.push(newItem);
setItems(items);

// ✅ Correct - Create new array
setItems([...items, newItem]);

// ❌ Wrong - Missing key
data.map(item => <Item item={item} />)

// ✅ Correct - Always provide key
data.map(item => <Item key={item.id} item={item} />)

// ❌ Wrong - Inline styling (creates new object every render)
<View style={{ flex: 1 }} />

// ✅ Correct - Use StyleSheet
<View style={styles.container} />
```

---

## Debugging

### Console Logging
```jsx
console.log('Debug:', variable);
console.warn('Warning message');
console.error('Error message');
```

### React DevTools
- Install React Native Debugger
- Shake device → "Debug"
- Chrome DevTools opens

### Common Issues
1. **"Element type is invalid"** → Check imports
2. **"Objects are not valid as a React child"** → Don't render objects directly
3. **"Cannot read property 'x' of undefined"** → Use optional chaining `?.`
4. **White screen** → Check for JavaScript errors in console

---

## Useful Resources

### Official Documentation
- React Native: https://reactnative.dev
- Expo: https://docs.expo.dev
- React Navigation: https://reactnavigation.org
- Redux Toolkit: https://redux-toolkit.js.org

### Icons & UI
- Expo Icons: https://icons.expo.fyi
- React Native Elements: https://reactnativeelements.com
- NativeBase: https://nativebase.io

### Learning
- React Native docs (best resource)
- YouTube: William Candillon, Catalin Miron
- GitHub: Explore popular RN projects

---

## Keyboard Shortcuts (VS Code)

- `Ctrl/Cmd + Space`: Auto-complete
- `Ctrl/Cmd + Click`: Go to definition
- `Ctrl/Cmd + D`: Select next occurrence
- `Shift + Alt + F`: Format document
- `Ctrl/Cmd + /`: Toggle comment

---

## Quick Troubleshooting

### Metro Bundler Issues
```bash
npx expo start --clear    # Clear cache
npm start -- --reset-cache
```

### Dependencies Issues
```bash
rm -rf node_modules
npm install
```

### Build Issues
```bash
cd android && ./gradlew clean    # Android
cd ios && pod install            # iOS
```

---

**Remember:** Practice is key! Build small projects to reinforce these concepts.

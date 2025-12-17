// Example 1: Your First React Native App
// This demonstrates basic components and styling

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to React Native!</Text>
      <Text style={styles.subtitle}>Your first mobile app 🚀</Text>

      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Counter: {count}</Text>
        <View style={styles.buttonRow}>
          <Button title="Increment" onPress={() => setCount(count + 1)} />
          <View style={styles.spacer} />
          <Button title="Reset" onPress={() => setCount(0)} color="red" />
        </View>
      </View>

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
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  counterContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: '100%',
  },
  counterText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '600',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  spacer: {
    width: 10,
  },
});

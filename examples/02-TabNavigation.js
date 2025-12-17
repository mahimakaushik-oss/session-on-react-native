// Example 2: Tab Navigation
// Demonstrates React Navigation with Bottom Tabs

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

// Home Screen Component
function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenTitle}>Home Screen</Text>
      <Text style={styles.screenText}>Welcome to the Home page!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

// Profile Screen Component
function ProfileScreen() {
  return (
    <View style={[styles.screen, { backgroundColor: '#e8f5e9' }]}>
      <Text style={styles.screenTitle}>Profile Screen</Text>
      <Text style={styles.screenText}>This is your profile page</Text>

      <View style={styles.profileCard}>
        <Text style={styles.profileLabel}>Name:</Text>
        <Text style={styles.profileValue}>John Doe</Text>

        <Text style={styles.profileLabel}>Email:</Text>
        <Text style={styles.profileValue}>john@example.com</Text>

        <Text style={styles.profileLabel}>Role:</Text>
        <Text style={styles.profileValue}>Developer</Text>
      </View>
    </View>
  );
}

// Settings Screen Component
function SettingsScreen() {
  const settingsOptions = [
    { id: 1, name: 'Notifications', value: 'On' },
    { id: 2, name: 'Dark Mode', value: 'Off' },
    { id: 3, name: 'Language', value: 'English' },
  ];

  return (
    <View style={[styles.screen, { backgroundColor: '#fff3e0' }]}>
      <Text style={styles.screenTitle}>Settings Screen</Text>

      {settingsOptions.map((option) => (
        <View key={option.id} style={styles.settingItem}>
          <Text style={styles.settingName}>{option.name}</Text>
          <Text style={styles.settingValue}>{option.value}</Text>
        </View>
      ))}
    </View>
  );
}

// Main App with Tab Navigator
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingBottom: 5,
            paddingTop: 5,
            height: 60,
          },
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarBadge: 3, // Shows a badge with number
          }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  screenText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  profileCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  },
  profileValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    width: '100%',
  },
  settingName: {
    fontSize: 16,
    color: '#333',
  },
  settingValue: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
});

// Installation Instructions:
// npm install @react-navigation/native @react-navigation/bottom-tabs
// npx expo install react-native-screens react-native-safe-area-context

// Key Concepts Demonstrated:
// 1. React Navigation setup with NavigationContainer
// 2. Bottom Tab Navigator
// 3. Multiple screen components
// 4. Dynamic tab icons with Ionicons
// 5. Tab customization (colors, badges, headers)
// 6. Programmatic navigation using navigation.navigate()
// 7. Screen-specific styling

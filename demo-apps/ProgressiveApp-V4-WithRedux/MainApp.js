// VERSION 4: Main App with Redux State Management
// Learning: useSelector, useDispatch, connecting Redux to components

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import {
  addNotification,
  markAsRead,
  markAllAsRead,
  deleteNotification,
  clearAll,
  selectAllNotifications,
  selectUnreadCount,
} from './store/notificationSlice';
import { selectUserProfile, updateProfile } from './store/userSlice';

const Tab = createBottomTabNavigator();

// HOME SCREEN - Counter from V1
function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={styles.logo}
        />
        <Text style={styles.title}>Home Screen</Text>
        <Text style={styles.subtitle}>Counter App 🚀</Text>

        <View style={styles.counterBox}>
          <Text style={styles.counterLabel}>Counter</Text>
          <Text style={styles.counterValue}>{count}</Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.incrementButton]}
              onPress={() => setCount(count + 1)}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.decrementButton]}
              onPress={() => setCount(count - 1)}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.resetButton]}
              onPress={() => setCount(0)}>
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.reduxInfo}>
          <Text style={styles.reduxInfoText}>
            💡 Counter uses local state (useState)
          </Text>
          <Text style={styles.reduxInfoText}>
            Check Notifications tab for Redux example
          </Text>
        </View>
      </View>
    </View>
  );
}

// NOTIFICATIONS SCREEN - Uses Redux for state management
function NotificationsScreen() {
  const dispatch = useDispatch();

  // Read from Redux store using useSelector
  const notifications = useSelector(selectAllNotifications);
  const unreadCount = useSelector(selectUnreadCount);

  // Local state for new notification input
  const [newTitle, setNewTitle] = useState('');
  const [newMessage, setNewMessage] = useState('');

  // Add new notification via Redux action
  const handleAddNotification = () => {
    if (newTitle.trim()) {
      const newNotif = {
        id: Date.now().toString(),
        title: newTitle,
        message: newMessage || 'Added via Redux',
        read: false,
        time: 'Just now',
      };

      dispatch(addNotification(newNotif));
      setNewTitle('');
      setNewMessage('');
    }
  };

  const handleMarkAsRead = (id) => {
    dispatch(markAsRead(id));
  };

  const handleDelete = (id) => {
    Alert.alert('Delete Notification', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        onPress: () => dispatch(deleteNotification(id)),
        style: 'destructive',
      },
    ]);
  };

  const handleMarkAllAsRead = () => {
    dispatch(markAllAsRead());
  };

  const handleClearAll = () => {
    Alert.alert('Clear All', 'Delete all notifications?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Clear All',
        onPress: () => dispatch(clearAll()),
        style: 'destructive',
      },
    ]);
  };

  const renderNotification = ({ item }) => (
    <TouchableOpacity
      style={[styles.notifCard, item.read && styles.readCard]}
      onPress={() => handleMarkAsRead(item.id)}
      onLongPress={() => handleDelete(item.id)}>
      <View style={styles.notifHeader}>
        <Text style={styles.notifTitle}>{item.title}</Text>
        {!item.read && <View style={styles.unreadDot} />}
      </View>
      <Text style={styles.notifMessage}>{item.message}</Text>
      <Text style={styles.notifTime}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.notifHeader2}>
        <View>
          <Text style={styles.notifHeaderTitle}>Redux Notifications</Text>
          <Text style={styles.notifHeaderSubtitle}>
            {unreadCount} unread | Total: {notifications.length}
          </Text>
        </View>
        {unreadCount > 0 && (
          <TouchableOpacity onPress={handleMarkAllAsRead} style={styles.markAllBtn}>
            <Text style={styles.markAllText}>Mark all read</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Add Notification */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Notification title"
          value={newTitle}
          onChangeText={setNewTitle}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddNotification}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Action Buttons */}
      {notifications.length > 0 && (
        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.actionButton, styles.dangerButton]}
            onPress={handleClearAll}>
            <Text style={styles.actionButtonText}>Clear All</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Notifications List */}
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No notifications</Text>
            <Text style={styles.emptySubtext}>Add one using the form above!</Text>
          </View>
        }
      />

      {/* Redux State Info */}
      <View style={styles.stateViewer}>
        <Text style={styles.stateTitle}>🔴 Redux State</Text>
        <Text style={styles.stateText}>
          Total: {notifications.length} | Unread: {unreadCount}
        </Text>
      </View>
    </View>
  );
}

// PROFILE SCREEN - Uses Redux for user profile
function ProfileScreen() {
  const dispatch = useDispatch();
  const userProfile = useSelector(selectUserProfile);

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(userProfile.name);
  const [email, setEmail] = useState(userProfile.email);

  const handleSave = () => {
    dispatch(updateProfile({ name, email }));
    setEditing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.profileAvatar}>
          <Text style={styles.avatarText}>{userProfile.name.substring(0, 2).toUpperCase()}</Text>
        </View>

        {editing ? (
          <View style={styles.editForm}>
            <TextInput
              style={styles.editInput}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.editInput}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <View style={styles.editButtons}>
              <TouchableOpacity
                style={[styles.button, styles.resetButton]}
                onPress={() => {
                  setEditing(false);
                  setName(userProfile.name);
                  setEmail(userProfile.email);
                }}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.incrementButton]}
                onPress={handleSave}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <>
            <Text style={styles.title}>{userProfile.name}</Text>
            <Text style={styles.subtitle}>React Native Developer</Text>

            <View style={styles.infoCard}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Email:</Text>
                <Text style={styles.infoValue}>{userProfile.email}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Location:</Text>
                <Text style={styles.infoValue}>San Francisco, CA</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Joined:</Text>
                <Text style={styles.infoValue}>{userProfile.joinedDate}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={[styles.button, styles.incrementButton, { marginTop: 20 }]}
              onPress={() => setEditing(true)}>
              <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
          </>
        )}

        <View style={styles.reduxInfo}>
          <Text style={styles.reduxInfoText}>🔴 Profile uses Redux store</Text>
          <Text style={styles.reduxInfoText}>Changes persist across tabs!</Text>
        </View>
      </View>
    </View>
  );
}

// MAIN APP with Tab Navigator
export default function MainApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  counterBox: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 30,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  counterLabel: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  counterValue: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  incrementButton: {
    backgroundColor: '#34C759',
  },
  decrementButton: {
    backgroundColor: '#FF9500',
  },
  resetButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  profileAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  // Notification styles
  notifHeader2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  notifHeaderTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  notifHeaderSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  markAllBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#007AFF',
    borderRadius: 6,
  },
  markAllText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#34C759',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginLeft: 10,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  actions: {
    padding: 10,
  },
  actionButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  dangerButton: {
    backgroundColor: '#FF3B30',
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  listContent: {
    padding: 10,
  },
  notifCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  readCard: {
    opacity: 0.6,
    borderLeftColor: '#ccc',
  },
  notifHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  notifTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
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
    marginBottom: 8,
  },
  notifTime: {
    fontSize: 12,
    color: '#999',
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    fontWeight: '600',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#bbb',
    marginTop: 5,
  },
  stateViewer: {
    backgroundColor: '#2c3e50',
    padding: 15,
  },
  stateTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  stateText: {
    color: '#ecf0f1',
    fontSize: 12,
  },
  reduxInfo: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff3cd',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
  },
  reduxInfoText: {
    fontSize: 14,
    color: '#856404',
    marginBottom: 5,
  },
  editForm: {
    width: '100%',
    marginTop: 20,
  },
  editInput: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  editButtons: {
    flexDirection: 'row',
    gap: 10,
  },
});

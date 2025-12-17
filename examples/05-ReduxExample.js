// Example 5: Redux State Management
// Complete example showing Redux Toolkit with React Native

// ====================================
// FILE: store/notificationSlice.js
// ====================================

import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    items: [
      {
        id: '1',
        title: 'Welcome!',
        message: 'Thanks for using Redux',
        read: false,
      },
      {
        id: '2',
        title: 'New Feature',
        message: 'Check out Redux Toolkit',
        read: false,
      },
    ],
    unreadCount: 2,
    loading: false,
  },
  reducers: {
    // Add new notification
    addNotification: (state, action) => {
      state.items.unshift(action.payload);
      state.unreadCount += 1;
    },

    // Mark single notification as read
    markAsRead: (state, action) => {
      const notification = state.items.find(
        (item) => item.id === action.payload
      );
      if (notification && !notification.read) {
        notification.read = true;
        state.unreadCount -= 1;
      }
    },

    // Mark all as read
    markAllAsRead: (state) => {
      state.items.forEach((item) => {
        item.read = true;
      });
      state.unreadCount = 0;
    },

    // Delete notification
    deleteNotification: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        if (!state.items[index].read) {
          state.unreadCount -= 1;
        }
        state.items.splice(index, 1);
      }
    },

    // Clear all notifications
    clearAll: (state) => {
      state.items = [];
      state.unreadCount = 0;
    },

    // Set loading state
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Export actions
export const {
  addNotification,
  markAsRead,
  markAllAsRead,
  deleteNotification,
  clearAll,
  setLoading,
} = notificationSlice.actions;

// Export reducer
export default notificationSlice.reducer;

// Selectors (for reading state)
export const selectAllNotifications = (state) => state.notifications.items;
export const selectUnreadCount = (state) => state.notifications.unreadCount;
export const selectUnreadNotifications = (state) =>
  state.notifications.items.filter((item) => !item.read);
export const selectIsLoading = (state) => state.notifications.loading;

// ====================================
// FILE: store/userSlice.js
// ====================================

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: null,
    },
    preferences: {
      theme: 'light',
      notifications: true,
      language: 'en',
    },
  },
  reducers: {
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    updatePreferences: (state, action) => {
      state.preferences = { ...state.preferences, ...action.payload };
    },
    resetUser: (state) => {
      state.profile = {
        name: 'Guest',
        email: '',
        avatar: null,
      };
    },
  },
});

export const { updateProfile, updatePreferences, resetUser } =
  userSlice.actions;
export default userSlice.reducer;

// ====================================
// FILE: store/index.js
// ====================================

import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './notificationSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    notifications: notificationReducer,
    user: userReducer,
  },
  // Optional: Add middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable if using non-serializable data
    }),
});

// ====================================
// FILE: App.js (Root)
// ====================================

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import MainApp from './MainApp';

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

// ====================================
// FILE: MainApp.js
// ====================================

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
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
import { updateProfile } from './store/userSlice';

export default function MainApp() {
  const dispatch = useDispatch();

  // Read from Redux store using useSelector
  const notifications = useSelector(selectAllNotifications);
  const unreadCount = useSelector(selectUnreadCount);
  const userName = useSelector((state) => state.user.profile.name);

  // Local state for input
  const [newNotificationTitle, setNewNotificationTitle] = useState('');

  // Add new notification
  const handleAddNotification = () => {
    if (newNotificationTitle.trim()) {
      const newNotif = {
        id: Date.now().toString(),
        title: newNotificationTitle,
        message: 'Added via Redux action',
        read: false,
      };

      // Dispatch action to Redux store
      dispatch(addNotification(newNotif));
      setNewNotificationTitle('');
    }
  };

  // Mark notification as read
  const handleMarkAsRead = (id) => {
    dispatch(markAsRead(id));
  };

  // Delete notification
  const handleDelete = (id) => {
    Alert.alert('Delete', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        onPress: () => dispatch(deleteNotification(id)),
        style: 'destructive',
      },
    ]);
  };

  // Mark all as read
  const handleMarkAllAsRead = () => {
    dispatch(markAllAsRead());
  };

  // Clear all
  const handleClearAll = () => {
    dispatch(clearAll());
  };

  // Render notification item
  const renderNotification = ({ item }) => (
    <TouchableOpacity
      style={[styles.notifCard, item.read && styles.readCard]}
      onPress={() => handleMarkAsRead(item.id)}
      onLongPress={() => handleDelete(item.id)}
    >
      <View style={styles.notifContent}>
        <Text style={styles.notifTitle}>{item.title}</Text>
        <Text style={styles.notifMessage}>{item.message}</Text>
        {!item.read && <View style={styles.unreadDot} />}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Redux Notifications</Text>
        <Text style={styles.headerSubtitle}>
          Hello, {userName} - {unreadCount} unread
        </Text>
      </View>

      {/* Add Notification Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New notification title"
          value={newNotificationTitle}
          onChangeText={setNewNotificationTitle}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddNotification}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleMarkAllAsRead}
        >
          <Text style={styles.actionButtonText}>Mark All Read</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.dangerButton]}
          onPress={handleClearAll}
        >
          <Text style={styles.actionButtonText}>Clear All</Text>
        </TouchableOpacity>
      </View>

      {/* Notifications List */}
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No notifications</Text>
        }
      />

      {/* Redux State Viewer (for learning) */}
      <View style={styles.stateViewer}>
        <Text style={styles.stateTitle}>Redux State:</Text>
        <Text style={styles.stateText}>
          Total: {notifications.length} | Unread: {unreadCount}
        </Text>
      </View>
    </SafeAreaView>
  );
}

// ====================================
// STYLES
// ====================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
    marginTop: 5,
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
    flexDirection: 'row',
    padding: 10,
    gap: 10,
  },
  actionButton: {
    flex: 1,
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
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  readCard: {
    opacity: 0.5,
    borderLeftColor: '#ccc',
  },
  notifContent: {
    position: 'relative',
  },
  notifTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  notifMessage: {
    fontSize: 14,
    color: '#666',
  },
  unreadDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    marginTop: 50,
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
    fontFamily: 'monospace',
  },
});

// ====================================
// KEY CONCEPTS DEMONSTRATED
// ====================================

/*
1. Redux Toolkit Setup:
   - configureStore() for store creation
   - createSlice() for reducers and actions
   - Provider component to wrap app

2. State Management:
   - Centralized state in Redux store
   - Multiple slices for different features
   - Immutable updates with Immer (built into Redux Toolkit)

3. Reading State:
   - useSelector hook to read from store
   - Selector functions for derived state
   - Multiple selectors in one component

4. Updating State:
   - useDispatch hook to dispatch actions
   - Action creators auto-generated by createSlice
   - Payload for passing data to reducers

5. Best Practices:
   - Slice pattern for feature organization
   - Selector functions for reusability
   - Immutable updates (Redux Toolkit uses Immer)
   - TypeScript-ready (add types for production)

6. When to Use Redux:
   - State shared across many components
   - Complex state logic
   - Need for time-travel debugging
   - Large applications

7. When NOT to Use Redux:
   - Simple apps with minimal state
   - State only used in 1-2 components
   - Can use Context API instead
   - Learning curve might slow down beginners
*/

// ====================================
// INSTALLATION COMMANDS
// ====================================

/*
npm install @reduxjs/toolkit react-redux

File Structure:
src/
├── store/
│   ├── index.js           (Store configuration)
│   ├── notificationSlice.js
│   └── userSlice.js
├── App.js                 (Provider wrapper)
└── MainApp.js             (Main component)
*/

// Example 3: Complete Notification App
// Demonstrates state management, lists, user interactions, and more

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationApp() {
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      title: 'Welcome to the App!',
      message: 'Thanks for joining us. Explore all features.',
      timestamp: '2 min ago',
      read: false,
      type: 'info',
    },
    {
      id: '2',
      title: 'New Update Available',
      message: 'Version 2.0 is now available for download.',
      timestamp: '1 hour ago',
      read: false,
      type: 'update',
    },
    {
      id: '3',
      title: 'Profile Incomplete',
      message: 'Complete your profile to unlock all features.',
      timestamp: '3 hours ago',
      read: true,
      type: 'warning',
    },
    {
      id: '4',
      title: 'Security Alert',
      message: 'New login detected from Chrome browser.',
      timestamp: 'Yesterday',
      read: true,
      type: 'alert',
    },
  ]);

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  // Delete notification with confirmation
  const deleteNotification = (id) => {
    Alert.alert(
      'Delete Notification',
      'Are you sure you want to delete this notification?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            setNotifications(
              notifications.filter((notif) => notif.id !== id)
            );
          },
          style: 'destructive',
        },
      ]
    );
  };

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notif) => ({ ...notif, read: true }))
    );
  };

  // Clear all notifications
  const clearAll = () => {
    Alert.alert(
      'Clear All Notifications',
      'This will delete all notifications. Continue?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear All',
          onPress: () => setNotifications([]),
          style: 'destructive',
        },
      ]
    );
  };

  // Get notification icon based on type
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'info':
        return 'information-circle';
      case 'update':
        return 'cloud-download';
      case 'warning':
        return 'warning';
      case 'alert':
        return 'alert-circle';
      default:
        return 'notifications';
    }
  };

  // Get notification color based on type
  const getNotificationColor = (type) => {
    switch (type) {
      case 'info':
        return '#007AFF';
      case 'update':
        return '#34C759';
      case 'warning':
        return '#FF9500';
      case 'alert':
        return '#FF3B30';
      default:
        return '#007AFF';
    }
  };

  // Render individual notification
  const renderNotification = ({ item }) => (
    <TouchableOpacity
      style={[styles.notifCard, item.read && styles.readCard]}
      onPress={() => markAsRead(item.id)}
      onLongPress={() => deleteNotification(item.id)}
      activeOpacity={0.7}
    >
      <View style={styles.notifContent}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: getNotificationColor(item.type) + '20' },
          ]}
        >
          <Ionicons
            name={getNotificationIcon(item.type)}
            size={24}
            color={getNotificationColor(item.type)}
          />
        </View>

        <View style={styles.notifTextContainer}>
          <View style={styles.notifHeader}>
            <Text style={styles.notifTitle}>{item.title}</Text>
            {!item.read && <View style={styles.unreadDot} />}
          </View>
          <Text style={styles.notifMessage} numberOfLines={2}>
            {item.message}
          </Text>
          <Text style={styles.notifTimestamp}>{item.timestamp}</Text>
        </View>

        <TouchableOpacity
          onPress={() => deleteNotification(item.id)}
          style={styles.deleteButton}
        >
          <Ionicons name="close-circle" size={24} color="#999" />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.notifBorder,
          { backgroundColor: getNotificationColor(item.type) },
        ]}
      />
    </TouchableOpacity>
  );

  // Count unread notifications
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Notifications</Text>
          <Text style={styles.headerSubtitle}>
            {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
          </Text>
        </View>
        <TouchableOpacity onPress={markAllAsRead} style={styles.headerButton}>
          <Ionicons name="checkmark-done" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Notifications List */}
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons
              name="notifications-off-outline"
              size={80}
              color="#ccc"
            />
            <Text style={styles.emptyText}>No notifications</Text>
            <Text style={styles.emptySubtext}>
              You're all caught up!
            </Text>
          </View>
        }
      />

      {/* Footer Actions */}
      {notifications.length > 0 && (
        <View style={styles.footer}>
          <TouchableOpacity onPress={clearAll} style={styles.clearButton}>
            <Ionicons name="trash-outline" size={20} color="#FF3B30" />
            <Text style={styles.clearButtonText}>Clear All</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
    marginTop: 4,
  },
  headerButton: {
    padding: 8,
  },
  listContainer: {
    padding: 10,
  },
  notifCard: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 6,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  readCard: {
    opacity: 0.6,
  },
  notifContent: {
    flexDirection: 'row',
    padding: 15,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notifTextContainer: {
    flex: 1,
  },
  notifHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  notifTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
    marginLeft: 8,
  },
  notifMessage: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 6,
  },
  notifTimestamp: {
    fontSize: 12,
    color: '#999',
  },
  deleteButton: {
    padding: 4,
  },
  notifBorder: {
    height: 4,
    width: '100%',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#999',
    marginTop: 20,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 8,
  },
  footer: {
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  clearButtonText: {
    fontSize: 16,
    color: '#FF3B30',
    fontWeight: '600',
    marginLeft: 8,
  },
});

// Key Concepts Demonstrated:
// 1. useState for complex state management
// 2. FlatList for efficient list rendering
// 3. TouchableOpacity for interactive elements
// 4. Alert API for native dialogs
// 5. Conditional styling based on state
// 6. Array methods (map, filter)
// 7. Immutable state updates
// 8. Props drilling in components
// 9. Event handlers (onPress, onLongPress)
// 10. SafeAreaView for safe areas on iOS
// 11. Icons with Ionicons
// 12. Calculated values (unreadCount)
// 13. ListEmptyComponent for empty states

// Interactive Features:
// - Tap to mark as read
// - Long press to delete
// - Swipe actions
// - Clear all
// - Mark all as read
// - Categorized notifications with icons

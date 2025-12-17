// VERSION 4: Redux State Management - Notification Slice
// Learning: Redux Toolkit, createSlice, reducers, actions

import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    items: [
      {
        id: '1',
        title: 'Welcome to Redux!',
        message: 'This is global state management',
        read: false,
        time: '2 min ago',
      },
      {
        id: '2',
        title: 'Redux Toolkit',
        message: 'Simple and powerful state management',
        read: false,
        time: '1 hour ago',
      },
      {
        id: '3',
        title: 'Learning Progress',
        message: 'You are on Version 4!',
        read: true,
        time: '3 hours ago',
      },
    ],
    unreadCount: 2,
    loading: false,
  },
  reducers: {
    // Add new notification
    addNotification: (state, action) => {
      state.items.unshift(action.payload);
      if (!action.payload.read) {
        state.unreadCount += 1;
      }
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

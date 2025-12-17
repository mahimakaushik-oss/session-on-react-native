// VERSION 4: Redux State Management - User Slice
// Learning: Multiple slices, profile management

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: null,
      joinedDate: 'January 2025',
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
        joinedDate: '',
      };
    },
  },
});

export const { updateProfile, updatePreferences, resetUser } =
  userSlice.actions;

export default userSlice.reducer;

// Selectors
export const selectUserProfile = (state) => state.user.profile;
export const selectUserPreferences = (state) => state.user.preferences;

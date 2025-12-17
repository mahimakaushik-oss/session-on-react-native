// VERSION 4: Redux Store Configuration
// Learning: configureStore, combining reducers

import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './notificationSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    notifications: notificationReducer,
    user: userReducer,
  },
  // Optional: Add middleware configuration
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable if using non-serializable data
    }),
});

// Export types for TypeScript (optional, for future use)
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

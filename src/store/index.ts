import { configureStore } from '@reduxjs/toolkit';

import darkThemeReducers from './reducers/darkThemeReducers'
import activateButtonToggleReducers from './reducers/activateButtonToggleReducers'

export const store = configureStore({
  // Redux que será enviado para página app.tsx
  reducer: {
    darkThemeReducers,
    activateButtonToggleReducers
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

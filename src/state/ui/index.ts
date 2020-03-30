import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'state/store';

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark'
}

interface UIState {
  themeMode: ThemeMode;
}

const initialState: UIState = {
  themeMode: ThemeMode.LIGHT
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.themeMode = state.themeMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT;
    }
  }
});

// Actions
export const { toggleThemeMode } = uiSlice.actions;

// Reducer
export default uiSlice.reducer;

// Selectors
export const uiSelector = (state: RootState) => state.ui;

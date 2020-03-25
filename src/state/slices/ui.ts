import { createSlice } from '@reduxjs/toolkit';
import { TRootState } from 'state/store';

export enum EThemeMode {
  LIGHT = 'light',
  DARK = 'dark'
}

interface IUIState {
  themeMode: EThemeMode;
}

const initialState: IUIState = {
  themeMode: EThemeMode.LIGHT
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.themeMode = state.themeMode === EThemeMode.LIGHT ? EThemeMode.DARK : EThemeMode.LIGHT;
    }
  }
});

// Actions
export const { toggleThemeMode } = uiSlice.actions;

// Reducer
export default uiSlice.reducer;

// Selectors
export const uiSelector = (state: TRootState) => state.ui;

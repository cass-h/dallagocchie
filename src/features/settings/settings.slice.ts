import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface SettingsState {
  theme: 'dark' | 'light';
}

const initialState: SettingsState = {
  theme: 'light',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
      state.theme = action.payload;
      return state;
    },
  },
});

export const { setTheme } = settingsSlice.actions;

export const selectTheme = (state: RootState) => state.settings.theme;

export default settingsSlice.reducer;

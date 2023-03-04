import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface SettingsState {
  theme: 'dark' | 'light';
  drawerWidth: number;
  drawerOpen: boolean;
}

const initialState: SettingsState = {
  theme: 'light',
  drawerWidth: 240,
  drawerOpen: false,
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
    setDrawerWidth: (state, action: PayloadAction<number>) => {
      state.drawerWidth = action.payload;
      return state;
    },
    setDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.drawerOpen = action.payload;
      return state;
    },
  },
});

export const { setTheme, setDrawerOpen, setDrawerWidth } =
  settingsSlice.actions;

export const selectTheme = (state: RootState) => state.settings.theme;
export const selectDrawer = (state: RootState) => {
  return {
    open: state.settings.drawerOpen,
    width: state.settings.drawerWidth,
  };
};

export default settingsSlice.reducer;

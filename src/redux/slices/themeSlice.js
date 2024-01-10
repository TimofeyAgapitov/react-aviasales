import { createSlice } from '@reduxjs/toolkit';

const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`;
  if (['light', 'dark'].includes(theme)) return theme;

  const useMedia = window.matchMedia('(prefers-color-scheme: light)');
  if (useMedia.matches) return 'light';

  return 'dark';
};

const initialState = getTheme();

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => action.payload,
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;

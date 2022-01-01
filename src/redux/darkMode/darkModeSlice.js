import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  dark: false,
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const darkModeAction = darkModeSlice.actions;
export default darkModeSlice.reducer;

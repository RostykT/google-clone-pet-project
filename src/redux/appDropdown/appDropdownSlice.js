import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  dropdownHidden: true,
};

export const appDropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    toggleDropdown: (state) => {
      state.dropdownHidden = !state.dropdownHidden;
    },
  },
});


export const appDropdownAction = appDropdownSlice.actions;
export default appDropdownSlice.reducer;

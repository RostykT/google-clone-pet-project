import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  term: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchInput: (state, {payload}) => {
      state.term = payload;
    },
    removeInput: (state) => {
      state.term = '';
    },
  },
});

export const searchAction = searchSlice.actions;
export default searchSlice.reducer;

import {configureStore} from '@reduxjs/toolkit';
import searchReducer from './search/searchSlice';
import dropdownReducer from './appDropdown/appDropdownSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    dropdown: dropdownReducer,
  },
});

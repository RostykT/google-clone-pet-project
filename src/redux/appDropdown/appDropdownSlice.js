import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  showAppModal: false,
  showSettingsModal: false,
  showUserModal: false,
};

export const appDropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    openAppModal: (state) => {
      state.showAppModal = true;
    },
    closeAppModal: (state) => {
      state.showAppModal = false;
    },
    toggleApp: (state) => {
      state.showAppModal = !state.showAppModal;
    },
    toggleSettings: (state) => {
      state.showSettingsModal =! state.showSettingsModal;
    },
    closeSettingsModal: (state) => {
      state.showSettingsModal = false;
    },
    toggleUserModal: (state) => {
      state.showUserModal = !state.showUserModal;
    },
    closeUserModal: (state) => {
      state.showUserModal = false;
    },
  },
});


export const appDropdownAction = appDropdownSlice.actions;
export default appDropdownSlice.reducer;

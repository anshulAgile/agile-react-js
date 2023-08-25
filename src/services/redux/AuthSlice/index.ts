import { createSlice } from '@reduxjs/toolkit';
import { IAdmin } from './types';
import { LocalStorageKeys } from 'utils/constants';
import apiInstance from 'services/api';

export interface IAuthSlice {
  isLoading: boolean;
  isLoggedIn: boolean;
  userData: IAdmin;
  isSuperAdmin?: boolean;
}

const DEFAULT_USER_DATA: IAdmin = {
  email: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  token: ''
};

const initialState: IAuthSlice = {
  isLoading: false,
  isLoggedIn: false,
  userData: DEFAULT_USER_DATA
};

// Reducer
const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    loaderChange: (state, payload) => {
      state.isLoading = payload.payload;
    },
    authSuccess: (state, action) => {
      apiInstance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${action.payload.data.authToken}`;
      localStorage.setItem(
        LocalStorageKeys.authToken,
        JSON.stringify(action.payload.data.authToken)
      );
      localStorage.setItem(LocalStorageKeys.user, JSON.stringify(action.payload.data));

      state.userData = action.payload;
      state.isLoggedIn = true;
    },
    authFail: (state) => {
      delete apiInstance.defaults.headers.common['Authorization'];
      localStorage.removeItem(LocalStorageKeys.authToken);
      localStorage.removeItem(LocalStorageKeys.user);

      state.userData = DEFAULT_USER_DATA;
      state.isLoggedIn = false;
    }
  }
});

export const { loaderChange, authFail, authSuccess } = loginSlice.actions;
export default loginSlice.reducer;

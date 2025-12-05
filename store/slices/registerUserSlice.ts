import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from '../reducers/registerUserReducer';
export const sidebarSlice = createSlice({
  name: 'userRegister',
  initialState: {
    email: '',
  },
  reducers: registerUser,
});

export const { userInfo } = sidebarSlice.actions;
export default sidebarSlice.reducer;

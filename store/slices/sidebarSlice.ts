import { createSlice } from '@reduxjs/toolkit';
import { sidebarReducer } from '../reducers/sidebarReducer';
export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isCollapsed: false,
  },
  reducers: sidebarReducer,
});

export const { toggleCollapse } = sidebarSlice.actions;
export default sidebarSlice.reducer;

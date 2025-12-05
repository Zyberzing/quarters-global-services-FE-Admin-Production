import { PayloadAction } from '@reduxjs/toolkit';

export const registerUser = {
  userInfo: (state: any, action: PayloadAction<string>) => {
    state.email = action.payload;
  },
};

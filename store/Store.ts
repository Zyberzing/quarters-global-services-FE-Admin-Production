import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './slices/sidebarSlice';
import registerUserReducer from './slices/registerUserSlice';
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    userRegister: registerUserReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

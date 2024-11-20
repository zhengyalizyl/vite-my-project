import userReducer from './userStore';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    user: userReducer
  }
});

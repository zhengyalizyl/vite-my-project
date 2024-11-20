import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {}
  },
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    }
  }
});

const { setUserInfo } = userSlice.actions;
const fetchUserInfo = () => {
  // return async (dispatch:Dispatch<RootState>) => {
  //   const res = await userInfo();
  //   dispatch(setUserInfo(res.data));
  // }
};

export { setUserInfo, fetchUserInfo };

const userReducer = userSlice.reducer;

export default userReducer;

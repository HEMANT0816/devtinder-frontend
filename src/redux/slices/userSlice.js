 import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    isLoggedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload.userInfo;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.userInfo = null;
      state.isLoggedIn = false;
    },
    editUser:(state,action)=>{
      state.userInfo=action.payload.userInfo;
    },
  },
});

export const { setUser, logout,editUser } = userSlice.actions;

export default userSlice.reducer;

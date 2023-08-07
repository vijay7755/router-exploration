import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state) => {
        // auth API
      state.isLoggedIn = true;
    },
    logOut: (state) => {
        // auth API
        state.isLoggedIn = false;
    },
  },
});

export const { signIn, logOut } = authSlice.actions;

export default authSlice.reducer;

export const authState = (state) => state.auth.isLoggedIn;

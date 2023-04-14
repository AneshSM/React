import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = !state.isAuthenticated;
    },
    logout(state) {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
});

export default authSlice;

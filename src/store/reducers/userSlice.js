import { createSlice } from "@reduxjs/toolkit";

// states used for storing user details
const userSlice = createSlice({
  name: "user",
  initialState: {
    userdetails: {},
    token: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userdetails = action.payload;
    },
  },
});

export const { setToken, setUserDetails } = userSlice.actions;

export default userSlice.reducer;

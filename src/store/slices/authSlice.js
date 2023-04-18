import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Yogesh",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      return payload;
    },
  },
});

export const { addUser } = authSlice.actions;
export const selectLoggedUser = (state) => state?.auth;
export default authSlice.reducer;

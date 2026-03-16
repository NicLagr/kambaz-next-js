import { createSlice } from "@reduxjs/toolkit";
import { users } from "../database";

const initialState = {
  currentUser: null as any,
  users: users as any[],
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    signup: (state, action) => {
      const newUser = {
        _id: new Date().getTime().toString(),
        role: "STUDENT",
        ...action.payload,
      };
      state.users = [...state.users, newUser];
      state.currentUser = newUser;
    },
  },
});

export const { setCurrentUser, signup } = accountSlice.actions;
export default accountSlice.reducer;

import { createSlice, createSelector } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    currentUser: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const selectCurrentUser = (state) => state.currentUser.currentUser;
export const { setCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;

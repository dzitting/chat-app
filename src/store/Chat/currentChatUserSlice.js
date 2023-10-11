import { createSlice, createSelector } from "@reduxjs/toolkit";

const currentChatUserSlice = createSlice({
    name: 'currentChatUser',
    initialState: {
        currentUser: null,
    },
    reducers: {
        setCurrentChatUser: (state, action) => {
            state.currentUser = action.payload;
        },
    },
});

export const { setCurrentChatUser } = currentChatUserSlice.actions;
export const currentChatUserSelector = createSelector(
    (state) => state.currentChatUser.currentUser,
    (currentUser) => currentUser,
)
export default currentChatUserSlice.reducer;
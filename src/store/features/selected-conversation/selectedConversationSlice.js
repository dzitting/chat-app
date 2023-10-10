import { createSlice, createSelector } from '@reduxjs/toolkit';

const selectedConversationSlice = createSlice({
    name: "selectedConversation",
    initialState: {
        selectedConversation: null
    },
    reducers: {
        setSelectedConversation: (state, action) => {
            state.selectedConversation = action.payload;
        }
    }
});

export const selectSelectedConversation = createSelector(
    (state) => state.selectedConversation.selectedConversation,
    (conversation) => conversation
);
export const { setSelectedConversation } = selectedConversationSlice.actions;
export default selectedConversationSlice.reducer;

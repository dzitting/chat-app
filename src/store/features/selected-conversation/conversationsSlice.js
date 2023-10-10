import {createSlice, createSelector} from '@reduxjs/toolkit';

const conversationsSlice = createSlice({
    name: "conversations",
    initialState: {
        conversations: []
    },
    reducers: {
        addConversation: (state, action) => {
            state.conversations = action.payload;
        }
    }
});

export const selectConversations = createSelector(
    (state) => state.conversations.conversations,
    (conversations) => conversations
)
export const { addConversation } = conversationsSlice.actions;
export default conversationsSlice.reducer;
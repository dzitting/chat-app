import { createSlice, createSelector } from "@reduxjs/toolkit";

const messageListSlice = createSlice({
    name: "messageList",
    initialState: {
        messages: [],
        messageContent: {
            message: "",
            from: null,
            sentAt: null
        }
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
        handleNewMessage: (state, action) => {
            state.messageContent.message = action.payload;
        }
    },
});

export const selectMessages = createSelector(
    (state) => state.messageList.messages,
    (messages) => messages
)
export const selectMessageContent = createSelector(
    (state) => state.messageList.messageContent,
    (messageContent) => messageContent
)
export const { addMessage, setMessages, handleNewMessage } = messageListSlice.actions;
export default messageListSlice.reducer;
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currentUserReducer from "./features/current-user/currentUserSlice"; // Updated import path
import selectedConversationReducer from "./features/selected-conversation/selectedConversationSlice"; // Updated import path
import conversationsReducer from "./features/selected-conversation/conversationsSlice";
import messageListReducer from "./features/selected-conversation/messageListSlice";

const reducer = combineReducers({
    currentUser: currentUserReducer,
    selectedConversation: selectedConversationReducer,
    conversations: conversationsReducer,
    messageList: messageListReducer
})

const store = configureStore({
    reducer
});

export default store;

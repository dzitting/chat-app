import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './User/currentUserSlice';
import currentChatUserReducer from './Chat/currentChatUserSlice';

export const store = configureStore({
    reducer: {
        currentUser: currentUserReducer,
        currentChatUser: currentChatUserReducer
    },
});
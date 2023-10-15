import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './User/currentUserSlice';
import currentChatUserReducer from './Chat/currentChatUserSlice';
import resolveMiddleware from './middlewares';

export const store = configureStore({
    reducer: {
        currentUser: currentUserReducer,
        currentChatUser: currentChatUserReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(resolveMiddleware);
    }
});
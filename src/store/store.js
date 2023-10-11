import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './User/currentUserSlice';

export const store = configureStore({
    reducer: {
        currentUser: currentUserReducer,
    },
});
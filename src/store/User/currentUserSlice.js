import { createSlice, createSelector } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
    name: "currentUser",
    initialState: {
        displayName: null,
        email: '',
        photoURL: '',
        uid: '',
        password: null,
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.displayName = action.payload.displayName;
            state.email = action.payload.email;
            state.photoURL = action.payload.photoURL;
            state.uid = action.payload.uid;
            state.password = action.payload.password;
        },
        createUser: (state, action) => {
            state.displayName = action.payload.displayName;
            state.email = action.payload.email;
            state.photoURL = action.payload.photoURL;
            state.uid = action.payload.uid;
            state.password = action.payload.password;
        },
        updateUser: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    },
});

export const currentUserSelector = createSelector(
    (state) => state.currentUser,
    (currentUser) => currentUser
)
export const { setCurrentUser, createUser, updateUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
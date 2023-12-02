/* eslint-disable @typescript-eslint/no-unused-vars */
// lib
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// zod schema
import { reduxUserZodSchema, type reduxUserState } from "./../../../zod/user.z";

const initialState: reduxUserState = {
    name: {
        first: 'Special',
        last: 'Guest',
    },
    email: '',
    role: '',
    token: '',
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // logout
        logout: (state) => {
            state = initialState;
        }
    }
});

export type UserSlice = reduxUserState;
export const {logout} = userSlice.actions;
export const userReducer = userSlice.reducer;
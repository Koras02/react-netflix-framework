import { createSlice } from '@reduxjs/toolkit';

export const userLoginSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: '',
        password:'',
        error: '',
    },
    reducers: {
        signinRequest: (state) => {
            state.loading = true;
        },
        signinSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        signinFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        signinPasswordError: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
        signout: (state) => {
            state.loading = false;
            state.user = '';
            state.error = '';
        },
    },
});

export const { signinRequest, signinSuccess, signinFail,signinPasswordError, signout } =
    userLoginSlice.actions;

export default userLoginSlice.reducer;

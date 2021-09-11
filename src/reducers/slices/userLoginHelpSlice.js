
import { createSlice } from "@reduxjs/toolkit";

export const userLoginHelpSlice =  createSlice ({
    name: 'user',
    initialState: {
        loading: false,
        user: '',
        password: '',
        error: '',
        emailAddress: '',
        code: ''
    },
    reducers: {
        resetRequest: (state) =>{
           state.loading = true;
        },
        resetPassword: (state,action) => {
            state.loading = false;
            state.user = action.payload;
        },
        resetErrorEmail: (state,action) => {
            state.loading = false;
            state.user = action.payload;
        },
        

    },
});

export const { resetRequest,resetPassword, resetErrorEmail } = userLoginHelpSlice.actions;

export default userLoginHelpSlice.reducer;
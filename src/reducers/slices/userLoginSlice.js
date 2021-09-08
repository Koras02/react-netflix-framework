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
        // 로그인 요청 보내기
        signinRequest: (state) => {
            state.loading = true;
        },
        // 로그인 성공
        signinSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },

        // 로그인 실패
        signinFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        signinPasswordError: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // 로그아웃
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

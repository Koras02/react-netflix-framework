import { createSlice } from '@reduxjs/toolkit';


export const userRegisterSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: '',
        error: '',
    },
    // 로그인 에러 상황 reducers 
    reducers: {
        // 로그인 버튼 첫상황 로그인 버튼 클릭시 로딩구현 
        registerRequest: (state) => {
           state.loading = true;
        },
        // 로그인 성공시 로딩 해제하고 
        registerSuccess: (state,action) => {
            state.loading = false;
            state.user = action.payload;
        },
        // 로그인 실패
        registerFail: (state,action) => {
            state.loading  = false;
            state.error = action.payload;
        },
    },
});

// reducers 내보내기
export const { registerRequest, registerSuccess, registerFail } =
 userRegisterSlice.actions;


 export default userRegisterSlice.reducer;
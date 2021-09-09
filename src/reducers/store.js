
// redux 액션들을 내보내주는 곳이다.
import { configureStore } from '@reduxjs/toolkit';
import userLoginSlice from './slices/userLoginSlice';
import userRegisterSlice from './slices/userRegisterSlice';
import userLoginHelpSlice  from './slices/userLoginHelpSlice';


// reducer 에 선언하면 공식적으로 변수 생성
export default configureStore({
    reducer: {
        userLogin: userLoginSlice,
        userRegister: userRegisterSlice,
        userLoginHelp: userLoginHelpSlice,
    }
})

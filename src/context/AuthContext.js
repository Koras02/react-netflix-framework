import React, {useContext, useState, useEffect } from 'react'
import { auth } from '../lib/firebase.prod';

// 인증 Context 생성
const AuthContext = React.createContext()

// Context를 사용할기위한 useContext 선언
export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
     // 상태로 처리할 사용자  설정
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    // 회원가입 대한 액션 설정
    // firebase 가 localstorge로 사용자가 이미로그인한경우 해당사용자를 연결하고 이를 on off 상태에서 확일하할지를 여기서 설정한다. 
    function signup(email, password) {
        // useState(ture) 로 시작 즉시 실행되개 하는 것 
        setLoading(false);
        return auth.createUserWithEmailAndPassword(email , password)
    };

    // 로그인 시 액션 설정
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }  

    
    // 로그아웃시 액션 설정 == 아무 정보도 가져올 필요 없으므로 () 비움
    function logout() {
       return  auth.signOut();
    }

   // 비밀번호찾기에 대한 context 선언
    function resetPassword(email) {
        // 만들었던 이메일주소로 메일을 보냄
        return auth.sendPasswordResetEmail(email);
    }

    // 이메일과 비밀번호를 업데이트 하게 만들기
    function updateEmail(email) {
        // 업데이트할 이메일을 return 
       return currentUser.updateEmail(email);

    }


    function updatePassword(password) {
        // 업데이트할 비밀번호를 return 
        return currentUser.updatePassword(password);
    }


      
    // 사용자가 입력할때만 이펙트를 적용하도록 설정하기
    useEffect(() => {
   // 사용자가 로그인 하거나 회원가입 하거나 오류가 발생할때 알려주는 값 설정
   // 가입하고 취소할수 있게 unsubscribe
   const unsubscribe =  auth.onAuthStateChanged(user => {
    // 사용자를 허용
    setCurrentUser(user)
    setLoading(false)
     })


     return unsubscribe
    }, [])

    const value = {
        // 값에 현재 사용자를 저장 
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }
    return (
        // Provider를 반환
        <AuthContext.Provider value={value}>
            {/* 로딩하고 있지않다면 render 하고 그렇지않다면 랜더링 을 안함 */}
            {/* 현재 로딩이 뒤에서 선언되었기 떄문에 먼저로딩하지않게 ! 논리연산자에 not(!) 연산자를 붙여준다  */}
            {!loading && children}
        </AuthContext.Provider>
    )
}

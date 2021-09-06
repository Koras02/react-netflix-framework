
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from "../components";
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';


export default function  SignUp() {
   const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
    
    // 이메일 주소 비밀 번호 
   

    const [firstName, setFirstName] = useState('');

    // 이메일 입력칸
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    // 이메일 에러 발생시 이벤트
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    
    // 비밀번호 6자 이하
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  

  
    // 핸드폰 번호 이메일 && 핸드폰번호 비밀번호 입력 방식 
   //  const isInvalid = emailAdress === '' || password === '';
 
    const handleEmailChange = (event) => {
       setEmailErrorMessage('');
        setEmailAddress(event.target.value);
    }
    const handlePasswordChange = (event) => {

      setPasswordErrorMessage('');
       setPassword(event.target.value);
    }
    
    const handleSignup = (event) => {
       event.preventDefault();

       // 로그인 방식 auth 접속후 Email과 Password 입력 
       // 입력완료시 history 로 Router가 설정된 Browse 사이트로 이동
       return firebase
         .auth()
         .createUserWithEmailAndPassword(emailAddress,password)
         .then((result) =>
            result.user
           .updateProfile({
             displayName: firstName,
             photoURL: Math.floor(Math.random() * 5) + 1,
           })
           .then(() => {
             history.push(ROUTES.BROWSE);
           })
       )
      .catch((error) => { 
             // 패스워드와 이메일 주소를 입력하지않거나 맞지 않을 경우 오류
             setFirstName('');
             setEmailAddress('');
             setPassword('');

            if (error.code === 'auth/email-already-in-use') {
               // 사용중인 이메일 일때
               setEmailErrorMessage('현재 사용중인 이메일 주소입니다. 다른 이메일 주소를 입력해 주세요');
            } else if (error.code === 'auth/invalid-email') {
               // 이메일주소가 틀릴때 이벤트
               setEmailErrorMessage('올바른 이메일 주소를 입력해 주세요.');
            } else if (error.code === 'auth/weak-password') {
               // 6자 미만 비밀번호 입력시
               setPasswordErrorMessage('비밀번호는 6자 이상이어야 합니다.');
            }
         })        
   
    }

    

    // 로그인 구현 
    return (
       <>
         <HeaderContainer>
            <Form>
              <Form.Title>회원 가입</Form.Title>
              {/* 로그인 실패시 에러 */}
       
              {/* {passwordErrorMessage && <Form.Error data-testid="error">
                 {passwordErrorMessage}
              </Form.Error>} */}

              <Form.Base onSubmit={handleSignup} method="POST">
                  {/* <Form.Input
                  placeholder="사용자 이름"
                  value={firstName}
                  onChange={({ target }) => setFirstName(target.value)}
               
                  /> */}
              
                 <Form.Input 
                    placeholder="이메일 주소 또는 전화 번호"  
                    value={emailAddress}
                    onChange={handleEmailChange}
                    hasError={emailErrorMessage}
                  //   onChange={({ target }) => setEmailAddress(target.value)} 
                    />
               {emailErrorMessage && <Form.Error>{emailErrorMessage}</Form.Error>}
                <Form.Input 
                   type="password"
                   value={password}
                   onChange={handlePasswordChange}
                   hasError={passwordErrorMessage}
                   autoComplate='off'
                   placeholder="비밀번호"
                  //  onChange={({ target }) => setPassword(target.value)}
                  /> 
              {passwordErrorMessage && <Form.Error>{passwordErrorMessage}</Form.Error>}
                <Form.Submit type="submit"   data-testid="sign-up">
                   회원가입
                </Form.Submit>
              </Form.Base>
              <Form.Text>
                Netflix 회원이 아닌가요? <Form.Link to={ROUTES.SIGN_UP}>지금 가입하세요</Form.Link>
              </Form.Text>
              <Form.Text>
                  이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다. <Form.AboutLink href="">자세히 알아보기</Form.AboutLink>
              </Form.Text>
            </Form>
         </HeaderContainer>
            <FooterContainer/>
       </>  
    )
}

 
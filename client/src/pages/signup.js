import React, { useContext, useState } from 'react';
import { HeaderContainer } from '../containers/header';
import { Form } from "../components";
import { FirebaseContext } from '../context/firebase';
import { useHistory } from 'react-router';
import * as ROUTES from '../constants/routes';
import { FooterContainer } from '../containers/footer';


export default function  SignUp() {
    const { firebase } = useContext(FirebaseContext);
    const history = useHistory();
    
    // 이메일 주소 비밀 번호 
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
 

    // 핸드폰 번호 이메일 && 핸드폰번호 비밀번호 입력 방식 
    const isInvalid = firstName == '' || emailAddress === '' || password === ''

    async function handleSignIn (e)  {
       e.preventDefault();

       // 로그인 방식 auth 접속후 Email과 Password 입력 
       // 입력완료시 history 로 Router가 설정된 Browse 사이트로 이동
       firebase
         .auth()
         .signInWithEmailAndPassword(emailAddress,password)
        //  .signInPhoneNumber(phoneNumber.password)
         .then(result => {
             result.user.updateProfile({
                 displayName: firstName,
                 photoURL: Math.floor(Math.random() * 5 + 1)
             })
         })

         .then(() => {
             history.push(ROUTES.BROWSE)
         })

         .catch((error) => {
             setError(error.massage);
             // 패스워드와 이메일 주소를 입력하지않거나 맞지 않을 경우 오류
             setFirstName('')
             setEmailAddress('');
             setPassword('');
             setError(error.message);
         });        
    };

    // 로그인 구현 
    return (
       <>
         <HeaderContainer>
            <Form>
              <Form.Title>회원 가입</Form.Title>
              {/* 로그인 실패시 에러 */}
              {error && <Form.Error data-testid="error">현재 사용중인 이메일이거나 비밀번호 오류입니다.
              </Form.Error>}
          
              <Form.Base onSubmit={handleSignIn} method="POST">
              <Form.Input 
                    placeholder="이메일 주소 또는 전화 번호"  
                    type="email"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)} 
                     
         
                />

                 <Form.Input 
                    placeholder="이메일 주소 또는 전화 번호"  
                    type="email"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)} 
                   
               
                />

                <Form.Input 
                   type="password"
                   placeholder="비밀번호"
                   autoComplate='off'
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
             
                />

                <Form.Submit type="submit" disabled={isInvalid} data-testid="sign-up">
                   회원가입
                </Form.Submit>
              </Form.Base>
              <Form.Text>
                Netflix 회원이 아닌가요? <Form.Link to="/signup">지금 가입하세요</Form.Link>
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

 
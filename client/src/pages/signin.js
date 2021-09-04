import React, { useContext, useState } from 'react';
import { HeaderContainer } from '../containers/header';
import { Form } from "../components";
import { FirebaseContext } from '../context/firebase';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { FooterContainer } from '../containers/footer';


export default function  SignIn() {

    // 이메일 주소 비밀 번호 
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
   
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
 

    // 핸드폰 번호 이메일 && 핸드폰번호 비밀번호 입력 방식 
    const isInvalid = password === '' || emailAddress === ''; 

    async function handleSignIn (e)  {
       e.preventDefault();

       // 로그인 방식 auth 접속후 Email과 Password 입력 
       // 입력완료시 history 로 Router가 설정된 Browse 사이트로 이동
       firebase
         .auth()
         .signInWithEmailAndPassword(emailAddress,password)
         .then(() => {
             history.push(ROUTES.BROWSE);
         },3000)
         .catch((error) => {
             setError(error.massage);
             // 패스워드와 이메일 주소를 입력하지않거나 맞지 않을 경우 오류
             setEmailAddress('');
  
             setPassword('');
             
         });        
    };

    // 로그인 구현 
    return (
       <>
         <HeaderContainer>
            <Form>
              <Form.Title>로그인</Form.Title>
              {/* 로그인 실패시 에러 */}
              {error && <Form.Error data-testid="error">죄송합니다. 이 이메일 주소를 사용하는 계정을 찾을수 없습니다. 다시 시도하시거나 
              <Form.Link>새로운 계정을 등록</Form.Link>
              
              하세요.</Form.Error>}
          
              <Form.Base onSubmit={handleSignIn}>
                 <Form.Input 
                    placeholder="이메일 주소"  
                    type="email"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)} 
                   
                    enabled={isInvalid}
                />

                <Form.Input 
                   placeholder="비밀번호"
                   type="password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   autoComplete="false"
                   enabled={isInvalid}
              
                />

                <Form.Submit type="submit" disabled={isInvalid}>
                    로그인
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
         <FooterContainer />
       </>  
    )
}
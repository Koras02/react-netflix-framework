import React, { useContext, useState,useCallback} from 'react';
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

  //  const PASSWORD = 'password';

    const [emailAddress, setEmailAddress] = useState('');
    // const [passwordType, setPasswordType] = useState(PASSWORD);
    const [errorMessage, setErrorMessage] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    

    // 핸드폰 번호 이메일 && 핸드폰번호 비밀번호 입력 방식 
    // const isInvalid = password === '' || emailAddress === ''; 

    // 로그인 방식 설정 == form 방식 
    
    const handleSignin = (event) =>  {
      event.preventDefault();

       // 로그인 방식 auth 접속후 Email과 Password 입력 
       // 입력완료시 history 로 Router가 설정된 Browse 사이트로 이동
       firebase
         .auth()
         .signInWithEmailAndPassword(emailAddress,password)
         .then(() => {
             setEmailAddress("");
             setPassword("");
             history.push(ROUTES.BROWSE)
         })
         // 로그인시
         // 패스워드와 이메일 주소를 입력하지않거나 맞지 않을 경우 오류
         .catch((error) => {
           if (error.code === 'auth/invalid-email') {
             setErrorMessage('올바른 이메일 주소를 입력해 주세요');
           } else if (error.code === 'auth/user-disabled') {
             setErrorMessage('해당 계정은 규약위반으로 정지되셨습니다.') 
             
           } else if (error.code === 'auth/user-not-found') {
              setErrorMessage('가입되어 있지 않는 이메일 주소입니다.');
           } else if (error.code === 'auth/wrong-password') {
              setErrorMessage('비밀번호를 잘못 입력하셨습니다. 다시 입력해주세요');
           }
          setError(error.message);
        });     
    }

  
    



    // 로그인 구현 
    return (
       <>
         <HeaderContainer>
            <Form>
              <Form.Title>로그인</Form.Title>
      
              {errorMessage && <Form.Error data-testid="error">{errorMessage}</Form.Error>}
              
              <Form.Base onSubmit={handleSignin} method="POST">
                 <Form.Input 
                    placeholder="이메일 주소"  
                    type="text"
                    value={emailAddress}
                    onChange={({target}) => setEmailAddress(target.value)} 
     
                />

                <Form.Input 
                   type="password"
                   value={password}
                   autoComplete="off"
                   placeholder="비밀번호"
                   onChange={({target}) => setPassword(target.value)}
                   
                />

                <Form.Submit type="submit" data-testid="sign-in" >
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
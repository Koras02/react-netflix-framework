
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from "../components";
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';
import {useForm} from 'react-hook-form'
 import {
     registerRequest,
     registerSuccess,
     registerFail,
 } from '../reducers/slices/userRegisterSlice';
import { useDispatch, useSelector } from 'react-redux';
// import auth from 'registry-auth-token'
import {auth} from '../lib/firebase.prod';



export default function  SignUp() {
   const history = useHistory();
 
   const dispatch = useDispatch();
   const { user } = useSelector((state) => state.userLogin);
   const { loading, error } = useSelector((state) => state.userRegister);

   const {
      register,
      handleSubmit,
      formState: {errors},
      watch,
   } = useForm();


    // 핸드폰 번호 이메일 && 핸드폰번호 비밀번호 입력 방식 
   //  const isInvalid = emailAdress === '' || password === '';
 
   //  const handleEmailChange = (event) => {
   //     setEmailErrorMessage('');
   //      setEmailAddress(event.target.value);
   //  }
   //  const handlePasswordChange = (event) => {

   //    setPasswordErrorMessage('');
   //     setPassword(event.target.value);
   //  }


    const handleSubmitonClick = async(data) => {
      dispatch(registerRequest());
      try {
         const response = await auth.createUserWithEmailAndPassword(
            data.email,
            data.password
        );
         await response.user.updateProfile({
            displayName:data.firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
         });
         dispatch(registerSuccess(JSON.stringify(response.user)));
         history.push(ROUTES.BROWSE);
         } catch (error) { 
            dispatch(registerFail(error.message));
          }
      };
    
    const handleSignup = async(data) => {
   
       // 로그인 방식 auth 접속후 Email과 Password 입력 
       // 입력완료시 history 로 Router가 설정된 Browse 사이트로 이동
      //  return firebase
      //    .auth()
      //    .createUserWithEmailAndPassword(emailAddress,password)
      //    .then((result) =>
      //       result.user
      //      .updateProfile({
      //        displayName: firstName,
      //        photoURL: Math.floor(Math.random() * 5) + 1,
      //      })
      //      .then(() => {
      //        history.push(ROUTES.BROWSE);
      //      }).catch(error) (
      //         dispatch(registerFail(error.message))
      //      )
      //  )
 

      // .catch((error) => { 
      //        // 패스워드와 이메일 주소를 입력하지않거나 맞지 않을 경우 오류
      //        setFirstName('');
      //        setEmailAddress('');
      //        setPassword('');
 
      //       //  // 회원가입시
      //       // if (error.code === 'auth/email-already-in-use') {
      //       //    // 사용중인 이메일 일때
      //       //    setEmailErrorMessage('현재 사용중인 이메일 주소입니다. 다른 이메일 주소를 입력해 주세요');
      //       // } else if (error.code === 'auth/invalid-email') {
      //       //    // 이메일주소가 틀릴때 이벤트
      //       //    setEmailErrorMessage('올바른 이메일 주소를 입력해 주세요.');
      //       // } else if (error.code === 'auth/weak-password') {
      //       //    // 6자 미만 비밀번호 입력시
      //       //    setPasswordErrorMessage('비밀번호는 6자 이상이어야 합니다.');
      //       // }
      //    })    
         
    }

    

    // 로그인 구현 
    return (
       <>
         <HeaderContainer>
            <Form login>
              <Form.Title>회원 가입</Form.Title>
              {/* 로그인 실패시 에러 */}
       
              {/* {passwordErrorMessage && <Form.Error data-testid="error">
                 {passwordErrorMessage}
              </Form.Error>} */}
              <Form.Base onSubmit={handleSubmit(handleSubmitonClick)}>
                {error && <div>{error}</div>}
                  <input
                  type="text"
                  {...register('name', {
                     required: '정확한 이름을 입력해주세요',
                     minLength: {
                        value: 3,
                        message:  '사용자 이름은  3글자 이상입력하셔야 합니다.',
                     },
                  })}
                  placeholder="사용자 이름"
                  id="name"
                  // value={firstName}
                  // onChange={({ target }) => setFirstName(target.value)}
                  />
                 {errors.name && <span>{errors.name.message}</span>}
                
                 <input
                        type='text'
                        {...register('email', {
                            required: '정확한 이메일 주소를 입력하세요',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Please enter a valid email address',
                            },
                        })}
                        id='email'
                        placeholder='Email address'
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                    <input
                        type='password'
                        {...register('password', {
                            required:
                                '비밀 번호는 4글자 이상',
                            minLength: {
                                value: 4,
                                message:
                                    '2',
                            },
                            maxLength: {
                                value: 60,
                                message:
                                    'Your password must contain between 4 and 60 characters.',
                            },
                        })}
                        id='password'
                        placeholder='Password'
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                    <input
                        type='password'
                        {...register('confirmPassword', {
                            validate: (value) =>
                                value === watch('password') ||
                                'Password does not match.',
                        })}
                        id='confirmPassword'
                        placeholder='Confirm Password'
                    />
                    {errors.confirmPassword && (
                        <span>{errors.confirmPassword.message}</span>
                    )}
                 
                 
                 {/* <Form.Input 
                    placeholder="이메일 주소 또는 전화 번호"  
                    value={emailAddress}
                    onChange={handleEmailChange}
                  //   hasError={emailErrorMessage}
                  //   onChange={({ target }) => setEmailAddress(target.value)} 
                    /> */}
               {/* {emailErrorMessage && <Form.Error>{emailErrorMessage}</Form.Error>} */}
                {/* <Form.Input 
                   type="password"
                   value={password}
                   onChange={handlePasswordChange}
                  //  hasError={passwordErrorMessage}
                   autoComplate='off'
                   placeholder="비밀번호"
                  //  onChange={({ target }) => setPassword(target.value)}
                  />  */}
              {/* {passwordErrorMessage && <Form.Error>{passwordErrorMessage}</Form.Error>} */}
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

 

import React from 'react';
import { useHistory } from 'react-router-dom';
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
import { Input } from '../components/form/styles/form';
import {ImSpinner} from "react-icons/im";
import { SignInHeaderContainer } from '../containers/Form/SignInHeader';


export default function  SignUp() {
   const history = useHistory();
 
   const dispatch = useDispatch();
   const { loading, error } = useSelector((state) => state.userRegister);
   const { user } = useSelector((state) => state.userLogin);

   const {
      register,
      handleSubmit,
      formState: {errors},
     
   } = useForm();


 

    const handleSubmitonClick = async(data) => {
      dispatch(registerRequest());
      try {
         const response = await auth.createUserWithEmailAndPassword(
            data.email,
            data.password
        );
         await response.user.updateProfile({
            displayName:data.email,
            photoURL: Math.floor(Math.random() * 5) + 1,
         });
         dispatch(registerSuccess(JSON.stringify(response.user)));
         history.push(ROUTES.BROWSE);
         } catch (error) { 
            dispatch(registerFail(error.message));     
          }
      };
    
    

    // 로그인 구현 
    return (
       <>
         <SignInHeaderContainer>
            <Form login>
              <Form.Title>회원 가입</Form.Title>
              {/* 로그인 실패시 에러 */}
              <Form.Base onSubmit={handleSubmit(handleSubmitonClick)}>
                 {/* 현재 계정이 사용중이라면 에러 발생 */}
              {error && <Form.Error>죄송합니다. 현재 이 이메일 주소는 넷플릭스에서 사용중인 이메일 주소입니다.</Form.Error>}
                 <Input
                           type='text'
                           {...register('email', {
                               required: '',

                               // 이메일 주소 입력 방식 
                               pattern: {
                                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                   message: '정확한 이메일 주소를 입력해 주세요',
                               },
                           })}
                            id='email'
                            placeholder='이메일 주소'
                    />
                    {/* 이메일 입력 사항을 위반했을때 */}
                     {errors.email && <span>{errors.email.message}</span>}

                     {/* 비밀번호 입력 규약 최소 4~10글자 입력 이 이상 입력시 에러 */}
                   
                   <Input
                           type='password'
                           {...register('password', {
                               required:
                                   '비밀번호는 최소 4~10글자 이상 입력하셔야 합니다..',

                              // 비밀번호 최소 길이를 minLength로 4글자 이하 입력시 에러 발생 
                               minLength: {
                                   value: 4,
                                   message:
                                       '비밀번호는 최소 4-10글자 이상 입력하셔야 합니다.',
                               },
                               // 비밀번호 최대 수 15글자 이상 입력시 에러 발생
                               maxLength: {
                                   value: 15,
                                   message:
                                       '최대 허용 비밀번호 수를 초과했습니다.',
                               },
                           })}
                           id='password'
                           placeholder='비밀번호'
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                {loading ? ( 
                   <Form.Submit>
                        <ImSpinner/>
                     </Form.Submit>
            ): (
               <Form.Submit 
                   type="submit"   
                   data-testid="sign-up">
                   회원가입
                </Form.Submit>
            )}
      

               
              </Form.Base>
              {/* <Form.Text>
                Netflix 회원이 아닌가요? <Form.Link to={ROUTES.SIGN_UP}>지금 가입하세요</Form.Link>
              </Form.Text> */}
              <Form.Text>
                  이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다. <Form.AboutLink href="">자세히 알아보기</Form.AboutLink>
              </Form.Text>
            </Form>
         </SignInHeaderContainer>
            <FooterContainer/>
       </>  
    )
}

 
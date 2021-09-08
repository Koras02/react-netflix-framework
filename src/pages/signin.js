import React, { useContext, useState} from 'react';
import { useHistory,useParams } from 'react-router-dom';
import { Form } from "../components";
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';
import { useForm } from "react-hook-form";
import {
  signinRequest,
  signinSuccess,
  signinFail,
 
} from '../reducers/slices/userLoginSlice';
import { useDispatch, useSelector } from 'react-redux';
import {auth} from '../lib/firebase.prod';
import { Input } from '../components/form/styles/form'; 
import { ImSpinner, ImSpinner2 } from 'react-icons/im';
 
 

export default function  SignIn() {
  // 이메일 주소 비밀 번호 
  const history = useHistory();

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.userLogin);

  const { email } = useParams();
 

  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
    reset,
  } = useForm();


  const handleSubmitonClick = async(data) => {
      dispatch(signinRequest());
      try {
        const response = await auth.signInWithEmailAndPassword(
              data.email,
              data.password
        );
 
        dispatch(signinSuccess(JSON.stringify(response.user)));
          history.push(ROUTES.BROWSE);
      } catch(error) {
            dispatch(signinFail(error.message));
    
      }
  }; 

    // 로그인 구현 
    return (
       <>
         <HeaderContainer>
            <Form login>
              <Form.Title>로그인</Form.Title>
              <Form.Base onSubmit={handleSubmit(handleSubmitonClick)}>  
               {error && <Form.Error>죄송합니다. 이 이메일 주소를 사용하는 계정을 찾을 수 없습니다. 다시 시도하시거나 새로운 계정을 등록하세요.</Form.Error>}
              
 
                 <Input 
                    type="text"
                    {...register('email', {
                      required: '',

                      // 이메일 주소 입력 방식
                      pattern: {
                        // 정규 표현식사용 = Regex
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: '정확한 이메일 주소를 입력해 주세요',
                      }
                    })}
                    id='email'
                    defaultValue={email ? email: ''}
                    placeholder='이메일 주소'
                />
                {/* 이메일 입력 사항을 위반했을때 */}
                {errors.email && <span>{errors.email.message}</span>}

               {/* 비밀번호 입력 규약 최소 4~10글자 입력 이 이상 입력시 에러 */}
                <Input 
                  type="password"
                   {...register('password', {
                     required: 
                       '비밀번호는 최소 4~10글자 이상 입력하셔야 합니다..',
                      
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
                   // 비밀번호 틀릴때
                    wrongPassword: {
                        value:'password',
                        message: '잘못된 비밀번호 입니다.'
                    }
                   })}
                   id='password'
                   placeholder="비밀번호"
                />
                 {errors.password && <span>{errors.password.message}</span>}
            
              {loading ? (
                <Form.Submit>
                    <ImSpinner/>
                  </Form.Submit>
              ): (
                <Form.Submit 
                type="submit" 
                data-testid="sign-in" >
                    로그인
                </Form.Submit>
           )}
              </Form.Base>
              <Form.Text>
                Netflix 회원이 아닌가요? <Form.Link to="/signup">지금 가입하세요</Form.Link>
              </Form.Text>
              <Form.Text>
                  이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다. <Form.AboutLink href="">자세히 알아보기</Form.AboutLink>
              </Form.Text>
            </Form>
         </HeaderContainer>
         <FooterContainer signin />
       </>  
    )
}
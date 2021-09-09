import React, { useState} from 'react';
import { useHistory,useParams } from 'react-router-dom';
import { Form } from "../components";
import { FooterContainer } from '../containers/footer';
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
import { ImSpinner } from 'react-icons/im';
import "./css/login.css";
import SignInHelpContainer from '../containers/Form/SignInHeader';
import { LogInHelpContainer } from '../containers/Form/LogInHelpContainer';
 

export default function  LogInHelp() {
  // 이메일 주소 비밀 번호 
  const history = useHistory();

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.userLogin);

  const { email } = useParams();

 
  // 
  const {register,handleSubmit,formState: {errors},} = useForm();

  // 로그인 버튼 = 
  const handleSubmitonClick = async(data) => {
      dispatch(signinRequest());
      try {
        // 비밀번호 찾기 == 이메일 보내기
        const response = await auth.sendPasswordResetEmail(
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
         <LogInHelpContainer>
            <Form login>
              <Form.Title>비밀번호 찾기</Form.Title>
              <Form.Base onSubmit={handleSubmit(handleSubmitonClick)}>  
               {error && <Form.Error>죄송합니다. 이 이메일 주소를 사용하는 계정을 찾을 수 없습니다. 다시 시도하시거나 새로운 계정을 등록하세요.</Form.Error>}
                 <Input 
                    type="text"
                    {...register('email', {
                      required: '',

                      // 이메일 주소 입력 방식
                      pattern: {
                        // 정규 표현식사용 = ㄱ
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

           
            
              {loading ? (
                <Form.Submit>
                    <ImSpinner/>
                  </Form.Submit>
              ): (
                <Form.Submit 
                type="submit" 
                data-testid="sign-in" >
                    비밀 번호 찾기
                </Form.Submit>
           )}
              </Form.Base>
 
             
              <Form.Text>
                  이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다. <Form.AboutLink href="">자세히 알아보기</Form.AboutLink>
              </Form.Text>
            </Form>
         </LogInHelpContainer>
         <FooterContainer signin />
       </>  
    )
}
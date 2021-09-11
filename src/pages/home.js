import React, {useState}  from 'react'
import { HeaderContainer } from '../containers/header'
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from "../containers/accordion";
import { FooterContainer } from "../containers/footer";
import { Feature, OptForm } from '../components';
import {useHistory }from "react-router-dom";
import * as ROUTES from '../constants/routes';
import Input from './form/Input';

export default function Home({ email, setEmail }) {
    const history = useHistory();
    const [hasError, setHasError] = useState(false);
    
    const handleSignUp = (event) => {
        event.preventDefault();

        if (email == '') {
            setHasError(true);
            return;
        }

        history.push(ROUTES.PLAN);
    }

    const handleChange = (event) => {
        setHasError(false);
        setEmail(event.target.value);
    }
    
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>영화,TV 프로그램을 무제한으로.</Feature.Title>
                    <Feature.SubTitle>디양한 디바이스에서 시청하세요, 언제든 해지하실 수 있습니다.</Feature.SubTitle>
                 <OptForm>
                    <OptForm.Text>
                    시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
                    </OptForm.Text>
        
                    <OptForm.Input
                      type="email"
                      value={email}
                      onChange={handleChange}
                      placeholder="이메일 주소"
                      hasError={hasError}
                    >
                    </OptForm.Input>
                    
                    {hasError && <div>정확한 이메일 주소를 입력하세요</div>}
                    <OptForm.Button>시작하기</OptForm.Button>
                 </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}


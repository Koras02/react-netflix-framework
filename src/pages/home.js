import React, { useEffect, useRef, useState } from 'react'
import { HeaderContainer } from '../containers/header'
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from "../containers/accordion";
import { FooterContainer } from "../containers/footer";
import { Feature, OptForm } from '../components';

export default function Home() { 
 

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
                    <OptForm.Input placeholder="이메일 주소" htmlFor="email_input"/>
                    
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


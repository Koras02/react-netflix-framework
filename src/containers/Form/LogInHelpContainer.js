import React from 'react'
import { PassWordHeader } from '../../components';
import * as ROUTES from '../../constants/routes';
import Images from "../../logo.svg";


export function LogInHelpContainer  ({children})  {
    return (
        <PassWordHeader>
        {/* 홈페이지 로고 버튼 && 로그인 이동버튼 */}
        <PassWordHeader.Frame>
             <PassWordHeader.Logo to={ROUTES.HOME} src={Images} alt="Netflix"  />
             <PassWordHeader.ButtonLink to={ROUTES.SIGN_IN}>로그인</PassWordHeader.ButtonLink>    
            </PassWordHeader.Frame>
        {/* Header 첫 구간 children 항목 Header이라는 components들을 자식 항목 으로 받아온다. */}
        {children}
    </PassWordHeader>
    )
}

 

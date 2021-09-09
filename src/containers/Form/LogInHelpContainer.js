import React from 'react'
import { PasswordHeader } from '../../components';
import * as ROUTES from '../../constants/routes';
import Images from "../../logo.svg";


export function LogInHelpContainer  ({children})  {
    return (
        <PasswordHeader>
        {/* 홈페이지 로고 버튼 && 로그인 이동버튼 */}
        <PasswordHeader.Frame>
             <PasswordHeader.Logo to={ROUTES.HOME} src={Images} alt="Netflix"  />
             <PasswordHeader.ButtonLink to={ROUTES.SIGN_IN}>로그인</PasswordHeader.ButtonLink>    
            </PasswordHeader.Frame>
        {/* Header 첫 구간 children 항목 Header이라는 components들을 자식 항목 으로 받아온다. */}
        {children}
    </PasswordHeader>
    )
}

 

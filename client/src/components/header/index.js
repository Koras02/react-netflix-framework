 import React, {useState} from "react";
 import {Link as ReachRouteLink } from "react-router-dom";
import { 
    Background,
    Container,
    Logo,
    ButtonLink,
    Group,
    TextLink,
    Link
} from "./styles/header";
 
// Header의 배경화면
export default function Header({ bg = true, children, ...restProps }) {
    return bg ? (
      <Background {...restProps} data-testid="header-bg">
        {children}
      </Background>
    ) : (
      children
    );
  }

// Frame 자식 요소
Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Grop = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

// 로고 자식요소들
Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReachRouteLink to={to}>
            <Logo {...restProps} />
        </ReachRouteLink>
    )
}



// 로그인 버튼 링크
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Group = function HeaderGroup({ children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps}) {
  return <Link {...restProps}>{children}</Link>
}

 import React, { useState } from "react";
 import {Link as ReachRouteLink } from "react-router-dom";
import { 
    Background,
    Container,
    Logo,
    ButtonLink,
    Group,
    Link,
    Profile,
    Search,
    SearchIcon,
    Picture,
    Dropdown,
    Feature,
    FeatureCallOut,
    Text,
    SearchInput,

} from "./styles/header";
import Images from '../../images/users/1.png'
import { FaSearch } from "react-icons/fa";
 
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

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

// 로고 자식요소들
Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReachRouteLink to={to}>
            <Logo {...restProps} />
        </ReachRouteLink>
    )
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps}) {  
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
        <SearchIcon onClick={() => setSearchActive(!searchActive)}>
           <FaSearch alt="search" data-testid="search-click" />
         </SearchIcon>
         <SearchInput 
            value={searchTerm}
            onChange={({ target }) => setSearchTerm(target.value)}
            placeholder="검색할 영화 드라마 제목을 입력하세요"
            active={searchActive}
            data-testid="search-input"
          />
    </Search>

  )
}
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>
}


Header.Feature = function HeaderFeature({ children, ...restProps }) 
{
  return <Feature {...restProps}>{children}</Feature>
}

Header.Picture = function HeaderPicture ({ src,...restProps}) 
{
  return <Picture {...restProps} src={`${Images}` } />

}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) 
{
  return <Dropdown {...restProps}>{children}</Dropdown>
}


Header.TextLink = function HeaderTextLink({ children, ...restProps}) {
  return <Link {...restProps}>{children}</Link>
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <this.PlayButton {...restProps}>{children}</this.PlayButton>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }){
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}


Header.Text = function HeaderText({ children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}


// 로그인 버튼 링크
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}





 
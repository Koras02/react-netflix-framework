/* eslint-disable no-undef */
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link as ReachRouterLink } from 'react-router-dom';
import {
  Container,
  Group,
  Background,
  Dropdown,
  Picture,
  Link,
  Search,
  Profile,
  FeatureCallOut,
  SearchIcon,
  SearchInput,
  ButtonLink,
  PlayButton,
  Text,
  Feature,
  Logo,
  ButtonGroup,
  TextLink,
  TextLinks,
  SearchComponent,
 
} from './styles/SubHeader';

export default function SubHeader({ bg = false, children, ...restProps }) {
  return bg ? (
    <Background data-testid="SubHeader-bg" {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
}

 

 
 

SubHeader.SubBackground = function SubBackground({ bg = false, children, ...restProps }) {
  return bg ? 
    (<SubBackground {...restProps}>
    {children}
    </SubBackground>
    ) : (
      children
    );
};

SubHeader.Frame = function SubHeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

SubHeader.Group = function SubHeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

SubHeader.Logo = function SubHeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

SubHeader.Search = function SubHeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon 
      onClick={() => 
      setSearchActive(!searchActive)} 
      data-testid="search-click"
    >
        <FaSearch />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="제목을 입력해주세요"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  );
};

SubHeader.SearchComponent = function SubHeaderSearchComponent({ children, ...restProps }) {
    return <SearchComponent {...restProps}>{children}</SearchComponent>
};

SubHeader.Profile = function SubHeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

SubHeader.Feature = function SubHeaderFeature({ children }) {
  return <Feature>{children}</Feature>;
};

SubHeader.Picture = function SubHeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={src ? process.env.PUBLIC_URL + `/images/users/${src}.png` : ``} />;
};

SubHeader.Dropdown = function SubHeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

SubHeader.TextLink = function SubHeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

SubHeader.PlayButton = function SubHeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

SubHeader.FeatureCallOut = function SubHeaderFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

SubHeader.Text = function SubHeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

SubHeader.ButtonLink = function SubHeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

 
SubHeader.ButtonGroup = function SubHeaderButtonGroup({ children, ...restProps }) {
  return <ButtonGroup {...restProps}>{children}</ButtonGroup>;
};

SubHeader.TextLink = function SubHeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>
}
SubHeader.TextLinks = function SubHeaderTextLinks({ children, ...restProps }) {
  return <TextLinks {...restProps}>{children}</TextLinks>
}



 
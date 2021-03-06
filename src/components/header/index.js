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
  Banner,
  InfoButton,
  InfoH1
 
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background data-testid="header-bg" {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
}

 

 
 

Header.SubBackground = function SubBackground({ bg = false, children, ...restProps }) {
  return bg ? 
    (<SubBackground {...restProps}>
    {children}
    </SubBackground>
    ) : (
      children
    );
};


Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon 
      onClick={() => { 
      setSearchActive(!searchActive)
    }}
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

Header.SearchComponent = function HeaderSearchComponent({ children, ...restProps }) {
    return <SearchComponent {...restProps}>{children}</SearchComponent>
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Feature = function HeaderFeature({ children }) {
  return <Feature>{children}</Feature>;
};

Header.Banner = function HeaderBanner ({ children ,...restProps}) {
  return <Banner {...restProps}>{children}</Banner>
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={src ? process.env.PUBLIC_URL + `/images/users/${src}.png` : ``} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.InfoButton = function HeaderInfoButton({ children, ...restProps }) {
  return <InfoButton {...restProps}>{children}</InfoButton>;
};
Header.InfoH1 = function HeaderInfoH1({ children, ...restProps }) {
  return <InfoH1 {...restProps}>{children}</InfoH1>;
};


Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return (
    <Text {...restProps}>
    {children}
    </Text>
    )
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

 
Header.ButtonGroup = function HeaderButtonGroup({ children, ...restProps }) {
  return <ButtonGroup {...restProps}>{children}</ButtonGroup>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>
}
Header.TextLinks = function HeaderTextLinks({ children, ...restProps }) {
  return <TextLinks {...restProps}>{children}</TextLinks>
}



 
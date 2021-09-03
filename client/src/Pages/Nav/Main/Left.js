import React, {useEffect,useState} from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { LeftWrapper} from "./Main.styled";
 
import styled from "styled-components";
 import NetflixIcon from "./assets/Netflix.png"
 import {ImMenu} from "react-icons/im";
import routeList from "./route/routeList";

const BrandLogo = styled(Link)`
  color: #ffd500;
  font-weight: 600;
`;


const Image = styled.img`
width: 100px;
`;

 
const StyledMenuBtn = styled.button`
  background: none;
  
  background-image: ${NetflixIcon};
  width: 4.8rem;
  height: 4.8rem;
  border: none;
  filter: invert(100%);
  display: none;
  @media (max-width: 800px) {
    display: inline-block;
    position:absolute;
    left:85%;
    bottom:0px;
  }


`;
const CollapseableMenu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
overflow: hidden;

transition: transform .2s ease, opacity .4s ease;
@media (max-width: 800px) {
  padding: 1.8rem;
  //  display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'flex')}; 
  flex-direction: column;
  position: absolute;
  left:10%;
  transform-origin: top;
  transform: ${({ isCollapsed }) => isCollapsed && 'translateX(-100%)'};
  opacity: ${({ isCollapsed }) => isCollapsed && '0'};
  background:#000;
  min-height: 1200px;
  z-index: 9;
  left: 0;
  top: 3.9rem;
}
`;

const MenuList = styled.ul`
padding: 0;
margin-left:2rem;
margin-top:0.5rem;

@media (max-width: 800px) {
  display: flex;
  flex-direction: column;
  text-align: center;
}
`;

const MenuItem = styled(NavLink)`
margin-left: 3rem;
margin-right:0.9rem;
color: #fff;
opacity: 0.6;
text-decoration:none;
font-size:1.2rem;
font-weight: bold;
margin-top:20px;
line-height:1rem;


:active,
:focus,
:hover {
  opacity: 1;
}


@media screen and (max-width : 1600px) {
  font:bold 14px/24px arail;
  padding: 0.1rem 2px;
  margin:0rem 1.9rem 0rem 1.8rem;
  
}

@media screen and (max-width: 1400px) {
  padding 1rem 2px;
  font-size:0.9rem 2px;
  margin-left:10px;
}

@media screen and (max-width: 890px) {
  padding 2.4rem 2px;
  font-size:1.9rem;
  margin-left:0px;
}




`;


const MenuItem2 = styled(NavLink)`
margin-left: 3.9rem;

color: #fff;
opacity: 0.6;
text-decoration:none;

:active,
:focus,
:hover {
  opacity: 1;
}

display:none;


@media screen and (max-width: 820px) {
  padding 1.9rem 2px;
  font-size:2rem;
  margin-left:30px;
  display:block;
}

`;

 
function Left(props) { 
    const [isCollapsed, setCollapse] = useState('true');
    

    const handleCollapse = () => {
        setCollapse(!isCollapsed);
      };
     
    return (
        <LeftWrapper>
           <BrandLogo to="/react-netflix-framework">
               <Image src={NetflixIcon } alt="Menu Icon" className="menu-icon" />
           </BrandLogo>
           <StyledMenuBtn onClick={handleCollapse}>
               <ImMenu className="Menu-Icon" size="35"/>
           </StyledMenuBtn>
           <CollapseableMenu isCollapsed={isCollapsed}>
               <MenuList>
                    {routeList.map(item => (
                    
                    <MenuItem
                    exact={item.path === '/'}
                    onClick={handleCollapse}
                    key={item.name}
                    to={item.path}
                    >
                    {item.name}
                    </MenuItem>
                    
                ))}
               </MenuList>
           </CollapseableMenu>
        </LeftWrapper>
    )
}

export default Left;
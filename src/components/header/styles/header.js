import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';
import Images from "./images.jpg" 

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.75)),
  url(${({src}) => (src ? `${process.env.PUBLIC_URL}/images/misc/home-bg.jpg` : `${Images}`)}) top left / cover no-repeat;
    // url(${({ src }) => (src ? process.env.PUBLIC_URL + `../images/misc/${src}.jpg` : `../images/misc/home-bg.jpg`)}) top left / cover no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const SubBackground = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.75)),
  // // url(${({src}) => (src ? `${process.env.PUBLIC_URL}/images/misc/home-bg.jpg` : `${Images}`)}) top left / cover no-repeat;
    // // url(${({ src }) => (src ? process.env.PUBLIC_URL + `../images/misc/${src}.jpg` : `../images/misc/home-bg.jpg`)}) top left / cover no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 20px;
    // font-size:12px;
  }
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-size: 20px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  z-index:1;


`;

export const SearchInput = styled.input`
  background-color: rgba(64, 64, 64, 0.5);
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  border:none;
  font-size: 14px;
  border-radius: 4px;
  outline: 0;
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0px')};

  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const SearchComponent = styled.div`
 color:#fff;
  
 right:150px;

`;

export const Search = styled.div`
display: flex;
align-items: center;
svg {
  color: white;
  cursor: pointer;
}
@media (max-width: 700px) {
  display: none;
}
`;

export const Picture = styled.button`
  width: 32px;
  height: 32px;
  background: url(${({ src }) => src});
  background-size: cover;
  background-color:transparent;
  border: 0;
  overflow:hidden;
  cursor: pointer;
`;

export const SearchIcon = styled.button`
cursor: pointer;
background-color: transparent;
border: 0;
outline: 0;
height: 32px;
width: 32px;
padding: 0;
display: flex;
align-items: center;
justify-content: center;

img {
  filter: brightness(0) invert(1);
  width: 16px;
}
`;

export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 1rem;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #f40612;
  }
`;



export const Banner = styled.div`
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
color: #fff;
height: 600px;
max-height: 600px;
color: white;
/* height: 448px; */
object-fit: contain;
/* display: flex;
flex-direction: row; */
/* justify-content: center; */
background: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111),
  url(${({ src }) => `${src}`}) top left / cover no-repeat;

@media (max-width: 768px) {
  height: 300px;
}
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  min-width:160px;
  top: 32px;
  right: 10px;
  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }
  ${Group} {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
    ${Link}, ${Picture} {
      cursor: default;
    }
  }
  button {
    margin-right: 10px;
  }
  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
display: flex;
align-items: center;
margin-left: 20px;
position: relative;
button {
  cursor: pointer;
}
&:hover > ${Dropdown} {
  display: flex;
  flex-direction: column;
}
`;

export const Feature = styled(Container)`
  padding: 50px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;
  @media (max-width: 860px) {
    display: none;
  }
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const Text = styled.p`
  color: white;
  font-size: 18px;
  margin-top:10px;
  margin-bottom:1px;
  line-height: 26px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

  &:nth-child(2) {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Logo = styled.img`
  height: 36px;
  z-index:1;
  width: 134px;
  margin-right: 40px;
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }

  @media (max-width: 640px) {
    height: 50px;
    width: 40px;
  }
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: red;
  // float:left;
  color: #fff;
  border-width: 0;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  max-width: 100px;
  font-weight: bold;
  font-size: 19px;
  margin-top: 10px;
  // display:inline-block;
  // float:left;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #ff1e1e;
    color: #000;
    transition: 0.5s;
  }
`;

export const InfoButton = styled.button`
  box-shadow: 0 0.6vw 2vw -0.1vw rgba(0, 0, 0, 0.35);
  background-color:gray ;
  // float:left;
  color: #fff;
  border-width: 0;
  padding: 10px 20px 10px 10px;
  border-radius: 5px;
  max-width: 150px;
  font-weight: bold;
  font-size: 19px;
  
  margin-top: 10px;
  // line-height: 24px;
  // float:left;
  position:relative;
  left:120px;
  bottom: 54px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color:gray ;
    color: #000;
    transition: 0.5s;
  }
`;


export const ButtonGroup = styled.div`
 
   width:100px;
   margin-right:20px;
   overflow:hidden;
   font-size:12px;

   &:hover {
     color:red;
   }
`;

export const TextLink = styled.p`
 color:#fff;
 font-size: 20px;
 font-weight: 500;

 padding:10px;
  
 
  @media screen and (max-width: 860px) {
    font-size: 16px;
  }

  @media screen and (max-width: 640px) {
    
  }
  `;
  
 
export const TextLinks = styled.p`
    padding: 0 0.5rem 0.5rem 0.5rem;
    cursor: pointer;
    display:flex;
    // flex:2;
    justify-content: space-between;
    align-items:center;
    font-weight: bold;
    line-height:24px;
    font-size:18px;
    color:#fff;
    &:hover {
      text-decoration: underline;
    }


    &:first-child {
      font-weight: normal;
      padding: 0.5rem;
    }
    &:nth-child(1) {
      width:100%;
      font-weight: normal;
      padding: 0 0.5rem 0.5rem 0.5rem;
      border-bottom: 1px solid rgba(255,255,255,0.3);
    }

   

`;


export const Slider = styled.div``;


export const InfoH1 = styled.div`
  float:right;
`;
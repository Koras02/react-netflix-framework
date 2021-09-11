import styled, {createGlobalStyle} from "styled-components";

export const LockBody = createGlobalStyle`
  body {
      overflow:hidden;
  }
`;

export const ReleaseBody = createGlobalStyle`
 body {
     overflow: visible
 }
`;

export const Body = styled.div``;


export const Spinner = styled.div`
  width:100%;
 

`;



export const Picture = styled.img`
width: 50px;
height: 50px;
position: absolute;
top: 50%;
left: 50%;
margin-top: -100px;
margin-left: -22px;


`;
export const VideoWrapper = styled.div`
   width:100%;

   background:#000;
   overflow:hidden;
 

`;


export const VideoPlayer = styled.iframe`
    width:100%;
    overflow:hidden;
    height: 100vh;
    border:0;
    top:0px;
    left:0px;
    position:relative;

 
    float:left;
 
  
`;
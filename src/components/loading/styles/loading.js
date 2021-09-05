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


export const Spinner = styled.div`
   position: fixed;
   width: 100%;
   height: 100%;
   background-color: black;
   z-index: 999;
   :after {
       content: '';
       position: absolute;
       top: 50%;
       left: 50%;
   }
`;


export const Picture = styled.img``;
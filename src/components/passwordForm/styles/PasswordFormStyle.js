import styled, { keyframes } from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";



export const Container = styled.div`
   display:flex;
   flex-direction: column;
   min-height: 550px;
   background-color: rgba(0,0,0,0.75);
   border-radius:5px;
   width: 100%;
   margin:auto;
   max-width: 450px;
   padding: 60px 68px 40px;
   margin-bottom: 100px;
   // color:#000;
   background:#fff;
   // color:#000;

   @media screen and (max-width:640px) {
      // padding: 100px 0px 100px;
      max-width:600px;
      min-height: 660px;
      padding: 60px 68px 40px;
      margin-bottom: -100px;
      border-bottom:2px solid gray;
      position:relative;
      bottom:100px;
   }
`;

export const Error = styled.div`
   background: #e87c03;
   border-radius: 4px;
   font-size: 14px;
   margin: 0 0 16px;
   color: white;
   padding: 15px 20px;
`;

export const Success = styled.div`
   background: #009688;
   border-radius: 4px;
   font-size: 1rem;
   margin: 0 0 16px;
   color: white;
   padding: 15px 20px;
`;

export const Base = styled.form`
   display:flex;
   flex-direction: column;
   max-width; 450px;
   width: 100%;


   p {
      font-size: 16px;
   }

   span {
      font-size: 13px;
      color:#ff9210;
      margin-bottom: 20px;
   }

   `;
   export const Description = styled.div`
   color: #fff;
   font-size: 12px;
   // font-weight: 
   margin-bottom: 28px;
   color:#000;
   
   @media screen and (max-width: 640px) {
      margin-top: 10px;
   }
   `;

export const Title = styled.h1`
   color: #fff;
   font-size: 22px;
   // font-weight: 
   margin-bottom: 28px;
   color:#000;

   @media screen and (max-width: 640px) {
      margin-top: 50px;
   }
`;

export const Text = styled.p`
   color: #737373;
   font-size: 16px;
   font-weight: 500;
`;

export const TextSmall = styled.p`
   margin-top: 10px;
   font-size: 13px;
   line-height: normal;
   color: #8c8c8c;
`;

export const Link = styled(ReactRouterLink)`
   color:#fff;
   text-decoration: none;

   &:hover {
      text-decoration: underline;
   }
   `;
   
   export const Input = styled.input`
   background: #fff;
   // broder-radius: 100%;
   // border-spacing: 10%;
   border: 0;
   color: #fff;
   border-radius: 10px 10px 10px 10px;
   height: 50px;
   line-height: 50px;
   padding: 5px 20px;
   margin-bottom: 20px;
   outline:none;

   

 
   
   &:focus {
      border-bottom:1px solid orange;
      transition: 0.5s;
   
      
    }
  
   
 
`;

export const Input2 = styled.input`
   background: #fff;
   broder-radius: 4px;
   border: 0;
   color: #fff;
   height: 50px;
   line-height: 50px;
   padding: 5px 20px;
   margin-bottom: 20px;
   outline:none;


 

   &:focus {
      border-bottom:1px solid red;
      transition: 0.5s;
   
      
    }
  
   
 
`;


export const Submit = styled.button`
   background: #0080ff;
   border-radius: 4px;
   font-size: 16px;
   font-weight: bold;
   margin: 24px 0 12px;
   padding: 16px;
   border: 0;
   color: white;
   cursor: pointer;

   &:disabled {
      opacity: 0.5;
   }

`;

export const AboutLink = styled.div`
  text-decoration: none;

`;

const rotate = keyframes`
   from {
      transform: ratate(0deg);
   } 
   to {
      transform: rotate(360deg);
   }
 `


export const Loading = styled.div`
    display:flex;
    justfiy-content: center;
    animation: ${rotate} 1s linear infinite;
    z-index: 1;
    
`;

export const Button = styled.button`
cursor: pointer;
position: absolute;
top: 50%;
right: 0;
transform: translateY(-50%);
background: none;
border: none;
color: var(--gray);
&:focus:not(:focus-visible) {
  outline: 0;
}
`;

import styled from "styled-components/macro";


export const Container = styled.div`
  display:flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  padding: 130px 45px;

  @media screen and (max-width: 640px) {
     padding:80px 25px; 
  }
`;



export const Title = styled.h1`
   color:#fff;
   font-size: 64px;
   font-weight: 700;
   margin:auto;
   max-width:600px;
   text-align:center;


   @media (max-width: 600px) {
       font-size:35px;

   }
`;


export const SubTitle = styled.h2`
   color:white;
   font-size: 26px;
   font-weight: 500;
   margin: 20px auto;
   max-width: 600px;
   text-align:center;

   @media (max-width: 600px) {
      font-size: 18px;
   }
`;
import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  height: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  } 
`

export const Text = styled.p`
  font-size: 19.2px;
  display: flex;
  padding: 0 45px;
  color: white;

  @media (max-width: 1000px) {
    font-size: 24px;
    padding: 0 10%;
    margin: 24px auto;
    max-width: 450px;
    text-align: center;
  }
`


export const Input = styled.input`
   max-width: 510px;
   height: 70px;
   width: 100%;
   border: solid 1px #8c8c8c;
   padding: 10px;
   box-sizing: border-box;
`;

export const Button = styled.a`
   min-width: 74px;
   display:flex;
   align-items: center;
   background: #e50914;
   border: 0;
   border-left: 1px solid rgb(51,51,51);
   font-size: 26px;
   color: white;
   cursor: pointer;
   padding: 0 26px;

   @media (max-width:1000px) {
       height: 40px;
       font-size: 1rem;
       margin-top:15px;
   }


   img {
       width: 20px;
       padding-left: 10px;
       filter: bightness(0) invert(1);

       @media (max-width: 1000px) {
           width: 11px;
       }
   }

   &:hover {
       background: #f40612;
   }
`;


export const Break = styled.div`
   flex-basis: 100%;
   height: 0;
`;
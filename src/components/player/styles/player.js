import styled from "styled-components/macro";


export const Container = styled.div``;


export const Outer = styled.div`
   display:flex;
   flex-direction: column;
   justfiy-content: center;
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0,0,0,0.5);
   margin: 0 20px;
`;

export const Overlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0,0,0,0.7);
   margin: 0 20px;
`;

export const Inner = styled.div`
   position: relative;
   width: 100%;
   max-width: 900px;
   margin: auto;

   video {
       width: 100%;
   }
`;


export const Close = styled.button`
   position: absolute;
   right: -30px;
   top: -30px;
   width: 32px;
   height: 32px;
   opacity: 0.3;
   background-color: #fff;
   border: 0;
   cursor: pointer;
   border-radius: 50%;

   &:hover {
       opacity: 1;
   }

   &:before,
   &:after {
       position: absolute;
       left: 15px;
       top: 5px;
       content: '';
       height: 22px;
       width: 2px;
       background-color: #333;
   }

   &:before {
       transform: rotate(45deg);
   }
   &:after {
       transform: ratate(-45deg);
   }

`;


export const Button = styled.button`
  background: gray;
  width: 115px;
  height: 45px;
  text-transform: uppercase;
  border:none;
  font-weight: bold;
  color: white;
  font-size: 18px;

  height: 45px;
  cursor: pointer;
  margin-bottom:20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;
  border-radius: 9%;

  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
  }
`;

export const ModalButton = styled.div``;
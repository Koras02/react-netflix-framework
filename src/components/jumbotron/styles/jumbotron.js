import styled from "styled-components/macro";

export const Item = styled.div`
  display:flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color:white;
  overflow:hidden;
`;

export const Inner = styled.div`
   display:flex;
   align-items:center;
   flex-direction: ${({ direction }) => direction};
   justify-content: space-between;
   max-width: 1100px;
   margin: auto;
   width: 100%;

   @media (max-width: 1000px) {
       flex-direction: column;
   }
`;

export const Title = styled.h1`
    font-size: 50px;
    line-height:1.1;
    margin-bottom: 8px;

    @media (max-width:600px) {
        font-size: 35px;
    }
`;

export const Container = styled.div`
     @media (max-width: 1000px) {
         ${Item}: last-of-type h2 {
             margin-bottom: 50px;
         }
     }
`;

export const Pane = styled.div`
   width: 50%;
   height: 100%;


   img {
       z-index:2;
   }

   video {
       z-index:1;
   }

   @media (max-width: 1000px) {
       width: 100%;
       padding: 0 45px;
       text-align:center;
   }
`;

export const SubTitle = styled.div`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;


export const Image = styled.img`
   max-width: 100%;
   height: auto;
   z-index:2;

   
`;


export const Video = styled.div`
   z-index = 1;
   
`;

export const VideoSource = styled.source`
    left: 96px;
    top:43px;
    width: 320px;
    height: auto;
`;




export const Show = styled.div`
   position:relative;
   width: 513px;
   height: 385px;

   * {
       position:absolute;
       left: 0;
       top: 0;
       width: 100%;
       height: 100%;
   }

   img {
       z-index: 2;
   }

   video {
       z-index: 1;
   }
`;


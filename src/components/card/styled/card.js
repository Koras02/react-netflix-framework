
import styled from 'styled-components/macro';

export const Title = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  margin-top:140px;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -100px;
    }
  }
`;

export const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`;

export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }
  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }
  &:first-of-type {
    margin-left: 56px;
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }
  &:last-of-type {
    margin-right: 56px;
    @media (max-width: 1000px) {
      margin-right: 30px;
    }
  }
`;

export const FeatureText = styled.p`
  font-size: 18px;
  color: white;
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
  margin: 0;
  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 500px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;
  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;
    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FeatureText} {
      font-size: 14px;
    }
  }
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

export const FeatureClose = styled.button`
  color: red;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;


export const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;
  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;

export const Maturity = styled.div`
background-color: ${({ rating }) => rating === 'R' && '#f44336' || rating === 'NC-17' && '#f44336' ||
rating === 'PG-13' && '#2f9600' || rating === 'PG' && '#2f9600' || rating === 'G' && '#2f9600' ||
rating === 'TV-MA' && '#f44336' || rating === 'TV-14' && '#f44336' || rating === 'TV-PG' && '#f44336' ||
rating === 'TV-Y7' && '#2f9600' || rating === 'TV-G' && '#2f9600' || rating === 'TV-Y' && '#2f9600'
};
  width: 70px;
  line-height: 28px;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
  color: white;
  margin: 0;
  margin-right: 5px;
  border-color: rgba(51, 51, 51, 0.5);
  border : 1px solid rgba(51, 51, 51, 0.8);
  border-radius: 5px;
  padding: 1px 2px;
  text-overflow: ellipsis;
  @media (max-width: 600px) {
    line-height: 22px;
  }
`;






export const FeatureCategory = styled.div`
font-size:18px;
   color:white;
   font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')}
   margin: 0;
   margint-right: 5px;
   border-color: rgba(51,51,51,0.5);
   border-radius: 5px;
   padding: 1px 2px;
   text-overflow: ellipsis;
   @media (max-width:600px) {
     line-height: 22px;
    }
     
`;

    export const Rating = styled.div`
    background-color: ${({ vote_average }) => vote_average >= 8 && '#2f9600' || vote_average >= 4 && '#ffa500' || vote_average < 4 && '#f44336'};
      width: 40px;
      line-height: 28px;
      text-align: center;
      color: white;
      font-weight: bold;
      font-size: 18px;
      color: white;
      margin: 0;
      margin-right: 5px;
      border-color: rgba(51, 51, 51, 0.5);
      border : 1px solid rgba(51, 51, 51, 0.8);
      border-radius: 5px;
      padding: 1px 2px;
      text-overflow: ellipsis;
    
      @media (max-width: 600px) {
        line-height: 22px;
      }
    `;
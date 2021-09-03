import styled from 'styled-components';
import { device,dark,light } from './variables';

const IconWrapper = styled.div`
    
`;
const MainWrapper = styled.div`
  height: 60px;
//   margin-bttom: 150px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: #000;
  padding: 0 40px;
  @media ${device.tablet} {
    padding: 0 100px;
    height: 70px;
    div {
      line-height: 70px;
    }
  }
  z-index: 30;
  width: 100%;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 60px;
`;
const RightWrapper = styled.div`
  .pc {
    display: none;
    @media ${device.tablet} {
      display: flex;
      justify-content: space-between;
      width: 220px;
      font-size: 35px;
      line-height: 70px;
    }
  }
  .mobile {
    display: block;
    font-size: 26px;
    line-height: 60px;
    @media ${device.tablet} {
      display: none;
    }
  }
`;
const Logo = styled.div`
  width: 80px;
  @media ${device.tablet} {
    width: 140px;
  }
  img {
    width: 100%;
  }
  z-index: 21;
`;

const DrawerMenu = styled.div`
  height: 60px;
  margin: 20px 0;
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
  color: black;
  label {
    border-bottom: 3px solid red;
  }
`;
export { MainWrapper, LeftWrapper, RightWrapper, Logo,IconWrapper, DrawerMenu };
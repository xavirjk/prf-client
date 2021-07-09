import Styled, { css, keyframes } from 'styled-components';
import { device } from './device';
import vt from '../images/woman.png';
import rman from '../images/running-man.png';
import prof from '../images/major.jpg';

const imgs = [vt, rman];

export const baseDisplay = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const nameCrd = keyframes`
    from {
        left: -70px;
        letter-spacing: 2px;
        text-decoration: none;
    };
    to {
        left: 0px;
        letter-spacing: .5px;
        text-decoration: underline;
    };
`;
const descCrd = keyframes`
from {
    font-size: 17px;
    left: 120px;

};
to {
    font-size: 16px;
    left: 0px;
};
`;

const btn1Classic = keyframes`
from {
    top:80px;
};
to {
    top: 0px;
};
`;
const btn2Classic = keyframes`
from { 
    left: -10rem;
};
to {
    left: 0px;
};
`;
export const Main = Styled.main` 
    background-color: white;

`;

export const Header = Styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: .2rem 2rem;
    border-top: 10px solid #1280a5; 
    border-bottom: .1px solid lightblue;
    z-index: 10;
    background-color: white;
    ${baseDisplay}
`;

export const HeaderIc = Styled.div`
    border: 2px solid grey;
    border-radius: 50%;
    padding: .5rem .6rem;
    cursor: pointer;
    text-align: center;
   
    
`;
export const BackIc = Styled(HeaderIc)`
    border: 0;
    margin-left: 10rem;
`;
export const HeaderCt = Styled.div`
    flex: 1 1 70%;
`;
export const BodyCt = Styled.div`
    ${baseDisplay};
`;
export const Menu = Styled.div`
    position: fixed;
    top: 0px;
    height: 100vh;
    padding: 1rem;
    border-top: 3px solid #282c34;
    background-color: #282c34;
    font-family: Impact, fantasy;
    color: #1280a5;
    z-index: 12;
`;

export const SMIconsCont = Styled.div`
    margin-top: 5px;
    ${baseDisplay}
    justify-content: space-around;
`;
export const Nav = Styled.div`
    margin-top: 30px;
    padding-left: .4rem;
    letter-spacing: .5px;
`;

export const Icon = Styled.span`
    padding-right: 1rem;
`;
export const NavEl = Styled.div`
    padding-bottom: 1rem;
    cursor: pointer;
`;
export const MainCont = Styled.div`
    ${baseDisplay};
    position: absolute;
    left: 200px;
    right: 0;
    top: 80px;
    background-color:white;
    justify-content: center;
    ${(props) =>
      props.toggled
        ? css`
            padding: 1rem 0rem;
            padding-right: 8rem;
            @media ${device.mobileS} {
              left: 10px;
            }
            @media ${device.laptop} {
              left: 200px;
            }
          `
        : css`
            @media ${device.mobileS} {
              left: 0px;
            }
            @media ${device.laptop} {
              left: 50px;
            }
          `}
    flex: 1 1 10%;
    
`;

export const Desc = Styled.article`
    width: 100%;
    padding: 6rem 1rem;
`;
export const Cont = Styled.div`
    padding: 1rem;
    
    @media ${device.mobileS} {
        flex: 1 1 50%;
    }
    @media ${device.laptop} {
        flex: 1 1 30%;
    }
`;
export const CardHead = Styled.div`
    position: relative;
    font-family: Impact , fantasy;
    font-size: 22px;
    text-decoration: underline;
    animation-name :${nameCrd} 1000ms linear;
`;

export const DescCard = Styled.div`
     position: relative;
     font-size: 16px;
     text-align: center;
     padding-top: 1rem;
     animation :${descCrd} 1000ms ease-in;

`;

export const ButtonGroup = Styled.div`
    padding-top: 3rem;
`;

export const ClassicBtn1 = Styled.button`
    padding: 1rem 1.5rem;
    background-color: #1280a5;
    border: .5px solid #1280a5;
    color: white;
    font-family: Impact, fantacy;
    font-size: 18px;
    border-radius: 5px;
    position: relative;
    animation: ${btn1Classic} 1000ms linear;
    cursor: pointer;
`;

export const ClassicBtn2 = Styled(ClassicBtn1)`
    background-color: white;
    border-color: #1280a5;
    color: #1280a5;
    margin-left: 2rem;
    animation: ${btn2Classic} 1000ms linear;
`;

export const ImagePane = Styled.div`
    background: url(${(props) =>
      props.index ? imgs[props.index] : imgs[0]}) no-repeat center;
    background-size: cover;
    height: 100%;
`;

import styled, { keyframes } from 'styled-components';

export const StyledHeader = styled.div<{ scrolled: boolean, minimized: boolean }>`
    height: 55px;
    display: grid;
    padding: 5px;
    position: ${props => props.scrolled ? 'fixed' : 'sticky'};
    bottom: 0;
    transition: width .3s ease-in-out;
    cursor: ${props => props.scrolled && 'pointer'};
    width: 100%;
    grid-template-columns: 100px auto 100px;
    @media(min-width: 800px) {
        margin-bottom: 40px;
        margin-left: 20px;
    }
    ${props => props.scrolled && `
        overflow: hidden;
        border-radius: ${props.minimized && '0 50% 50% 0'};
        width: ${props.minimized ? '55px' : '100%'};
        box-shadow: ${props.minimized ? 'none' : '0 0 2px black;' }
    `
    }
`;

export const SearchField = styled.input`
    justify-self: center;
    border-radius: 0;
    background: rgba(0,0,0,0);
    color: black;
    outline: none;
    height: 18px;
    margin: auto 0;
    padding: 4px;
    font-family: Roboto;
    caret-color: black;
    border: none;
    font-weight: 700;
    outline: none;
    border-bottom: 1px solid rgba(0,0,0,.2);
    border-radius: 4px;
    margin-left: -20px;
    padding-left: 24px;
    ::placeholder {
        color: rgba(0,0,0,.4);
    }
    :hover {
        border-bottom: 1px solid rgba(0,0,0,.8);

    }
`;


const ballRoll = keyframes`
  0% {
    transform: rotate(9deg);
    -webkit-animation-timing-function: ease-in;
  }
  10%{ 
    transform: translateX(12vw) rotate(90deg);
  }
  20% {
    transform: translateX(18vw) rotate(180deg);
  }
  30% {
    transform: translateX(24vw) rotate(270deg);
  }
  40% {
    transform: translateX(33vw) rotate(360deg);
  }
  50% {
    transform: translateX(45vw) rotate(450deg);
  }
  60% {
    transform: translateX(59vw) rotate(540deg);
  }
  70% {
    transform: translateX(73vw) rotate(1260deg);
  }
  80% {
    transform: translateX(82vw) rotate(1440deg);
  }
  90% {
    transform: translateX(90vw) rotate(1620deg);
  }
  100% {
    transform: translateX(80vw) rotate(1800deg);
  }  
`;

export const HeaderIcon = styled.img`
    /* animation: ${ballRoll} .5s ease-in-out infinite; */
    transition: ease-in-out;
`;

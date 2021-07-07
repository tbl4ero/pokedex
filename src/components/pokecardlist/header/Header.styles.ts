import styled, { keyframes, css } from "styled-components";

export const StyledHeader = styled.div<{
  inView: boolean;
  minimized: boolean;
}>`
  display: grid;
  padding: 20px 0;
  position: ${(props) => !props.inView && "fixed"};
  transition: 0.3s ease-in-out;
  cursor: ${(props) => !props.inView && "pointer"};
  width: 100%;
  box-sizing: border-box;
  box-shadow: none;
  grid-template-columns: 10% auto 10%;
  ${(props) => {
    // console.log(props.inView, 'here');
    return (
      !props.inView &&
      css`
      overflow: hidden;
      padding ${props.minimized && "0px"};
      background: ${!props.minimized && "#EDEDED"};
      box-shadow: ${!props.minimized && "0px -1px 18px 7px rgba(0,0,0,0.65)"};
      @media(min-width: 800px) {
        height: ${props.minimized && "0px"};
      }
      @media(max-width: 800px) {
        padding 20px 0;
        bottom: 0;
        width: ${props.minimized ? "0" : "100%"};
      }`
    );
  }}
`;

export const SearchField = styled.input`
  justify-self: center;
  border-radius: 0;
  background: rgba(0, 0, 0, 0);
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-left: -20px;
  padding-left: 24px;
  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
  :hover {
    border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  }
`;

const pokeballBeforeAnimation = keyframes`
  0% {
  }
  10% {
    border-radius: 0;
  }
  20% {
    border-radius: 0;
    height: 0;
  }
  30% {
    transform: rotate(45deg);
    border-radius: 0;
    height: 0;
    width: 40px;
    left: -1px;
    top: 18px;
  }
  40% {
    transform: rotate(45deg);
    border-radius: 0;
    height: 0;
    width: 40px;
    border: none;
    border-bottom: 2px solid black;
    left: 0;
    top: 18px;
  }
  100% {
    transform: rotate(45deg);
    border-radius: 0;
    height: 0;
    width: 40px;
    left: 0;
    top: 18px;
    border: none;
    border-bottom: 2px solid black;
  }
`;

const pokeballBeforeAnimationReverse = keyframes`
  100% {
    border: 2px solid black;
    
  }
  40% {
    border-radius: 0;
  }
  30% {
    border-radius: 0;
    border: 2px solid black;
    height: 0;
  }
  20% {
    transform: rotate(45deg);
    border-radius: 0;
    height: 0;
    width: 40px;
    left: -1px;
    border: 1px solid black;

    top: 18px;
  }
  10% {
    transform: rotate(45deg);
    border-radius: 0;
    height: 0;
    width: 40px;
    left: 0;
    top: 18px;
    border: 2px solid black;

  }
  0% {
    transform: rotate(45deg);
    border-radius: 0;
    height: 0;
    width: 40px;
    left: 0;
    top: 18px;
    border: none;
    border-bottom: 1px solid black;

  }
`;

const pokeballAfterAnimation = keyframes`
  0% {

  }
  100% {    
    background: none;
    transform: rotate(135deg);
    background: transparent;
  }
`;

const pokeballAfterAnimationReverse = keyframes`
  0% {    
    background: none;
    transform: rotate(135deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const zooming = keyframes`
  0% {
  }
  50% {
    transform: scale(0.9) rotate(20deg);

  }
  100% {
    transform: rotate(0deg);
  }
`;

export const ToggleButton = styled.div<{ inView: boolean; minimized: boolean }>`
  height: 40px;
  top: 10px;
  margin-left: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 40px;
  border: ${(props) =>
    !props.inView && !props.minimized ? "none" : "2px solid black"};
  background-color: ${(props) =>
    !props.inView && !props.minimized ? "transparent" : "white"};
  position: fixed;
  border-radius: 50%;

  ${(props) =>
    !props.inView &&
    css`
      position: fixed;
      top: 15px;
      @media (max-width: 800px) {
        bottom: 15px;
        top: auto;
        transform: scale(0.8);
      }
    `}

  :before, :after {
    content: " ";
    position: absolute;
  }

  :after {
    animation: ${(props) =>
      !props.inView && !props.minimized
        ? css`
            ${pokeballAfterAnimation} .25s linear normal forwards
          `
        : css`
            ${pokeballAfterAnimationReverse} .25s linear normal forwards
          `};
    height: 20px;
    transform-origin: 50% calc(100% - 2px);
    width: 40px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    background: red;
    display: inline-block;
    border-bottom: 2px solid black;
  }

  :before {
    animation: ${(props) =>
      !props.inView && props.minimized !== null && !props.minimized
        ? css`
            ${pokeballBeforeAnimation} .3s linear normal forwards
          `
        : css`
            ${pokeballBeforeAnimationReverse} .3s linear normal forwards
          `};
    z-index: 20;
    width: 7px;
    height: 7px;
    top: calc(50% - 4px);
    left: calc(50% - 5px);
    border-radius: 50%;
    background: white;
    border: 2px solid black;
  }
  animation: ${(props) => !props.inView && props.minimized && zooming} 3s
    ease-in-out infinite;
`;

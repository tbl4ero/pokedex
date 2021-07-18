import styled, { keyframes } from "styled-components";

const bgAnimation = (color: string) => keyframes`
  from {
    background: #EDEDED;
    opacity: 0;
  }
  to {
    opacity: 1;
    background: ${color};
  }
`;
export const SpinnerContainer = styled.div`
  margin: auto;
`;

export const PageContainer = styled.div<{ bg?: string }>`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  min-height: 100vh;
  animation: ${(props) => bgAnimation(props.bg)} 0.6s ease-in-out;
  background-color: rgb(${(props) => props.bg});
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

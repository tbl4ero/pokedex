import styled, { keyframes } from 'styled-components';

const bgAnimation = (color: string) => keyframes`
  from {
    background: white;
  }

  to {
    transform: ${color};
  }
`;

export const PageContainer = styled.div<{ bg?: string }>`
    display: flex;
    flex-direction: column;
    width: 100%;
    animation: ${(props) => bgAnimation(props.bg)} .5s ease-in-out;
    background-color: rgb(${props => props.bg});
`;

export const Container = styled.div`
  margin: 0 auto;
`;

import styled, { keyframes } from 'styled-components';

const bgAnimation = (color: string) => keyframes`
  from {
    background: #EDEDED;
  }

  to {
    background: ${color};
  }
`;

export const PageContainer = styled.div<{ bg?: string }>`
    display: flex;
    flex-direction: column;
    width: 100%;
    animation: ${(props) => bgAnimation(props.bg)} .8s ease-in-out;
    background-color: rgb(${props => props.bg});
`;

export const Container = styled.div`
  margin: 0 auto;
`;

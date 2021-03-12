import styled from 'styled-components';

export const PageContainer = styled.div<{ bg?: string }>`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: rgb(${props => props.bg});
`;

export const Container = styled.div`
  margin: 0 auto;
`;
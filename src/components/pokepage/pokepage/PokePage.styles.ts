import styled from "styled-components";


export const NameTitle = styled.h1`
  text-align: center;
  font-size: 80px;
  margin-bottom: 0;
  color: white;
  text-shadow: 0 0 12px rgb(0 0 0 / 25%);
  @media (max-width: 640px) {
    font-size: 60px;
  }
`;

export const Image = styled.img`
  margin-right: -80px;
  position: relative;
  z-index: 15;
  @media (max-width: 1120px) {
    max-height: 370px;
    margin-right: -50px;
  }
  @media (max-width: 690px) {
    margin-right: 0;
    max-height: 300px;
  }
`;

export const PageContainer = styled.div<{ direction?: string, align?: string, margin?: string }>`
  display: flex;
  margin: ${props => props.margin || '0 auto'};
  ${props => props.direction && `flex-direction: ${props.direction}` };
  flex-wrap: wrap;
  z-index: 15;
  align-items: flex-start;
  position: relative;
  justify-content: ${props => props.align || 'center'};
`;
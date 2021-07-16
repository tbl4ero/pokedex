import styled from "styled-components";


export const ChartContainer = styled.div<{ direction?: string, align?: string, margin?: string }>`
  width: 350px;
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  padding: 30px;
  margin: auto;
  @media (max-width: 400px) {
    width: 300px;
  }
`;

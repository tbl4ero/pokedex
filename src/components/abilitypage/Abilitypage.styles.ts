import styled from "styled-components";

export const Conrainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameTitle = styled.h1`
  text-align: center;
  font-size: 80px;
  color: white;
  text-shadow: -2px 2px 1px black, 0 2px 1px black;
`;

export const DescriptionBox = styled.div`
  background: rgba(0, 0, 0, 0.2);
  color: white;
  padding: 30px;
  max-width: 500px;
`;
import styled from "styled-components";
import { typeColors } from "./../../../constants";


export const AttributeHeader = styled.h2`
  color: white;
  font-size: 30px;
`;

export const NameTitle = styled.h1`
  text-align: center;
  font-size: 80px;
  color: white;
  text-shadow: -2px 2px 1px black, 0 2px 1px black;
  @media (max-width: 640px) {
    font-size: 60px;
  }
`;

export const PropertiesContainer = styled.div<{ direction?: string }>`
  display: flex;
  padding: 20px;
  flex-direction: ${(props) => props.direction};
  @media (max-width: 800px) and (min-width: 640px) {
    margin-left: 100px;
  }
`;

export const TypeElement = styled.div<{ type: string }>`
  display: flex;
  padding: 5px;
  background: ${(props) => typeColors[props.type]};
  color: white;
  font-size: 15px;
  margin-left: 5px;
  border-radius: 3px;
`;

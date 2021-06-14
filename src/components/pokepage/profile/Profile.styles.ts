import styled from "styled-components";
import { typeColors } from "../../../constants";


export const PageContainer = styled.div<{
  direction?: string;
  align?: string;
  margin?: string;
}>`
  display: flex;
  margin: ${(props) => props.margin || "0 auto"};
  ${(props) => props.direction && `flex-direction: ${props.direction}`};
  flex-wrap: wrap;
  z-index: 15;
  align-items: flex-start;
  position: relative;
  justify-content: ${(props) => props.align || "center"};
`;

export const TypeElement = styled.div<{ type: string }>`
  display: flex;
  padding: 5px;
  background: ${(props) => typeColors[props.type]};
  border-radius: 50%;
  margin-left: 5px;
  border: 2px solid white;
`;

export const ProfileElement = styled.div`
  text-transform: uppercase;
  padding: 10px 15px;
  height: 20px;
  margin: 5px;
  background: rgba(255, 255, 255, 0.75);
  font-weight: bolder;
  border-radius: 14px;
  box-shadow: 0 20px 25px -10px rgb(0 0 0 / 15%);
`;

export const CenteredBox = styled.div`
  margin: 0 auto;
`;
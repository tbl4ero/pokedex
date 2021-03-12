import { Link } from "react-router-dom";
import styled from "styled-components";

import { typeColors } from "../../constants";

export const StyledCard = styled.div<{ background: string }>`
  border-radius: 14px;
  font-family: "Roboto";
  flex-direction: column;
  background: ${props => typeColors[props.background]};
  transition: 0.2s ease-in-out;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 2px 0px rgba(209, 174, 209, 1);
  padding: 10px 20px;
  :hover {
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.15);
  }
`;

export const TypeElement = styled.div<{ type: string }>`
  display: flex;
  padding: 5px;
  font-weight: 500;
  background: ${(props) => typeColors[props.type]};
  color: white;
  font-size: 12px;
  margin-left: 5px;
  border: 2px solid white;
  border-radius: 8px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const NameTitle = styled.h2`
  margin-top: -40px;
  letter-spacing: 5px;
  color: #fff;
  text-shadow: -2px 2px 1px black, 0 2px 1px black;
`;

export const TypesContainer = styled.div`
  display: flex;
  align-self: flex-start;
`;
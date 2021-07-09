import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { typeColors } from "../../constants";

const feadIn = keyframes`
  from {
    opacity: 0;
    margin-bottom: -20px;
  }
  to {
    opacity: 1;
    margin-bottom: 0;
  }
`;

export const StyledCard = styled.div<{ background: string }>`
  border-radius: 14px;
  box-sizing: border-box;
  height: 100%;
  font-family: "Roboto";
  flex-direction: column;
  background: ${props => typeColors[props.background]};
  transition: 0.2s ease-in-out;
  display: flex;
  align-items: center;
  box-shadow: 2px 4px 2px 1px rgb(209 174 209);
  padding: 15px;
  animation: ${feadIn} .3s ease-in-out;
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
  font-size: 13px;
  letter-spacing: .5px;
  margin-left: 5px;
  border: 2px solid white;
  border-radius: 8px;
`;

export const StyledLink = styled(Link)<{ hidden: boolean }>`
  text-decoration: none;
  display: ${props => props.hidden ? 'none' : 'inline'};
`;

export const NameTitle = styled.h2`
  text-align: center;
  letter-spacing: 5px;
  color: #fff;
  text-shadow: -2px 2px 1px black, 0 2px 1px black;
`;

export const TypesContainer = styled.div`
  margin-top: auto;
  display: flex;
  align-self: flex-start;
`;

export const IdContainer = styled.div`
  text-align: right;
  flex: 1;
  font-size: 18px;
  align-self: center;
  color: black;
`;
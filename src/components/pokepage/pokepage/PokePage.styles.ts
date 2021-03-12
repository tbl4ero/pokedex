import styled from "styled-components";
import { Link } from 'react-router-dom';
import { typeColors } from "../../../constants";

export const NameTitle = styled.h1`
  text-align: center;
  font-size: 80px;
  color: white;
  text-shadow: -2px 2px 1px black, 0 2px 1px black;
  @media (max-width: 640px) {
    font-size: 60px;
  }
`;

export const TypeElement = styled.div<{ type: string }>`
  display: inline;  
  padding: 8px;
  background: ${(props) => typeColors[props.type]};
  color: white;
  font-size: 18px;
  margin-left: 5px;
  border-radius: 3px;
`;

export const AbilitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px; 
`;

export const StyledLink = styled(Link)`
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 20px;
  margin: 1px 0;
  :hover {
    color: #f5f5f5;
  }
`;
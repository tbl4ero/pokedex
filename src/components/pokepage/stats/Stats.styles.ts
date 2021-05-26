import styled from "styled-components";
import { typeColors } from "../../../constants";

export const StyledBar = styled.div<{ statValue: number }>`
  height: 10px;
  width: 200px;
  position: relative;
  background: #333;
  border-radius: 1px;
  margin-right: 10px;
  ::after {
    content: "";
    left: 0;
    width: ${(props) => (props.statValue / 600) * 100}%;
    background: white;
    height: 10px;
    border-radius: 0 3px 3px 0;   
    position: absolute;
  }
  @media (max-width: 415px) {
    width: 100px;
  }
`;

export const StyledStat = styled.div`
  transform: skewY(-5deg);
  display: flex;
  margin-top: 20px;
  align-items: center;
  color: white;
  @media (max-width: 1010px) {
    transform: none;
  }
`;

export const StatsBox = styled.div`
  transform: skewY(5deg);
  position: relative;
  z-index: 40;
  max-height: 300px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 30px;
  box-shadow: -10px 10px 0px 0px rgba(0, 0, 0, 0.75);
  margin-top: 40px;

  @media (max-width: 640px) {
    box-shadow: none;
    transform: none;
    flex: 1;
  }
  @media (max-width: 1010px) {
    transform: none;

  }
`;

export const Image = styled.img`
  margin-right: -80px;
  position: relative;
  z-index: 40;
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

export const TypeElement = styled.div<{ type: string }>`
  display: flex;  
  padding: 5px;
  background: ${(props) => typeColors[props.type]};
  border-radius: 50%;
  margin-left: 5px;
  border: 2px solid white;
`;

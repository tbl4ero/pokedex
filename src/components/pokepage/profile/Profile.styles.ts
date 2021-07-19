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

export const CloseTooltipButton = styled.div`
  margin-left: auto;
  cursor: pointer;
  font-size: 22px;
  margin-bottom: 10px;
  @media (hover: hover) and (pointer: fine) {
    display: none;
  }
`;

export const TooltipBox = styled.div<{ cursorPos: { x: number; y: number } }>`
  z-index: 99999;
  position: absolute;
  left: ${(props) => props.cursorPos.x - 10}px;
  bottom: ${(props) => -props.cursorPos.y + 40}px;
  width: 220px;
  @media (hover: none) and (pointer: coarse) {
    left: -25%;
    bottom: 30px;
  }
  display: flex;
  flex-wrap: wrap;
  color: black;
  max-width: 300px;
  transform: translate(-40px);
  padding: 10px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 4px 16px 2px rgba(0, 0, 0, 0.62);
`;

export const TooltipElementContainer = styled.li`
  color: white;
  margin: 5px 0;
  cursor: pointer;
  position: relative;
  display: flex;
  font-size: 18px;
  border-bottom: 2px dashed black;
  padding-bottom: 2px;
  text-transform: uppercase;
`;

export const TooltipTitle = styled.strong`
  margin-top: auto;
`;

export const AbilityList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AbilityTitle = styled.h2`
  color: white;
  font-weight: 500;
  text-shadow: rgb(0 0 0 / 25%) 0px 0px 12px;
`;

export const ProfileList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 270px;
  height: 100px;
`;

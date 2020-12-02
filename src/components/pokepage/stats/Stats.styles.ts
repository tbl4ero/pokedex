import styled from "styled-components";

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
    position: absolute;
  }
  @media (max-width: 410px) {
    width: 100px;
  }
`;

export const StyledStat = styled.div`
  transform: skewY(-5deg);
  display: flex;
  margin-top: 20px;
  color: white;
  @media (max-width: 640px) {
    transform: none;
  }
`;

export const StatsBox = styled.div`
  transform: skewY(5deg);
  max-height: 300px;
  background: rgba(0, 0, 0, 0.2);
  color: white;
  padding: 30px;
  box-shadow: -10px 10px 0px 0px rgba(0, 0, 0, 0.75);

  @media (max-width: 640px) {
    box-shadow: none;
    transform: none;
    width: 100%;
  }
`;

export const Image = styled.img`
  margin-right: -80px;
  @media (max-width: 640px) {
    max-height: 300px;
    max-width: 300px;
    margin-right: unset;
  }
`;
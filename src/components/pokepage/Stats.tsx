import React from "react";
import { statTypes } from "../../constants";
import styled from "styled-components";

const StyledBar = styled.div<{ statValue: number }>`
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

const StyledStat = styled.div`
  transform: skewY(-5deg);
  display: flex;
  margin-top: 20px;
  color: white;
  @media (max-width: 640px) {
    transform: none;
  }
`;

const StatsBox = styled.div`
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

const Image = styled.img`
  margin-right: -80px;
  @media (max-width: 640px) {
    max-height: 300px;
    max-width: 300px;
    margin-right: unset;
  }
`;

const StatBar: React.FC<{ statValue: number; statName: string }> = (props) => {
  return (
    <StyledStat>
      <div style={{ width: "120px" }}>{statTypes[props.statName]}</div>
      <StyledBar statValue={props.statValue} />
      {props.statValue}
    </StyledStat>
  );
};

const Stats: React.FC<any> = (props) => {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Image
          src={props.pokemon.sprites.other["official-artwork"].front_default}
        />
        <StatsBox>
          <h1>STATS</h1>

          {props.pokemon.stats.map(
            (stat: { base_stat: number; stat: { name: string } }) => (
              <StatBar statValue={stat.base_stat} statName={stat.stat.name} />
            )
          )}
        </StatsBox>
      </div>
    </React.Fragment>
  );
};

export default Stats;

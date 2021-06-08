import React from "react";
import { statTypes } from "../../../constants";
import { StyledBar, StyledStat, StatsBox, Image, PageContainer } from './Stats.styles';


const StatBar: React.FC<{ statValue: number; statName: string }> = (props) => {
  return (
    <StyledStat>
      <div style={{ width: "120px", textShadow: '0 0 12px rgb(0 0 0 / 5%)'}}>{statTypes[props.statName]}</div>
      <StyledBar statValue={props.statValue} />
      {props.statValue}
    </StyledStat>
  );
};

const Stats: React.FC<any> = (props) => {
  return (
    <React.Fragment>
     <PageContainer>
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
      </PageContainer>
    </React.Fragment>
  );
};

export default Stats;

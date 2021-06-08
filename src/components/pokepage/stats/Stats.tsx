import React from "react";
import { statTypes } from "../../../constants";
import AbilityPage from "../../abilitypage/AbilityPage";
import { StyledBar, StyledStat, StatsBox, Image, PageContainer, TypeElement } from './Stats.styles';


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
        <PageContainer direction="column" margin="0">
          <PageContainer align="flex-start" margin="20px 0">
              {props.pokemon.types.map((type: any) => (
              <TypeElement type={type.type.name}>
                <img alt="" height="20" style={{ color: 'black', margin: '5px' }} src={`/icons/${type.type.name}.svg`} />
              </TypeElement>
              ))}
          </PageContainer>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '270px',
          height: '100px'
          }}>
            <div style={{
              padding: '10px 15px',
              background: 'rgba(255,255,255,.75)',
              height: '20px',
              fontWeight: 'bolder',
              textTransform: 'uppercase',
              margin: '5px',
              borderRadius: '14px',
              boxShadow: '0 20px 25px -10px rgb(0 0 0 / 15%)'
            }}>
              Weight: {props.pokemon.weight}
            </div>
            <div style={{
              textTransform: 'uppercase',
              padding: '10px 15px',
              height: '20px',
              margin: '5px',
              background: 'rgba(255,255,255,.75)',
              fontWeight: 'bolder',
              borderRadius: '14px',
              boxShadow: '0 20px 25px -10px rgb(0 0 0 / 15%)'
            }}>
              Height: {props.pokemon.height}
            </div>
            <div style={{
              textTransform: 'uppercase',
              padding: '10px 15px',
              height: '20px',
              margin: '5px',
              background: 'rgba(255,255,255,.75)',
              fontWeight: 'bolder',
              borderRadius: '14px',
              boxShadow: '0 20px 25px -10px rgb(0 0 0 / 15%)'
            }}>
              Area: {props.pokemon.habitat.name}
            </div>
          </div>
          <div style={{
            marginLeft: '5px'
           }}>
            <h2 style={{ 
              color: 'white',
              fontWeight: 500,
              textShadow: 'rgb(0 0 0 / 25%) 0px 0px 12px'
             }}>ABILIITIES:</h2>
             <ul style={{ padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
               {props.pokemon.abilities.map((ability: any) => <li style={{
                 color: 'white',
                 listStyle: 'none',
                 margin: '10px 0',
                 cursor: 'pointer',
                 fontSize: '18px',
                 paddingBottom: '2px',
                 borderBottom: '2px dotted black',
                 textTransform: 'uppercase',
               }}>{ability.ability.name}</li>)}
             </ul>
          </div>
        </PageContainer>
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

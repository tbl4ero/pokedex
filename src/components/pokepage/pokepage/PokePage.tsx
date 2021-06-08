import React from "react";

import Stats from "../stats/Stats";
import { setPokemon } from "../../../store/actions";
import { NameTitle, TypeElement, StyledLink, AbilitiesContainer } from './PokePage.styles';
import SamplePage from "../../samplepage/SamplePage";

const PokeComp = (props: any) => (
  <>
    <NameTitle>{props.match.params.name}</NameTitle>
    <h1 style={{
      textAlign: 'center',
      color: 'rgba(255,255,255,.7)',
      fontWeight: 'bolder',
      letterSpacing: '2px',
      marginTop: '10px',
      fontSize: '45px',
      marginBottom: '25px',
      textShadow: '0 0 12px rgb(0 0 0 / 25%)'
    }}>
      #{`${props.data.id}`.padStart(3, '0')}
    </h1>
    
    <Stats pokemon={props.data} />
  </>
);

const PokePage = (props: any) => (
  <SamplePage 
    WrappedComponent={PokeComp}
    bg={props.color}
    match={props.match} 
    setData={setPokemon} 
    selector="currentPokemon" 
    history={props.history} 
  />
);


export default PokePage;

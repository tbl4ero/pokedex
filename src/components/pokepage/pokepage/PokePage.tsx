import React from "react";

import { Link } from "react-router-dom";
import Stats from "../stats/Stats";
import { setPokemon } from "../../../store/actions";
import { 
 AttributeHeader, NameTitle, PropertiesContainer, TypeElement 
} from './PokePage.styles';
import SamplePage from "../../samplepage/SamplePage";


const PokeComp = (props: any) => {
  console.log(props);
  return (<>
    <NameTitle>{props.match.params.name}</NameTitle>
    <Stats pokemon={props.data} />
    <PropertiesContainer direction="column">
      <AttributeHeader>TYPES</AttributeHeader>
      <PropertiesContainer>
        {props.data.types.map((type: any) => (
          <TypeElement type={type.type.name}>
            {type.type.name}
          </TypeElement>
        ))}
      </PropertiesContainer>
    </PropertiesContainer>
    <PropertiesContainer direction="column">
      <AttributeHeader>ABILITES</AttributeHeader>
      {props.data.abilities.map((ability: any) => (
        <Link to={`/ability/${ability.ability.name}`}>
          {ability.ability.name.split("-").join(" ")}
        </Link>
      ))}
    </PropertiesContainer>
  </>);
      }

const PokePage = (props: any) => (
  <SamplePage 
    WrappedComponent={PokeComp} 
    match={props.match} 
    setData={setPokemon} 
    selector="currentPokemon" 
    history={props.history} 
  />

);
export default PokePage;

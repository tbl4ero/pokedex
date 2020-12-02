import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import GoBack from "../../GoBack";
import { Link } from "react-router-dom";
import Spinner from "../../../Spinner";
import Stats from "../stats/Stats";
import StoreInterface from "../../../interfaces/store.interface";
import { setPokemon } from "../../../store/actions";
import { 
  PageContainer, Container, AttributeHeader, NameTitle, PropertiesContainer, TypeElement 
} from './PokePage.styles';

const PokePage: React.FC<any> = (props) => {
  const [loading, setLoading] = useState(true);
  const { pokemon } = useSelector((state: StoreInterface) => ({
    pokemon: state.currentPokemon,
    loading: state.loading,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(setPokemon(props.match.params.name, setLoading));
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <PageContainer>
            <GoBack route={props.history.goBack} />
            <Container>
              <NameTitle>{pokemon.name}</NameTitle>
              <Stats pokemon={pokemon} />
              <PropertiesContainer direction="column">
                <AttributeHeader>TYPES</AttributeHeader>
                <PropertiesContainer>
                  {pokemon.types.map((type: any) => (
                    <TypeElement type={type.type.name}>
                      {type.type.name}
                    </TypeElement>
                  ))}
                </PropertiesContainer>
              </PropertiesContainer>
              <PropertiesContainer direction="column">
                <AttributeHeader>ABILITES</AttributeHeader>
                {pokemon.abilities.map((ability: any) => (
                  <Link to={`/ability/${ability.ability.name}`}>
                    {ability.ability.name.split("-").join(" ")}
                  </Link>
                ))}
              </PropertiesContainer>
            </Container>
          </PageContainer>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default PokePage;

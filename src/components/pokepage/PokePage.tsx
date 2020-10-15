import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import GoBack from "../GoBack";
import { Link } from "react-router-dom";
import Spinner from "./../../Spinner";
import Stats from "./Stats";
import StoreInterface from "./../../interfaces/store.interface";
import { setPokemon } from "../../store/actions";
import styled from "styled-components";
import { typeColors } from "../../constants";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  margin: 0 auto;
`;

const AttributeHeader = styled.h2`
  color: white;
  font-size: 30px;
`;

const NameTitle = styled.h1`
  text-align: center;
  font-size: 80px;
  color: white;
  text-shadow: -2px 2px 1px black, 0 2px 1px black;
  @media (max-width: 640px) {
    font-size: 60px;
  }
`;

const PropertiesContainer = styled.div<{ direction?: string }>`
  display: flex;
  padding: 20px;
  flex-direction: ${(props) => props.direction};
  @media (max-width: 800px) and (min-width: 640px) {
    margin-left: 100px;
  }
`;

const TypeElement = styled.div<{ type: string }>`
  display: flex;
  padding: 5px;
  background: ${(props) => typeColors[props.type]};
  color: white;
  font-size: 15px;
  margin-left: 5px;
  border-radius: 3px;
`;

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

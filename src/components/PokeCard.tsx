import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import { setLoading } from "../store/actions";
import styled from "styled-components";
import { typeColors } from "../constants";
import { useDispatch } from "react-redux";

const StyledCard = styled.div`
  border-radius: 14px;
  background: #ddfff7;
  font-family: "Roboto";
  flex-direction: column;
  transition: 0.2s ease-in-out;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 2px 0px rgba(209, 174, 209, 1);
  padding: 10px 20px;
  :hover {
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.15);
  }
`;

const TypeElement = styled.div<{ type: string }>`
  display: flex;
  padding: 5px;
  background: ${(props) => typeColors[props.type]};
  color: white;
  font-size: 12px;
  margin-left: 5px;
  border-radius: 3px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const NameTitle = styled.h2`
  margin-top: -40px;
  letter-spacing: 5px;
  transform: skewY(5deg);
  color: #fff;
  text-shadow: -2px 2px 1px black, 0 2px 1px black;
`;

const TypesContainer = styled.div`
  display: flex;
  align-self: flex-start;
`;

const PokeCard: React.FC<any> = (props) => {
  const [pokemon, setLocalPokemon] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(props.pokemon.url)
      .then((resp) => resp.json())
      .then((data) => setLocalPokemon(data));
  }, []);

  return (
    <React.Fragment>
      {pokemon ? (
        <StyledLink
          onClick={() => dispatch(setLoading(true))}
          to={`pokemon/${pokemon.name}`}
        >
          <StyledCard>
            <img
              height="150"
              width="150"
              src={pokemon.sprites.other["official-artwork"].front_default}
            ></img>
            <NameTitle>{pokemon.name.toUpperCase()}</NameTitle>
            <TypesContainer>
              {pokemon.types.map((type: any) => (
                <TypeElement key={type.type.name} type={type.type.name}>
                  {type.type.name}
                </TypeElement>
              ))}
            </TypesContainer>
          </StyledCard>
        </StyledLink>
      ) : (
        <Spinner />
      )}
    </React.Fragment>
  );
};

export default PokeCard;

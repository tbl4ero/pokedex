import React, { useEffect, useState } from "react";

import Spinner from "../../Spinner";
import { useDispatch } from "react-redux";

import { TypeElement, TypesContainer, NameTitle, StyledCard, StyledLink } from './PokeCard.styles'; 
import { setLoading } from "../../store/actions";

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

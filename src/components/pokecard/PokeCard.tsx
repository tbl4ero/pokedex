import React, { useEffect, useState } from "react";

import Spinner from "../../Spinner";
import { useDispatch } from "react-redux";

import { TypeElement, TypesContainer, NameTitle, StyledCard, StyledLink, IdContainer } from './PokeCard.styles'; 
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
          <StyledCard background={pokemon.types[0].type.name}>
            <img
              height="120"
              src={pokemon.sprites.other["official-artwork"].front_default}
            ></img>
            <NameTitle>{pokemon.name.toUpperCase()}</NameTitle>
            <TypesContainer style={{ width: '100%' }}>
              {pokemon.types.map((type: any) => (
                  <img alt="" height="20" style={{ color: 'black', margin: '5px' }} src={`/icons/${type.type.name}.svg`} />
              ))}
              <IdContainer>
                #{`${pokemon.id}`.padStart(3, '0')}
              </IdContainer>
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

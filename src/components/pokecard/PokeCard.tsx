import React from "react";

import Spinner from "../../Spinner";

import {
  TypesContainer,
  NameTitle,
  StyledCard,
  StyledLink,
  IdContainer,
} from "./PokeCard.styles";
import { PokemonCard } from "./PokeCard.types";

const PokeCard = (props: PokemonCard) => (
  <>
    {props.name ? (
      <StyledLink to={`/pokedex/pokemon/${props.name}`}>
        <StyledCard background={props.types[0].type.name}>
          <img
            height="130"
            src={props.sprites.other["official-artwork"].front_default}
          ></img>
          <NameTitle>{props.name.toUpperCase()}</NameTitle>
          <TypesContainer>
            {props.types.map((type) => (
              <img
                alt=""
                height="20"
                style={{ color: "black", margin: "5px" }}
                src={`/pokedex/icons/${type.type.name}.svg`}
              />
            ))}
            <IdContainer>#{`${props.id}`.padStart(3, "0")}</IdContainer>
          </TypesContainer>
        </StyledCard>
      </StyledLink>
    ) : (
      <Spinner />
    )}
  </>
);

export default PokeCard;

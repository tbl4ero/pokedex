import React from "react";

import Spinner from "../../Spinner";

import {
  TypesContainer,
  NameTitle,
  StyledCard,
  StyledLink,
  IdContainer,
} from "./PokeCard.styles";

const PokeCard = (props: any) => (
  <>
    {props.pokemon ? (
      <StyledLink hidden={props.hidden} to={`pokemon/${props.pokemon.name}`}>
        <StyledCard background={props.pokemon.types[0].type.name}>
          <img
            height="130"
            src={props.pokemon.sprites.other["official-artwork"].front_default}
          ></img>
          <NameTitle>{props.pokemon.name.toUpperCase()}</NameTitle>
          <TypesContainer>
            {props.pokemon.types.map((type: any) => (
              <img
                alt=""
                height="20"
                style={{ color: "black", margin: "5px" }}
                src={`/icons/${type.type.name}.svg`}
              />
            ))}
            <IdContainer>#{`${props.pokemon.id}`.padStart(3, "0")}</IdContainer>
          </TypesContainer>
        </StyledCard>
      </StyledLink>
    ) : (
      <Spinner />
    )}
  </>
);

export default PokeCard;

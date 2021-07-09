import React, { useEffect, useState } from "react";

import Spinner from "../../Spinner";
import { useDispatch } from "react-redux";

import {
  TypesContainer,
  NameTitle,
  StyledCard,
  StyledLink,
  IdContainer,
} from "./PokeCard.styles";
import { setLoading } from "../../store/actions";

const PokeCard = (props: any) => {
  const dispatch = useDispatch();

  return (
    <>
      {props.pokemon ? (
        <StyledLink
          hidden={props.hidden}
          onClick={() => dispatch(setLoading(true))}
          to={`pokemon/${props.pokemon.name}`}
        >
          <StyledCard background={props.pokemon.types[0].type.name}>
            <img
              height="130"
              src={
                props.pokemon.sprites.other["official-artwork"].front_default
              }
            ></img>
            <NameTitle>{props.pokemon.name.toUpperCase()}</NameTitle>
            <TypesContainer style={{ width: "100%" }}>
              {props.pokemon.types.map((type: any) => (
                <img
                  alt=""
                  height="20"
                  style={{ color: "black", margin: "5px" }}
                  src={`/icons/${type.type.name}.svg`}
                />
              ))}
              <IdContainer>
                #{`${props.pokemon.id}`.padStart(3, "0")}
              </IdContainer>
            </TypesContainer>
          </StyledCard>
        </StyledLink>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default PokeCard;

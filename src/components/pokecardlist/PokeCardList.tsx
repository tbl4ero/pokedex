import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PokeCard from "../pokecard/PokeCard";
import Spinner from "../../Spinner";
import Header from "./header/Header";
import StoreInterface from "../../types/store.interface";
import { getCards } from "../../store/actions";
import { StyledList, CardGrid } from "./PokeCardList.styles";
import useIntersection from "../../hooks/useIntersection";

const CardList = () => {
  const { pokemons, searchValue } = useSelector((state: StoreInterface) => ({
    pokemons: state.pokemonList,
    searchValue: state.searchValue,
  }));

  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [targetRef, inView] = useIntersection({ threshold: 1 });

  useEffect(() => {
    if (inView) {
      setCount(count + 60);
    }
  }, [inView]);

  useEffect(() => {
    dispatch(getCards(setLoading));
  }, []);

  return (
    <>
      <Header />
      <StyledList>
        <CardGrid>
          {pokemons.slice(0, count).map((pokemon, id) => (
            <PokeCard
              hidden={
                searchValue !== "" &&
                !new RegExp(searchValue).test(pokemon.name)
              }
              key={pokemon.name}
              pokemon={pokemon}
            />
          ))}
        </CardGrid>
        <Spinner intersectionRef={targetRef} />
      </StyledList>
    </>
  );
};

export default CardList;

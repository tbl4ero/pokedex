import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PokeCard from "../pokecard/PokeCard";
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
  const dispatch = useDispatch();
  const [targetRef, inView] = useIntersection({ threshold: 1 });

  useEffect(() => {
    if (inView) {
      setCount(count+50);
    }
  }, [inView]);

  useEffect(() => {
    setCount(50);
  }, [searchValue]);

  useEffect(() => {
    if(pokemons.length === 0) {
      dispatch(getCards());
    }
  }, []);

  return (
    <>
      <Header />
      <StyledList>
        <CardGrid>
          {pokemons
            .filter(({ name }) => new RegExp(searchValue).test(name))
            .slice(0, count)
            .map((pokemon) => (
              <PokeCard key={pokemon.name} pokemon={pokemon} />
            ))}
        </CardGrid>
        <div style={{ padding: '5px', margin: '10px 0'}} ref={targetRef}>
        </div>
      </StyledList>
    </>
  );
};

export default CardList;

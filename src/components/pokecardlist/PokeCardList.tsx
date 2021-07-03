import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PokeCard from "../pokecard/PokeCard";
import Spinner from "../../Spinner";
import Header from "./header/Header";
import StoreInterface from "../../types/store.interface";
import { getCards } from "../../store/actions";
import { StyledList, CardGrid } from "./PokeCardList.styles";
import useIntersection from "../../hooks/useIntersection";

interface PokemonList {
  name: string;
  url: string;
}

const CardList = (props: PokemonList) => {
  const { pokemons, cardCount, searchValue } = useSelector((state: StoreInterface) => ({
    pokemons: state.pokemonList.list,
    cardCount: state.pokemonList.count,
    searchValue: state.searchValue
  }));

  const [loading, setLoading] = useState(true);
  const countRef = useRef<any>();
  countRef.current = cardCount;
  const dispatch = useDispatch();
  const [targetRef, inView] = useIntersection({ threshold: 0.5 });

  useEffect(() => {
    dispatch(getCards(setLoading, countRef.current));
  }, [inView]);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Header />
      <StyledList>
        <CardGrid>
          {pokemons
            ?.filter((pokemon) => new RegExp(searchValue).test(pokemon.name))
            .map((pokemon, id) => (
              <PokeCard key={pokemon.name} pokemon={pokemon} />
            ))}
        </CardGrid>
        <Spinner intersectionRef={targetRef} />
      </StyledList>
    </div>
  );
};

export default CardList;

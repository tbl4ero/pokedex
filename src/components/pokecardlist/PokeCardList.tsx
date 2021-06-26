import React, { useState, useRef } from "react";
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

const CardList: React.FC<PokemonList> = (props) => {
  const { pokemons, cardCount } = useSelector((state: StoreInterface) => ({
    pokemons: state.pokemonList.list,
    cardCount: state.pokemonList.count,
  }));
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const countRef = useRef<any>();
  countRef.current = cardCount;
  const dispatch = useDispatch();
  const targetRef = useIntersection(
    () => dispatch(getCards(setLoading, countRef.current)),
    { threshold: 0.5 }
  );

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
      </StyledList>
      <Spinner intersectionRef={targetRef} />
    </div>
  );
};

export default CardList;

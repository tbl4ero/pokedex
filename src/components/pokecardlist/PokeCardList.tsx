import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PokeCard from "../pokecard/PokeCard";
import Spinner from "../../Spinner";
import StoreInterface from "../../types/store.interface";
import { getInitialCards } from "../../store/actions";
import { StyledList, SearchField, CardGrid } from './PokeCardList.styles';

interface PokemonList {
  name: string;
  url: string;
};

const CardList: React.FC<PokemonList> = (props) => {
  const { pokemons } = useSelector((state: StoreInterface) => ({
    pokemons: state.pokemonList,
    loading: state.loading,
  }));
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialCards(setLoading));
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <StyledList>
          <SearchField
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search pokemon..."
            value={searchValue}
          />
          <CardGrid>
            {pokemons &&
              pokemons
                .filter((pokemon) => new RegExp(searchValue).test(pokemon.name))
                .map((pokemon) => (
                  <PokeCard key={pokemon.name} pokemon={pokemon} />
                ))}
          </CardGrid>
        </StyledList>
      )}
    </React.Fragment>
  );
};

export default CardList;

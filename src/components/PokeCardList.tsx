import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PokeCard from "./PokeCard";
import { PokemonList } from "./../interfaces/pokemons.interface";
import Spinner from "./../Spinner";
import StoreInterface from "./../interfaces/store.interface";
import { getInitialCards } from "./../store/actions";
import styled from "styled-components";

const StyledList = styled.div`
  max-width: 1200px;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
`;

const SearchField = styled.input`
  padding: 10px 0;
  text-indent: 10px;
  width: 100%;
  margin: 10px 0;
  border-radius: 12px;
  outline: none;
  border: none;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  padding: 10px;
  justify-content: center;
  grid-gap: 20px;
`;

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

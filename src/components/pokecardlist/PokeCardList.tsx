import React, { FC, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import PokeCard from "../pokecard/PokeCard";
import Spinner from "../../Spinner";
import StoreInterface from "../../types/store.interface";
import { getInitialCards } from "../../store/actions";
import { StyledList, SearchField, CardGrid, StyledHeader } from './PokeCardList.styles';
import useIntersection from "../../hooks/useIntersection";

const Header: FC = (props) => {

  const [scrollY, setScrollY] = useState(0);
  const [minimized, minimize] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', e => setScrollY(window.scrollY))
  }, [])

  return (
    <>
      <StyledHeader  scrolled={scrollY} minimized={minimized} onClick={() => minimize(!minimized)} >
        <div style={{ paddingLeft: '40px', margin: 'auto 0' }}>
          <img  style={{ 
            marginRight: "auto",
          }} height="50" src="/pokeball.png" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <SearchField
              // onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search pokemon..."
              // value={searchValue}
          />
          <img  style={{
            marginLeft: '-17px' 
          }} height="15" src="/loupe.svg" />
        </div>
        
      </StyledHeader>
    </>
  );
} 

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
  const targetRef = useIntersection(() => console.log(1));  

  useEffect(() => {
    dispatch(getInitialCards(setLoading));
  }, [])

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <StyledList>
        <CardGrid>
          {pokemons &&
            pokemons
              .filter((pokemon) => new RegExp(searchValue).test(pokemon.name))
              .map((pokemon, id) => (
                <PokeCard key={pokemon.name} pokemon={pokemon} />
              ))}
        </CardGrid>
      </StyledList>
      {loading ? (
      <Spinner />
      ) : ""} 
        <span style={{ height: '10px', width: '10px', background: 'red'}} ref={targetRef}  />
    </div>
  );
};

export default CardList;

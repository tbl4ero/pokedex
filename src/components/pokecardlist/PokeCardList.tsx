import React, { FC, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import PokeCard from "../pokecard/PokeCard";
import Spinner from "../../Spinner";
import StoreInterface from "../../types/store.interface";
import { getCards } from "../../store/actions";
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
  const { pokemons, cardCount } = useSelector((state: StoreInterface) => ({
    pokemons: state.pokemonList.list,
    cardCount: state.pokemonList.count
  }));
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const countRef = useRef<any>();
  countRef.current =  cardCount;
  const dispatch = useDispatch();
  const targetRef = useIntersection(() => dispatch(getCards(setLoading, countRef.current)), { threshold: '0.5' });  

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div>{ cardCount }</div>
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
      <Spinner intersectionRef={targetRef} />
    </div>
  );
};

export default CardList;

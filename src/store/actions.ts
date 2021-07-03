import { prominent } from "color.js";

export const setLoading = (loading: boolean) => ({
  type: "SET_LOADING",
  loading,
});

export const setPokemon =
  (pokemon: any, localLoader: Function) => async (dispatch: Function) => {
    const pokemonData = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    ).then((resp) => resp.json());
    const speciesData = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
    ).then((resp) => resp.json());
    const bgColor = await prominent(
      pokemonData.sprites.other["official-artwork"].front_default
    ).then((colors) => colors[2].toString());
    const abilities = await Promise.all(
      pokemonData.abilities.map((ability: any) =>
        fetch(`https://pokeapi.co/api/v2/ability/${ability.ability.name}`).then(
          (resp) => resp.json()
        )
      )
    );
    const data = { ...pokemonData, ...speciesData, bgColor, ads: abilities };
    dispatch({
      type: "SET_POKEMON",
      pokemon: data,
    });
    localLoader(false);
  };

export const setAbility =
  (ability: any, localLoader: Function) => async (dispatch: Function) => {
    const newAbility = await fetch(
      `https://pokeapi.co/api/v2/ability/${ability}`,
      { mode: "cors" }
    ).then((resp) => resp.json());
    dispatch({
      type: "SET_ABILITY",
      ability: newAbility,
    });
    localLoader(false);
  };

export const getCards =
  (localLoader: Function, count: any) => async (dispatch: Function) => {
    const list = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=30&offset=${count}`
    ).then((resp) => resp.json());
    dispatch({
      type: "SET_CARDS",
      cards: list.results,
    });
    localLoader(false);
  };

export const setSearchValue = (query: string) => ({
  type: "SET_SEARCH_QUERY",
  query,
});

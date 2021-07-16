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
  () => async (dispatch: Function) => {
    let counter = 0;
    const fetchAllPokemons: any = async () => {
      if (counter >= 1150) {
        return;
      }
      const { results } = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${counter}`
      ).then((resp) => resp.json());
      let list = await Promise.all([
        ...results.map((url: any) =>
          fetch(url.url).then((resp) => resp.json())
        ),
      ]);
      list = list.map(({ name, types, sprites, id }: any) => ({
        name,
        types,
        sprites,
        id,
      }));
      dispatch({
        type: "SET_CARDS",
        cards: list,
      });

      counter += 50;
      return fetchAllPokemons();
    };
    fetchAllPokemons();
  };

export const setSearchValue = (query: string) => ({
  type: "SET_SEARCH_QUERY",
  query,
});

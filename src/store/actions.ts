import { prominent } from "color.js";
import jsonifyResponse from "../utils/jsonifyResponse";

export const setLoading = (loading: boolean) => ({
  type: "SET_LOADING",
  loading,
});

export const setPokemon =
  (pokemon: any, localLoader: Function) => async (dispatch: Function) => {
    const pokemonData = await jsonifyResponse(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    const speciesData = await jsonifyResponse(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
    );

    const bgColor = await prominent(
      pokemonData.sprites.other["official-artwork"].front_default
    ).then((colors) => colors[2].toString());

    const abilities = await Promise.all(
      pokemonData.abilities.map((ability: any) =>
        jsonifyResponse(
          `https://pokeapi.co/api/v2/ability/${ability.ability.name}`
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

export const getCards = () => async (dispatch: Function) => {
  let counter = 0;
  const fetchAllPokemons: any = async () => {
    if (counter >= 1150) {
      return;
    }
    const { results } = await jsonifyResponse(
      `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${counter}`
    );
    let list = await Promise.all([
      ...results.map((url: any) => jsonifyResponse(url.url)),
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

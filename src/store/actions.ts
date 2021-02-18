export const setLoading = (loading: boolean) => ({
  type: "SET_LOADING",
  loading,
});

export const setPokemon = (pokemon: any, localLoader: Function) => async (
  dispatch: Function
) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((resp) => resp.json())
    .then((data) => {
      dispatch({
        type: "SET_POKEMON",
        pokemon: data,
      });
      localLoader(false);
    });
};

export const setAbility = (ability: any, localLoader: Function) => async (
  dispatch: Function
) => {
  const newAbility = await fetch(
    `https://pokeapi.co/api/v2/ability/${ability}`
  ).then((resp) => resp.json());
  dispatch({
    type: "SET_ABILITY",
    ability: newAbility,
  });
  localLoader(false);
};

export const getInitialCards = (localLoader: Function) => async (
  dispatch: Function
) => {
  const list = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=70`
  ).then((resp) => resp.json());
  dispatch({
    type: "INIT_LIST",
    pokemonList: list.results,
  });
  localLoader(false);
};

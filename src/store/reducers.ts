const sampleReducer = (initialState: any, actionKey: string, type: string) => (
  state = initialState,
  action: any
) => {
  if (action.type === type) {
    return action[actionKey];
  }
  return state;
};

interface PokemonList {
  count: number;
  list: any[];
}

const pokemonList = (state: PokemonList = { count: 0, list: []}, action: any) => {
  if (action.type === "SET_CARDS") {
    return {
      count: state.count+30,
      list: [...state.list, ...action.cards]
    };
  }
  return state;
}

const reducers = {
  currentPokemon: sampleReducer(null, "pokemon", "SET_POKEMON"),
  currentAbility: sampleReducer(null, "ability", "SET_ABILITY"),
  pokemonList,
  loading: sampleReducer(true, "loading", "SET_LOADING"),
  searchValue: sampleReducer("", "query", "SET_SEARCH_QUERY"),
};

export default reducers;

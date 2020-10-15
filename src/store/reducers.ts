const sampleReducer = (initialState: any, actionKey: string, type: string) => (
  state = initialState,
  action: any
) => {
  if (action.type === type) {
    return action[actionKey];
  }
  return state;
};

const reducers = {
  currentPokemon: sampleReducer(null, "pokemon", "SET_POKEMON"),
  currentAbility: sampleReducer(null, "ability", "SET_ABILITY"),
  pokemonList: sampleReducer([], "pokemonList", "INIT_LIST"),
  loading: sampleReducer(true, "loading", "SET_LOADING"),
};

export default reducers;

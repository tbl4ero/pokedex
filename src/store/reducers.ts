import { PokemonCard } from "../components/pokecard/PokeCard.types";
import { SetCardsAction } from "./actions/setCards";

const sampleReducer = (initialState: any, actionKey: string, type: string) => (
  state = initialState,
  action: any
) => {
  if (action.type === type) {
    return action[actionKey];
  }
  return state;
};


const pokemonList = (state: PokemonCard[] = [], action: SetCardsAction) => {
  if (action.type === "SET_CARDS") {
    return [...state, ...action.cards];
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

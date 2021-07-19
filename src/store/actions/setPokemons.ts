import { Pokemon } from "../../components/pokepage/PokePage.types";

export interface SetPokemonAction {
  type: string;
  pokemon: Pokemon 
};

const setCurrentPokemon = (pokemon: Pokemon): SetPokemonAction => ({
  type: "SET_POKEMON",
  pokemon,
});

export default setCurrentPokemon;
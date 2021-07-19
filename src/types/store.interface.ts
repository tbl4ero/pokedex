import { PokemonCard } from "../components/pokecard/PokeCard.types";
import { Pokemon } from "../components/pokepage/PokePage.types";

export default interface StoreInterface  {
  loading: boolean;
  currentPokemon: Pokemon;
  pokemonList: PokemonCard[];
  searchValue: string;
}
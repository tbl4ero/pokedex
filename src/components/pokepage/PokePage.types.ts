import { PokemonCard } from "../pokecard/PokeCard.types";

export interface Stat {
  base_stat: number;
  stat: {
    name: string;
  }
}

export interface Ability {
  name: string;
  effect_entries: { 
    short_effect: string;
    language: { 
      name: string  
  }}[];
}

export interface Pokemon extends PokemonCard {
  weight: number;
  height: number;
  stats: Stat[];
  habitat: {
    name: string;
  }
  bgColor: string;
  ads: Ability[];
} 

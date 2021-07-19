
export interface PokemonSpriteObject {
  other: {
    'official-artwork': {
      front_default: string;
    }
  }
}

export interface PokemonTypeObject {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

export interface PokemonCard {
  name: string;
  types: PokemonTypeObject[];
  sprites: PokemonSpriteObject;
  id: number;
} 

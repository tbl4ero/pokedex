export interface Ability {
    
}

export interface Pokemon {
    name: string;
    abilities: Ability[];
    [key: string]: any ;
}

export interface PokemonList {
    name: string;
    url: string;
}[]
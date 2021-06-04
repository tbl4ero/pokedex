export default interface StoreInterface  {
  loading: boolean,
  currentPokemon: any,
  currentAbility: any,
  pokemonList: {
    count: number;
    list: any[];
  }
}
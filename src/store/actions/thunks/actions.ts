import { prominent } from "color.js";
import { ThunkDispatch } from "redux-thunk";
import { PokemonCard } from "../../../components/pokecard/PokeCard.types";
import { Ability } from "../../../components/pokepage/PokePage.types";
import StoreInterface from "../../../types/store.interface";
import jsonifyResponse from "../../../utils/jsonifyResponse";
import setCards, { SetCardsAction } from "../setCards";
import setCurrentPokemon, { SetPokemonAction } from "../setPokemons";

export const setPokemon =
  (pokemon: PokemonCard, localLoader: Function) =>
  async (dispatch: ThunkDispatch<StoreInterface, {}, SetPokemonAction>) => {
    const pokemonData = await jsonifyResponse(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    const speciesData = await jsonifyResponse(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
    );

    const bgColor = await prominent(
      pokemonData.sprites.other["official-artwork"].front_default
    ).then((colors) => colors[2].toString());

    const abilities = await Promise.all(
      pokemonData.abilities.map((ability: Ability) =>
        jsonifyResponse(
          `https://pokeapi.co/api/v2/ability/${ability.name}`
        )
      )
    );

    const data = { ...pokemonData, ...speciesData, bgColor, ads: abilities };

    dispatch(setCurrentPokemon(data));

    localLoader(false);
  };

export const getCards = () => async (dispatch: ThunkDispatch<StoreInterface, {}, SetCardsAction>) => {
  let counter = 0;

  const fetchAllPokemons: () => Promise<PokemonCard[]> = async () => {
    if (counter >= 1150) {
      return;
    }
    const { results } = await jsonifyResponse(
      `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${counter}`
    );
    let list = await Promise.all([
      ...results.map((url: { url: string }) => jsonifyResponse(url.url)),
    ]);
    list = list.map(({ name, types, sprites, id }: PokemonCard) => ({
      name,
      types,
      sprites,
      id,
    }));
    dispatch(setCards(list));

    counter += 50;
    return fetchAllPokemons();
  };

  fetchAllPokemons();
};

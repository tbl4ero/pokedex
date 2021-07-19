import { PokemonCard } from "../../components/pokecard/PokeCard.types";

export interface SetCardsAction {
  type: string;
  cards: PokemonCard[];
}

const setCards = (list: PokemonCard[]): SetCardsAction => ({
  type: "SET_CARDS",
  cards: list,
});

export default setCards;
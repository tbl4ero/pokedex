import React from "react";
import { Pokemon } from "../pokepage/PokePage.types";
import * as H from 'history';
import { RouteComponentProps } from "react-router-dom";
import { PokemonCard } from "../pokecard/PokeCard.types";

interface Match {
    name: string;
}

export interface SamplePageProps {
  WrappedComponent: React.FC<any>;
  match: RouteComponentProps<Match>;
  setData: (pokemon: PokemonCard, localLoader: React.Dispatch<React.SetStateAction<boolean>>) => void;
  history: H.History,
  selector: string;
  color: string;
  }
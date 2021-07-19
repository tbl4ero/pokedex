import React from "react";

import Stats from "../stats/Stats";
import Profile from "../profile/Profile";
import { setPokemon } from "../../../store/actions/thunks/actions";
import { NameTitle, Image, PageContainer, IDTitle } from "./PokePage.styles";
import SamplePage from "../../samplepage/SamplePage";
import { Pokemon } from "../PokePage.types";
import { SamplePageProps } from "../../samplepage/SamplePage.interface";

const PokeComp = (props: Pokemon) => {
  return (
    <>
      <NameTitle>{props.name}</NameTitle>
      <IDTitle>#{`${props.id}`.padStart(3, "0")}</IDTitle>
      <PageContainer>
        <Profile {...props} />
        <Image
          src={props.sprites.other["official-artwork"].front_default}
        />
        <Stats {...props} />
      </PageContainer>
    </>
  );
};

const PokePage = (props: SamplePageProps) => (
  <SamplePage
    WrappedComponent={PokeComp}
    color={props.color}
    match={props.match}
    setData={setPokemon}
    selector="currentPokemon"
    history={props.history}
  />
);

export default PokePage;

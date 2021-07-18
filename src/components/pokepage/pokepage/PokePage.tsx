import React from "react";

import Stats from "../stats/Stats";
import Profile from "../profile/Profile";
import { setPokemon } from "../../../store/actions";
import { NameTitle, Image, PageContainer, IDTitle } from "./PokePage.styles";
import SamplePage from "../../samplepage/SamplePage";

const PokeComp = (props: any) => {
  return (
    <>
      <NameTitle>{props.match.params.name}</NameTitle>
      <IDTitle>#{`${props.data.id}`.padStart(3, "0")}</IDTitle>
      <PageContainer>
        <Profile pokemon={props.data} />
        <Image
          src={props.data.sprites.other["official-artwork"].front_default}
        />
        <Stats pokemon={props.data} />
      </PageContainer>
    </>
  );
};

const PokePage = (props: any) => (
  <SamplePage
    WrappedComponent={PokeComp}
    bg={props.color}
    match={props.match}
    setData={setPokemon}
    selector="currentPokemon"
    history={props.history}
  />
);

export default PokePage;

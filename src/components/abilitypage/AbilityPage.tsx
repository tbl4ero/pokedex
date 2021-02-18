import React from "react";
import { useSelector } from "react-redux";

import StoreInterface from "./../../types/store.interface";
import { NameTitle, DescriptionBox } from './Abilitypage.styles';


const AbilityPage: React.FC<any> = (props) => {
  const { ability } = useSelector((state: StoreInterface) => ({
    ability: state.currentAbility,
  }));

  return (
    <>
      <NameTitle>
        {props.match.params.name.split("-").join(" ")}
      </NameTitle>
      <DescriptionBox>
        <div>
          {
            ability.flavor_text_entries.filter(
              (entry: { language: { name: string } }) =>
                entry.language.name === "en"
            )[0].flavor_text
          }
        </div>
        <br />
        <div>
          {
            ability.effect_entries.filter(
              (entry: { language: { name: string } }) =>
                entry.language.name === "en"
            )[0].short_effect
          }
        </div>
      </DescriptionBox>
    </>
  );
};

export default AbilityPage;

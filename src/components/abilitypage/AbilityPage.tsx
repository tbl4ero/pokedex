import React from "react";

import SamplePage from './../samplepage/SamplePage';
import { setAbility } from "./../../store/actions";
import { NameTitle, DescriptionBox } from './Abilitypage.styles';


const AbilityComp: React.FC<any> = (props) => (
  <>
    <NameTitle>
      {props.data.name.split("-").join(" ")}
    </NameTitle>
    <DescriptionBox>
      <div>
        {
          props.data.flavor_text_entries.filter(
            (entry: { language: { name: string } }) =>
              entry.language.name === "en"
          )[0].flavor_text
        }
      </div>
      <br />
      <div>
        {
          props.data.effect_entries.filter(
            (entry: { language: { name: string } }) =>
              entry.language.name === "en"
          )[0].short_effect
        }
      </div>
    </DescriptionBox>
  </>
);

const AbilityPage: React.FC<any> = (props: any) => (
  <SamplePage {...props} WrappedComponent={AbilityComp} setData={setAbility} selector="currentAbility" />
)

export default AbilityPage;

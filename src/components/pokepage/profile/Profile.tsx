import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import useHover from "../../../hooks/useHover";
import {
  PageContainer,
  TypeElement,
  ProfileElement,
  CenteredBox,
  CloseTooltipButton,
  TooltipBox,
  TooltipElementContainer,
  TooltipTitle,
  AbilityTitle,
  AbilityList,
  ProfileList,
} from "./Profile.styles";

const AbilityTooltip = (props: any) => {
  const { isHovered, hoverOptions, cursorPos } = useHover(true);
  const [tooltipHidden, hideTooltip] = useState(false);

  return (
    <TooltipElementContainer
      {...hoverOptions}
      onTouchStart={() => hideTooltip(false)}
    >
      {isHovered && !tooltipHidden && (
        <TooltipBox cursorPos={cursorPos}>
          <TooltipTitle>{props.tooltipTitle}</TooltipTitle>
          <CloseTooltipButton onClick={() => hideTooltip(true)}>
            <FontAwesomeIcon icon={faWindowClose} />
          </CloseTooltipButton>
          {props.tooltipDescription}
        </TooltipBox>
      )}
      <div>{props.children}</div>
    </TooltipElementContainer>
  );
};

const Profile = (props: any) => {
  return (
    <PageContainer direction="column" margin="0">
      <PageContainer align="flex-start" margin="20px 0">
        {props.pokemon.types.map((type: any) => (
          <TypeElement type={type.type.name}>
            <img height="20" src={`/icons/${type.type.name}.svg`} />
          </TypeElement>
        ))}
      </PageContainer>
      <ProfileList>
        <ProfileElement>Weight: {props.pokemon.weight}</ProfileElement>
        <ProfileElement>Height: {props.pokemon.height}</ProfileElement>
        <ProfileElement>Area: {props.pokemon.habitat.name}</ProfileElement>
      </ProfileList>
      <CenteredBox>
        <AbilityTitle>ABILIITIES:</AbilityTitle>
        <AbilityList>
          {props.pokemon.ads.map((ability: any, id: number) => (
            <AbilityTooltip
              tooltipTitle={ability.name}
              tooltipDescription={
                ability.effect_entries.filter(
                  (entry: { language: { name: string } }) =>
                    entry.language.name === "en"
                )[0].short_effect
              }
            >
              {ability.name}
            </AbilityTooltip>
          ))}
        </AbilityList>
      </CenteredBox>
    </PageContainer>
  );
};

export default Profile;

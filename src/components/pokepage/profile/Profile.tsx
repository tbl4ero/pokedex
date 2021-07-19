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
import { Pokemon } from "../PokePage.types";

interface TooltipProps {
  tooltipTitle: string;
  tooltipDescription: string;
  children: string;
}

const AbilityTooltip = (props: TooltipProps) => {
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

const Profile = (props: Pokemon) => {
  return (
    <PageContainer direction="column" margin="0">
      <PageContainer align="flex-start" margin="20px 0">
        {props.types.map((type) => (
          <TypeElement type={type.type.name}>
            <img height="20" src={`/pokedex/icons/${type.type.name}.svg`} />
          </TypeElement>
        ))}
      </PageContainer>
      <ProfileList>
        <ProfileElement>Weight: {props.weight}</ProfileElement>
        <ProfileElement>Height: {props.height}</ProfileElement>
        <ProfileElement>Area: {props.habitat.name}</ProfileElement>
      </ProfileList>
      <CenteredBox>
        <AbilityTitle>ABILIITIES:</AbilityTitle>
        <AbilityList>
          {props.ads.map((ability, id: number) => (
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

import React from "react";
import { useEffect } from "react";

import useHover from '../../../hooks/useHover';

import {
  PageContainer,
  TypeElement,
  ProfileElement,
  CenteredBox,
} from "./Profile.styles";


const AbilityTooltip = (props: any) => {
  const { isHovered, hoverOptions } = useHover();

  return (
    <>
      <div {...hoverOptions} style={{ position: "relative" }}>
        <div style={{ position: "absolute", bottom: "170%", transform: 'translate(50%)', right: '50%' }}>
          <div>
            {isHovered && (
              <div
                style={{
                  zIndex: 999,
                  background: "#FFFFFF",
                  padding: "50px",
                  borderRadius: "4px",
                  boxShadow: "0px 4px 16px 2px rgba(0,0,0,0.62)",
                }}
              >
                aleee
              </div>
            )}
          </div>
        </div>
        <div
          style={{
            color: "white",
            listStyle: "none",
            margin: "10px 0",
            cursor: "pointer",
            fontSize: "18px",
            paddingBottom: "2px",
            borderBottom: "2px dashed black",
            textTransform: "uppercase",
          }}
        >
          {props.children}
        </div>
      </div>
    </>
  );
};

const Profile = (props: any) => (
  <PageContainer direction="column" margin="0">
    <PageContainer align="flex-start" margin="20px 0">
      {props.pokemon.types.map((type: any) => (
        <TypeElement type={type.type.name}>
          <img
            alt=""
            height="20"
            style={{ color: "black", margin: "5px" }}
            src={`/icons/${type.type.name}.svg`}
          />
        </TypeElement>
      ))}
    </PageContainer>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "270px",
        height: "100px",
      }}
    >
      <ProfileElement>Weight: {props.pokemon.weight}</ProfileElement>
      <ProfileElement>Height: {props.pokemon.height}</ProfileElement>
      <ProfileElement>Area: {props.pokemon.habitat.name}</ProfileElement>
    </div>
    <CenteredBox>
      <h2
        style={{
          color: "white",

          fontWeight: 500,
          textShadow: "rgb(0 0 0 / 25%) 0px 0px 12px",
        }}
      >
        ABILIITIES:
      </h2>
      <ul
        style={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {props.pokemon.abilities.map((ability: any) => (
          <li>
            <AbilityTooltip>{ability.ability.name}</AbilityTooltip>
          </li>
        ))}
      </ul>
    </CenteredBox>
  </PageContainer>
);

export default Profile;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTimes, faWindowClose } from "@fortawesome/free-solid-svg-icons";

import useHover from "../../../hooks/useHover";



import {
  PageContainer,
  TypeElement,
  ProfileElement,
  CenteredBox,
} from "./Profile.styles";

const AbilityTooltip = (props: any) => {
  const { isHovered, hoverOptions, cursorPos } = useHover(true);

  return (
    <div
      {...hoverOptions}
      style={{
        color: "white",
        listStyle: "none",
        padding: "5px",
        margin: "5px 0",
        cursor: "pointer",
        position: "relative",
        fontSize: "18px",
        paddingBottom: "2px",
        textTransform: "uppercase",
      }}
    >
      {isHovered && (
        <div
          style={{
            zIndex: 99999,
            position: "absolute",
            left: `${cursorPos.x - 10}px`,
            bottom: `${-cursorPos.y}px`,
            width: "220px",
            color: "black",
            transform: "translate(-40px, -40px)",
            padding: "10px",
            background: "#FFFFFF",
            borderRadius: "4px",
            boxShadow: "0px 4px 16px 2px rgba(0,0,0,0.62)",
          }}
        >
          <div>
            <div style={{ display: "flex" }}>
              <h4 style={{ margin: 0, marginTop: 'auto' }}>
                {props.tooltipTitle}
              </h4>{" "}

              <FontAwesomeIcon icon={faWindowClose} />
            </div>
            {props.tooltipDescription}
          </div>
        </div>
      )}
      <div
        style={{
          borderBottom: "2px dashed black",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

const Profile = (props: any) => {
  return (
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
          {props.pokemon.ads.map((ability: any) => (
            <li
              style={{
                listStyle: "none",
              }}
            >
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
            </li>
          ))}
        </ul>
      </CenteredBox>
    </PageContainer>
  );
};

export default Profile;

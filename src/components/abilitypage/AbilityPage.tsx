import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import GoBack from "../GoBack";
import Spinner from "./../../Spinner";
import StoreInterface from "./../../interfaces/store.interface";
import { setAbility } from "./../../store/actions";
import styled from "styled-components";

const Conrainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameTitle = styled.h1`
  text-align: center;
  font-size: 80px;
  color: white;
  text-shadow: -2px 2px 1px black, 0 2px 1px black;
`;

const DescriptionBox = styled.div`
  background: rgba(0, 0, 0, 0.2);
  color: white;
  padding: 30px;
  max-width: 500px;
`;

const AbilityPage: React.FC<any> = (props) => {
  const { ability } = useSelector((state: StoreInterface) => ({
    ability: state.currentAbility,
    loading: state.loading,
  }));
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAbility(props.match.params.name, setLoading));
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <GoBack route={props.history.goBack} />
          <Conrainer>
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
          </Conrainer>
        </div>
      )}
    </React.Fragment>
  );
};

export default AbilityPage;

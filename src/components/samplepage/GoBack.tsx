import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import React from "react";
import styled from "styled-components";

const GoBackArrow = styled(ArrowBack)`
  margin: 40px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.2);;
  transition: 0.2s ease-in-out;
  margin-bottom: 0;
  :hover {
    color: rgba(0, 0, 0, 0.6);
  }
`;

const GoBack: React.FC<any> = (props) => {
  return <GoBackArrow onClick={props.route} height="50" width="50" />;
};

export default GoBack;

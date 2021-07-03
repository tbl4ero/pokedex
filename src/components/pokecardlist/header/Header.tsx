import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useIntersection from "../../../hooks/useIntersection";
import { SearchField, StyledHeader, ToggleButton } from "./Header.styles";
import { setSearchValue } from '../../../store/actions';
import StoreInterface from "../../../types/store.interface";

const Header = () => {
  const dispatch = useDispatch();

  const [minimized, minimize] = useState(true);
  const [targetRef, inView] = useIntersection({
    rootMargin: "20px",
    threshold: 0,
  }) as any[];

  return (
    <div style={{ height: "70px" }} ref={targetRef}>
      <StyledHeader inView={inView} minimized={minimized}>
        <div>
          <ToggleButton
            minimized={minimized}
            inView={inView}
            onClick={() => !inView && minimize(!minimized)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={faSearch} color="#000" opacity="0.4" />
          <SearchField
            onChange={(e) => dispatch(setSearchValue(e.target.value))}
            placeholder="Search pokemon..."
          />
        </div>
      </StyledHeader>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useIntersection from "../../../hooks/useIntersection";
import {
  SearchField,
  StyledHeader,
  ToggleButton,
  SearchFieldBox,
  HeaderContainer,
} from "./Header.styles";
import setSearchValue from "../../../store/actions/serSearchValue";
import StoreInterface from "../../../types/store.interface";

const Header = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state: StoreInterface) => state);

  const [minimized, minimize] = useState(true);
  const [targetRef, inView] = useIntersection({
    rootMargin: "20px",
    threshold: 0,
  }) as any[];

  return (
    <HeaderContainer ref={targetRef}>
      <StyledHeader inView={inView} minimized={minimized}>
        <div>
          <ToggleButton
            minimized={minimized}
            inView={inView}
            onClick={() => !inView && minimize(!minimized)}
          />
        </div>
        <SearchFieldBox inView={inView} minimized={minimized}>
          <FontAwesomeIcon
            icon={faSearch}
            color="#000"
            alignmentBaseline="central"
            opacity="0.4"
          />
          <SearchField
            defaultValue={searchValue}
            onChange={(e) => dispatch(setSearchValue(e.target.value))}
            placeholder="Search pokemon..."
          />
        </SearchFieldBox>
      </StyledHeader>
    </HeaderContainer>
  );
};

export default Header;

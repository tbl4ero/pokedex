import React, { useState, RefObject } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SearchField, StyledHeader, HeaderIcon } from "./Header.styles";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useIntersection from "../../../hooks/useIntersection";

const Header = () => {
  const [inView, setInView] = useState(true);
  const [minimized, minimize] = useState(false);
  const targetRef = useIntersection(() => {
    setInView(!inView);
  }, {
    rootMargin: "70px",
    threshold: 1,
    shouldBeHidden: true,
  }) as RefObject<HTMLDivElement>;

  return (
    <div ref={targetRef}>
      <StyledHeader
        scrolled={inView}
        minimized={minimized}
        onClick={() => minimize(!minimized)}
      >
        <div style={{ paddingLeft: "0", margin: "auto 0" }}>
          <HeaderIcon
            style={{
              marginRight: "auto",
            }}
            height="40"
            src="/pokeball.png"
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
            // onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search pokemon..."
            // value={searchValue}
          />
        </div>
      </StyledHeader>
    </div>
  );
};

export default Header;

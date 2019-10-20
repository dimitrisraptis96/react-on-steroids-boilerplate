import React from "react";
import styled from "styled-components";

import Link from "./Link";

const UlHorizontal = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  list-style-type: none;

  padding: 1rem;

  & > li {
    margin-right: 1rem;
  }
  & > li:last-child {
    margin-right: 0;
  }
`;

const Nav = ({}) => {
  return (
    <nav>
      <UlHorizontal>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </UlHorizontal>
    </nav>
  );
};

export default Nav;

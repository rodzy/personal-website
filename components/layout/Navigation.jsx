import React, { Fragment } from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Link from "next/link";
import Navlinks from "../UI/Navlinks";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  a {
    font-size: 1.3rem;
    margin-left: 0rem;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Navigation = () => {
  return (
    <Fragment>
      <div className="grid">
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <Nav>
            <Link href="/">
              <Navlinks>About me</Navlinks>
            </Link>
            <Link href="/">
              <Navlinks>Skills</Navlinks>
            </Link>
            <Link href="/">
              <Navlinks>Interests</Navlinks>
            </Link>
          </Nav>
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;

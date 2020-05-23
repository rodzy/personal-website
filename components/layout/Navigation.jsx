import React, { Fragment } from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Link from "next/link";
import Navlinks from "../UI/Navlinks";
import Navtext from "../UI/Navtext";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  a {
    font-size: 1rem;
    margin-left: 0rem;
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
              <Navlinks>
                <Navtext>About me</Navtext>
              </Navlinks>
            </Link>
            <Link href="/resume">
              <Navlinks>
                <Navtext>Resume</Navtext>
              </Navlinks>
            </Link>
          </Nav>
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;

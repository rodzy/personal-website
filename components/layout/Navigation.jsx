import React, { Fragment } from "react";
import {css} from '@emotion/core';
import Link from 'next/link';

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
          <nav
            css={css`
              padding-left: 2rem;
              a {
                font-size: 1.8rem;
                margin-left: 2rem;

                &:last-of-type {
                  margin-right: 0;
                }
              }
            `}
          >
            <Link href="/">About me</Link>
            <Link href="/">Skills</Link>
            <Link href="/">Interest</Link>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;

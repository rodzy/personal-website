import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <a
          href="https://github.com/rodzy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.svg" alt="Github logo" className="logo" />
        </a>
        <a
          href="https://twitter.com/Irodx2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/twitter.svg" alt="Twitter logo" className="logo" />
        </a>
        <a href="https://discord.gg/rod#3533">
        <img src="/discord.svg" alt="Discord logo" className="logo" />
        </a>
        <a href="mailto:irod2899@gmail.com">
          <img src="/email.svg" alt="Contact logo" className="logo" />
        </a>
      </footer>
    </Fragment>
  );
};

export default Footer;

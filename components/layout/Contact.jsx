import React, { Fragment } from "react";

const Contact = () => {
  return (
    <Fragment>
      <div className="description">
        Contact me:
        <div className="cont">
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

          <a href="mailto:irod2899@gmail.com">
            <img src="/email.svg" alt="Contact logo" className="logo" />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;

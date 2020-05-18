import Layout from "../components/layout/Layout";
import { Fragment } from "react";
import Footer from "../components/layout/Footer";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Content = styled.p`
  position: relative;
  font-size: 30px;
  font-weight: 1;
`;

const Blog = () => {
  return (
    <Fragment>
      <div className="container">
        <main>
          <Layout />
          <div
            css={css`
              display: flex;
              text-align: center;
              align-content: center;
              top: -200px;
            `}
          >
            <Content>🚧 Work in progress 🚧</Content>
          </div>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Blog;

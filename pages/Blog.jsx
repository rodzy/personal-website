import Layout from "../components/layout/Layout";
import { Fragment } from "react";
import Footer from "../components/layout/Footer";
import styled from "@emotion/styled";

const Content = styled.p`
  position:relative;
  font-size:30px;
  top:-150px;
  font-weight:1;


`;

const Blog = () => {
  return (
    <Fragment>
      <div className="container">
        <main>
          <Layout />
          <div>
            <Content>🚧 Work in progress 🚧</Content>
          </div>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Blog;

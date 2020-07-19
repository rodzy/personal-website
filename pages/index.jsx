import Layout from "../components/layout/Layout";
import { Fragment } from "react";
import Footer from "../components/layout/Footer";
import LinkLink from "../components/UI/LinkLink";
import Linktext from "../components/UI/Linktext";
import styled from "@emotion/styled";
import Contact from "../components/layout/Contact";
import Head from "next/head";

const Me = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;

  @media screen and (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }
`;

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Isaac Rodríguez</title>
        <meta
          name="description"
          content="Software developer from Alajuela,Costa Rica"
        ></meta>
      </Head>
      <div className="container">
        <main>
          <Layout />
          <div className="principal">
              <Me
                src={require("../public/83157061_1812557535541457_900108481044938752_o.jpg")}
                alt="Profile"
              />
            <p className="description">
              <br></br>
              Hi, I'm a software engineering student from
              Alajuela, Costa Rica.
              <br />I truly enjoy web development and building web ecosystems,
              I'm currently building the React UI library{" "}
              <LinkLink href="https://github.com/bamboojs" target="blank">
                <Linktext>&nbsp;Bamboo.js.&nbsp;</Linktext>
              </LinkLink>{" "}<br></br>
              If you're intrested or just curious on what I build checkout my{" "}
              <LinkLink href="https://github.com/rodzy" target="blank">
                <Linktext>&nbsp;GitHub.&nbsp;</Linktext>
              </LinkLink>{" "}
              <br />
              Outside of programming I like to play video games, listen to music
              and sometimes I do play basketball.
            </p>
          </div>
          <div style={{
            paddingTop:40
          }}>
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}

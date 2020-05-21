import Layout from "../components/layout/Layout";
import { Fragment } from "react";
import Footer from "../components/layout/Footer";
import LinkLink from "../components/UI/LinkLink";
import Linktext from "../components/UI/Linktext";
import styled from "@emotion/styled";
import Contact from "../components/layout/Contact";

const Me = styled.img`
  content: url("/83157061_1812557535541457_900108481044938752_o.jpg");
  width: 120px;
  height: 120px;
  border-radius: 50%;

  @media screen and (max-width: 400px){
      width:80px;
      height:80px;
  }
`;

export default function Home() {
  return (
    <Fragment>
      <div className="container">
        <main>
          <Layout />
          <div className="principal">
            <p className="description">
              <Me/>
              <br></br>
              Hi, my name is Isaac and I'm a software engineering student from Alajuela, Costa Rica
              currently on my last year of B.S.<br/>
              I truly enjoy web development and concurrent logic, if you're intrested or just curious on what I build checkout
              my{" "}
              <LinkLink href="https://github.com/rodzy">
                <Linktext>&nbsp;Github.&nbsp;</Linktext>
              </LinkLink>{" "}
              <br />
              Outside of programming I like to play video games, listen to music and sometimes I do play basketball.
            </p>
          </div>
          <div>
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}

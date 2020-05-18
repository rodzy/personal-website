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
  
  
`;

export default function Home() {
  return (
    <Fragment>
      <div className="container">
        <main>
          <Layout />
          <p className="description">
          <Me className="image" /><br></br>
            I'm a software engineering student from Costa Rica currently on my
            last year of B.S.
            <br />I truly enjoy web development but I got some experience using
            desktop technologies aswell, you can find most of my code on{" "}
            <LinkLink href="https://github.com/rodzy">
              <Linktext>&nbsp;Github&nbsp;</Linktext>
            </LinkLink>{" "}
            if you're intrested on it
            <br />
            Outside of programming I like to play video games, go landscaping
            and sometimes play basketball.
          </p>
          <div>
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}

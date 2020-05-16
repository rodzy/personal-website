import Layout from "../components/layout/Layout";
import { Fragment } from "react";
import Footer from "../components/layout/Footer";
import LinkLink from '../components/UI/LinkLink';
import Linktext from '../components/UI/Linktext';
import styled from "@emotion/styled";

const Me = styled.img`
  content: url("/83157061_1812557535541457_900108481044938752_o.jpg");
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  top: -150px;
`;

export default function About() {
  return (
    <Fragment>
      <div className="container">
        <main>
          <Layout />
          <div>
            <Me />
          </div>

            <p className="description">
             I'm a software engineering student from Costa Rica currently on my last year of B.S.
             <br/>I truly enjoy web development but I got some experience using desktop technologies aswell,
             you can find most of my code on <LinkLink href="https://github.com/rodzy"><Linktext>&nbsp;Github&nbsp;</Linktext></LinkLink> if you're intrested on it
             <br/>Outside of programming I like to play video games, go landscaping and sometimes play basketball.
            </p>
 
        <Footer />
        </main>

      </div>
    </Fragment>
  );
};



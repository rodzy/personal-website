import Layout from "../components/layout/Layout";
import { Fragment } from "react";
import Footer from "../components/layout/Footer";
import styled from "@emotion/styled";

const DivAbout = styled.div`
  width: 90%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  position: relative;
  top: -110px;
  margin: auto;
`;
const DivImage = styled.div`
  border: groove;
  flex: 1;
  flex-direction: row;
  position: relative;
`;
const Me = styled.img`
  content: url("/83157061_1812557535541457_900108481044938752_o.jpg");
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  top: -150px;
`;

const About = () => {
  return (
    <Fragment>
      <div className="container">
        <main>
          <Layout />
          <div>
            <Me />
          </div>
          <div >
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              blanditiis. Laborum, maiores quos? Quidem iste exercitationem
              dolore eos, iure sint odio dolorem voluptatum, aut temporibus
              soluta repudiandae magni, tenetur numquam.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default About;

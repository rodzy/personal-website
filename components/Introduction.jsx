import React, { Fragment } from "react";
import styled from "@emotion/styled";
import Cards from "./UI/Cards";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: row;
  overflow: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    width: 3rem;
    height: 0.8rem;
  }
  &::-webkit-scrollbar-track {
    background: grey;
  }
  &::-webkit-scrollbar-thumb {
    background: #000000;
  }
  @media screen and (max-width:600px){
      height:90vh;
  }
`;

const Introduction = ({ title, description }) => {
  return (
    <Fragment>
      <h2>{title}</h2>
      <div
        style={{
          padding: 10,
        }}
      >
        <p className="description">{description}</p>
      </div>
      <div
        className="grid"
        style={{
          paddingBottom: 30,
        }}
      >
        <Container>
          <Cards />
        </Container>
      </div>
      <div
        style={{
          paddingBottom: 30,
        }}
      >
        <p className="description">
          Most of my projects are open source and publicly available on GitHub,
          feel free to check them out or even contribute to them
        </p>
      </div>
    </Fragment>
  );
};

export default Introduction;

import React, { Fragment } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height:40vh;
  display: flex;
  flex-direction: row;
  overflow: scroll;
  overflow-y: hidden;
  justify-items:center;

  &::-webkit-scrollbar {
    width:3rem;
    height:0.8rem;
  }
  &::-webkit-scrollbar-track {
    background: grey;
    
  }
  &::-webkit-scrollbar-thumb {
    background: #000000;
    
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
      <div className="grid">
        <Container>
          
        </Container>
      </div>
    </Fragment>
  );
};

export default Introduction;

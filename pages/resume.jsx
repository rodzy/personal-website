import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import Head from "next/head";
import Technologies from "../components/Technologies";
import Introduction from "../components/Introduction";



const Skills = () => {
  
  return (
    <Fragment>
      <Head>
        <title>Isaac Rodríguez - Resume</title>
        <meta
          name="description"
          content="Get to know more about my skills and technical habilities"
        ></meta>
      </Head>
      <div className="container">
        <main>
          <Layout />
          <Introduction title="Projects" description="Some of the projects I've worked on or contributed to"/>
          <Technologies title="Technologies" description="Some of the technologies that I've used over time, right now I'm focusing on React, GraphQL and NodeJS."/>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Skills;

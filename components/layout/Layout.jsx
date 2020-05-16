import React, { Fragment } from "react";
import { Global, css } from "@emotion/core";
import Head from "next/head";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from './Footer';

const Layout = (props) => {
  return (
    <Fragment>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
          a {
            text-decoration: none;
          }

          * {
            box-sizing: border-box;
          }
          .container {
            width:100%;
            background-color: white;
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            width:70%;
            padding: 5rem 0;
            
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-sizing:border-box;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
            padding:40px;
            text-align:center;
          }

          footer img {
            
            margin-left: 0.5rem;
            margin-right: 1rem;
          }

          footer a {
            display: inline-block;
            justify-content: center;
            align-items: center;
          }
          footer p {
            display:block;
            
            flex-direction:column;
            justify-content:center;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            
            
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #ffffff;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            color: black;
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }
          .title2 {
            color: black;
            margin: 0;
            line-height: 1.15;
            font-size: 2rem;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            font-size: 1.2rem;
            font-weight:100;
            position:relative;
            flex:1;
            top:-130px;
            margin:0;
            width:700px;
            

          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 1.5rem;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .logo {
            height: 2em;
            transition: all 0.25s ease 0s;
          }

          .logo:hover {
            height: 3rem;
          }

          @media screen and (max-width: 1024px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
            .presentation{
              text-align:center;
              font-size:18px;
            }
            .container{
              width:100%;
              flex-direction:column;
            }    
          }

          
          .coverImg{
              display:flex;
              width:90%;  
              top:-250px;
          }

        `}
      />
      <Head>
        <title>Isaac Rodríguez Matturen</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        
      </Head>
      <Header />
      <Navigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;

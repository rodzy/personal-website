import React, { Fragment } from "react";
import { Global, css } from "@emotion/core";
import Head from "next/head";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

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
          body::-webkit-scrollbar {
            width: 0.5rem;
          }
          body::-webkit-scrollbar-track {
            background: grey;
          }
          body::-webkit-scrollbar-thumb {
            background: black;
          }
          .container {
            width: 100%;
            background-color: #ffffff;
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            width: 100%;
            padding: 2rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
          }

          footer {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            text-align: center;
            border-top: 1px solid #eaeaea;
            box-sizing: border-box;
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
            justify-content: center;
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
            font-weight: 400;
            flex: 1;
            top: -150px;
            margin: 0;
            width: 700px;
            letter-spacing:0.01rem;
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
            justify-content: space-evenly;
            
            flex-wrap: wrap;

            max-width: 1024px;
            margin-top: 0.4rem;
          }

          .maincard{
            width:85vh;
            margin-left:0rem;
            align-self:center;
          }
          .card {
            margin: 0.5rem;
            width:25rem;
            height: 15rem;
            text-align: left;
            border:1px;
            text-decoration: none;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .cont {
            padding-top: 2rem;
            display: flex;
            box-sizing: border-box;
            justify-content: center;
          }
          .logo {
            height: 1.4em;
            display: flex;
            transition: all 0.25s ease 0s;
            margin-left: 1rem;
            margin-right: 1rem;
          }

          .logo:hover {
            display: block;
          }

          @media screen and (max-width: 1024px) {
            main {
              width: 100%;
              flex-direction: column;
              align-items: center;
            }
            footer {
              width: 100%;
            }
            header {
              width: 100%;
            }
            h2{
              font-size:1.3rem;
            }

            .description {
              width: 100%;
              font-size: 1rem;
              margin: 1;
            }
            .title {
              font-size: 2rem;
            }
            .title2 {
              font-size: 1.5rem;
            }
            .grid{
              width:100%;
            }
            .maincard{
              width:100%;
            }
          }
          @media screen and (max-width: 400px) {
            main {
              width: 100%;
              flex-direction: column;
              align-items: center;
            }
            nav {
              width: 250px;
              font-size: 1rem;
            }
            .title {
              font-size: 2rem;
            }
            .title2 {
              font-size: 1.2rem;
            }
            .image {
              width: 120px;
              height: 120px;
            }
            .logo {
              width: 27px;
            }
          }

          .coverImg {
            display: flex;
            width: 90%;
            top: -250px;
          }
        `}
      />
      <Head>
        <title>Isaac Rodríguez Matturen</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Navigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;

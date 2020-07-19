import React from "react";
import styled from "@emotion/styled";

const CardContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 10px, rgba(0, 0, 0, 0.14) 0px 4px 5px,
    rgba(0, 0, 0, 0.2) 0px 2px 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: rgb(255, 255, 255);
  border-radius: 0.5rem;
  border-top: 4px solid #66ccff;
  padding: 2rem;
  margin: 1rem;
`;

const CardHeading = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const Techused = styled.div`
  display: inline-flex;
  box-shadow: rgba(99, 179, 237, 0.3) 2px 2px 3.5px;
  font-weight: 700;
  align-items: center;
  margin-right: 1rem;
  text-align: center;
  padding: 0.2rem 1rem 0.2rem 1rem;
  border-radius: 1rem;
  background: #66ccff;
`;

const Cards = () => {
  return (
    <>
      <CardContainer>
        <CardHeading>
          <img
            src="https://avatars3.githubusercontent.com/u/63769092?s=400&u=1656564c3e2ee2559dcf9abe5e6bc5d02cc768b0&v=4"
            alt="TypeTech"
            style={{
              width: 70,
              paddingRight: 20,
            }}
          />
          <h3>TypeTech</h3>
          <div
            style={{
              paddingLeft: 50,
            }}
          >
            <a href="https://typetech.netlify.app/" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
              </svg>
            </a>
          </div>
          <div
            style={{
              paddingLeft: 10,
            }}
          >
            <a href="https://github.com/TypeTech/website" target="blank"> 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </CardHeading>
        <div
          style={{
            paddingBottom: 20,
          }}
        >
          <Techused>Gatsby</Techused>
          <Techused>React</Techused>
        </div>
        <div>
          Gatsby static website made for TypeTech.org.
          <ul>
            <li>Design and animations made from scratch.</li>
            <li>Responsive web design.</li>
            <li>GraphQL SEO optimizations.</li>
            <li>
              Hooks integration for email and news letter using MailChimp.
            </li>
          </ul>
        </div>
      </CardContainer>

      <CardContainer>
        <CardHeading>
          <span
            role="img"
            aria-label="emoji"
            style={{
              fontSize: 40,
              paddingRight: 20,
            }}
          >
            📸
          </span>

          <h3>Personal website</h3>
          <div
            style={{
              paddingLeft: 50,
            }}
          >
            <a href="https://isaacrodriguez.netlify.app" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
              </svg>
            </a>
          </div>
          <div
            style={{
              paddingLeft: 10,
            }}
          >
            <a href="https://github.com/rodzy/personal-website" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </CardHeading>
        <div
          style={{
            paddingBottom: 20,
          }}
        >
          <Techused>Next.js</Techused>
          <Techused>React</Techused>
        </div>
        <div>
          Pre-rendered static website for my portfolio.
          <ul>
            <li>Design and animations made from scratch.</li>
            <li>Added Material-UI for the technologies cards.</li>
            <li>Responsive web design.</li>
            <li>Static to SSR images optimized.</li>
            <li>Responsive web design.</li>
          </ul>
        </div>
      </CardContainer>

      <CardContainer>
        <CardHeading>
          <span
            role="img"
            aria-label="emoji"
            style={{
              fontSize: 40,
              paddingRight: 20,
            }}
          >
            📡
          </span>
          <h3>TypeGraphQL server</h3>
          <div
            style={{
              paddingLeft: 50,
            }}
          ></div>
          <div
            style={{
              paddingLeft: 10,
            }}
          >
            <a href="https://github.com/rodzy/graphql-ts-server" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </CardHeading>
        <div
          style={{
            paddingBottom: 20,
          }}
        >
          <Techused>TypeScript</Techused>
          <Techused>GraphQL</Techused>
        </div>
        <div>
          A GraphQL API basic boilerplate made using TypeScript, Node,
          PostgreSQL, TypeORM and Express Sessions.
          <ul>
            <li>TypeORM mapping to model the database.</li>
            <li>Set up Apollo server to handle requests and responses.</li>
            <li>
              Pair up Express with Redis to save the status on the given cookie.
            </li>
          </ul>
        </div>
      </CardContainer>

      <CardContainer>
        <CardHeading>
          <span
            role="img"
            aria-label="emoji"
            style={{
              fontSize: 40,
              paddingRight: 20,
            }}
          >
            🔍
          </span>
          <h3>GitHub searcher</h3>
          <div
            style={{
              paddingLeft: 50,
            }}
          >
            <a href="https://gituser-searcher.netlify.app" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
              </svg>
            </a>
          </div>
          <div
            style={{
              paddingLeft: 10,
            }}
          >
            <a href="https://github.com/rodzy/github-searcher" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </CardHeading>
        <div
          style={{
            paddingBottom: 20,
          }}
        >
          <Techused>React</Techused>
          <Techused>Redux-saga</Techused>
        </div>
        <div>
          A coding challenge using Redux to handle the state from the Github
          REST API v.3.
          <ul>
            <li>Building the design and animations from scratch.</li>
            <li>A fun challenge with a time limit of 2h 30min.</li>
            <li>Challenge to get into the GitHub developer program.</li>
          </ul>
        </div>
      </CardContainer>

      <CardContainer>
        <CardHeading>
          <img
            src="https://raw.githubusercontent.com/rodzy/ImpecableJB/master/Content/logo-ImpecableJB.png"
            alt="TypeTech"
            style={{
              width: 70,
            }}
          />
          <h3>ImpecableJB</h3>
          <div
            style={{
              paddingLeft: 50,
            }}
          >
            {" "}
          </div>
          <div
            style={{
              paddingLeft: 10,
            }}
          >
            <a href="https://github.com/rodzy/ImpecableJB" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </CardHeading>
        <div
          style={{
            paddingBottom: 20,
          }}
        >
          <Techused>C#</Techused>
          <Techused>MVC framework</Techused>
        </div>
        <div>
          An .Net Framework e-commerce based app using MVC entity framework and
          Bootstrap.
          <ul>
            <li>Management for users & products.</li>
            <li>Shopping cart.</li>
            <li>
              Ranking system & coupons representing discounts or royalties.
            </li>
          </ul>
        </div>
      </CardContainer>
    </>
  );
};

export default Cards;

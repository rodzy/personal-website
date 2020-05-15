import Layout from "../components/layout/Layout";
import { Fragment } from "react";
import Footer from "../components/layout/Footer";
import styled from "@emotion/styled";

const Me = styled.img`
  content: url("/83157061_1812557535541457_900108481044938752_o.jpg");
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  top: -150px;
`;

const Blog = () => {
    return ( 
        <Fragment>
        <div className="container">
          <main>
            <Layout />
            <div >
              <p className="description">
                    🚧 Work in progress
              </p>
            </div>
          </main>
  
          <Footer />
        </div>
      </Fragment>
     );
}
 
export default Blog;
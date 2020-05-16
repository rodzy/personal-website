import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import styled from '@emotion/styled';

const Content = styled.p`
  position:relative;
  font-size:30px;
  top:-150px;
  font-weight:1;
`;

const Skills = () => {
    return ( 
        <Fragment>
            <div className="container">
                <main>
                    <Layout/>
                    <div>
                        <Content>

                        Hi
                        </Content>
                    </div>
                    <div>
                        <p>
                            Hola
                        </p>
                    </div>
                    <div>
                        Hola
                    </div>
                </main>
                <Footer/>
            </div>
        </Fragment>
     );
}
 
export default Skills;
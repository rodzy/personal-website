import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";


const Skills = () => {
    return ( 
        <Fragment>
            <div className="container">
                <main>
                    <Layout/>
                    <h1>Soy Skills</h1>
                </main>
                <Footer/>
            </div>
        </Fragment>
     );
}
 
export default Skills;
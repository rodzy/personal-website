import Layout from "../components/layout/Layout"
import { Fragment } from "react";
import Footer from "../components/layout/Footer";


const About = () => {
    return (
        <Fragment>
            <div className="container">
        <main>
            <Layout/>
            <h1>Hola</h1>
        </main>
        <Footer/>
        </div>
        </Fragment>
     );
}
 
export default About;
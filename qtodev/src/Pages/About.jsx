import About4 from "../Components/About/About4";
import Blog1 from "../Components/Blog/Blog1";
import Brand from "../Components/Brand/Brand";
import BreadCumb from "../Components/Common/BreadCumb";
import Project1 from "../Components/Project/Project1";

const About = () => {
    return (
        <div className="about-page">
            <BreadCumb Title="About Us"></BreadCumb>
            <About4
                MainImg="/assets/images/inner/about-us-thu.png"
                SubTitle="QTO Dev"
                Title="Dedicated to transforming your vision into  <br> innovative <span> solutions.</span>"
                Content="We transform your vision into innovative solutions that deliver results. Our expert team leverages the latest technologies to elevate your business."
                listTitle1="Innovative Strategies"
                listTitle2="24 Hour's Customer Service"  
                BoxTitle1="255"
                BoxTitle2="Satisfied Clients"                  
            ></About4>
            <Project1 
                bgImage="/assets/images/inner/project-bg-3.png"
                ClassAdd="project-area style-two"
            ></Project1>
            <Brand></Brand>
            <br/>``
            {/* <Blog1></Blog1> */}
        </div>
    );
};

export default About;
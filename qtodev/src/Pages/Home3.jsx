import About3 from "../Components/About/About3";
import Hero3 from "../Components/Banner/Hero3";
// import Blog2 from "../Components/Blog/Blog2";
// import CaseStudy from "../Components/CaseStudy/CaseStudy";
import Counter from "../Components/Counter/Counter";
import Process2 from "../Components/Process/Process2";
import Services4 from "../Components/Services/Services4";
import Testimonial3 from "../Components/Testimonial/Testimonial3";


const Home3 = () => {
    return (
        <div className="home-page3">
           <Hero3></Hero3>
           <Services4></Services4>
           <About3
                bgImg="/assets/images/home-3/about3-bg.png"
                MainImg="/assets/images/home-3/about-thu3.png"
                SubTitle="About QTo Dev"
                Title="Tailored Solutions to Fulfill Client <span>Requirements.</span>"
                Content="To empower businesses through innovative digital solutions, offering the best in design, development, and marketing."
                BoxTitle1="Cloud Based Solution"
                BoxTitle2="Best Services"  
                listTitle1="We offers custom software solutions."
                listTitle2="Expert services focused on your success."                         
           ></About3>
           <Counter></Counter>
           {/* <CaseStudy></CaseStudy> */}
           <Testimonial3></Testimonial3>
           <Process2></Process2>
           {/* <Blog2></Blog2> */}
        </div>
    );
};

export default Home3;
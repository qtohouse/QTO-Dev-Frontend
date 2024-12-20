import Blog1 from "../Components/Blog/Blog1";
import BreadCumb from "../Components/Common/BreadCumb";
import Services4 from "../Components/Services/Services4";
import Team2 from "../Components/Team/Team2";

const Services = () => {
    return (
        <div className="service-page">
            <BreadCumb Title="Services"></BreadCumb>
            <Services4></Services4>
            <Team2></Team2>
            {/* <Blog1></Blog1> */}
        </div>
    );
};

export default Services;
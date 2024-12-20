import SectionTitle from "../Common/SectionTitle";
import { Link } from "react-router-dom";

const Services4 = () => {
    // Data moved into the component
    const serviceData = [
        {
            icon: "/assets/images/inner/service-icon.png",
            title: "Web Development",
            desc: "Custom, responsive websites tailored to your business needs.",
            image: "/assets/images/inner/service-thumb3.png",
        },
        {
            icon: "/assets/images/inner/service-icon.png",
            title: "Graphic Designing",
            desc: "Brand identity, logos, and graphic design to make brand stand out.",
            image: "/assets/images/inner/service-thumb1.png",
        },
        {
            icon: "/assets/images/inner/service-icon.png",
            title: "Digital Marketing",
            desc: "Comprehensive marketing strategies to boost your online presence.",
            image: "/assets/images/inner/service-thumb2.png",
        },
        {
            icon: "/assets/images/inner/service-icon.png",
            title: "IT Management",
            desc: "Streamlined IT management to boost efficiency.",
            image: "/assets/images/inner/service-thumb4.png",
        },
    ];

    return (
        <div className="sservice-area style-two">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <SectionTitle
                                SubTitle="QTO Dev"
                                Title="Leveraging Professional IT Services  <br>for Greater<span>Success.</span>"
                            />
                        </div>
                    </div>
                    {serviceData.map((item, i) => (
                        <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                            <div className="single-service-box">
                                <div className="service-thumb">
                                    <img src={item.image} alt="thumb" />
                                </div>
                                <div className="service-icon">
                                    <img src={item.icon} alt="icon" />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">
                                        <Link to="/service/service-details">{item.title}</Link>
                                    </h3>
                                    <p className="service-text">{item.desc}</p>
                                    <div className="service-btn">
                                        <Link to="/service/service-details">
                                            <i className="bi bi-plus"></i> READ MORE
                                        </Link>
                                    </div>
                                    <div className="services-shape bounce-animate-3">
                                        <img src="/assets/images/inner/serice-shape.png" alt="shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="service-shape bounce-animate3">
                    <img src="/assets/images/service5.png" alt="service5" />
                </div>
                <div className="service-shape2">
                    <img src="/assets/images/service7.png" alt="service5" />
                </div>
                <div className="service-shape3 bounce-animate4">
                    <img src="/assets/images/service8.png" alt="service5" />
                </div>
            </div>
        </div>
    );
};

export default Services4;

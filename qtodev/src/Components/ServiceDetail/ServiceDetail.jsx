import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/faq.json';

const ServiceDetail = () => {

    const Services = [
        'Responsive Web Design',
        'IT Solution',
        'Technology Consult',
        'Social Media Integration',
        'UI/UX Design',
        'Custom Web Application',
      ];  

      const accordionContentRef = useRef(null);
      const [openItemIndex, setOpenItemIndex] = useState(-1);
      const [firstItemOpen, setFirstItemOpen] = useState(true);
    
      const handleItemClick = index => {
        if (index === openItemIndex) {
          setOpenItemIndex(-1);
        } else {
          setOpenItemIndex(index);
        }
      };
      useEffect(() => {
        if (firstItemOpen) {
          setOpenItemIndex(0);
          setFirstItemOpen(false);
        }
      }, [firstItemOpen]);   
      

    return (
            <div className="services-details-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="services-details-thumb">
                                        <img src="/assets/images/inner/service-details.png" alt="thumb" />
                                    </div>
                                    <div className="services-details-content">
                                        <h4 className="services-details-title">Website Development</h4>

                                        <p className="services-details-desc">Our web development services blend innovative design with robust functionality to create powerful, user-centric websites that drive engagement and growth. From responsive layouts to seamless user experiences, we prioritize each client’s unique goals, ensuring their digital presence is both compelling and effective.</p>

                                        <p className="services-details-desc">By leveraging the latest technologies and best practices, we build scalable and adaptable solutions that deliver value across devices and platforms. Trust us to transform your vision into a digital reality that stands out in today’s competitive online landscape. 	
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-detalis-text-box">
                                                <div className="service-details-content">
                                                    <h4>Why Choose Us</h4>
                                                    <p>We are a team of creative designers, developers, and marketers committed to bringing your vision to life. </p>
                                                </div>
                                                <div className="service-details-list">
                                                    <ul>
                                                        <li><i className="bi bi-arrow-right"></i>Innovative Solutions</li>
                                                        <li><i className="bi bi-arrow-right"></i>Scalable Technology</li>
                                                        <li><i className="bi bi-arrow-right"></i>Reliable Expertise</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-details-icon-box">
                                                <div className="service-det-icon">
                                                    <img src="/assets/images/inner/det-icon.png" alt="icon" />
                                                </div>
                                                <div className="service-det-content">
                                                    <h3>Empowering Your Success</h3>
                                                    <p>Our expertise and dedication empower you with tools for sustainable success in a competitive digital landscape, driving growth and innovation at every step.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-12 col-md-12">
                                        <div className="tab_container">
                                            <div className="feq-content">
                                                <h3 className="faq-title">Frequently Asked Questions</h3>
                                                <p className="faq-description">Alternative innovation to ethical network environmental whiteboard pursue compelling results for premier methods empowerment. Dramatically architect go forward opportunities</p>
                                            </div>
                                            <div id="tab" className="tab_content">
                                                <ul className="accordion">
                                                {data.map((item, index)=>(
                                                    <li key={index} className={`cs_accordian ${index === openItemIndex ? "active" : "" }`}>
                                                        <a onClick={() => handleItemClick(index)}><span>{item.title}</span></a>
                                                        <p ref={accordionContentRef}>{item.desc}</p>
                                                    </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="widget-sidber">
                                        <div className="widget-sidber-content">
                                            <h4>Main Services</h4>
                                        </div>
                                        <div className="widget-category">
                                            <ul>
                                            {Services.map((item, i) => ( 
                                                <li key={i}><Link to="/service/service-details"><img src="/assets/images/inner/category-icon.png" alt="" />{item}<i className="bi bi-arrow-right"></i></Link></li>
                                            ))}
                                            </ul>
                                        </div>
                                    </div>						
                                    {/* <div className="widget-sidber">
                                        <div className="widget-sidber-content">
                                            <h4>Downloads</h4>
                                        </div>
                                        <div className="widget-sidber-download-button">
                                            <a href="#"><i className="bi bi-file-earmark-pdf"></i>Service Report<span><i className="bi bi-download"></i></span></a>

                                            <a className="active" href="#"><i className="bi bi-file-earmark-pdf"></i>Download Lists<span><i className="bi bi-download"></i></span></a>
                                        </div>
                                    </div> */}
                                    <div className="widget-sidber-contact-box">
                                        <div className="widget-sidber-contact">
                                            <img src="/assets/images/inner-images/sidber-cont-icon.png" alt="" />
                                        </div>
                                        <p className="widget-sidber-contact-text">Ping Us</p>
                                        <h3 className="widget-sidber-contact-number">312-544-0024</h3>
                                        <span className="widget-sidber-contact-gmail"><i className="bi bi-envelope-fill"></i>info@qtodev.com</span>
                                        <div className="widget-sidber-contact-btn">
                                           <Link to="/contact">Contact Us <i className="bi bi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ServiceDetail;
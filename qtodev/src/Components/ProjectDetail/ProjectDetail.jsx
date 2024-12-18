import { Link } from "react-router-dom";

const ProjectDetail = () => {

    const InfoBox = [
        {title:'Date', info:'10 January, 2024'},
        {title:'Client', info:'QTO Solutions'},
        {title:'Website', info:'www.qtosol.com'},
        {title:'Location', info:'Georgia, USA'},
      ];      

      const Services = [
        'Website Development',
        'UI/UX Design',
        'SEO Optimization',
        'Content Management',
        'Improve Performance ',
      ];

    return (
            <div className="project-details-area">
                <div className="container">
                    <div className="row">
                        <div className="project-details">
                            <div className="project-details-thumb">
                                <img src="/assets/images/inner/project-det-thu.png" alt="thu" />
                            </div>
                        </div>
                    </div>
                    <div className="row project-box-info">
                    {InfoBox.map((item, i) => (  
                        <div key={i} className="col-lg-3 col-md-3">
                            <div className="project-details-box">
                                <p>{item.title}</p>
                                <h6>{item.info}</h6>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-content">
                                        <h4 className="project-details-title">Here To Know About This Project</h4>

                                        <p className="project-details-desc"><u>www.qtosol.com</u>  is a custom-built website designed for QTO Solutions, a leading USA-based estimation service provider for general contractors, subcontractors, vendors, suppliers and manufacturers.  </p>

                                        <p className="project-details-desc">This project involved creating a seamless, intuitive platform that showcases QTO Solutions’ expertise in delivering accurate construction estimates. By focusing on responsive design, streamlined navigation, and user-friendly functionality, we brought QTO Solutions’ unique services to the forefront. From service descriptions to client testimonials, every aspect of this website was crafted with care to reflect the professionalism and precision that QTO Solutions brings to their clients. 	
                                        </p>
                                        <div className="project-det-title">
                                            <h3>The Challenge Of Project</h3>
                                        </div>
                                        <p className="project-det-desc">Developing QTO Solutions required balancing detailed, user-friendly navigation with seamless responsiveness across devices. We focused on creating an engaging, optimized platform that highlights QTO Solutions' expertise for diverse audiences.</p>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="project-details-item-images">
                                                <img src="/assets/images/inner/project-det-img.png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="project-details-list-item">
                                                <h4>Process & Results</h4>
                                                <ul>
                                                    <li><i className="bi bi-check-circle-fill"></i>Requirement Gathering</li>
                                                    <li><i className="bi bi-check-circle-fill"></i>Design & Prototyping</li>
                                                    <li><i className="bi bi-check-circle-fill"></i>Development & Integration</li>
                                                    <li><i className="bi bi-check-circle-fill"></i>Content Optimization</li>
                                                    <li><i className="bi bi-check-circle-fill"></i>Testing & Launch</li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <a className="project-details-text" href="project-details.html">Competently architect intermandated deliverables client
                                            niches continually underwhelm
                                        </a>
                                        <p className="project-details-desc">Appropriately communicate economically sound e-commerce after enterprise services. Dramatically target cross-media solutions and error-free platforms. Monotonectally pontificate 24/365 human capital and dynamic potentialities compellingly pursue	
                                        </p> */}
                                    </div>
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
                                    <div className="widget-sidber-contact-box">
                                        <div className="widget-sidber-contact">
                                            <img src="/assets/images/inner-images/sidber-cont-icon.png" alt="" />
                                        </div>
                                        <p className="widget-sidber-contact-text">Call Us Anytime</p>
                                        <h3 className="widget-sidber-contact-number">+123 (4567) 890</h3>
                                        <span className="widget-sidber-contact-gmail"><i className="bi bi-envelope-fill"></i>example@gmail.com</span>
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

export default ProjectDetail;
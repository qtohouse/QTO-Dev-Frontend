import {createBrowserRouter,} from "react-router-dom";
import About from "../Pages/About";
import Layout3 from "../Layout/Layout3";
import Home3 from "../Pages/Home3";
import Team from "../Pages/Team";
import TeamDetails from "../Pages/TeamDetails";
import Testimonial from "../Pages/Testimonial";
import ProjectDetails from "../Pages/ProjectDetails";
import ProjectDetails2 from "../Pages/ProjectDetails2";
import PricingPage from "../Pages/PricingPage";
import FaqPage from "../Pages/FaqPage";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import ServiceDetails from "../Pages/ServiceDetails";
import Blog from "../Pages/Blog";
import BlogSidebar from "../Pages/BlogSidebar";
import BlogDetails from "../Pages/BlogDetails";
import Project from "../Pages/Project";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout3></Layout3>,
      children: [
        {
          path: "/",
          element: <Home3></Home3>,
        },
        {
            path: "/about",
            element: <About></About>,
        }, 
        {
          path: "/team",
          element: <Team></Team>,
        }, 
        {
          path: "/team/team-details",
          element: <TeamDetails></TeamDetails>,
        },
        {
          path: "/testimonial",
          element: <Testimonial></Testimonial>,
        },
        {
          path: "/project",
          element: <Project></Project>,
        },           
        {
          path: "/project/project-details",
          element: <ProjectDetails></ProjectDetails>
        }, 
        {
          path: "/project/project-details2",
          element: <ProjectDetails2></ProjectDetails2>
        }, 
        {
          path: "/service",
          element: <Services></Services>,
        }, 
        {
          path: "/service/service-details",
          element: <ServiceDetails></ServiceDetails>,
        },                   
        {
          path: "/pricing",
          element: <PricingPage></PricingPage>,
        },  
        {
          path: "/faq",
          element: <FaqPage></FaqPage>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        }, 
        {
          path: "/blog/blog-details",
          element: <BlogDetails></BlogDetails>,
        },           
        {
          path: "/blog-sidebar",
          element: <BlogSidebar></BlogSidebar>,
        },              
        {
          path: "/contact",
          element: <Contact></Contact>,
        },                                                              
      ],
    },

    {
      path: 'home3',
      element: <Layout3></Layout3>,
      children: [
        {
          index: true,
          element: <Home3></Home3>,
        },                           
      ],
    },       
  ]);
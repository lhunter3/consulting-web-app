
import React from "react";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { features } from "../constants";
import { scrollToSection } from "../utils/scrollToSection";
import { HashLink as Link } from "react-router-hash-link";
import ScrollToTop from "../utils/ScrollToTop";

export function Services(){

    return(
        <>
    <ScrollToTop />

        <Navbar/>
        <Hero/>
        <Content/>
        <Footer/>

            </>
    );

}




const Hero = () => {

return(
<section id='heroId' className="bg-primary-bg text-white">
   
   <div className="py-10 flex flex-col justify-center hero-height max-w-screen-xl xl:max-w-screen-2xl px-small px-md  sm:px-small px-md  px-large px-md">
   <div className="flex-grow flex items-center">
       <div>
       <h2 className="text-5xl sm:text-6xl lg:text-7xl leading-none font-bold tracking-tight mb-4">
          <span className="text-underline">Services</span><br />
           
         </h2>
         <p className="text-md md:text-2xl my-4"></p>
       </div>
     </div>
     <div>
     <button onClick={() => scrollToSection('contentId','/services')}>
       <i className="fa fa-arrow-down fa-2x animate-bounce bottom-0"></i>
     </button>
     </div>
     
   </div>
   </section>
    )
};

const Content = () => {
    return(

        <section id='contenId' className="mb-16 px-small px-large ">
            <div>
                <ServiceShowcase/>
                <CTA/>
            </div>
        </section>
    )
};


const ServiceItem = ({ icon, title, content, index }) => (
  <div className={`flex flex-row pt-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-primary-bg`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className=" font-semibold text-primary-bg text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className=" font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const ServiceShowcase = () =>  (
  <section id="features" className='md:mt-32 mt-16 flex md:flex-row flex-col'>
    <div className='flex-auto flex justify-center items-start flex-col'>
      <h2 className='text-4xl md:text-7xl font-extrabold text-primary-bg  w-full'>
        We will <span className="text-text-accent">Help</span>, <br className="sm:block hidden" /> with your IT needs.
      </h2>
      <p className={`font-normal max-w-[470px] mt-5`}>
         
      </p>

      <button styles={`mt-10`} />
    </div>

    <div className='flex-col md:pl-6 lg:pl-48'>
      {features.map((feature, index) => (
        <ServiceItem key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);


const CTA = () => (
  <div className='rounded-2xl shadow-2xl md:mt-32 mt-16 bg-primary-bg h-full hover:bg-primary-bg-hover '>
    <Link to={'../#contact'} relative="path" className="flex flex-col items-center text-center py-4">
      <h2 className='text-2xl md:text-5xl font-extrabold text-white w-full'><span id='excl'className="">Learn More</span></h2>
      <p className='mt-2 max-w-[470px] text-white'>
        Contact us today to get started.
      </p>
    </Link>
</div>
);




export default Services;
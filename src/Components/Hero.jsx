import React from 'react';
import { scrollToSection } from '../utils/scrollToSection';

const Hero = () => (
    <section id='heroId' className="bg-primary-bg text-white">
   
     <div className="py-10 flex flex-col justify-center hero-height max-w-screen-xl xl:max-w-screen-2xl px-small px-md  sm:px-small px-md  px-large px-md">
     <div className="flex-grow flex items-center">
         <div>
         <h2 className="text-5xl sm:text-6xl lg:text-7xl leading-none font-bold tracking-tight mb-4">
             We are <span className="text-underline">Something IT</span><br />
             Solutions
           </h2>
           <p className="text-md md:text-2xl my-4">Making your biggest problems disappear</p>
         </div>
       </div>
       <div>
       <button onClick={() => scrollToSection('promptId')}>
         <i className="fa fa-arrow-down fa-2x animate-bounce bottom-0"></i>
       </button>
       </div>
       
     </div>
     </section>
   );

   export default Hero;
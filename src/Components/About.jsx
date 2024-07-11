import React, { useEffect, useRef, useState } from 'react';
import { Outlet, Link } from "react-router-dom";

const About = () => {
    const [animationStarted, setAnimationStarted] = useState(false);
    const aboutRef = useRef(null);
  
    useEffect(() => {
      const aboutId = aboutRef.current;
      if (!aboutId) return;
  
      const handleScroll = () => {
        const { top, bottom } = aboutId.getBoundingClientRect();
        const isVisible = top < window.innerHeight + 250 && bottom >= 0; // Check if top is above the bottom of the viewport and bottom is below 0
  
        if (isVisible) {
          aboutId.classList.add('animate-slide-in');
          setAnimationStarted(true);
        } else {
          aboutId.classList.remove('animate-slide-in');
          setAnimationStarted(false);
        }
      };
  
      handleScroll(); // Initial check on mount
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div  className={`md:mb-32 mb-24  bg-white pr-0 lg:pr-20 pb-0 lg:pb-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-4 ${!animationStarted ? 'opacity-1 duration-75' : 'opacity-100 translate-y-0 duration-100'}`}>
        <div  className='h-40 md:h-60 lg:h-auto'>
          <img 
          
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            className="w-full h-full object-cover lg:rounded-r-lg drop-shadow-lg"
            alt="People working together"
          />
        </div>
        
        <div  className='flex flex-col justify-center py-6 lg:py-10 px-small px-large'>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl leading-none font-semibold tracking-tight mb-4 text-primary-bg">About <span className='text-underline-static'>Us</span></h2>
          <p className="text-md md:text-2xl my-4">From strategy to digital product building and beyond, we bring the right mix of services to accelerate your vision with holistic, practical solutions. We listen deeply and share our knowledge every step of the way, empowering your teams to continue the momentum after we're gone.</p>
          <Link to='/services' className="relative overflow-hidden group bg-transparent text-text-accent px-4 py-2 rounded-lg max-w-max border border-text-accent hover:bg-text-accent hover:text-white hover:border-transparent transition duration-100 ease-in-out">
            <span className="absolute inset-0 bg-text-accent opacity-0 group-hover:opacity-100 transition duration-100 ease-in-out"></span>
            <span className="relative z-10">Explore our services</span>
          </Link>
        </div>
      </div>
    );
  };

  export default About;
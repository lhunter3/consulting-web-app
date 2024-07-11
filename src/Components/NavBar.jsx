import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Menu, X, Linkedin, Twitter, Facebook } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);
  
    return (
      <div className='bg-primary-bg px-large px-md px-md px-small px-md '>
        <nav className={`bg-primary-bg  text-white pt-5 py-4 transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className=" flex justify-between items-center">
            <div className="text-xl md:text-xl font-semibold mb-4">Something IT</div>
            <div className="hidden md:flex space-x-4 items-center"> {/* Added items-center */}
              <a href="#" onClick={()=>scrollToSection('aboutId',"/")} className="hover:text-primary-300">About</a>
              <a href="#" onClick={()=>scrollToSection('servicesId','/services')} className="hover:text-primary-300">Services</a>
              <a href="#" onClick={()=>scrollToSection('testimonialsId','/')}className="hover:text-primary-300">Testimonials</a>
              <a href="#" onClick={()=>scrollToSection('contactId','/')}className="hover:text-primary-300">Contact</a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden mt-2">
              
              <a href="#" onClick={()=>scrollToSection('aboutId')} className="block py-2 hover:bg-primary-bg-hover">About</a>
              <a href="#" onClick={()=>scrollToSection('servicesId')} className="block py-2 hover:bg-primary-bg-hover">Services</a>
              <a href="#" onClick={()=>scrollToSection('testimonialsId')}className="block py-2 hover:bg-primary-bg-hover">Testimonials</a>
              <a href="#" onClick={()=>scrollToSection('contactId')}className="block py-2 hover:bg-primary-bg-hover">Contact</a>
            </div>
          )}
        </nav>
      </div>
      
    );
  };

  export default Navbar;
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Menu, X, Linkedin, Twitter, Facebook } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';
import { HashLink as Link } from 'react-router-hash-link';

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
            <Link to="../" className="text-xl md:text-xl font-semibold mb-4">Something IT</Link>
            <div className="hidden md:flex space-x-4 items-center"> {/* Added items-center */}
              <Link to={'../#about'}  className="hover:text-primary-300">About</Link>
              <Link to={'../services'} className="hover:text-primary-300">Services</Link>
              <Link to={'../#testimonials'} className="hover:text-primary-300">Testimonials</Link>
              <Link to={'../#contact'} className="hover:text-primary-300">Contact</Link>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden mt-2">
              
              <Link to={'../#aboutId'} className="block py-2 hover:bg-primary-bg-hover">About</Link>
              <Link to={'../services'} className="block py-2 hover:bg-primary-bg-hover">Services</Link>
              <Link to={'../#testimonials'} className="block py-2 hover:bg-primary-bg-hover">Testimonials</Link>
              <Link to={'../#contact'} className="block py-2 hover:bg-primary-bg-hover">Contact</Link>
            </div>
          )}
        </nav>
      </div>
      
    );
  };

  export default Navbar;
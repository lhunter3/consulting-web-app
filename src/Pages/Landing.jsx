import React, {  } from 'react';
import Success from '../Components/Success';
import WordScroll from '../Components/WordWrapper';
import Navbar from '../Components/NavBar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import { ScrollProgressBar } from '../utils/scrollToSection';
import Prompt from '../Components/Prompt';
import ScrollToTop from '../utils/ScrollToTop';


export function Landing() {
  return (
    <>
    <ScrollToTop />
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <WordScroll />
      <Prompt />
      <span id='about'>
        </span>
      <About/>
      <Success/>
      <Contact />
      <Footer />

      </>
  );
}

export default Landing;
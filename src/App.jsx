import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Menu, X, Linkedin, Twitter, Facebook } from 'lucide-react';
import Testimonials from './Components/Testimonials';
import Success from './Components/Success';
import WordScroll from './Components/WordWrapper';
import Information from './Components/Information';
import Tabs from './Components/Tabs';
import Navbar from './Components/NavBar';
import Hero from './Components/Hero';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { ScrollProgressBar } from './utils/scrollToSection';
import Prompt from './Components/Prompt';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing';
import Services from './Pages/Services';



const App = () => (

  <BrowserRouter>
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/" element={<Landing />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  </BrowserRouter>
      
);

export default App;
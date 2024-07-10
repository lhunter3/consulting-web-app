import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Menu, X, Linkedin, Twitter, Facebook } from 'lucide-react';
import Testimonials from './Components/Testimonials';
import Success from './Components/Success';
import WordScroll from './Components/WordWrapper';
import Information from './Components/Information';
import Tabs from './Components/Tabs';

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
      // Calculate the offset of the section relative to the top of the page
      var offset = section.offsetTop;
      
      // Smooth scroll to the section
      window.scrollTo({
          top: offset,
          behavior: 'smooth',
            // Optional: Smooth scroll behavior
      });
      
      console.log('Scrolled to ' + sectionId);
  }

  console.log('Section not found');
}

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
          <div className="text-xl md:text-xl font-semibold mb-4">ConsultCo</div>
          <div className="hidden md:flex space-x-4 items-center"> {/* Added items-center */}
            <a href="#" onClick={()=>scrollToSection('aboutId')} className="hover:text-primary-300">About</a>
            <a href="#" onClick={()=>scrollToSection('servicesId')} className="hover:text-primary-300">Services</a>
            <a href="#" onClick={()=>scrollToSection('testimonialsId')}className="hover:text-primary-300">Testimonials</a>
            <a href="#" onClick={()=>scrollToSection('contactId')}className="hover:text-primary-300">Contact</a>
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

const About = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const aboutId = document.getElementById('aboutId');
    if (!aboutId) return;

    const handleScroll = () => {
      const { top } = aboutId.getBoundingClientRect();
      if (top < window.innerHeight +100) {
        aboutId.classList.add('animate-slide-in');
        setAnimationStarted(true); // Update state to reveal element
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='aboutId' className={`md:mb-32 mb-24 bg-white pr-0 lg:pr-20 pb-0 lg:pb-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-4 ${!animationStarted ? 'hidden' : ''}`}>
      <div className='h-40 md:h-60 lg:h-auto'>
        <img 
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          className="w-full h-full object-cover lg:rounded-r-lg drop-shadow-lg"
          alt="People working together"
        />
      </div>
      
      <div className='flex flex-col justify-center py-6 lg:py-10 px-small px-large'>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl leading-none font-semibold tracking-tight mb-4 text-primary-bg">About <span className='text-underline'>Us</span></h2>
        <p className="text-md md:text-2xl my-4">From strategy to digital product building and beyond, we bring the right mix of services to accelerate your vision with holistic, practical solutions. We listen deeply and share our knowledge every step of the way, empowering your teams to continue the momentum after we're gone.</p>
        <button onClick={() => scrollToSection('servicesId')} className="relative overflow-hidden group bg-transparent text-text-accent px-4 py-2 rounded-lg max-w-max border border-text-accent hover:bg-text-accent hover:text-white hover:border-transparent transition duration-300 ease-in-out">
          <span className="absolute inset-0 bg-text-accent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></span>
          <span className="relative z-10">Explore our services</span>
        </button>
      </div>
    </div>
  );
};



const Services = () => {
  const servicesRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true); // Set flag to true once animated
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3, // Adjust threshold as needed
      }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      id='servicesId'
      ref={servicesRef}
      className="pb-0 lg:pb-16 pr-0   grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-4 md:mb-32 mb-24"
    >
      <div className="lg:order-last h-40 md:h-60 lg:h-auto ">


{/* IMAGE SPAN */}
        <span className='visible lg:hidden'>
        <img
          src="https://t4.ftcdn.net/jpg/02/07/15/43/360_F_207154341_oGjfqwyT7r1Er73QSQQGvuYiDZdHtmCX.jpg"
          className="w-full h-full object-cover lg:rounded-l-lg drop-shadow-lg"
          alt="Modern office space"
        />
        </span>
       
{/* TABS SECTION  */}
        <div className="hidden lg:flex flex-col justify-top  xl:px-28 md:px-6  ">
          <Tabs />

        </div>

        
      </div>

      <div className="flex flex-col justify-top sm:py-6 lg:py-0  pl-6 px-large px-small">
        <h2 className='text-5xl sm:text-6xl lg:text-7xl leading-none font-semibold tracking-tight mb-4'>
          <span className='text-underline'>Services</span>
        </h2>
        <p className="text-md md:text-2xl my-4">
          From strategy to digital product building and beyond, we bring the right mix of services to accelerate your vision with holistic, practical solutions. We listen deeply and share our knowledge every step of the way, empowering your teams to continue the momentum after we're gone.
        </p>

       
      </div>
    </div>
  );
};


const Impact = () => (
  <div id='impactId' className="pr-0 lg:pr-20 md:pb-32 pb-14 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-4 md:mb-32 mb-24">
    <div className="h-40 md:h-60 lg:h-auto ">
      <img 
        src="https://wallpapers.com/images/hd/4k-tech-1gwo74sem80b3ys9.jpg" 
        alt="Two men shaking hands outdoors, one in a white shirt and the other in a gray suit" 
        className="w-full h-full object-cover lg:rounded-r-lg drop-shadow-lg"
      />
    </div>
    <div className='flex flex-col justify-center pt-6 lg:py-10 pl-6 px-large px-small '>
      <h2 className="text-5xl sm:text-6xl lg:text-7xl leading-none font-semibold tracking-tight mb-4">Exponential <span className="italic text-underline">Impact</span></h2>
      <p className="text-md md:text-2xl my-4">Together with leading and emerging technology partners, we innovate and co-create to deliver the best ideas and solutions for you.</p>
      <div className="flex justify-start space-x-1">
          <img src="data:image/png;base64,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" alt="Google Cloud logo" className="h-10" />
          <img src="data:image/png;base64,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" alt="Databricks logo" className="h-10" />
          <img src="data:image/png;base64,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" alt="AWS Logo" className="h-10" />         
      </div>
    </div>
  </div>
);

const Prompt = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3, // Adjust threshold as needed
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-primary md:my-72 my-52 px-small   px-large ">
      <div className="">
        <div className="grid grid-flow-row lg:grid-flow-col gap-16" ref={heroRef}>
          <div className={`text-4xl md:text-7xl font-extrabold ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 transition duration-1000 ease-out'}`}>
            <div>
              From
            </div>
            <div className="flex items-baseline">
              Day One <span className='text-text-accent'>,</span>
            </div>
          </div>
          <div className={`text-xl md:text-5xl font-medium ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 transition duration-1000 ease-out delay-200'}`}>
            Our clients have trusted us to create customized solutions to solve their biggest problems.
          </div>
        </div>
      </div>
    </section>
  );
};


const Info = () =>(
  <div className="">
  <div><About /></div>
  <div><Services/></div>
  <Impact />
</div>
);



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the formData to your backend API
      // const response = await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // if (!response.ok) throw new Error('Failed to send email');

      setSubmitMessage('Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contactId' className="md:py-32 py-14 bg-white">
      <div className="max-w-3xl mx-auto px-small px-md ">
        <h2 className="md:text-5xl text-4xl font-semibold mb-4 lg:text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary-400 focus:border-transparent"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary-400 focus:border-transparent"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary-400 focus:border-transparent"
            required
          ></textarea>
          <button 
            type="submit"
            disabled={isSubmitting}
            className="relative overflow-hidden group bg-transparent text-text-accent px-4 py-2 rounded-lg max-w-max border border-text-accent hover:bg-text-accent hover:text-white hover:border-transparent transition duration-300 ease-in-out"
          >
            <span className="absolute inset-0 bg-text-accent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></span>
            <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
        {submitMessage && <p className="mt-4 text-center text-primary-400">{submitMessage}</p>}
      </div>
    </section>
  );
};


const Footer = () => (
  <footer className="bg-primary-bg text-white py-8 px-4 sm:px-small px-md ">
    <div className="container mx-auto flex flex-col items-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:justify-between max-w-4xl w-full">
        <div className="text-center md:text-start w-full md:w-auto">
          <h3 className="text-lg font-semibold mb-2">ConsultCo</h3>
          <p className="text-sm text-gray-400 max-w-xs mx-auto">Transforming businesses through innovative consulting solutions since 2000.</p>
        </div>
        
        <div className="text-center md:text-start w-full md:w-auto">
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-primary-300"><Linkedin size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-primary-300"><Twitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-primary-300"><Facebook size={24} /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; 2024 ConsultCo. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const animationFrame = useRef(null);

  const updateScrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = Math.min(scrollPx / winHeightPx, 1);
    
    setScrollProgress(scrolled);
    animationFrame.current = requestAnimationFrame(updateScrollProgress);
  };

  useEffect(() => {
    animationFrame.current = requestAnimationFrame(updateScrollProgress);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <div  className="fixed top-0 left-0 w-full h-1 bg-primary-bg-hover z-50">
      <div
        className="h-full bg-text-accent transition-all duration-0 ease-in-out"
        style={{ width: `${scrollProgress * 100}%` }}
      ></div>
    </div>
  );
};

const pages = [
  { gradient: 'pink', content: <h1>Welcome</h1> },
  { gradient: 'teal', content: <p>Scroll for more</p> },
  { gradient: 'tomato', content: <button>Click me!</button> },
];

const App = () => (

 
  
  < >
    <ScrollProgressBar />
    <Navbar />

      <Hero />
      <WordScroll />
      <Prompt />
      {/* <Information pages={pages}/> */}
      <Info/>
      <Success/>
      <Contact />
      <Footer />
  </>
);

export default App;
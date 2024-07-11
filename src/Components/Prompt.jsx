import React, { useEffect, useRef, useState } from 'react';

const Prompt = () => {
  const sectionRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;

    const handleScroll = () => {
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Check if section is in view
        if (sectionTop < windowHeight && sectionBottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    // Initial check when component mounts
    handleScroll();

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section  className="bg-primary md:my-72 my-52 px-small px-large" ref={sectionRef}>
      <div className="">
        <div className="grid grid-flow-row lg:grid-flow-col gap-16">
          <div className={`text-4xl md:text-7xl font-extrabold animated-text ${isVisible ? 'show' : ''}`} ref={text1Ref}>
            <div>
              From
            </div>
            <div className="flex items-baseline">
              Day One <span className='text-text-accent'>,</span>
            </div>
          </div>
          <div className={`text-xl md:text-5xl font-medium animated-text ${isVisible ? 'show' : ''}`} ref={text2Ref}>
            Our clients have trusted us to create customized solutions to solve their biggest problems.
          </div>
        </div>
      </div>
    </section>
  );
};

  export default Prompt;
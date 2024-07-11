import { useState, useEffect, useRef } from 'react';

export function scrollToSection(sectionId, fallbackLink) {
  var section = document.getElementById(sectionId);
  if (section) {
      // Calculate the offset of the section relative to the top of the page
      var offset = section.offsetTop;
      
      // Smooth scroll to the section
      window.scrollTo({
          top: offset,
          behavior: 'smooth'
      });
      
      console.log('Scrolled to ' + sectionId);
  } else {
      // Section not found, redirect to the fallback link
      window.location.href = fallbackLink;
      console.log('Section not found, redirected to ' + fallbackLink);
  }
};





export function ScrollProgressBar() {
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


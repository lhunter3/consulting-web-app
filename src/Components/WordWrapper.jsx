import React, { useState, useEffect } from 'react';

const wordsList = [
  "Technology",
  "Digital Transformation",
  "Software Development",
  "Strategy",
  "Planning",
  
];

const WordScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id='promptId' className="words-wrapper overflow-hidden h-16 flex items-center">
      <div
        className="word-lines flex space-x-4"
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        {wordsList.map((word, index) => (
          <div
            key={index}
            className="word uppercase font-semibold text-7xl tracking-tight whitespace-nowrap text-gray-300"
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordScroll;

import React, { useRef, useCallback } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Page = React.memo(({ offset, gradient, onClick, content }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={`slope-begin ${gradient}`} />
    </ParallaxLayer>
    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`slope-end ${gradient}`} />
    </ParallaxLayer>
    <ParallaxLayer className="content" offset={offset} speed={0.3}>
      {content}
    </ParallaxLayer>
  </>
));

const Information = ({ pages = [] }) => {
  const parallax = useRef(null);

  const scroll = useCallback((to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  }, []);

  if (pages.length === 0) {
    return <div>No pages to display</div>;
  }

  return (
    <div className="parallax-wrapper">
      <Parallax ref={parallax} pages={pages.length} className="parallax-container">
        {pages.map((page, index) => (
          <Page
            key={index}
            offset={index}
            gradient={page.gradient || 'pink'}
            onClick={() => scroll((index + 1) % pages.length)}
            content={page.content || `Page ${index + 1}`}
          />
        ))}
      </Parallax>
      <style jsx global>{`
        .parallax-wrapper {
          position: absolute    ;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .parallax-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        .slope-begin, .slope-end {
          position: absolute;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        .slope-begin {
          clip-path: polygon(20% 0, 70% 0, 50% 100%, 0 100%);
          z-index: 2;
        }
        .slope-end {
          clip-path: polygon(70% 0, 100% 0, 100% 100%, 50% 100%);
          z-index: 1;
        }
        .content {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          font-weight: 800;
          color: white;
          z-index: 3;
        }
        .pink {
          background: linear-gradient(to right, deeppink 0%, coral 100%);
        }
        .teal {
          background: linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%);
        }
        .tomato {
          background: linear-gradient(to right, tomato 0%, gold 100%);
        }
      `}</style>
    </div>
  );
};

export default Information;
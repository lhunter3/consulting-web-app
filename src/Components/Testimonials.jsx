import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  // Settings for the vertical carousel
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 300,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  };

  // Testimonials data
  const testimonials = [
    { text: "ConsultCo transformed our business strategy, leading to a 200% growth in just one year." },
    { text: "Their financial consulting services helped us optimize our operations and increase profitability." },
    { text: "The digital transformation guidance we received was invaluable in modernizing our infrastructure." },
    { text: "The team's expertise in market analysis helped us identify new opportunities for expansion." },
    { text: "Their strategic planning services set us on a path for sustainable long-term growth." }
  ];

  return (
    <div className="py-6 text-white">
      <div className='h-fit'>
        <Slider {...settings} className="slick-slider vertical">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="slick-slide mb-4">
              <div className="bg-primary-bg-hover p-6 lg:p-10 rounded-lg shadow-md">
                <p className="text-white">"{testimonial.text}"</p> 
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
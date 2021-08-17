import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import { ImageData } from './ImageData';
import CardSlide from './Card';
import './Slide.css';

function Slide () {
    const ref = useRef({});

    const next = () => {
      ref.current.slickNext();
    };
  
    const previous = () => {
      ref.current.slickPrev();
    };
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 2,
        cssEase: "linear",
        accessibility: true,
        draggable: true,
        autoplaySpeed :3000,
        pauseOnHover: true
      };
      const cards = ImageData.map((slide, index) => {
        return(
            <div className = 'cardSlides'>
                <CardSlide image={slide.image} />
            </div>
        )
      });
    return (
        <div>
            <div className='slide'>
              <button onClick={previous} className='btn btnone'>
                <img  src='/images/arrowicon.png' alt='logo' />
              </button>
              <button onClick={next} className='btn btntwo'>
                <img  src='/images/arrowicons.png' alt='logo'  />
              </button>
                <Slider  ref={ref} {...settings}>
                    {cards}
                </Slider>
              
            </div>
        </div>
    );
}

export default Slide;

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import CardSocial from './CardSocial';
import './SlideSocial.css';

function SlideSocial () {
    var [current, setCurrent] = useState(1)
    const ref = useRef({});

    const next = () => {
      ref.current.slickNext();
      if (current > 9){
        setCurrent(1)
      } else {
        setCurrent(current+1)
      }
    };
    const previous = () => {
      ref.current.slickPrev();
      if (current < 2){
        setCurrent(10)
      } else {
        setCurrent(current-1)
      }
    };
    const settings = {
        dots: false,
        dotsClass: "slick-dots slick-thumb",
        arrows: false,
        infinite: true,
        speed: 450,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: "linear",
        centerMode: true,
        centerPadding: '70px',
        accessibility: true,
        draggable: true,
        autoplaySpeed :3000,
        pauseOnHover: true
      };
    const A = [1,2,3,4,5,6,7,8,9,10]
      const cards = A.map((slide, index) => {
        return(
            <div className = 'cardSlides'>
                <CardSocial key={index}/>
            </div>
        )
      });
    return (
        <div>
            <div className='slides'>
                <Slider  ref={ref} {...settings}>
                    {cards}
                </Slider>
                <button onClick={previous} className='btnsone'>
                    <img  src='/images/arrow.png' alt='logo' />
                </button>
                <div className="onepage">
                    <a>{(current) + '/' + 10 }</a>
                </div>
                <button onClick={next} className='btnstwo'>
                    <img  src='/images/arrow2.png' alt='logo'  />
                </button>
            </div>
        </div>
    );
}

export default SlideSocial;

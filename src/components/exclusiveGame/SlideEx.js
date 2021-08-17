import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import CardEx from './CardEx';
import './SlideEx.css';

function SlideEx () {
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
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        centerMode: true,
        centerPadding: '600px'
      };
    const A = [1,2,3,4,5,6,7,8,9,10]
      const cards = A.map((slide, index) => {
        return(
          <div className='cardEx'>
            <CardEx key={index}/>
          </div>
        )
      });
    return (
        <div>
            <div className='slideEx'>
                <Slider ref={ref} {...settings}>
                    {cards}
                </Slider>
                <button onClick={previous} className='buttonone'>
                    <img  src='/images/arrow.png' alt='logo' />
                </button>
                <div className="onepages">
                    <a>{(current) + '/' + 10 }</a>
                </div>
                <button onClick={next} className='buttontwo'>
                    <img  src='/images/arrow2.png' alt='logo'  />
                </button>
            </div>
        </div>
    );
}

export default SlideEx;

import CardPromotion from './CardPromotion';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import './SlidePromo.css';

function SlidePromo() {
    var [current, setCurrent] = useState(0)


    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        className: 'center',
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        centerMode: true,
        centerPadding: '238px',
        speed: 400,
        autoPlay: true,
        autoplaySpeed: 3000,
        customPaging: function(i) {
            return (
            <a>{i + 1}</a>
            );
          },
        };
      const A = [1,2,3,4,5,6,7]
      const cards = A.map((slide, index) => {
        return(
          <div>
            <CardPromotion key={index}/>
          </div>
        )
      });
    return (
        <div className='slides-promo'>
            <Slider  {...settings}>
              <div>
                <CardPromotion />
              </div>
              <div>
                <CardPromotion />
              </div>
              <div>
                <CardPromotion />
              </div>
              <div>
                <CardPromotion />
              </div>
              <div>
                <CardPromotion />
              </div>
              <div>
                <CardPromotion />
              </div>
              <div>
                <CardPromotion />
              </div>
            </Slider>
        </div>
    )
}

export default SlidePromo;

       

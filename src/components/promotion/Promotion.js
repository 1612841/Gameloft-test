import React from 'react';
import './Promotion.css';
import SlidePromo from './SlidePromo';

function Promotion() {
    return (
        <div className="promotion">
            <h1>SPECIAL EVENTS & PROMOTIONAL</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.</p>
            <div className="promotion-cards">
                <SlidePromo />
            </div>
        </div>
    )
}

export default Promotion;

import React from 'react';
import SlideEx from './SlideEx';
import "./Exclusive.css";

function Exclusive() {
    return (
        <div className="exclusive">
            <h1>Exclusive Game Content</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.</p>
            <div className="exclusive-slide">
                <SlideEx />
            </div>
        </div>
    )
}

export default Exclusive;

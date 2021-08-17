import React from 'react';
import './CardPromotion.css';

function CardPromotion() {

    return (
        <div className="promo-title">
            <div className="promo">
                <div className='promo-img' >
                    <img  src="/images/moun.png"   alt="logo"  /> 
                </div>
                <h1>SHORT TITLE HERE</h1>
                <img className="promo-share-img" src="/images/share.png"   alt="logo"  />    
                <hr />
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ...</p>
                <button>READ MORE</button>
            </div>
        </div>
    )
}

export default CardPromotion;

import React from 'react';
import { Link } from 'react-router-dom';
import './CardEx.css';

function CardEx(props) {
    return (
        <div key={props.key} className="cardex">
            <div className="cardexhead">
                <button>
                    <Link to='/images/moun.png' target="_blank" download>
                        <img src="/images/download.png" alt="logo" />
                    </Link>
                </button>
            </div>
            <div className="cardexbody" >
                <img src='/images/moun.png' alt="logo" />
            </div>
        </div>
    )
}

export default CardEx;

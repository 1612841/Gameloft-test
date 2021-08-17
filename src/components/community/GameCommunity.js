import React from 'react';
import Slide from './Slide';
import './GameCommunity.css';
import Search from './Search';
import SlideSocial from './SlideSocial';

function GameCommunity() {
    return (
        <div className="community">
            <div className='social-story' >
                <h1>GAME COMMUNITY HUB</h1>
                <p >Live Game Updates</p>
                <div className='social-games'>
                    <Slide />
                </div>
            </div>
            <div className='social-post d-flex' >
                <h4>All Posts</h4>
                <div className='social-platform d-flex'>
                    <img src='/images/twitter.png' alt='twitter' />
                    <img src='/images/insta.png' alt='insta' />
                    <img src='/images/facebook.png' alt='facebook' />
                    <Search  />
                </div>
            </div>
            <div className='social-inf' >
                <SlideSocial />
            </div>
        </div>
    )
}

export default GameCommunity;

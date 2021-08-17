import React from 'react';
import './Header.css';
import FiveStar from './fiveStar';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Header() {
    return (
    <>
        <div className='head' >
            <div className='nav'>
                 <Navbar />
            </div>
            <div className='imagemountain'>
                <img src='/images/moun.png' alt='logo' />
            </div>
            <div className='intro'>
                <h1 >GAMELOFT GAME</h1>
                <div className='rating d-flex'>
                    <p>Racing/ Action &ensp; | &ensp; </p>
                    <FiveStar />
                </div>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut</p>
            </div>
            <div className="btns-social-icons d-block">
                <img src='/images/share.png' className='mb-1' alt='logo' />
                <img src='/images/mail.png'  alt='logo' />
                <img src='/images/help.png' className='mt-1' alt='logo' />
            </div>
            <div className="store">
                <div className='download d-flex'>
                    <Link class='nav-links' to='/store'>
                        <p className='mt-3'>Download latest version</p>
                    </Link>
                    <div class='links d-flex'>
                        <Link className='nav-links' to='/'><img src='/images/store.png' alt='logo' /></Link>
                        <Link className='nav-links ' to='/'><img src='/images/mcsf.png' alt='logo' /></Link>
                        <Link className='nav-links' to='/'><img src='/images/steam.png' alt='logo' /></Link>
                    </div>       
                </div>
            </div>
        </div>
    </>
    )
}

export default Header;

import React, { useState } from 'react';
import { Link, Router } from 'react-router-dom';
import './Footer.css';

function Footer() {

    const[language, setLanguage] = useState('English US');
    const [open, setOpen] = useState(false);
    const dropdowns = () => {
        setOpen(!open);
    };

    const reSet =(e) => {
        setLanguage(e.target.name);
        setOpen(false);
    }

    const country = [
        'English US',
        'Viet Nam',
        'France',
        'Findland'
    ];
    const countries = country.map((i)=> (
    <li className="mt-2 " name={i} onClick={reSet}>{i}</li>)
    )
  //  const countries = country.map((i, index)=> ());

    return (
        <div className='footer'>
            <div className="wrapper">
                <div className="up_footer">
                    <div className="link">
                        <img src="/images/logo2.png" />
                        <p>Follow Us</p>
                        <div className="social-link d-flex">
                            <Link className="fa" to="//www.facebook.com"  target="_blank"><img src="/images/facebook2.png" alt="facebook" /></Link>
                            <Link className="fa" to="//www.instagram.com" target="_blank"><img src="/images/insta2.png" alt="instagram" /></Link>
                            <Link className="fa" to="//www.twitter.com" target="_blank" ><img src="/images/twitter2.png" alt="twitter" /></Link>
                            <Link className="fa" to="//www.youtube.com" target="_blank"><img src="/images/youtube.png" alt="youtube" /></Link>
                        </div>
                        <div className="language">
                            <div type="button" className="button" onClick={dropdowns}>
                                <span><img src="/images/global.png" />&nbsp;</span><a>{language}</a><img className={open? 'arrow-btns' : 'arrow-btn'} src="/images/arrowicons.png" />
                            </div>
                        </div>
                        {open && <ul className="dropdown">
                            {countries}
                    </ul>}
                    </div>
                    <div className="links">
                        <div className="visit">
                            <h1>VISIT</h1>
                            <div className="location">
                                <div className="a"><Link className="b" to="/" target="_self" >Gameloft Games</Link></div>
                                <div className="a"><Link className="b" to="/" target="_self" >Gameloft Careers</Link></div>
                                <div className="a"><Link className="b" to="/" target="_self" >Gameloft News</Link></div>
                                <div className="a"> <Link className="b" to="/" target="_self" >Gameloft Forum</Link></div>
                                <div className="a"><Link className="b" to="/" target="_self" >Gameloft Corporate</Link></div>
                                <div className="a"><Link className="b" to="/" target="_self" >Gameloft Advertising</Link></div>
                                <div className="a"><Link className="b" to="/" target="_self" >Gameloft Support</Link></div>
                            </div>
                        </div>
                        <div className="legal">
                            <h1>LEGAL</h1>  
                            <div className="addition">
                            <div className="a"><Link className="b" to="/" target="_self" >Terms of Use</Link></div>
                            <div className="a"><Link className="b" to="/" target="_self" >Privacy Policy</Link></div>
                            <div className="a"><Link className="b" to="/" target="_self" >Cookies Policy</Link></div>
                            <div className="a"><Link className="b" to="/" target="_self" >EULA</Link></div>
                            <div className="a"><Link className="b" to="/" target="_self" >Legal Notices</Link></div>
                            <div className="a"><Link className="b" to="/" target="_self" > Event Rules</Link></div>
                            <div className="a"><Link className="b" to="/" target="_self" >Business Contacts</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="downfooter">
                    <div className="wraptext" >
                        <p>©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are trademarks of Gameloft in the U.S. and/or other countries. All other trademarks are the property of their respective owners.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;

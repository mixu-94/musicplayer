import React from 'react';
import './Footer.css';


const Footer = () => {
   
    return (
        <div className='footer-section'>
            <div>
                <p>Register for free 
               <button className='signUp-btn' >SIGN UP!</button>
                </p>
            </div>
            <div className='footer-icons'>
            <a className='footer-icons' href='#'><img src={ require("./png/facebook.png") }  alt="facebook-icon"/></a>
            <a className='footer-icons' href='#'><img src={ require("./png/instagram.png") }  alt="facebook-icon"/></a>
            <a className='footer-icons' href='#'><img src={ require("./png/twitter.png") }  alt="facebook-icon"/></a>
            </div>
            <div>
            <p>  &copy;2022 Copyright : Detify Creative</p>
            </div>
        </div>
    );
}

export default Footer;

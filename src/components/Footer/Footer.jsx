import React from 'react';
import './Footer.css'
import instagram from '../../assets/instagram.png'
import github from '../../assets/github.png'
import logo from '../../assets/logo.png'
import linkedin from '../../assets/linkedin.png'

const Footer = () => {
    return (
        <div className='footer-container'>
            <hr/>
            <div className="footer">
                <div className="social-links">
                    <img src={instagram} alt="" />
                    <img src={github} alt="" />
                    <img src={linkedin} alt="" />
                </div> 
                <div className="logo-f">
                    <img src={logo} alt="" />
                </div>   
            </div>
            
        </div>
    );
};

export default Footer;
import React, {useState} from 'react';
import './Header.css'
import images from '../../constants/index'
import { FaTwitter, FaDiscord, FaFacebookF  } from 'react-icons/fa';
import { FiMenu, FiX } from "react-icons/fi";


const Header = () => {

    const [menuClicked, setMenuClicked] = useState(false)
    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked)
    }
    return (
        <div className='header'>
            <div className='header-wrapper'>
                <div className='header-logo'>
                    <img className='header-logo-image' src={images.images.logowithtext} alt="logo"/>
                </div>
                

               
                         <div
                className={menuClicked ? "header-navitems header-navitems--active" : "header-navitems"}>

                   
                    <a className='header-navitem' href='#' onClick={toggleMenuClick}> Navitem</a>
                    <a className='header-navitem' href='#' onClick={toggleMenuClick}> Navitem2</a>
                    <a className='header-navitem' href='#' onClick={toggleMenuClick}> Navitem3</a>
                    <a className='header-navitem' href='#' onClick={toggleMenuClick}> Navitem4</a>
       
    
                </div>
                
            
                <div className='header-socials'> 
                <a><FaTwitter className='header-socials-icon'/></a>
                <a><FaDiscord className='header-socials-icon'/></a>
                <a><FaFacebookF className='header-socials-icon'/></a>
                </div>
                <div className='header-navbar-click'>
                {menuClicked ? (<FiX size={40} className={"header-navbar-menu"} onClick={toggleMenuClick} />
                     ) : (
                                <FiMenu
                                size={40}
                                className={"header-navbar-menu"}
                                onClick={toggleMenuClick}
                                />
                         )}
                         </div>
            </div>
        </div>
    );
}

export default Header;

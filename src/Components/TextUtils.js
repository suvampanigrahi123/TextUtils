// import {Link} from 'react-router-dom'
import '../Css/TextUtils.css'
// import menu from '../images/menu.png'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'
const TextUtils = () => {
  const [MediaIcons,setShowMediaIcons]=useState(false);
    return (
      <>
      <nav className='Main-div'>
      {/* Logo div */}
      <div className='logo'>
      <h2>
      <span>S</span>uvam
      <span>P</span>anigrahi   
      </h2>
      </div>
      {/* Menu  Div*/}
      <div className={MediaIcons? 'mobileMenuLink Menu':'Menu'}>
      <ul>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>about</a></li>
        <li><a href='#services'>services</a></li>
        <li><a href='#Contact'>Contact</a></li>
      </ul>
      </div>
      {/* 3rd Div.. */}
      <div className='Social-media'>
      <ul >
        <li><a href='#youtube'><FaFacebook /></a></li>
        <li><a href='#youtube'><FaInstagram /></a></li>
        <li><a href='#youtube'><FaYoutube /></a></li>
      </ul>
      </div>
      <div className='HamberburgMenu' onClick={()=>setShowMediaIcons(!MediaIcons)}>
      <GiHamburgerMenu />
      </div>
      </nav>
      </>
    )
}
export default TextUtils;
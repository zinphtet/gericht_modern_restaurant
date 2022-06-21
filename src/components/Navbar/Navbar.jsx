import React from 'react';
import './Navbar.scss';
import images  from '../../constants/images'
import { RiMenuFill,RiRestaurant2Line } from "react-icons/ri";
import { useState } from 'react';
const {gericht } = images
const Navbar = () => {
   const [showMenu , setShowMenu] = useState(false)
  return <div className="navbar w_100 bg_black">
    <div className="navbrand">
      <div className='navbrand_div'>
        <img src={gericht} alt="Nav Logo" />
      </div>
    </div>
    <ul className={`navlinks ${showMenu ? 'show':''}`}>
      <li className='nav_link' onClick={()=>setShowMenu(false)}><a href="#home">Home</a></li>
      <li className='nav_link' onClick={()=>setShowMenu(false)}><a href="#about">About</a></li>
      <li className='nav_link' onClick={()=>setShowMenu(false)}><a href="#menu">Menu</a></li>
      <li className='nav_link' onClick={()=>setShowMenu(false)}><a href="#awards">Awards</a></li>
      <li className='nav_link' onClick={()=>setShowMenu(false)}><a href="#contact">Contact</a></li>
      <RiRestaurant2Line  className='close_icon' onClick={()=>setShowMenu(false)}/>
    </ul>
    <div className="login">
      <p className='login_text'>Login / Registration | Book Title</p>
    </div>
    <div className="menu_bar">
        <div className="menu_bar_div">
           <RiMenuFill className='menu_icon'  onClick={()=>setShowMenu(true)}/>
        </div>
    </div>
  </div>
};

export default Navbar;

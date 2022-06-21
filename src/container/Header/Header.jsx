import React from 'react';

import './Header.scss';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';

const {welcome} = images
const Header = () => (
  <div className='header container'>

    <div className="header_info">
         <SubHeading title='Chase the new flavor'/>
         <p className="header_title">
            The Key To The Fine Dining
         </p>
         <p className="header_info_text para">
         Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus
         </p>
         <button className="btn">Explore Menu</button>
    </div>
    <div className="header_img">
         <div className="header_img_div">
          <img src={welcome} alt="Header Image" />
         </div>
    </div>
  </div>
);

export default Header;

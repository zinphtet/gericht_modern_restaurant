import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import './FindUs.scss'
import images from '../../constants/images';
const {findus} = images
const FindUs = () => (
  <div className="container" >
      <div className="findus_info">
        <SubHeading title='Contact' />
         <p className="findus_title">Find Us</p>
         <p className="findus_text">
         Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
         </p>
         <p className="opening_hours">
          Opening Hours
         </p>
         <div className="hours">
           <p className="hours_open">Mon - Fri: 10:00 Am - 02:00 Am</p>
           <p className="hours_open">Mon - Fri: 10:00 Am - 02:00 Am</p>
         </div>
         <div className="btn_div">
         <button className="btn">View More</button>
         </div>
        
      </div>
      <div className="findus_img">
         <div className="findus_img_wrapper">
           <img src={findus} alt="Find us Image" />
         </div>
      </div>
  </div> 
);

export default FindUs;

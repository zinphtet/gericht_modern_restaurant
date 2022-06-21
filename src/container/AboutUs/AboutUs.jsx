import React from 'react';
import images from '../../constants/images';
import './AboutUs.scss';
const {G,spoon,knife} = images
const AboutUs = () => (
  <div className="app_wrapper app__bg">
    <div className="about_us container ">
     <div className="g_img">
      <img src={G} alt="G image" />
     </div>
     <div className="about_info">
        <div className="about">
           <div className="heading_about">
             <p>About Us</p>
             <img src={spoon} alt="This is a little spoon" />
           </div>
           <p className="para">
           Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.
           </p>
           <div className="btn_div">

           <button className="btn">Know More</button>
           </div>
        </div>
        <div className="knife_img">
          <img src={knife} alt="Such a knife" />
        </div>
        <div className="history">
           <div className="heading_history">
             <p>Our History</p>
             <img src={spoon} alt="This is a little spoon" />
           </div>
           <p className="para">
           Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.
           </p>
           <button className="btn">Know More</button>
        </div>
       
     </div>
  </div>
  </div>
  
);

export default AboutUs;

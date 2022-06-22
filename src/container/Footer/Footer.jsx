import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';
import './Footer.scss';
const {gericht,spoon} = images
const Footer = () => (
  <div className="app__bg" id='contact'>
  <div className='footer '>
        <div className="newletter">
           <SubHeading title='Newletter' imgPos={true}/>
           <p className="newletter_title">
            Subscribe To Our Newletters
           </p>
           <div className="new_input">
            <input type="text" placeholder='Enter your Email ..'/>
            <div>
            <button className="btn">Subscribe</button>
            </div>
           </div>
        </div>
        <div className="footer_info">
          <div className="footer_contact">
                <p className="footer_title">Contact Us</p>
                <div className='address'>
                <p className='address_text'>
                9 W 53rd St, New York, NY 10019, USA  </p>
                <p className='phone'> +1 212-344-1230</p>
               <p className='phone'>+1 212-555-1230</p>
                </div>
               
               
          </div>
          <div className="footer_logo">
               <div className="logo">
                <img src={gericht} alt="" />
               </div>
               <p className="para">
               "The Best Way To Find Yourself <br/> Is To Lose Yourself In The Service Of Others."
               </p>
               <div className="footer_spoon">
                <img src={spoon} alt="Spoon IMage" />
               </div>
          </div>
          <div className="footer_hours">
          <p className="footer_title">Working Hours</p>
          <p className="foot_open">
          Monday-Friday:
  <br/>
08:00 Am - 12:00 Am
          </p>
          <p className="foot_open">
          Saturday-Sunday:
 <br/>
07:00 Am - 11:00 Pm
          </p>
          </div>
        </div>
    </div>
    <p className="copyright">
      2022.Gericht All rights reserved.
    </p>
  </div>
  
);

export default Footer;

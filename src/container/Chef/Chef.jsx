import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';
import './Chef.scss';

const {chef,quote,sign} = images
const Chef = () => (
  <div className="app__bg">
    <div className="chef container">
    <div className="chef_img">
       <div className="chef_img_wrapper">
        <img src={chef} alt="Chef Image" />
       </div>
    </div>
    <div className="chef_info">
       <div className="chef_heading">
        <SubHeading title="Chef's World" />
        <p className="chef_title">
          What We Believe In
        </p>
       </div>
       <div className="chef_info_text">
        <div className="quote_info">
          <div className="quote_img">
            <img src={quote} alt="Qutoe" />
          </div>
          <p className="para">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .
          </p>
        </div>
        <p className="para">
        Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.
        </p>
       </div>
       <div className="chef_name">
        <div>
        <p className="name">Kevin Luo</p>
        <p className="position">
          Chef and Founder
        </p>
        </div>
        
        <div className="signature">
          <img src={sign} alt="Signature" />
        </div>
     </div>
     </div>
    
    </div>
  </div>
  
);

export default Chef;

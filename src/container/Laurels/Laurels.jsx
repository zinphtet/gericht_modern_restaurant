import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';
import './Laurels.scss';
import LaurelItem from '../../components/LaurelItem/LaurelItem';
import data from '../../constants/data';
const {awards} = data
const Laurels = () => (
 <div className="app__bg" id='awards'>
    <div className="laurels container">
      <div className="laurel_info">
        <SubHeading title='Awards & Recognition'/>
        <p className="laurel_title">
        Our Laurels
        </p>
        <div className="laurel_grade">
          

           {
            awards.map(({...props},i)=><LaurelItem key={i} {...props}/>)
           }
        </div>
      </div>
      <div className="laurel_img">
        <div className="laurel_img_wrapper">
         <img src={images.laurels} alt="Laurel Image" />
        </div>    
      </div>
     
    </div>
 </div>
);

export default Laurels;

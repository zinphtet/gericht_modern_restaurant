import React from 'react';
import './SubHeading.scss'
import images from '../../constants/images';
const {spoon} = images
const SubHeading = ({title,imgPos}) => (
  <div className='subheading'>
     <p className='subheading_title'>{title}</p>
     <div className="spoon_img" style={{  justifyContent:imgPos ? 'center' : 'flex-start'}}>
       <img src={spoon} alt="Spoon Img"  />
     </div>
    
  </div>
);

export default SubHeading;

import React from 'react';
import './SubHeading.scss'
import images from '../../constants/images';
const {spoon} = images
const SubHeading = ({title}) => (
  <div className='subheading'>
     <p className='subheading_title'>{title}</p>
     <img src={spoon} alt="Spoon Img" />
  </div>
);

export default SubHeading;

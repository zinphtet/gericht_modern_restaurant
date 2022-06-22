import React from 'react';
import MealVideo from '../../assets/meal.mp4'
import './Intro.scss';

const Intro = () => {
  

  return(
<div className="intro container" >
 
   <div className="intro_video">
    <video width="100%" height="100vh" controls>
        <source src={MealVideo} />
    </video>       
   </div>
</div>
)};

export default Intro;

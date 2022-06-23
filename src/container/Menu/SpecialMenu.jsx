import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';
import './SpecialMenu.scss';
import MenuItem from '../../components/MenuItem/MenuItem';
import data from '../../constants/data';

const {wines , cocktails} = data
const {menu} = images
const SpecialMenu = () => (
  <div className='special_menu container' id='menu'>
    <SubHeading title='Menu That Fit Your Plate ' imgPos ='center'/>
    <p className="menu_title">Today's Special</p>
    <div className="menus">
      <div className="wine">
        <p className="sub_menu_title">Wine & Beer</p>
        {
        wines.map(({...pros},i)=>{
          return <MenuItem {...pros} key={i}/>
        })
        }
      </div>
      <div className="menu_img">
        <div className="menu_img_wrapper">
        <img src={menu} alt="Menu Image" />
        </div>
      </div>
     <div className="cocktail">
      <p className="sub_menu_title">Cocktails</p>
      {
        cocktails.map(({...pros})=>{
          return <MenuItem {...pros} key={Math.random()}/>
        })
        }
     </div> 
    </div>
    <div className="menu_view_more">
     <button className="btn">View More</button>
    </div>
  
  </div>
);

export default SpecialMenu;

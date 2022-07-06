import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';
import './SpecialMenu.scss';
// import compoments from  '../../components/index.js'
import data from '../../constants/data';
// const {MenuItem} = compoments
const {wines , cocktails} = data
const {menu} = images

const MenuItem = ({title,price,tag}) => (
  <div className="menu_item">
    <div className="menu_item_title">
      <p className="item_title">
           {title}
      </p>
      <div className="item_price">
        <div className="price_line"></div>
        <p className="price">{price}</p>
      </div>
    </div>
    <div className="menu_item_tag">
       {tag}
    </div>
  </div>
);
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

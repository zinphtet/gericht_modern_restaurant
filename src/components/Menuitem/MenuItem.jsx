import React from 'react';

import './MenuItem.scss';

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

export default MenuItem;

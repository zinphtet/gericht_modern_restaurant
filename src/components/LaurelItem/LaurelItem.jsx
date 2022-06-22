

import React from 'react'
import './LaurelItem.scss'
const LaurelItem = ({imgUrl , title , subtitle}) => {
  return (
    <div className="laurel_item">
        <div className="laurel_img">
            <img src={imgUrl} alt="Grade" />
        </div>
        <div className="laurel_item_info">
            <p className="laurel_item_title">
               {title}
            </p>
            <p className="para">
                {subtitle} 
            </p>
        </div>
    </div>
  )
}

export default LaurelItem
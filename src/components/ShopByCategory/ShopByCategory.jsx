import React from 'react'
import './ShopByCategory.css'
import { Category } from '../../assets/assets'

const ShopByCategory = () => {
  return (
    <div className='ShopByCategory'>
      <h2 className='CategoryHeading'>Shop By Category</h2>
      <div className="CategoryList">
        {Category.map((item,index)=>{
          return(
          <div className="CategoryItem">
            <img src={item.CategoryImage} alt="" key={index} className='CategoryImage'/>
            <div className="CategoryName">{item.CategoryName}</div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default ShopByCategory

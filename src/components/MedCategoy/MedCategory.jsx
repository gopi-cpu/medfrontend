import React from 'react'
import './MedCategory.css'

const MedCategory = () => {
  return (
    <div className='MedCategory'>
      <ul className='MedCategoryList'>
        <li className='MedCategoryListItem'>Allopathy</li>
        <li className='MedCategoryListItem'>Generic</li>
        <li className='MedCategoryListItem'>Ayurvedic</li>
        <li className='MedCategoryListItem'>Homeopathy</li>
        <li className='MedCategoryListItem'>Herbal</li>
      </ul>
    </div>
  )
}

export default MedCategory

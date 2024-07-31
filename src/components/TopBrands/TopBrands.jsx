import React from 'react'
import "./TopBrands.css"
import { assets } from '../../assets/assets'

const TopBrands = () => {
  return (
    <div className='TopBrands'>
      <img src={assets.AIMIL} alt="" className='BrandImages'/>
      <img src={assets.AVP} alt="" className='BrandImages'/>
      <img src={assets.Dabur} alt="" className='BrandImages'/>
      <img src={assets.Dettol} alt="" className='BrandImages'/>
      <img src={assets.Durex} alt="" className='BrandImages'/>
      <img src={assets.Himalaya} alt="" className='BrandImages'/>
      <img src={assets.Mamaearth} alt="" className='BrandImages'/>
      <img src={assets.Morpen} alt="" className='BrandImages'/>
      <img src={assets.Nivea} alt="" className='BrandImages'/>
      <img src={assets.Protinex} alt="" className='BrandImages'/>
    </div>
  )
}

export default TopBrands

import React from 'react'
import './Hero.css'
import { assets } from '../../assets/assets'
import HealthConcerns from '../HealthConcerns/HealthConcerns'
import StoresNearby from '../StoresNearby/StoresNearby'
import ShopByCategory from '../ShopByCategory/ShopByCategory'
import MedCategory from '../MedCategoy/MedCategory'
import TopBrands from '../TopBrands/TopBrands'
import ShopProducts from '../ShopProducts/ShopProducts'

const Hero = () => {
  return (
    <div className='Hero'>
      <img src={assets.HeroImage} alt="" className='Hero-image'/>
      <HealthConcerns/>
      <MedCategory/>
      <StoresNearby/>
      <TopBrands/>
      <ShopByCategory/>
      <ShopProducts/>
    </div>
  )
}

export default Hero

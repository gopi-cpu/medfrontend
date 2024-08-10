import React from 'react'
import './IndividualMedStorePage.css'
import {assets,Category} from "../../assets/assets"
import ShopProducts from "../../components/ShopProducts/ShopProducts"

const IndividualMedStorePage = () => {
  return (
    <div>
      <div className="MedStoreDetails">
        <div className="DetailsPart">
            <img src={assets.medstore1} alt="" className='ShopImage'/>
          <div className="ShopDetails">
            <ul className='ShopDetailsList'>
              <li className='ShopDetailsListItem'>ShopName:xxxxxxxxx</li>
              <li className='ShopDetailsListItem'>Shop Owner Name:xxxxxxxx</li>
              <li className='ShopDetailsListItem'>Mobile No:xxxxxxxxx</li>
              <li className='ShopDetailsListItem'>Address:xxxxxxxxx</li>
              <li className='ShopDetailsListItem'>Distance:xxxx Kms</li>
              </ul>
          </div>
        </div>
        <div className="StoreProductsDetails">
          <div className="StoreProducts">
          <div className="CategoryListP">
        {Category.map((item,index)=>{
          return(
          <div className="CategoryItemP">
            <img src={item.CategoryImage} alt="" key={index} className='CategoryImage'/>
            <div className="CategoryName">{item.CategoryName}</div>
          </div>
          )
        })}
      </div>
          </div>
          <div className="StoreOffers">
            <h4>Offers</h4>
            <div className="OfferDetails">
              <ul>
                <li>20% Discount on summer essential</li>
                <li>20% Discount on summer essential</li>
                <li>20% Discount on summer essential</li>
                <li>20% Discount on summer essential</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="MedStoreItems">
      <div className="SearchBar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              className="Search-input"
              placeholder="Search Medicine or Medical Stores Nearby"
            />
            <i className="fa-solid fa-camera"></i>
          </div>
          <ShopProducts/>
      </div>
    </div>
  )
}

export default IndividualMedStorePage
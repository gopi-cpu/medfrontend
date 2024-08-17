import React from "react";
import "./IndividualMedStorePage.css";
import { assets, Category, MedicalStores } from "../../assets/assets";
import ShopProducts from "../../components/ShopProducts/ShopProducts";

const IndividualMedStorePage = () => {
  const index = 2;
  const arr = MedicalStores[index];
  const objArr = arr.Address;
  return (
    <div className="IndividualMedicalStorePage">
      <div className="MedStoreDetails">
        <div className="ImagePartIP">
          <div className="MedStoreImageMain">
            <img src={assets.medstore1} alt="" className="MedStoreImageIP" />
          </div>
          <div className="MulImagesPart">
            <img src={assets.medstore1} alt="" className="ListImg" />
            <img src={assets.medstore2} alt="" className="ListImg" />
            <img src={assets.medstore3} alt="" className="ListImg" />
            <img src={assets.medstore4} alt="" className="ListImg" />
          </div>
        </div>
        
        
          <div className="StoreDetailsIP">
            <div className="Details-Part-A">
              <div className="NameIP TxtMar">{arr.ShopName}</div>
              <div className="RattingIP TxtMar">
                <span>
                  {arr.Ratting}
                  <img src={assets.star} alt="" className="StarIP" />
                </span>
              </div>
              <div className="AreaIP">{objArr.Street}</div>
              <div className="StatusIP TxtMar">{arr.Status}</div>
              <div className="DistanceIP TxtMar">{arr.Distance} KMs</div>
            </div>
            <div className="Details-Part-B">
              <h4>More Details</h4>
              <div className="TimingsIP">Opened: <span>{arr.Timings}</span></div>
              <div className="AddressIP">
                Address: 
                <ul className="AddressList">
                  <li>{objArr.Area}</li>
                  <li>{objArr.Street}</li>
                  <li>{objArr.City}</li>
                  <li>{objArr.State}</li>
                </ul>
              </div>
              <div className="NumberIP">Contact-No: <span>{arr.Number}</span></div>
            </div>
          </div>
          
        
        <div className="StoreProductsDetails">
          <div className="StoreOffers">
            <h4>Offers</h4>
            <div className="OfferDetails">
              <ul className="OffersList">
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
      <div className="CategoryListIP">
            {Category.map((item, index) => {
              return (
                <div className="CategoryItemP" key={index}>
                  <img
                    src={item.CategoryImage}
                    alt=""
                    key={index}
                    className="CategoryImage"
                  />
                  <div className="CategoryName">{item.CategoryName}</div>
                </div>
                
              );
            })}
          </div>
        <div className="SearchBar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            className="Search-input"
            placeholder={`Search Medicines in ${arr.ShopName}`}
          />
          <i className="fa-solid fa-camera"></i>
        </div>
        <ShopProducts />
      </div>
    </div>
  );
};

export default IndividualMedStorePage;

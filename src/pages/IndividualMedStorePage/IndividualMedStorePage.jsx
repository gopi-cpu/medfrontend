import React from "react";
import "./IndividualMedStorePage.css";
import { assets, Category, MedicalStores } from "../../assets/assets";
import ShopProducts from "../../components/ShopProducts/ShopProducts";

const IndividualMedStorePage = () => {
  const index = 2;
  const arr = MedicalStores[index];
  const objArr = arr.Address;
  return (
    <div>
      <div className="MedStoreDetails">
        <div className="DetailsPartIP">
          <div className="MedStoreImageMain">
          <img src={assets.medstore1} alt="" className="MedStoreImageIP" />
          </div>
          <div className="StoreDetailsIP">
            <div className="NameIP">Name:{arr.ShopName}</div>
            <div className="StatusIP">Status:{arr.Status}</div>
            <div className="AddressIP">Address:{objArr.Street}</div>
            <div className="DistanceIP">Distance:{arr.Distance}KM</div>
            <div className="RattingIP">
              <img src={assets.star} alt="" className="StarP" />
              {arr.Ratting}
            </div>
          </div>
        </div>
        <div className="StoreProductsDetails">
          <div className="StoreProducts">
            <div className="CategoryListP">
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
          </div>
          <div className="StoreOffers">
            <h4 >Offers</h4>
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
        <div className="SearchBar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            className="Search-input"
            placeholder="Search Medicine or Medical Stores Nearby"
          />
          <i className="fa-solid fa-camera"></i>
        </div>
        <ShopProducts />
      </div>
    </div>
  );
};

export default IndividualMedStorePage;

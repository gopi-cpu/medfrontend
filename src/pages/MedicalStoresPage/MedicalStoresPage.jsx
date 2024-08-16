import React from "react";
import "./MedicalStoresPage.css";
import { assets, MedicalStores } from "../../assets/assets";

const MedicalStoresPage = () => {
  return (
    <div className="MedicalStoresPage">
      <h1 className="Med-loc-head">Medical Stores Nearby</h1>
      <div className="NearbyMedsP">
        {MedicalStores.map((item, index) => {
          return (
            <a className="MedStoreP" key={index} href="/IndividualMedStorePage">
              <img src={assets.medstore1} alt="" className="MedStoreImageP"/>
              <div className="StoreDetailsP">

              <div className="NameP">{item.ShopName}</div>
              <div className="StatusP">{item.Status}</div>
              <div className="AddressP">{item.Address.Street}</div>
              <div className="DistanceP">{item.Distance}KM</div>
              <div className="RattingP">
                <img src={assets.star} alt="" className="StarP" />
                {item.Ratting}
              </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MedicalStoresPage;

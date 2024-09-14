import React from "react";
import "./StoresNearby.css";
import { assets,MedicalStores } from "../../assets/assets";

const StoresNearby = () => {
  return (
    <div>
      <div className="Med-loc">
        <h1 className="Med-loc-head">Medical Stores Nearby</h1>
        <div className="NearbyMeds">
            {MedicalStores.slice(0,5).map((item,index,)=>{
            return(
              <div className="MedStore" key={index}>
                <div className="Name">{item.ShopName}</div>
                <div className="Status">{item.Status}</div>
                <div className="Address">{item.Address.Street}</div>
                <div className="Distance">{item.Distance}KM</div>
                <div className="Ratting"><img src={assets.star} alt="" className="Star"/>{item.Ratting}</div>
              </div>
            )
          })}
          <a href="/MedicalStoresPage" className="SeeMore "><i className="fa-solid fa-chevron-right"></i></a>
        </div>
        </div>
    </div>
  );
};

export default StoresNearby;

import React from "react";
import "./ShopProducts.css";
import { OfferProducts } from "../../assets/assets";

const ShopProducts = () => {
  return (
    <>
      <h2 className="OfferHeading">OFFERS</h2>
      <div className="OfferProducts">
        {OfferProducts.map((item, index) => {
          return (
            <div className="OfferProductsItem">
              <img src={item.ProductImage} alt="" className="ProductImage"/>
              <div className="ProductName">{item.ProductName}</div>
              <div className="ProductSellingPrice"><span className="PriceHead">Price:</span>
                {item.ProductSellingPrice}
              </div>
              <div className="ProductOriginalPrice">
               ( {item.ProductOriginalPrice})
              </div>
              <button className="CartButton">Add to Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShopProducts;

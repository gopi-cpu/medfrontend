import React, { useState } from "react";
import "./ShopProducts.css";
import { OfferProducts } from "../../assets/assets";
import { assets } from "../../assets/assets";

const ShopProducts = () => {
  const [itemCounts, setItemCounts] = useState(
    Array(OfferProducts.length).fill(0)
  );

  const handlIncrement = (index) => {
    const newCounts = [...itemCounts];
    newCounts[index] += 1;
    setItemCounts(newCounts);
  };

  const handleDecrement = (index) => {
    const newCounts = [...itemCounts];
    if (newCounts[index] > 0) {
      newCounts[index] -= 1;
    }
    setItemCounts(newCounts);
  };

  return (
    <>
      <h2 className="OfferHeading">OFFERS</h2>
      <div className="OfferProducts">
        {OfferProducts.map((item, index) => {
          return (
            <div className="OfferProductsItem" key={index}>
              <img src={item.ProductImage} alt="" className="ProductImage" />
              <div className="ProductName">{item.ProductName}</div>
              <div className="ProductSellingPrice">
                <span className="PriceHead">Price:</span>
                {item.ProductSellingPrice}
              </div>
              <div className="ProductOriginalPrice">
                ( {item.ProductOriginalPrice})
              </div>
              {!itemCounts[index] ? (
                <button
                  className="CartButton"
                  onClick={() => handlIncrement(index)}
                >
                  Add to Cart
                </button>
              ) : (
                <div className="food-item-counter">
                  <div onClick={() => handleDecrement(index)} className="CounterPlus">-</div>
                  <p className="ItemCount">{itemCounts[index]}</p>
                  <div onClick={() => handlIncrement(index)} className="CounterMinus">+</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShopProducts;

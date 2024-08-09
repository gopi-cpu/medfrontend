import React from "react";
import "./Cart.css";
import { CartItems } from "../../assets/assets";
import ShopProducts from '../../components/ShopProducts/ShopProducts'

const Cart = () => {
  return (
    <>
    
    <div className="Cart">
      <div className="Items">
        <h3>My Cart</h3>
        <div className="CartItems">
          {CartItems.map((item, index) => {
            return (
              <div className="CartItemComponent">
                <img src={item.ProductImage} key={index} alt="" className="CartItemImage" />
                <div className="CartItemsDetails">

                <div className="CartItemName">{item.ProductName}</div>
                <div className="CartItemSellingPrice">
                  <span className="CartItemPriceHead">Price:</span>
                  {item.ProductSellingPrice}
                </div>
                <div className="CartItemOriginalPrice">
                  ( {item.ProductOriginalPrice})
                </div>
                <div className="NoOfItems">Total No's: 1</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="Bill">
        <h3 className="BillHead">Order Summary</h3>
        <div className="BillDetails">
          <div className="TotalMRPMain">
            <h4 className="TotalMRPHead">Total MRP:</h4>
            <div className="TotalMRP">1500</div>
          </div>
          <div className="DiscountMRPMain">
            <h4 className="DiscountMRPHead">Discount MRP:</h4>
            <div className="DiscountMRP">1400</div>
          </div>
          <div className="DeliveryCostMain">
            <h4 className="DeliveryCostHead">Delivery Charges:</h4>
            <div className="DeliveryCost">Rs.0</div>
          </div>
          <div className="AmountMain">
            <h4 className="AmountHead">Order Total:</h4>
            <div className="Amount">1400</div>
          </div>

        </div>
        <button className="ProceedButton">PROCEED</button>
      </div>
    </div>
    <ShopProducts/>
    </>
  );
};

export default Cart;

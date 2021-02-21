import React from "react";
import "./Checkout_Style/Checkout.css";
import CheckoutAd from "../../images/ImageHome/shipping.jpg";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../../APIs/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout_ad" src={CheckoutAd} alt="" />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shop Bag</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

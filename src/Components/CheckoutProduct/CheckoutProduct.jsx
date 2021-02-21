import React from "react";
import { useStateValue } from "../../APIs/StateProvider";
import "./CheckoutProduct_Style//CheckoutProduct.css";

function CheckoutProduct({ id, title, thumbnail, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkouProduct">
      <img className="checkouProduct__thumbnail" src={thumbnail} />
      <div className="checkouProduct__info">
        <p className="checkouProduct__title">{title}</p>
        <p className="checkouProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkouProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove From Cart</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;

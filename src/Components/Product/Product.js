import React from "react";
import "./Product_Style//Product.css";
import { useStateValue } from "../../APIs/StateProvider";

function Product({ id, title, thumbnail, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        thumbnail: thumbnail,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={thumbnail} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;

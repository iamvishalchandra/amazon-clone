import React from "react";
import moment from "moment";
import "./Order_Style/Order.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order(s)</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="oerder__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          thumbnail={item.thumbnail}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"₹"}
      />
    </div>
  );
}

export default Order;

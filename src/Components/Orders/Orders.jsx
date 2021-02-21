import React, { useEffect, useState } from "react";
import { useStateValue } from "../../APIs/StateProvider";
import { db } from "../../firebase";
import "./Orders_Style/Orders.css";
import Order from "../Order/Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      // console.log(user);
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
          console.log(orders);
        });
    } else setOrders([]);
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Order(s)</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;

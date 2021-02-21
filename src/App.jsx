import React, { useEffect } from "react";
import "./Index_Style//index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./APIs/StateProvider";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Payment from "./Components/Payment/Payment";
import Orders from "./Components/Orders/Orders";

const promise = loadStripe(
  "pk_test_51IJfGUHnmsiulmdgPU75zxdlUKozPXSFsrkH2CmcNiOl6gnhHp3kCkjzl540PJJvsNUz0tRySrBLyfVAVNpc5pef00qWPvV0rz"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("User>>>>>>>", authUser);

      if (authUser) {
        // Logged In
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          {/* {Orders Page} */}
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          {/* {Login Page} */}
          <Route path="/login">
            <Login />
          </Route>

          {/* Checkout Page */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          {/* Payment Page */}
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          {/* Home Page */}

          <Route path="/">
            <Header />
            {/* <Header /> */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import "./Header_Style/Header.css";
import logo from "../../images/Imagelogo/amazon-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../APIs/StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__top">
        <Link to="/">
          <img className="header__logo" src={logo} />
        </Link>

        <div className="header__searchBar">
          <input className="header__searchBox" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div className="header__content" onClick={handleAuthentication}>
              <span className="header__lineOne">
                {user ? user.email : "Hello Guest"}
              </span>
              <span className="header__lineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          {/* <Link to="/orders">
            <div className="header__content">
              <span className="header__lineOne"> Return </span>
              <span className="header__lineTwo"> & Orders </span>
            </div>
          </Link>

          <div className="header__content">
            <span className="header__lineOne"> Your </span>
            <span className="header__lineTwo"> Prime </span>
          </div>

          <Link to="/checkout">
            <div className="header__shopBasket">
              <span className="header__lineTwo header__basketCount">
                {basket.length}
              </span>
              <ShoppingBasketIcon />
            </div>
          </Link> */}
        </div>
      </div>
      <div className="header__bottom">
        <Link to="/orders">
          <div className="header__content">
            <span className="header__lineOne"> Return </span>
            <span className="header__lineTwo"> &Orders </span>
          </div>
        </Link>

        <div className="header__content">
          <span className="header__lineOne"> Your </span>
          <span className="header__lineTwo"> Prime </span>
        </div>

        <Link to="/checkout">
          <div className="header__shopBasket">
            <ShoppingBasketIcon />
            <span className="header__lineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

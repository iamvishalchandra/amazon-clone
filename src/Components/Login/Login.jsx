import React, { useState } from "react";
import "./Login_Style/Login.css";
import logo from "../../images/Imagelogo/amazon-logo-black.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    // Database Job
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.meesage));
  };

  const register = (e) => {
    e.preventDefault();

    // database job
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("Firbase", auth);
        if (auth) history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img src={logo} className="login__logo" />
      </Link>

      <div className="login__box">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By Signing in you agree to this <span>AMAZON FAKE CLONE</span>'s
          Condition of use & Sale. Please see our privacy Notice, our Cookies
          Notice and our Interest-Based Ads Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Creata An Account
        </button>
      </div>
    </div>
  );
}

export default Login;

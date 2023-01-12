import React from "react";
import { Link } from "react-router-dom";
import "./Loginstyles.css";
import { useState } from "react";
// import {DefaultPlayer as Video} from 'react-html5video';
// import 'react-html5video/dist/styles.css';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);

  const login = (e) => {
    e.preventDefault();
    console.log(email, password);
    const userData = {
      email,
      password,
    };
    localStorage.setItem("token-info", JSON.stringify(userData));
    setIsLoggedin(true);
    setEmail("");
    setPassword("");
  };

  // const logout = () => {
  //   localStorage.removeItem("token-info");
  //   setIsLoggedin(false);
  // };

  return (
    <div className="boxcontainer">
      <br />
      <br />
      <br />
      <br />

      {!isLoggedin ? (
        <div className="formmain">
          <h2>Sign In</h2>
          <div class="inputbox">
            <input
              type="text"
              required="required"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter Email Address"
            />
            <i></i>
          </div>
          <div class="inputbox">
            <input
              type="password"
              required="required"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
            <i></i>
          </div>
          <div class="links">
            <a href="#">Forget Password</a>
            <Link to={"/SignupPage"}>
              <a href="#">
                <h6>Signup</h6>
              </a>
            </Link>
          </div>
        
          <Link className="login" to={"/"}>
            {" "}
            <input  type="submit" value="LOGIN" ></input>
          </Link><br />

          <input type="submit" value="LOGOUT" onClick={login}></input>
          
        </div>
      ) : (
        <Link className="Logout" to={"/LandingPage"}>LogOut </Link>
      )}
    </div>
  );
};

export default LoginForm;

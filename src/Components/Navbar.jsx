import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaGlobe, FaSearch, FaTimes } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { useState } from "react";
import "./Navbarstyle.css";
// import {Nav, NavDropdown}  from 'react-bootstrap';

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <Link to={""}>
        <img className="logo" src={require("./Images/Marvel.png")} alt="" />
      </Link>

      <ul className={click ? "nav open" : "nav"}>
        <li>
          <Link className="hoverstyle" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="hoverstyle" to={"/Movies"}>
            Movies
          </Link>
        </li>
        <li>
          <Link className="hoverstyle" to={"/Series"}>
            TV Shows
          </Link>
        </li>
        <li>
          <Link className="hoverstyle" to={"/Comics"}>
            Comics
          </Link>
        </li>
        <li>
          <Link className="hoverstyle" to={"/Trending"}>
            Games
          </Link>
        </li>
      </ul>

      <ul className="nav-slp">
        <ul className="searchbox" style={{ color: "white" }}>
          <input className="inputfield" type="text" placeholder="Search" />
          <FaSearch className="searchcicon" size={20} />
        </ul>
        
        <ul className="language" style={{ color: "white" }}>
          <Link to={"/Languages"}>
            <FaGlobe size={37} />
          </Link>
        </ul>
        <ul>
          <Link to={"/LoginPage"}>
            <h5 className="signin">Sign In</h5>
          </Link>
          <li className="profile">
            <Link></Link>
          </li>
        </ul>
        {/* <ul>
          <Link to={"/SignupPage"}>
            <h5 className="signin">Sign Up</h5>
          </Link>
        </ul> */}

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="togglebutton" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "white" }} />
          ) : (
            <FaBars size={30} style={{ color: "white" }} />
          )}
        </div>
      </ul>

      <Outlet />
    </div>
  );
};

export default Navbar;

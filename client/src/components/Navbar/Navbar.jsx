import React from "react";
import "./navbar.css";
import Home from "../Home/home";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <ul className="outer">
            <li className="inner">
              <a href="./home" className="home">home</a>
            </li>
            <li className="inner">
              <a href="./profile" className="profile">profile</a>
            </li>
            <li className="inner">
            <a href="./feed" className="feed">feed</a>
            </li>
            <li className="inner">
            <a href="./contests" className="contests">contests</a>
            </li>
            <li className="inner"><a href="./friends" className="friends">friends</a></li>
            <li className="inner"><a href="./targetset" className="targetset">targetset</a></li>
            <li className="inner"><a href="./teams" className="teams">teams</a></li>
            <li className="inner"><a href="./search" className="search">search</a></li>
            <li className="inner"><a href="./settings" className="settings">settings</a></li>
          </ul>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
}

export default Navbar;

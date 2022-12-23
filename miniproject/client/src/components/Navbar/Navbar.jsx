import React from "react";
import "./navbar.css";
import Home from "../Home/home";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <ul className="outer">
            <li className="inner">
              <Link to="/home">Home</Link>
            </li>
            <li className="inner">
              <Link to="/profile">Profile</Link>
            </li>
            {/* <li className="inner">
              <Link to="/feed">Feed</Link>
            </li> */}
            <li className="inner">
              <Link to="/contest">Contests</Link>
            </li>
            <li className="inner">
              {" "}
              <Link to="/friends">Followers</Link>
            </li>
            <li className="inner">
              {" "}
              <Link to="/search">Search</Link>
            </li>
            <li className="inner">
              {" "}
              <Link to="/logout">Logout</Link>
            </li>
            {/* <li className="inner">
              {" "}
              <Link to="/targetset">Targetset</Link>
            </li> */}
            {/* <li className="inner">
              <Link to="/teams">Teams</Link>
            </li> */}
            {/* <li className="inner">
              <Link to="/search">Search</Link>
            </li> */}
            {/* <li className="inner">
              <Link to="/editOptions">Settings</Link>
            </li> */}
          </ul>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
}

export default Navbar;

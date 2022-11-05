import "./App.css";
import React from "react";
import { useState } from "react";
// import ReactDOM from 'react-dom'
import { Route } from "react-router-dom";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Temp from "./components/TEMP/temp";
import Home from "./components/Home/home";
import Logout from "./components/auth/logout";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
// import Notify from "./components/alert/Alert"

function App() {
  return (
    <div>
      <Navbar />
      {/* <Notify/> */}
      <Routes>
        <Route exact path="/" element={<Temp />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        {/* <Route path="./login">
        <Login/>
      </Route> */}

        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/logout" element={<Logout />}></Route>

        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>

      {/* <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder="Name"
        /><br/>
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="email"
          placeholder="Email"
        /><br/>
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="Password"
        /><br/>
        <input type="submit" value="Register" />
        <br/>
      </form> */}
    </div>
  );
}

export default App;

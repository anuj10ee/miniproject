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
import Edit from "./components/Profile/Edit";
import Friends from "./components/friends/Friends"
// // import Notify from "./components/alert/Alert"
import OtherProfile from "./components/otherProfile/OtherProfile";
import Contest from "./components/Contests/contest";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Notify/> */}
      <Routes>
        {/* <Route exact path="/team" element={<Team/>}></Route> */}
        <Route exact path="/" element={<Temp />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/profile/:id" element={<OtherProfile />}></Route>
        {/* <Route path="./login">
        <Login/>
      </Route> */}

        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/friends" element={<Friends />}></Route>
        <Route path="/contest" element={<Contest />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/editOptions" element={<Edit />}></Route>
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

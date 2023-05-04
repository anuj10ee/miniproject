import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";

import { useEffect } from "react";
//import ClipLoader from "react-spinners/ClipLoader";

function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  async function loginUser(event) {
    event.preventDefault();
    console.log("jsfl");
    const response = await fetch("http://localhost:1337/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: "include",
    });

    const data = await response.json();
    console.log(data);
    if (response.status === 400 || !data) {
      window.alert("INVALID LOGIN");
    } else {
      console.log(data.status);
      // window.alert("SUCCESSFUL LOGIN");
      navigate("/home");

      // history.push("/login");
    }
    // console.log(data)
  }
  return (
    <div className="login">
      {/* {
        loading?
        <ClipLoader
        color="red"
        loading={loading}
    
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        : */}

      {/* <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={loginUser}>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <br />
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <br />
            <input type="submit" value="Login" style={{ cursor: "pointer" }} />
            <br />
          </form>
        </div>
      </div> */}
      <img
        className="wave"
        src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/wave.png"
      />
      <div className="container">
        <div className="img">
          <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/bg.svg" />
        </div>
        <div className="login-content">
          <form onSubmit={loginUser}>
            {/* <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" /> */}
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                {/* <h5>Username</h5> */}
                <input
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                {/* <h5>Password</h5> */}
                <input
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            {/* <a href="#">Forgot Password?</a> */}
            <div className="idk">
              <input type="submit" className="btn" value="Login" />
              <a href="/register" className="btn">
                Register
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

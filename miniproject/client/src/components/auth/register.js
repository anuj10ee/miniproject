import React from "react";
import { useState } from "react";
// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  // const history=useHistory();
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [codechefID, setcodechefID] = useState("");
  const [codeforcesID, setcodeforcesID] = useState("");
  const [address, setaddress] = useState("");
  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        address,
        password,
        codechefID,
        codeforcesID,
      }),
    });

    const data = await response.json();
    if (response.status === 422 || !data) {
      window.alert("INVALID");
    } else {
      navigate("/login");
      // history.push("/login");
    }
    // console.log(data)
  }

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>CodeBook</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={registerUser}>
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              type="text"
              placeholder="Name"
            />

            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <input
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              type="text"
              placeholder="Address"
            />

            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <input
              value={codechefID}
              onChange={(e) => setcodechefID(e.target.value)}
              type="text"
              placeholder="CODECHEF USERNAME"
            />
            <input
              value={codeforcesID}
              onChange={(e) => setcodeforcesID(e.target.value)}
              type="text"
              placeholder="CODEFORCES USERNAME"
            />
            <br />
            <input
              type="submit"
              style={{ cursor: "pointer" }}
              value="Register"
            />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

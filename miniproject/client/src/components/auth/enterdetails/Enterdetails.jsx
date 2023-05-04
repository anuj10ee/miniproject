import React from "react";
import { useState } from "react";
// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../register.css";

const Enterdetails = () => {
  // const history=useHistory();
  const navigate = useNavigate();

//   const [name, setname] = useState("");
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
  const [codechefID, setcodechefID] = useState("");
  const [codeforcesID, setcodeforcesID] = useState("");
  const [gfgID, setgfgID] = useState("");
  const [address, setaddress] = useState("");
  const [college, setcollege] = useState("");
  const [branch, setbranch] = useState("");
  const [desc, setdesc] = useState("");
  const [title, settitle] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/enterdetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address,
        desc,
        codechefID,
        codeforcesID,
        gfgID,
        college,
        branch,
        title,
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
      {/* <div className="card">
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
              value={college}
              onChange={(e) => setcollege(e.target.value)}
              type="text"
              placeholder="College Name"
            />
            <input
              value={branch}
              onChange={(e) => setbranch(e.target.value)}
              type="text"
              placeholder="Branch Name"
            />
            <input
              value={title}
              onChange={(e) => settitle(e.target.value)}
              type="text"
              placeholder="Your Title"
            />
            <input
              value={desc}
              onChange={(e) => setdesc(e.target.value)}
              type="text"
              placeholder="About Yourself"
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

            <input
              value={gfgID}
              onChange={(e) => setgfgID(e.target.value)}
              type="text"
              placeholder="GFG USERNAME"
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
      </div> */}
      <img
        className="wave"
        src="s://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/wave.png"
      />
      <div className="container">
        <div className="img">
          <img src="s://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/bg.svg" />
        </div>
        <div className="login-content">
          <form onSubmit={registerUser}>
            {/* <img src="s://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" /> */}
            <h2 className="title">Enter Details</h2>
            
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                {/* <h5>Username</h5> */}
                <input
              value={college}
              onChange={(e) => setcollege(e.target.value)}
              type="text"
              placeholder="College Name"
            />
              </div>
            </div><div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                {/* <h5>Username</h5> */}
                <input
              value={branch}
              onChange={(e) => setbranch(e.target.value)}
              type="text"
              placeholder="Branch Name"
            />
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                {/* <h5>Username</h5> */}
                <input
              value={title}
              onChange={(e) => settitle(e.target.value)}
              type="text"
              placeholder="Your Title"
            />
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                {/* <h5>Username</h5> */}
                <input
              value={desc}
              onChange={(e) => setdesc(e.target.value)}
              type="text"
              placeholder="About Yourself"
            />
              </div>
            </div>
            
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                {/* <h5>Username</h5> */}
                <input
              value={codechefID}
              onChange={(e) => setcodechefID(e.target.value)}
              type="text"
              placeholder="CODECHEF USERNAME"
            />
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                {/* <h5>Username</h5> */}
                <input
              value={codeforcesID}
              onChange={(e) => setcodeforcesID(e.target.value)}
              type="text"
              placeholder="CODEFORCES USERNAME"
            />
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                {/* <h5>Username</h5> */}
                <input
              value={gfgID}
              onChange={(e) => setgfgID(e.target.value)}
              type="text"
              placeholder="GFG USERNAME"
            />
              </div>
            </div>
            
            {/* <a href="#">Forgot Password?</a> */}
            <input type="submit" className="btn" value="Proceed" />
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Enterdetails;

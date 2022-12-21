import React from "react";
import "./search.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [details1, setDetails1] = useState("");
  const searchUser = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/user/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (response.status === 400 || !data) {
      window.alert("INVALID");
    } else {
      console.log(data.status);
      setDetails(data);
      // window.alert("SUCCESSFUL LOGIN");

      // history.push("/login");
    }
    try {
      const res = await fetch("http://localhost:1337/home", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const da = await res.json();
    setDetails1(da);
    console.log(da);
    } catch (err) {
      console.log(err);
    }

    
  };

  return (
    <div className="search">
      {console.log(details)}
      {console.log(details1)}
      
        <div className="searchinner">
        <div className="upper">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
          <button className="buton" onClick={searchUser}>
            Search
          </button>
        </div>
        {(details&&details1)?(
        <div className="lower">
          {(details.userDetails._id === details1._id) ? (
                        <Link to={`/profile`}>
                          <img
                            className="searchimg"
                            src={"/uploads/" + details1.img}
                            alt=""
                          />
                          <div className="name">{details1.name}</div>
                        </Link>
                      ) : (
                        <Link
                          to={`/profile/${details.userDetails._id}`}
                          state={{ userID: details1._id }}
                        >
                          <img
                            className="searchimg"
                            src={"/uploads/" + details.userDetails.img}
                            alt=""
                          />
                          <div className="name">{details.userDetails.name}</div>
                        </Link>
                      )}
                      
        </div>
      
      ):(
        ""
      )}
      </div>
    </div>
  );
}

export default Search;

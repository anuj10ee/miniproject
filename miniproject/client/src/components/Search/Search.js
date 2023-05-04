import React from "react";
import "./search.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [name, setName] = useState("");
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
        name,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (response.status === 400 || !data) {
      window.alert("USER NOT FOUND");
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
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
          <button className="buton" onClick={searchUser}>
            Search
          </button>
        </div>
        {details && details1
          ? details.userDetails.map((val, i) => {
              return (
                <div className="lower">
                  {val._id === details1._id ? (
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
                      to={`/profile/${val._id}`}
                      state={{ userID: details1._id }}
                    >
                      <img
                        className="searchimg"
                        src={"/uploads/" + val.img}
                        alt=""
                      />
                      <div className="name">{val.name}</div>
                    </Link>
                  )}
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default Search;

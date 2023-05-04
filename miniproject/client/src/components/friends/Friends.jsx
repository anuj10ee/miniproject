import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./friends.css";
import callDetails1 from "../otherProfile/calldetails1.js";
import { Link } from "react-router-dom";

function Friends() {
  const location = useLocation();
  // const detail = location.state;
  const [details, setDetails] = useState("");
  const [details1, setDetails1] = useState("");
  const [array, setArray] = useState("");
  const [array1, setArray1] = useState("");
  const navigate = useNavigate();
  const callFriends = async () => {
    try {
      const res = await fetch("http://localhost:1337/profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log("abcdefgh");
      console.log(data);
      setDetails(data._id);
      setArray(data.followings);
      setArray1(data.followers);
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };
  useEffect(() => {
    callFriends();
  }, []);
  return (
    <>
      <div className="friends">
        <div className="left">
          <div className="inner">
            <div className="head">
              <h1>Followers</h1>
            </div>

            {/* {
        flag==1?"0":"1"
      }, */}
            {console.log(details)}
            {console.log(array)}
            {array1 ? (
              array1.map((val, i) => {
                return (
                  <>
                    <div className="card">
                      <div className="image">
                        {/* {console.log(val.userId)}
                      {console.log(props.userID._id)}
                      {console.log(val.userId === props.userID._id)} */}
                        {/* {val.userId === props.userID._id ? ( */}
                        <Link to={`/profile/${val.id}`}
                        state={{ userID: details }}>
                          <img
                            className="postProfileImg"
                            src={"uploads/" + val.image}
                            alt=""
                          />
                        </Link>
                        {/* ) : ( */}
                        {/* <Link to={`/profile/${val.userId}`}>
                          <img
                            className="postProfileImg"
                            src={"uploads/" + val.profileimg}
                            alt=""
                          />
                        </Link> */}
                        {/* )} */}

                        {/* <span className="postUsername"></span>
                      <span className="postDate">
                        {val.time ? val.time.slice(0, 25) : "y"}
                      </span> */}
                      </div>
                      <div className="name">{val.name}</div>
                    </div>
                  </>
                );
              })
            ) : (
              // <callPosts data={data}/>
              <div class="middle">
                <div class="bar bar1"></div>
                <div class="bar bar2"></div>
                <div class="bar bar3"></div>
                <div class="bar bar4"></div>
                <div class="bar bar5"></div>
                <div class="bar bar6"></div>
                <div class="bar bar7"></div>
                <div class="bar bar8"></div>
              </div>
            )}
          </div>
        </div>
        <div className="right">
          <div className="inner">
            <div className="head">
              <h1>Followings</h1>
            </div>

            {console.log(details)}
            {array && details ? (
              array.map((val, i) => {
                return (
                  <>
                    <div className="card">
                      <div className="image">
                        {/* {console.log(val.userId)}
                      {console.log(props.userID._id)}
                      {console.log(val.userId === props.userID._id)} */}
                        {/* {val.userId === props.userID._id ? ( */}
                        {console.log(val.id)}
                        <Link
                          to={`/profile/${val.id}`}
                          state={{ userID: details }}
                        >
                          <img
                            className="postProfileImg"
                            src={"uploads/" + val.image}
                            alt=""
                          />
                        </Link>
                        {/* ) : ( */}
                        {/* <Link to={`/profile/${val.userId}`}>
                          <img
                            className="postProfileImg"
                            src={"uploads/" + val.profileimg}
                            alt=""
                          />
                        </Link> */}
                        {/* )} */}

                        {/* <span className="postUsername"></span>
                      <span className="postDate">
                        {val.time ? val.time.slice(0, 25) : "y"}
                      </span> */}
                      </div>
                      <div className="name">{val.name}</div>
                    </div>
                  </>
                );
              })
            ) : (
              // <callPosts data={data}/>
              <div class="middle">
                <div class="bar bar1"></div>
                <div class="bar bar2"></div>
                <div class="bar bar3"></div>
                <div class="bar bar4"></div>
                <div class="bar bar5"></div>
                <div class="bar bar6"></div>
                <div class="bar bar7"></div>
                <div class="bar bar8"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Friends;

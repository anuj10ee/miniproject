import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./friends.css";
import callDetails1 from "../otherProfile/calldetails1.js";
import { Link } from "react-router-dom";


function Friends() {
  const location = useLocation();
  const detail = location.state;
  const [details, setDetails] = useState("");
  const [details1, setDetails1] = useState("");
  const [array, setArray] = useState("");
  const [array1, setArray1] = useState("");
  const navigate = useNavigate();
  var onionarray = [];
      var onionarray1 = [];
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
      
      for (let i = 0; i < data.followings.length; i++) {
        callDetails1(data.followings[i]).then(
          (value) =>
            // console.log(value)
            onionarray.push(value),

          setArray(onionarray)
        );
        // console.log(dat);
      }

      // if(data.followers.length==0)
      // {
      //   setArray1("ok");
      // }
      for (let i = 0; i < data.followers.length; i++) {
        callDetails1(data.followers[i]).then(
          (value) =>
            // console.log(value)
            onionarray1.push(value),

          setArray1(onionarray1)
        );
        // console.log(dat);
      }
      setDetails1(data.followers);
      setDetails(data.followings);
      if (res.status === 401) {
        const error = new Error(res.error);
        throw error;
      } else {
        // if (data.codechefID) {
        //   const r = await callCodechef(data);
        //   console.log(r);
        //   setcodechefdata(r);
        // }
        //   if (data.codeforcesID) {
        //     const s = await callCodeforces(data);
        //     console.log(s);
        //     setcodeforcesdata(s);
        //   }
      }
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
    <div className="head">
     <h1>Followers</h1>
      </div>
    <div className="inner">
      { details &&(array.length==2) ? (
        array.map((val, i) => {
          return (
            <>
                  <div className="card">
                    <div className="image">
                      {/* {console.log(val.userId)}
                      {console.log(props.userID._id)}
                      {console.log(val.userId === props.userID._id)} */}
                      {/* {val.userId === props.userID._id ? ( */}
                        <Link to={`/profile/${val._id}`}>
                          <img
                            className="postProfileImg"
                            src={"uploads/" + val.img}
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
      { details &&(array.length==2) ? (
        array1.map((val, i) => {
          return (
            <>
              
                  
              <div className="card">
                    <div className="image">
                      {/* {console.log(val.userId)}
                      {console.log(props.userID._id)}
                      {console.log(val.userId === props.userID._id)} */}
                      {/* {val.userId === props.userID._id ? ( */}
                        <Link to={`/profile`}>
                          <img
                            className="postProfileImg"
                            src={"uploads/" + val.img}
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
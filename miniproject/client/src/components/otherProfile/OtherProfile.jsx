import React from "react";
import { useParams } from "react-router";
import callDetails1 from "./calldetails1.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import callCodechef from "../Profile/codechef";
import callCodeforces from "../Profile/codeforces";
import Fade from "react-reveal/Fade";
import Badge from "react-bootstrap/Badge";
import image from "../Profile/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.jpg";
import { Link } from "react-router-dom";
import codechef from "../Profile/NicePng_mustach-png_7920230.png";
import codeforces from "../Profile/codeforces-seeklogo.com.svg";
import gfg from "../Profile/icons8-geeksforgeeks-144.png";
import { useLocation } from "react-router-dom";

function OtherProfile(props) {
  const { id } = useParams();
  console.log(props);
  const location = useLocation();
  const userId = location.state.userID;
  console.log(userId);
  const navigate = useNavigate();
  const [details, setDetails] = useState("");
  const [codechefdata, setcodechefdata] = useState("");
  const [codeforcesdata, setcodeforcesdata] = useState("");
  const followUser = async (event) => {
    event.preventDefault();
    console.log(userId);

    console.log(details._id);
    const response = await fetch(
      `http://localhost:1337/user/${details._id}/follow`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
        }),
        // credentials: "include",
      }
    );
    if (response.status === 403) {
      window.alert("already followed");
    } else if (response.status === 200) {
      window.alert("user followed");
      window.location.reload(false);
    }
    console.log(response.status);
  };

  const unfollowUser = async (event) => {
    event.preventDefault();
    console.log(userId);

    console.log(details._id);
    const response = await fetch(
      `http://localhost:1337/user/${details._id}/unfollow`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
        }),
        // credentials: "include",
      }
    );
    if (response.status === 403) {
      window.alert("already unfollowed");
    } else if (response.status === 200) {
      window.alert("user unfollowed");
      window.location.reload(false);
    }
    console.log(response.status);
    console.log(response);
  };

  const OtherProfilePage = async () => {
    try {
      // const res = await fetch("http://localhost:1337/profile", {
      //   method: "GET",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   credentials: "include",
      // });
      console.log(id);
      const data = await callDetails1(id);
      console.log("abcdefgh");
      console.log(data);
      setDetails(data);

      // if (data.codechefID) {
      //   const r = await callCodechef(data);
      //   console.log(r);
      //   setcodechefdata(r);
      // }
      if (data.codeforcesID) {
        const s = await callCodeforces(data);
        console.log(s);
        setcodeforcesdata(s);
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };
  useEffect(() => {
    OtherProfilePage();
  }, []);

  return (
    <>
      {codeforcesdata ? (
        <div className="profile">
          <Fade left>
            <div className="card1">
              <div className="left">
                <div className="pic">
                  {console.log(details)}
                  {details.img ? (
                    <img src={"/uploads/" + details.img} alt="" />
                  ) : (
                    ""
                  )}
                </div>
                <div className="info">
                  <div className="inner-info">
                    <h2>{details.name}</h2>
                    <p>{details.title}</p>
                    <p className="content">{details.desc}</p>
                    {/* <button className="edit">
                      <Link
                        className="anchor"
                        to={"/editOptions"}
                        state={details}
                      >
                        EDIT
                      </Link>
                    </button> */}
                    <div className="rightinner">
                      <button className="btns" onClick={followUser}>
                        Follow
                      </button>
                      <button onClick={unfollowUser}>Unfollow</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="inner-right">
                  <div className="skills">
                    <h2 className="hover-underline-animation">Skills</h2>
                    <h3>
                      Total Problem Solved:{" "}
                      <span>
                        {parseInt(details.codechefSub) +
                          parseInt(details.codeforcesSub) +
                          parseInt(details.gfgSub)}
                      </span>
                    </h3>
                    <h3>
                      Followers: <span>{details.followers.length}</span>
                    </h3>
                    <h3>
                      Followings: <span>{details.followings.length}</span>
                    </h3>
                  </div>
                  <div className="education">
                    <h2 className="hover-underline-animation">EDUCATION</h2>

                    <p>
                      <span>
                        <strong>College: </strong>
                      </span>
                      {details.college}
                    </p>
                    <p>
                      <span>
                        <strong>Branch: </strong>
                      </span>

                      {details.branch}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            {details.codechefID ? (
              <div className="card2">
                <div className="head">
                  <img src={codechef} alt="" />
                </div>
                <div className="content">
                  <div className="left">
                    <p>
                      USERNAME:
                      <span>{details.codechefID}</span>
                    </p>
                    <p>
                      TOTAL PROBLEMS SOLVED: <span> {details.codechefSub}</span>
                    </p>
                    <p>
                      RATING:
                      <span>{details.codechefRating}</span>{" "}
                    </p>
                    <p>
                      GLOBAL RANK: <span>{details.codechefRank}</span>
                    </p>
                  </div>
                  <div className="right">
                    <h3>RECENT SUBMISSIONS</h3>
                    <ul className="outer">
                      <li className="inner">
                        {details.codechefSubmissions[0]}
                      </li>
                      <li className="inner">
                        {details.codechefSubmissions[1]}
                      </li>
                      <li className="inner">
                        {details.codechefSubmissions[2]}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <ChartContainer /> */}
              </div>
            ) : (
              ""
            )}
          </Fade>
          <Fade right>
            <div className="card3">
              <div className="head">
                <img src={codeforces} alt="" />
              </div>
              <div className="content">
                <div className="left">
                  <p>
                    USERNAME:
                    <span>{codeforcesdata.result[0].handle}</span>
                  </p>
                  <p>
                    TOTAL PROBLEMS SOLVED: <span>{details.codeforcesSub}</span>
                    {/* <span> {codechefdata.fully_solved.count}</span> */}
                  </p>
                  <p>
                    RATING:
                    {console.log(codeforcesdata.result[0])}
                    <span>
                      {codeforcesdata.result[0].rating
                        ? codeforcesdata.result[0].rating
                        : "-"}
                    </span>{" "}
                  </p>
                  <p>
                    GLOBAL RANK:{" "}
                    <span>
                      {codeforcesdata.result[0].rank
                        ? codeforcesdata.result[0].rank
                        : "-"}
                    </span>
                  </p>
                </div>
                <div className="right">
                  <h3>RECENT SUBMISSIONS</h3>
                  <ul className="outer">
                    <li className="inner">
                      {details.codeforcesSubmissions[0]}
                    </li>
                    <li className="inner">
                      {details.codeforcesSubmissions[1]}
                    </li>
                    <li className="inner">
                      {details.codeforcesSubmissions[2]}
                    </li>
                  </ul>
                </div>
              </div>
              {/* <ChartContainer /> */}
            </div>
          </Fade>
          <Fade left>
            <div className="card4">
              <div className="head">
                <img src={gfg} alt="" />
              </div>
              <div className="content">
                <div className="left">
                  <p>
                    USERNAME:
                    <span>{details.gfgID}</span>
                  </p>
                  <p>
                    {console.log(details)}
                    TOTAL PROBLEMS SOLVED: <span>{details.gfgSub}</span>
                    {/* <span> {codechefdata.fully_solved.count}</span> */}
                  </p>
                  <p>
                    CODING SCORE:
                    <span>{details.gfgScore}</span>{" "}
                  </p>
                  <p>
                    COLLEGE RANK: <span>{details.gfgRank}</span>
                  </p>
                </div>
                <div className="right">
                  <h3>RECENT SUBMISSIONS</h3>
                  <ul className="outer">
                    <li className="inner">{details.gfgSubmissions[0]}</li>
                    <li className="inner">{details.gfgSubmissions[1]}</li>
                    <li className="inner">{details.gfgSubmissions[2]}</li>
                  </ul>
                </div>
              </div>
              {/* <ChartContainer /> */}
            </div>
          </Fade>
        </div>
      ) : (
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
    </>
  );
}

export default OtherProfile;

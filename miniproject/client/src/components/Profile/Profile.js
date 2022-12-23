import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import "./profile.css";
import image from "./0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.jpg";
import ChartContainer from "../Heatmap/heatmap";
import codechef from "./NicePng_mustach-png_7920230.png";
import codeforces from "./codeforces-seeklogo.com.svg";
import gfg from "./icons8-geeksforgeeks-144.png";
import Fade from "react-reveal/Fade";
import Badge from "react-bootstrap/Badge";
// import callCodechef from "./codechef";
import callCodeforces from "./codeforces";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Profile(props) {
  const navigate = useNavigate();
  const [details, setDetails] = useState("");
  const [codechefdata, setcodechefdata] = useState("");
  const [codeforcesdata, setcodeforcesdata] = useState("");

  const callProfilePage = async () => {
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
      setDetails(data);
      if (res.status === 401) {
        const error = new Error(res.error);
        throw error;
      } else {
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
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    callProfilePage();
  }, []);

  return (
    <>
      {codeforcesdata ? (
        <div className="profile">
          <Fade left>
            <div className="card1">
              <div className="left">
                <div className="pic">
                  <img src={"uploads/" + details.img} alt="" />
                </div>
                <div className="info">
                  <div className="inner-info">
                    <h2 className="hover-underline-animation">
                      {details.name}
                    </h2>
                    <p>{details.title}</p>
                    <p className="content">{details.desc}</p>
                    {/* <button className="edit1"> */}
                    <Link
                      className="anchor"
                      to={"/editOptions"}
                      state={details}
                    >
                      EDIT
                    </Link>
                    {/* </button> */}
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="inner-right">
                  <div className="skills">
                    <h2 className="hover-underline-animation">Skills</h2>
                    <h3>
                      Total Problems Solved:{" "}
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
                    <h2 className="hover-underline-animation">Education</h2>
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
                      <li className="inner">{details.codechefSubmissions[0]}</li>
                      <li className="inner">{details.codechefSubmissions[1]}</li>
                      <li className="inner">{details.codechefSubmissions[2]}</li>
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
                  <p>TOTAL PROBLEMS SOLVED:{details.codeforcesSub}</p>
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
                    <li className="inner">{details.codeforcesSubmissions[0]}</li>
                    <li className="inner">{details.codeforcesSubmissions[1]}</li>
                    <li className="inner">{details.codeforcesSubmissions[2]}</li>
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
                    TOTAL PROBLEMS SOLVED:{details.gfgSub}
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

export default Profile;

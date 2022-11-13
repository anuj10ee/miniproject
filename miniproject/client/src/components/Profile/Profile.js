import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import "./profile.css";
import image from "./0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.jpg";
import ChartContainer from "../Heatmap/heatmap";
import codechef from "./NicePng_mustach-png_7920230.png";
import codeforces from "./codeforces-seeklogo.com.svg";
import Fade from "react-reveal/Fade";
import Badge from "react-bootstrap/Badge";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Profile(props) {
  const navigate = useNavigate();
  const [details, setDetails] = useState("");
  const [codechefdata, setcodechefdata] = useState("");
  const [codeforcesdata, setcodeforcesdata] = useState("");

  const callCodechef = async () => {
    try {
      const res = await fetch(
        `https://competitive-coding-api.herokuapp.com/api/codechef/dustin404`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "omit",
        }
      );
      const codechefdata = await res.json();
      console.log(codechefdata);
      console.log(codechefdata.user_details.username);
      setcodechefdata(codechefdata);
    } catch (err) {
      console.log(err);
    }
  };

  const callCodeforces = async () => {
    try {
      const res = await fetch(
        "https://competitive-coding-api.herokuapp.com/api/codeforces/anuj108",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "omit",
        }
      );
      const codeforcesdata = await res.json();
      console.log(codeforcesdata);
      console.log(details.codechefID);
      setcodeforcesdata(codeforcesdata);
    } catch (err) {
      console.log(err);
    }
  };

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
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  // for(const key in apis)
  // {

  //     callCodeforces();

  // }

  useEffect(() => {
    callCodechef();
    callCodeforces();
    callProfilePage();
  }, []);

  return (
    <>
      <div className="profile">
        <Fade left>
          <div className="card1">
            <div className="left">
              <div className="pic">
                <img src={image} alt="" />
              </div>
              <div className="info">
                <div className="inner-info">
                  <h2 className="hover-underline-animation">
                    {details.name} Shakya
                  </h2>
                  <p>Competitive Coder</p>
                  <p>Blah Blah</p>
                  <button className="edit">
                    <Link
                      className="anchor"
                      to={"/editOptions"}
                      state={details}
                    >
                      EDIT
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="inner-right">
                <div className="education">
                  <h2 className="hover-underline-animation">EDUCATION</h2>
                  <p>ABES ENGINEERING COLLEGE</p>
                  <p>COMPUTER SCIENCE AND ENGINEERING</p>
                </div>
                <div className="skills">
                  <h2 className="hover-underline-animation">SKILLS</h2>
                  <p>
                    <Badge pill bg="primary">
                      Primary
                    </Badge>{" "}
                    <Badge pill bg="secondary">
                      Secondary
                    </Badge>{" "}
                    <Badge pill bg="success">
                      Success
                    </Badge>{" "}
                    <Badge pill bg="danger">
                      Danger
                    </Badge>{" "}
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
                    <span>
                      {codechefdata ? codechefdata.user_details.username : "x"}
                    </span>
                  </p>
                  <p>
                    TOTAL PROBLEMS SOLVED:{" "}
                    <span>
                      {" "}
                      {codechefdata ? codechefdata.fully_solved.count : "x"}
                    </span>
                  </p>
                  <p>
                    RATING:
                    <span>{codechefdata ? codechefdata.rating : "x"}</span>{" "}
                  </p>
                  <p>
                    GLOBAL RANK:{" "}
                    <span>{codechefdata ? codechefdata.global_rank : "x"}</span>
                  </p>
                </div>
                <div className="right">
                  <h3>RECENT SUBMISSIONS</h3>
                  <ul className="outer">
                    <li className="inner">SQUIRRELS</li>
                    <li className="inner">DOGS</li>
                    <li className="inner">CATS</li>
                  </ul>
                </div>
              </div>
              <ChartContainer />
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
                  <span>{codeforcesdata ? codeforcesdata.username : "x"}</span>
                </p>
                <p>
                  TOTAL PROBLEMS SOLVED:{" "}
                  <span>
                    {" "}
                    {codechefdata ? codechefdata.fully_solved.count : "x"}
                  </span>
                </p>
                <p>
                  RATING:
                  <span>{codeforcesdata ? codeforcesdata.rating : "x"}</span>{" "}
                </p>
                <p>
                  GLOBAL RANK:{" "}
                  <span>{codeforcesdata ? codeforcesdata.rank : "x"}</span>
                </p>
              </div>
              <div className="right">
                <h3>RECENT SUBMISSIONS</h3>
                <ul className="outer">
                  <li className="inner">SQUIRRELS</li>
                  <li className="inner">DOGS</li>
                  <li className="inner">CATS</li>
                </ul>
              </div>
            </div>
            <ChartContainer />
          </div>
        </Fade>
      </div>
    </>
  );
}

export default Profile;

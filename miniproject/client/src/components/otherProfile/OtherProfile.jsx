import React from "react";
import { useParams } from "react-router";
import callDetails from "../posts/calldetails";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import callCodechef from "../Profile/codechef";
import callCodeforces from "../Profile/codeforces";
import Fade from "react-reveal/Fade";
import Badge from "react-bootstrap/Badge";
import image from "../Profile/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.jpg";
import { Link } from "react-router-dom";
import ChartContainer from "../Heatmap/heatmap";
import codechef from "../Profile/NicePng_mustach-png_7920230.png";
import codeforces from "../Profile/codeforces-seeklogo.com.svg";


function OtherProfile() {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [details, setDetails] = useState("");
  const [codechefdata, setcodechefdata] = useState("");
  const [codeforcesdata, setcodeforcesdata] = useState("");

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
      const data = await callDetails(id);
      console.log("abcdefgh");
      console.log(data);
      setDetails(data);

      if (data.codechefID) {
        const r = await callCodechef(data);
        console.log(r);
        setcodechefdata(r);
      }
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
      {codechefdata && codeforcesdata ? (
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
                      {details.name}
                    </h2>
                    <p>Competitive Coder</p>
                    <p>Blah Blah</p>

                    {/* <button className="edit">
                      <Link
                        className="anchor"
                        to={"/editOptions"}
                        state={details}
                      >
                        EDIT
                      </Link>
                    </button> */}
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
                      <span>{codechefdata.user_details.username}</span>
                    </p>
                    <p>
                      TOTAL PROBLEMS SOLVED:{" "}
                      <span> {codechefdata.fully_solved.count}</span>
                    </p>
                    <p>
                      RATING:
                      <span>{codechefdata.rating}</span>{" "}
                    </p>
                    <p>
                      GLOBAL RANK: <span>{codechefdata.global_rank}</span>
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
                    {console.log(codeforcesdata.username)}
                    <span>{codeforcesdata.username}</span>
                  </p>
                  <p>
                    TOTAL PROBLEMS SOLVED:{" "}
                    <span> {codechefdata.fully_solved.count}</span>
                  </p>
                  <p>
                    RATING:
                    <span>{codeforcesdata.rating}</span>{" "}
                  </p>
                  <p>
                    GLOBAL RANK: <span>{codeforcesdata.rank}</span>
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

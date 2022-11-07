import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import "./profile.css";
import image from "./0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.jpg";

function Profile(props) {
  const navigate = useNavigate();
  const [details, setDetails] = useState("");

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
  useEffect(() => {
    callProfilePage();
  }, []);
  return (
    <>
      <div className="profile">
        <div className="card1">
          <div className="left">
            <div className="pic">
              <img src={image} alt="" />
            </div>
            <div className="info">
              <div className="innerinfo">
              <h2>{details.name}</h2>
              <p>fdsfhvdxhifczesrgfftfghkhgyhgklmolkopkoo</p>
              <p>fdsfhvdxhifczesrgfftfghkhgyhgklmolkopkoo</p>
              <button className="edit">
                <Link className="anchor" to={"/editOptions"} state={details}>
                  EDIT
                </Link>
              </button>
              </div>
               
              
            </div>
          </div>
          <div className="right">
            <div className="inner-right">
              <div className="education">
                <h2>EDUCATION</h2>
                <p>ABES ENGINEERING COLLEGE</p>
                <p>COMPUTER SCIENCE AND ENGINEERING</p>
              </div>
              <div className="skills">
                <h2>SKILLS</h2>
                <p>HTML CSS OOSD GITHUB TEKKEN</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="card2">
          <div className="left">
            <div className="pic">
              <img src={image} alt="" />
            </div>
            <div className="info">
              NAAM PATA ADDRESS
              <button className="edit">EDIT</button>
            </div>
          </div>
          <div className="right">
            <div className="education">EDUCATION</div>
            <div className="skills">SKILLS</div>
          </div>
        </div>*/}
      </div> 
    </>
  );
}

export default Profile;

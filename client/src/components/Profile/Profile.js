import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import "./profile.css";
import image from "./0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.jpg";













function Profile(props) {


  


  const navigate = useNavigate();
  const [details, setDetails] = useState("");
  const [codechefdata, setcodechefdata] = useState("");
  const [codeforcesdata, setcodeforcesdata] = useState("");

  const callCodechef = async () => {
    try {
      const res = await fetch(
        "https://competitive-coding-api.herokuapp.com/api/codechef/dustin404",
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
        <div className="card1">
          <div className="left">
            <div className="pic">
              <img src={image} alt="" />
            </div>
            <div className="info">
              <div className="inner-info">
                <h2>{details.name}</h2>
                <p>Class CSE A</p>
                <p>kjsdkfjlsdjfj,jffk</p>
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
        <div className="card2">
          <div className="head">
            <h2>CODECHEF</h2>
          </div>
          <div className="content">
            <div className="left">
             <p>USERNAME:{codechefdata?codechefdata.user_details.username:"x"}</p>
             <p></p>
            </div>
            <div className="right">
              <h3>RECENT SUBMISSIONS</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

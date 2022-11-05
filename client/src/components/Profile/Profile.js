import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./profile.css"
import image from "./png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"

function Profile() {
  const navigate = useNavigate();

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
              NAAM PATA ADDRESS
              <button className="edit">EDIT</button>
            </div>
          </div>
          <div className="right">
            <div className="education">EDUCATION</div>
            <div className="skills">SKILLS</div>
          </div>
        </div>
        <div className="card2">
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
        </div>
      </div>
    </>
  );
}

export default Profile;

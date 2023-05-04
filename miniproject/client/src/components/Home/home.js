// import Stories from "../../components/stories/Stories"
// import Posts from "../../components/posts/Posts"
// import Share from "../../components/share/Share"
import "./home.css";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
import Profile from "../Profile/Profile";
// import {useHistory}
import { useNavigate } from "react-router-dom";
import Timeline from "../timeline/Timeline";
import Posts from "../posts/Posts";
import { useState } from "react";
const Home = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState("");

  const callHomePage = async () => {
    try {
      const res = await fetch("http://localhost:1337/home", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setData(data);
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
    callHomePage();
  }, []);

  return (
    <div className="home">
      {/* <div className="leftbar">YE HAI LEFT </div> */}
      <div className="feed">
        {Data ? (
          <Timeline data={Data} />
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
      </div>
      {/* <div className="rightbar">YE HAI RIGHT SIDE</div> */}
      {/* <button className="logout" style={{ padding: 30, background: "yellow" }}>
        <a href="/logout">LOGOUT</a>
      </button> */}

      {/* <div className="GET">

        ptani kyu bna rha hu 
      </div> */}
      {/* <Stories/> */}
      {/* <Share/> */}
      {/* <Posts/> */}
    </div>
  );
};

export default Home;

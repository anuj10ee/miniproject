import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import "./contest.css";

function Contest() {
  const navigate = useNavigate();
  let myData=[]
  const [Details, setDetails] = useState("");

  const contestpage = async () => {
    try {
      const res = await fetch(
        "https://mighty-chamber-73462.herokuapp.com/https://clist.by/api/v2/contest//?username=ch12&api_key=2446567b0a223208e1e154ec75017888389ec682&upcoming=true",
        {
          method: "GET",
          // headers: {
          //   Accept: "application/json",

          // },
          // mode: 'no-cors',
          credentials: "omit",
        }
      );
      const data = await res.json();
    setDetails(data.objects);
      console.log(data.objects);
      console.log(Details[0]);
    } catch (err) {
      console.log(err);
      navigate("/home");
    }
  };
  useEffect(() => {
    contestpage();
  }, []);

  return (
    <div className="contest">
      <h1>Upcoming Contests</h1>
      <table>
        <thead>
          <tr>
            <th>Platform Name</th>
            <th>Contest Name</th>
            <th>End Time</th>
            <th>Start Time</th>
          </tr>
        </thead>
        <tbody>
          {console.log(Details)}
          
          {Details
            ? myData = [].concat(Details)
            .sort(function(a, b){
              // Convert string dates into `Date` objects
              const date1 = new Date(a.start);
              const date2 = new Date(b.start);
              
              return date1 - date2;
          }).map((item) => (
              
                <tr style={{padding:'20px' ,color:'green'}}>
                  <td>{item.host}</td>
                  <td>{item.event}</td>
                  <td >{item.start }</td>
                  <td>{item.end }</td>
                  <td>{item.duration}</td>
                  <td />
                </tr>
              ))
            :(
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
        </tbody>
      </table>
    </div>
  );
}

export default Contest;

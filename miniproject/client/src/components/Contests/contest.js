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
        "http://kontests.net/api/v1/all",
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
    setDetails(data);
      console.log(data);
      console.log(Details[0]);
    } catch (err) {
      console.log(err);
      // navigate("/home");
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
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
          
        </thead>
        
        <tbody>
          {console.log(Details)}
          
          {Details
            ? myData = [].concat(Details)
            .sort(function(a, b){
              // Convert string dates into `Date` objects
              const date1 = new Date(a.start_time);
              const date2 = new Date(b.start_time);
              
              return date1 - date2;
          }).map((item) => (
              
                <tr style={{padding:'20px' ,color:'green'}}>
                  <td>{item.site}</td>
                  <td>{item.name}</td>
                  <td >{item.start_time.substring(0,10) }</td>
                  <td>{item.end_time.substring(0,10) }</td>
                  {/* <td>{item.duration}</td> */}
                  
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

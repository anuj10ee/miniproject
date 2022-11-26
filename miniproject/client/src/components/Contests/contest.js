import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

function Contest() {
  const navigate = useNavigate();
  const [Details, setDetails] = useState("");

  const contestpage = async () => {
    try {
      const res = await fetch(
        "https://mighty-chamber-73462.herokuapp.com/https://clist.by/api/v2/contest//?username=ch12&api_key=2446567b0a223208e1e154ec75017888389ec682",
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
    <div className="container">
      <h1>Simple Inventory Table</h1>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Unit Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {console.log(Details)}
          {Details
            ? Details.map((item) => (
                <tr>
                  <td>{item.host}</td>
                  <td>{item.end}</td>
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

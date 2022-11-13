import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Edit.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Edit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const details = location.state;
  const [name, setname] = useState(details.name);
  const [email, setemail] = useState(details.email);
  const [codechefID, setCodechefID] = useState(details.codechefID);
  const [codeforcesID, setCodeforcesID] = useState(details.codeforcesID);
  // const [userId, setUserId] = useState(details.codeforcesID);

  async function updateUser(event) {
    event.preventDefault();
    const response = await fetch(`http://localhost:1337/user/${details._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        codechefID,
        codeforcesID,

      }),
    });
    const data = await response.json();
    if (response.status === 422 || !data) {
      window.alert("INVALID");
    } else {
      navigate("/Profile");
    }
  }
  return (
    <div className="edit">
      <div className="head">
        <h2>EDIT OPTIONS</h2>
      </div>
      <div className="lower">
        <form className="form " onSubmit={updateUser}>
          <span>NAME: </span>
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <br />
          <span>EMAIL: </span>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <br />
          <span>CODECHEF_ID: </span>
          <input
            value={codechefID}
            onChange={(e) => setCodechefID(e.target.value)}
            type="text"
            placeholder="Add Codechef username"
          />
          <br />
          <span>CODEFORCES_ID: </span>
          <input
            value={codeforcesID}
            onChange={(e) => setCodeforcesID(e.target.value)}
            type="text"
            placeholder="Add Codeforces username"
          />
          <br />
          <input
            type="submit"
            className="submit"
            style={{ cursor: "pointer" }}
            value="Update"
          />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Edit;

{
  /*
name
country
contact info
dob
codechef id
codeforces id
 */
}

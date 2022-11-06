import React from "react";
import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";

const Edit=()=> {
    const navigate=useNavigate();
    const location = useLocation()
    const details=location.state
  const [name, setname] = useState(details.name);
  const [email, setemail] = useState(details.email);
  const [codechefID, setCodechefID] = useState(details.codechefID);

  async function updateUser(event) {
    event.preventDefault();
    const response = await fetch(
      "http://localhost:1337/editOptions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          codechefID,
        }),
      }
    );
    const data = await response.json();
    if (response.status === 422 || !data) {
      window.alert("INVALID");
    } else {
      navigate("/Profile");
    }
  }
  return (
    <div>
      <form onSubmit={updateUser}>
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          value={codechefID}
          onChange={(e) => setCodechefID(e.target.value)}
          type="text"
          placeholder="Add Codechef username"
        />
        <br />
        <input type="submit" style={{ cursor: "pointer" }} value="Update" />
        <br />
      </form>
    </div>
  );
}

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

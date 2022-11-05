import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit=()=> {
    const navigate=useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

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
          password,
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
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="Password"
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

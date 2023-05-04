import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Edit.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router";
import CardProfile from "./edit-javascript";
import callDetails from "../posts/calldetails";

const Edit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const details = location.state;
  const [name, setname] = useState(details.name);
  const [email, setemail] = useState(details.email);
  const [college, setcollege] = useState(details.college);
  const [branch, setbranch] = useState(details.branch);
  const [desc, setdesc] = useState(details.desc);
  const [title, settitle] = useState(details.title);
  const [codechefID, setCodechefID] = useState(details.codechefID);
  const [codeforcesID, setCodeforcesID] = useState(details.codeforcesID);
  const [gfgID, setGfgID] = useState(details.gfgID);
  const [profilePic, setProfilePic] = useState("");
  const [url, setUrl] = useState("");
  // const [userId, setUserId] = useState(details.codeforcesID);

  console.log(details);
  async function updateUser(event) {
    event.preventDefault();
    var bodyformdata = new FormData();
    console.log(details);
    bodyformdata.append("name", name);
    bodyformdata.append("email", email);
    bodyformdata.append("college", college);
    bodyformdata.append("branch", branch);
    bodyformdata.append("desc", desc);
    bodyformdata.append("title", title);
    bodyformdata.append("codechefID", codechefID);
    bodyformdata.append("codeforcesID", codeforcesID);
    bodyformdata.append("gfgID", gfgID);
    bodyformdata.append("image", profilePic);
    bodyformdata.append("userId", details._id);

    console.log(bodyformdata);

    const response = await fetch("http://localhost:1337/user/" + details._id, {
      method: "PUT",
      body: bodyformdata,
    });
    try {
      const data = await response.json();
      // const data1 = new FormData()
      //     data1.append("file",profilePic)
      //     data1.append("upload_preset","miniproject")
      //     data1.append("cloud_name","dz2u63jv5")
      //     fetch("https://api.cloudinary.com/v1_1/dz2u63jv5/image/upload",{
      //         method:"post",
      //         body:data1
      //     })
      //     .then(res=>res.json())
      //     .then(data1=>{
      //        console.log(data1)
      //     })
      //     .catch(err=>{
      //         console.log(err)
      //     })
      console.log(data);
      setUrl(data.img);
      if (response.status === 422 || !data) {
        window.alert("INVALID");
      } else {
        navigate("/profile");
      }
    } catch (err) {
      navigate("/profile");
      console.log(err);
      
    }
  }
  return (
    <>
      <div className="edit">
        <div className="head">
          <h2>EDIT OPTIONS</h2>
        </div>
        <div className="lower">
          <form
            className="form "
            onSubmit={updateUser}
            encType="multipart/form-data"
          >
            <span>Profile-Picture: </span>
            {console.log(details.img)}
            <div className="ima">
              <img src={"uploads/" + details.img} alt="error" />
              <input
                // value={profilePic}
                type="file"
                id="filee"
                onChange={(e) => setProfilePic(e.target.files[0])}

                // placeholder="Add Codeforces username"
              />
              <label for="filee" class="custom-file">
                Choose Photo
              </label>
            </div>

            <span>NAME: </span>
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              type="text"
              placeholder="Name"
            />

            <span>EMAIL: </span>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              placeholder="Email"
            />

            <span>COLLEGE NAME: </span>
            <input
              value={college}
              onChange={(e) => setcollege(e.target.value)}
              type="text"
              placeholder="College Name"
            />

            <span>BRANCH NAME: </span>
            <input
              value={branch}
              onChange={(e) => setbranch(e.target.value)}
              type="text"
              placeholder="Branch Name"
            />

            <span>DESCRIPTION: </span>
            <input
              value={desc}
              onChange={(e) => setdesc(e.target.value)}
              type="text"
              placeholder="ABOUT YOURSELF"
            />

            <span>Title: </span>
            <input
              value={title}
              onChange={(e) => settitle(e.target.value)}
              type="text"
              placeholder="Your Title"
            />

            <span>CODECHEF_ID: </span>
            <input
              value={codechefID}
              onChange={(e) => setCodechefID(e.target.value)}
              type="text"
              placeholder="Add Codechef username"
            />

            <span>CODEFORCES_ID: </span>
            <input
              value={codeforcesID}
              onChange={(e) => setCodeforcesID(e.target.value)}
              type="text"
              placeholder="Add Codeforces username"
            />

            <span>GFG_ID: </span>
            <input
              value={gfgID}
              onChange={(e) => setGfgID(e.target.value)}
              type="text"
              placeholder="Add Gfg username"
            />

            <input
              type="submit"
              className="submit"
              style={{ cursor: "pointer" }}
              value="Update"
            />
          </form>
        </div>
      </div>
      {/* <a
        target="_blank"
        title="instagram/web__addict"
        href="https://www.instagram.com/web__addict/"
      >
        <i class="fab fa-instagram"></i>
      </a>
      <CardProfile /> */}
    </>
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

import React from "react";
import Posts from "../posts/Posts";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Timeline(props) {
  const location = useLocation();

  const detail = location.state;
  const [postPic, setPostPic] = useState("");

  async function createPost(event) {
    event.preventDefault();
    var bodyformdata = new FormData();
    // bodyformdata.append("codeforcesID", codeforcesID);
    bodyformdata.append("image", postPic);
    console.log(props);
    bodyformdata.append("userId", props.data._id);
    console.log(bodyformdata);
    // const d=await callCodeforcessubmissions(props.data.codeforcesID);

    const response = await fetch("http://localhost:1337/posts", {
      method: "POST",
      body: bodyformdata,
    });
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
    // setUrl(data.img);
    if (response.status === 422 || !data) {
      window.alert("INVALID");
    }
  }
  return (
    <div>
      {console.log(props.data._id)}
      <div className="share">
        <form
          className="form "
          encType="multipart/form-data"
          onSubmit={createPost}
        >
          <input type="text" placeholder="TYPE TEXT" />
          <br />

          {/* <span>Profile-Picture: </span> */}
          <img src="#" alt="asdf" />
          <input
            // value={profilePic}
            type="file"
            onChange={(e) => setPostPic(e.target.files[0])}

            // placeholder="Add Codeforces username"
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
      <Posts userID={props.data} />
    </div>
  );
}

export default Timeline;

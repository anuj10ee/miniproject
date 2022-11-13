import React, { useEffect, useState } from "react";
import "./posts.css";
import { Link } from "react-router-dom";
// import { MoreVert } from "@material-ui/icons";
import like from "./premium_photo-1663099358462-bcacf22f97c5.avif";

function Posts(props) {
  console.log(props);
  const [data, setData] = useState("");
  const callPosts = async () => {
    try {
      const res = await fetch(
        "http://localhost:1337/posts/timeline/all/" + props.userID,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },

          credentials: "include",
        }
      );

      const datares = await res.json();
      setData(datares);
      console.log(datares);
      if (res.status === 401) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callPosts();
  }, []);
  return (
    <>
      {data.map((val, i) => {
        return (
          <div className="post">
            <div className="postWrapper">
              <div className="postTop">
                <div className="postTopLeft">
                  <Link to={`/profile`}>
                    <img className="postProfileImg" src={like} alt="" />
                  </Link>
                  <span className="postUsername">anuj</span>
                  <span className="postDate">{val.createdAt}</span>
                </div>
                <div className="postTopRight">{/* <MoreVert /> */}</div>
              </div>
              <div className="postCenter">
                <span className="postText">{val.desc}</span>
                <img className="postImg" src={like} alt="" />
              </div>
              <div className="postBottom">
                <div className="postBottomLeft">
                  <img
                    className="likeIcon"
                    src={like}
                    //   onClick={likeHandler}
                    alt=""
                  />
                  <img
                    className="likeIcon"
                    src={like}
                    //   onClick={likeHandler}
                    alt=""
                  />
                  <span className="postLikeCounter"> {val.likes}people like it</span>
                </div>
                <div className="postBottomRight">
                  <span className="postCommentText"> comments</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* {data.map((val, i) => {
        return ( */}

      {/* );
      })} */}
    </>
  );
}

export default Posts;

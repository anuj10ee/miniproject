import React from "react";
import "./posts.css";
import { Link } from "react-router-dom";
import { MoreVert } from "@material-ui/icons";
import like from "./premium_photo-1663099358462-bcacf22f97c5.avif"

function Posts() {
  return(
    <>
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile`}>
              <img
                className="postProfileImg"
                src={
                 like
                }
                alt=""
              />
            </Link>
            <span className="postUsername">anuj</span>
            <span className="postDate">aaj raat ko</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">ksjfhjdfvkndjkfvnkjdf</span>
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
            <span className="postLikeCounter"> people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> comments</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
  
}

export default Posts;

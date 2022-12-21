import React, { useEffect, useState } from "react";
import "./posts.css";
import { Link } from "react-router-dom";
// import { MoreVert } from "@material-ui/icons";
import callDetails from "./calldetails";
import callCodeforcessubmissions from "../Profile/codeforces-submissions";
// import img from "publ"

function Posts(props) {
  const [data, setData] = useState("");
  const [userdata, setuserData] = useState("");
  // const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  const callPost = async () => {
    try {
      // console.log(props.userID);
      console.log(props.userID);
      await callCodeforcessubmissions(props);
      const res = await fetch(
        "http://localhost:1337/posts/timeline/all/" + props.userID._id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },

          credentials: "include",
        }
      );

      let datares = await res.json();
      console.log(datares);

      if (res.status === 401) {
        const error = new Error(res.error);
        throw error;
      } else {
        datares.sort((a, b) => {
          return new Date(b.time) - new Date(a.time);
        });
        setData(datares);
        console.log(data);
        console.log(props);
        const r = await callDetails(props.userID);
        console.log(r);
        setuserData(r);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // createcodeforcesPost(props);
    callPost();
  }, []);
  return (
    <>
      {/* {console.log(data)} */}
      {data && userdata ? (
        data.map((val, i) => {
          return (
            <>
              <div className="post">
                <div className="postWrapper">
                  <div className="postTop">
                    <div className="postTopLeft">
                      {/* {console.log(val.userId)}
                      {console.log(props.userID._id)}
                      {console.log(val.userId === props.userID._id)} */}
                      {val.userId === props.userID._id ? (
                        <Link to={`/profile`}>
                          <img
                            className="postProfileImg"
                            src={"/uploads/" + userdata.img}
                            alt=""
                          />
                        </Link>
                      ) : (
                        <Link
                          to={`/profile/${val.userId}`}
                          state={{ userID: props.userID._id }}
                        >
                          <img
                            className="postProfileImg"
                            src={"/uploads/" + val.profileimg}
                            alt=""
                          />
                        </Link>
                      )}

                      <span className="postUsername">
                        {console.log(val.name)}
                        {val.userName}
                      </span>
                      <span className="postDate">
                        {val.time ? val.time.slice(0, 25) : "y"}
                      </span>
                    </div>
                    <div className="postTopRight"></div>
                  </div>
                  <div className="postCenter">
                    {console.log(val)}
                    <span className="postText">
                      {" "}
                      {val.problemname ? (
                        <span>
                          {" "}
                          Solved Problem {val.problemname} <br />{" "}
                          <a href="">
                            https://codeforces.com/problemset/problem/
                            {val.contestId}/{val.index}
                          </a>{" "}
                        </span>
                      ) : (
                        val.desc
                      )}
                    </span>
                    {val.img === "uploads/" ? (
                      <img
                        className="postImg"
                        src={"/uploads/codeforces-sponsored-by-ton.png"}
                        alt=""
                      />
                    ) : (
                      <img
                        className="postImg"
                        src={"uploads/" + val.img}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="postBottom">
                    <div className="postBottomLeft">
                      <img
                        className="likeIcon"
                        src="uploads/like-png-facebook-logo-transparent-png-pictures-icons-and-15.png"
                        //   onClick={likeHandler}
                        alt=""
                      />
                      <img
                        className="likeIcon"
                        src="uploads/—Pngtree—vector typing icon_3773950.png"
                        //   onClick={likeHandler}
                        alt=""
                      />
                      {/* <span className="postLikeCounter">
                        {data.likes} people like it
                      </span> */}
                    </div>
                    {/* <div className="postBottomRight">
                      <span className="postCommentText"> comments</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </>
          );
        })
      ) : (
        // <callPosts data={data}/>

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
      {
        // const r=callPosts();
        // setData(r);
      }
      {/* {data.map((val, i) => { */}
      {/* return (
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <Link to={`/profile`}>
                <img className="postProfileImg" src={like} alt="" />
              </Link>
              <span className="postUsername">anuj</span>
              <span className="postDate">kdbks</span>
            </div>
            <div className="postTopRight"></div>
          </div>
          <div className="postCenter">
            <span className="postText">ksjdbfjshb</span>
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
      ); */}
      {/* })} */}
      {/* {data.map((val, i) => {
        return ( */}
      {/* );
      })} */}
    </>
  );
}

export default Posts;

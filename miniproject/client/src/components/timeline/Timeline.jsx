import React from "react";
import Posts from "../posts/Posts";


function Timeline(props) {
  return (
    <div>
     {console.log(props.data._id)}
        return <Posts userID={props.data._id} />;
    
    </div>
  );
}

export default Timeline;

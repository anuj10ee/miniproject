import React from 'react';
import Posts from '../posts/Posts';

const dataID=[
// {userID:'633b31d3b0f0fa4d1aca3dc8'},
{userID:'633d3fdf2ceda62a24b665e2'},
// {userID:'633d50fa8533c08a35b3e196'},

]


function Timeline() {
  return (
    <div>
        {dataID.map((val,i)=>
        {
            return<Posts userID={val.userID}/>
        }
        )}
    </div>
  )
}

export default Timeline;
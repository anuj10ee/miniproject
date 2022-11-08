import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    //promises
    const navigate=useNavigate();
    useEffect(() =>{
        fetch("http://localhost:1337/logout",{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
            // navigate("/login",{replace:true});
            if(res.status!==200)
            {
                const error=new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.log(err);
        });
        
    });
  return (
    <>
    <div>Logout ka page</div>
    <br />
    <a href="/login">login</a>
    </>
    
  )
}

export default Logout
import React from 'react'
import "./temp.css"

export default function Home() {
  return (
    <div>
      <div className="temp">
        <div className="upper">
          <h1> Welcome to codebook </h1>
        </div>
        <div className="lower">
          <div className="left">
          <a href="/login">login</a>
          </div>
          <div className="right">
          <a href="/register">register</a>
          </div>
        </div>
      </div>
        
       

    </div>
  )
}

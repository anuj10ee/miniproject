import React from "react";
import "./temp.css";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div>
      <div className="temp">
        <div className="upper">
          <h1>
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={[
                "Track your progress",
                1000,
                "Track your friend's progress",
                1000,
                "Track upcoming contests",
                1000,
                "Website for Coders",
                1000,
                "Website for Developers",
                1000,
              ]}
              speed={50} // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: "2em", color: 'white' }}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          {" "}
          </h1>
        </div>
        <div className="lower">
          <div className="left">
            <a href="/login">Login</a>
          </div>
          <div className="right">
            <a href="/register">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}

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
                "Website for Mice",
                1000,
                "Website for Hamsters",
                1000,
                "Website for Guinea Pigs",
                1000,
                "Website for Chinchillas",
                1000,
              ]}
              speed={50} // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: "2em" }}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          {" "}
          </h1>
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
  );
}

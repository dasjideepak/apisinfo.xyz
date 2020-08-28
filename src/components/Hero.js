import React, { Component } from "react";
// import img from "../images/img.png";
import illustration from "../images/background1.png";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero-section padding">
        <div className="container">
          <div className="hero-sec-container">
            <div className="hero-text-sec">
              <h2>
                Are you looking for an <span>API?</span> Find the{" "}
                <span>API?</span> for your next project
              </h2>
              <p>
                A collective list of public APIs for use in web development. You
                can search APIs of various categories with their details and can
                use in your next project...
              </p>
              <div className="btn-sec">
                <button className="btn">Add API</button>
                <button className="btn">Search API</button>
              </div>
            </div>
            <div className="hero-img-sec">
              <img className="img" src={illustration} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

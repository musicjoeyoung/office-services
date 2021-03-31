import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export class LandingPage extends Component {
  render() {
    return (
      <div className="landingPage">
        <Fade>
          <img src="/nypr1.png" alt="" id="nyprImg" />
        </Fade>
        <Fade bottom>
          <div className="titleDiv">
            <h1 id="title"> Security & Office Services</h1>
            <h3 id="secondTitle">
              Guide To Security and Office Services Roles, Responsibilities, and
              Procedures
            </h3>
            <a href="/mainpage" id="enter">
              enter
            </a>
          </div>
        </Fade>
      </div>
    );
  }
}

export default LandingPage;

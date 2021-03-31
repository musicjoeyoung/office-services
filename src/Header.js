import React, { Component } from "react";
import { Link } from "react-router-dom";
import dropdownImg from "./images/dropdown.png";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="/">
          <img src="/nypr1.png" alt="" id="nyprImg" />
        </a>
        <h3 id="deptName">
          New York Public Radio - Security & Office Services
        </h3>
        <div className="dropdownDiv">
          <div className="dropdown">
            <img className="dropbtn" src={dropdownImg} alt="" />
            <div className="navbar">
              <Link to="/mainpage">Home</Link>
              <Link to="manager">Manager</Link>
              <Link to="coordinator">Coordinator</Link>
              <Link to="receptionist">Receptionist</Link>
              <Link to="resources">Resources</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

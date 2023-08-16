import React from "react";
import PropTypes from "prop-types";

// import { a } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar  navbar-expand-lg  `}
      style={{ background: props.mood === "dark" ? "#343a40" : "#adb5bd" }}
    >
      <div className="container-fluid ">
       <b> <a
          className={`navbar-brand text-${
            props.mood === "dark" ? "white" : "black"
          }`}
          href=""  //   '/'
        >
          {" "}
          {props.tittle}{" "}
        </a></b> 
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav   mb-2 mb-lg-0">
            <li className="nav-item m-1">
              <a
               style={{textDecoration:'none'}}  className={` nav-a text-${
                  props.mood === "dark" ? "white" : "black"
                } active`}
                aria-current="page"
                href="#"   // '/home'
              >
                <b> Home</b>
              </a>
            </li>
            <li className="nav-item m-1">
              <a
               style={{textDecoration:'none'}}  className={` nav-a text-${
                  props.mood === "dark" ? "white" : "black"
                } active`}
                aria-current="page"
                href="#"  // '/about'
              >
                <b>About </b>
              </a>
            </li>
            <li className="nav-item m-1">
              <a
               style={{textDecoration:'none'}}  className={` nav-a text-${
                  props.mood === "dark" ? "white" : "black"
                } active`}
                aria-current="page"
                href= "#"      //"/Contact"
              >
                <b> Contact US</b>
              </a>
            </li>
          </ul>

          <div className="d-none d-md-block  me-auto">
            <form className="d-flex  " role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-warning mx-1" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="form-check form-switch mx-3">
            <input
              onClick={props.toggleMood}
              className="form-check-input "
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label  `}
              style={{ color: props.mood === "dark" ? "white" : "#343a40" }}
              htmlFor="flexSwitchCheckDefault"
            >
              <b> Dark Mood</b>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  tittle: PropTypes.string,
};

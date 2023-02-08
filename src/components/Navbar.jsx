import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/cw-logo.png';
import Login from "./Login.jsx";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand d-flex" to={''}>
        <div className="d-flex flex-column align-items-center">
          <img alt="logo" src={logo} height="45" />
        </div>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto">
          <li>
            <Link to={'About'} className="btn text-success lighten-30 selectable text-uppercase">
              About
            </Link>
          </li>
        </ul>
        <Login />
      </div >
    </nav >
  )
}
import React from "react";
import { Link } from "react-router";

const Navbar = () => (
  <nav style={{ marginBottom: 0 }} className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Destined to Conquer</Link>
      </div>
      <ul className="nav navbar-nav">
        <li className={location.pathname === "/" && "active"}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/about" && "active"}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === "/contact" && "active"}>
          <Link to="/about">Contact</Link>
        </li>
        <li >
          <Link to="/login">Login</Link>
        </li>
        <li >
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;

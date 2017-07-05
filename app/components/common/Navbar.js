import React from "react";
import { Link } from "react-router";


const Navbar = () => (

  <nav style={{ marginBottom: 0 }} className="navbar navbar-default pmd-navbar">
    <div className="container">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Destined to Conquer</Link>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#brief">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
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

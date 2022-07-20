import React from "react";
import { NavLink } from "react-router-dom";


const UserNavbar = () => {

  const logout = () => {
    localStorage.clear()
    window.location = '/'
  }

  return(
  <nav style={{ marginBottom: 0 }} className="navbar navbar-default pmd-navbar">
    <div className="container-fluid">
      <div className="navbar-header">
        <NavLink className="navbar-brand" to="/">Destined to Conquer</NavLink>
      </div>
      <ul className="nav navbar-nav navbar-right flex">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li > 
          <NavLink to="/lessons">Lessons</NavLink>
      </li> 
       <li > 
          <NavLink to="#"
                   onClick={logout}>Logout</NavLink>
      </li> 
      </ul>
    </div>
  </nav>

  )};

export default UserNavbar;

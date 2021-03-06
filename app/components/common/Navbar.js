import React from "react";
import { Link } from "react-router";


const Navbar = ({isLoggedIn}) => (

  <nav style={{ marginBottom: 0 }} className="navbar navbar-default pmd-navbar">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Destined to Conquer</Link>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="/">Home</Link>
        </li>
       {/*If the user is logged in, display the Lessons page link*/}
        {
          (isLoggedIn) ? <Lessons/> : <Login/>
        }
      {/*If the user is logged in, display the Logout page link*/}
        {
          (isLoggedIn) ? <Logout/> : <Register/>
        }
       
      </ul>
    </div>
  </nav>

);

function Login(){
  return(
  <li > 
     <Link to="/login">Login</Link>
  </li>
  )
}

function Register(){
  return(
  <li>
      <Link to="/register">Register</Link>
  </li>
  )
}

function Logout(){
  return(
  <li > 
      <Link to="/logout">Logout</Link>
  </li>
  )
}

function Lessons(){
  return(
  <li > 
      <Link to="/lessons">Lessons</Link>
  </li>
  )
}

export default Navbar;

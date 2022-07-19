import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = ({isLoggedIn, setLoginStatus}) => (

  <nav style={{ marginBottom: 0 }} className="navbar navbar-default pmd-navbar">
    <div className="container-fluid">
      <div className="navbar-header">
        <NavLink className="navbar-brand" to="/">Destined to Conquer</NavLink>
      </div>
      <ul className="nav navbar-nav navbar-right flex">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
       {/*If the user is logged in, display the Lessons page link*/}
        {
          (isLoggedIn) ? <li > 
          <NavLink to="/lessons">Lessons</NavLink>
      </li> : <li > 
          <NavLink to="/login">Login</NavLink>
       </li>
        }
      {/*If the user is logged in, display the Logout page link*/}
        {
          (isLoggedIn) ? <li > 
          <NavLink to="/logout">Logout</NavLink>
      </li> :  <li>
          <NavLink to="/register">Register</NavLink>
      </li>
        }
       
      </ul>
    </div>
  </nav>

);

// function Login(){
//   return(
 
//   )
// }

// function Register(){
//   return(
 
//   )
// }

// function Logout(){
//   return(
 
//   )
// }

// function Lessons(){
//   return(
 
//   )
// }

export default Navbar;

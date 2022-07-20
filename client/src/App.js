
import './App.css';
import React, { useEffect, useState } from "react";
import { Router, Route, Switch, Redirect} from "react-router-dom"

import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";
import Lessons from "./components/lessons";
import LessonPage from "./components/lessonpg";

import history from './components/history';
import jwtDecode from 'jwt-decode'
import UserNavbar from './components/common/UserNavbar';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';



function App() {
   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
   const [user, setUser] = useState('')


useEffect(()=> {
  try{ const jwt = localStorage.getItem("bibleApp");
  const user = jwtDecode(jwt);
  setUser( user );
  console.log(user)
}catch(ex){}
  
}, [])
  return (
    <>    
    <Router history={history}>
    {user ? <UserNavbar /> : <Navbar/>}
    <Switch>
    
           <Route exact
         path="/register"
         render={props => {
                if (!user) return <Register {...props} />;
                return <Redirect to="/lessons" />;
              }}/>
        <Route exact
        path="/login"
        render={props => {
                if (!user) return <Login {...props} />;
                return <Redirect to="/lessons" />;
              }}/>
        <Route exact
        path="/lessons" render={props => {
                if (!user) return <Redirect to="/" />;
                return <Lessons {...props} />;
              }}/>
               <Route exact path="/" 
                      render={props => {
                        if (!user) return <Home {...props} />;
                        return <Redirect to="/lessons" />;
                      }}/>
       
    	<Route exact path="/view-lesson/:lessonId" component={LessonPage}/>
    </Switch>
    <Footer/>
   </Router>
   </>

  );
}

export default App;





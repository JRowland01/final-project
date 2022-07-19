// import logo from './logo.svg';
import './App.css';
// import routes from './config/routes';
import React, { useEffect, useState } from "react";
// import { IndexRoute, browserHistory } from "react-router";
import { Router, Route, Switch} from "react-router-dom"
//Client code
//Imported components
// import Main from "./components/main";
import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";
import Lessons from "./components/lessons";
import LessonPage from "./components/lessonpg";
import Logout from "./components/logout";
import history from './components/history';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';



function App() {
   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  
// const lessonId = useParams()
// console.log(lessonId)
function setLoginStatus(status) {
  setIsUserLoggedIn({isUserLoggedIn: status});
}

useEffect(()=> {
  if(localStorage.getItem('bibleApp')) {
    setIsUserLoggedIn(true);
  }
}, [setIsUserLoggedIn])
  return (
    <>    
    <Router history={history}>
      <Navbar isLoggedIn={isUserLoggedIn} />
    <Switch>
    	<Route exact path="/" component={Home} />
    	<Route exact path="/register" component={Register} />
    	<Route exact path="/login" component={Login}/>
    	<Route exact path="/lessons" component={Lessons} />
    	<Route exact path="/logout" component={Logout} setLoginStatus={setLoginStatus} />
    	<Route exact path="/view-lesson/:lessonId" component={LessonPage}/>
    </Switch>
    <Footer/>
   </Router>
   </>

  );
}

export default App;





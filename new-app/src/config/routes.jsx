import React from "react";
// import { IndexRoute, browserHistory } from "react-router";
import {BrowserRouter as Router, Route} from "react-router-dom"
//Client code
//Imported components
import Main from "../components/main";
import Home from "../components/home";
import Register from "../components/register";
import Login from "../components/login";
import Lessons from "../components/lessons";
import LessonPage from "../components/lessonpg";
import Logout from "../components/logout";

import { createBrowserHistory } from "history";

const history = createBrowserHistory({
        basename: process.env.PUBLIC_URL,
      });


const routes = (
  <Router history={history}>
    <Route path="/" component={Main}>
    	<Route path="/home" component={Home} />
    	<Route path="register" component={Register} />
    	<Route path="login" component={Login} />
    	<Route path="lessons" component={Lessons} />
    	<Route path="logout" component={Logout} />
    	<Route path="view-lesson/:lessonId" component={LessonPage}/>
    </Route>
  </Router>
);

export default routes;

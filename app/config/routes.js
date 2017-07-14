import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

//Client code
//Imported components
import Main from "../components/main";
import Home from "../components/home";
import Register from "../components/register";
import Login from "../components/login";
import Lessons from "../components/lessons";
import LessonPage from "../components/lessonpg";
import Logout from "../components/logout";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    	<IndexRoute component={Home} />
    	<Route path="register" component={Register} />
    	<Route path="login" component={Login} />
    	<Route path="lessons" component={Lessons} />
    	<Route path="logout" component={Logout} />
    	<Route path="view-lesson/:lessonId" component={LessonPage}/>
    </Route>
  </Router>
);

export default routes;

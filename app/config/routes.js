import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/main";
import Home from "../components/home";
import Register from "../components/register";
import Login from "../components/login";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    	<Route path="register" component={Register} />
    	<Route path="login" component={Login} />
	    <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;

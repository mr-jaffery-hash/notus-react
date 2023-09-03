import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import NewPass from "./new/newPass"
// views without layouts
import ResetPass from './new/ResetPass.js';
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Signup from "new/Signup.js";
import Dashboard from "views/admin/Dashboard";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path = "/reset" component = {NewPass}/>
      <Route path="/reset-password" component={ResetPass} />
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/admin/dashboard" exact component={Dashboard} />
      
      {/* add redirect for first page */}
      <Redirect from="/" to="/auth" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

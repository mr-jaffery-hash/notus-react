import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import SearchPage from "./Pages/SearchPage.js"
import TempReportClearance from "./Pages/TempReportClearance.js"
import EnrollmentForm from "./Pages/EnrollmentForm.js";
import AddJob from "./new/Addjob.js"
// views without layouts
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import RatingsPage from "./Pages/RatingsPage.js"
//new
import Jobsel from "new/Jobsel.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      <Route path="/jobsel" component={Jobsel} />
      {/* add routes without layouts */}
      <Route path="/RegisterJob" exact component={AddJob}/>
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Landing} />
      <Route path="/search" exact component={SearchPage}></Route>
      <Route path="/reportClearance" exact component={TempReportClearance}></Route>
      <Route path="/enroll" exact component={EnrollmentForm}></Route>
      <Route path="/ratingspage" exact component={RatingsPage}></Route>
      {/* add redirect for first page */}
      {/*<Redirect from="*" to="/" />*/}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

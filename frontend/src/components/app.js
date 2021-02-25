import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import HomePage from "./home/home_page";
import SplashPage from "./splash/splash_page"
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
// [TEST][WORKS] Profile Page Route
import ProfilePageContainer from "./profile_page/profile_page_container";

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      {/* [TEST][WORKS] Profile Page */}
      <ProtectedRoute exact path="/profile-page" component={ProfilePageContainer} />
      <ProtectedRoute path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;

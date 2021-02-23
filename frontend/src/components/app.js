import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import LogoutButtonContainer from "./logout/logout_button_container";

import HomePage from "./home/home_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute exact path="/" component={HomePage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>

    {/* Returns null if not logged in */}
    <LogoutButtonContainer />
  </div>
);

export default App;

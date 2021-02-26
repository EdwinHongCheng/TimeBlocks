import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import HomePage from "./home/home_page";
import SplashPage from "./splash/splash_page"
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ProfilePageContainer from "./profile_page/profile_page_container";
// [TEST] Show Friend page
import ShowFriendContainer from "./show_friend/show_friend_container";

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/profile-page" component={ProfilePageContainer} />
      {/* [TEST] Show Friend page */}
      <ProtectedRoute exact path="/friends/:friendEmail" component={ShowFriendContainer} />
      <ProtectedRoute path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;

import React from "react";
import { Route } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import "./Welcome.css";

function Welcome() {
  return (
    <div>
      <Route exact path="/" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </div>
  );
}

export default Welcome;

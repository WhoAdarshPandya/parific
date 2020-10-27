import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import "./App.css";

function App() {
  // const [isLoggedIn, setIsLoggedin] = useState(false);
  return (
    <Router>
      <div className="MainContainer">
        <div className="App">
          <Route exact path="/" component={Signup} />
          <Route path="/login" component={Login} />
          <Link to="/login">click to login</Link>
        </div>
      </div>
    </Router>
  );
}

export default App;

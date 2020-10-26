import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  // const [isLoggedIn, setIsLoggedin] = useState(false);
  return (
    <Router>
      <div className="MainContainer">
        <div className="App">
          <Route exact path="/" component={Signup} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./theme/theme";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const [isLoggedIn] = useState(false);
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <div className="MainContainer">
          <div className="App">
            {isLoggedIn ? <p>app here</p> : <Welcome />}
          </div>
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;

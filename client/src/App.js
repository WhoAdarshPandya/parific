import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./theme/theme";
import Welcome from "./components/Welcome/Welcome";
import { SnackbarProvider } from "notistack";
import { motion } from "framer-motion";
import Cookie from "js-cookie";
import Parific from "./components/Parific/Parific";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = Cookie.get("token");
    if (token !== "" && token !== null && token !== undefined) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      Cookie.set("token", "");
    }
  }, []);
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <motion.div
            initial={{ opacity: 0, y: "-200vh" }}
            animate={{ opacity: 1, y: 0 }}
            // bounce : 0.5
            transition={{ type: "spring", duration: 0.3, stiffness: 150 }}
            className="MainContainer"
          >
            <div className="App">{isLoggedIn ? <Parific /> : <Welcome />}</div>
          </motion.div>
        </SnackbarProvider>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;

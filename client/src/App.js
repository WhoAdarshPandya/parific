import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./theme/theme";
import Welcome from "./components/Welcome/Welcome";
import { SnackbarProvider } from "notistack";
import { motion } from "framer-motion";
import "./App.css";
function App() {
  const [isLoggedIn] = useState(false);
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <motion.div
            initial={{ opacity: 0, y: "-200vh" }}
            animate={{ opacity: 1, y: 0 }}
            className="MainContainer"
          >
            <div className="App">
              {isLoggedIn ? <p>app here</p> : <Welcome />}
            </div>
          </motion.div>
        </SnackbarProvider>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;

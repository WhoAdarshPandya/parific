import React from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import logo1 from "../../assets/social1.svg";
import logo2 from "../../assets/social2.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Login.css";
import { loginApiCall } from "../../api/apiReq";

function Login() {
  const handleLogin = async () => {
    console.log("here we go");
    let data = await loginApiCall({
      email: "jb@gmail.com",
      password: "1234",
    });
    console.log(data);
  };
  return (
    <div className="login__main">
      <Grid container className="d-flex">
        <Grid item md={6}>
          <div className="features">
            <div className="ft1" style={{ height: "35%" }}>
              <img src={logo1} className="asset asset-1" alt="logo" />
              <Typography align="justify" variant="subtitle1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy a
                jsdlj kjhsdkh saksdjhl lkhj
              </Typography>
            </div>
            <br />
            <br />
            <div className="ft2" style={{ height: "35%" }}>
              <img src={logo2} className="asset asset-2" alt="logo" />

              <Typography align="justify" variant="subtitle1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item md={6}>
          <div className="login__input">
            <Typography
              color="primary"
              variant="h4"
              style={{ textAlign: "center" }}
            >
              Login
            </Typography>
            <br />
            <motion.div
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TextField
                variant="outlined"
                className="w-100"
                value=""
                label="Email"
              />
            </motion.div>
            <br />
            <motion.div
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <TextField
                variant="outlined"
                value=""
                className="w-100"
                label="Password"
                type="password"
              />
            </motion.div>
            <br />
            <br />
            <motion.div
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.37 }}
            >
              <Button
                onClick={() => {
                  handleLogin();
                }}
                className="w-100"
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </motion.div>
            <br />

            <Link className="link" style={{ textAlign: "center" }} to="/signup">
              Forgot Password
            </Link>
            <Link className="link" style={{ textAlign: "end" }} to="/signup">
              Signup
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;

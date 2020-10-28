import React from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import logo1 from "../../assets/social1.svg";
import logo2 from "../../assets/social2.svg";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
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
            <Typography variant="h4" style={{ textAlign: "center" }}>
              Login
            </Typography>
            <br />
            <TextField variant="outlined" value="" label="Email" />
            <br />
            <TextField
              variant="outlined"
              value=""
              label="Password"
              type="password"
            />
            <br />
            <br />
            <Button variant="contained" color="primary">
              Login
            </Button>
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

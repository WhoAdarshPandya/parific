import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import logo1 from "../../assets/social1.svg";
import logo2 from "../../assets/social2.svg";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login__main">
      <Grid container className="d-flex">
        <Grid item xs={7}>
          <div className="features">
            <div className="ft1" style={{ height: "35%" }}>
              <img src={logo1} className="asset asset-1" alt="abcd" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s ahsdklashjdh hsfd kskjlshafkhs
                alkhjsdahsd jahsdkh
              </p>
            </div>
            <br />
            <br />
            <div className="ft2" style={{ height: "35%" }}>
              <img src={logo2} className="asset asset-2" alt="efgh" />
              <p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s ahsdklashjdh hsfd
                  kskjlshafkhs alkhjsdahsd jahsdkh
                </p>
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={5}>
          <div className="login__input">
            <h2 style={{ textAlign: "center" }}>Login</h2>
            <TextField value="" label="Email" />
            <br />
            <TextField value="" label="password" type="password" />
            <br />
            <br />
            <Button variant="contained" color="primary">
              Login
            </Button>
            <br />

            <Link style={{ textAlign: "center" }} to="/signup">
              Forgot Password
            </Link>
            <Link style={{ textAlign: "end" }} to="/signup">
              Signup
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;

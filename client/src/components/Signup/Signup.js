import React, { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  Badge,
  TextField,
  Typography,
} from "@material-ui/core";
import logo1 from "../../assets/social3.svg";
import logo2 from "../../assets/social4.svg";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CreateIcon from "@material-ui/icons/Create";

import "./Signup.css";

function Signup() {
  const [isNextClicked, setIsNext] = useState(false);
  const [name, setName] = useState("User 👋");
  const [isSignupDisabled, setisSignupDisabled] = useState(true);
  const handleFirst = () => {
    setIsNext(true);
    setisSignupDisabled((prev) => !prev);
  };
  const handleChangeProfile = (e) => {
    console.log(e);
  };
  return (
    <div className="signup__main">
      <Grid container className="d-flex">
        <Grid item md={6}>
          <div className="features">
            <div className="ft1" style={{ height: "35%" }}>
              <img src={logo1} className="asset asset-1" alt="abcd" />
              <Typography align="justify" variant="subtitle1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy a
                jsdlj kjhsdkh saksdjhl lkhj
              </Typography>
            </div>
            <br />
            <br />
            <div className="ft2" style={{ height: "35%" }}>
              <img src={logo2} className="asset asset-2" alt="efgh" />

              <Typography align="justify" variant="subtitle1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item md={6}>
          <div className="signup__input">
            {isNextClicked ? (
              <>
                <Typography
                  variant="h4"
                  color="primary"
                  style={{ textAlign: "center" }}
                >
                  Hello , {name}
                </Typography>
                <br />
                <Badge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  className="badge"
                  badgeContent={
                    <Avatar style={{ background: "#7c72ff" }}>
                      <Button
                        style={{ color: "#fff" }}
                        variant="text"
                        component="label"
                      >
                        <CreateIcon />
                        <input
                          type="file"
                          onChange={(e) => {
                            handleChangeProfile(e);
                          }}
                          style={{ display: "none" }}
                        />
                      </Button>
                    </Avatar>
                  }
                >
                  <Avatar src="" className="avatar" />
                </Badge>
                <br />
                <TextField
                  value=""
                  type="password"
                  label="Passoword"
                  variant="outlined"
                />
                <br />
                <TextField
                  value=""
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                />
                <br />
              </>
            ) : (
              <>
                <Typography
                  variant="h4"
                  color="primary"
                  style={{ textAlign: "center" }}
                >
                  Signup
                </Typography>
                <br />
                <TextField value="" label="Name" variant="outlined" />
                <br />
                <TextField value="" label="Email" variant="outlined" />
                <br />
                <TextField value="" label="User Name" variant="outlined" />
                <br />
                <Button
                  style={{
                    height: "40px",
                    width: "90px",
                    marginLeft: "auto",
                  }}
                  color="primary"
                  size="small"
                  variant="contained"
                  onClick={() => {
                    handleFirst();
                  }}
                  endIcon={<NavigateNextIcon />}
                >
                  Next
                </Button>

                <br />
              </>
            )}
            <Button
              variant="contained"
              disabled={isSignupDisabled}
              color="primary"
            >
              Signup
            </Button>
            <br />
            <Link className="link" style={{ textAlign: "end" }} to="/login">
              Login
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signup;

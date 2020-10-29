import React, { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  Badge,
  TextField,
  Typography,
  Backdrop,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";
import logo1 from "../../assets/social3.svg";
import logo2 from "../../assets/social4.svg";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CreateIcon from "@material-ui/icons/Create";
import { UploadImage } from "../../config/firebaseStorage";
import { getImageDownloadUrl } from "../../config/imgData";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import "./Signup.css";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function Signup() {
  const history = useHistory();
  const [profile, setProfile] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const [isNextClicked, setIsNext] = useState(false);
  const [isSignupDisabled, setisSignupDisabled] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [, setProfileUrl] = useState("");
  // ? user data
  const [name, setName] = useState("User 👋");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCPass] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const handleFirst = () => {
    setIsNext(true);
    setisSignupDisabled((prev) => !prev);
  };
  const handleChangeProfile = (e) => {
    setProfile(e.target.files[0]);
    setImgUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async () => {
    if (profile) {
      setLoading(true);
      await UploadImage(profile);
      setTimeout(() => {
        setProfileUrl(getImageDownloadUrl());
        setLoading(false);
        if (getImageDownloadUrl() !== "") {
          enqueueSnackbar("Signup Successful", { variant: "success" });
          history.push("/login");
        } else {
          enqueueSnackbar("some error", { variant: "error" });
        }
      }, 5000);
    } else {
      alert("error 123");
    }
  };
  return (
    <div className="signup__main">
      <Grid container className="d-flex">
        <Grid item md={6}>
          <div className="features">
            <div className="ft1" style={{ height: "35%" }}>
              <img src={logo1} className="asset asset-1" alt="abcd" />
              <Typography className="parag" align="justify" variant="subtitle1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy a
                jsdlj kjhsdkh saksdjhl lkhj
              </Typography>
            </div>
            <br />
            <br />
            <div className="ft2" style={{ height: "35%" }}>
              <img src={logo2} className="asset asset-2" alt="efgh" />

              <Typography className="parag" align="justify" variant="subtitle1">
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
                  <Avatar src={imgUrl} className="avatar" />
                </Badge>
                <br />
                <TextField
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  type="password"
                  label="Passoword"
                  variant="outlined"
                />
                <br />
                <TextField
                  value={cpass}
                  onChange={(e) => {
                    setCPass(e.target.value);
                  }}
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
                <TextField
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  label="Name"
                  variant="outlined"
                />
                <br />
                <TextField
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  label="Email"
                  variant="outlined"
                />
                <br />
                <TextField
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  label="User Name"
                  variant="outlined"
                />
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
              onClick={() => {
                handleSubmit();
              }}
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
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Signup;

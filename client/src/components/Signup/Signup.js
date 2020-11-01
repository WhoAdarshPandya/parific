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
import { motion } from "framer-motion";
import "./Signup.css";
import { SignupApiCall } from "../../api/apiReq";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: 300 },
};

function Signup() {
  const history = useHistory();
  const [profile, setProfile] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const [isNextClicked, setIsNext] = useState(false);
  const [isSignupDisabled, setisSignupDisabled] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [profileUrl, setProfileUrl] = useState("");
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
      setTimeout(async () => {
        setProfileUrl(getImageDownloadUrl());
        setLoading(false);
        if (getImageDownloadUrl() !== "") {
          // ! api call
          let data = await SignupApiCall({
            name,
            email,
            user_name: username,
            password: pass,
            profile: getImageDownloadUrl(),
          });
          console.log(data);
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
                {/* <motion.div
                  // initial={{ opacity: 0, x: 300 }}
                  animate={isNextClicked ? "open" : "closed"}
                  variants={variants}
                > */}
                <TextField
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  style={{ width: "100%" }}
                  type="password"
                  label="Passoword"
                  variant="outlined"
                />
                {/* </motion.div> */}
                <br />
                {/* <motion.div
                  // initial={{ opacity: 0, x: 300 }}
                  animate={isNextClicked ? "open" : "closed"}
                  variants={variants}
                > */}
                <TextField
                  value={cpass}
                  onChange={(e) => {
                    setCPass(e.target.value);
                  }}
                  style={{ width: "100%" }}
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                />
                {/* </motion.div> */}
                <br />
              </>
            ) : (
              <>
                <Typography
                  // animate={{ y: 20 }}
                  variant="h4"
                  color="primary"
                  style={{ textAlign: "center" }}
                >
                  Signup
                </Typography>
                <br />
                <motion.div
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <TextField
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    style={{ width: "100%" }}
                    label="Name"
                    variant="outlined"
                  />
                </motion.div>
                <br />
                <motion.div
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <TextField
                    value={email}
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    label="Email"
                    variant="outlined"
                  />
                </motion.div>
                <br />
                <motion.div
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <TextField
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    style={{ width: "100%" }}
                    label="User Name"
                    variant="outlined"
                  />
                </motion.div>
                <br />
                <motion.div
                  style={{ marginLeft: "auto" }}
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 1.1 }}
                >
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
                </motion.div>
                <br />
              </>
            )}
            <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 1.1 }}>
              <Button
                variant="contained"
                className={isSignupDisabled ? "w-100 disabled" : "w-100"}
                disabled={isSignupDisabled}
                color="primary"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Signup
              </Button>
            </motion.div>
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

import React, { useEffect, useState } from "react";
import { Avatar, Paper } from "@material-ui/core";
import { userAtom } from "../../atoms/atoms";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import TurnedInOutlinedIcon from "@material-ui/icons/TurnedInOutlined";
import "./NewsFeed.css";
import ProfileDialogue from "../ProfileDialogue/ProfileDialogue";

function NewsFeed() {
  const [isLoading, setIsLoading] = useState(true);
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false);
  const userData = useRecoilValue(userAtom);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return isLoading ? (
    <div className="main-newsfeed">
      <p>loading</p>
      <p>end</p>
    </div>
  ) : (
    <div className="main-newsfeed">
      {isProfileDialogOpen && <ProfileDialogue />}
      <div className="newsfeed-og">this is newsfeed</div>
      <div className="sidebar">
        <motion.div whileHover={{ y: -10 }} whileTap={{ scale: 0.9 }}>
          <div className="card-user">
            <div className="header"></div>

            <Paper
              elevation={3}
              className="main-card"
              onClick={() => {
                setIsProfileDialogOpen(true);
              }}
            >
              <div className="avatar">
                {/* <img src={userData?.profile} alt="..." /> */}
                <Avatar src={userData?.profile} className="img" alt=".." />
              </div>
              <div className="text">
                <h3>{userData?.name}</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
            </Paper>
          </div>
        </motion.div>

        <motion.div whileHover={{ y: -10 }} whileTap={{ scale: 0.9 }}>
          <div className="card-user">
            <div className="header"></div>
            <Paper elevation={3} className="main-card">
              <div className="avatar">
                {/* <img src={userData?.profile} alt="..." /> */}
                <Avatar className="img color">
                  <TurnedInOutlinedIcon fontSize="large" />
                </Avatar>
              </div>
              <div className="text">
                <h3>{userData?.name}</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
            </Paper>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default NewsFeed;

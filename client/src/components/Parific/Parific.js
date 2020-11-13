import React, { useEffect, useState } from "react";
import { getUserData } from "../../api/apiReq";
import { userAtom } from "../../atoms/atoms";
import { useRecoilState } from "recoil";
// eslint-disable-next-line
import Cookie from "js-cookie";
import { useSnackbar } from "notistack";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import PublicOutlinedIcon from "@material-ui/icons/PublicOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SwipeableViews from "react-swipeable-views";
import { Tabs, Tab, Avatar } from "@material-ui/core";
import { style } from "../../theme/theme";
import NewsFeed from "../NewsFeed/NewsFeed";
import Requests from "../Requests/Requests";
// •
import "./Parific.css";

function Parific() {
  // eslint-disable-next-line
  const { enqueueSnackbar } = useSnackbar();
  const [userData, setUserData] = useRecoilState(userAtom);

  const [index, setIndex] = useState(1);
  const detectDevice = window.mobileCheck();
  useEffect(() => {
    const getData = async () => {
      let data = await getUserData();
      return data;
    };
    getData().then((res) => {
      if (res.success) {
        // ? debug
        console.log(res.success);
        console.log(res.data);
        // ? debug
        console.log("setting");
        setUserData(res.data);
      } else {
        Cookie.remove("token");
        window.location.reload();
        enqueueSnackbar("something went wrong", { variant: "warning" });
      }
    });
    // eslint-disable-next-line
  }, []);
  const handleChange = (event, index) => {
    // console.log(userData.profile);
    setIndex(index);
  };

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  return (
    <div className="parific-container">
      <Tabs
        indicatorColor="primary"
        textColor="secondary"
        scrollButtons="auto"
        value={index}
        variant={detectDevice ? "scrollable" : "fullWidth"}
        onChange={handleChange}
      >
        <Tab label={<HomeOutlinedIcon />} />
        <Tab label={<GroupAddIcon />} />
        <Tab label={<PublicOutlinedIcon />} />
        <Tab label={<ChatOutlinedIcon />} />
        <Tab label={<SearchOutlinedIcon />} />
        <Tab
          label={
            userData ? (
              <Avatar
                src={userData.profile}
                style={{ height: "27px", width: "27px" }}
              />
            ) : (
              <Avatar src="" style={{ height: "27px", width: "27px" }} />
            )
          }
        />
      </Tabs>
      <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        <div className="feed" style={Object.assign({}, style.slide)}>
          <NewsFeed />
        </div>
        <div className="requests" style={Object.assign({}, style.slide)}>
          <Requests />
        </div>
        <div className="notification" style={Object.assign({}, style.slide)}>
          slide n°3
        </div>
        <div className="chat" style={Object.assign({}, style.slide)}>
          slide n°4
        </div>
        <div className="search" style={Object.assign({}, style.slide)}>
          slide n°5
        </div>
        <div className="profile" style={Object.assign({}, style.slide)}>
          slide n°6
        </div>
      </SwipeableViews>
    </div>
  );
}

export default Parific;

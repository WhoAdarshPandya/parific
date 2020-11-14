import React, { useState } from "react";
import {
  makeStyles,
  Paper,
  InputBase,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  Popover,
} from "@material-ui/core";
import Picker from "emoji-picker-react";
import ScrollToBottom from "react-scroll-to-bottom";
import { css } from "@emotion/css";
import SearchIcon from "@material-ui/icons/Search";
import TelegramIcon from "@material-ui/icons/Telegram";
import SecurityIcon from "@material-ui/icons/Security";
// import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import "./Chat.css";

const useStyles = makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));
const root = css({
  height: "100%",
  width: "100%",
});
function Chat() {
  const [searchName, setSearchName] = useState("");
  const [msg, setMsg] = useState("");
  const [isChatActive] = useState(true);
  const [openEmojiBoard, setEmojiBoard] = useState(false);
  const [isAnonymouschatActive, setIsAnonymousChatActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const [frnds, setFrnds] = useState([
    {
      profile:
        "https://images.unsplash.com/photo-1499854413229-6d1c92ff39ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80",
      name: "Adarsh Pandya",
      msg: "kya che bhai?",
    },
    {
      profile:
        "https://images.unsplash.com/photo-1519444793799-fb6e09f43bfb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      name: "Vinayak Khalasi",
      msg: "hi bro",
      isClicked: false,
    },
    {
      profile:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      name: "Shailee Bhatt",
      msg: "hey hello sjdlkj",
      isClicked: false,
    },
    {
      profile:
        "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      name: "Hemant Kher",
      msg: "good morning",
      isClicked: false,
    },
    {
      profile:
        "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      name: "Riya mca",
      msg: "good morning",
      isClicked: false,
    },
    {
      profile:
        "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      name: "Bhill bhatt",
      msg: "good morning",
      isClicked: false,
    },
    {
      profile:
        "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      name: "Jill bhatt",
      msg: "good morning",
      isClicked: false,
    },
  ]);
  const handleListClick = (name) => {
    setFrnds((frnd) => {
      return [
        ...frnd.map((ons) => {
          if (ons.name === name) {
            ons.isClicked = true;
          } else {
            ons.isClicked = false;
          }
          return ons;
        }),
      ];
    });
  };

  const handleClick = (event) => {
    setEmojiBoard(true);
    setAnchorEl(event.currentTarget);
  };

  const onEmojiSelection = (event, emojiObject) => {
    setMsg((prev) => `${prev}${emojiObject.emoji}`);
  };

  const handleAnonymousButton = (isActive) => {
    setIsAnonymousChatActive(!isActive);
    toggleMods(!isActive);
  };

  const toggleMods = (bool) => {
    bool
      ? document
          .getElementsByClassName("main_chatwin")[0]
          .classList.add("anonymouschat")
      : document
          .getElementsByClassName("main_chatwin")[0]
          .classList.remove("anonymouschat");
  };
  return (
    <div className="chat_container">
      <div className="chat_sidebar_users">
        <Paper elevation={0} className="chat_searchbar">
          <Paper elevation={0} className="searchbar">
            <IconButton className={classes.iconButton} color="secondary">
              <SearchIcon />
            </IconButton>
            <InputBase
              value={searchName}
              onChange={(e) => {
                setSearchName(e.target.value);
              }}
              className={classes.input}
              placeholder="Search Friends..."
              inputProps={{ "aria-label": "Search Friends..." }}
            />
          </Paper>
        </Paper>
        <Divider />
        <List>
          {frnds.map((frnd) => (
            <div key={frnd.name}>
              <ListItem
                onClick={() => {
                  handleListClick(frnd.name);
                }}
                key={frnd.name}
                button
                className={frnd.isClicked ? "list-user hvr" : "hvr"}
              >
                <ListItemAvatar>
                  <Avatar src={frnd.profile} alt="" />
                </ListItemAvatar>
                <ListItemText
                  primary={frnd.name}
                  secondary={
                    <Typography variant="subtitle2">{frnd.msg}</Typography>
                  }
                />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </div>
      <div className="chat_window">
        {isChatActive ? (
          <div className="main_chatwin">
            <Paper elevation={0} variant="outlined" className="current_contact">
              <List style={{ paddingTop: "0px", paddingBottom: "0px" }}>
                <ListItem style={{ paddingTop: "0px", paddingBottom: "0px" }}>
                  <ListItemAvatar>
                    <Avatar
                      src="https://images.unsplash.com/photo-1499854413229-6d1c92ff39ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80"
                      alt=""
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography style={{ color: "#000" }}>
                        Adarsh Pandya
                      </Typography>
                    }
                    secondary={
                      <Typography variant="subtitle2" style={{ color: "grey" }}>
                        Adarsh Pandya
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItemSecondaryAction>
                  <IconButton color="primary">
                    <MoreVertOutlinedIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </List>
            </Paper>
            <div className="chats_main_msgbox">
              <ScrollToBottom className={root}>
                <div className="conversation-start">
                  <span>Monday, 1:27 PM</span>
                </div>
                <div className="bubble you">So, how's your new phone?</div>
                <div className="bubble you">
                  You finally have a smartphone :D
                </div>
                <div className="bubble me">Drake?</div>
                <div className="bubble me">Why aren't you answering?</div>
                <div className="bubble me">Why aren't you answering?</div>
                <div className="bubble me">Why aren't you answering?</div>
                <div className="bubble me">Why aren't you answering?</div>
                <div className="bubble me">Why aren't you answering?</div>
                <div className="bubble me">Why aren't you answering?</div>
                <div className="bubble me">Why aren't you answering?</div>
                <div className="bubble you">
                  <div class="dot one"></div>
                  <div class="dot two"></div>
                  <div class="dot three"></div>
                </div>
              </ScrollToBottom>
            </div>
            {/* <div className="chat_sender_input">

            </div> */}
            <Paper elevation={0} className="send_input">
              <IconButton
                onClick={() => {
                  handleAnonymousButton(isAnonymouschatActive);
                }}
                className={classes.iconButton}
              >
                <SecurityIcon />
              </IconButton>
              <IconButton onClick={handleClick} className={classes.iconButton}>
                <InsertEmoticonIcon />
              </IconButton>
              <InputBase
                autoFocus={true}
                style={{ width: "75%" }}
                value={msg}
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
                className={classes.input}
                placeholder="Send a message"
                inputProps={{ "aria-label": "Send a message" }}
              />

              <IconButton>
                <TelegramIcon />
              </IconButton>
            </Paper>
            {openEmojiBoard ? (
              <Popover
                id="123"
                open={true}
                onEscapeKeyDown={() => {
                  setEmojiBoard(false);
                }}
                onBackdropClick={() => {
                  setEmojiBoard(false);
                }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                anchorEl={anchorEl}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <Picker onEmojiClick={onEmojiSelection} />
              </Popover>
            ) : null}
          </div>
        ) : (
          <div className="left-portion__hero ">
            <div className="hr-animation">
              <div className="chat-bubble"></div>
              <div className="statistic"></div>
              <div className="reports"></div>
              <div className="page"></div>
              <div className="magnifying-glass"></div>
              <div className="pie-chart"></div>
              <div className="eyes"></div>
              <div className="eyes eye-right"></div>
              <div className="smoke smoke1"></div>
              <div className="smoke smoke2"></div>
              <div className="smoke smoke3"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;

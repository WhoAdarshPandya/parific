import React, { useState, useEffect } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
  Divider,
  IconButton,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Skeleton } from "@material-ui/lab";
import "./Notifications.css";

function Notifications() {
  const [notification_list] = useState([
    {
      id: "1",
      profile:
        "https://images.unsplash.com/photo-1499854413229-6d1c92ff39ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80",
      notification: "adarsh pandya has accepted your friend request",
    },
    {
      id: "2",
      profile:
        "https://images.unsplash.com/photo-1519444793799-fb6e09f43bfb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      notification: "adarsh pandya has accepted your friend request",
    },
    {
      id: "3",
      profile:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      notification: "adarsh pandya has accepted your friend request",
    },
    {
      id: "4",
      profile:
        "https://images.unsplash.com/photo-1499854413229-6d1c92ff39ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      notification: "adarsh pandya has accepted your friend request",
    },
    {
      id: "5",
      profile:
        "https://images.unsplash.com/photo-1519444793799-fb6e09f43bfb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      notification: "adarsh pandya has accepted your friend request",
    },
    {
      id: "6",
      profile:
        "https://images.unsplash.com/photo-1499854413229-6d1c92ff39ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80",
      notification: "adarsh pandya has accepted your friend request",
    },
    {
      id: "7",
      profile:
        "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      notification: "adarsh pandya has accepted your friend request",
    },
  ]);
  // ? debug
  const [isNotificationsLoading, setIsNotificationsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsNotificationsLoading(false);
    }, 10000);
  });
  return (
    <div className="notification_container">
      <Typography variant="h6" className="notification_header">
        Notifications
      </Typography>

      {isNotificationsLoading ? (
        <List className="py-0">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num}>
              <ListItem key={num} className="notification_list">
                <ListItemAvatar>
                  <Skeleton
                    animation="wave"
                    variant="circle"
                    width={40}
                    height={40}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width="60%"
                      height={30}
                    />
                  }
                  secondary={
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width="40%"
                      height={25}
                    />
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton>
                    <Skeleton
                      animation="pulse"
                      variant="circle"
                      width={40}
                      height={40}
                    />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      ) : (
        <List className="py-0">
          {notification_list.map((notif) => (
            <div key={notif.id}>
              <ListItem className="notification_list" key={notif.id}>
                <ListItemAvatar>
                  <Avatar src={notif.profile} alt="" />
                </ListItemAvatar>
                <ListItemText
                  primary={notif.notification}
                  secondary={"8:27pm • May,11"}
                />
                <ListItemSecondaryAction>
                  <IconButton color="primary">
                    <DeleteOutlineIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      )}
      <p className="last_dot">•</p>
    </div>
  );
}

export default Notifications;

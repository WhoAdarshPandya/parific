import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Accordion,
  Button,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
// ? icons
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// ?svgs
import friends from "../../assets/friends.svg";
import groups from "../../assets/groups.svg";
import "./Requests.css";

function Requests() {
  const [listOfFriends] = useState(1);
  const [listOfGroups] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  const frndsArray = [
    {
      profile:
        "https://images.unsplash.com/photo-1499854413229-6d1c92ff39ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80",
      name: "Adarsh Pandya",
      username: "codarsh",
      joinedAt: "24/11/20",
    },
    {
      profile:
        "https://images.unsplash.com/photo-1519444793799-fb6e09f43bfb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      name: "Vinayak Khalasi",
      username: "vin_boi",
      joinedAt: "21/10/20",
    },
    {
      profile:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      name: "Shailee Bhatt",
      username: "shailu",
      joinedAt: "14/12/20",
    },
    {
      profile:
        "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      name: "Hemant Kher",
      username: "ashwin",
      joinedAt: "12/02/19",
    },
  ];
  const handleSecondaryInput = (frnd) => {
    return `@${frnd.username}  •  joined on ${frnd.joinedAt}`;
  };
  return (
    <div className="request_container">
      {/* this is friends headline */}
      {isLoading ? (
        <>
          <br />
          <List className="list-extrapadding-remove">
            <ListItem>
              <ListItemText
                primary={
                  <Skeleton
                    animation="pulse"
                    height={30}
                    width="30%"
                    variant="text"

                    // style={{ marginBottom: 6 }}
                  />
                }
              />
              <ListItemSecondaryAction>
                <IconButton color="primary">
                  <Skeleton
                    animation="wave"
                    variant="circle"
                    width={35}
                    height={35}
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          <Accordion defaultExpanded={true} className="border-none accordin">
            <AccordionSummary
              className="border-none"
              expandIcon={<ExpandMoreIcon color="primary" />}
            >
              <Typography>Friend Requests</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List className="w-100 list-extrapadding-remove">
                {[1, 2, 3].map((item) => (
                  <ListItem className="w-100" button key={item}>
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
                          width="40%"
                          height={30}
                        />
                      }
                      secondary={
                        <Skeleton
                          animation="wave"
                          variant="text"
                          width="30%"
                          height={25}
                        />
                      }
                    />
                    <ListItemSecondaryAction>
                      <Button color="secondary">
                        <Skeleton
                          variant="rect"
                          animation="wave"
                          width={55}
                          height={30}
                        />
                      </Button>
                      <Button>
                        <Typography color="error">
                          <Skeleton
                            variant="rect"
                            animation="wave"
                            width={65}
                            height={30}
                          />
                        </Typography>
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
          <br />
          <List className="list-extrapadding-remove">
            <ListItem>
              <ListItemText
                primary={
                  <Skeleton
                    animation="pulse"
                    height={30}
                    width="30%"
                    variant="text"
                    // style={{ marginBottom: 6 }}
                  />
                }
              />
              <ListItemSecondaryAction>
                <IconButton color="primary">
                  <Skeleton
                    animation="wave"
                    variant="circle"
                    width={35}
                    height={35}
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          <Accordion defaultExpanded={false} className="border-none accordin">
            <AccordionSummary
              className="border-none"
              expandIcon={<ExpandMoreIcon color="primary" />}
            >
              <Typography>Group Requests</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List className="w-100 list-extrapadding-remove">
                {[1, 2, 3].map((item) => (
                  <ListItem className="w-100" button key={item}>
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
                          width="40%"
                          height={30}
                        />
                      }
                      secondary={
                        <Skeleton
                          animation="wave"
                          variant="text"
                          width="30%"
                          height={25}
                        />
                      }
                    />
                    <ListItemSecondaryAction>
                      <Button color="secondary">
                        <Skeleton
                          variant="rect"
                          animation="wave"
                          width={55}
                          height={30}
                        />
                      </Button>
                      <Button>
                        <Typography color="error">
                          <Skeleton
                            variant="rect"
                            animation="wave"
                            width={65}
                            height={30}
                          />
                        </Typography>
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </>
      ) : (
        <>
          <br />
          <List className="list-extrapadding-remove">
            <ListItem>
              <ListItemText primary="Friends" />
              <ListItemSecondaryAction>
                <IconButton color="primary">
                  <AddOutlinedIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          {/*  list of friends */}
          <Accordion defaultExpanded={true} className="border-none accordin">
            <AccordionSummary
              className="border-none"
              expandIcon={<ExpandMoreIcon color="primary" />}
            >
              <Typography>Friend Requests</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {listOfFriends > 0 ? (
                <List className="w-100 list-extrapadding-remove">
                  {frndsArray.map((friend) => (
                    <ListItem className="w-100" button key={friend.joinedAt}>
                      <ListItemAvatar>
                        <Avatar src={friend.profile} alt={friend.name} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={friend.name}
                        secondary={handleSecondaryInput(friend)}
                      />
                      <ListItemSecondaryAction>
                        <Button color="primary">PAIR</Button>
                        <Button>
                          <Typography color="error">REJECT</Typography>
                        </Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <>
                  <img className="svg" alt="empty frnds" src={friends} />
                </>
              )}
            </AccordionDetails>
          </Accordion>
          <br />
          {/* this is headline for groups */}
          <List className="list-extrapadding-remove">
            <ListItem>
              <ListItemText primary="Groups" />
              <ListItemSecondaryAction>
                <IconButton color="primary">
                  <AddOutlinedIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          {/* list of Groups */}
          <Accordion defaultExpanded={true} className="border-none accordin">
            <AccordionSummary
              className="border-none"
              expandIcon={<ExpandMoreIcon color="primary" />}
            >
              <Typography>Group Requests</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {listOfGroups > 0 ? (
                <List className="w-100 list-extrapadding-remove">
                  {frndsArray.map((friend) => (
                    <ListItem className="w-100" button key={friend.joinedAt}>
                      <ListItemAvatar>
                        <Avatar src={friend.profile} alt={friend.name} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={friend.name}
                        secondary={handleSecondaryInput(friend)}
                      />
                      <ListItemSecondaryAction>
                        <Button color="primary">PAIR</Button>
                        <Button>
                          <Typography color="error">REJECT</Typography>
                        </Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <>
                  <img className="svg" alt="empty grps" src={groups} />
                </>
              )}
            </AccordionDetails>
          </Accordion>
          <p className="dot">•</p>
        </>
      )}
    </div>
  );
}

export default Requests;

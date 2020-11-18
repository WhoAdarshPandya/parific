const router = require("express").Router();
const bcrypt = require("bcrypt");
const {
  signupUserValidation,
  loginValidaton,
} = require("../models/userValidatorModel");
const {
  userModel: userCollection,
  friendModel: friendCollection,
  groupModel: groupCollection,
  chatModel: chatCollection,
  groupChatModel: groupChatCollection,
} = require("../models/dbModels");
const uuid = require("uuid");
// const mongoose = require("../config/dbconfig");
require("../config/db_operations");
const moment = require("moment");
const { jwtTokenGenerator, authUser } = require("../config/jwtTokens");

router.post("/api/v1/signup", async (req, res) => {
  if (req.body === null || req.body === undefined || req.body === "") {
    return res
      .status(200)
      .json({ msg: "no data provided", error: 101, success: false });
  }
  const { error } = signupUserValidation(req.body);
  if (error)
    return res
      .status(200)
      .json({ msg: error.details[0].message, success: false });
  let hash = bcrypt.hashSync(req.body.password, 10);
  await userCollection
    .insertMany([
      {
        user_id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        userName: req.body.user_name,
        password: hash,
        profile: req.body.profile,
        accountType: true,
        date: Date.now(),
        blocked_users: [],
        groups: [],
      },
    ])
    .then((ress) => {
      res.status(200).json({ msg: "ok signup", success: true });
    })
    .catch((e) => {
      res.status(200).json({
        msg: "user name is already taken :(",
        error: e,
        success: false,
      });
    });
});

router.post("/api/v1/login", async (req, res) => {
  if (req.body === "" || req.body === null || req.body === undefined) {
    return res.json({ msg: "no data provided", error: 102, success: false });
  }
  const { error } = loginValidaton(req.body);
  if (error)
    return res
      .status(200)
      .json({ message: error.details[0].message, success: false });
  await userCollection.findOne({ email: req.body.email }, (err, result) => {
    if (err) {
      console.log("error");
      console.log(err);
    } else {
      res.clearCookie("token");
      if (result) {
        let isValidUser = bcrypt.compareSync(
          req.body.password,
          result.password
        );
        if (isValidUser) {
          const token = jwtTokenGenerator(
            JSON.stringify({ userID: result.user_id })
          );
          res.cookie("token", token, { secure: false });
          return res.json({ msg: "login success", token, success: true });
        } else {
          return res.json({ msg: "wrong email/password", success: false });
        }
      } else {
        return res.json({ msg: "no user found", success: false });
      }
    }
  });
});

router.get("/api/main", (req, res) => {
  console.log(req.cookies);
  res.json(req.cookies);
});

router.get("/api/main/securedRoute", authUser, (req, res) => {
  res.json({ msg: "this is protected route", data: req.user });
});

router.get("/api/v1/getprofile", authUser, async (req, res) => {
  const user = await userCollection.findOne({ user_id: req.user.userID });
  res.json({
    data: {
      id: user.user_id,
      name: user.name,
      username: user.userName,
      email: user.email,
      profile: user.profile,
      private: user.accountType,
      date: moment(+user.date).format("DD/MMM/YYYY"),
    },
    success: true,
  });
});

router.get("/api/v1/frndtest", async (req, res) => {
  // await groupChatCollection.insertMany(
  //   [
  //     {
  //       group_id: uuid.v4(),
  //       group_messages: [
  //         {
  //           group_chat_id: uuid.v4(),
  //           sender_id: uuid.v4(),
  //           sender_name: "adarsh",
  //           text: "hello",
  //           date: "date",
  //           time: "time",
  //         },
  //         {
  //           group_chat_id: uuid.v4(),
  //           sender_id: uuid.v4(),
  //           sender_name: "vinaya",
  //           text: "hi",
  //           date: "date",
  //           time: "time",
  //         },
  //         {
  //           group_chat_id: uuid.v4(),
  //           sender_id: uuid.v4(),
  //           sender_name: "ajay",
  //           text: "hey",
  //           date: "date",
  //           time: "time",
  //         },
  //       ],
  //     },
  //   ],
  //   (err, doc) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log(doc);
  //     }
  //   }
  // );
  res.json({ msg: "ok" });
});

module.exports = router;

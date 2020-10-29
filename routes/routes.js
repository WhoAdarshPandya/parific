const router = require("express").Router();
const bcrypt = require("bcrypt");
const {
  signupUserValidation,
  loginValidaton,
} = require("../models/userValidatorModel");
const userCollection = require("../models/userModel");
const mongoose = require("../config/dbconfig");

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
      .json({ message: error.details[0].message, success: false });
  let hash = bcrypt.hashSync(req.body.password, 10);
  await userCollection
    .insertMany([
      {
        name: req.body.name,
        email: req.body.email,
        userName: req.body.user_name,
        password: hash,
        profile: req.body.profile,
        accountType: true,
      },
    ])
    .then((ress) => {
      res.status(200).json({ msg: "ok signup", success: true });
    })
    .catch((e) => {
      res.status(200).json({ msg: "not ok", error: e, success: false });
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
      if (result) {
        let isValidUser = bcrypt.compareSync(
          req.body.password,
          result.password
        );
        if (isValidUser) {
          return res.json({ msg: "login success", success: true });
        } else {
          return res.json({ msg: "wrong email/password", success: false });
        }
      } else {
        return res.json({ msg: "no user found", success: false });
      }
    }
  });
});

module.exports = router;

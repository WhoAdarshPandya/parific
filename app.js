const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv/config");

const app = express();
const port = process.env.PORT || 2002;
app.use(cors());
app.use(express.json());
app.use(express.static("client/build"));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
app.get("*", (req, res) => {
  res.json({ msg: "not found", status: 404 });
});
app.listen(port, () => console.log("app is running on port 2002"));

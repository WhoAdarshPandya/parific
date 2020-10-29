const mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect(
  process.env.DB_URL,
  {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("connected to db");
    } else {
      console.log(err);
    }
  }
);

module.exports = mongoose;

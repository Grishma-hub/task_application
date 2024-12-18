let mongoose = require("mongoose");
require("dotenv").config();
let url = process.env.DB_URL;


mongoose.connect(url).then(
  function () {
    console.log("Database connected successfully");
  },
  function (err) {
    console.log(err);
  }
);
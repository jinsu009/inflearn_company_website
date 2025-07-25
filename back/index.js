require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(" 성공 ");
  })
  .catch((error) => {
    console.log(" 실패 ", error);
  });

app.listen(PORT, () => {
  console.log("Server is running");
});

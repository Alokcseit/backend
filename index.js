require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/facebook", (req, res) => {
  res.send("welcome to the facebook app!");
});
app.get("/twitter", (req, res) => {
  res.send("welcome to the tweter app");
});

app.listen(process.env.PORT, () => {
  console.log(`server is running at ${process.env.PORT}`);
});

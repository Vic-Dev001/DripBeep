const express = require("express");
const ejs = require("ejs");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.set("views", "./pages");

app.use("/assets", express.static("./assets"));

app.get("/", (req, res) => {
  res.render("home");
});
const port = 3000; //process.env.PORT ||

app.listen(port, () => {
  console.log("App started");
});

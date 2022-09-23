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
const port = process.env.PORT || 3000; //

app.listen(port, () => {
  console.log("App started");
});

const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./pages");

app.use("/assets", express.static("./assets"));

app.get("/", (req, res) => {
  res.render("home");
});
const port = 3000;

app.listen(port, () => {
  console.log("App started");
});

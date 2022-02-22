const express = require("express");
const router = express.Router();
const path = require("path");

router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

//This would be a middle ware...

router.get("/new-page.html", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "new-page.html"));
});

//AWESOME REDIRECTION USING EXPRESS

router.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html"); //302 by default
  //you could specify the error code by passing it as a parameter
});

module.exports = router;

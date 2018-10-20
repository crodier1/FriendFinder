//route to html pages
let express = require("express");
let route = express();
let path = require("path");

route.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

route.get("/style", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/style.css"));
});

route.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = route;
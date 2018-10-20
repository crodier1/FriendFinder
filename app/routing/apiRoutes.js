//route to api
let express = require("express"),
    api = express(),
    friends = require("../data/friends"),
    bodyParser = require("body-parser");


// Sets up the Express app to handle data parsing
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

api.get("/api/friends", function (req, res) {
    res.json(friends);
});

api.post("/api/friends", function (req, res) {

    var userData = req.body;

    friends.push(userData);

    res.json(userData);

});

module.exports = api;

//Dependencies
var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

// Create routes and logic where required.
// Index Page to show burgers
router.get('/', function (req, res) {
  burger.selectAll(function(data) {
      var hbsObject = { burgers: data };

      console.log(hbsObject);
      res.render('index', hbsObject);
  });
});

//Creating new burger
router.post("/", function(req, res) {
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function() {
    res.redirect("/");
  });
});

//Devours Burger
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.updateOne({devoured : req.body.devoured}, condition, function() {
    res.redirect("/");
  });
});



//Exporting routes 
module.exports = router;
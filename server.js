//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride =require("method-override");

var PORT = process.env.PORT || 8080;

var app = express();

// Server content for the app from the "public" directory inside application directory.
app.use(express.static("public"));

// parse application
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// parse application/json
// app.use(bodyParser.json());

//Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and let the  server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// Starts server so it will begin listening to client requests.
app.listen(PORT, function() {
  // console.Log when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

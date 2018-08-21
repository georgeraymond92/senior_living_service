var express = require("express");
var bodyParser = require('body-parser');


var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/seniorController.js");

app.use(routes);

// begin listening on the provided port
app.listen(PORT, function() {
    console.log(`Server listening on port ${ PORT }...`);

});
  
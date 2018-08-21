const express = require("express");
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/seniorController.js");

app.use(routes);

// begin listening on the provided port
app.listen(PORT, function() {
    console.log(`Server listening on port ${ PORT }...`);

});
  
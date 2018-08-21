var express = require("express");

var router = express.Router();
//Import the model (senior.js) to use it's database functions.
var senior = require("../models/senior.js");

var orm = require ("../config/orm.js");

router.get("/", function(req, res) {
    res.render("index");   
});

router.post("/api/orm", function (req, res) {
    console.log(req.body);
    orm.create([
        "name", "serv","phone", "email", "zip"
    ], [
        req.body.name, 
        req.body.serv,
        req.body.phone,
        req.body.email,
        req.body.zip
    ], function(result) {
        res.json({ id:result.insertId});
    });
});


router.get("/footer", function(req, res) {
    res.render("partials/footer.handlebars");
});

module.exports = router;
  

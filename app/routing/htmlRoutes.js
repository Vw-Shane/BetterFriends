// Dependencies
// =============================================================
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();
var path = require("path");

// Sets up the Express App
// =============================================================





module.exports = function(app) {
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});



// If no matching route is found default to home
app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
};


// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
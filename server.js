var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express set up port etc...

var app = express();
var PORT = 8080;

//express set up body parser...

//Array of tables

// Array of waitlist

//function to determine table or waitlist

//function to determine position in reservation or waitlist

//function to display waitlist


//function to display reservations

//paths for html
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/index", function(req, res){
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res){
	res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservation", function(req, res){
	res.sendFile(path.join(__dirname, "reservation.html"));
});
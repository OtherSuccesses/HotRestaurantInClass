var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express set up port etc...


var app = express();
var PORT = 8080;


var app = express();
var PORT = process.env.PORT || 8080;

//express set up body parser...
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Array of tables
var tableArray = [];

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
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express set up port etc...

var app = express();
var PORT = process.env.PORT || 8080;

//express set up body parser...
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Array of tables
var tableArray = [];

var counter = 0;

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


app.get("/api/tables", function(req, res){
		res.send(tableArray.slice(0,5));
});

app.get("/api/waitlist", function(req, res){
	if (tableArray.length > 5){
		res.send(tableArray.slice(4));
	} else {
		res.send();
	}
});

app.post("/api/new", function(req, res){
	var newTable = req.body;
	console.log(newTable);
	tableArray.push(newTable);
	res.json(newTable);
});

app.get("/counter", function(req, res){
	counter++;
	res.json(counter);
});

// app.get("/counter", function(req, res){
// 	res.send(counter);
// });

app.listen(PORT,function(){
	console.log("App listening on PORT " + PORT);
});

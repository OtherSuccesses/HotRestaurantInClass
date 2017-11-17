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


app.get("/api/:tables?", function(req, res){
	var page = req.params.tableArray;
	if (page){
		console.log(page)
		for (i =0; tableArray.length; i++){
			if (page === tableArray[i]){
				return res.tableArray[i];
			}
		}
		return res.json("false");
	}
	return res.json(tableArray);
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

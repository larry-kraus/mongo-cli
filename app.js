var mongo = require('mongodb').MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

 mongo.connect(url, function(err, db) {
 	var collection = db.collection('restaurants');
 	var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
	if (allChoice == "all"){
		collection.find().toArray(function(err, docs) {
 			console.log(docs);
 	});
	} else {
		console.log("Aw, you don't want to see the restaurants?");
	}
 });
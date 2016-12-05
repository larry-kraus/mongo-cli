var mongo = require('mongodb').MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

 mongo.connect(url, function(err, db) {
 	var collection = db.collection('restaurants');
 	//var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
	// if (allChoice == "all"){
	// 	collection.find().toArray(function(err, docs) {
 	// 		console.log(docs);
 	// });

 	var restaurantChoice = prompt("Type a restaurant name and press enter to display the restaurant: ");
	
	if (restaurantChoice) {
		collection.find({"name": restaurantChoice}).toArray(function(err, docs) {
			console.log(docs);
		});	
	}
	else {
		console.log("Aw, you don't want to see the restaurants?");
	};

	//PART TWO
	var newName = prompt("Enter new restaurant name: ");
	var newStreet = prompt("Enter new restaurant's street address: ");
	var newZip = prompt("Enter new restaurant's zipcode: ");
	var newYelp = prompt("Enter new restaurant's yelp page: ");

	collection.insert({
      	name: newName,
      		address : {
        		street : newStreet,
        		 zipcode : newZip
      		},
      		yelp: newYelp
	});

	collection.find({"name": newName}).toArray(function(err, docs) {
			console.log(docs);
		});


 });
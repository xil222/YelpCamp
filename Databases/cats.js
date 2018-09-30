var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/cat_app");

var catSchema = new mongoose.Schema( {
    Name: String,
    Age: Number,
    Temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var George = new Cat({
// 	Name: "Norris",
// 	Age: 11,
// 	Temperatment: "Evil"
// });


// George.save(function(err, cat) {
// 	if (err) {
// 		console.log("Something goes wrong");
// 	} else {
// 		console.log("we saved a cat");
// 		console.log(cat);
// 	} 
// });

Cat.create({
    Name: "Snow White", 
    Age: 15,
    Temperament: "Bland"
}, function(err, cat) {
    if(err) {
        console.log(err);    
    } else {
        console.log(cat);
    }
});


Cat.find({}, function(err, cats) {
    if (err) {
        console.log("error");
        console.log(err);
    } else {
        console.log("correct");
        console.log(cats);
    }
});

//add a new cat to a DB




//retrieve all cats from the DB and console.log each one
var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi, welcome to my Assignment");
}); 

app.get("/speak/:animal", function(req, res){
    if (req.params.animal === "pig") {
        res.send("The " + req.params.animal + " says 'Oink!'");       
    } else if (req.params.animal === "cow") {
        res.send("The " + req.params.animal + " says 'Moo!'");
    } else if (req.params.animal === "dog") {
        res.send("The " + req.params.animal + " says 'Woof!'");
    }
});

app.get("/repeat/:word/:number", function(req, res){
    var num = Number(req.params.number);
    var print = [];
    for (var i = 0; i < num; i++) {
        print += req.params.word;
        print += " ";
    }
    res.send(print);
});

app.get("/*", function(req,res) {
    res.send("Sorry, page not found.. what are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server has started");    
});
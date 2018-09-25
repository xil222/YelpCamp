var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there");        
}); // the default

app.get("/bye", function(req, res) {
    res.send("Goodbye");    
});


app.get("/dog", function(req, res) {
    console.log("reqsss");
    res.send("MEOW");    
});


app.get("*", function(req, res) {
    res.send("fuck you off");    
});



app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server has started");    
});
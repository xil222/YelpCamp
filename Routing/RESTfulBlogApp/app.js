
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/restful_blog_app")

//app config
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//model config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String, 
    body: String,
    created: {type: Date, default: Date.now}
})

var Blog = mongoose.model("Blog", blogSchema); 

// Blog.create({
//     title: "Test Blog",
//     image: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjS6uvHyuTdAhWoGTQIHRpACPQQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fdog%2F&psig=AOvVaw2ZGG7DjEjoxF8NRWXUoaR5&ust=1538460620055827",
//     body: "First dog"
// });

//restful routes
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs) {
        if (err) {
            console.log("There is error");           
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

app.get("/blogs/new", function(req, res) {
    res.render("new");    
});

app.post("/blogs", function(req, res) {
    
    Blog.create(req.body.blog, function(err, newBlog) {
        if (err) {
            res.render("new");
        } else {
            res.redirect("/blogs");
        }
    });
});


app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.render("show", {blog:foundBlog});
        }
    });

});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server is running");    
})


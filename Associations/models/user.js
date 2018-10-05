var mongoose = require("mongoose");

var user = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }    
    ]
});
module.exports = mongoose.model("User", user);

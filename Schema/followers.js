const mongoose = require("mongoose");
const Schema = mongoose.Schema;

 followers = new Schema({
followers  : {
    type:Array

  } 
});

module.exports= mongoose.model("followers", followers);
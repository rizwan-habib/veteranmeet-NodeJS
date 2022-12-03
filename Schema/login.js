const mongoose = require("mongoose");

login = new mongoose.Schema({
    email:{
        type: String,
        required: true
      
    },
    passwd:{}

})

module.exports=mongoose.model('login',login)

const mongoose = require("mongoose");

login = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        ref:"personal_profile"
    },
    passwd:{}

})

module.exports=mongoose.model('login',login)

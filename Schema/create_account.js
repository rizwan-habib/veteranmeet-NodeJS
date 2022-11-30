const mongoose = require("mongoose");


personal_profile =new mongoose.Schema({

    //email:{type:String},
    //passwd:{type:String},
    name:{type:String,require:true},
    hobbies:{type:Array},
    profession:{type:String,require:true},
    contact:{type:String,require:true},
    country:{type:String,require:true},
    city:{type:String,require:true}

})

module.exports=mongoose.model('personal_profile',personal_profile)
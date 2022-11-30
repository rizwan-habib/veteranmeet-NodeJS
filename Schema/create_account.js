const mongoose = require("mongoose");


personal_profile =new mongoose.Schema({

    //email:{type:String},
    //passwd:{type:String},
    name:{type:String,require:true},
    hobbies:{type:Array},
    profession:{type:String,require:true},
    contact:{type:String,require:true},
    city:{type:String,require:true},
    active_status:{},
    followers:{type:mongoose.Schema.objectId},
    following:{type:mongoose.Schema.objectId},
    starts:{},
    intrestedEvents:{}

})

module.exports=mongoose.model('personal_profile',personal_profile)
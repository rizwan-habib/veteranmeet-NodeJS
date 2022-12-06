const mongoose =require("mongoose")

//const { profile } = require("../Controller/profile")


profile=new mongoose.Schema({


    name:{},
    email:{type:String},
    password:{},
    contact:{},
   
    active_status:{},
    
    hobbies:{},
    profession:{},
    followers:{type:Array},
    following:{type:Array},
    starts:{},
    intrestedEvents:{}

    
})


module.exports=mongoose.model("profile",profile)


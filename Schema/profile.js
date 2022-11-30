const mongoose =require("mongoose")

//const { profile } = require("../Controller/profile")


profile=new mongoose.Schema({


    name:{},
    email:{type:String},
    passwd:{},
    contact:{},
   
    active_status:{},
    
    hobiies:{},
    profession:{},
    followers:{type:Array},
    following:{type:Array},
    starts:{},
    intrestedEvents:{}

    
})


module.exports=mongoose.model("profile",profile)


const mongoose =require("mongoose")

//const { profile } = require("../Controller/profile")


profile=new mongoose.Schema({


    name:{},
    email:{type:String},
    passwd:{},
    contact:{},
   
    active_status:{},
    organizations:{},
    hobies:{},
    profession:{},
    followers:{type:Array},
    following:{type:Array},
    starts:{},
    intrestedEvents:{},
    invitations:{type:Array}

    
})


module.exports=mongoose.model("profile",profile)


//const { Email } = require("@mui/icons-material")
const DB = require("../Schema/profile")


const profile = async(req,res,next)=>{


    const user_details= new DB({

        name:req.body.name,
        email:req.body.email,
        passwd:req.body.passwd,
        contact:req.body.contact,
        active_status:false,
        city:req.body.city,
        hobies:req.body.hobies,
        profession:req.body.profession,
        followers:[],
        following:[],
        stars:0,
        intrestedEvents:0
        
    })

    user_details.save()
    res.send("ok")
}


const follow_person =async(req,res,next) =>{
 
    //following jiss ko follow kr raaha he  email2
    //follower jo follow kr raha email1
    // const follower = DB.find({email:req.body.email1})
    // const following = DB.find({email:req.body.email2})

    
    //     DB.findOneAndUpdate(
    //     { email: req.body.email1}, 
    //     { $push: { following: req.body.email2 } }
        
    // );

    //id jo follow kr raha he 
    //id2 jo follow ho raha he 

    const id = await DB.findOne({email: req.body.email1})
    const id2 =await DB.findOne({email: req.body.email2}) 



    id.following.push(req.body.email2)
    id.save()

    id2.followers.push(req.body.email2)
    id2.save()

    res.send(id)

}


exports.follow_person=follow_person
exports.profile=profile
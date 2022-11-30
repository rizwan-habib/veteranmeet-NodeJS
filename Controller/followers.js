const { default: mongoose } = require("mongoose")
const DB = require("../Schema/followers")


const followers = async(req,res,next) => {


    const add_followers=new DB({

        followers:[]

    })

    add_followers.save()
    res.send("saved")
}

exports.followers=followers
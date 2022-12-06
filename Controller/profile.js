//const { Email } = require("@mui/icons-material")
const DB = require("../Schema/profile")
const POSTS = require("../Schema/post")
const ORG = require("../Schema/Organization/organization_account")


const profile = async (req, res, next) => {


    const user_details = new DB({

        name: req.body.name,
        email: req.body.email,
        passwd: req.body.passwd,
        contact: req.body.contact,
        active_status: false,
        city: req.body.city,
        hobies: req.body.hobies,
        profession: req.body.profession,
        organizations: [],
        followers: [],
        following: [],
        stars: 0,
        intrestedEvents: [],
        invitation: [],
        category: "none"

    })

    user_details.save()
    res.send("ok")
}


const follow_person = async (req, res, next) => {


    //id jo follow kr raha he 
    //id2 jo follow ho raha he 

    const id = await DB.findOne({ email: req.body.email1 })
    const id2 = await DB.findOne({ email: req.body.email2 })



    id.following.push(req.body.email2)
    id.save()

    id2.followers.push(req.body.email1)
    id2.save()

    res.send(id)

}

const get_veteran_posts = async (req, res, next) => {

    const id = await DB.findOne({ email: req.body.email })

    let posts = []
    for (let i = 0; i < id.following.length; i++) {
        const id2 = await POSTS.find({ email: id.following[i] })
        console.log(id2)
        posts = posts.concat(id2)
    }
    res.send(posts)
}
const get_org_posts = async (req, res, next) => {
    const id = await DB.findOne({ email: req.body.email })
    let posts = []
    for (let i = 0; i < id.organizations.length; i++) {
        const id2 = await POSTS.find({ email: id.organizations[i] })
        console.log(id2)
        posts = posts.concat(id2)
    }
    res.send(posts)
}

const follow_org = async (req, res, next) => {
    await DB.findOneAndUpdate({ email: req.body.email1 }, { $push: { organizations: req.body.email2 } })
    res.send("done")
}

const interestEvent = async (req, res, next) => {
    await DB.findOneAndUpdate({ email: req.body.email }, { $push: { intrestedEvents: req.body.eventID } })
    res.send("done")
}

exports.interestEvent = interestEvent
exports.follow_person = follow_person
exports.get_org_posts = get_org_posts
exports.follow_org = follow_org
exports.get_veteran_posts = get_veteran_posts
exports.profile = profile
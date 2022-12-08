
const DB = require("../../Schema/Organization/Organization_Event")
const profileDB = require("../../Schema/profile")
const org_events = async (req, res, next) => {
    var max = 10000
    var num = Math.floor(Math.random() * max)
    const newevent = new DB({
        eventid: num,
        email: req.body.email,
        name: req.body.name,
        type: req.body.type,
        time: req.body.time,
        stars: Number(req.body.stars),
        location: req.body.location,
        descreption: req.body.descreption,
        hobies: req.body.hobies
    })
    newevent.save();
    res.send("done")
}
const get_org_events = async (req, res, next) => {
    const org_event = await DB.find({ email: req.body.email })   //organization org_event
    res.send(org_event)
}
const assign_stars_byorg = async (req, res, next) => {
    const org_event = await DB.findOne({ eventid: req.body.eventid })   //organization org_event
    let stars = org_event.stars;
    if (stars >= req.body.stars) {
        await profileDB.findOneAndUpdate({ email: req.body.email }, { $inc: { stars: req.body.stars } })   //profile stars update
        await DB.findOneAndUpdate({ eventid: req.body.eventid }, { $inc: { stars: -req.body.stars } })   //event stars update
        let profile = await profileDB.findOne({ email: req.body.email })
        console.log(profile)
        let stars1 = profile.stars;
        if (stars1 >= 100000) {
            await profileDB.findOneAndUpdate({ email: req.body.email }, { category: "Eternal Stage" })   //profile stars update
        }
        else if (stars1 >= 70000) {
            await profileDB.findOneAndUpdate({ email: req.body.email }, { category: "Platinum Veteran" })   //profile stars update
        }
        else if (stars1 >= 65000) {
            await profileDB.findOneAndUpdate({ email: req.body.email }, { category: "Sapphire Veteran" })   //profile stars update
        }
        else if (stars1 >= 60000) {
            await profileDB.findOneAndUpdate({ email: req.body.email }, { category: "Diamond Veteran" })   //profile stars update
        }
        else if (stars1 >= 50000) {
            await profileDB.findOneAndUpdate({ email: req.body.email }, { category: "Golden Veteran" })   //profile stars update
        }
        else if (stars1 >= 40000) {
            await profileDB.findOneAndUpdate({ email: req.body.email }, { category: "Ruby Veteran" })   //profile stars update
        }
        else if (stars1 >= 25000) {
            await profileDB.findOneAndUpdate({ email: req.body.email }, { category: "Silver Veteran" })   //profile stars update
        }

    }
    res.send("done")
}

exports.org_events = org_events
exports.get_org_events = get_org_events
exports.assign_stars_byorg = assign_stars_byorg
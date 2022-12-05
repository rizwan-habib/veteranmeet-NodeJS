
const DB = require("../../Schema/Organization/Organization_Event")

const org_events = async (req, res, next) => {
    var max = 10000
    var num = Math.floor(Math.random() * max)
    const newevent = new DB({
        eventid: num,
        email: req.body.email,
        name: req.body.name,
        type: req.body.type,
        time: req.body.time,
        // stars: Number(req.body.stars),
        location: req.body.location,
        descreption: req.body.descreption,
        hobies: req.body.hobies
    })
    newevent.save();
    res.send("done")
}


exports.org_events = org_events
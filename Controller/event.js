
const DB = require('../Schema/event')
const profile_DB = require('../Schema/profile')

const createevent = async (req, res, next) => {
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
const vet_invitaion = async (req, res, next) => {

    const vet_profile = await profile_DB.findOne({ email: req.body.email })   //veteran profile
    let followers = vet_profile.followers
    console.log(followers)
    // const all_org_profiles = await DB.find()  //vetrens org_profile
    const results = [];
    for (let i = 0; i < followers.length; i++) {

        const invitation_profile = await profile_DB.findOneAndUpdate({ email: followers[i] },{ $push: { invitations: req.body.eventid } })


        console.log(invitation_profile)

    }
    res.send(results)

}

//suggestion on basses of hobbies 

const suggestion = async (req, res, next) => {

    const all_events = await DB.find()
    const profile = await profile_DB.findOne({ email: req.body.email })
    const results = [];
    console.log(profile)


    for (let i = 0; i < (all_events).length; i++) {
        let Flag = false

        for (let j = 0; j < (profile.hobies).length; j++) {

            for (let k = 0; k < (all_events[i].hobies).length; k++) {
                console.log(all_events[i].hobies[k]);
                // console.log(profile[j].hobies[j]);
                console.log(i)

                if (Flag === false) {
                    if (profile.hobies[j] === all_events[i].hobies[k]) // this line was changefrom profile[j] to zero
                    {

                        // console.log("matched");

                        results.push(all_events[i])
                        Flag = true
                        break;

                    }

                }

            }
        }
    }

    res.send(results)
}

const get_vet_events = async (req, res, next) => {
    const vet_event = await DB.find({ email: req.body.email })   //organization org_event
    res.send(vet_event)
}

const suggestion_Location = async (req, res, next) => {

    const all_events = await DB.find({ location: req.body.location })
    const results = []

    const given_location = req.body.location.toLowerCase()


    for (let i = 0; i < (all_events).length; i++) {
        //console.log(all_events[i].location.toLowerCase())
        if ((all_events[i].location).toLowerCase() === given_location) {
            console.log(all_events)

            results.push(all_events[i])


        }
    }

    res.send(all_events)

}
const assign_stars_byvet = async (req, res, next) => {
    const event = await DB.findOne({ eventid: req.body.eventid })   //veteran vet_event
    let stars = event.stars;
    if (stars >= req.body.stars) {
        await profile_DB.findOneAndUpdate({ email: req.body.email }, { $inc: { stars: req.body.stars } })   //profile stars update
        await DB.findOneAndUpdate({ eventid: req.body.eventid }, { $inc: { stars: -req.body.stars } })   //event stars update
        let profile = await profile_DB.findOne({ email: req.body.email })
        console.log(profile)
        let stars1=profile.stars;
        if(stars1>= 100000){
            await profile_DB.findOneAndUpdate({ email: req.body.email }, { category: "Eternal Stage" })   //profile stars update
        }
        else if(stars1>= 70000){
            await profile_DB.findOneAndUpdate({ email: req.body.email }, { category: "Platinum Veteran" })   //profile stars update
        }
        else if(stars1>= 65000){
            await profile_DB.findOneAndUpdate({ email: req.body.email }, { category: "Sapphire Veteran" })   //profile stars update
        }
        else if(stars1>= 60000){
            await profile_DB.findOneAndUpdate({ email: req.body.email }, { category: "Diamond Veteran" })   //profile stars update
        }
        else if(stars1>= 50000){
            await profile_DB.findOneAndUpdate({ email: req.body.email }, { category: "Golden Veteran" })   //profile stars update
        }
        else if(stars1>= 40000){
            await profile_DB.findOneAndUpdate({ email: req.body.email }, { category: "Ruby Veteran" })   //profile stars update
        }
        else if(stars1>= 25000){
            await profile_DB.findOneAndUpdate({ email: req.body.email }, { category: "Silver Veteran" })   //profile stars update
        }
        
    }
    res.send("done")
}
exports.suggestion_Location = suggestion_Location
exports.assign_stars_byvet = assign_stars_byvet
exports.vet_invitaion = vet_invitaion
exports.suggestion = suggestion
exports.createevent = createevent
exports.get_vet_events = get_vet_events

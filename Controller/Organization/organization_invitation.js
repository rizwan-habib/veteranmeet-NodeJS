const DB = require("../../Schema/profile.js")

const org_event_DB = require("../../Schema/Organization/Organization_Event")
// const org_event_DB = require("../../Schema/Organization/Organization_Event")



const org_invitaion = async (req, res, next) => {
    await org_event_DB.findOneAndUpdate({ eventid: req.body.eventid }, { inviteSent: true })
    const all_org_profiles = await DB.find()  //vetrens org_profile
    const org_event = await org_event_DB.findOne({ eventid: req.body.eventid })   //organization org_profile
    // const org_event = await org_profile_DB.findOne({ email: req.body.email })   //organization org_profile

    const results = [];

    console.log(all_org_profiles)

    for (let i = 0; i < (all_org_profiles).length; i++) {
        let Flag = false;

        for (let j = 0; j < (org_event.hobies).length; j++) {
            for (let k = 0; k < (all_org_profiles[i].hobies).length; k++) {
                if (Flag === false) {
                    if (org_event.hobies[j] === all_org_profiles[i].hobies[k]) {
                        
                        await DB.findOneAndUpdate({ email: all_org_profiles[i].email },{ $push: { invitations: req.body.eventid }})
                        //console.log("matched");
                        results.push(all_org_profiles[i])
                        Flag = true
                        break;

                    }

                }
            }
        }
    }

    
    res.send("done")
    
}

exports.org_invitaion = org_invitaion
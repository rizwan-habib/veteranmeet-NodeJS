
const DB = require('../Schema/event')
const profile_DB=require('../Schema/profile')

const createevent = async (req, res, next) => {
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



const suggestion=async(req,res,next)=>{

    const all_events= await DB.find()
    const profile= await profile_DB.find({email:req.body.email})
    const results=[];
 for(let i=0;i<(all_events).length;i++)
 {
    
    for(let j=0;j<(profile[0].hobies).length;j++)
    {
       
        for(let k=0;k<(all_events[i].hobies).length;k++)
        {
            console.log(all_events[i].hobies[k]);
            console.log(profile[j].hobies[j]);
            console.log(i)

            if(profile[j].hobies[j] === all_events[i].hobies[k])
            {
            
                console.log("matched");
               
                results.push(all_events[i])
                break;

            }

        }
    }
 }

 res.send(results)
}


const suggestion_Location=async(req,res,next)=>{

    const all_events= await DB.find({location:req.body.location})
    const results=[]

   const given_location = req.body.location.toLowerCase()


    for(let i=0;i<(all_events).length;i++)
    {
        //console.log(all_events[i].location.toLowerCase())
        if( (all_events[i].location).toLowerCase() === given_location)
        {
            console.log(all_events)

            results.push(all_events)
            

        }
    }
   
res.send(results)
 
}

exports.suggestion_Location=suggestion_Location
exports.suggestion = suggestion
exports.createevent = createevent

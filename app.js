const express = require('express');
const express_fileupload=require('express-fileupload')
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const { login } = require("./Controller/login")
const { create_account } = require("./Controller/Creat_account")
// const { createpost, getposts } = require('./Controller/post');
const { createevent, suggestion, suggestion_Location, vet_invitaion, assign_stars_byvet, get_vet_events } = require('./Controller/event');
const { profile, follow_person, interestEvent, follow_org, get_veteran_posts, get_org_posts, getVetInvitations } = require('./Controller/profile');
const { org_account } = require('./Controller/Organization/organization_account');
const { org_events, assign_stars, assign_stars_byorg, get_org_events } = require("./Controller/Organization/Organization_event");
const { org_invitaion } = require('./Controller/Organization/organization_invitation');
const { getPersonalPosts, createpost } = require('./Controller/post');


const app = express();
app.use(bodyParser.json());

mongoose.connect(
  process.env.MONGO_URL
).then(() => {
  console.log("connected ")
}).catch(() => {
  console.log("Fail")
})

app.use(express_fileupload())
// app.post('/login', login);
// app.post('/create_account', create_account)
app.post('/create_post', createpost)//done
app.post('/profile', profile)//done
app.post('/followperson', follow_person)//done
app.post('/followorg', follow_org)//done
app.post('/create_event', createevent)//done
app.post('/suggestion_hobbies', suggestion)//done
app.post("/suggestion_location", suggestion_Location)//done
app.post('/vet_invitation', vet_invitaion)//done
app.post('/interest_event', interestEvent)//done
app.post('/organization_account', org_account)//done
app.post('/organization_events', org_events);//done
app.post('/Organization_invitation', org_invitaion)//done
app.post('/Org_events', get_org_events)//done
app.post('/Vet_events', get_vet_events)//done
app.post('/getVetPosts', get_veteran_posts)//done
app.post('/getOrgPosts', get_org_posts)//done
app.post('/getPersonalPosts', getPersonalPosts)//done
app.post('/assignStarsbyOrg', assign_stars_byorg)//done
app.post('/assignStarsbyVet', assign_stars_byvet)//done
app.post('/getVetInvitations', getVetInvitations)//done

app.use(`/uploads`, express.static('uploads'));

app.listen(3001);

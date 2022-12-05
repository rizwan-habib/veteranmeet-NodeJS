const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');
// const { login } = require("./Controller/login")
// const { create_account } = require("./Controller/Creat_account")
//const { createpost, getposts } = require('./Controller/post');
const { createevent, suggestion, suggestion_Location, vet_invitaion } = require('./Controller/event');
const { profile, follow_person, interestEvent, follow_org, get_veteran_posts, get_org_posts } = require('./Controller/profile');
const { org_account } = require('./Controller/Organization/organization_account');
const { org_events } = require("./Controller/Organization/Organization_event");
const { org_invitaion } = require('./Controller/Organization/organization_invitation');
const { getPersonalPosts, createpost } = require('./Controller/post');


const app = express();
app.use(bodyParser.json());

mongoose.connect(
  'mongodb+srv://jerry:1234@cluster0.jwhqaxw.mongodb.net/?retryWrites=true&w=majority'
).then(() => {
  console.log("connected ")
}).catch(() => {
  console.log("Fail")
})


// app.post('/login', login);
// app.post('/create_account', create_account)
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
app.post('/create_post', createpost)
app.post('/getVetPosts', get_veteran_posts)
app.post('/getOrgPosts', get_org_posts)
app.post('/getPersonalPosts', getPersonalPosts)


app.listen(3001);

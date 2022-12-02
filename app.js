const express = require('express');

const bodyParser = require('body-parser');

const mongoose=require('mongoose');

const {create_account}= require("./Controller/Creat_account")
//const { createpost, getposts } = require('./Controller/post');
const { createevent, suggestion, suggestion_Location } = require('./Controller/event');
const { profile, follow_person, login_profile } = require('./Controller/profile');
const { org_account } = require('./Controller/organization_account');
 

const app = express();
app.use(bodyParser.json());

mongoose.connect(
'mongodb+srv://jerry:1234@cluster0.jwhqaxw.mongodb.net/?retryWrites=true&w=majority'
    ).then(()=>{
  console.log("connected ")
  }).catch(()=>{
    console.log("Fail")
  })
  

  //app.post('/login',login_profile);
   app.post('/create_account',create_account)
  


  app.post('/profile',profile)
  app.post('/follow',follow_person)
  app.post('/organization_account',org_account)
  //app.post('/create_post',createpost)
  //app.post('/getPosts',getposts)
  app.post('/create_event',createevent)
  app.post('/suggestion_hobbies',suggestion)
  app.post("/suggestion_location",suggestion_Location)
 
  

  
app.listen(3001);

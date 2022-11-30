const express = require('express');

const bodyParser = require('body-parser');

const mongoose=require('mongoose');

const login_caller=require('./Controller/login');
const account_caller=require('./Controller/Creat_account');
const org_caller=require('./Controller/organization_account');


const app = express();
app.use(bodyParser.json());

mongoose.connect(
'mongodb+srv://jerry:1234@cluster0.jwhqaxw.mongodb.net/?retryWrites=true&w=majority'
    ).then(()=>{
  console.log("connected ")
  }).catch(()=>{
    console.log("Fail")
  })
  

  app.post('/login',login_caller.login);
  app.post('/create_account',account_caller.create_account)
  
  app.post('/organization_account',org_caller.org_account)

  
app.listen(3000);

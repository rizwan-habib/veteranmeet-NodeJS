const DB =require('../Schema/login')


const login = async (req,res,next) =>{

   
    const Add = new DB ({

        email:req.body.email,
        passwd:req.body.passwd

    })
    //Add.save()

    const user_login = await DB.findOne({ email: req.body.email}).select("email").lean();
    const passwd = await DB.findOne({ passwd: req.body.passwd}).select("passwd").lean();

    if (user_login && passwd) {

        const id = await login_DB.findOne({email: req.body.email}).select("email").lean();
       const passwd = await DB.findOne({passwd: req.body.passwd}).select("passwd").lean();
        console.log("User exist")
       
       //res.send(result)
       res.send({id,passwd})
    
    }
    else{

      console.log("Email OR Password is wrong")    
      res.send("fail")  
    } 


    const response = await Add.save();
    res.send(response);
    
}

exports.login=login
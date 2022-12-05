const DB =require('../Schema/login')


const login = async (req,res,next) =>{

   
    const Add = new DB ({

        email:req.body.email,
        password:req.body.password

    })
    //Add.save()

    const user_login = await DB.findOne({ email: req.body.email}).select("email").lean();
    const password = await DB.findOne({ password: req.body.password}).select("password").lean();

    if (user_login && password) {

        const id = await DB.findOne({email: req.body.email}).select("email").lean();
       const password = await DB.findOne({password: req.body.password}).select("password").lean();
        console.log("User exist")
       
       //res.send(result)
       res.send({id,password})
    
    }
    else{

      console.log("Email OR Password is wrong")    
      res.send("fail")  
    } 


    //const response = await Add.save();
    // res.send(response);
    
}

exports.login=login
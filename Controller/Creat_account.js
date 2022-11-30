const DB =require('../Schema/create_account');

const login_DB =require('../Schema/login')

const create_account = async(req,res,next)=>{

    const create = new DB ({

        //email:req.body.email,
        //passwd:req.body.passwd,
        name:req.body.name,
        hobbies:req.body.hobbies,
        profession:req.body.profession,
        contact:req.body.constact,
        country:req.body.country,
        city:req.body.city

    })

    const login =new login_DB({

        email:req.body.email,
        passwd:req.body.passwd

    })

        const user_login = await login_DB.findOne({ email: req.body.email}).select("email").lean();
        //const passwd = await DB.findOne({ passwd: req.body.passwd}).select("passwd").lean();
    
        if (user_login) {

            const id = await login_DB.findOne({email: req.body.email}).select("email").lean();
           // const passwd = await DB.findOne({passwd: req.body.passwd}).select("passwd").lean();
            console.log("User Already exist")
           
           //res.send(result)
           res.send({id})
        
        }
        else{
        
        //   const response=await login.save();
        //   res.json(response)
          res.send("user not exist")
          const respons =await create.save()
          login.save()
          console.log("saved")

          //res.send(respons)
          
        } 

    // const respons =await create.save()
    //res.send(respons)

}

exports.create_account=create_account
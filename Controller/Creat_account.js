const DB =require('../Schema/profile');

const login_DB =require('../Schema/login')

const create_account = async(req,res,next)=>{

    const create = new DB ({
        
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        contact:req.body.contact,
        hobbies:req.body.hobbies,
        profession:req.body.profession,
        city:req.body.city,
        followers:[],
        following:[],
        starts:[],
        intrestedEvents:[]

    })

    const login =new login_DB({

        email:req.body.email,
        password:req.body.password

    })

        const user_login = await login_DB.findOne({ email: req.body.email}).select("email").lean();
        //const password = await DB.findOne({ password: req.body.password}).select("password").lean();
    
        if (user_login) {

            const id = await login_DB.findOne({email: req.body.email}).select("email").lean();
           // const password = await DB.findOne({password: req.body.password}).select("password").lean();
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
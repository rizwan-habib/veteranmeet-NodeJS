//const { Category } = require('@mui/icons-material')
const DB = require('../../Schema/Organization/organization_account')


const login_DB = require('../../Schema/login')

const org_account = async (req, res, next) => {

    const creat_account = new DB({
        email: req.body.email,
        passwd: req.body.passwd,
        name_of_org: req.body.name_of_org,
        category: req.body.category,
        contact: req.body.contact,
        city: req.body.city
    })

    const login = new login_DB({

        email: req.body.email,
        passwd: req.body.passwd

    })

    const user_login = await login_DB.findOne({ email: req.body.email }).select("email").lean();
    //const Name = await DB.findOne({ passwd: req.body.name}).select("name").lean();

    if (user_login) {

        const user_login = await login_DB.findOne({ email: req.body.email }).select("email").lean();
        // const Name = await DB.findOne({passwd: req.body.passwd}).select("name").lean();
        console.log("Organization  Already exist")

        //res.send(result)
        res.send({ user_login })

    }
    else {

        //   const response=await login.save();
        //   res.json(response)
        //          res.send("Organization not exist")
        const respons = await creat_account.save()

        login.save()
        console.log("saved")

        res.send(respons)

    }

    // const response= await org_account.save()

    //    res.send(response)
}


exports.org_account = org_account
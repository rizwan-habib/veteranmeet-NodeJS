//const { Category } = require('@mui/icons-material')
const DB = require('../Schema/organization_account')

//const login_DB =require('../Schema/login')

const org_account = async (req, res, next) => {
  const creat_account = new DB({
    email: req.body.email,
    passwd: req.body.passwd,
    name_of_org: req.body.name_of_org,
    category: req.body.category,
    contact: req.body.contact,
    country: req.body.country,
    city: req.body.city,
  })

  const login = new login_DB({
    email: req.body.email,
    passwd: req.body.passwd,
  })

  const user_login = await login_DB
    .findOne({ email: req.body.email })
    .select('email')
    .lean()

  if (user_login) {
    const user_login = await login_DB
      .findOne({ email: req.body.email })
      .select('email')
      .lean()

    console.log('Organization  Already exist')

    res.send({ user_login })
  } else {
    const respons = await creat_account.save()

    login.save()
    console.log('saved')

    res.send(respons)
  }
}

exports.org_account = org_account

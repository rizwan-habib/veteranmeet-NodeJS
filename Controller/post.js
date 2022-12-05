
const DB = require('../Schema/post')
const profileDB = require('../Schema/post')
const createpost = async (req, res, next) => {

    const newpost = new DB({
        email: req.body.email,
        text: req.body.text,
        multimedia: req.body.multimedia
    })
    newpost.save();
    res.send("done")
}
const getPersonalPosts = async (req, res, next) => {

    const data = await DB.find({ email: req.body.email });
    // console.log(user_login)
    res.json(data)
}



exports.createpost = createpost
exports.getPersonalPosts = getPersonalPosts
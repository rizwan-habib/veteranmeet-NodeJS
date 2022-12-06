
const DB = require('../Schema/post')
// const
// const profileDB = require('../Schema/post')
const createpost = async (req, res, next) => {
    const file = req.files.file;
    const uploadId = `${Math.random().toString(36)}${Math.random().toString(36)}`;
    const path = `./uploads/${uploadId}.${file.name.split(".")[1]}`;
    file.mv(path, (err) => {
        if (err) {
            return next(new errorHandler(400, "Error saving file", err));
        }
        const newpost = new DB({
            email: req.body.email,
            text: req.body.text,
            multimedia: path
        })
        newpost.save();

        res.status(200).json({ path: uploadId });
    })
}
const getPersonalPosts = async (req, res, next) => {

    const data = await DB.find({ email: req.body.email });
    // console.log(user_login)
    res.json(data)
}



exports.createpost = createpost
exports.getPersonalPosts = getPersonalPosts
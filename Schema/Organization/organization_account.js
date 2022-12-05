const mongoose = require("mongoose");

const Organization_account = new mongoose.Schema({
    email: { type: String },
    passwd: { type: String },
    name_of_org: { type: String },
    category: { type: String },
    contact: { type: String },
    city: { type: String }
})

module.exports = mongoose.model('Organization_account', Organization_account)
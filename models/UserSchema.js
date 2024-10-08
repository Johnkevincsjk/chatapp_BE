const mongoose = require('mongoose')


const userschema = new mongoose.Schema({
    Name: { type: String, require: true },
    Email: { type: String, require: true },
    Password: { type: String, require: true },


},
    {
        timestamps: true
    }
)


const Usermodels = mongoose.model('usermodel', userschema)

module.exports = Usermodels
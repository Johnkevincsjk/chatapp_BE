const bcrypt = require('bcryptjs')
const Usermodels = require('../models/UserSchema')
const generateToken = require('../Config/generateToken')

const LoginRoute = (async (req, res) => {

    try {
        const user_data = req.body
        const { Email, Password } = user_data

        const user_mail = await Usermodels.findOne({ Email })
        if (user_mail) {

            if (bcrypt.compareSync(Password, user_mail.Password)) {

                return res.status(200).json({
                    Feedback: 'Log-in Successfully',
                    Success: true,
                    user_mail,
                    isAdmin: user_mail.isAdmin,
                    token: generateToken(user_mail._id)
                })

            } else {
                return res.status(400).json({
                    Feedback: 'Email or Password is invalid',

                })
            }
        } else {
            return res.status(400).json({
                Feedback: 'User does not exist',

            })
        }


    } catch (error) {
        return res.status(400).json({
            Feedback: 'Something went wrong',
            error

        })
    }



})


module.exports = { LoginRoute }
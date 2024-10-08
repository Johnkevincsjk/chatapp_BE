const bcrypt = require('bcryptjs/dist/bcrypt')
const Usermodels = require('../models/UserSchema')

const LoginRoute = (async (req, res) => {

    try {
        const user_data = req.body
        const { Email, Password } = user_data

        const user_mail = await Usermodels.findOne({ Email: Email })


        if (user_mail.Email === Email) {

            if (bcrypt.compareSync(Password, user_mail.Password)) {

                return res.status(200).json({
                    Feedback: 'Log-in Successfully',
                    Success: true
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
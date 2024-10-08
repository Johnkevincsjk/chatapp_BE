
const Usermodels = require('../models/UserSchema')
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const SigninController = (async (req, res) => {

    try {
        const resgister_user = req.body
        const { Email } = resgister_user
        const user_exist = await Usermodels.findOne({ Email: Email })
        if (user_exist) {

            return res.status(200).json({
                Feedback: "User already exist",

            })
        }
        else {
            resgister_user.Password = await bcrypt.hash(resgister_user.Password, salt)
            const UserData = await Usermodels.create(resgister_user)

            return res.status(200).json({
                Feedback: "User created successfully",
                success: true,
                UserData
            })
        }




    } catch (error) {
        res.status(400).json({
            Feedback: "Something Went wrong",
            error
        })
    }

})


module.exports = { SigninController }
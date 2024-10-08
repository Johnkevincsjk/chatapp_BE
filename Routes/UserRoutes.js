const express = require('express')
const { LoginRoute } = require('../Controllers/LoginController')
const { SigninController } = require('../Controllers/SignupController')

const AuthRoute = express.Router()


AuthRoute.post('/Login', LoginRoute)
AuthRoute.post('/Signup', SigninController)



module.exports = { AuthRoute }
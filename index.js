const express = require('express')
const APP = express()
const dotenv = require('dotenv')
APP.use(express.json())
dotenv.config()

APP.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})
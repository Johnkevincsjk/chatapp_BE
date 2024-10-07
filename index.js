const express = require('express')
const APP = express()
const dotenv = require('dotenv')
const { default: mongoose } = require('mongoose')
APP.use(express.json())
dotenv.config()

const connect_DB = async () => {

    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("Database has been connected", connect.connection.host)
    } catch (error) {
        console.error("Database connection failed:", error);

    }




}

connect_DB()

APP.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})
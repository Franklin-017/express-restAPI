const express = require("express")
const connectDB = require("./config/db")

require('dotenv').config({path: './config/.env'})

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectDB()

app.use('/user', require('./Router/user'))

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`Server started at: ${PORT}`))
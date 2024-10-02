const express = require('express')
const cors = require("cors")
const emailRouter = require("./routers/email.router.js")

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/api", emailRouter)

module.exports = app
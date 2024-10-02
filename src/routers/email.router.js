const express = require("express")
const router = express.Router()
const EmailController = require("../controllers/email.controller.js")
const emailController = new EmailController

router.post("/send-email", emailController.sendEmail)

module.exports = router
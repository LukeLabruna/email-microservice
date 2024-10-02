const sendEmail = require("../services/email.service.js")

class EmailController {

    async sendEmail(req, res) {

        const { to, subject, text, html, oauth2Credentials } = req.body

        if (!to || !subjet || !text || !html || !oauth2Credentials) {
            return res.status(400).json({status: "error", message: "All parameters are required."})
        }

        try {
            
            const result = await sendEmail(to, subject, text, html, oauth2Credentials)

            res.status(200).json({status: "success", message: "Email sent successfully.", data: result})

        } catch (error) {
            res.status(500).json({status: "error", data: error})
        }
    }
}

module.exports = EmailController
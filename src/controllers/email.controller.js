import sendEmail from "../services/email.service.js"

class EmailController {

    async sendEmail(req, res) {

        const { to, subject, text, html, userEmail, appPassword } = req.body

        if (!to || !subject || !text || !html || !userEmail || !appPassword) {
            return res.status(400).json({status: "error", message: "All parameters are required."})
        }

        try {
            
            const result = await sendEmail(to, subject, text, html, userEmail, appPassword)

            res.status(200).json({status: "success", message: "Email sent successfully.", data: result})

        } catch (error) {
            res.status(500).json({status: "error", data: error})
        }
    }
}

export default EmailController
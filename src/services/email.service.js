import { createTransport } from "nodemailer"

const sendEmail = async (to, subject, text, html, userEmail, appPassword) => {
    try {

        const transporter = createTransport({
            service: "gmail",
            port: 587, 
            auth: {
                user: userEmail,
                pass: appPassword,
            }
        })

        const mailOptions = {
            from: userEmail,
            to,
            subject,
            text,
            html
        }

        const result = await transporter.sendMail(mailOptions)

        return result

    } catch (error) {
        throw error.message
    }
}

export default sendEmail
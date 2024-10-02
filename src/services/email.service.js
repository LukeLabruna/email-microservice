const nodemailer = require("nodemailer")
const { google } = require("googleapis")

const sendEmail = async (to, subject, text, html, oauth2Credentials) => {
    try {
        
        const oauth2Client = new google.auth.OAuth2(
            oauth2Credentials.googleClientId,
            oauth2Credentials.googleClientSecret,
            "https://developers.google.com/oauthplayground"
        )
        
        oauth2Client.setCredentials({ refresh_token: oauth2Credentials.refreshToken})
        
        const accessToken = await oauth2Client.getAccessToken()

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAth2",
                user: oauth2Credentials.userEmail,
                clientId: oauth2Credentials.clientId,
                clientSecret: oauth2Credentials.clientSecret,
                refreshToken: oauth2Credentials.refreshToken,
                accessToken: accessToken.token
            } 
        })

        const mailOptions = {
            from: oauth2Credentials.userEmail,
            to,
            subject,
            text,
            html
        }

        const result = await transporter.sendEmail(mailOptions)

        return result

    } catch (error) {
        throw error
    }
}

module.exports = sendEmail
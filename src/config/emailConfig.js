const nodemailer = require("nodemailer");
const { MAIL_USERNAME, MAIL_PASSWORD } = require("./serverConfig");
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: MAIL_USERNAME,
        pass: MAIL_PASSWORD
    }
})

module.exports = transporter;
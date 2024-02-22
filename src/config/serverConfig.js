require("dotenv").config();

module.exports = {
    PORT : process.env.APP_PORT,
    MAIL_USERNAME: process.env.MAIL_USERNAME,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD
}
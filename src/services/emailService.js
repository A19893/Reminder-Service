const transporter = require("../config/emailConfig");

const sendBasicEmail = async (from, to, mailSubject, mailBody) => {
  try {
    const response = await transporter.sendMail({
      from: from,
      to: to,
      subject: mailSubject,
      text: mailBody,
    });

    console.log(response);
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  sendBasicEmail,
};
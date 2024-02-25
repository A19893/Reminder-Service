const cron = require("node-cron");
const { EmailService } = require("../services");
const { MAIL_USERNAME } = require("../config/serverConfig");
const  transporter  = require("../config/emailConfig");

const setupJobs = () => {
  cron.schedule("*/5 * * * *", async () => {
    // Run every 5 minutes
    const response = await EmailService.fetchPendingEmails();
    response.forEach(async(email) => {
       transporter.sendMail(
        {
          from: MAIL_USERNAME,
          to: email.recepientEmail,
          subject: email.subject,
          text: email.content,
        },
        async (err, data) => {
          if (err) {
            console.log(err);
            await EmailService.updateEmailStatus(email.id , {status: 'FAILED'});
          } else {
            console.log(data);
            await EmailService.updateEmailStatus(email.id , {status: 'SUCCESS'});
          }
        }
      );
    });
    return response;
  });
};

module.exports = setupJobs;

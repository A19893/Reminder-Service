const express = require("express");
const { PORT } = require("./config/serverConfig");
const { sendBasicEmail } = require("./services/emailService");
const setupAndStartServer = async () => {
  const app = express();
  app.use(express.json({ limit: "50mb", extended: true }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  app.use('/api', require('./routes'));

  app.listen(PORT, async function () {
    console.clear();
    console.log(`Server listening on port ${PORT}`);

    sendBasicEmail(
      'support@gmail.com',
      "yasharora2678@gmail.com",
      "This is a Teating Mail",
      'This is a testing email, I hope you like the support!!'
    )
  });
};

setupAndStartServer();

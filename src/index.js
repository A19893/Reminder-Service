const express = require("express");
const { PORT, REMINDER_BINDING_KEY } = require("./config/serverConfig");
const setupJobs = require("./utils/job");
const { subscribeMessage, createChannel } = require("./utils/messageQueue");
const { EmailService } = require("./services");
const setupAndStartServer = async () => {
  const app = express();
  app.use(express.json({ limit: "50mb", extended: true }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  
  app.use('/api', require('./routes'));
  const channel = await createChannel();
  subscribeMessage(channel, EmailService.subscribeEvents, REMINDER_BINDING_KEY);
  app.listen(PORT,function () {
    console.clear();
    console.log(`Server listening on port ${PORT}`);
    setupJobs();
  });
};

setupAndStartServer();

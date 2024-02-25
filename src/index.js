const express = require("express");
const { PORT } = require("./config/serverConfig");
const setupJobs = require("./utils/job");
const { createChannel } = require("./utils/messageQueue");
const setupAndStartServer = async () => {
  const app = express();
  app.use(express.json({ limit: "50mb", extended: true }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  
  app.use('/api', require('./routes'));

  app.listen(PORT,function () {
    console.clear();
    console.log(`Server listening on port ${PORT}`);
    setupJobs();
  });
};

setupAndStartServer();

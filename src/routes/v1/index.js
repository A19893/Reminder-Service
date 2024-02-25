const express = require("express");
const { ReminderController } = require("../../controllers");
// const { createChannel } = require("../../utils/messageQueue");

// const channel = await createChannel()
const reminderController = new ReminderController()
const router = express.Router();

router.post('/reminder-email',reminderController.sendEmail);
router.get('/emails', reminderController.fetchEmail);
router.post('/email', reminderController.createNotification)
router.post('/publish', reminderController.sendMessageToQueue)
module.exports = router;
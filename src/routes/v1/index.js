const express = require("express");
const { ReminderController } = require("../../controllers");

const router = express.Router();

router.post('/reminder-email',ReminderController.sendEmail);
router.get('/emails', ReminderController.fetchEmail);
router.post('/email', ReminderController.createNotification)

module.exports = router;
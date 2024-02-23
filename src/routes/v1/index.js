const express = require("express");
const { ReminderController } = require("../../controllers");

const router = express.Router();

router.post('/reminder-email',ReminderController.sendEmail)

module.exports = router;
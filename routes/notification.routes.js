const express = require('express');
const router = express.Router();
const NotificationController = require('../controllers/notification.controller');

router.post('/', NotificationController.createNotification);
router.get('/:user_id', NotificationController.getNotification);
router.put('/:notification_id/read', NotificationController.markAsRead);

module.exports = router;

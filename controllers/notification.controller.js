const notificationService = require('../services/notification.service')

class NotificationController {
    async createNotification(req, res){
        const {user_id, content} = req.params;
    try {
        await notificationService.createNotification(user_id, content);
        return res.status(201).json({message: 'Notification created successfully'});
    } catch (error) {
        res.status(500).json({message: 'Failed to create Notification'});
    }
    }
    async getNotification(req, res){
        const {user_id} = req.params;
        try {
            const notification = await notificationService.getNotifications(user_id);
            res.status(201).json(notification);
        } catch (error) {
            res.status(500).json({message: 'Error to get'});
        }
    }
    async markAsRead(req, res){
        const {notification_id} = req.params;
        try {
            await notificationService.markAsRead(notification_id);
            res.status(201).json({message: 'Notification marked as read'});
        } catch (error) {
            res.status(500).json({message: 'Marked Error'});
        }
    }

}
module.exports = new NotificationController();
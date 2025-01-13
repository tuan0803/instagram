
const db = require('../config/db'); 
const Notification = require('../models/Notification')
class NotificationService {
  
  async createNotification(user_id, content, actor_id, type, post_id = null) {
        try {
            const notification = await Notification.create({
                user_id,
                content,
                actor_id,
                type,
                post_id
            });
            return notification;
        } catch (error) {
            throw new Error('Error create Notification'+ error.message);
        }
  }

  
  async getNotifications(user_id) {
    try {
        const notification = await Notification.findAll({
            where: { user_id: user_id },
            order: [['create_at', 'DESC']],
        });
        return notification;
    } catch (error) {
            throw new Error('Cant get Notification'+ error.message);
    }
  }

  
  async markAsRead(notification_id) {
    try {
        const notification = await Notification.update(
            { status : read},
            { where: { notification_id: notification_id } }
        );
        return notification;
    } catch (error) {
            throw new Error('Error mark'+ error.message);
    }
  }

  async markAllasRead(user_id){
    try {
        await Notification.update(
            { status : read},
            { where: { user_id, status: 'unread' } }
        )
    } catch (error) {
        throw new Error ('Error mark all'+ error.message);
    }
  }
}  

module.exports = new NotificationService();

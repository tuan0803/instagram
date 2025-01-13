
const db = require('../config/db'); 

class NotificationService {
  
  async createNotification(userId, content) {
    const query = `INSERT INTO notification (user_id, content) VALUES (?, ?)`;
    await db.execute(query, [userId, content]);
  }

  
  async getNotifications(userId) {
    const query = `SELECT * FROM notification WHERE user_id = ? ORDER BY created_at DESC`;
    const [notifications] = await db.execute(query, [userId]);
    return notifications;
  }

  
  async markAsRead(notificationId) {
    const query = `UPDATE notification SET status = 'read' WHERE notification_id = ?`;
    await db.execute(query, [notificationId]);
  }
}

module.exports = new NotificationService();

const { DataTypes } = require('sequelize');
const db = require('../config/db');
const User = require('./User'); 
const Post = require('./Post'); 

const Notification = db.define('Notification', {
  notification_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  actor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('like', 'comment', 'follow'),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('unread', 'read'),
    defaultValue: 'unread',
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'notification',
  timestamps: false,
});
Notification.belongsTo(User, { as: 'actor', foreignKey: 'actor_id' });
Notification.belongsTo(Post, { as: 'post', foreignKey: 'post_id' });
module.exports = Notification;

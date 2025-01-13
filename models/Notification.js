module.exports = (sequelize, DataTypes) => {
    const Notification = sequelize.define('Notification', {
      notification_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('unread', 'read'),
        defaultValue: 'unread'
      },
      created_at: {
        type: DataTypes.TIMESTAMP
      },
      updated_at: {
        type: DataTypes.TIMESTAMP
      }
    }, {
      tableName: 'notification',
      timestamps: false
    });
  
    Notification.associate = (models) => {
      Notification.belongsTo(models.User, { foreignKey: 'user_id' });
    };
  
    return Notification;
  };
  
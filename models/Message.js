module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
      message_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      sender_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      receiver_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      media_url: {
        type: DataTypes.STRING(255)
      },
      created_at: {
        type: DataTypes.TIMESTAMP
      },
      updated_at: {
        type: DataTypes.TIMESTAMP
      }
    }, {
      tableName: 'message',
      timestamps: false
    });
  
    Message.associate = (models) => {
      Message.belongsTo(models.User, { foreignKey: 'sender_id', as: 'sender' });
      Message.belongsTo(models.User, { foreignKey: 'receiver_id', as: 'receiver' });
    };
  
    return Message;
  };
  
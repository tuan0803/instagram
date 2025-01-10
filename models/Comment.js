module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
      comment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      created_at: {
        type: DataTypes.TIMESTAMP
      },
      updated_at: {
        type: DataTypes.TIMESTAMP
      }
    }, {
      tableName: 'comment',
      timestamps: false
    });
  
    Comment.associate = (models) => {
      Comment.belongsTo(models.User, { foreignKey: 'user_id' });
      Comment.belongsTo(models.Post, { foreignKey: 'post_id' });
    };
  
    return Comment;
  };
  
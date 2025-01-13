module.exports = (sequelize, DataTypes) => {
    const Like = sequelize.define('Like', {
      like_id: {
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
      created_at: {
        type: DataTypes.TIMESTAMP
      }
    }, {
      tableName: 'like',
      timestamps: false
    });
  
    Like.associate = (models) => {
      Like.belongsTo(models.User, { foreignKey: 'user_id' });
      Like.belongsTo(models.Post, { foreignKey: 'post_id' });
    };
  
    return Like;
  };
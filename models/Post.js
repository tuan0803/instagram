module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
      post_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      caption: {
        type: DataTypes.TEXT
      },
      created_at: {
        type: DataTypes.TIMESTAMP
      },
      updated_at: {
        type: DataTypes.TIMESTAMP
      }
    }, {
      tableName: 'post',
      timestamps: false
    });
  
    Post.associate = (models) => {
      Post.belongsTo(models.User, { foreignKey: 'user_id' });
    };
  
    return Post;
  };
module.exports = Post;
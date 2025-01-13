module.exports = (sequelize, DataTypes) => {
    const Media = sequelize.define('Media', {
      media_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      media_url: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      media_type: {
        type: DataTypes.ENUM('image', 'video'),
        allowNull: false
      },
      created_at: {
        type: DataTypes.TIMESTAMP
      },
      updated_at: {
        type: DataTypes.TIMESTAMP
      }
    }, {
      tableName: 'media',
      timestamps: false
    });
  
    Media.associate = (models) => {
      Media.belongsTo(models.Post, { foreignKey: 'post_id' });
    };
  
    return Media;
  };
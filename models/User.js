module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
      },
      full_name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      profile_picture: {
        type: DataTypes.STRING(255)
      },
      bio: {
        type: DataTypes.TEXT
      },
      is_private: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      role: {
        type: DataTypes.ENUM('USER', 'EMPLOYEE', 'ADMIN'),
        defaultValue: 'USER'
      },
      created_at: {
        type: DataTypes.TIMESTAMP
      },
      updated_at: {
        type: DataTypes.TIMESTAMP
      }
    }, {
      tableName: 'user',
      timestamps: false
    });
  
    return User;
  };
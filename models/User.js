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
        unique: true,
        validate: {
          notEmpty: { msg: 'Username is required.' }, 
          len: {
            args: [3, 50], 
            msg: 'Username must be between 3 and 50 characters.',
          },
        },
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: { msg: 'Email is required.' },
          isEmail: { msg: 'Email format is invalid.' },
        },
      },
      full_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Full name is required.' },
          len: {
            args: [8, 255], 
            msg: 'Full name must be between 8 and 255 characters.',
          },
        },
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Password is required.' }, 
          len: {
            args: [8], 
            msg: 'Password must be at least 8 characters long.',
          },
        },
      },
      profile_picture: {
        type: DataTypes.STRING(255),
        allowNull: true,
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
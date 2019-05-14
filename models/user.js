module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define("user", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    firstName: {
      type: Sequelize.STRING,
      notEmpty: true,
      allowNull: false,
      len: [2, 30]
    },

    lastName: {
      type: Sequelize.STRING,
      notEmpty: true,
      allowNull: false,
      len: [2, 30]
    },

    username: {
      type: Sequelize.TEXT,
      notEmpty: true,
      allowNull: false,
      len: [2, 30]
    },

    email: {
      type: Sequelize.STRING,
      notEmpty: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: Sequelize.STRING,
      notEmpty: true,
      allowNull: false,
      len: [6, 18]
    },

    lastLogin: {
      type: Sequelize.DATE
    },

    status: {
      type: Sequelize.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });

  User.associate = function(models) {
    User.hasMany(models.rating);
  };

  User.associate = function(models) {
    User.hasMany(models.story);
  };

  return User;
};

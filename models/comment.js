module.exports = function(sequelize, Sequelize) {
  var Comment = sequelize.define("comment", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    comment: {
      type: Sequelize.TEXT
    }
  });

  //Foreign key creation

  Comment.associate = function(models) {
    Comment.belongsTo(models.user);
  };
  Comment.associate = function(models) {
    Comment.belongsTo(models.story);
  };
  return Comment;
};

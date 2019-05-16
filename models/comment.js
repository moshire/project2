module.exports = function(sequelize, Sequelize) {
  var Comment = sequelize.define("comment", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    comment: {
      type: Sequelize.INTEGER
    }
  });

  //Foreign key creation
  Comment.associate = function(models) {
    Comment.belongsTo(models.story);
  };
  Comment.associate = function(models) {
    Comment.belongsTo(models.user);
  };
  return Comment;
};

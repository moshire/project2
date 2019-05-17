module.exports = function(sequelize, Sequelize) {
  var Rating = sequelize.define("rating", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    rating: {
      type: Sequelize.INTEGER
    }
  });

  //Foreign key creation
  // Rating.associate = function(models) {
  //   Rating.belongsTo(models.user);
  // };

  // Rating.associate = function(models) {
  //   Rating.belongsTo(models.story);
  // };


  // Comment.associate = function(models) {
  //   Comment.belongsTo(models.user);
  // };
  // Comment.associate = function(models) {
  //   Comment.belongsTo(models.story);
  // };
  return Rating;
};

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
  //   Rating.hasOne(models.user);
  // };

  // Rating.associate = function(models) {
  //   Rating.belongsToMany(models.story);
  // };

  return Rating;
};

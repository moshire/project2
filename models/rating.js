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
  Rating.associate = function(models) {
    Rating.belongsTo(models.user, {
      onDelete: "cascade"
    });
  };

  Rating.associate = function(models) {
    Rating.belongsTo(models.story, {
      onDelete: "cascade"
    });
  };
  return Rating;
};

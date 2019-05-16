module.exports = function(sequelize, Sequelize) {
  var Story = sequelize.define(
    "story",
    {
      // the routeName gets saved as a string
      routeName: Sequelize.STRING,

      // the story's title (a string)
      title: Sequelize.STRING,
      // the story's text (text)
      story: Sequelize.TEXT,
      //the story's overall rating
      overallRating: Sequelize.INTEGER
    },
    {
      // disable the modification of tablenames; By default, sequelize will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      freezeTableName: true
    }
  );

  Story.associate = function(models) {
    Story.hasOne(models.rating);
  };

  Story.associate = function(models) {
    Story.hasOne(models.comment);
  };

  Story.associate = function(models) {
    Story.belongsTo(models.user);
  };
  return Story;
};

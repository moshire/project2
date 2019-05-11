module.exports = function(sequelize, Sequelize) {
  var story = sequelize.define(
    "story",
    {
      // the routeName gets saved as a string
      routeName: Sequelize.STRING,
      // the name of the user (a string)
      name: Sequelize.STRING,
      // the story's title (a string)
      title: Sequelize.STRING,
      // the story's summary (a string)
      story: Sequelize.STRING
    },
    {
      // disable the modification of tablenames; By default, sequelize will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      freezeTableName: true
    }
  );
  return story;
};

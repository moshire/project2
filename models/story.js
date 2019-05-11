module.exports = function(sequelize, Sequelize) {
  var Story = sequelize.define(
    "story",
    {
      // the routeName gets saved as a string
      routeName: Sequelize.STRING,
      // the name of the user (a string)
      name: Sequelize.STRING,
      // the story's title (a string)
      title: Sequelize.STRING,
      // the story's text (text)
      Story: Sequelize.TEXT
    },
    {
      // disable the modification of tablenames; By default, sequelize will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      freezeTableName: true
    }
  );

  return Story;
};

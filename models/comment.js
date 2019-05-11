module.exports = function(sequelize, Sequelize) {
  var Comment = sequelize.define(
    "comment",
    {
      // the userID gets saved as an integer
      userId: Sequelize.INTEGER,
      // the userId of the user (integer)
      storyId: Sequelize.INTEGER,
      // the story's title (a TEXT)
      comment: Sequelize.TEXT
    },
    {
      // disable the modification of tablenames; By default, sequelize will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      freezeTableName: true
    }
  );

  return Comment;
};

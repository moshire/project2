// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection");

// Creates a "story" model that matches up with DB
var story = sequelize.define("story", {
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,
  // the name of the user (a string)
  name: Sequelize.STRING,
  // the story's title (a string)
  title: Sequelize.STRING,
  // the story's summary (a string)
  summary: Sequelize.STRING,
  
  
}, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});

// Syncs with DB
story.sync();

// Makes the story Model available for other files (will also create a table)
module.exports = story;
